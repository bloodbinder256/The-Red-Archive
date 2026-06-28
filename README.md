# The Red Archive

**The Red Archive** is a companion lore-code website for the *DemonTime* Minecraft mod.

Players discover hidden lore codes in-game, enter them here, and unlock records inspired by the Heavenly Book entries. The website works on its own and does not require an in-game archive system.

## What it is for

The site gives DemonTime players an outside-the-game lore terminal for forbidden records, bestiary notes, ritual clues, item lore, structures, bosses, relics, and Heaven/Fallen Heavens discoveries.

Instead of dumping all lore at once, the mod can reveal pieces through:

- dimensions and biomes
- bosses and mobs
- blocks and structures
- relics and materials
- rituals and altar clues
- bestiary progress
- special item use

## Current lore data

This version includes **94 Heavenly Book-inspired entries** built from the existing `HeavenArchiveUnlocks.java` list, rewritten so the records read like standalone website lore instead of in-game archive-system text.

Each website code is the entry ID converted to uppercase with hyphens.

Example:

```text
heaven_dimension -> HEAVEN-DIMENSION
sky_breach -> SKY-BREACH
cosmic_demon -> COSMIC-DEMON
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
