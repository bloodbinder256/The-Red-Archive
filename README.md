# The Red Archive

**The Red Archive** is a companion lore-code website for the *DemonTime* Minecraft mod.

Players discover hidden codes in-game, enter them here, and unlock story records about Heaven, Fallen Heavens, rituals, relics, bosses, ruins, and the things Heaven tried to erase.

## What it is for

The site gives DemonTime players an outside-the-game lore terminal without needing an in-game archive system.

The Red Archive is now focused on **storyline records**, not every item, recipe, upgrade, or old archive entry. The goal is to make each code feel meaningful instead of flooding players with filler.

## Current lore data

This version includes **42 curated storyline entries**.

Removed content includes:

- old in-game archive-system wording
- duplicate bestiary drop/weakness notes
- gameplay-only upgrade/catalyst notes
- individual stabilizer block entries
- tool-set and material-list filler that did not push the story forward
- entries that were too mechanical, outdated, or not important enough for the main DemonTime mystery

Each website code is usually the entry ID converted to uppercase with hyphens.

Examples:

```text
heaven_dimension -> HEAVEN-DIMENSION
sky_breach -> SKY-BREACH
cosmic_demon -> COSMIC-DEMON
fallen_seraph -> FALLEN-SERAPH
```

Players can type codes with spaces, underscores, lowercase letters, or hyphens. The site normalizes them before checking.

## Minecraft formatting support

Lore body text supports Minecraft `§` formatting codes:

```text
§0-§f = Minecraft colors
§k = obfuscated / glitch text
§l = bold
§m = strikethrough
§n = underline
§o = italic
§r = reset
```

It also supports Java-style hex colors:

```text
§x§f§f§0§0§0§0Red hex text§r
```

Example entry text in `app.js`:

```js
body: "The forbidden name was §kUNKNOWN§r, and the record refused to translate it."
```

## How it works

Enter a recovered code into the terminal.

If the code is valid, the site reveals the matching record and saves it locally in the browser with `localStorage`.

If the code is unknown, access is refused until the player finds the correct hidden code.

No account system or server is required.

## Built with

- HTML
- CSS
- JavaScript
- Anime.js

## GitHub Pages

This is a static site. To publish it with GitHub Pages:

1. Upload the files to the root of the GitHub repo.
2. Go to the repo settings.
3. Open **Pages**.
4. Set the source to the `main` branch and `/root`.
5. Save and wait for GitHub to deploy it.

## Created for DemonTime

DemonTime is a dark fantasy Minecraft mod about Heaven, Fallen Heavens, rituals, seals, choirs, demons, angels, contracts, forgotten names, and things Heaven tried to erase.
