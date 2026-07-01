# The Red Archive

**The Red Archive** is the companion lore terminal for the *DemonTime: Season Two* Minecraft mod.

Players recover private archive codes inside the game, then enter those codes on this website to restore grouped lore memories. The site is split into top tabs for the **Archive Terminal**, **Wiki Main Page**, and **Progression Guide** with local player notes.

## What it is for

The website is the out-of-game side of the DemonTime: Season Two code discovery loop.

Inside Minecraft, Red Archive fragments, gear, rituals, bosses, or structures can reveal a code. On the website, the player enters that code and unlocks the matching memory group.

## Current memory groups

The current site restores eight grouped memories:

- Sky Threshold / Heaven Dimension / Heaven Biome
- Heavenly Altar / rituals / cache / altar failure
- Choir Bow / Choir Wail / Hymn Shot / Resonance
- Seraphic enemies / angelic life / feathers / divine halo
- Heaven authority / Heaven's Wrath / Fallen Heaven / cosmic demon
- Creative-only seal blocks / containment marks / ruins / sealed structures
- Divine armor / divine equipment / newest Heaven gear
- Ritual tools / goblet / athame / relic memory

## New site features

This version adds several discovery features:

- **Entry-specific visual effects**: each restored memory has its own animation style, such as sky glow, ritual pulse, choir wave, seal crack, armor gleam, or relic drift.
- **False-code responses**: certain wrong guesses get custom lore-flavored rejection messages instead of only a generic error.
- **Associated Records**: restored entries show related items, bosses, mechanics, or structures connected to that memory group.
- **Archive voice**: the site changes its message as more memories are restored, so the Archive feels more awake over time.
- **Tabbed layout**: Archive Terminal, Wiki Main Page, and Progression Guide are separated into top navigation tabs.
- **Wiki Main Page**: a dark wiki homepage with portal cards, archive status, restored count, integrity, and final protocol state.
- **Wiki-themed Progression Guide**: a dark field-wiki layout with an index, contents list, infobox, overview note, survival notes, suggested restoration route, and memory pages for spoiler-light discovery hints.
- **Player Notes**: a local notes box lets players track code fragments, structure coordinates, drops, theories, or to-do items while they play. Notes are saved in this browser with `localStorage`, and can be copied, exported, imported, or cleared.
- **Style selector**: a top-right style button lets players switch between Red Dark, Archive Light, Celestial Blue, Void Purple, Fallen Gold, and Ashen Slate. The chosen style is saved locally with `localStorage`.
- **Terminal commands**: the Archive Terminal recognizes flavor commands like `help`, `status`, `memories`, `integrity`, `whoami`, and `heaven`.
- **Final protocol**: restoring every current memory unlocks a final completion panel.
- **Archive integrity meter**: the restored-memory percentage updates as codes are entered.
- **Hashed restoration codes**: the site stores SHA-256 hashes for valid restoration codes instead of plaintext codes, so players cannot simply open `app.js` and read the code list.

## Code behavior

The code gate is forgiving about formatting. It ignores lowercase, spaces, and hyphens, so a recovered sequence still works if the player types it loosely.

Valid restoration sequences are not stored as plaintext in the website files. The site normalizes the typed sequence, hashes it in the browser, and compares it to stored SHA-256 hashes. This prevents casual source-code reading from revealing the real codes.

Wrong codes still begin with:

```text
The archive rejects this sequence.
```

Depending on restoration progress, the Archive may add extra commentary after that.

Already-used codes show:

```text
This memory has already been restored.
```

Unlocked memories are saved locally in the player's browser with `localStorage`.

## Display styles

The top-right **Style** button changes the look of the site without changing any unlocked memories or notes. Current styles include:

- Red Dark
- Archive Light
- Celestial Blue
- Void Purple
- Fallen Gold
- Ashen Slate

The selected style is saved in the player's browser with `localStorage`.

## Player notes

The Progression Guide tab includes a **Player Notes** panel. It is meant for tracking things like:

- coordinates where a fragment was found
- which boss or structure revealed a clue
- partial code fragments
- theories about sealed structures and restored memories
- items or armor sets still missing

Notes are private to the browser. They are not uploaded anywhere and can be copied, exported as a text file, imported from a text file, or cleared from the notes panel.

## Minecraft formatting support

Lore text supports Minecraft formatting codes:

```text
§0-§f = Minecraft colors
§k = obfuscated/glitch text
§l = bold
§m = strikethrough
§n = underline
§o = italic
§r = reset
```

It also supports Java-style hex formatting like:

```text
§x§f§f§0§0§0§0
```

## Built with

- HTML
- CSS
- JavaScript
- Anime.js

## Security note

Because this is still a static GitHub Pages site, hashed codes are a strong anti-spoiler improvement, not perfect server-side secrecy. A determined person could still brute-force weak codes offline. For stronger protection later, use longer random codes or a small backend/serverless validation endpoint.

## GitHub Pages

This is a static site. It can be hosted directly with GitHub Pages. Upload the files to the repository root, enable GitHub Pages for the `main` branch, and open the published URL.


## Polish pass

This build includes extra presentation and usability touches:

- top-right style selector with saved themes
- wiki, archive, and guide tabs
- command shortcut chips for the terminal
- local notes with save/copy/export/import tools
- final completion memory when every current memory is restored
- toast feedback messages for player actions
- keyboard shortcut: press `/` or `Ctrl + K` to focus the archive input
- mobile and accessibility touchups

## Latest wiki expansion

The Progression Guide now includes a **Crafting Recipe Index** plus an **Items, Blocks, and Systems Explained** section. The recipe section covers the main DemonTime: Season Two progression stations, the accurate Purifier system, Purifier and Basic Purifier Core crafting recipes, core + water + fuel + input transformations, Heavenly Forge tool chains, armor recipe references, and high-tier relic notes.

The Purifier section now explains the actual machine loop: an input item is processed with a Purifier Core, stored water, and fuel. Water Buckets add 1000 water, Water Potions add 250 water, the tank stores up to 4000 water, and different cores unlock different transformation families.

Use in-game JEI/tooltips as the final source of truth if a patch changes a recipe. The website is meant to be the spoiler-light public wiki layer, not a replacement for in-game recipe registration.

