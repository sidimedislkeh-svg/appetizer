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
  // ─── FRESH JUICES / عصائر طبيعية ───────────────────────────

{
  id: 1,
  category: "drinks",
  image: "kiwi.webp",
  price: 180,
  ar: { name: "عصير كيوي", description: "عصير كيوي طبيعي ومنعش" },
  fr: { name: "Jus Kiwi", description: "Jus de kiwi naturel et rafraîchissant" },
  en: { name: "Kiwi Juice", description: "Fresh natural kiwi juice" }
},

{
  id: 2,
  category: "drinks",
  image: "strawberry.webp",
  price: 150,
  ar: { name: "عصير فراولة", description: "عصير فراولة طبيعي ومنعش" },
  fr: { name: "Jus Fraise", description: "Jus de fraise naturel et rafraîchissant" },
  en: { name: "Strawberry Juice", description: "Fresh natural strawberry juice" }
},

{
  id: 3,
  category: "drinks",
  image: "pineapple.webp",
  price: 180,
  ar: { name: "عصير أناناس", description: "عصير أناناس طبيعي ومنعش" },
  fr: { name: "Jus Ananas", description: "Jus d'ananas naturel et rafraîchissant" },
  en: { name: "Pineapple Juice", description: "Fresh natural pineapple juice" }
},

{
  id: 4,
  category: "drinks",
  image: "avocado.webp",
  price: 180,
  ar: { name: "عصير أفوكادو", description: "عصير أفوكادو طبيعي وكريمي" },
  fr: { name: "Jus Avocat", description: "Jus d'avocat naturel et crémeux" },
  en: { name: "Avocado Juice", description: "Natural creamy avocado juice" }
},

{
  id: 5,
  category: "drinks",
  image: "appetizer.webp",
  price: 200,
  ar: { name: "عصير Appetizer", description: "مزيج فواكه طبيعي خاص بالمطعم" },
  fr: { name: "Jus Appetizer", description: "Mélange de fruits spécial de la maison" },
  en: { name: "Appetizer Special Juice", description: "House special fresh fruit blend" }
},

  // ─── SNACKS / سناك ──────────────────────────────────────────────────────────
 {
  id: 1,
  category: "snacks",
  image: "cheeseburger.webp",
  price: 200,
  ar: { name: "تشيز برغر", description: "برغر لحم بقري مع جبن شيدر وخس وطماطم وصلصة خاصة" },
  fr: { name: "Cheeseburger", description: "Burger de bœuf avec cheddar, salade, tomate et sauce maison" },
  en: { name: "Cheeseburger", description: "Beef burger with cheddar cheese, lettuce, tomato and house sauce" }
},

{
  id: 2,
  category: "snacks",
  image: "meat-sandwich.webp",
  price: 180,
  ar: { name: "ساندويتش لحم", description: "شرائح لحم مشوية مع الخس والطماطم وصلصة خاصة" },
  fr: { name: "Sandwich Viande", description: "Sandwich garni de viande grillée, salade, tomate et sauce maison" },
  en: { name: "Meat Sandwich", description: "Grilled meat sandwich with lettuce, tomato and house sauce" }
},

{
  id: 3,
  category: "snacks",
  image: "pizza-margherita.webp",
  price: 200,
  ar: { name: "بيتزا مارغريتا", description: "بيتزا بصلصة الطماطم وجبن الموزاريلا والأوريغانو" },
  fr: { name: "Pizza Margherita", description: "Pizza à la sauce tomate, mozzarella et origan" },
  en: { name: "Margherita Pizza", description: "Classic pizza with tomato sauce, mozzarella and oregano" }
},

{
  id: 4,
  category: "snacks",
  image: "pizza-tuna.webp",
  price: 250,
  ar: { name: "بيتزا تونة", description: "بيتزا بالتونة وجبن الموزاريلا وصلصة الطماطم" },
  fr: { name: "Pizza Thon", description: "Pizza au thon, mozzarella et sauce tomate" },
  en: { name: "Tuna Pizza", description: "Pizza topped with tuna, mozzarella and tomato sauce" }
},

  // ─── DISHES / الأطباق ────────────────────────────────────────────────────────
 {
  id: 1,
  category: "dishes",
  image: "sole.webp",
  price: 480,
  ar: { name: "سمك سول مونيير", description: "فيليه سمك سول مشوي مع صلصة المونيير والزبدة والليمون" },
  fr: { name: "Sole Meunière", description: "Filet de sole préparé à la sauce meunière au beurre et citron" },
  en: { name: "Sole Meunière", description: "Sole fillet served with classic butter and lemon meunière sauce" }
},

{
  id: 2,
  category: "dishes",
  image: "seafood-mix.webp",
  price: 650,
  ar: { name: "مشكل فواكه البحر", description: "تشكيلة من المأكولات البحرية الطازجة المشوية" },
  fr: { name: "Fruits de Mer Mix", description: "Assortiment de fruits de mer frais grillés" },
  en: { name: "Mixed Seafood", description: "Selection of fresh grilled seafood" }
},

{
  id: 3,
  category: "dishes",
  image: "fillet-grille.webp",
  price: 600,
  ar: { name: "فيليه مشوي", description: "فيليه مشوي يقدم مع خضروات موسمية وصلصة خاصة" },
  fr: { name: "Filet Grillé", description: "Filet grillé accompagné de légumes de saison et sauce maison" },
  en: { name: "Grilled Fillet", description: "Grilled fillet served with seasonal vegetables and house sauce" }
},

{
  id: 4,
  category: "dishes",
  image: "lamb-chops.webp",
  price: 640,
  ar: { name: "ريش لحم الضأن", description: "ريش ضأن مشوية تقدم مع البطاطس والخضروات" },
  fr: { name: "Côtelette d’Agneau", description: "Côtelettes d'agneau grillées servies avec pommes de terre et légumes" },
  en: { name: "Lamb Chops", description: "Grilled lamb chops served with potatoes and seasonal vegetables" }
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
    image:" grape-shisha.webp",
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
 
