/**
 * APPETIZER — script.js
 * Handles: language switching (AR/FR/EN), RTL/LTR, product rendering
 */

// ── Language Config ─────────────────────────────────────────
const LANGS = {
  ar: {
    dir: "rtl",
    labels: {
      drinks:    "مشروبات",
      snacks:    "سناك",
      dishes:    "الأطباق",
      desserts:  "تحلية",
      breakfast: "فطور صباح",
      shisha:    "شيشة",
      back:      "العودة",
      empty:     "لا توجد منتجات في هذا القسم حتى الآن."
    }
  },
  fr: {
    dir: "ltr",
    labels: {
      drinks:    "Boissons",
      snacks:    "Snacks",
      dishes:    "Plats",
      desserts:  "Desserts",
      breakfast: "Petit déjeuner",
      shisha:    "Chicha",
      back:      "Retour",
      empty:     "Aucun produit dans cette catégorie pour l'instant."
    }
  },
  en: {
    dir: "ltr",
    labels: {
      drinks:    "Drinks",
      snacks:    "Snacks",
      dishes:    "Dishes",
      desserts:  "Desserts",
      breakfast: "Breakfast",
      shisha:    "Shisha",
      back:      "Back",
      empty:     "No products in this category yet."
    }
  }
};

// Category cover images (used on index page) — update paths to your own images
const CAT_COVERS = {
  drinks:    "cover-drinks.webp",
  snacks:    "cover-snacks.webp",
  dishes:    "cover-dishes.webp",
  desserts:  "cover-desserts.webp",
  breakfast: "cover-breakfast.webp",
  shisha:    "cover-shisha.webp"
};

// Category icons (emoji fallback — replace with SVG if desired)
const CAT_ICONS = {
  drinks:    "☕",
  snacks:    "🍟",
  dishes:    "🍽️",
  desserts:  "🎂",
  breakfast: "🌅",
  shisha:    "💨"
};

// ── State ───────────────────────────────────────────────────
let currentLang = localStorage.getItem("appetizer_lang") || "ar";

// ── Init ────────────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
  applyLang(currentLang);
  bindLangButtons();

  // Index page: render category grid
  const grid = document.getElementById("categories-grid");
  if (grid) renderCategoryGrid(grid);

  // Category page: render products
  const productsGrid = document.getElementById("products-grid");
  if (productsGrid) {
    const cat = productsGrid.dataset.category;
    renderProducts(productsGrid, cat);
  }

  // Back button
  const backBtn = document.getElementById("back-btn");
  if (backBtn) {
    backBtn.addEventListener("click", () => {
      history.length > 1 ? history.back() : (window.location.href = "index.html");
    });
    updateBackButton(backBtn);
  }
});

// ── Language ─────────────────────────────────────────────────
function applyLang(lang) {
  currentLang = lang;
  localStorage.setItem("appetizer_lang", lang);

  const config = LANGS[lang];
  document.documentElement.lang = lang;
  document.body.dir = config.dir;

  // Update lang button states
  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });

  // Update all [data-i18n] elements
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    if (config.labels[key]) el.textContent = config.labels[key];
  });

  // Re-render dynamic content if present
  const grid = document.getElementById("categories-grid");
  if (grid) renderCategoryGrid(grid);

  const productsGrid = document.getElementById("products-grid");
  if (productsGrid) renderProducts(productsGrid, productsGrid.dataset.category);

  const backBtn = document.getElementById("back-btn");
  if (backBtn) updateBackButton(backBtn);
}

function bindLangButtons() {
  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.addEventListener("click", () => applyLang(btn.dataset.lang));
  });
}

function updateBackButton(btn) {
  const span = btn.querySelector(".back-label");
  if (span) span.textContent = LANGS[currentLang].labels.back;
}

// ── Category Grid (index) ──────────────────────────────────
const CAT_ORDER = ["drinks", "snacks", "dishes", "desserts", "breakfast", "shisha"];
const CAT_PAGES = {
  drinks:    "drinks.html",
  snacks:    "snacks.html",
  dishes:    "dishes.html",
  desserts:  "desserts.html",
  breakfast: "breakfast.html",
  shisha:    "shisha.html"
};

function renderCategoryGrid(container) {
  const lang = LANGS[currentLang];
  container.innerHTML = CAT_ORDER.map(cat => {
    const cover = CAT_COVERS[cat];
    const icon  = CAT_ICONS[cat];
    const name  = lang.labels[cat];
    const href  = CAT_PAGES[cat];

    return `
      <a class="cat-card" href="${href}" aria-label="${name}">
        <div class="cat-img-wrap">
          <img
            src="${cover}"
            alt="${name}"
            loading="lazy"
            onerror="this.parentElement.innerHTML='<div class=\\'cat-img-placeholder\\'>${icon}</div>'"
          />
        </div>
        <div class="cat-footer">
          <span class="cat-icon" aria-hidden="true">${icon}</span>
          <span class="cat-name">${name}</span>
          <span class="cat-arrow" aria-hidden="true">→</span>
        </div>
      </a>`;
  }).join("");
}

// ── Product Grid (category pages) ─────────────────────────
function renderProducts(container, category) {
  if (typeof products === "undefined") {
    container.innerHTML = `<p class="empty-state">products.js not loaded.</p>`;
    return;
  }

  const filtered = products.filter(p => p.category === category);
  const lang     = LANGS[currentLang];
  const labels   = lang.labels;

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="empty-state" style="grid-column:1/-1">
        <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/>
          <line x1="12" y1="16" x2="12.01" y2="16"/>
        </svg>
        <p>${labels.empty}</p>
      </div>`;
    return;
  }

  container.innerHTML = filtered.map(p => {
    const info  = p[currentLang] || p.en;
    const price = `${p.price} ${CURRENCY}`;
    const img   = p.image ? p.image : "";

    return `
      <div class="product-card">
        <div class="product-img-wrap">
          ${img
            ? `<img src="${img}" alt="${info.name}" loading="lazy"
                onerror="this.parentElement.innerHTML='<div class=\\'product-img-placeholder\\'>${CAT_ICONS[p.category]}</div>'">`
            : `<div class="product-img-placeholder">${CAT_ICONS[p.category]}</div>`
          }
        </div>
        <div class="product-body">
          <p class="product-name">${info.name}</p>
          <p class="product-desc">${info.description}</p>
          <div class="product-price-row">
            <span class="product-price">${price}</span>
          </div>
        </div>
      </div>`;
  }).join("");
}
