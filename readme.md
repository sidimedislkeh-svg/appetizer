# APPETIZER — Digital Menu

A static, mobile-first digital menu for **APPETIZER** restaurant.  
Trilingual: Arabic (RTL) · French · English.

---

## 📁 Project Structure

```
appetizer/
├── index.html          Homepage with 6 category cards
├── drinks.html
├── snacks.html
├── dishes.html
├── desserts.html
├── breakfast.html
├── shisha.html
├── style.css           All styles
├── script.js           Language switching + product rendering
├── products.js         ← YOUR MENU DATA (edit this file)
└── images/             ← YOUR IMAGES go here (.webp format)
    ├── logo.webp
    ├── cover-drinks.webp
    ├── cover-snacks.webp
    ├── cover-dishes.webp
    ├── cover-desserts.webp
    ├── cover-breakfast.webp
    ├── cover-shisha.webp
    └── (product images...)
```

---

## ✏️ How to Add Products

Open **`products.js`** and add an entry to the `products` array:

```js
{
  id: 20,                      // unique number
  category: "drinks",          // drinks | snacks | dishes | desserts | breakfast | shisha
  image: "mango-juice.webp",   // filename inside /images/
  price: 35,                   // number only
  ar: { name: "عصير مانجو", description: "عصير مانجو طازج بارد" },
  fr: { name: "Jus de mangue", description: "Jus de mangue fraîche" },
  en: { name: "Mango Juice",   description: "Fresh cold mango juice" }
},
```

Then place `mango-juice.webp` inside the `images/` folder. Done ✅

---

## 🖼️ Images

- Format: **WebP** recommended (smaller, faster)
- Recommended size: **600 × 400 px** for products, **800 × 500 px** for category covers
- Naming: no spaces, lowercase, e.g. `chocolate-cake.webp`

### Category Cover Images (shown on homepage)
| File                    | Category |
|-------------------------|----------|
| `cover-drinks.webp`     | Drinks   |
| `cover-snacks.webp`     | Snacks   |
| `cover-dishes.webp`     | Dishes   |
| `cover-desserts.webp`   | Desserts |
| `cover-breakfast.webp`  | Breakfast|
| `cover-shisha.webp`     | Shisha   |

---

## 💱 Currency

In `products.js`, change this line:

```js
const CURRENCY = "MAD"; // → "DH", "SAR", "$", "€", etc.
```

---

## 🚀 Deploy to Netlify

1. Push this folder to a GitHub repository
2. Go to [netlify.com](https://netlify.com) → **Add new site** → **Import from Git**
3. Select your repo, leave build settings empty (static site)
4. Click **Deploy** — your menu is live!

Or drag-and-drop the folder onto Netlify's dashboard for instant hosting.

---

## 🌐 Languages

- **Arabic** — RTL layout, Cairo font
- **Français** — LTR layout
- **English** — LTR layout

Language preference is saved in `localStorage` and remembered on return visits.