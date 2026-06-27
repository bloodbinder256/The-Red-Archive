# The Red Archive — DemonTime Lore Website

A static DemonTime lore-code website using Anime.js. Players enter codes found in-game and unlock DemonTime lore records.

## Files

- `index.html` — page markup
- `styles.css` — Red Archive styling
- `app.js` — lore code database, unlock logic, and Anime.js animations
- `.nojekyll` — helps GitHub Pages serve the site exactly as-is
- `.gitignore` — keeps OS/editor junk out of the repo

## Run locally

Open `index.html` in a browser.

No build step is required. Anime.js is loaded from jsDelivr:

```html
<script src="https://cdn.jsdelivr.net/npm/animejs/dist/bundles/anime.umd.min.js"></script>
```

## Add or edit lore codes

Open `app.js` and edit the `RED_ARCHIVE_RECORDS` array.

Each record uses this shape:

```js
{
  code: "SERAPH-ASH-001",
  title: "The First Choir",
  category: "Seraphim / Burned Registry",
  threat: "Apostate Hymn",
  body: "Lore text goes here."
}
```

Use unique codes. The website treats codes as case-insensitive, and spaces or underscores are normalized into dashes.

## Put it on GitHub

1. Create a new GitHub repository, for example `red-archive`.
2. Upload all files from this folder to the root of the repository.
3. Commit the files.
4. In the repository settings, enable GitHub Pages for the `main` branch and `/root` folder.
5. Your site will be published as a static website once GitHub Pages finishes deploying.

## Mod integration idea

Use the same code strings inside the DemonTime mod. When a player completes rituals, finds structures, kills bosses, or unlocks archive pages, the mod can display one of these codes in-game.

The website does not need accounts or a server. Unlocks are saved locally in the player's browser with `localStorage`.
