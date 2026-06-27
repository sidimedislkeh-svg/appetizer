/**
 * APPETIZER - Digital Menu
 * ========================
 * Add your products here. Each product needs:
 *   - id:          unique number
 *   - category:    "drinks" | "snacks" | "dishes" | "desserts" | "breakfast" | "shisha"
 *   - image:       filename inside /images/ folder (e.g. "latte.webp")
 *   - price:       number (in your local currency)
 *   - ar: { name, description }   — Arabic text
 *   - fr: { name, description }   — French text
 *   - en: { name, description }   — English text
 *
 * Example of adding a new item:
 * {
 *   id: 20,
 *   category: "drinks",
 *   image: "mango-juice.webp",
 *   price: 35,
 *   ar: { name: "عصير مانجو", description: "عصير مانجو طازج بارد" },
 *   fr: { name: "Jus de mangue", description: "Jus de mangue fraîche et froide" },
 *   en: { name: "Mango Juice", description: "Fresh cold mango juice" }
 * },
 */

const CURRENCY = "MRU"; // Change to your currency symbol e.g. "DH", "SAR", "$"

const products = [

  // ─── DRINKS / مشروبات ───────────────────────────────────────────────────────
  {
    id: 1,
    category: "drinks",
    image: "espresso.webp",
    price: 18,
    ar: { name: "إسبريسو", description: "قهوة إسبريسو إيطالية مركزة وقوية" },
    fr: { name: "Espresso", description: "Café espresso italien intense et corsé" },
    en: { name: "Espresso", description: "Intense Italian-style espresso shot" }
  },
  {
    id: 2,
    category: "drinks",
    image: "latte.webp",
    price: 28,
    ar: { name: "لاتيه", description: "قهوة ناعمة مع حليب مبخر وقشدة" },
    fr: { name: "Latte", description: "Café doux avec lait vapeur et mousse" },
    en: { name: "Latte", description: "Smooth espresso with steamed milk and foam" }
  },
  {
    id: 3,
    category: "drinks",
    image: "orange-juice.webp",
    price: 25,
    ar: { name: "عصير برتقال طازج", description: "عصير برتقال طبيعي 100% طازج" },
    fr: { name: "Jus d'orange frais", description: "Jus d'orange 100% naturel pressé" },
    en: { name: "Fresh Orange Juice", description: "100% natural freshly squeezed orange juice" }
  },

  // ─── SNACKS / سناك ──────────────────────────────────────────────────────────
  {
    id: 4,
    category: "snacks",
    image: "burger.webp",
    price: 65,
    ar: { name: "برغر كلاسيك", description: "برغر لحم بقري مع جبن وخس وطماطم وصلصة خاصة" },
    fr: { name: "Burger Classic", description: "Burger bœuf avec fromage, salade, tomate et sauce maison" },
    en: { name: "Classic Burger", description: "Beef burger with cheese, lettuce, tomato and house sauce" }
  },
  {
    id: 5,
    category: "snacks",
    image: "fries.webp",
    price: 25,
    ar: { name: "بطاطس مقلية", description: "بطاطس مقرمشة مع صلصة الكاتشب" },
    fr: { name: "Frites croustillantes", description: "Frites dorées croustillantes avec ketchup" },
    en: { name: "Crispy Fries", description: "Golden crispy fries served with ketchup" }
  },
  {
    id: 6,
    category: "snacks",
    image: "club-sandwich.webp",
    price: 55,
    ar: { name: "كلوب ساندويش", description: "ساندويش ثلاثي بالدجاج والجبن والخضروات" },
    fr: { name: "Club Sandwich", description: "Sandwich triple au poulet, fromage et légumes frais" },
    en: { name: "Club Sandwich", description: "Triple-decker sandwich with chicken, cheese and fresh veggies" }
  },

  // ─── DISHES / الأطباق ────────────────────────────────────────────────────────
  {
    id: 7,
    category: "dishes",
    image: "salmon.webp",
    price: 120,
    ar: { name: "سلمون مشوي", description: "سلمون مشوي مع خضروات موسمية وصلصة الليمون" },
    fr: { name: "Saumon grillé", description: "Saumon grillé avec légumes de saison et sauce citron" },
    en: { name: "Grilled Salmon", description: "Grilled salmon fillet with seasonal vegetables and lemon sauce" }
  },
  {
    id: 8,
    category: "dishes",
    image: "pasta.webp",
    price: 75,
    ar: { name: "باستا كريمية", description: "باستا بالكريمة والدجاج والفطر والأعشاب الإيطالية" },
    fr: { name: "Pasta crémeuse", description: "Pasta à la crème avec poulet, champignons et herbes italiennes" },
    en: { name: "Creamy Pasta", description: "Pasta in cream sauce with chicken, mushrooms and Italian herbs" }
  },
  {
    id: 9,
    category: "dishes",
    image: "steak.webp",
    price: 150,
    ar: { name: "ستيك لحم", description: "ستيك بقري مع بطاطس وصلصة الفلفل الأسود" },
    fr: { name: "Steak de bœuf", description: "Steak de bœuf avec pommes de terre et sauce poivre noir" },
    en: { name: "Beef Steak", description: "Premium beef steak with potatoes and black pepper sauce" }
  },

  // ─── DESSERTS / تحلية ────────────────────────────────────────────────────────
  {
    id: 10,
    category: "desserts",
    image: "chocolate-cake.webp",
    price: 40,
    ar: { name: "كيك الشوكولاتة", description: "كيك شوكولاتة داكنة مع صلصة الشوكولاتة الساخنة" },
    fr: { name: "Gâteau chocolat", description: "Gâteau au chocolat noir avec sauce chocolat chaude" },
    en: { name: "Chocolate Cake", description: "Rich dark chocolate cake with hot chocolate sauce" }
  },
  {
    id: 11,
    category: "desserts",
    image: "tiramisu.webp",
    price: 45,
    ar: { name: "تيراميسو", description: "تيراميسو إيطالي كلاسيكي بالقهوة والقشدة" },
    fr: { name: "Tiramisu", description: "Tiramisu italien classique au café et à la crème mascarpone" },
    en: { name: "Tiramisu", description: "Classic Italian tiramisu with coffee and mascarpone cream" }
  },
  {
    id: 12,
    category: "desserts",
    image: "cheesecake.webp",
    price: 42,
    ar: { name: "تشيز كيك", description: "تشيز كيك كريمي بالفراولة الطازجة" },
    fr: { name: "Cheesecake", description: "Cheesecake crémeux aux fraises fraîches" },
    en: { name: "Cheesecake", description: "Creamy cheesecake topped with fresh strawberries" }
  },

  // ─── BREAKFAST / فطور صباح ────────────────────────────────────────────────────
  {
    id: 13,
    category: "breakfast",
    image: "full-breakfast.webp",
    price: 70,
    ar: { name: "فطور كامل", description: "بيض مقلي، خبز مشوي، جبن، زيتون وعصير برتقال" },
    fr: { name: "Petit déjeuner complet", description: "Œufs frits, pain grillé, fromage, olives et jus d'orange" },
    en: { name: "Full Breakfast", description: "Fried eggs, toast, cheese, olives and orange juice" }
  },
  {
    id: 14,
    category: "breakfast",
    image: "pancakes.webp",
    price: 45,
    ar: { name: "بانكيك بالعسل", description: "بانكيك طري بالعسل الطبيعي والزبدة" },
    fr: { name: "Pancakes au miel", description: "Pancakes moelleux au miel naturel et beurre" },
    en: { name: "Honey Pancakes", description: "Fluffy pancakes with natural honey and butter" }
  },
  {
    id: 15,
    category: "breakfast",
    image: "avocado-toast.webp",
    price: 55,
    ar: { name: "توست أفوكادو", description: "خبز مشوي بالأفوكادو الطازج والبيض المسلوق والطماطم" },
    fr: { name: "Toast avocat", description: "Pain grillé à l'avocat frais, œuf poché et tomates" },
    en: { name: "Avocado Toast", description: "Toasted bread with fresh avocado, poached egg and tomatoes" }
  },

  // ─── SHISHA / شيشة ───────────────────────────────────────────────────────────
  {
    id: 16,
    category: "shisha",
    image: "shisha-mint.webp",
    price: 80,
    ar: { name: "شيشة نعناع", description: "شيشة فاخرة بنكهة النعناع المنعش" },
    fr: { name: "Chicha menthe", description: "Chicha premium à la menthe fraîche et rafraîchissante" },
    en: { name: "Mint Shisha", description: "Premium shisha with fresh and refreshing mint flavor" }
  },
  {
    id: 17,
    category: "shisha",
    image: "shisha-grape.webp",
    price: 80,
    ar: { name: "شيشة عنب", description: "شيشة فاخرة بنكهة العنب الحلو" },
    fr: { name: "Chicha raisin", description: "Chicha premium à la saveur de raisin doux" },
    en: { name: "Grape Shisha", description: "Premium shisha with sweet grape flavor" }
  },
  {
    id: 18,
    category: "shisha",
    image: "shisha-mixed.webp",
    price: 90,
    ar: { name: "شيشة مكسد", description: "مزيج خاص من نكهات متعددة بتوصية الشيف" },
    fr: { name: "Chicha mixte", description: "Mélange spécial de plusieurs saveurs, recommandé par le chef" },
    en: { name: "Mixed Shisha", description: "Special blend of multiple flavors, chef's recommendation" }
  }

];