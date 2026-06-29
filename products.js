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
  id: 1,
  category: "desserts",
  image: "cream-puff.webp",
  price: 200,
  ar: { name: "كريمة باف", description: "عجينة خفيفة محشوة بكريمة الفانيليا الطازجة" },
  fr: { name: "Crème Puff", description: "Pâte légère garnie d'une crème pâtissière onctueuse" },
  en: { name: "Cream Puff", description: "Light pastry filled with smooth vanilla cream" }
},

{
  id: 2,
  category: "desserts",
  image: "brownies.webp",
  price: 200,
  ar: { name: "براونيز", description: "كيك شوكولاتة غني بقوام طري ولذيذ" },
  fr: { name: "Brownies", description: "Gâteau au chocolat fondant et gourmand" },
  en: { name: "Brownies", description: "Rich and fudgy chocolate brownie" }
},

{
  id: 3,
  category: "desserts",
  image: "flan-caramel.webp",
  price: 180,
  ar: { name: "فلان كراميل", description: "فلان كريمي مغطى بصلصة الكراميل" },
  fr: { name: "Flan Caramel", description: "Flan crémeux nappé d'un caramel fondant" },
  en: { name: "Caramel Flan", description: "Creamy custard topped with smooth caramel sauce" }
},

{
  id: 4,
  category: "desserts",
  image: "crepe-nutella.webp",
  price: 120,
  ar: { name: "كريب نوتيلا", description: "كريب طازج محشو بنوتيلا ويقدم ساخناً" },
  fr: { name: "Crêpe Nutella", description: "Crêpe fraîche garnie de Nutella, servie chaude" },
  en: { name: "Nutella Crepe", description: "Fresh crepe filled with Nutella and served warm" }
},

  // ─── BREAKFAST / فطور صباح ────────────────────────────────────────────────────
{
  id: 8,
  category: "breakfast",
  image: "french-breakfast.webp",
  price: 400,
  ar: {
    name: "فطور فرنسي",
    description: "سلة معجنات فرنسية، مشروب ساخن، عصير برتقال، مياه معدنية، سلطة فواكه، أومليت، وبروفيترول"
  },
  fr: {
    name: "Petit Déjeuner Français",
    description: "Panier de viennoiseries, boisson chaude, jus d'orange, eau minérale, salade de fruits, omelette et profiterole"
  },
  en: {
    name: "French Breakfast",
    description: "French pastry basket, hot drink, orange juice, mineral water, fruit salad, omelette and profiterole"
  }
},

{
  id: 9,
  category: "breakfast",
  image: "brunch.webp",
  price: 430,
  ar: {
    name: "برانش",
    description: "سلة معجنات فرنسية، مشروب ساخن، عصير برتقال، مياه معدنية، سلطة فواكه، أومليت، هوت دوغ، ميني ساندويتش دجاج، جبن جودة مع لحم هام، تشكيلة حلويات، زبدة، مربى وجبن"
  },
  fr: {
    name: "Brunch",
    description: "Panier de viennoiseries, boisson chaude, jus d'orange, eau minérale, salade de fruits, omelette, hot dog, mini sandwich poulet, gouda et jambon, trio de desserts, beurre, confiture et fromage"
  },
  en: {
    name: "Brunch",
    description: "French pastry basket, hot drink, orange juice, mineral water, fruit salad, omelette, hot dog, mini chicken sandwich, Gouda cheese with ham, dessert trio, butter, jam and cheese"
  }
},

  // ─── SHISHA / شيشة ───────────────────────────────────────────────────────────
 {
  id: 1,
  category: "shisha",
  image: "shisha-hawaii.webp",
  price: 300,
  ar: { name: "شيشة Hawaii", description: "نكهة استوائية منعشة بمزيج فواكه هاواي" },
  fr: { name: "Chicha Hawaii", description: "Saveur tropicale inspirée des fruits d'Hawaï" },
  en: { name: "Hawaii Shisha", description: "Premium tropical Hawaiian fruit flavor" }
},

{
  id: 2,
  category: "shisha",
  image: "shisha-love.webp",
  price: 300,
  ar: { name: "شيشة Love", description: "مزيج فواكه حلوة ومنعشة بطعم مميز" },
  fr: { name: "Chicha Love", description: "Mélange de saveurs fruitées douces et rafraîchissantes" },
  en: { name: "Love Shisha", description: "Premium sweet and refreshing fruit blend" }
},

{
  id: 3,
  category: "shisha",
  image: "shisha-nana.webp",
  price: 300,
  ar: { name: "شيشة Nana", description: "نكهة النعناع المنعشة بطعم نقي ومميز" },
  fr: { name: "Chicha Nana", description: "Chicha premium à la menthe fraîche" },
  en: { name: "Nana Shisha", description: "Premium fresh mint flavor" }
},

{
  id: 4,
  category: "shisha",
  image: "shisha-miamor.webp",
  price: 300,
  ar: { name: "شيشة Mi Amor", description: "مزيج فاخر من النكهات بطابع حلو ومنعش" },
  fr: { name: "Chicha Mi Amor", description: "Mélange premium aux saveurs douces et raffinées" },
  en: { name: "Mi Amor Shisha", description: "Premium sweet and refined flavor blend" }
},

];
 
