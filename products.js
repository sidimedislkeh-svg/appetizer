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
{
  id: 6,
  category: "drinks",
  image: "orange-juice.webp",
  price: 120,
  ar: {
    name: "عصير برتقال طازج",
    description: "عصير برتقال طبيعي 100٪ محضر من برتقال طازج"
  },
  fr: {
    name: "Jus d'Orange Frais",
    description: "Jus d'orange 100 % naturel préparé avec des oranges fraîches"
  },
  en: {
    name: "Fresh Orange Juice",
    description: "100% fresh orange juice made from freshly squeezed oranges"
  }
},
{
  id: 7,
  category: "drinks",
  image: "mint-mojito.webp",
  price: 190,
  ar: {
    name: "موخيتو نعناع",
    description: "موخيتو منعش بالنعناع الطازج والليمون مع الثلج والمياه الغازية"
  },
  fr: {
    name: "Mojito Menthe",
    description: "Mojito rafraîchissant à la menthe fraîche, citron vert, glace et eau gazeuse"
  },
  en: {
    name: "Mint Mojito",
    description: "Refreshing mojito with fresh mint, lime, ice and sparkling water"
  }
},

{
  id: 8,
  category: "drinks",
  image: "cappuccino.webp",
  price: 100,
  ar: {
    name: "قهوة كابتشينو",
    description: "إسبريسو مع حليب مبخر ورغوة حليب كريمية"
  },
  fr: {
    name: "Cappuccino",
    description: "Espresso avec lait chaud et mousse de lait onctueuse"
  },
  en: {
    name: "Cappuccino",
    description: "Espresso with steamed milk and creamy milk foam"
  }
},

{
  id: 9,
  category: "drinks",
  image: "mocha.webp",
  price: 150,
  ar: {
    name: "قهوة موكا",
    description: "قهوة موكا كريمية ممزوجة بالإسبريسو والشوكولاتة مع رغوة الحليب"
  },
  fr: {
    name: "Café Mocha",
    description: "Espresso, chocolat et lait mousseux dans une boisson onctueuse"
  },
  en: {
    name: "Caffè Mocha",
    description: "Espresso blended with chocolate and steamed milk, topped with milk foam"
  }
},

{
  id: 10,
  category: "drinks",
  image: "americano.webp",
  price: 100,
  ar: {
    name: "قهوة أمريكانو",
    description: "إسبريسو مخفف بالماء الساخن بنكهة قهوة غنية ومتوازنة"
  },
  fr: {
    name: "Café Américain",
    description: "Espresso allongé à l'eau chaude, au goût riche et équilibré"
  },
  en: {
    name: "Americano",
    description: "Espresso diluted with hot water for a rich and smooth coffee"
  }
},

{
  id: 11,
  category: "drinks",
  image: "espresso.webp",
  price: 100,
  ar: {
    name: "قهوة إسبريسو",
    description: "جرعة إسبريسو مركزة بنكهة قوية وكريمة ذهبية"
  },
  fr: {
    name: "Espresso",
    description: "Shot d'espresso intense avec une crema dorée"
  },
  en: {
    name: "Espresso",
    description: "Rich and intense espresso shot with a golden crema"
  }
},
  // ─── SNACKS / سناك ──────────────────────────────────────────────────────────
 {
  id: 12,
  category: "snacks",
  image: "cheeseburger.webp",
  price: 200,
  ar: { name: "تشيز برغر", description: "برغر لحم بقري مع جبن شيدر وخس وطماطم وصلصة خاصة" },
  fr: { name: "Cheeseburger", description: "Burger de bœuf avec cheddar, salade, tomate et sauce maison" },
  en: { name: "Cheeseburger", description: "Beef burger with cheddar cheese, lettuce, tomato and house sauce" }
},

{
  id: 13,
  category: "snacks",
  image: "meat-sandwich.webp",
  price: 180,
  ar: { name: "ساندويتش لحم", description: "شرائح لحم مشوية مع الخس والطماطم وصلصة خاصة" },
  fr: { name: "Sandwich Viande", description: "Sandwich garni de viande grillée, salade, tomate et sauce maison" },
  en: { name: "Meat Sandwich", description: "Grilled meat sandwich with lettuce, tomato and house sauce" }
},


{
  id: 14,
  category: "snacks",
  image: "maqloob.webp",
  price: 220,
  ar: {
    name: "مقلوب",
    description: "متوفر بالدجاج (220)، اللحم (220)، أو ميكس (240)"
  },
  fr: {
    name: "Maqloob",
    description: "Disponible au poulet (220), viande (220) ou mixte (240)"
  },
  en: {
    name: "Maqloob",
    description: "Available with chicken (220), beef (220) or mixed (240)"
  }
},

{
  id: 15,
  category: "snacks",
  image: "tacos.webp",
  price: 170,
  ar: {
    name: "تاكوس",
    description: "متوفر بالدجاج (170)، اللحم (170)، أو كرسبي (200)"
  },
  fr: {
    name: "Tacos",
    description: "Disponible au poulet (170), viande (170) ou crispy (200)"
  },
  en: {
    name: "Tacos",
    description: "Available with chicken (170), beef (170) or crispy chicken (200)"
  }
},

{
  id: 16,
  category: "snacks",
  image: "baguette-farcie.webp",
  price: 230,
  ar: {
    name: "باغيت محشوة",
    description: "متوفرة بالدجاج (230)، اللحم (230)، أو ميكس (280)"
  },
  fr: {
    name: "Baguette Farcie",
    description: "Disponible au poulet (230), viande (230) ou mixte (280)"
  },
  en: {
    name: "Stuffed Baguette",
    description: "Available with chicken (230), beef (230) or mixed (280)"
  }
},
{
  id: 17,
  category: "snacks",
  image: "pizza-margherita.webp",
  price: 200,
  ar: { name: "بيتزا مارغريتا", description: "بيتزا بصلصة الطماطم وجبن الموزاريلا والأوريغانو" },
  fr: { name: "Pizza Margherita", description: "Pizza à la sauce tomate, mozzarella et origan" },
  en: { name: "Margherita Pizza", description: "Classic pizza with tomato sauce, mozzarella and oregano" }
},

{
  id: 18,
  category: "snacks",
  image: "pizza-tuna.webp",
  price: 250,
  ar: { name: "بيتزا تونة", description: "بيتزا بالتونة وجبن الموزاريلا وصلصة الطماطم" },
  fr: { name: "Pizza Thon", description: "Pizza au thon, mozzarella et sauce tomate" },
  en: { name: "Tuna Pizza", description: "Pizza topped with tuna, mozzarella and tomato sauce" }
},
{
  id: 19,
  category: "snacks",
  image: "chicken-pizza.webp",
  price: 200,
  ar: {
    name: "بيتزا دجاج",
    description: "بيتزا إيطالية بعجينة طازجة مع قطع الدجاج المشوي وجبن الموزاريلا"
  },
  fr: {
    name: "Pizza au Poulet",
    description: "Pizza italienne garnie de poulet grillé et de mozzarella fondante"
  },
  en: {
    name: "Chicken Pizza",
    description: "Italian pizza topped with grilled chicken and melted mozzarella cheese"
  }
},

{
  id: 20,
  category: "snacks",
  image: "beef-pizza.webp",
  price: 200,
  ar: {
    name: "بيتزا باللحم",
    description: "بيتزا إيطالية مع لحم بقري متبل، جبن الموزاريلا، والبصل والفلفل"
  },
  fr: {
    name: "Pizza à la Viande",
    description: "Pizza italienne garnie de bœuf assaisonné, mozzarella, oignons et poivrons"
  },
  en: {
    name: "Beef Pizza",
    description: "Italian pizza topped with seasoned beef, mozzarella, onions and peppers"
  }
},
{
  id: 21,
  category: "snacks",
  image: "pizza-fruits-de-mer.webp",
  price: 250,

  ar: {
    name: "بيتزا فواكه البحر",
    description: "بيتزا غنية بالروبيان والكالامار والأخطبوط مع الجبن."
  },

  fr: {
    name: "Pizza Fruits de Mer",
    description: "Pizza garnie de crevettes, calamars, poulpe et fromage."
  },

  en: {
    name: "Seafood Pizza",
    description: "Pizza topped with shrimp, calamari, octopus and cheese."
  }
},

{
  id: 22,
  category: "snacks",
  image: "pizza-crevettes.webp",
  price: 230,

  ar: {
    name: "بيتزا الروبيان",
    description: "بيتزا بالروبيان الطازج مع الجبن والفلفل الملون."
  },

  fr: {
    name: "Pizza Crevettes",
    description: "Pizza aux crevettes, fromage et poivrons."
  },

  en: {
    name: "Shrimp Pizza",
    description: "Pizza with shrimp, cheese and bell peppers."
  }
},

  // ─── DISHES / الأطباق ────────────────────────────────────────────────────────
 {
  id: 65,
  category: "dishes",
  image: "sushi.webp",
  price: 1000,
  ar: {
    name: "سوشي",
    description: "تشكيلة سوشي متنوعة"
  },
  fr: {
    name: "Sushi",
    description: "Assortiment de sushis variés"
  },
  en: {
    name: "Sushi",
    description: "Assorted sushi selection"
  }
},
  {
  id: 23,
  category: "dishes",
  image: "cordon-bleu.webp",
  price: 550,

  ar: {
    name: "كوردون بلو",
    description: "صدر دجاج محشو بالجبن واللحم المدخن، مقرمش من الخارج وطري من الداخل."
  },

  fr: {
    name: "Cordon Bleu",
    description: "Escalope de poulet farcie au fromage et jambon, croustillante à l'extérieur et fondante à l'intérieur."
  },

  en: {
    name: "Cordon Bleu",
    description: "Chicken breast stuffed with cheese and ham, crispy outside and tender inside."
  }
},
{
  id: 64,
  category: "dishes",
  image: "crepe-jambon-fromage.webp",
  price: 200,
  ar: {
    name: "كريب بالجامبون والجبن",
    description: "كريب مالح محشو بالجامبون والجبن"
  },
  fr: {
    name: "Crêpe Jambon Fromage",
    description: "Crêpe salée garnie de jambon et de fromage"
  },
  en: {
    name: "Ham & Cheese Crêpe",
    description: "Savory crêpe filled with ham and cheese"
  }
},
{
  id: 24,
  category: "dishes",
  image: "brochette-poulet.webp",
  price: 350,

  ar: {
    name: "أسياخ دجاج",
    description: "أسياخ دجاج مشوية ومتّبلة، تقدم بنكهة غنية ولمسة طازجة."
  },

  fr: {
    name: "Brochette de Poulet",
    description: "Brochettes de poulet grillées et marinées, servies avec une touche fraîche."
  },

  en: {
    name: "Chicken Skewers",
    description: "Grilled marinated chicken skewers served with a fresh touch."
  }
},

{
  id: 25,
  category: "dishes",
  image: "emince-poulet-creme-champignon.webp",
  price: 400,

  ar: {
    name: "إمينسي دجاج بالكريمة والفطر",
    description: "شرائح دجاج طرية مطهوة بصلصة كريمة الفطر الغنية."
  },

  fr: {
    name: "Émincé de Poulet à la Crème Champignon",
    description: "Émincé de poulet tendre dans une sauce crémeuse aux champignons."
  },

  en: {
    name: "Creamy Mushroom Chicken",
    description: "Tender sliced chicken served in a rich creamy mushroom sauce."
  }
},

  {
  id: 26,
  category: "dishes",
  image: "sole.webp",
  price: 480,
  ar: { name: "سمك سول مونيير", description: "فيليه سمك سول مشوي مع صلصة المونيير والزبدة والليمون" },
  fr: { name: "Sole Meunière", description: "Filet de sole préparé à la sauce meunière au beurre et citron" },
  en: { name: "Sole Meunière", description: "Sole fillet served with classic butter and lemon meunière sauce" }
},

{
  id: 27,
  category: "dishes",
  image: "seafood-mix.webp",
  price: 650,
  ar: { name: "مشكل فواكه البحر", description: "تشكيلة من المأكولات البحرية الطازجة المشوية" },
  fr: { name: "Fruits de Mer Mix", description: "Assortiment de fruits de mer frais grillés" },
  en: { name: "Mixed Seafood", description: "Selection of fresh grilled seafood" }
},

{
  id: 28,
  category: "dishes",
  image: "fillet-grille.webp",
  price: 600,
  ar: { name: "فيليه مشوي", description: "فيليه مشوي يقدم مع خضروات موسمية وصلصة خاصة" },
  fr: { name: "Filet Grillé", description: "Filet grillé accompagné de légumes de saison et sauce maison" },
  en: { name: "Grilled Fillet", description: "Grilled fillet served with seasonal vegetables and house sauce" }
},

{
  id: 29,
  category: "dishes",
  image: "lamb-chops.webp",
  price: 640,
  ar: { name: "ريش لحم الضأن", description: "ريش ضأن مشوية تقدم مع البطاطس والخضروات" },
  fr: { name: "Côtelette d’Agneau", description: "Côtelettes d'agneau grillées servies avec pommes de terre et légumes" },
  en: { name: "Lamb Chops", description: "Grilled lamb chops served with potatoes and seasonal vegetables" }
},

  {
  id: 30,
  category: "dishes",
  image: "dorade-grillee.webp",
  price: 450,
  ar: {
    name: "دوراد مشوية",
    description: "سمكة دوراد مشوية مع صلصة الأعشاب، الليمون والتوابل المتوسطية"
  },
  fr: {
    name: "Dorade Grillée",
    description: "Dorade grillée aux herbes, citron et épices méditerranéennes"
  },
  en: {
    name: "Grilled Sea Bream",
    description: "Grilled sea bream with herbs, lemon and Mediterranean spices"
  }
},

{
  id: 31,
  category: "dishes",
  image: "crevette-sauce-blanche.webp",
  price: 450,
  ar: {
    name: "جمبري بالصلصة البيضاء",
    description: "جمبري طازج بصلصة كريمية بيضاء مع الأرز والخضار والبطاطس المقلية"
  },
  fr: {
    name: "Crevettes Sauce Blanche",
    description: "Crevettes à la sauce blanche avec riz, légumes sautés et frites"
  },
  en: {
    name: "Shrimp in White Sauce",
    description: "Shrimp in creamy white sauce served with rice, vegetables and fries"
  }
},

{
  id: 32,
  category: "dishes",
  image: "crevette-pane.webp",
  price: 450,
  ar: {
    name: "جمبري مقرمش",
    description: "جمبري بانيه ذهبي مقرمش يقدم مع الأرز والخضار والبطاطس المقلية"
  },
  fr: {
    name: "Crevettes Panées",
    description: "Crevettes panées croustillantes avec riz, légumes sautés et frites"
  },
  en: {
    name: "Breaded Shrimp",
    description: "Golden breaded shrimp served with rice, vegetables and fries"
  }
},

{
  id: 33,
  category: "dishes",
  image: "wok-de-boeuf.webp",
  price: 400,
  ar: {
    name: "ووك لحم بقري",
    description: "شرائح لحم بقري مع نودلز وخضار طازجة بصلصة الووك الآسيوية"
  },
  fr: {
    name: "Wok de Bœuf",
    description: "Bœuf sauté au wok avec nouilles, légumes frais et sauce asiatique"
  },
  en: {
    name: "Beef Wok",
    description: "Stir-fried beef with noodles, fresh vegetables and Asian wok sauce"
  }
},

{
  id: 34,
  category: "dishes",
  image: "poulpe-galicienne.webp",
  price: 550,
  ar: {
    name: "أخطبوط على الطريقة الغاليسية",
    description: "أخطبوط مشوي يقدم مع البطاطس السوتيه والخضار ولمسة من البابريكا"
  },
  fr: {
    name: "Poulpe à la Galicienne, Pommes Sautées",
    description: "Poulpe grillé servi avec pommes sautées, légumes et paprika"
  },
  en: {
    name: "Galician Octopus with Sautéed Potatoes",
    description: "Grilled octopus served with sautéed potatoes, vegetables and paprika"
  }
},


{
  id: 35,
  category: "dishes",
  image: "grilled-thiof.webp",
  price: 650,
  ar: {
    name: "التشوف المشوي بالفرن",
    description: "سمك التشوف المشوي بالفرن، يقدم مع خضروات مشوية وشرائح الليمون"
  },
  fr: {
    name: "Thiof Grillé au Four",
    description: "Poisson thiof grillé au four, servi avec légumes grillés et citron"
  },
  en: {
    name: "Oven-Grilled Thiof",
    description: "Fresh oven-grilled thiof served with grilled vegetables and lemon"
  }
},
{
  id: 36,
  category: "dishes",
  image: "mixed-salad.webp",
  price: 260,
  ar: {
    name: "سلطة مشكلة",
    description: "مزيج من الخس والخضروات الطازجة الموسمية مع صلصة خفيفة"
  },
  fr: {
    name: "Salade Mixte",
    description: "Mélange de laitue et légumes frais de saison"
  },
  en: {
    name: "Mixed Salad",
    description: "Mixed lettuce and fresh seasonal vegetables"
  }
},

{
  id: 37,
  category: "dishes",
  image: "caesar-salad.webp",
  price: 300,
  ar: {
    name: "سلطة سيزر",
    description: "خس روماني مع دجاج مشوي، خبز محمص، جبن بارميزان وصوص السيزر"
  },
  fr: {
    name: "Salade César",
    description: "Laitue romaine, poulet grillé, croûtons, parmesan et sauce César"
  },
  en: {
    name: "Caesar Salad",
    description: "Romaine lettuce with grilled chicken, croutons, Parmesan and Caesar dressing"
  }
},

{
  id: 38,
  category: "dishes",
  image: "nicoise-salad.webp",
  price: 280,
  ar: {
    name: "سلطة نيسواز",
    description: "تونة، بيض مسلوق، طماطم، فاصوليا خضراء، زيتون أسود وبطاطس"
  },
  fr: {
    name: "Salade Niçoise",
    description: "Thon, œuf dur, tomates, haricots verts, olives noires et pommes de terre"
  },
  en: {
    name: "Niçoise Salad",
    description: "Tuna, boiled egg, tomatoes, green beans, black olives and potatoes"
  }
},

{
  id: 39,
  category: "dishes",
  image: "appetizer-salad.webp",
  price: 320,
  ar: {
    name: "سلطة أبتيزر",
    description: "خس، طماطم كرزية، جبن، جوز، ولحم ديك رومي مع صلصة خاصة"
  },
  fr: {
    name: "Salade Appetizer",
    description: "Salade verte, tomates cerises, fromage, noix et jambon de dinde"
  },
  en: {
    name: "Appetizer Salad",
    description: "Mixed greens, cherry tomatoes, cheese, walnuts and turkey ham"
  }
},
{
  id: 40,
  category: "dishes",
  image: "spaghetti-bolognese.webp",
  price: 350,
  ar: {
    name: "سباغيتي بولونيز",
    description: "سباغيتي إيطالية بصلصة البولونيز الغنية باللحم البقري والطماطم وجبن البارميزان"
  },
  fr: {
    name: "Spaghetti Bolognaise",
    description: "Spaghetti italien avec sauce bolognaise au bœuf, tomates et parmesan"
  },
  en: {
    name: "Spaghetti Bolognese",
    description: "Italian spaghetti with rich beef bolognese sauce, tomatoes and Parmesan cheese"
  }
},

{
  id: 41,
  category: "dishes",
  image: "fettuccine-alfredo.webp",
  price: 380,
  ar: {
    name: "فيتوتشيني ألفريدو",
    description: "فيتوتشيني بصلصة ألفريدو الكريمية مع صدر دجاج مشوي وجبن البارميزان"
  },
  fr: {
    name: "Fettuccine Alfredo",
    description: "Fettuccine à la sauce Alfredo crémeuse avec poulet grillé et parmesan"
  },
  en: {
    name: "Fettuccine Alfredo",
    description: "Fettuccine in creamy Alfredo sauce with grilled chicken and Parmesan cheese"
  }
},

{
  id: 42,
  category: "dishes",
  image: "penne-arrabbiata.webp",
  price: 300,
  ar: {
    name: "بيني أرابياتا",
    description: "مكرونة بيني بصلصة الطماطم الحارة والأعشاب الإيطالية وجبن البارميزان"
  },
  fr: {
    name: "Penne Arrabbiata",
    description: "Penne à la sauce tomate épicée, herbes italiennes et parmesan"
  },
  en: {
    name: "Penne Arrabbiata",
    description: "Penne pasta with spicy tomato sauce, Italian herbs and Parmesan cheese"
  }
},

{
  id: 43,
  category: "dishes",
  image: "spaghetti-seafood.webp",
  price: 550,
  ar: {
    name: "سباغيتي ثمار البحر",
    description: "سباغيتي مع الروبيان وبلح البحر والكالاماري بصلصة الطماطم الإيطالية"
  },
  fr: {
    name: "Spaghetti aux Fruits de Mer",
    description: "Spaghetti aux crevettes, moules et calamars dans une sauce tomate italienne"
  },
  en: {
    name: "Seafood Spaghetti",
    description: "Spaghetti with shrimp, mussels and calamari in Italian tomato sauce"
  }
},
{
  id: 44,
  category: "dishes",
  image: "fettuccine-shrimp.webp",
  price: 400,
  ar: {
    name: "فيتوتشيني بالجمبري",
    description: "فيتوتشيني بصلصة كريمية غنية مع جمبري طازج وجبن البارميزان"
  },
  fr: {
    name: "Fettuccine aux Crevettes",
    description: "Fettuccine à la sauce crémeuse avec crevettes fraîches et parmesan"
  },
  en: {
    name: "Shrimp Fettuccine",
    description: "Creamy fettuccine with fresh shrimp and Parmesan cheese"
   }
  },
  {
  id: 45,
  category: "dishes",
  image: "penne-mushroom-cream.webp",
  price: 350,
  ar: {
    name: "بيني بالفطر والكريمة",
    description: "مكرونة بيني بصلصة الكريمة والفطر الطازج مع جبن البارميزان"
  },
  fr: {
    name: "Penne aux Champignons et Crème",
    description: "Penne à la crème avec champignons frais et parmesan"
  },
  en: {
    name: "Penne with Mushrooms & Cream",
    description: "Penne pasta in creamy mushroom sauce with Parmesan cheese"
  }
},

{
  id: 46,
  category: "dishes",
  image: "lasagna-bolognese.webp",
  price: 400,
  ar: {
    name: "لازانيا بولونيز",
    description: "طبقات لازانيا مخبوزة مع صلصة البولونيز ولحم بقري وجبن موزاريلا"
  },
  fr: {
    name: "Lasagne Bolognaise",
    description: "Lasagnes gratinées avec sauce bolognaise, bœuf haché et mozzarella"
  },
  en: {
    name: "Lasagna Bolognese",
    description: "Baked lasagna with beef bolognese sauce and mozzarella cheese"
  }
},

{
  id: 47,
  category: "dishes",
  image: "spaghetti-aglio-olio.webp",
  price: 300,
  ar: {
    name: "سباغيتي أجليو إي أوليو",
    description: "سباغيتي بزيت الزيتون والثوم والأعشاب الإيطالية مع رقائق الفلفل الحار"
  },
  fr: {
    name: "Spaghetti Aglio e Olio",
    description: "Spaghetti à l'huile d'olive, ail, herbes italiennes et piment"
  },
  en: {
    name: "Spaghetti Aglio e Olio",
    description: "Spaghetti with olive oil, garlic, Italian herbs and chili flakes"
  }
},

  // ─── DESSERTS / تحلية ────────────────────────────────────────────────────────
  {
  id: 48,
  category: "desserts",
  image: "cream-puff.webp",
  price: 200,
  ar: { name: "كريمة باف", description: "عجينة خفيفة محشوة بكريمة الفانيليا الطازجة" },
  fr: { name: "Crème Puff", description: "Pâte légère garnie d'une crème pâtissière onctueuse" },
  en: { name: "Cream Puff", description: "Light pastry filled with smooth vanilla cream" }
},

{
  id: 49,
  category: "desserts",
  image: "brownies.webp",
  price: 200,
  ar: { name: "براونيز", description: "كيك شوكولاتة غني بقوام طري ولذيذ" },
  fr: { name: "Brownies", description: "Gâteau au chocolat fondant et gourmand" },
  en: { name: "Brownies", description: "Rich and fudgy chocolate brownie" }
},

{
  id: 50,
  category: "desserts",
  image: "flan-caramel.webp",
  price: 180,
  ar: { name: "فلان كراميل", description: "فلان كريمي مغطى بصلصة الكراميل" },
  fr: { name: "Flan Caramel", description: "Flan crémeux nappé d'un caramel fondant" },
  en: { name: "Caramel Flan", description: "Creamy custard topped with smooth caramel sauce" }
},

{
  id: 51,
  category: "desserts",
  image: "crepe-nutella.webp",
  price: 120,
  ar: { name: "كريب نوتيلا", description: "كريب طازج محشو بنوتيلا ويقدم ساخناً" },
  fr: { name: "Crêpe Nutella", description: "Crêpe fraîche garnie de Nutella, servie chaude" },
  en: { name: "Nutella Crepe", description: "Fresh crepe filled with Nutella and served warm" }
},
{
  id: 63,
  category: "desserts",
  image: "crepe-chocolat-banane.webp",
  price: 200,
  ar: {
    name: "كريب بالشوكولاتة والموز",
    description: "كريب محشو بالشوكولاتة والموز"
  },
  fr: {
    name: "Crêpe Chocolat Banane",
    description: "Crêpe garnie de chocolat et de banane"
  },
  en: {
    name: "Chocolate Banana Crêpe",
    description: "Crêpe filled with chocolate and banana"
  }
},
{
  id: 52,
  category: "desserts",
  image: "verrine-chocolat.webp",
  price: 150,
  ar: {
    name: "فيرين شوكولاتة",
    description: "طبقات من الكريمة مع شوكولاتة غنية وبسكويت وقطع شوكولاتة"
  },
  fr: {
    name: "Verrine Chocolat",
    description: "Verrine crémeuse au chocolat avec biscuit et copeaux de chocolat"
  },
  en: {
    name: "Chocolate Verrine",
    description: "Creamy chocolate verrine with biscuit and chocolate pieces"
  }
},

{
  id: 53,
  category: "desserts",
  image: "verrine-oreo.webp",
  price: 150,
  ar: {
    name: "فيرين أوريو",
    description: "كريمة ناعمة مع بسكويت أوريو المجروش وطبقات كريمية"
  },
  fr: {
    name: "Verrine Oreo",
    description: "Crème onctueuse avec biscuits Oreo émiettés"
  },
  en: {
    name: "Oreo Verrine",
    description: "Creamy verrine with crushed Oreo cookies"
  }
},

{
  id: 54,
  category: "desserts",
  image: "verrine-mango.webp",
  price: 150,
  ar: {
    name: "فيرين مانجو",
    description: "طبقات كريمية مع صوص المانجو وقطع مانجو طازجة"
  },
  fr: {
    name: "Verrine Mangue",
    description: "Crème légère avec coulis et morceaux de mangue"
  },
  en: {
    name: "Mango Verrine",
    description: "Creamy verrine with mango sauce and fresh mango pieces"
  }
},

{
  id: 55,
  category: "desserts",
  image: "verrine-fruits-rouges.webp",
  price: 150,
  ar: {
    name: "فيرين فواكه حمراء",
    description: "كريمة ناعمة مع صوص التوت ومزيج من الفواكه الحمراء"
  },
  fr: {
    name: "Verrine Fruits Rouges",
    description: "Crème onctueuse avec coulis et fruits rouges"
  },
  en: {
    name: "Red Berry Verrine",
    description: "Creamy verrine with berry sauce and mixed red berries"
  }
},

{
  id: 56,
  category: "desserts",
  image: "verrine-lotus.webp",
  price: 150,
  ar: {
    name: "فيرين لوتس",
    description: "كريمة ناعمة مع كريمة لوتس وبسكويت لوتس المقرمش"
  },
  fr: {
    name: "Verrine Lotus",
    description: "Crème légère au Lotus avec biscuits Lotus émiettés"
  },
  en: {
    name: "Lotus Verrine",
    description: "Creamy Lotus verrine with crushed Lotus biscuits"
  }
},
{
  id: 57,
  category: "desserts",
  image: "cheesecake-oreo.webp",
  price: 150,
  ar: {
    name: "تشيزكيك أوريو",
    description: "تشيزكيك كريمي بقاعدة أوريو مع قطع بسكويت أوريو وكريمة مخفوقة"
  },
  fr: {
    name: "Cheesecake Oreo",
    description: "Cheesecake crémeux à l'Oreo avec morceaux d'Oreo et crème fouettée"
  },
  en: {
    name: "Oreo Cheesecake",
    description: "Creamy Oreo cheesecake with crushed Oreo cookies and whipped cream"
  }
},

{
  id: 58,
  category: "desserts",
  image: "cheesecake-fruits-mangue.webp",
  price: 150,
  ar: {
    name: "تشيزكيك بالفواكه الحمراء والمانجو",
    description: "تشيزكيك كريمي بنكهتي الفواكه الحمراء والمانجو الطازجة"
  },
  fr: {
    name: "Cheesecake Fruits Rouges & Mangue",
    description: "Cheesecake crémeux aux fruits rouges et à la mangue"
  },
  en: {
    name: "Red Fruits & Mango Cheesecake",
    description: "Creamy cheesecake with red berries and fresh mango"
  }
},

{
  id: 59,
  category: "desserts",
  image: "cheesecake-lotus.webp",
  price: 150,
  ar: {
    name: "تشيزكيك لوتس",
    description: "تشيزكيك كريمي مغطى بكريمة اللوتس مع بسكويت لوتس المقرمش"
  },
  fr: {
    name: "Cheesecake Lotus",
    description: "Cheesecake crémeux nappé de crème Lotus et biscuit Lotus"
  },
  en: {
    name: "Lotus Cheesecake",
    description: "Creamy cheesecake topped with Lotus spread and Lotus biscuit"
  }
},

{
  id: 60,
  category: "desserts",
  image: "san-sebastian.webp",
  price: 200,
  ar: {
    name: "تشيزكيك سان سيباستيان",
    description: "تشيزكيك سان سيباستيان المخبوز بقوام كريمي ونكهة كراميل مميزة"
  },
  fr: {
    name: "Cheesecake San Sebastian",
    description: "Cheesecake San Sebastian cuit au four, texture fondante et saveur caramélisée"
  },
  en: {
    name: "San Sebastian Cheesecake",
    description: "Baked San Sebastian cheesecake with a creamy texture and caramelized flavor"
  }
},
  // ─── BREAKFAST / فطور صباح ────────────────────────────────────────────────────
{
  id: 61,
  category: "breakfast",
  image: "french-breakfast.webp",
  price: 400,
  ar: {
    name: "فطور فرنسي",
    description: "سلة معجنات فرنسية، مشروب ساخن، عصير برتقال، مياه معدنية، أومليت، وبروفيترول"
  },
  fr: {
    name: "Petit Déjeuner Français",
    description: "Panier de viennoiseries, boisson chaude, jus d'orange, eau minérale,  omelette et profiterole"
  },
  en: {
    name: "French Breakfast",
    description: "French pastry basket, hot drink, orange juice, mineral water,  omelette and profiterole"
  }
},

{
  id: 62,
  category: "breakfast",
  image: "brunch.webp",
  price: 430,
  ar: {
    name: "برانش",
    description: "سلة معجنات فرنسية، مشروب ساخن، عصير برتقال، مياه معدنية، أومليت، هوت دوغ، جبن جودة مع لحم هام، تشكيلة حلويات، زبدة، مربى وجبن"
  },
  fr: {
    name: "Brunch",
    description: "Panier de viennoiseries, boisson chaude, jus d'orange, eau minérale,  omelette, hot dog,  gouda et jambon, trio de desserts, beurre, confiture et fromage"
  },
  en: {
    name: "Brunch",
    description: "French pastry basket, hot drink, orange juice, mineral water,  omelette, hot dog,  Gouda cheese with ham, dessert trio, butter, jam and cheese"
  }
},
{
  id: 63,
  category: "breakfast",
  image: "avocado-tartine.webp",
  price: 450,
  ar: {
    name: "تارتين بالأفوكادو",
    description: "خبز محمص مع شرائح أفوكادو طازجة، طماطم كرزية وأعشاب عطرية"
  },
  fr: {
    name: "Tartine à l'avocat",
    description: "Pain grillé garni d'avocat frais, tomates cerises et herbes aromatiques"
  },
  en: {
    name: "Avocado Tartine",
    description: "Toasted bread with fresh avocado, cherry tomatoes and aromatic herbs"
  }
},

{
  id: 64,
  category: "breakfast",
  image: "tomato-tartine.webp",
  price: 350,
  ar: {
    name: "تارتين بالطماطم",
    description: "خبز محمص مع شرائح طماطم طازجة وأعشاب عطرية"
  },
  fr: {
    name: "Tartine à la tomate",
    description: "Pain grillé garni de tomates fraîches et d'herbes aromatiques"
  },
  en: {
    name: "Tomato Tartine",
    description: "Toasted bread topped with fresh tomatoes and aromatic herbs"
  }
},

{
  id: 65,
  category: "breakfast",
  image: "eggs-tartine.webp",
  price: 350,
  ar: {
    name: "تارتين بالبيض",
    description: "خبز محمص مع بيض مقلي متبل بالأعشاب"
  },
  fr: {
    name: "Tartine aux œufs",
    description: "Pain grillé garni d'œufs au plat et d'herbes aromatiques"
  },
  en: {
    name: "Egg Tartine",
    description: "Toasted bread topped with fried eggs and aromatic herbs"
  }
},

{
  id: 66,
  category: "breakfast",
  image: "scrambled-eggs-tartine.webp",
  price: 300,
  ar: {
    name: "تارتين بالبيض المخفوق",
    description: "خبز محمص مع بيض مخفوق كريمي وأعشاب عطرية"
  },
  fr: {
    name: "Tartine aux œufs brouillés",
    description: "Pain grillé garni d'œufs brouillés crémeux et d'herbes aromatiques"
  },
  en: {
    name: "Scrambled Eggs Tartine",
    description: "Toasted bread with creamy scrambled eggs and aromatic herbs"
  }
},

{
  id: 67,
  category: "breakfast",
  image: "tuna-tartine.webp",
  price: 450,
  ar: {
    name: "تارتين بالتونة",
    description: "خبز محمص مع تونة، بصل أحمر، طماطم كرزية وأعشاب عطرية"
  },
  fr: {
    name: "Tartine au thon",
    description: "Pain grillé garni de thon, oignons rouges, tomates cerises et herbes aromatiques"
  },
  en: {
    name: "Tuna Tartine",
    description: "Toasted bread with tuna, red onion, cherry tomatoes and aromatic herbs"
  }
},
  {
  id: 68,
  category: "breakfast",
  image: "croissant-classique.webp",
  price: 300,
  ar: {
    name: "كرواسون كلاسيكي",
    description: "كرواسون فرنسي بالزبدة يقدم مع المربى والزبدة، عصير برتقال وقهوة"
  },
  fr: {
    name: "Croissant Classique",
    description: "Croissant pur beurre servi avec confiture, beurre, jus d'orange et boisson chaude"
  },
  en: {
    name: "Classic Croissant",
    description: "Butter croissant served with jam, butter, orange juice and hot drink"
  }
},

{
  id: 69,
  category: "breakfast",
  image: "croissant-chocolat.webp",
  price: 250,
  ar: {
    name: "كرواسون بالشوكولاتة",
    description: "كرواسون فرنسي محشو بالشوكولاتة يقدم مع عصير برتقال وقهوة"
  },
  fr: {
    name: "Croissant au Chocolat",
    description: "Croissant pur beurre au chocolat servi avec jus d'orange et boisson chaude"
  },
  en: {
    name: "Chocolate Croissant",
    description: "Butter chocolate croissant served with orange juice and hot drink"
  }
},

{
  id: 70,
  category: "breakfast",
  image: "pain-raisins.webp",
  price: 220,
  ar: {
    name: "خبز بالزبيب",
    description: "معجنات فرنسية بالزبيب وكريمة الباتيسيير مع عصير برتقال وقهوة"
  },
  fr: {
    name: "Pain aux Raisins",
    description: "Pain aux raisins et crème pâtissière servi avec jus d'orange et boisson chaude"
  },
  en: {
    name: "Pain aux Raisins",
    description: "French raisin pastry with pastry cream, served with orange juice and hot drink"
  }
},

{
  id: 71,
  category: "breakfast",
  image: "assortiment-gourmand.webp",
  price: 300,
  ar: {
    name: "تشكيلة معجنات فرنسية",
    description: "كرواسون بالشوكولاتة، خبز بالزبيب وشرائح خبز بالزبيب، مع عصير برتقال وقهوة"
  },
  fr: {
    name: "Assortiment Gourmand",
    description: "Croissant au chocolat, pain aux raisins, tranches de pain aux raisins, jus d'orange et boisson chaude"
  },
  en: {
    name: "Gourmet Pastry Selection",
    description: "Chocolate croissant, raisin pastry, sliced raisin bread, orange juice and hot drink"
  }
},// ─── SHISHA / شيشة ───────────────────────────────────────────────────────────
 {
  id: 72,
  category: "shisha",
  image: "shisha-hawaii.webp",
  price: 300,
  ar: { name: "شيشة Hawaii", description: "نكهة استوائية منعشة بمزيج فواكه هاواي" },
  fr: { name: "Chicha Hawaii", description: "Saveur tropicale inspirée des fruits d'Hawaï" },
  en: { name: "Hawaii Shisha", description: "Premium tropical Hawaiian fruit flavor" }
},

{
  id: 73,
  category: "shisha",
  image: "shisha-love.webp",
  price: 300,
  ar: { name: "شيشة Love", description: "مزيج فواكه حلوة ومنعشة بطعم مميز" },
  fr: { name: "Chicha Love", description: "Mélange de saveurs fruitées douces et rafraîchissantes" },
  en: { name: "Love Shisha", description: "Premium sweet and refreshing fruit blend" }
},

{
  id: 74,
  category: "shisha",
  image: "shisha-nana.webp",
  price: 300,
  ar: { name: "شيشة Nana", description: "نكهة النعناع المنعشة بطعم نقي ومميز" },
  fr: { name: "Chicha Nana", description: "Chicha premium à la menthe fraîche" },
  en: { name: "Nana Shisha", description: "Premium fresh mint flavor" }
},

{
  id: 75,
  category: "shisha",
  image: "shisha-miamor.webp",
  price: 300,
  ar: { name: "شيشة Mi Amor", description: "مزيج فاخر من النكهات بطابع حلو ومنعش" },
  fr: { name: "Chicha Mi Amor", description: "Mélange premium aux saveurs douces et raffinées" },
  en: { name: "Mi Amor Shisha", description: "Premium sweet and refined flavor blend" }
},

];
