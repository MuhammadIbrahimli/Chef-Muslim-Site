// Menu Data for Chef Muslim Restaurant
export let menuData = {
    appetizers: [
        // ШОРБАЛАР (Soups)
        { id: "merci-sorbasi", name: "Mərci Şorbası", description: "mərci, limon, soğan, kök, bolqar bibəri, kartof, tomat, suxarı", price: "4 ₼", category: "appetizers", tags: ["суп", "чечевица"], spicy: false, meat: false, fish: false, vegetarian: true, light: true },
        { id: "gobelek-sorbasi", name: "Göbələk Şorbası", description: "göbələk, kartof, kök, süd, qaymaq, suxarı", price: "6 ₼", category: "appetizers", tags: ["суп", "грибы"], spicy: false, meat: false, fish: false, vegetarian: true, light: false },
        { id: "toyuq-sorbasi", name: "Toyuq Şorbası", description: "toyuq, kartof, bibər, kök", price: "6 ₼", category: "appetizers", tags: ["суп", "курица"], spicy: false, meat: true, fish: false, vegetarian: false, light: true },
        { id: "borani-sorbasi", name: "Borani Şorbası", description: "borani, kök, sarımsaq, qaymaq, soğan, suxarı", price: "6 ₼", category: "appetizers", tags: ["суп", "тыква"], spicy: false, meat: false, fish: false, vegetarian: true, light: true },
        { id: "tomat-sorbasi", name: "Tomat Şorbası", description: "pomidor, kök, soğan, parmezan, qaymaq, suxarı", price: "6 ₼", category: "appetizers", tags: ["суп", "томатный"], spicy: false, meat: false, fish: false, vegetarian: true, light: true },
        
        // SOYUQ ROLLAR (Cold Rolls)
        { id: "canada", name: "Canada", description: "unagi balıq, düyü, nori, krevetka, pendir, xiyar", price: "19 ₼", category: "appetizers", tags: ["угорь", "креветка"], spicy: false, meat: false, fish: true, vegetarian: false, light: true },
        { id: "green-dragon", name: "Green Dragon", description: "krab, düyü, nori, pendir, avokado", price: "14 ₼", category: "appetizers", tags: ["краб", "авокадо"], spicy: false, meat: false, fish: true, vegetarian: false, light: true },
        { id: "ebi-crunch", name: "Ebi Crunch", description: "krevetka, düyü, nori, pendir, xiyar, küncüt, kürü", price: "13 ₼", category: "appetizers", tags: ["креветка", "икра"], spicy: false, meat: false, fish: true, vegetarian: false, light: true },
        { id: "fly-roll", name: "Fly Roll", description: "ton balığı, düyü, nori, pendir, mayonez, kürü, parmezan", price: "13 ₼", category: "appetizers", tags: ["тунец", "пармезан"], spicy: false, meat: false, fish: true, vegetarian: false, light: true },
        { id: "cheese-roll", name: "Cheese Roll", description: "toyuq, düyü, nori, pendir, xiyar, cheddar pendiri", price: "12 ₼", category: "appetizers", tags: ["курица", "чеддер"], spicy: false, meat: true, fish: false, vegetarian: false, light: false },
        { id: "sake-maki", name: "Sake Maki", description: "düyü, nori, qızıl balıq", price: "10 ₼", category: "appetizers", tags: ["лосось", "маки"], spicy: false, meat: false, fish: true, vegetarian: false, light: true },
        { id: "kappa-maki", name: "Kappa Maki", description: "düyü, nori, xiyar, küncüt", price: "7 ₼", category: "appetizers", tags: ["огурец", "веган"], spicy: false, meat: false, fish: false, vegetarian: true, light: true },
        { id: "avocado-maki", name: "Avocado Maki", description: "düyü, nori, avokado, küncüt", price: "9.5 ₼", category: "appetizers", tags: ["авокадо", "веган"], spicy: false, meat: false, fish: false, vegetarian: true, light: true },
        { id: "kani-maki", name: "Kani Maki", description: "krab, düyü, nori, pendir", price: "9 ₼", category: "appetizers", tags: ["краб"], spicy: false, meat: false, fish: true, vegetarian: false, light: true },
        { id: "kani-ebi", name: "Kani Ebi", description: "krab, düyü, nori, krevetka", price: "11 ₼", category: "appetizers", tags: ["краб", "креветка"], spicy: false, meat: false, fish: true, vegetarian: false, light: true },
        { id: "ebi-maki", name: "Ebi Maki", description: "krevetka, düyü, nori, pendir", price: "11 ₼", category: "appetizers", tags: ["креветка"], spicy: false, meat: false, fish: true, vegetarian: false, light: true },
        { id: "planeta-maki", name: "Planeta Maki", description: "qızıl balıq, düyü, nori, kahı, pendir, xiyar", price: "12 ₼", category: "appetizers", tags: ["лосось", "салат"], spicy: false, meat: false, fish: true, vegetarian: false, light: true },
        { id: "sensei-maki", name: "Sensei Maki", description: "krevetka, düyü, nori, kahı, xiyar, pendir", price: "12 ₼", category: "appetizers", tags: ["креветка"], spicy: false, meat: false, fish: true, vegetarian: false, light: true },
        { id: "california-kani", name: "California Kani", description: "krab, düyü, nori, pendir, xiyar, kürü", price: "12 ₼", category: "appetizers", tags: ["краб", "икра"], spicy: false, meat: false, fish: true, vegetarian: false, light: true },
        { id: "california-shrimp", name: "California Shrimp", description: "krevetka, düyü, nori, pendir, xiyar, kürü", price: "14 ₼", category: "appetizers", tags: ["креветка", "калифорния"], spicy: false, meat: false, fish: true, vegetarian: false, light: true },
        { id: "philadelphia-classic", name: "Philadelphia", description: "qızıl balıq, düyü, nori, pendir, xiyar", price: "13 ₼", category: "appetizers", tags: ["лосось"], spicy: false, meat: false, fish: true, vegetarian: false, light: true },
        { id: "philadelphia-shrimp", name: "Philadelphia Shrimp", description: "qızıl balıq, krevetka, düyü, nori, pendir, xiyar", price: "15 ₼", category: "appetizers", tags: ["лосось", "креветка"], spicy: false, meat: false, fish: true, vegetarian: false, light: true },
        { id: "philadelphia-kani", name: "Philadelphia Kani", description: "qızıl balıq, krab, düyü, nori, pendir, xiyar", price: "13 ₼", category: "appetizers", tags: ["лосось", "краб"], spicy: false, meat: false, fish: true, vegetarian: false, light: true },
        { id: "philadelphia-smoke", name: "Philadelphia Smoke", description: "hisə verilmiş qızıl balıq, düyü, nori, pendir, xiyar", price: "17 ₼", category: "appetizers", tags: ["копченый лосось"], spicy: false, meat: false, fish: true, vegetarian: false, light: true },
        { id: "philadelphia-chic", name: "Philadelphia Chic", description: "qızıl balıq, avokado, düyü, nori, pendir", price: "15 ₼", category: "appetizers", tags: ["лосось", "авокадо"], spicy: false, meat: false, fish: true, vegetarian: false, light: true },
        { id: "alaska", name: "Alaska", description: "krab, düyü, nori, pendir, xiyar, küncüt", price: "10 ₼", category: "appetizers", tags: ["краб", "кунжут"], spicy: false, meat: false, fish: true, vegetarian: false, light: true },
        { id: "alaska-tuna", name: "Alaska Tuna", description: "ton balığı, düyü, nori, pendir, xiyar, küncüt", price: "12 ₼", category: "appetizers", tags: ["тунец"], spicy: false, meat: false, fish: true, vegetarian: false, light: true },
        { id: "unagi-onigiri", name: "Unagi Onigiri", description: "unagi balıq, düyü, nori, pendir, xiyar", price: "19 ₼", category: "appetizers", tags: ["угорь", "онигири"], spicy: false, meat: false, fish: true, vegetarian: false, light: true }
    ],
    main: [
        { id: "terevezli-noodle", name: "Tərəvəzli Noodle", description: "əriştə, bibər, kabak, soğan, kök, asiana sous, acılı sous, soya sousu, zəncəfilli yağ, küncüt, yaşıl soğan", price: "8 ₼", category: "main", tags: ["лапша", "овощи"], spicy: true, meat: false, fish: false, vegetarian: true, light: false },
        { id: "toyuqlu-noodle", name: "Toyuqlu Noodle", description: "toyuq, əriştə, bolqar bibəri, soğan, kök, kabak, soya sousu, acılı sous, zəncəfilli yağ, asiana sous, yaşıl soğan, küncüt", price: "11 ₼", category: "main", tags: ["лапша", "курица"], spicy: true, meat: true, fish: false, vegetarian: false, light: false },
        { id: "beef-noodle", name: "Beef Noodle", description: "can əti, əriştə, bolqar bibəri, soğan, kök, asiana sous, acılı sous, soya sousu, zəncəfilli yağ, küncüt, yaşıl soğan", price: "13 ₼", category: "main", tags: ["лапша", "говядина"], spicy: true, meat: true, fish: false, vegetarian: false, light: false },
        { id: "krevetkali-noodle", name: "Krevetkalı Noodle", description: "krevetka, əriştə, bolqar bibəri, soğan, kök, acılı sous, zəncəfilli yağ, asiana sous, soya sousu, yaşıl soğan, küncüt", price: "14 ₼", category: "main", tags: ["лапша", "креветки"], spicy: true, meat: false, fish: true, vegetarian: false, light: false },
        { id: "fish-noodle", name: "Fish Noodle", description: "farel, əriştə, bolqar bibəri, soğan, kök, acılı sous, soya sousu, asiana sous", price: "15 ₼", category: "main", tags: ["лапша", "форель"], spicy: true, meat: false, fish: true, vegetarian: false, light: false }
    ],
    desserts: [
        { id: "sutlac", name: "Sütlaç", description: "Традиционный рисовый пудинг", price: "5 ₼", category: "desserts", tags: ["пудинг", "турецкий"], spicy: false, meat: false, fish: false, vegetarian: true, light: true },
        { id: "spoonful", name: "Spoonful", description: "Десерт", price: "5 ₼", category: "desserts", tags: ["сладкое"], spicy: false, meat: false, fish: false, vegetarian: true, light: false },
        { id: "kunefe", name: "Künəfə", description: "Горячий десерт с сыром", price: "6 ₼", category: "desserts", tags: ["сырный десерт"], spicy: false, meat: false, fish: false, vegetarian: true, light: false },
        { id: "balli-tort", name: "Ballı tort", description: "Медовик", price: "7 ₼", category: "desserts", tags: ["торт", "мед"], spicy: false, meat: false, fish: false, vegetarian: true, light: false },
        { id: "napaleon-tort", name: "Napaleon tort", description: "Наполеон", price: "7 ₼", category: "desserts", tags: ["торт", "слоеный"], spicy: false, meat: false, fish: false, vegetarian: true, light: false },
        { id: "dubai-cheesecake", name: "Dubai Cheesecake", description: "Трендовый чизкейк", price: "7 ₼", category: "desserts", tags: ["чизкейк", "дубай"], spicy: false, meat: false, fish: false, vegetarian: true, light: false },
        { id: "cheesecake-strawberry", name: "Cheesecake (Çiyələk)", description: "Клубничный чизкейк", price: "7 ₼", category: "desserts", tags: ["клубника"], spicy: false, meat: false, fish: false, vegetarian: true, light: false },
        { id: "cheesecake-caramel", name: "Cheesecake (Karamel)", description: "Карамельный чизкейк", price: "7 ₼", category: "desserts", tags: ["карамель"], spicy: false, meat: false, fish: false, vegetarian: true, light: false },
        { id: "cheesecake-currant", name: "Cheesecake (Qarağat)", description: "Смородиновый чизкейк", price: "7 ₼", category: "desserts", tags: ["смородина"], spicy: false, meat: false, fish: false, vegetarian: true, light: false },
        { id: "san-sebastian", name: "San Sebastian", description: "Опаленный чизкейк", price: "8 ₼", category: "desserts", tags: ["чизкейк"], spicy: false, meat: false, fish: false, vegetarian: true, light: false },
        { id: "tiramisu", name: "Tiramisu", description: "Классический кофейный десерт", price: "8 ₼", category: "desserts", tags: ["кофе"], spicy: false, meat: false, fish: false, vegetarian: true, light: false },
        { id: "tea-standard", name: "Earl Grey / Yaşıl Çay / Jasmin", description: "Чай в ассортименте", price: "5 ₼", category: "desserts", tags: ["чай"], spicy: false, meat: false, fish: false, vegetarian: true, light: true },
        { id: "moroccan-tea", name: "Mərakeş çayı", description: "zəncəfil, darçın, bal, limon", price: "7 ₼", category: "desserts", tags: ["чай", "имбирь"], spicy: false, meat: false, fish: false, vegetarian: true, light: true },
        { id: "jam-variety", name: "Mürəbbələr", description: "Kakos, Çiyələk, Ağ gilas, Ərik, Plombir", price: "5 ₼", category: "desserts", tags: ["варенье"], spicy: false, meat: false, fish: false, vegetarian: true, light: false },
        { id: "espresso", name: "Espresso", description: "Single/Double", price: "3-4 ₼", category: "desserts", tags: ["кофе"], spicy: false, meat: false, fish: false, vegetarian: true, light: true },
        { id: "americano", name: "Americano", description: "Small/Medium", price: "3-4 ₼", category: "desserts", tags: ["кофе"], spicy: false, meat: false, fish: false, vegetarian: true, light: true },
        { id: "cappuccino", name: "Cappuccino", description: "Small/Medium", price: "4-5 ₼", category: "desserts", tags: ["кофе"], spicy: false, meat: false, fish: false, vegetarian: true, light: false },
        { id: "latte", name: "Latte", description: "Small/Medium", price: "4-5 ₼", category: "desserts", tags: ["кофе"], spicy: false, meat: false, fish: false, vegetarian: true, light: false },
        { id: "mojito-variety", name: "Mojito", description: "Classic/Strawberry/Passion", price: "7 ₼", category: "desserts", tags: ["коктейль"], spicy: false, meat: false, fish: false, vegetarian: true, light: true },
        { id: "milkshake-vanilla", name: "Milkshake Vanilla", description: "Ванильный молочный коктейль", price: "7 ₼", category: "desserts", tags: ["молочный коктейль"], spicy: false, meat: false, fish: false, vegetarian: true, light: false }
    ],
    sets: [
        // КОМБО СЕТЫ
        { id: "platin-set", name: "Platin Set", description: "Sosisli pizza, Fungi Polo pizza, Hot Chicken, Hot Kani, Nuggets (2 pors), Kartof fri (2 pors), Çiy köftə dürüm (x2)", price: "42 AZN", category: "sets", tags: ["пицца", "суши", "наггетсы"], spicy: false, meat: true, fish: true, vegetarian: false, light: false },
        { id: "double-set", name: "Double Set", description: "Chicken Burger (x2), Sosisli pizza, Nuggets (1 pors), Kartof fri (2 pors)", price: "32 AZN", category: "sets", tags: ["бургеры", "пицца"], spicy: false, meat: true, fish: false, vegetarian: false, light: false },
        { id: "trio-set", name: "Trio Set", description: "Mix pizza, Hot Chicken, California, Kartof fri (2 pors), Buzz Cola (x3)", price: "33 AZN", category: "sets", tags: ["пицца", "суши", "кола"], spicy: false, meat: true, fish: true, vegetarian: false, light: false },
        { id: "pro-set", name: "Pro Set", description: "Margarita pizza, Tərəvəzli pizza, Hot Chicken, Alyaska Tuna, Kartof fri (2 pors), Çiy köftə dürüm (x2)", price: "35 AZN", category: "sets", tags: ["вегетарианская пицца", "тунец"], spicy: false, meat: true, fish: true, vegetarian: false, light: false },
        { id: "deluxe-set", name: "Deluxe Set", description: "Sezar pizza, Sosisli pizza, Polo pizza, California, Philadelphia, Hokkaido, Hot kani, Nuggets (3 pors), Kartof fri (3 pors), Çiy köftə dürüm (x3), Meyvə şirəsi (1 L)", price: "75 AZN", category: "sets", tags: ["большой сет", "праздничный"], spicy: false, meat: true, fish: true, vegetarian: false, light: false },
        { id: "grand-set", name: "Grand Set", description: "Pepperoni pizza, Fungi Polo pizza, Hot Chicken, Hot Kani, Singapore, Nuggetts (2 pors), Kartof fri (4 pors)", price: "52 AZN", category: "sets", tags: ["пицца", "суши"], spicy: false, meat: true, fish: true, vegetarian: false, light: false },
        { id: "kvartet-set", name: "Kvartet Set", description: "Chicken Burger (x4), Fungi Polo pizza, Nuggets (2 pors), Kartof fri (2 pors)", price: "52 AZN", category: "sets", tags: ["бургеры", "пицца"], spicy: false, meat: true, fish: false, vegetarian: false, light: false },
        { id: "aile-seti", name: "Ailə Seti", description: "Sosisli pizza, Funqi Polo pizza, Hot Kani, Hot Chicken, Kartof fri (2 pors)", price: "40 AZN", category: "sets", tags: ["семейный"], spicy: false, meat: true, fish: true, vegetarian: false, light: false },
        { id: "set-mexico", name: "Set Mexico", description: "Beef nachos, Chicken nachos, Mexico pizza, Ev sayağı kartof (2 pors), Buzz Cola (x4)", price: "42 AZN", category: "sets", tags: ["мексиканский", "острое"], spicy: true, meat: true, fish: false, vegetarian: false, light: false },
        { id: "mega-set", name: "Mega Set", description: "BBQ pizza, Polo pizza, California, Philadelphia, Hokkaido, Nuggets (2 pors), Kartof fri (2 pors), Buzz Cola (x4)", price: "58 AZN", category: "sets", tags: ["барбекю", "суши"], spicy: false, meat: true, fish: true, vegetarian: false, light: false },
        
        // СУШИ СЕТЫ
        { id: "epic-set", name: "Epic Set (114 ədəd)", description: "Philadelphia x8, California Kani x8, Alaska x8, Cheese Roll x8, Unagi Onigiri x8, Kani Maki x8, Fly Roll x8, Nuggets Maki x8, Maguro Hot x10, Hokkaido x10, Hot Kani x10, Hot Chicken x10, Singapore x10", price: "80 AZN", category: "sets", tags: ["макси сет", "114 штук"], spicy: true, meat: true, fish: true, vegetarian: false, light: false },
        { id: "maki-set", name: "Maki Set (48 ədəd)", description: "Ebi Maki x8, Kani Maki x8, Planeta Maki x8, Sensei Maki x8, Sake Maki x8, Kappa Maki x8", price: "40 AZN", category: "sets", tags: ["маки", "рыба"], spicy: false, meat: false, fish: true, vegetarian: false, light: true },
        { id: "toro-set", name: "Toro Set (54 ədəd)", description: "California Kani x8, Philadelphia x8, Alaska x8, Hokkaido x10, Hot Kani x10, Hot Chicken x10, Buzz cola x3", price: "45 AZN", category: "sets", tags: ["суши", "кола"], spicy: true, meat: true, fish: true, vegetarian: false, light: false },
        { id: "set-katana", name: "Set Katana (56 ədəd)", description: "California Kani x8, Philadelphia x8, Green Dragon x8, Planeta Maki x8, Kappa Maki x8, Sake Maki x8", price: "45 AZN", category: "sets", tags: ["суши", "рыба"], spicy: false, meat: false, fish: true, vegetarian: false, light: true },
        { id: "diamond-set", name: "Diamond Set (58 ədəd)", description: "Philadelphia x8, California Kani x8, Cheese Roll x8, Philadelphia Chic x8, Unagi Onigiri x8, Fly Roll x8, Hokkaido x10", price: "69 AZN", category: "sets", tags: ["премиум", "суши"], spicy: true, meat: false, fish: true, vegetarian: false, light: false },
        { id: "set-philadelphia", name: "Set Philadelphia (50 ədəd)", description: "Philadelphia Fresh x8, Philadelphia Smoke x8, Philadelphia Kani x8, Philadelphia Shrimp x8, Philadelphia Chic x8, Hokkaido x10", price: "58 AZN", category: "sets", tags: ["филадельфия"], spicy: true, meat: false, fish: true, vegetarian: false, light: false },
        { id: "tokio-set", name: "Tokio Set (40 ədəd)", description: "California Kani x8, Philadelphia x8, Sake Maki x8, Kappa Maki x8, Kani Maki x8", price: "32 AZN", category: "sets", tags: ["классика"], spicy: false, meat: false, fish: true, vegetarian: false, light: true },
        { id: "tempura-set", name: "Tempura Set (40 ədəd)", description: "Hokkaido x10, Hot Kani x10, Hot Chicken x10, Hot Ebi x10", price: "35 AZN", category: "sets", tags: ["горячие роллы", "темпура"], spicy: true, meat: true, fish: true, vegetarian: false, light: false },
        { id: "crispy-set", name: "Crispy Set (60 ədəd)", description: "Hokkaido x10, Hot Kani x10, Hot Kani x10, Hot Chicken x10, Singapore x10, Hot Maguro x10, Buzz cola x3", price: "45 AZN", category: "sets", tags: ["хрустящие роллы"], spicy: true, meat: true, fish: true, vegetarian: false, light: false }
    ]
};

export function addMenuItems(category, items) {
    if (menuData[category]) {
        menuData[category] = [...menuData[category], ...items];
    }
}

export function setMenuData(data) {
    menuData = { ...data };
}
