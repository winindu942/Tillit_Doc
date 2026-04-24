# TilliT AI Docs — How to Run

## Option A — Running the built site (you received a zip file)

This is for someone who received the built `docs/` folder as a zip.

### Prerequisites
- Install **Node.js** from https://nodejs.org (LTS version)
- Then install the `serve` tool — run this once:
```bash
npm install -g serve
```

### Steps

1. Unzip the file — you get a folder called `docs/`
2. Place the `docs/` folder somewhere on your computer, for example:
```
C:\websites\
  docs\
    index.html
    assets\
    ...
```
3. Open terminal and navigate to the **parent folder** (NOT inside `docs/`):
```bash
cd C:\websites
```
4. Run:
```bash
serve
```
5. Open your browser and go to:
```
http://localhost:3000/docs/
```

✅ The TilliT AI docs site should load correctly.

> ⚠️ Important: Always run `serve` from the folder **above** `docs/`, not from inside `docs/` itself.

---

## Option B — Running from source (developers)

### Prerequisites
- Node.js from https://nodejs.org
- Run once inside the project folder:
```bash
npm install
```

### Commands

| Command | What it does |
|---|---|
| `npm start` | Start local dev server at `http://localhost:3000/Tillit_Doc/` |
| `npm run build` | Build the site into the `build/` folder |
| `npm run serve` | Test the built site locally |
| `$env:GIT_USER="winindu942"; npm run deploy` | Deploy to GitHub Pages |

### Live site
https://winindu942.github.io/Tillit_Doc/
