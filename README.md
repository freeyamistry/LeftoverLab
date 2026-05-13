# 🧪 Leftover Lab

A small web app that helps you decide what to cook with the ingredients you already have in your pantry and fridge.

## Status

Early prototype — static HTML/CSS/JS, no build step, no backend. Recipes are hard-coded in `app.js` for now.

## Run locally

Just open `index.html` in your browser. Or serve it:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Project structure

```
leftover-lab/
├── index.html   # markup
├── styles.css   # styling
├── app.js       # ingredient list + recipe matching
└── README.md
```

## Roadmap

- [ ] Persist pantry to `localStorage`
- [ ] Swap hard-coded recipes for a real API (Spoonacular / Edamam / TheMealDB)
- [ ] Filter by diet (vegetarian, gluten-free, etc.)
- [ ] "Almost there" mode — recipes you're 1–2 ingredients short on
- [ ] Save favourite recipes
- [ ] Polish design + add to portfolio

## Publishing

Hosted on Bitbucket. Can be deployed via Bitbucket Pages, Netlify, or any static host.

## License

Personal project — all rights reserved for now.
