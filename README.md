# The Red Archive

**The Red Archive** is the companion lore terminal for the *DemonTime: Season Two* Minecraft mod.

Players recover private archive codes inside the game, then enter those codes on this website to restore grouped lore memories.

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
- Seal blocks / containment / ruins / sealed structures
- Divine armor / divine equipment / newest Heaven gear
- Ritual tools / goblet / athame / relic memory

## New site features

This version adds several discovery features:

- **Entry-specific visual effects**: each restored memory has its own animation style, such as sky glow, ritual pulse, choir wave, seal crack, armor gleam, or relic drift.
- **False-code responses**: certain wrong guesses get custom lore-flavored rejection messages instead of only a generic error.
- **Associated Records**: restored entries show related items, bosses, mechanics, or structures connected to that memory group.
- **Archive voice**: the site changes its message as more memories are restored, so the Archive feels more awake over time.
- **Progression guide**: a spoiler-light path hints at what kinds of in-game actions or discoveries may lead to each memory.
- **Archive integrity meter**: the restored-memory percentage updates as codes are entered.

## Code behavior

The code gate is forgiving about formatting. It ignores lowercase, spaces, and hyphens.

These all work as the same code:

```text
SKY-A7F4
skya7f4
sky a7f4
sky-a7f4
```

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

## GitHub Pages

This is a static site. It can be hosted directly with GitHub Pages. Upload the files to the repository root, enable GitHub Pages for the `main` branch, and open the published URL.
