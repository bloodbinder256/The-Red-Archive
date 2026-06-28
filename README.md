# The Red Archive

**The Red Archive** is a companion lore-code website for the *DemonTime* Minecraft mod.

Players discover hidden codes in-game, enter them here, and unlock story records about Heaven, Fallen Heavens, rituals, relics, bosses, ruins, and the things Heaven tried to erase.

## What it is for

The site gives DemonTime players an outside-the-game lore terminal without needing an in-game archive system.

The Red Archive is focused on **storyline records**, not every item, recipe, upgrade, or old archive entry. Related records are now grouped together so each unlock feels like a meaningful piece of the DemonTime story instead of a tiny checklist item.

## Current lore data

This version includes **16 grouped storyline entries**.

Players must find actual alphanumeric Red Archive codes in-game. Story names like `HEAVEN-SKY-THRESHOLD`, `COSMIC-DEMON-ENCOUNTER`, or old smaller entry names no longer unlock records by themselves.

Related story ideas are still grouped together behind single records, but the public unlock keys are discovery codes rather than guessable titles.

Examples of grouped records:

```text
Heaven Dimension + Sky Breach + Heaven Biome -> one hidden Red Archive record
Heavenly Altar + Goblet/Athame + First Light -> one hidden Red Archive record
Fallen Heavens + Fringe + Ash + Charred Wood -> one hidden Red Archive record
Cosmic Demon Arena + Cosmic Demon -> one hidden Red Archive record
Blackhole Core + Staffs + Ring + Gravity Offering -> one hidden Red Archive record
```

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

Enter a recovered alphanumeric code into the terminal.

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
