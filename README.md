# The Red Archive

**The Red Archive** is the companion lore terminal for the *DemonTimesSNTwo* Minecraft mod.

Players recover private archive codes inside the game, then enter those codes on this website to restore grouped lore memories.

## What it is for

The website is the out-of-game side of the DemonTimesSNTwo code discovery loop.

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

## Code behavior

The code gate is forgiving about formatting. It ignores lowercase, spaces, and hyphens.

These all work as the same code:

```text
SKY-A7F4
skya7f4
sky a7f4
sky-a7f4
```

Wrong codes show:

```text
The archive rejects this sequence.
```

Already-used codes show:

```text
This memory has already been restored.
```

Unlocked memories are saved locally in the player's browser with `localStorage`.

## Built with

- HTML
- CSS
- JavaScript
- Anime.js

## GitHub Pages

This is a static site. It can be hosted directly with GitHub Pages. Upload the files to the repository root, enable GitHub Pages for the `main` branch, and open the published URL.
