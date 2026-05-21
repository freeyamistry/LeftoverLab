// Leftover Lab — local prototype
// Recipes are hard-coded for now. Later: swap for a real API (Spoonacular, Edamam, etc.).

const RECIPES = [
    {
        name: "Garlic Butter Pasta",
        ingredients: ["pasta", "butter", "garlic", "parsley", "salt", "pepper"],
        steps: "Boil pasta. Melt butter with crushed garlic. Toss together. Top with parsley.",
        detailed: {
            serves: 2,
            prep: 5,
            cook: 12,
            ingredientsDetailed: [
                "200g spaghetti or linguine",
                "60g unsalted butter",
                "4 cloves garlic, finely minced",
                "Small handful flat-leaf parsley, chopped",
                "1 tsp flaky sea salt",
                "Freshly cracked black pepper",
                "Optional: pinch of chilli flakes, grated parmesan"
            ],
            instructions: [
                { text: "Bring a large pot of well-salted water to a rolling boil." },
                { text: "Add pasta and cook until al dente (check packet — usually around 9 minutes).", timer: 540 },
                { text: "Meanwhile, melt butter in a wide pan over low-medium heat. Add minced garlic and gently sizzle until fragrant and just golden — do not brown.", timer: 120 },
                { text: "Reserve ½ cup of pasta water, then drain pasta." },
                { text: "Tip pasta into the garlic butter, add a splash of pasta water and toss vigorously for 1 minute until the sauce clings glossy.", timer: 60 },
                { text: "Off the heat, fold through parsley, salt and pepper. Plate and finish with extra parsley and parmesan if you like." }
            ]
        }
    },
    {
        name: "Fried Rice",
        ingredients: ["rice", "egg", "soy sauce", "onion", "garlic", "oil"],
        steps: "Fry onion and garlic. Push aside, scramble egg. Add cold rice and soy sauce. Stir-fry.",
        detailed: {
            serves: 2,
            prep: 10,
            cook: 10,
            ingredientsDetailed: [
                "3 cups cold cooked rice (day-old works best)",
                "2 large eggs, lightly beaten",
                "2 tbsp neutral oil (peanut or vegetable)",
                "1 small brown onion, finely diced",
                "3 cloves garlic, minced",
                "2 tbsp light soy sauce",
                "1 tsp sesame oil (optional)",
                "2 spring onions, sliced (optional)"
            ],
            instructions: [
                { text: "Break up the cold rice with your hands so there are no clumps." },
                { text: "Heat oil in a wok or large frying pan over high heat until shimmering." },
                { text: "Add onion and stir-fry until translucent, then add garlic and cook 30 seconds.", timer: 180 },
                { text: "Push everything to one side. Pour beaten egg into the empty space and scramble until just set.", timer: 60 },
                { text: "Add the rice. Stir-fry, pressing down to crisp some grains, for 3–4 minutes.", timer: 210 },
                { text: "Drizzle in soy sauce and sesame oil, toss through, scatter spring onions and serve." }
            ]
        }
    },
    {
        name: "Tomato & Cheese Omelette",
        ingredients: ["egg", "tomato", "cheese", "butter", "salt", "pepper"],
        steps: "Beat eggs. Melt butter in pan. Pour eggs, add tomato and cheese. Fold.",
        detailed: {
            serves: 1,
            prep: 5,
            cook: 5,
            ingredientsDetailed: [
                "3 large eggs",
                "1 small ripe tomato, diced",
                "30g cheddar or gruyère, grated",
                "1 tbsp butter",
                "Pinch of salt",
                "Cracked black pepper",
                "Optional: chopped chives"
            ],
            instructions: [
                { text: "Crack eggs into a bowl, season with salt and pepper, beat until just combined." },
                { text: "Heat a non-stick pan over medium heat and melt the butter until foamy." },
                { text: "Pour in eggs and let them set for ~20 seconds, then gently push the edges to the centre.", timer: 60 },
                { text: "While the top is still slightly wet, scatter tomato and cheese over one half.", timer: 30 },
                { text: "Tilt the pan and fold the bare half over the filling. Slide onto a plate.", timer: 30 }
            ]
        }
    },
    {
        name: "Chicken Stir-Fry",
        ingredients: ["chicken", "soy sauce", "garlic", "onion", "capsicum", "oil"],
        steps: "Slice chicken thin. Stir-fry with garlic, onion and capsicum. Splash soy sauce.",
        detailed: {
            serves: 2,
            prep: 10,
            cook: 12,
            ingredientsDetailed: [
                "400g chicken thigh, sliced thin",
                "1 red capsicum, sliced",
                "1 brown onion, sliced",
                "3 cloves garlic, minced",
                "2 tbsp soy sauce",
                "1 tbsp oyster sauce (optional)",
                "2 tbsp neutral oil",
                "1 tsp grated ginger (optional)"
            ],
            instructions: [
                { text: "Pat chicken dry, then toss with 1 tbsp soy sauce. Let it sit while you prep the veg.", timer: 120 },
                { text: "Heat 1 tbsp oil in a wok over high heat. Stir-fry chicken in a single layer until golden, then remove.", timer: 240 },
                { text: "Add remaining oil. Stir-fry onion and capsicum until just tender but still crisp.", timer: 180 },
                { text: "Add garlic and ginger and cook 30 seconds until fragrant.", timer: 30 },
                { text: "Return chicken, splash in remaining soy and oyster sauce, toss for 1 minute and serve over rice.", timer: 60 }
            ]
        }
    },
    {
        name: "Veggie Soup",
        ingredients: ["carrot", "onion", "celery", "potato", "stock", "salt"],
        steps: "Dice veg. Sweat in pot. Cover with stock. Simmer 25 min. Season.",
        detailed: {
            serves: 4,
            prep: 10,
            cook: 35,
            ingredientsDetailed: [
                "2 carrots, diced",
                "1 large onion, diced",
                "2 celery stalks, diced",
                "2 medium potatoes, cubed",
                "1.2 L vegetable or chicken stock",
                "2 tbsp olive oil",
                "1 bay leaf, sprig of thyme",
                "Salt and pepper to taste"
            ],
            instructions: [
                { text: "Heat olive oil in a heavy pot over medium heat." },
                { text: "Add onion, carrot and celery. Sweat with a pinch of salt until softened, ~8 minutes.", timer: 480 },
                { text: "Add potatoes, bay leaf and thyme. Stir for 1 minute.", timer: 60 },
                { text: "Pour in stock, bring to a gentle boil, then reduce to a simmer for 25 minutes.", timer: 1500 },
                { text: "Taste, adjust seasoning. Optional: blitz half with a stick blender for a creamier body." }
            ]
        }
    },
    {
        name: "Bean Quesadilla",
        ingredients: ["tortilla", "beans", "cheese", "onion"],
        steps: "Mash beans with onion. Spread on tortilla, add cheese, fold. Toast in pan both sides.",
        detailed: {
            serves: 2,
            prep: 5,
            cook: 8,
            ingredientsDetailed: [
                "4 flour tortillas",
                "1 can (400g) black or pinto beans, drained",
                "100g cheddar or Monterey jack, grated",
                "½ small red onion, finely diced",
                "1 tsp ground cumin",
                "Hot sauce, lime, coriander to serve"
            ],
            instructions: [
                { text: "Mash beans roughly with cumin, salt and a splash of water until spreadable." },
                { text: "Spread bean mash over half of each tortilla, top with cheese and red onion, then fold over." },
                { text: "Heat a dry pan over medium. Toast quesadillas 2–3 minutes per side until golden and the cheese has melted.", timer: 150 },
                { text: "Flip carefully and toast the other side.", timer: 150 },
                { text: "Slice into wedges and serve with hot sauce and lime." }
            ]
        }
    },
    {
        name: "Banana Pancakes",
        ingredients: ["banana", "egg", "flour", "milk", "butter"],
        steps: "Mash banana, whisk with egg, milk and flour. Fry small pancakes in butter.",
        detailed: {
            serves: 2,
            prep: 5,
            cook: 12,
            ingredientsDetailed: [
                "2 ripe bananas (the spottier the better)",
                "2 eggs",
                "1 cup self-raising flour",
                "¾ cup milk",
                "1 tbsp butter, plus more for cooking",
                "Pinch of salt, 1 tsp vanilla (optional)",
                "Maple syrup, extra banana to serve"
            ],
            instructions: [
                { text: "Mash bananas in a bowl until mostly smooth." },
                { text: "Whisk in eggs, milk, vanilla, then fold in flour and salt until just combined — don't overmix." },
                { text: "Rest the batter for 5 minutes while the pan warms.", timer: 300 },
                { text: "Melt butter in a non-stick pan over medium-low. Spoon ¼ cup pools of batter and cook until bubbles form on top.", timer: 120 },
                { text: "Flip and cook the other side until puffed and golden.", timer: 90 },
                { text: "Serve in a stack with extra banana, butter and a drizzle of maple syrup." }
            ]
        }
    },
    {
        name: "Tuna Pasta Salad",
        ingredients: ["pasta", "tuna", "mayonnaise", "onion", "sweetcorn"],
        steps: "Cook and cool pasta. Mix with drained tuna, mayo, diced onion, sweetcorn.",
        detailed: {
            serves: 4,
            prep: 10,
            cook: 10,
            ingredientsDetailed: [
                "300g short pasta (fusilli, penne)",
                "2 cans tuna in oil or springwater, drained",
                "½ cup mayonnaise (or half mayo / half Greek yoghurt)",
                "1 small red onion, finely diced",
                "1 cup sweetcorn (canned or frozen-then-thawed)",
                "1 tbsp lemon juice",
                "Salt, pepper, chopped parsley or dill"
            ],
            instructions: [
                { text: "Boil pasta in well-salted water until al dente.", timer: 540 },
                { text: "Drain and rinse under cold water to stop the cooking and cool it down.", timer: 60 },
                { text: "In a large bowl combine mayo, lemon juice, salt and pepper." },
                { text: "Fold through pasta, tuna, onion, sweetcorn and herbs. Taste and adjust seasoning." },
                { text: "Chill for 15 minutes before serving so the flavours come together.", timer: 900 }
            ]
        }
    },
    {
        name: "Roast Veg Bowl",
        ingredients: ["potato", "carrot", "capsicum", "olive oil", "salt", "pepper"],
        steps: "Chop veg. Toss with oil, salt, pepper. Roast 200°C for 30 min.",
        detailed: {
            serves: 2,
            prep: 10,
            cook: 35,
            ingredientsDetailed: [
                "2 medium potatoes, cubed",
                "2 carrots, cut into chunks",
                "1 capsicum, sliced",
                "3 tbsp olive oil",
                "1 tsp smoked paprika (optional)",
                "1 tsp flaky sea salt",
                "Cracked black pepper",
                "Optional drizzle: tahini-lemon yoghurt"
            ],
            instructions: [
                { text: "Preheat oven to 200°C (fan-forced) and line a tray with baking paper." },
                { text: "Toss all the vegetables with olive oil, paprika, salt and pepper directly on the tray." },
                { text: "Spread in a single layer — don't overcrowd or they'll steam, not roast." },
                { text: "Roast until edges are caramelised and a fork pierces the potato easily.", timer: 1800 },
                { text: "Pile into a bowl, drizzle with tahini-lemon yoghurt and finish with fresh herbs." }
            ]
        }
    },
    {
        name: "Cheesy Scrambled Eggs",
        ingredients: ["egg", "cheese", "butter", "milk", "salt"],
        steps: "Whisk eggs with milk. Cook gently in butter, fold in cheese at the end.",
        detailed: {
            serves: 2,
            prep: 3,
            cook: 6,
            ingredientsDetailed: [
                "4 large eggs",
                "2 tbsp milk or cream",
                "30g sharp cheddar, grated",
                "1 tbsp butter",
                "Pinch of salt",
                "Cracked black pepper",
                "Buttered toast to serve"
            ],
            instructions: [
                { text: "Whisk eggs, milk, salt and pepper until evenly combined." },
                { text: "Melt butter in a non-stick pan over LOW heat — patience is the secret to creamy eggs." },
                { text: "Pour in eggs. Stir slowly with a silicone spatula, drawing curds from the edges to the centre.", timer: 240 },
                { text: "When still slightly wet and glossy, fold in cheese off the heat. Residual heat will finish them.", timer: 30 },
                { text: "Pile onto hot buttered toast and crack over more pepper." }
            ]
        }
    },
    {
        name: "Spaghetti Carbonara",
        ingredients: ["spaghetti", "egg", "bacon", "parmesan", "garlic", "pepper"],
        steps: "Cook spaghetti. Crisp bacon. Toss hot pasta with egg-cheese mix off the heat.",
        detailed: {
            serves: 2, prep: 5, cook: 15,
            ingredientsDetailed: ["200g spaghetti", "120g streaky bacon, diced", "2 large eggs + 1 yolk", "60g parmesan, grated", "2 cloves garlic, lightly bashed", "Cracked black pepper", "Salt for the pasta water"],
            instructions: [
                { text: "Bring a large pot of salted water to the boil and cook spaghetti until al dente, about 9 minutes.", timer: 540 },
                { text: "Meanwhile, fry bacon in a cold pan over medium heat with the garlic until crisp." },
                { text: "Discard the garlic. Whisk eggs, yolk, parmesan and lots of pepper in a bowl." },
                { text: "Reserve a mug of pasta water, then drain the spaghetti." },
                { text: "Off the heat, tip pasta into the bacon pan, add the egg mixture and toss vigorously until silky." },
                { text: "Plate immediately with extra parmesan and pepper." }
            ]
        }
    },
    {
        name: "Thai Green Curry",
        ingredients: ["chicken", "coconut milk", "green curry paste", "capsicum", "basil", "fish sauce", "rice"],
        steps: "Fry curry paste, add coconut milk, simmer chicken and veg, finish with basil. Serve over rice.",
        detailed: {
            serves: 4, prep: 10, cook: 20,
            ingredientsDetailed: ["500g chicken thigh, sliced", "400ml can coconut milk", "3 tbsp Thai green curry paste", "1 red capsicum, sliced", "1 small zucchini, cubed", "2 tbsp fish sauce", "1 tsp brown sugar", "Handful Thai basil leaves", "1 lime, cut into wedges", "Steamed jasmine rice to serve"],
            instructions: [
                { text: "Spoon the thick coconut cream from the top of the can into a wok and heat until it splits." },
                { text: "Add curry paste and fry until very fragrant." },
                { text: "Stir in chicken and coat in the paste, then pour in the rest of the coconut milk." },
                { text: "Add vegetables, fish sauce and sugar. Simmer for 12 minutes until chicken is cooked.", timer: 720 },
                { text: "Stir through basil leaves off the heat. Taste — adjust with extra fish sauce or lime." },
                { text: "Spoon over jasmine rice with lime wedges on the side." }
            ]
        }
    },
    {
        name: "Mushroom Risotto",
        ingredients: ["arborio rice", "mushroom", "onion", "garlic", "stock", "white wine", "parmesan", "butter"],
        steps: "Toast rice, deglaze with wine, ladle in stock, finish with mushrooms, butter and parmesan.",
        detailed: {
            serves: 4, prep: 10, cook: 30,
            ingredientsDetailed: ["300g arborio rice", "300g mixed mushrooms, sliced", "1 small onion, finely diced", "2 cloves garlic, minced", "1.2 L hot stock", "150ml dry white wine", "60g unsalted butter, cubed", "60g parmesan, grated", "2 tbsp olive oil", "Salt, pepper, parsley"],
            instructions: [
                { text: "Sauté mushrooms in 1 tbsp olive oil over high heat until deeply golden. Set aside." },
                { text: "In the same pan, soften onion and garlic in remaining oil over medium heat." },
                { text: "Add rice and toast for 1–2 minutes until edges look translucent.", timer: 120 },
                { text: "Pour in the wine and stir until almost fully absorbed." },
                { text: "Add hot stock one ladle at a time, stirring often, for about 20 minutes.", timer: 1200 },
                { text: "When rice is creamy and al dente, fold through mushrooms, butter and parmesan. Rest 1 minute." },
                { text: "Plate with extra parmesan, parsley and pepper." }
            ]
        }
    },
    {
        name: "Smashed Avocado Toast",
        ingredients: ["avocado", "bread", "lemon", "chilli flakes", "salt", "pepper"],
        steps: "Toast bread. Mash avocado with lemon and seasoning. Pile on top.",
        detailed: {
            serves: 2, prep: 5, cook: 3,
            ingredientsDetailed: ["2 thick slices sourdough", "1 ripe avocado", "Juice of ½ lemon", "Pinch of chilli flakes", "Flaky sea salt", "Cracked black pepper", "Optional: feta, poached egg, dukkah"],
            instructions: [
                { text: "Toast the sourdough until deeply golden and crisp." },
                { text: "Scoop avocado into a bowl. Add lemon juice, salt and pepper, and mash with a fork — leave some texture." },
                { text: "Pile generously on the warm toast." },
                { text: "Finish with chilli flakes, more salt and any extras." }
            ]
        }
    },
    {
        name: "Chickpea Curry",
        ingredients: ["chickpeas", "onion", "tomato", "garlic", "ginger", "curry powder", "coconut milk", "rice"],
        steps: "Sauté aromatics, stir in spices and tomato, add chickpeas and coconut milk, simmer.",
        detailed: {
            serves: 4, prep: 10, cook: 25,
            ingredientsDetailed: ["2 cans chickpeas, drained", "1 large onion, diced", "3 cloves garlic, minced", "1 tbsp grated ginger", "400g can chopped tomatoes", "400ml coconut milk", "2 tbsp curry powder", "1 tsp ground cumin", "2 tbsp neutral oil", "Salt, fresh coriander to serve", "Steamed basmati rice"],
            instructions: [
                { text: "Heat oil in a saucepan and fry onion until softened and just golden." },
                { text: "Add garlic and ginger and cook for 1 minute.", timer: 60 },
                { text: "Stir in spices and toast for 30 seconds — they should smell fragrant.", timer: 30 },
                { text: "Add tomatoes and break down with a wooden spoon. Simmer for 5 minutes until jammy.", timer: 300 },
                { text: "Pour in chickpeas and coconut milk. Season and simmer for 12 minutes.", timer: 720 },
                { text: "Top with coriander and serve with rice." }
            ]
        }
    },
    {
        name: "Greek Salad",
        ingredients: ["tomato", "cucumber", "red onion", "feta", "olives", "olive oil", "oregano"],
        steps: "Chop veg, layer with feta and olives, dress with olive oil and oregano.",
        detailed: {
            serves: 4, prep: 10, cook: 0,
            ingredientsDetailed: ["4 ripe tomatoes, cut into wedges", "1 cucumber, sliced into half-moons", "½ red onion, thinly sliced", "200g block feta cheese", "100g Kalamata olives", "3 tbsp extra virgin olive oil", "1 tbsp red wine vinegar", "1 tsp dried oregano", "Salt, pepper"],
            instructions: [
                { text: "Soak the sliced red onion in cold water for 10 minutes to soften the bite.", timer: 600 },
                { text: "Arrange tomatoes, cucumber and drained onion in a wide bowl." },
                { text: "Tip over the olives, then place the whole block of feta on top." },
                { text: "Drizzle with olive oil and vinegar, sprinkle with oregano, salt and pepper." },
                { text: "Toss gently at the table just before serving." }
            ]
        }
    },
    {
        name: "Beef Tacos",
        ingredients: ["beef mince", "taco seasoning", "tortilla", "lettuce", "tomato", "cheese", "onion", "lime"],
        steps: "Brown mince with seasoning. Pile into tortillas with crunchy toppings.",
        detailed: {
            serves: 4, prep: 10, cook: 15,
            ingredientsDetailed: ["500g beef mince", "2 tbsp taco seasoning", "8 small tortillas", "2 cups shredded lettuce", "2 tomatoes, diced", "100g grated cheese", "½ red onion, finely chopped", "1 lime, cut into wedges", "Sour cream, hot sauce, coriander to serve"],
            instructions: [
                { text: "Brown the beef mince in a hot dry pan, breaking it up, until well-coloured." },
                { text: "Sprinkle in seasoning and a splash of water. Stir until glossy and clinging to the meat." },
                { text: "Warm the tortillas in a dry pan or under the grill for 20–30 seconds each side.", timer: 60 },
                { text: "Set out the toppings buffet-style." },
                { text: "Build tacos: spoonful of beef, a squeeze of lime, then pile on lettuce, tomato, onion, cheese and sauces." }
            ]
        }
    },
    {
        name: "Honey Soy Salmon",
        ingredients: ["salmon", "soy sauce", "honey", "garlic", "ginger", "rice", "broccoli"],
        steps: "Marinate salmon, sear in pan, glaze with sauce. Serve with rice and steamed greens.",
        detailed: {
            serves: 2, prep: 5, cook: 12,
            ingredientsDetailed: ["2 salmon fillets (~150g each)", "3 tbsp soy sauce", "2 tbsp honey", "2 cloves garlic, minced", "1 tsp grated ginger", "1 tbsp neutral oil", "1 cup jasmine rice (cooked)", "1 head broccoli, cut into florets", "Sesame seeds, sliced spring onion to serve"],
            instructions: [
                { text: "Whisk soy, honey, garlic and ginger. Pour half over the salmon and rest the rest aside." },
                { text: "Steam broccoli over boiling water until just tender and bright green." },
                { text: "Heat oil in a non-stick pan. Place salmon skin-side down and sear undisturbed for 4 minutes.", timer: 240 },
                { text: "Flip and cook 1–2 minutes more depending on thickness.", timer: 120 },
                { text: "Add the reserved sauce to the pan. Bubble until syrupy and spoon over the salmon." },
                { text: "Serve over rice with broccoli, sesame seeds and spring onion." }
            ]
        }
    },
    {
        name: "Margherita Pizza",
        ingredients: ["pizza dough", "tomato passata", "mozzarella", "basil", "olive oil", "salt"],
        steps: "Stretch dough, top simply with sauce and mozzarella. Bake very hot. Finish with basil.",
        detailed: {
            serves: 2, prep: 15, cook: 12,
            ingredientsDetailed: ["1 ball pizza dough (~250g)", "100ml tomato passata", "150g fresh mozzarella, torn", "Handful fresh basil leaves", "1 tbsp olive oil", "Pinch of salt", "Semolina or flour for dusting"],
            instructions: [
                { text: "Preheat oven as hot as it goes (250°C+) with a baking tray inside." },
                { text: "On a floured surface, stretch the dough into a thin round." },
                { text: "Spread passata thinly, leaving a border. Season with salt." },
                { text: "Scatter over torn mozzarella." },
                { text: "Slide onto the hot tray and bake for 9 minutes until base is crisp.", timer: 540 },
                { text: "Drizzle with olive oil, scatter basil and slice." }
            ]
        }
    },
    {
        name: "Lemon Garlic Roast Chicken",
        ingredients: ["chicken", "lemon", "garlic", "olive oil", "rosemary", "salt", "pepper"],
        steps: "Rub whole chicken with lemon, garlic, herbs and oil. Roast until golden and juicy.",
        detailed: {
            serves: 4, prep: 10, cook: 75,
            ingredientsDetailed: ["1.5 kg whole chicken", "1 lemon, halved", "1 whole bulb garlic, halved horizontally", "3 tbsp olive oil", "2 sprigs rosemary", "2 tsp flaky sea salt", "Cracked black pepper"],
            instructions: [
                { text: "Preheat oven to 200°C (fan)." },
                { text: "Pat chicken very dry with paper towels and rub all over with olive oil, salt and pepper." },
                { text: "Stuff the cavity with lemon halves, garlic and rosemary." },
                { text: "Place breast-up in a roasting tin. Roast for ~1h15, basting once or twice.", timer: 4500 },
                { text: "Check juices run clear from the thickest part of the thigh." },
                { text: "Rest, loosely covered, for 10 minutes before carving.", timer: 600 }
            ]
        }
    },
    {
        name: "Miso Noodle Soup",
        ingredients: ["miso paste", "ramen noodles", "egg", "spring onion", "ginger", "garlic", "soy sauce", "spinach"],
        steps: "Build a quick miso broth, cook noodles, top with soft egg and greens.",
        detailed: {
            serves: 2, prep: 5, cook: 15,
            ingredientsDetailed: ["2 tbsp white miso paste", "2 nests ramen or soba noodles", "2 eggs", "2 spring onions, sliced", "1 tsp grated ginger", "1 clove garlic, minced", "1 tbsp soy sauce", "2 cups baby spinach", "1 L water or dashi"],
            instructions: [
                { text: "Lower eggs into a pan of simmering water and cook for 6½ minutes for jammy yolks.", timer: 390 },
                { text: "Transfer eggs to ice water, peel and slice in half." },
                { text: "Bring water/dashi, ginger and garlic to a simmer. Whisk in miso and soy sauce off the boil." },
                { text: "Cook the noodles according to packet directions in a separate pot." },
                { text: "Divide noodles between bowls. Pour over the broth, add spinach and spring onion." },
                { text: "Top each bowl with a halved egg." }
            ]
        }
    },
    {
        name: "Chocolate Mug Cake",
        ingredients: ["flour", "sugar", "cocoa", "milk", "oil", "baking powder", "vanilla"],
        steps: "Whisk everything in a mug. Microwave for ~90 seconds. Eat with a spoon.",
        detailed: {
            serves: 1, prep: 3, cook: 2,
            ingredientsDetailed: ["4 tbsp plain flour", "3 tbsp caster sugar", "2 tbsp cocoa powder", "¼ tsp baking powder", "Pinch of salt", "3 tbsp milk", "2 tbsp neutral oil", "¼ tsp vanilla extract", "Optional: 1 tbsp chocolate chips, scoop of ice cream"],
            instructions: [
                { text: "In a large microwave-safe mug, whisk together flour, sugar, cocoa, baking powder and salt." },
                { text: "Add milk, oil and vanilla. Whisk until completely smooth — no dry pockets." },
                { text: "Drop chocolate chips on top if using." },
                { text: "Microwave on HIGH for 80–90 seconds (don't overcook).", timer: 90 },
                { text: "Let stand for 1 minute, then dig in with a spoon.", timer: 60 }
            ]
        }
    }
];

const pantry = new Set();

/* ---------- Ingredient catalogue (for autocomplete) ---------- */
const INGREDIENT_CATALOGUE = [
    "chicken", "chicken breast", "chicken thigh", "chicken wings", "beef", "beef mince", "steak", "pork", "pork mince", "bacon", "ham", "sausage", "chorizo", "pancetta", "prosciutto", "lamb", "lamb mince", "turkey", "duck",
    "salmon", "tuna", "prawns", "shrimp", "cod", "white fish", "anchovies", "smoked salmon", "calamari", "crab", "lobster", "scallops", "mussels",
    "egg", "egg whites", "milk", "butter", "cream", "sour cream", "yogurt", "greek yogurt", "cheese", "cheddar", "mozzarella", "parmesan", "feta", "ricotta", "cream cheese", "cottage cheese", "halloumi", "goat cheese", "brie", "blue cheese", "gruyere", "mascarpone",
    "onion", "red onion", "spring onion", "shallot", "garlic", "ginger", "tomato", "cherry tomatoes", "cucumber", "lettuce", "spinach", "rocket", "kale", "cabbage", "carrot", "celery", "capsicum", "red capsicum", "bell pepper", "mushroom", "potato", "sweet potato", "broccoli", "cauliflower", "zucchini", "eggplant", "pumpkin", "corn", "sweetcorn", "peas", "green beans", "snow peas", "asparagus", "leek", "fennel", "beetroot", "radish", "bok choy", "brussels sprouts", "artichoke", "avocado", "olives", "chilli", "jalapeno", "okra", "turnip", "parsnip",
    "lemon", "lime", "orange", "grapefruit", "apple", "pear", "banana", "strawberry", "blueberry", "raspberry", "blackberry", "grape", "pineapple", "mango", "peach", "plum", "cherry", "watermelon", "kiwi", "pomegranate", "fig", "apricot", "passionfruit",
    "rice", "brown rice", "jasmine rice", "basmati rice", "arborio rice", "quinoa", "couscous", "bulgur", "barley", "oats", "rolled oats", "pasta", "spaghetti", "penne", "fusilli", "linguine", "fettuccine", "macaroni", "lasagna sheets", "ramen noodles", "rice noodles", "soba noodles", "udon", "egg noodles", "tortilla", "wrap", "pita", "naan", "bread", "sourdough", "baguette", "bagel", "english muffin", "breadcrumbs", "panko", "polenta",
    "beans", "black beans", "kidney beans", "white beans", "cannellini beans", "pinto beans", "chickpeas", "lentils", "red lentils", "green lentils", "split peas", "edamame", "tofu", "tempeh",
    "olive oil", "vegetable oil", "sesame oil", "coconut oil", "canola oil", "ghee", "salt", "pepper", "sugar", "brown sugar", "honey", "maple syrup", "vinegar", "balsamic vinegar", "white wine vinegar", "rice vinegar", "apple cider vinegar", "lemon juice", "lime juice", "soy sauce", "fish sauce", "oyster sauce", "hoisin sauce", "worcestershire sauce", "tomato sauce", "tomato paste", "tomato passata", "ketchup", "mayonnaise", "mustard", "dijon mustard", "wholegrain mustard", "hot sauce", "sriracha", "tabasco", "tahini", "peanut butter", "almond butter", "nutella", "jam", "marmalade", "vegemite",
    "basil", "thai basil", "parsley", "coriander", "cilantro", "mint", "dill", "thyme", "rosemary", "sage", "oregano", "chives", "tarragon", "bay leaf", "curry leaves",
    "cumin", "paprika", "smoked paprika", "turmeric", "cinnamon", "nutmeg", "cardamom", "cloves", "ginger powder", "garlic powder", "onion powder", "chilli flakes", "chilli powder", "cayenne", "curry powder", "garam masala", "chinese five spice", "italian herbs", "mixed herbs", "vanilla", "saffron", "fennel seeds", "mustard seeds", "coriander seeds", "star anise", "allspice",
    "flour", "plain flour", "self-raising flour", "wholemeal flour", "almond flour", "cornflour", "cornstarch", "baking powder", "baking soda", "yeast", "cocoa", "cocoa powder", "chocolate", "dark chocolate", "milk chocolate", "white chocolate", "chocolate chips", "icing sugar", "caster sugar", "cream of tartar", "gelatin",
    "almonds", "walnuts", "cashews", "pecans", "pistachios", "peanuts", "hazelnuts", "macadamia", "pine nuts", "sesame seeds", "sunflower seeds", "pumpkin seeds", "chia seeds", "flax seeds", "poppy seeds",
    "almond milk", "oat milk", "soy milk", "coconut milk", "coconut cream", "stock", "chicken stock", "beef stock", "vegetable stock", "wine", "white wine", "red wine", "beer", "miso paste", "curry paste", "green curry paste", "red curry paste", "harissa", "pesto", "salsa", "guacamole", "hummus", "kimchi", "sauerkraut", "pickles", "capers", "sun-dried tomatoes", "raisins", "sultanas", "dates", "dried cranberries"
];
const INGREDIENTS = Array.from(new Set(INGREDIENT_CATALOGUE.map((i) => i.toLowerCase()))).sort();

/* ---------- Favourites (persisted in localStorage) ---------- */
const FAV_KEY = "leftover-lab:favourites:v1";
const favourites = loadFavourites();

function loadFavourites() {
    try {
        const raw = localStorage.getItem(FAV_KEY);
        return raw ? new Map(JSON.parse(raw)) : new Map();
    } catch { return new Map(); }
}
function saveFavourites() {
    try { localStorage.setItem(FAV_KEY, JSON.stringify(Array.from(favourites.entries()))); }
    catch (e) { console.warn("Couldn't save favourites", e); }
}
function favKey(recipe) { return recipe.name.toLowerCase().trim(); }
function cssEscape(s) { return s.replace(/["\\]/g, "\\$&"); }

function toggleFavourite(recipe) {
    const key = favKey(recipe);
    if (favourites.has(key)) {
        favourites.delete(key);
    } else {
        favourites.set(key, {
            name: recipe.name,
            ingredients: recipe.ingredients || [],
            steps: recipe.steps || "",
            totalMinutes: recipe.totalMinutes || ((recipe.detailed?.prep || 0) + (recipe.detailed?.cook || 0)),
            detailed: recipe.detailed || null,
            savedAt: Date.now(),
            imgSeed: recipe.imgSeed || Math.floor(Math.random() * 10000)
        });
    }
    saveFavourites();
    renderFavourites();
    document.querySelectorAll(`[data-fav-key="${cssEscape(key)}"]`).forEach(updateHeartBtn);
}

function updateHeartBtn(btn) {
    const active = favourites.has(btn.dataset.favKey);
    btn.classList.toggle("active", active);
    btn.setAttribute("aria-pressed", String(active));
    btn.setAttribute("aria-label", active ? "Remove from favourites" : "Save to favourites");
}

function heartButtonHTML(recipe) {
    const key = favKey(recipe);
    const active = favourites.has(key);
    return `<button type="button" class="fav-btn ${active ? "active" : ""}" data-fav-key="${key}" aria-pressed="${active}" aria-label="${active ? "Remove from favourites" : "Save to favourites"}">
        <span class="material-symbols-rounded" aria-hidden="true">favorite</span>
    </button>`;
}

function attachHeartHandler(btn, recipe) {
    btn.addEventListener("click", (e) => {
        e.stopPropagation();
        toggleFavourite(recipe);
        btn.classList.remove("pop");
        void btn.offsetWidth;
        btn.classList.add("pop");
    });
}

function formatSavedAt(ts) {
    if (!ts) return "";
    const days = Math.floor((Date.now() - ts) / 86400000);
    if (days === 0) return "today";
    if (days === 1) return "yesterday";
    if (days < 7) return `${days} days ago`;
    return new Date(ts).toLocaleDateString(undefined, { month: "short", day: "numeric" });
}

function renderFavourites() {
    const grid = document.getElementById("favourites-grid");
    const count = document.getElementById("favourites-count");
    const empty = document.getElementById("favourites-empty");
    const tabCount = document.getElementById("tab-fav-count");
    if (!grid) return;
    const items = Array.from(favourites.values()).sort((a, b) => b.savedAt - a.savedAt);
    if (tabCount) {
        if (items.length > 0) { tabCount.hidden = false; tabCount.textContent = ` (${items.length})`; }
        else { tabCount.hidden = true; tabCount.textContent = ""; }
    }
    if (items.length === 0) {
        grid.innerHTML = ""; grid.hidden = true;
        if (empty) empty.hidden = false;
        if (count) count.textContent = "";
        return;
    }
    grid.hidden = false;
    if (empty) empty.hidden = true;
    if (count) count.textContent = `${items.length} saved`;
    grid.innerHTML = "";
    items.forEach((r, idx) => grid.appendChild(buildRecipeCard(r, idx, true)));
}

function setupTabs() {
    const tabs = document.querySelectorAll(".tab");
    const panels = {
        find: document.getElementById("panel-find"),
        favourites: document.getElementById("panel-favourites")
    };
    tabs.forEach((tab) => {
        tab.addEventListener("click", () => {
            const target = tab.dataset.tab;
            tabs.forEach((t) => {
                const active = t === tab;
                t.classList.toggle("active", active);
                t.setAttribute("aria-selected", String(active));
            });
            Object.entries(panels).forEach(([key, panel]) => {
                if (panel) panel.hidden = key !== target;
            });
            if (target === "favourites") renderFavourites();
        });
    });
}

/* ---------- Reusable recipe card builder ---------- */
function buildRecipeCard(r, idx, isFav = false) {
    const card = document.createElement("article");
    card.className = "recipe-card";
    card.style.animationDelay = `${idx * 60}ms`;
    const have = Array.from(pantry);
    const matched = (r.ingredients || []).filter((ing) => have.includes(String(ing).toLowerCase()));
    const pct = r.ingredients?.length ? Math.round((matched.length / r.ingredients.length) * 100) : 0;
    const totalTime = r.totalMinutes || ((r.detailed?.prep || 0) + (r.detailed?.cook || 0));
    const showMatch = pantry.size > 0 && (r.ingredients?.length || 0) > 0;
    card.innerHTML = `
        <div class="recipe-card-body">
            <div class="recipe-card-header">
                ${heartButtonHTML(r)}
                ${totalTime ? `<span class="time-chip"><span class="material-symbols-rounded chip-icon" aria-hidden="true">schedule</span>${totalTime} min</span>` : ""}
            </div>
            <h3>${r.name}</h3>
            ${showMatch
                ? `<p class="match"><span class="material-symbols-rounded match-icon" aria-hidden="true">check_circle</span>${matched.length}/${r.ingredients.length} ingredients · ${pct}% match</p>
                   <div class="match-bar"><div class="match-bar-fill" style="width:${pct}%"></div></div>`
                : `<p class="match saved-meta">Saved ${formatSavedAt(r.savedAt)}</p>`}
            <strong>Ingredients</strong>
            <ul>${(r.ingredients || []).map((i) => isFav ? `<li>${i}</li>` : `<li class="${have.includes(String(i).toLowerCase()) ? "have" : "miss"}">${i}</li>`).join("")}</ul>
            <button class="generate-btn" type="button">${r.detailed ? "View full recipe" : "Generate full recipe"}</button>
        </div>
    `;
    attachHeartHandler(card.querySelector(".fav-btn"), r);
    card.querySelector(".generate-btn").addEventListener("click", () => openFullRecipe(r));
    card.addEventListener("click", (e) => {
        if (e.target.closest(".fav-btn") || e.target.closest(".generate-btn")) return;
        openFullRecipe(r);
    });
    return card;
}

/* ---------- AI integration (Pollinations text API) ---------- */
const POLLI_URL = "https://text.pollinations.ai/openai";
const fullRecipeCache = new Map();
let suggestionSeed = 0;

function stripFences(s) { return s.replace(/^```(?:json)?\s*/i, "").replace(/```\s*$/, "").trim(); }

async function aiSuggestions(have, count) {
    suggestionSeed++;
    const pantryList = have.length ? have.join(", ") : "common pantry staples";
    const seenNames = Array.from(document.querySelectorAll(".recipe-card h3")).map((h) => h.textContent);
    const avoidLine = seenNames.length ? `Avoid suggesting any of these (already shown): ${seenNames.join(", ")}.` : "";
    const prompt = `You are a creative chef AI suggesting recipes a home cook can make tonight.
Pantry available: ${pantryList}.
Generate exactly ${count} DIFFERENT recipe ideas. Mix cuisines and techniques. Be creative — vary the style with each request (request seed: ${suggestionSeed}).
Prefer recipes that use mostly the pantry items, but a couple of common extras (salt, oil, herbs) are fine.
${avoidLine}

Return ONLY valid JSON in this schema:
{"recipes":[{"name":"Catchy descriptive recipe name","ingredients":["lowercase","key","ingredients"],"steps":"One short sentence summary","totalMinutes":25}]}`;
    const res = await fetch(POLLI_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            model: "openai",
            messages: [
                { role: "system", content: "You are a recipe API that returns strict JSON only." },
                { role: "user", content: prompt }
            ],
            response_format: { type: "json_object" },
            seed: suggestionSeed * 7919 + Date.now() % 1000
        })
    });
    if (!res.ok) throw new Error("API " + res.status);
    const data = await res.json();
    const parsed = JSON.parse(stripFences(data.choices?.[0]?.message?.content || "{}"));
    const recipes = (parsed.recipes || []).map((r) => ({
        name: r.name,
        ingredients: (r.ingredients || []).map((i) => String(i).toLowerCase()),
        steps: r.steps || "",
        totalMinutes: r.totalMinutes || 0
    }));
    if (recipes.length === 0) throw new Error("No recipes returned");
    return recipes;
}

async function aiFullRecipe(recipe, have) {
    const cacheKey = recipe.name.toLowerCase();
    if (fullRecipeCache.has(cacheKey)) return fullRecipeCache.get(cacheKey);

    const example = {
        serves: 2,
        prep: 5,
        cook: 12,
        ingredientsDetailed: [
            "200g spaghetti or linguine",
            "60g unsalted butter",
            "4 cloves garlic, finely minced",
            "Small handful flat-leaf parsley, chopped",
            "1 tsp flaky sea salt",
            "Freshly cracked black pepper",
            "Optional: pinch of chilli flakes, grated parmesan"
        ],
        instructions: [
            { text: "Bring a large pot of well-salted water to a rolling boil." },
            { text: "Add pasta and cook until al dente (check packet — usually around 9 minutes).", timer: 540 },
            { text: "Meanwhile, melt butter in a wide pan over low-medium heat. Add minced garlic and gently sizzle until fragrant and just golden — do not brown.", timer: 120 },
            { text: "Reserve ½ cup of pasta water, then drain pasta." },
            { text: "Tip pasta into the garlic butter, add a splash of pasta water and toss vigorously for 1 minute until the sauce clings glossy.", timer: 60 },
            { text: "Off the heat, fold through parsley, salt and pepper. Plate and finish with extra parsley and parmesan if you like." }
        ]
    };

    const prompt = `Generate a complete, restaurant-quality recipe card for "${recipe.name}".
Pantry the cook already has: ${have.join(", ") || "common staples"}.
Likely key ingredients: ${(recipe.ingredients || []).join(", ") || "use your judgement"}.

Return ONLY valid JSON in EXACTLY this shape (no extra fields):
{
  "serves": <integer, usually 2 or 4>,
  "prep": <minutes, integer>,
  "cook": <minutes, integer>,
  "ingredientsDetailed": [ "string", ... ],
  "instructions": [ { "text": "string", "timer": <seconds, optional> }, ... ]
}

INGREDIENT RULES (ingredientsDetailed):
- 7 to 11 ingredients. Cover everything the steps reference.
- EVERY measurable ingredient MUST start with a number + unit so it can be scaled (e.g. "200g", "1 tbsp", "2 cloves", "1 small", "400ml", "¼ cup"). Use metric.
- Include prep notes after a comma where useful (e.g. "1 brown onion, finely diced", "3 cloves garlic, minced", "400g chicken thigh, sliced thin").
- Unmeasurable seasonings can be plain (e.g. "Flaky sea salt", "Freshly cracked black pepper", "Small handful flat-leaf parsley, chopped").
- The LAST item may be an "Optional: ..." line listing 1–3 tasty add-ons.
- Prefer pantry items where possible; if the recipe needs something not in the pantry, still include it.

INSTRUCTION RULES (instructions):
- 5 to 8 numbered steps. Each step is one clear action with sensory cues ("until fragrant", "until just golden", "edges look translucent").
- Mention temperatures, heat levels and pan/pot sizes where it matters.
- "timer" (in seconds) is OPTIONAL. ONLY include it when the step text explicitly states a number + time unit ("for 5 minutes", "30 seconds", "12 minutes"). NEVER add a timer for chopping, mixing, plating, "until soft", or vague durations.
- Maximum 3 timers per recipe.

Here is a reference example showing the level of detail expected for "Garlic Butter Pasta":
${JSON.stringify(example, null, 2)}

Now produce the JSON for "${recipe.name}" at the same level of detail. Return ONLY the JSON object, no prose, no markdown.`;

    const res = await fetch(POLLI_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            model: "openai",
            messages: [
                { role: "system", content: "You are a precise recipe-card API. You always respond with a single valid JSON object that matches the schema given by the user — no markdown, no commentary." },
                { role: "user", content: prompt }
            ],
            response_format: { type: "json_object" },
            temperature: 0.7
        })
    });
    if (!res.ok) throw new Error("API " + res.status);
    const data = await res.json();
    const parsed = JSON.parse(stripFences(data.choices?.[0]?.message?.content || "{}"));
    const detailed = {
        serves: parsed.serves || 2,
        prep: parsed.prep || 0,
        cook: parsed.cook || 0,
        ingredientsDetailed: parsed.ingredientsDetailed || [],
        instructions: (parsed.instructions || []).map((s) => ({
            text: s.text || "",
            timer: typeof s.timer === "number" && s.timer > 0 ? s.timer : undefined
        }))
    };
    fullRecipeCache.set(cacheKey, detailed);
    return detailed;
}

function localFallback(have) {
    const scored = RECIPES
        .map((r) => ({ ...r, _matched: r.ingredients.filter((i) => have.includes(i)).length }))
        .filter((r) => have.length === 0 || r._matched > 0)
        .sort((a, b) => b._matched - a._matched)
        .slice(0, 6)
        .map((r) => ({
            name: r.name, ingredients: r.ingredients, steps: r.steps,
            totalMinutes: (r.detailed?.prep || 0) + (r.detailed?.cook || 0),
            detailed: r.detailed
        }));
    return scored.length ? scored : RECIPES.slice(0, 6).map((r) => ({
        name: r.name, ingredients: r.ingredients, steps: r.steps,
        totalMinutes: (r.detailed?.prep || 0) + (r.detailed?.cook || 0),
        detailed: r.detailed
    }));
}

function renderEmptyState(isError) {
    if (isError) {
        return `<div class="empty empty-error">
            <span class="material-symbols-rounded empty-icon" aria-hidden="true">eco</span>
            <h3>No more recipes found</h3>
            <p>We couldn't whip up any recipes right now. Try again, tweak your pantry, or come back in a moment.</p>
            <button type="button" class="more-btn" onclick="showRecipes()">Try again</button>
        </div>`;
    }
    return `<div class="empty">
        <span class="material-symbols-rounded empty-icon" aria-hidden="true">eco</span>
        <h3>No recipes to show</h3>
        <p>Try adjusting your pantry — even one or two extra ingredients can unlock new ideas.</p>
    </div>`;
}

function showToast(msg) {
    let toast = document.getElementById("toast");
    if (!toast) {
        toast = document.createElement("div");
        toast.id = "toast"; toast.className = "toast";
        document.body.appendChild(toast);
    }
    toast.textContent = msg;
    toast.classList.add("show");
    clearTimeout(showToast._t);
    showToast._t = setTimeout(() => toast.classList.remove("show"), 3500);
}

const form = document.getElementById("ingredient-form");
const input = document.getElementById("ingredient-input");
const list = document.getElementById("ingredient-list");
const findBtn = document.getElementById("find-recipes");
const results = document.getElementById("results");
const suggestionsEl = document.getElementById("ingredient-suggestions");

const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const highlighted = suggestionsEl?.querySelector(".sug-item.active");
    if (highlighted && !suggestionsEl.hidden) {
        addIngredient(highlighted.dataset.value);
        return;
    }
    const value = input.value.trim().toLowerCase();
    if (!value) return;
    addIngredient(value);
});

function addIngredient(value) {
    const v = value.trim().toLowerCase();
    if (!v) return;
    if (!pantry.has(v)) {
        pantry.add(v);
        renderPantry();
    }
    input.value = "";
    input.focus();
    closeSuggestions();
}

/* ---------- Autocomplete ---------- */

let activeIdx = -1;
let currentMatches = [];

function openSuggestions() {
    if (!suggestionsEl) return;
    suggestionsEl.hidden = false;
    input.setAttribute("aria-expanded", "true");
}

function closeSuggestions() {
    if (!suggestionsEl) return;
    suggestionsEl.hidden = true;
    suggestionsEl.innerHTML = "";
    activeIdx = -1;
    currentMatches = [];
    input.setAttribute("aria-expanded", "false");
}

function filterIngredients(query) {
    const q = query.trim().toLowerCase();
    if (!q) return INGREDIENTS.filter((i) => !pantry.has(i)).slice(0, 12);
    const starts = [], contains = [];
    for (const ing of INGREDIENTS) {
        if (pantry.has(ing)) continue;
        const idx = ing.indexOf(q);
        if (idx === 0) starts.push(ing);
        else if (idx > 0) contains.push(ing);
    }
    return [...starts, ...contains].slice(0, 10);
}

function renderSuggestions(query) {
    const q = query.trim().toLowerCase();
    if (!q) { closeSuggestions(); return; }
    const matches = filterIngredients(query);
    currentMatches = matches.slice();
    activeIdx = -1;
    const exactMatch = INGREDIENTS.includes(q);

    let html = matches.map((m, i) => {
        let label = m;
        if (q) {
            const idx = m.toLowerCase().indexOf(q);
            if (idx >= 0) {
                label = m.slice(0, idx) + `<mark>${m.slice(idx, idx + q.length)}</mark>` + m.slice(idx + q.length);
            }
        }
        return `<li class="sug-item" role="option" data-idx="${i}" data-value="${m}" id="sug-${i}"><span class="sug-text">${label}</span></li>`;
    }).join("");

    if (q && !exactMatch && !matches.includes(q)) {
        const i = matches.length;
        currentMatches.push(q);
        html += `<li class="sug-item sug-custom" role="option" data-idx="${i}" data-value="${q}" id="sug-${i}"><span class="sug-text">Add <strong>"${q}"</strong> as a new ingredient</span><span class="sug-tag">+</span></li>`;
    }

    if (currentMatches.length === 0) { closeSuggestions(); return; }

    suggestionsEl.innerHTML = html;
    openSuggestions();
    suggestionsEl.querySelectorAll(".sug-item").forEach((li) => {
        li.addEventListener("mousedown", (e) => { e.preventDefault(); addIngredient(li.dataset.value); });
        li.addEventListener("mouseenter", () => setActiveSuggestion(parseInt(li.dataset.idx, 10)));
    });
}

function setActiveSuggestion(idx) {
    if (!suggestionsEl) return;
    activeIdx = idx;
    suggestionsEl.querySelectorAll(".sug-item").forEach((li) => {
        const a = parseInt(li.dataset.idx, 10) === idx;
        li.classList.toggle("active", a);
        if (a) li.scrollIntoView({ block: "nearest" });
    });
    if (idx >= 0) input.setAttribute("aria-activedescendant", `sug-${idx}`);
    else input.removeAttribute("aria-activedescendant");
}

input.addEventListener("input", () => renderSuggestions(input.value));
input.addEventListener("keydown", (e) => {
    if (suggestionsEl.hidden) return;
    if (e.key === "ArrowDown") { e.preventDefault(); setActiveSuggestion(Math.min(currentMatches.length - 1, activeIdx + 1)); }
    else if (e.key === "ArrowUp") { e.preventDefault(); setActiveSuggestion(Math.max(0, activeIdx - 1)); }
    else if (e.key === "Escape") closeSuggestions();
    else if (e.key === "Tab" && activeIdx >= 0) { e.preventDefault(); addIngredient(currentMatches[activeIdx]); }
});
document.addEventListener("click", (e) => { if (!e.target.closest(".input-wrap")) closeSuggestions(); });

findBtn.addEventListener("click", () => showRecipes());

// Init tabs and any saved favourites
setupTabs();
renderFavourites();

function renderPantry() {
    list.innerHTML = "";
    pantry.forEach((item) => {
        const li = document.createElement("li");
        li.textContent = item;
        const remove = document.createElement("button");
        remove.type = "button";
        remove.setAttribute("aria-label", `Remove ${item}`);
        remove.innerHTML = '<span class="material-symbols-rounded" aria-hidden="true">close</span>';
        remove.addEventListener("click", () => {
            pantry.delete(item);
            renderPantry();
        });
        li.appendChild(remove);
        list.appendChild(li);
    });
    const empty = pantry.size === 0;
    findBtn.disabled = empty;
    findBtn.hidden = empty;
}

async function showRecipes(append = false) {
    const have = Array.from(pantry);

    if (!append) {
        results.innerHTML = "";
        for (let i = 0; i < 6; i++) {
            const sk = document.createElement("div");
            sk.className = "recipe-card skeleton-card";
            sk.style.animationDelay = `${i * 60}ms`;
            sk.innerHTML = `
                <div class="recipe-card-body">
                    <div class="sk-line sk-title"></div>
                    <div class="sk-line sk-short"></div>
                    <div class="sk-line sk-bar"></div>
                    <div class="sk-chips"><span></span><span></span><span></span><span></span></div>
                    <div class="sk-line sk-btn"></div>
                </div>`;
            results.appendChild(sk);
        }
    }

    let suggestions = [];
    let aiError = false;
    try {
        suggestions = await aiSuggestions(have, 6);
    } catch (e) {
        console.warn("AI request failed", e);
        aiError = true;
    }

    let usedLocalFallback = false;
    if (!append && suggestions.length === 0) {
        suggestions = localFallback(have);
        if (suggestions.length > 0) usedLocalFallback = true;
    }

    if (!append) results.innerHTML = "";

    if (suggestions.length === 0) {
        if (append) {
            showToast(aiError ? "Couldn't fetch more recipes — try again in a moment." : "No more recipes found.");
            return;
        }
        results.innerHTML = renderEmptyState(aiError);
        const old = document.getElementById("generate-more-wrap");
        if (old) old.remove();
        return;
    }

    if (usedLocalFallback) showToast("Showing local suggestions while the AI catches up.");

    suggestions.forEach((r, idx) => {
        if (!r.imgSeed) r.imgSeed = idx + 1 + Math.floor(Math.random() * 1000);
        results.appendChild(buildRecipeCard(r, idx));
    });

    const oldMore = document.getElementById("generate-more-wrap");
    if (oldMore) oldMore.remove();
    const moreWrap = document.createElement("div");
    moreWrap.id = "generate-more-wrap";
    moreWrap.innerHTML = `<button class="more-btn" type="button"><span class="material-symbols-rounded btn-icon" aria-hidden="true">auto_awesome</span>Generate more recipes</button>`;
    moreWrap.querySelector(".more-btn").addEventListener("click", async (e) => {
        const btn = e.currentTarget;
        btn.disabled = true;
        btn.innerHTML = `<span class="spinner-sm"></span> Generating…`;
        try { await showRecipes(true); }
        finally {
            const newBtn = document.querySelector("#generate-more-wrap .more-btn");
            if (newBtn) {
                newBtn.disabled = false;
                newBtn.innerHTML = '<span class="material-symbols-rounded btn-icon" aria-hidden="true">auto_awesome</span>Generate more recipes';
            }
        }
    });
    results.parentElement.appendChild(moreWrap);
}

/* ---------- Full recipe modal with timers ---------- */

const activeTimers = new Map();

function openFullRecipe(recipe) {
    const overlay = document.createElement("div");
    overlay.className = "modal-overlay";
    overlay.setAttribute("role", "dialog");
    overlay.setAttribute("aria-modal", "true");
    overlay.innerHTML = `
        <div class="modal" role="document">
            <button class="modal-close" type="button" aria-label="Close"><span class="material-symbols-rounded" aria-hidden="true">close</span></button>
            <div class="modal-loading">
                <div class="ai-orb"><span></span><span></span><span></span></div>
                <p class="loading-title">Generating <em>${recipe.name}</em>…</p>
                <p class="loading-sub">Drafting ingredients, steps and timers tuned to your pantry.</p>
                <div class="loading-bar"><div class="loading-bar-fill"></div></div>
            </div>
        </div>
    `;
    document.body.appendChild(overlay);
    document.body.style.overflow = "hidden";

    requestAnimationFrame(() => overlay.classList.add("show"));

    const close = () => {
        overlay.classList.remove("show");
        // Stop all timers in this modal
        activeTimers.forEach((t) => clearInterval(t));
        activeTimers.clear();
        setTimeout(() => {
            overlay.remove();
            document.body.style.overflow = "";
        }, 200);
    };

    overlay.addEventListener("click", (e) => {
        if (e.target === overlay) close();
    });
    overlay.querySelector(".modal-close").addEventListener("click", close);
    document.addEventListener("keydown", function escHandler(e) {
        if (e.key === "Escape") {
            close();
            document.removeEventListener("keydown", escHandler);
        }
    });

    // Fetch AI detailed recipe (or use cached/pre-baked)
    (async () => {
        try {
            if (!recipe.detailed) {
                recipe.detailed = await aiFullRecipe(recipe, Array.from(pantry));
            } else {
                await new Promise((r) => setTimeout(r, 700));
            }
            renderRecipeContent(overlay, recipe);
        } catch (e) {
            console.warn("Full recipe fetch failed", e);
            recipe.detailed = recipe.detailed || {
                serves: 2, prep: 10, cook: 15,
                ingredientsDetailed: recipe.ingredients.map((i) => `Some ${i}`),
                instructions: [{ text: recipe.steps || "Cook everything together until ready." }]
            };
            renderRecipeContent(overlay, recipe);
            showToast("AI was slow — showing a basic version of this recipe.");
        }
    })();
}

function renderRecipeContent(overlay, recipe) {
    const d = recipe.detailed;
    const have = Array.from(pantry);
    const modal = overlay.querySelector(".modal");
    const baseServes = d.serves;
    let currentServes = baseServes;

    if (!recipe.imgSeed) recipe.imgSeed = Math.floor(Math.random() * 10000);
    const heroPrompt = encodeURIComponent(`${recipe.name}, food photo, top down, plate`);
    const heroUrl = `https://image.pollinations.ai/prompt/${heroPrompt}?width=800&height=420&model=turbo&enhance=false&nofeed=true&nologo=true&seed=${recipe.imgSeed}`;
    modal.innerHTML = `
        <button class="modal-close" type="button" aria-label="Close"><span class="material-symbols-rounded" aria-hidden="true">close</span></button>
        <div class="recipe-hero">
            <div class="hero-skeleton"></div>
            <img alt="${recipe.name}" src="${heroUrl}" />
        </div>
        <div class="modal-content">
            <div class="recipe-title-row">
                <h2 class="recipe-title">${recipe.name}</h2>
                <div class="modal-fav">${heartButtonHTML(recipe)}</div>
            </div>
            <div class="recipe-meta">
                <div class="serves-adjuster" aria-label="Adjust serving size">
                    <button type="button" class="serves-btn" data-action="dec" aria-label="Decrease serves"><span class="material-symbols-rounded" aria-hidden="true">remove</span></button>
                    <span class="serves-value"><strong id="serves-count">${currentServes}</strong> serves</span>
                    <button type="button" class="serves-btn" data-action="inc" aria-label="Increase serves"><span class="material-symbols-rounded" aria-hidden="true">add</span></button>
                </div>
                <span class="dot"></span>
                <span><strong>${d.prep}</strong> min prep</span>
                <span class="dot"></span>
                <span><strong>${d.cook}</strong> min cook</span>
            </div>

            <div class="recipe-grid">
                <aside class="recipe-ingredients">
                    <h3>Ingredients</h3>
                    <ul id="ingredients-list">
                        ${renderIngredients(d.ingredientsDetailed, recipe.ingredients, have, 1)}
                    </ul>
                </aside>

                <section class="recipe-steps">
                    <h3>Method</h3>
                    <ol>
                        ${d.instructions.map((step, i) => `
                            <li class="step">
                                <span class="step-num">
                                    <span class="step-num-text">${i + 1}</span>
                                    <span class="material-symbols-rounded step-num-check" aria-hidden="true">check</span>
                                </span>
                                <div class="step-body">
                                    <p>${step.text}</p>
                                    ${step.timer ? renderTimer(step.timer, i) : ""}
                                </div>
                            </li>
                        `).join("")}
                    </ol>
                </section>
            </div>
        </div>
    `;

    const close = () => {
        overlay.classList.remove("show");
        activeTimers.forEach((t) => clearInterval(t));
        activeTimers.clear();
        setTimeout(() => {
            overlay.remove();
            document.body.style.overflow = "";
        }, 200);
    };
    modal.querySelector(".modal-close").addEventListener("click", close);

    // Hero image — fade in on load, hide block on error
    const heroImg = modal.querySelector(".recipe-hero img");
    heroImg.addEventListener("load", () => heroImg.classList.add("loaded"));
    heroImg.addEventListener("error", () => {
        modal.querySelector(".recipe-hero").remove();
    });

    // Modal heart
    const modalFav = modal.querySelector(".modal-fav .fav-btn");
    if (modalFav) attachHeartHandler(modalFav, recipe);

    // Re-save favourite with detailed if we just generated it
    if (favourites.has(favKey(recipe))) {
        const stored = favourites.get(favKey(recipe));
        if (!stored.detailed && recipe.detailed) {
            stored.detailed = recipe.detailed;
            stored.totalMinutes = (recipe.detailed.prep || 0) + (recipe.detailed.cook || 0);
            saveFavourites();
            renderFavourites();
        }
    }

    // Serving adjuster
    const servesEl = modal.querySelector("#serves-count");
    const ingList = modal.querySelector("#ingredients-list");
    const updateServes = (next) => {
        const clamped = Math.max(1, Math.min(20, next));
        if (clamped === currentServes) return;
        currentServes = clamped;
        servesEl.textContent = currentServes;
        servesEl.classList.remove("bump");
        void servesEl.offsetWidth;
        servesEl.classList.add("bump");
        const scale = currentServes / baseServes;
        ingList.innerHTML = renderIngredients(d.ingredientsDetailed, recipe.ingredients, have, scale);
    };
    modal.querySelectorAll(".serves-btn").forEach((b) => {
        b.addEventListener("click", () => {
            updateServes(currentServes + (b.dataset.action === "inc" ? 1 : -1));
        });
    });

    // Wire up timers
    modal.querySelectorAll(".timer").forEach((t) => attachTimer(t));

    // Tap a step to mark it done (toggles strikethrough)
    modal.querySelectorAll(".step").forEach((stepEl) => {
        stepEl.addEventListener("click", (e) => {
            if (e.target.closest(".timer")) return;
            stepEl.classList.toggle("done");
        });
    });
}

function renderIngredients(items, baseIngredients, have, scale) {
    return items.map((ing) => {
        const scaled = scaleIngredient(ing, scale);
        const matched = baseIngredients.some(
            (base) => have.includes(base) && scaled.toLowerCase().includes(base.toLowerCase())
        );
        return `<li class="${matched ? "in-pantry" : ""}">
            <span class="check"><span class="material-symbols-rounded" aria-hidden="true">${matched ? "check" : "circle"}</span></span>
            <span>${scaled}</span>
        </li>`;
    }).join("");
}

/* ---------- Quantity scaling ---------- */

const UNICODE_FRACTIONS = {
    "½": 0.5, "⅓": 1/3, "⅔": 2/3, "¼": 0.25, "¾": 0.75,
    "⅕": 0.2, "⅖": 0.4, "⅗": 0.6, "⅘": 0.8,
    "⅙": 1/6, "⅚": 5/6, "⅛": 0.125, "⅜": 0.375, "⅝": 0.625, "⅞": 0.875
};

const FRAC_CHARS = Object.keys(UNICODE_FRACTIONS).join("");

// Match a leading quantity, optionally a range, optionally followed by a unit-ish space
const QTY_REGEX = new RegExp(
    "^(\\d+\\s+[" + FRAC_CHARS + "]|\\d+\\s*\\/\\s*\\d+|\\d+(?:\\.\\d+)?|[" + FRAC_CHARS + "])" +
    "(?:\\s*[–-]\\s*(\\d+\\s*\\/\\s*\\d+|\\d+(?:\\.\\d+)?|[" + FRAC_CHARS + "]))?"
);

function parseQty(token) {
    token = token.trim();
    // mixed number "1 ½"
    const mixed = token.match(new RegExp("^(\\d+)\\s+([" + FRAC_CHARS + "])$"));
    if (mixed) return parseInt(mixed[1], 10) + UNICODE_FRACTIONS[mixed[2]];
    if (UNICODE_FRACTIONS[token] !== undefined) return UNICODE_FRACTIONS[token];
    // "1/2"
    const slash = token.match(/^(\d+)\s*\/\s*(\d+)$/);
    if (slash) return parseInt(slash[1], 10) / parseInt(slash[2], 10);
    if (/^\d+(\.\d+)?$/.test(token)) return parseFloat(token);
    return null;
}

function formatQty(n) {
    if (n <= 0) return "0";
    // Round to nearest 1/8 for nice fractions
    const rounded = Math.round(n * 8) / 8;
    const whole = Math.floor(rounded);
    const frac = rounded - whole;
    const fractionMap = [
        [0, ""],
        [0.125, "⅛"], [0.25, "¼"], [0.375, "⅜"],
        [0.5, "½"], [0.625, "⅝"], [0.75, "¾"], [0.875, "⅞"]
    ];
    let bestSym = "";
    let bestDiff = Infinity;
    for (const [v, sym] of fractionMap) {
        const d = Math.abs(frac - v);
        if (d < bestDiff) { bestDiff = d; bestSym = sym; }
    }
    // For values >= 10, prefer rounded numbers (no fractions)
    if (rounded >= 10) {
        return Math.round(rounded).toString();
    }
    if (whole === 0 && bestSym === "") return "1"; // safety
    if (bestSym === "") return whole.toString();
    if (whole === 0) return bestSym;
    return `${whole}${bestSym}`;
}

function scaleIngredient(ingredient, scale) {
    if (scale === 1) return ingredient;
    const match = ingredient.match(QTY_REGEX);
    if (!match) return ingredient; // no quantity to scale (e.g. "Pinch of salt")
    const start = match[1];
    const end = match[2];
    const startVal = parseQty(start);
    if (startVal === null) return ingredient;
    let replacement = formatQty(startVal * scale);
    if (end) {
        const endVal = parseQty(end);
        if (endVal !== null) {
            replacement += "–" + formatQty(endVal * scale);
        }
    }
    return ingredient.replace(QTY_REGEX, replacement);
}

function renderTimer(seconds, idx) {
    return `
        <div class="timer" data-seconds="${seconds}" data-idx="${idx}">
            <span class="timer-icon material-symbols-rounded" aria-hidden="true">timer</span>
            <span class="timer-display">${formatTime(seconds)}</span>
            <button type="button" class="timer-btn" data-action="start" aria-label="Start timer">
                <span class="material-symbols-rounded" aria-hidden="true">play_arrow</span>
            </button>
        </div>
    `;
}

function setTimerBtn(btn, icon, label) {
    btn.innerHTML = `<span class="material-symbols-rounded" aria-hidden="true">${icon}</span>`;
    btn.setAttribute("aria-label", label);
}

function formatTime(seconds) {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s.toString().padStart(2, "0")}`;
}

function attachTimer(timerEl) {
    const total = parseInt(timerEl.dataset.seconds, 10);
    const idx = timerEl.dataset.idx;
    const display = timerEl.querySelector(".timer-display");
    const btn = timerEl.querySelector(".timer-btn");
    let remaining = total;
    let intervalId = null;
    let state = "idle"; // idle | running | paused | done

    const update = () => {
        display.textContent = formatTime(remaining);
        const pct = ((total - remaining) / total) * 100;
        timerEl.style.setProperty("--progress", `${pct}%`);
    };

    const start = () => {
        state = "running";
        setTimerBtn(btn, "pause", "Pause timer");
        timerEl.classList.add("running");
        timerEl.classList.remove("done");
        intervalId = setInterval(() => {
            remaining--;
            update();
            if (remaining <= 0) {
                clearInterval(intervalId);
                activeTimers.delete(idx);
                state = "done";
                timerEl.classList.remove("running");
                timerEl.classList.add("done");
                setTimerBtn(btn, "refresh", "Reset timer");
                display.textContent = "Done!";
                ding();
            }
        }, 1000);
        activeTimers.set(idx, intervalId);
    };

    const pause = () => {
        state = "paused";
        clearInterval(intervalId);
        activeTimers.delete(idx);
        setTimerBtn(btn, "play_arrow", "Resume timer");
        timerEl.classList.remove("running");
    };

    const reset = () => {
        clearInterval(intervalId);
        activeTimers.delete(idx);
        remaining = total;
        state = "idle";
        timerEl.classList.remove("running", "done");
        setTimerBtn(btn, "play_arrow", "Start timer");
        update();
    };

    update();

    btn.addEventListener("click", () => {
        if (state === "idle" || state === "paused") start();
        else if (state === "running") pause();
        else if (state === "done") reset();
    });
}

let _audioCtx = null;
function getAudioCtx() {
    if (!_audioCtx) {
        try { _audioCtx = new (window.AudioContext || window.webkitAudioContext)(); }
        catch (e) { return null; }
    }
    if (_audioCtx.state === "suspended") _audioCtx.resume();
    return _audioCtx;
}

function playTone(ctx, freq, startOffset, duration, volume = 0.25) {
    const t0 = ctx.currentTime + startOffset;
    const o = ctx.createOscillator();
    const g = ctx.createGain();
    o.connect(g); g.connect(ctx.destination);
    o.type = "sine";
    o.frequency.value = freq;
    // quick attack, smooth decay
    g.gain.setValueAtTime(0.0001, t0);
    g.gain.exponentialRampToValueAtTime(volume, t0 + 0.02);
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + duration);
    o.start(t0);
    o.stop(t0 + duration + 0.05);
}

function ding() {
    const ctx = getAudioCtx();
    if (!ctx) return;
    // 3-tone ascending chime, twice, for a clear "your timer is up" feel
    [0, 0.9].forEach((offset) => {
        playTone(ctx, 880,  offset,         0.28);
        playTone(ctx, 1175, offset + 0.18,  0.28);
        playTone(ctx, 1568, offset + 0.36,  0.45, 0.3);
    });
}

// Prime audio context on first user gesture (some browsers block otherwise)
window.addEventListener("pointerdown", () => getAudioCtx(), { once: true });
