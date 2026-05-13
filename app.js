// Leftover Lab — local prototype
// Recipes are hard-coded for now. Later: swap for a real API (Spoonacular, Edamam, etc.).

const RECIPES = [
    {
        name: "Garlic Butter Pasta",
        ingredients: ["pasta", "butter", "garlic", "parsley", "salt", "pepper"],
        steps: "Boil pasta. Melt butter with crushed garlic. Toss together. Top with parsley."
    },
    {
        name: "Fried Rice",
        ingredients: ["rice", "egg", "soy sauce", "onion", "garlic", "oil"],
        steps: "Fry onion and garlic. Push aside, scramble egg. Add cold rice and soy sauce. Stir-fry."
    },
    {
        name: "Tomato & Cheese Omelette",
        ingredients: ["egg", "tomato", "cheese", "butter", "salt", "pepper"],
        steps: "Beat eggs. Melt butter in pan. Pour eggs, add tomato and cheese. Fold."
    },
    {
        name: "Chicken Stir-Fry",
        ingredients: ["chicken", "soy sauce", "garlic", "onion", "capsicum", "oil"],
        steps: "Slice chicken thin. Stir-fry with garlic, onion and capsicum. Splash soy sauce."
    },
    {
        name: "Veggie Soup",
        ingredients: ["carrot", "onion", "celery", "potato", "stock", "salt"],
        steps: "Dice veg. Sweat in pot. Cover with stock. Simmer 25 min. Season."
    },
    {
        name: "Bean Quesadilla",
        ingredients: ["tortilla", "beans", "cheese", "onion"],
        steps: "Mash beans with onion. Spread on tortilla, add cheese, fold. Toast in pan both sides."
    },
    {
        name: "Banana Pancakes",
        ingredients: ["banana", "egg", "flour", "milk", "butter"],
        steps: "Mash banana, whisk with egg, milk and flour. Fry small pancakes in butter."
    },
    {
        name: "Tuna Pasta Salad",
        ingredients: ["pasta", "tuna", "mayonnaise", "onion", "sweetcorn"],
        steps: "Cook and cool pasta. Mix with drained tuna, mayo, diced onion, sweetcorn."
    },
    {
        name: "Roast Veg Bowl",
        ingredients: ["potato", "carrot", "capsicum", "olive oil", "salt", "pepper"],
        steps: "Chop veg. Toss with oil, salt, pepper. Roast 200°C for 30 min."
    },
    {
        name: "Cheesy Scrambled Eggs",
        ingredients: ["egg", "cheese", "butter", "milk", "salt"],
        steps: "Whisk eggs with milk. Cook gently in butter, fold in cheese at the end."
    }
];

const pantry = new Set();

const form = document.getElementById("ingredient-form");
const input = document.getElementById("ingredient-input");
const list = document.getElementById("ingredient-list");
const findBtn = document.getElementById("find-recipes");
const results = document.getElementById("results");

document.getElementById("year").textContent = new Date().getFullYear();

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const value = input.value.trim().toLowerCase();
    if (!value) return;
    if (!pantry.has(value)) {
        pantry.add(value);
        renderPantry();
    }
    input.value = "";
    input.focus();
});

findBtn.addEventListener("click", showRecipes);

function renderPantry() {
    list.innerHTML = "";
    pantry.forEach((item) => {
        const li = document.createElement("li");
        li.textContent = item;
        const remove = document.createElement("button");
        remove.type = "button";
        remove.setAttribute("aria-label", `Remove ${item}`);
        remove.textContent = "×";
        remove.addEventListener("click", () => {
            pantry.delete(item);
            renderPantry();
        });
        li.appendChild(remove);
        list.appendChild(li);
    });
    findBtn.disabled = pantry.size === 0;
}

function showRecipes() {
    const have = Array.from(pantry);
    const scored = RECIPES.map((r) => {
        const matched = r.ingredients.filter((ing) => have.includes(ing));
        const missing = r.ingredients.filter((ing) => !have.includes(ing));
        return {
            ...r,
            matched,
            missing,
            score: matched.length / r.ingredients.length
        };
    })
    .filter((r) => r.matched.length > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 6);

    results.innerHTML = "";

    if (scored.length === 0) {
        results.innerHTML = `<p class="empty">No matches yet — try adding common staples like egg, pasta, rice or onion.</p>`;
        return;
    }

    scored.forEach((r) => {
        const card = document.createElement("article");
        card.className = "recipe-card";
        card.innerHTML = `
            <h3>${r.name}</h3>
            <p class="match">You have ${r.matched.length} of ${r.ingredients.length} ingredients (${Math.round(r.score * 100)}% match)</p>
            <strong>Ingredients:</strong>
            <ul>${r.ingredients.map((i) => `<li>${have.includes(i) ? i : `<span class="missing">${i} (missing)</span>`}</li>`).join("")}</ul>
            <strong>Method:</strong>
            <p>${r.steps}</p>
        `;
        results.appendChild(card);
    });
}
