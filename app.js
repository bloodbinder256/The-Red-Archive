/*
  The Red Archive — DemonTime lore code site
  Curated storyline-only record list. Gameplay-only, duplicate, deprecated, and old in-game archive-style entries were removed.

  Each entry code is the entry id converted to uppercase with hyphens.
  Example: heaven_dimension -> HEAVEN-DIMENSION

  Lore text supports Minecraft formatting codes:
  §k obfuscated, §l bold, §o italic, §n underline, §m strikethrough, §r reset,
  §0-§f color codes, and Java hex colors like §x§f§f§0§0§0§0.
*/

const RED_ARCHIVE_RECORDS = [
  {
    "code": "HEAVEN-DIMENSION",
    "sourceId": "heaven_dimension",
    "title": "Heaven Dimension",
    "hiddenTitle": "Unknown Dimension",
    "category": "Heaven",
    "triggerType": "discovery",
    "triggerId": "demontimessntwo:heavendimension|heavendimension|dimension/heavendimension",
    "threat": "Story Record // Heaven",
    "body": "Above the ordinary world is a realm too clean to trust. Its light does not warm; it judges. The first travelers who reached it called it Heaven because they had no better word for a place that looked holy while refusing to feel kind."
  },
  {
    "code": "SKY-BREACH",
    "sourceId": "sky_breach",
    "title": "Sky Breach",
    "hiddenTitle": "Unknown Sky Threshold",
    "category": "Heaven",
    "triggerType": "discovery",
    "triggerId": "y400|heaven_dimension_transport|demontimessntwo:heavendimension",
    "threat": "Threshold Record // Heaven",
    "body": "The sky has a weak point. Climb high enough and the blue begins to thin, not into space, but into permission. The breach is not a door. It is a place where the world forgets to say no."
  },
  {
    "code": "HEAVEN-BIOME",
    "sourceId": "heaven_biome",
    "title": "Heaven Biome",
    "hiddenTitle": "Unknown Heaven Biome",
    "category": "Heaven",
    "triggerType": "discovery",
    "triggerId": "demontimessntwo:heavenbiome|heavenbiome",
    "threat": "World Record // Heaven",
    "body": "The Heaven biome grows where divine light settles long enough to become weather. Grass bends toward pale radiance, trees keep their leaves too still, and silence gathers in the branches. It is beautiful in the way a warning can be beautiful."
  },
  {
    "code": "CLOUD-BLOCK",
    "sourceId": "cloud_block",
    "title": "Cloud Matter",
    "hiddenTitle": "Unknown Cloud Matter",
    "category": "Heaven",
    "triggerType": "block",
    "triggerId": "demontimessntwo:cloud_block",
    "threat": "Matter Record // Heaven",
    "body": "Cloud matter can be shaped, but never fully convinced. It remembers being sky and treats solidity like a temporary favor. Walk on it carefully; anything that used to be air may eventually remember how to let go."
  },
  {
    "code": "HEAVENLY-ALTAR",
    "sourceId": "heavenly_altar",
    "title": "Heavenly Altar",
    "hiddenTitle": "Unknown Altar",
    "category": "Rituals",
    "triggerType": "block",
    "triggerId": "demontimessntwo:heavenly_altar",
    "threat": "Ritual Record // Heaven",
    "body": "The altar listens before it answers. Offerings, tools, distance, and intent all matter, but none of them guarantee mercy. Bring the wrong thing and it may ignore you. Bring the right thing and it may remember your name."
  },
  {
    "code": "HEAVENLY-FORGE",
    "sourceId": "heavenly_forge",
    "title": "Heavenly Forge",
    "hiddenTitle": "Unknown Divine Forge",
    "category": "Rituals",
    "triggerType": "block",
    "triggerId": "demontimessntwo:heavenly_forge",
    "threat": "Craft Record // Heaven",
    "body": "The Heavenly Forge does not simply improve metal. It teaches material to accept a purpose higher than survival. Anything shaped in that heat comes out sharper, cleaner, and a little less willing to forgive what it strikes."
  },
  {
    "code": "PURIFIER",
    "sourceId": "purifier",
    "title": "Purifier",
    "hiddenTitle": "Unknown Purifier",
    "category": "Rituals",
    "triggerType": "block",
    "triggerId": "demontimessntwo:purifier",
    "threat": "Ritual Record // Purification",
    "body": "The Purifier removes corruption, but it cannot erase history. Cleansed things still remember what stained them, and memory has weight. That is why purified relics often feel stronger, stranger, and less innocent than before."
  },
  {
    "code": "FALLEN-HEAVENS",
    "sourceId": "fallen_heavens",
    "title": "Fallen Heavens",
    "hiddenTitle": "Unknown Fallen Biome",
    "category": "Fallen Heavens",
    "triggerType": "discovery",
    "triggerId": "demontimessntwo:fallen_heavens|fallen_heavens",
    "threat": "Story Record // Fallen Heavens",
    "body": "Fallen Heavens is the scar left when something holy hit the ground and kept burning. The land did not become cursed overnight; it became accused. Ash, ruin, and impossible light remain where Heaven learned that falling is also a kind of revelation."
  },
  {
    "code": "FALLEN-HEAVENS-FRINGE",
    "sourceId": "fallen_heavens_fringe",
    "title": "Fallen Heavens Fringe",
    "hiddenTitle": "Unknown Fringe",
    "category": "Fallen Heavens",
    "triggerType": "discovery",
    "triggerId": "demontimessntwo:fallen_heavens_fringe|fallen_heavens_fringe|fringe",
    "threat": "Border Record // Fallen Heavens",
    "body": "The fringe is where ordinary life tries to grow around the wound. Grass returns in nervous patches, trees lean away from the old light, and the air pretends recovery has begun. It has not. The land is only learning how to breathe beside the damage."
  },
  {
    "code": "ASH-COVERED-DIRT",
    "sourceId": "ash_covered_dirt",
    "title": "Ash Covered Dirt",
    "hiddenTitle": "Unknown Ashen Ground",
    "category": "Fallen Heavens",
    "triggerType": "block",
    "triggerId": "demontimessntwo:ash_covered_dirt",
    "threat": "Ground Record // Fallen Heavens",
    "body": "This dirt is not merely covered in ash. It is covered in aftermath. Every footprint disturbs the remains of a place that believed itself untouchable, and every disturbed patch seems to whisper that the fall was not an accident."
  },
  {
    "code": "CHARRED-WOOD-FAMILY",
    "sourceId": "charred_wood_family",
    "title": "Charred Wood",
    "hiddenTitle": "Unknown Burned Wood",
    "category": "Fallen Heavens",
    "triggerType": "block",
    "triggerId": "demontimessntwo:charred_log|demontimessntwo:charred_wood|demontimessntwo:stripped_charred_log|demontimessntwo:stripped_charred_wood|demontimessntwo:charred_planks|demontimessntwo:charred_stairs|demontimessntwo:charred_slab|demontimessntwo:charred_fence|demontimessntwo:charred_fence_gate|demontimessntwo:charred_door|demontimessntwo:charred_trapdoor|demontimessntwo:charred_leaves",
    "threat": "Material Record // Fallen Heavens",
    "body": "Charred wood keeps the shape of a tree after surrendering the memory of being alive. It builds shelters, doors, paths, and ruins, but every structure made from it feels like a survivor's apology. Fire ended it. Purpose keeps it standing."
  },
  {
    "code": "FALLEN-RUINS-NETWORK",
    "sourceId": "fallen_ruins_network",
    "title": "Fallen Ruins Network",
    "hiddenTitle": "Unknown Ruin Network",
    "category": "Ruins",
    "triggerType": "discovery",
    "triggerId": "demontimessntwo:fallen_heavens_ruins|demontimessntwo:cosmic_demon_ruins|complete_arena_network",
    "threat": "Structure Record // Ruins",
    "body": "The ruins are not scattered randomly. Paths, homes, altars, and broken landmarks form a pattern like a village trying to point at its own murderer. Follow the roads and the Fallen Heavens begin to feel less like a biome and more like a crime scene."
  },
  {
    "code": "BROKEN-CHURCH",
    "sourceId": "broken_church",
    "title": "Broken Church",
    "hiddenTitle": "Unknown Church",
    "category": "Ruins",
    "triggerType": "discovery",
    "triggerId": "demontimessntwo:fallen_heavens_ruins/broken_church|broken_church",
    "threat": "Structure Record // Ruins",
    "body": "The church broke before it burned. Its walls still lean toward the sky, but the sky gives nothing back. Whatever prayed here did not receive an answer, or worse, it did. The pews are gone; the shape of pleading remains."
  },
  {
    "code": "CHARRED-HOUSE",
    "sourceId": "charred_house",
    "title": "Charred House",
    "hiddenTitle": "Unknown Burned House",
    "category": "Ruins",
    "triggerType": "discovery",
    "triggerId": "demontimessntwo:fallen_heavens_ruins/charred_house|charred_house",
    "threat": "Structure Record // Ruins",
    "body": "A charred house is worse than an empty one. Empty means someone left. Charred means someone may not have had time. The doorway still frames an invitation, but stepping through it feels like entering the last second of someone else's life."
  },
  {
    "code": "SMALL-ALTAR",
    "sourceId": "small_altar",
    "title": "Small Altar",
    "hiddenTitle": "Unknown Black Altar",
    "category": "Ruins",
    "triggerType": "discovery",
    "triggerId": "demontimessntwo:fallen_heavens_ruins/small_altar|small_altar",
    "threat": "Structure Record // Ruins",
    "body": "The small altar is proof that not every rite needed a temple. Candles, skulls, black stone, and ash mark a place where desperate hands asked for a smaller miracle. The silence afterward suggests the answer was expensive."
  },
  {
    "code": "COSMIC-DEMON-ARENA",
    "sourceId": "cosmic_demon_arena",
    "title": "Cosmic Demon Arena",
    "hiddenTitle": "Unknown Arena",
    "category": "Ruins",
    "triggerType": "discovery",
    "triggerId": "demontimessntwo:cosmic_demon_arena|demontimessntwo:cosmic_demon_ruins/arena|cosmic_demon_summoning_altar",
    "threat": "Structure Record // Boss Site",
    "body": "The arena was not built for sport. Its paths, offerings, and altar all curve toward a single invitation: bring the Cosmic Demon close enough to fight. The stones know the shape of gravity because something monstrous taught them to kneel."
  },
  {
    "code": "STAR-CLUSTER-STRUCTURE",
    "sourceId": "star_cluster_structure",
    "title": "Star Cluster Structure",
    "hiddenTitle": "Unknown Star Cluster",
    "category": "Ruins",
    "triggerType": "discovery",
    "triggerId": "demontimessntwo:star_cluster_structure|star_cluster",
    "threat": "Structure Record // Falling Star",
    "body": "The star cluster does not look built so much as arranged after impact. Pieces of sky gathered there like witnesses after a crash. The place hums at night, suggesting the fallen star did not die when it landed. It learned to wait."
  },
  {
    "code": "ANGELIC-CHICKEN",
    "sourceId": "angelic_chicken",
    "title": "Angelic Chicken",
    "hiddenTitle": "Unknown Angelic Creature",
    "category": "Creatures",
    "triggerType": "kill",
    "triggerId": "demontimessntwo:angelicchicken|angelicchicken",
    "threat": "Creature Record // Heaven",
    "body": "Not every holy creature arrives with wings spread and judgment blazing. Some cluck softly in the grass and make Heaven seem harmless. That is the first trick of divine ecology: teach the player to smile before showing them teeth."
  },
  {
    "code": "CHOIR-WISP",
    "sourceId": "choir_wisp",
    "title": "Choir Wisp",
    "hiddenTitle": "Unknown Choir Light",
    "category": "Creatures",
    "triggerType": "discovery",
    "triggerId": "demontimessntwo:wisp|wisp|choir_wisp",
    "threat": "Creature Record // Choir",
    "body": "A Choir Wisp is less an animal than a note that learned to hover. It blesses, flees, pulses, and punishes like a fragment of sacred music trapped in a body. Strike one and the backlash feels personal, as if the song remembers who interrupted it."
  },
  {
    "code": "COSMIC-DEMON",
    "sourceId": "cosmic_demon",
    "title": "Cosmic Demon",
    "hiddenTitle": "Unknown Cosmic Boss",
    "category": "Bosses",
    "triggerType": "kill",
    "triggerId": "demontimessntwo:cosmicdemon|cosmicdemon|cosmic_demon",
    "threat": "Boss Record // Collapse",
    "body": "The Cosmic Demon is gravity given malice. It does not merely attack; it rearranges the fight until distance, movement, and safety all begin to fail. Its core is not a trophy. It is the part of collapse that survived being defeated."
  },
  {
    "code": "FALLEN-SERAPH",
    "sourceId": "bestiary_fallen_seraph_basic",
    "title": "Fallen Seraph",
    "hiddenTitle": "Unknown Seraph",
    "category": "Bosses",
    "triggerType": "kill",
    "triggerId": "demontimessntwo:fallen_seraph|fallen_seraph|fallenseraph",
    "threat": "Boss Record // Fallen Heaven",
    "body": "The Fallen Seraph is not a monster pretending to be holy. It is holiness after the fall, still convinced its pain is doctrine. Lasers, dives, halos, and gravity pins are not just attacks. They are a sermon delivered by something that no longer knows how to stop preaching."
  },
  {
    "code": "ANGELIC-FEATHER",
    "sourceId": "angelic_feather",
    "title": "Angelic Feather",
    "hiddenTitle": "Unknown Feather",
    "category": "Relics",
    "triggerType": "item",
    "triggerId": "demontimessntwo:angelic_feather",
    "threat": "Relic Record // Heaven",
    "body": "An Angelic Feather is the softest proof that Heaven can be touched. It is light, warm, and unsettlingly clean, a scrap of mercy that still remembers the wing it came from. Gentle things are often the first keys to dangerous doors."
  },
  {
    "code": "GILDED-FEATHER",
    "sourceId": "gilded_feather",
    "title": "Gilded Feather",
    "hiddenTitle": "Unknown Gilded Feather",
    "category": "Relics",
    "triggerType": "item",
    "triggerId": "demontimessntwo:gildedfeather|demontimessntwo:gilded_feather",
    "threat": "Relic Record // Heaven",
    "body": "A Gilded Feather is what happens when softness learns value. Gold does not make it holy; it makes the holiness easier to notice and harder to ignore. In ritual work, it feels less like an ingredient and more like a signature."
  },
  {
    "code": "DIVINE-HALO",
    "sourceId": "divine_halo",
    "title": "Divine Halo",
    "hiddenTitle": "Unknown Halo",
    "category": "Relics",
    "triggerType": "item",
    "triggerId": "demontimessntwo:divine_halo_helmet",
    "threat": "Relic Record // Heaven",
    "body": "A halo is not decoration. It is a crown with better public relations. Wear one and the light gathers above you as if making a claim. The question is whether the claim belongs to you, or whether Heaven has simply found another place to hang its authority."
  },
  {
    "code": "HEAVENS-WRATH",
    "sourceId": "heavens_wrath",
    "title": "Heaven's Wrath",
    "hiddenTitle": "Unknown Heaven Weapon",
    "category": "Relics",
    "triggerType": "item",
    "triggerId": "demontimessntwo:heavens_wrath|demontimessntwo:true_heavens_wrath",
    "threat": "Relic Record // Judgment",
    "body": "Heaven's Wrath is not a sword that became holy. It is judgment taught how to hold an edge. The truer form does not swing harder because it is stronger; it swings harder because it has stopped asking whether mercy was an option."
  },
  {
    "code": "BLACKHOLE-CORE",
    "sourceId": "blackhole_core",
    "title": "Blackhole Core",
    "hiddenTitle": "Unknown Singularity Core",
    "category": "Relics",
    "triggerType": "item",
    "triggerId": "demontimessntwo:blackholecore|demontimessntwo:blackhole_core_item",
    "threat": "Relic Record // Collapse",
    "body": "A Blackhole Core is contained disaster. It sits in the hand like an object, but everything around it understands that object is the wrong word. The safest core is the one you never forget is hungry."
  },
  {
    "code": "BLACKHOLE-STAFFS",
    "sourceId": "blackhole_staffs",
    "title": "Blackhole Staff Line",
    "hiddenTitle": "Unknown Gravity Staff",
    "category": "Relics",
    "triggerType": "item",
    "triggerId": "demontimessntwo:blackhole_staff|demontimessntwo:stabilized_blackhole_staff|demontimessntwo:event_horizon_staff|demontimessntwo:singularity_staff",
    "threat": "Relic Record // Collapse",
    "body": "The staff line begins as a controlled failure and ends as jurisdiction over gravity. Base, stabilized, event-horizon, and singularity forms each ask the wielder to be more precise. Aim poorly and the world may obey anyway."
  },
  {
    "code": "BLACK-HOLE-RING",
    "sourceId": "black_hole_ring",
    "title": "Black Hole Ring",
    "hiddenTitle": "Unknown Black-Hole Ring",
    "category": "Relics",
    "triggerType": "item",
    "triggerId": "demontimessntwo:black_hole_ring",
    "threat": "Relic Record // Collapse",
    "body": "The Black Hole Ring is a small circle containing a much larger threat. Even dormant, it listens for gravity; awake, it teaches nearby things to fall toward the wearer. It is not protection from collapse. It is a private agreement with it."
  },
  {
    "code": "TITAN-REMNANT",
    "sourceId": "titan_remnant",
    "title": "Titan Remnant",
    "hiddenTitle": "Unknown Titan Relic",
    "category": "Relics",
    "triggerType": "item",
    "triggerId": "demontimessntwo:titan_remnant|demontimessntwo:titanremanent",
    "threat": "Relic Record // Titan",
    "body": "A Titan Remnant is not dead material. It is leftover enormity with memory, stubbornness, and opinions. Crafting with it feels less like using a resource and more like negotiating with something that used to block out the sun."
  },
  {
    "code": "TITAN-REMNANT-VARIANTS",
    "sourceId": "titan_remnant_variants",
    "title": "Altered Titan Remnants",
    "hiddenTitle": "Unknown Altered Remnant",
    "category": "Relics",
    "triggerType": "item",
    "triggerId": "demontimessntwo:controlledtitanremanent|demontimessntwo:permanentlyconcealedtitanremanent|demontimessntwo:blessed_titan_remnant|demontimessntwo:concealed_titan_remnant|demontimessntwo:blood_stabilized_remnant",
    "threat": "Relic Record // Titan",
    "body": "Altered remnants reveal the Titan path: control, concealment, blessing, blood stabilization, and binding. Each stage solves one problem while teaching the relic a new grudge. By the end, the power does not feel crafted. It feels captured."
  },
  {
    "code": "PURIFIER-CORES",
    "sourceId": "purifier_cores",
    "title": "Purifier Cores",
    "hiddenTitle": "Unknown Purifier Core",
    "category": "Relics",
    "triggerType": "item",
    "triggerId": "demontimessntwo:basic_purifier_core|demontimessntwo:angelic_core|demontimessntwo:celestial_core|demontimessntwo:abyssal_core|demontimessntwo:blood_core|demontimessntwo:verdant_core|demontimessntwo:infernal_core|demontimessntwo:echo_core",
    "threat": "Relic Record // Purification",
    "body": "Purifier Cores are moral machinery. Each core decides differently what clean means: angelic mercy, abyssal silence, blood memory, verdant repair, infernal hunger, echo persistence. The machine obeys the core, not the conscience of whoever built it."
  },
  {
    "code": "STAR-MATERIALS",
    "sourceId": "star_materials",
    "title": "Fallen Star Materials",
    "hiddenTitle": "Unknown Fallen Star Material",
    "category": "Relics",
    "triggerType": "item",
    "triggerId": "demontimessntwo:star_metal_fragment|demontimessntwo:fallen_star_core|demontimessntwo:cracked_star_shell|demontimessntwo:star_metal_ingot|demontimessntwo:celestial_singularity",
    "threat": "Relic Record // Falling Star",
    "body": "Star fragments, fallen cores, cracked shells, ingots, and singularities are pieces of impact. They belong to the moment the sky stopped being distant and became debris. Every shard feels like it arrived angry and has not cooled enough to forgive the ground."
  },
  {
    "code": "GRACE-MATERIALS",
    "sourceId": "grace_materials",
    "title": "Grace Materials",
    "hiddenTitle": "Unknown Grace Material",
    "category": "Relics",
    "triggerType": "item",
    "triggerId": "demontimessntwo:grace_dust|demontimessntwo:bottled_grace|demontimessntwo:grace_apple|demontimessntwo:grace_locket|demontimessntwo:celestial_amulet",
    "threat": "Relic Record // Grace",
    "body": "Grace looks gentle because mercy knows how to hide its strength. Dust, bottles, apples, lockets, and amulets all carry the same impossible promise: not yet, not here, not this death. The softest relic may be the one that frightens the grave most."
  },
  {
    "code": "RITUAL-CLUE-ALTAR-FOUND",
    "sourceId": "ritual_clue_altar_found",
    "title": "The Altar Listens",
    "hiddenTitle": "Unknown Altar Clue",
    "category": "Rituals",
    "triggerType": "block",
    "triggerId": "demontimessntwo:heavenly_altar",
    "threat": "Ritual Clue // Altar",
    "body": "Attention is the first offering. Before the altar accepts blood, feathers, cores, or gold, it measures whether the hand approaching it understands the difference between crafting and asking. The rite begins the moment the player chooses to be noticed."
  },
  {
    "code": "RITUAL-CLUE-TOOLS",
    "sourceId": "ritual_clue_tools",
    "title": "Cup and Knife",
    "hiddenTitle": "Unknown Tool Clue",
    "category": "Rituals",
    "triggerType": "item",
    "triggerId": "demontimessntwo:goblet|demontimessntwo:athame",
    "threat": "Ritual Clue // Tools",
    "body": "The Goblet receives. The Athame divides. Together they tell the altar that this is not ordinary work. One holds the promise; the other decides what must be cut away before the promise can become real."
  },
  {
    "code": "RITUAL-CLUE-FIRST-LIGHT",
    "sourceId": "ritual_clue_first_light",
    "title": "First Light",
    "hiddenTitle": "Unknown Feather Clue",
    "category": "Rituals",
    "triggerType": "item",
    "triggerId": "demontimessntwo:angelic_feather|demontimessntwo:gildedfeather|demontimessntwo:gilded_feather",
    "threat": "Ritual Clue // Heaven",
    "body": "Feather offerings belong to gentler rites. They open the first pale paths and teach that softness can still be power. Heaven often begins with something light enough to float, then asks why the hand holding it is shaking."
  },
  {
    "code": "RITUAL-CLUE-GRAVITY",
    "sourceId": "ritual_clue_gravity",
    "title": "Gravity Offering",
    "hiddenTitle": "Unknown Gravity Clue",
    "category": "Rituals",
    "triggerType": "item",
    "triggerId": "demontimessntwo:blackholecore|demontimessntwo:blackhole_core_item|demontimessntwo:celestial_singularity",
    "threat": "Ritual Clue // Collapse",
    "body": "Black-hole offerings are never cheap, even when the cost is not obvious yet. They ask for power by presenting a wound in the shape of a sphere. The altar can use collapse, but it cannot make collapse grateful."
  },
  {
    "code": "RITUAL-CLUE-TITAN",
    "sourceId": "ritual_clue_titan",
    "title": "Titan Offering",
    "hiddenTitle": "Unknown Titan Clue",
    "category": "Rituals",
    "triggerType": "item",
    "triggerId": "demontimessntwo:titan_remnant|demontimessntwo:titanremanent",
    "threat": "Ritual Clue // Titan",
    "body": "Titan offerings belong to endurance, binding, belts, heavy survival, and boss-tier transformations. The altar does not treat Titan matter like stone. It treats it like a sleeping witness and tries not to wake too much of it at once."
  },
  {
    "code": "RITUAL-CLUE-PURIFIER",
    "sourceId": "ritual_clue_purifier",
    "title": "Purifier Logic",
    "hiddenTitle": "Unknown Purifier Clue",
    "category": "Rituals",
    "triggerType": "block",
    "triggerId": "demontimessntwo:purifier",
    "threat": "Ritual Clue // Purification",
    "body": "Purification separates corruption from material, but the output always remembers what it used to be. The cleanest result is not the one with no past. It is the one that survived the past without becoming obedient to it."
  },
  {
    "code": "ALTAR-UNSTABLE-FAILURE",
    "sourceId": "altar_unstable_failure",
    "title": "Unstable Altar Failure",
    "hiddenTitle": "Unknown Altar Failure",
    "category": "Warnings",
    "triggerType": "discovery",
    "triggerId": "altar_unstable_failure",
    "threat": "Warning Record // Rituals",
    "body": "An altar without containment can fail raw. A failed rite may fizzle, bite back, drain what was offered, or call the attention of things nearby that should have stayed asleep. Failure is not always absence. Sometimes failure is arrival."
  },
  {
    "code": "ALTAR-STABILIZED-FAILURE",
    "sourceId": "altar_stabilized_failure",
    "title": "Stabilized Altar Failure",
    "hiddenTitle": "Unknown Stabilized Failure",
    "category": "Warnings",
    "triggerType": "discovery",
    "triggerId": "altar_stabilized_failure",
    "threat": "Warning Record // Rituals",
    "body": "Containment does not guarantee success. It makes failure survivable. A stabilized rite catches the worst of the mistake and teaches the altar where not to throw its anger. Safety is not kindness; it is geometry."
  },
  {
    "code": "ALTAR-VOLATILE-FAILURE",
    "sourceId": "altar_volatile_failure",
    "title": "Volatile Backlash",
    "hiddenTitle": "Unknown Volatile Failure",
    "category": "Warnings",
    "triggerType": "discovery",
    "triggerId": "altar_volatile_failure",
    "threat": "Warning Record // Rituals",
    "body": "Volatile power makes success louder and failure louder still. When a rite goes wrong under that pressure, it does not whisper. It announces itself with heat, force, witnesses, and consequences that linger after the light fades."
  }
];

const STORAGE_KEY = "demontime.redArchive.unlocked";
const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => Array.from(document.querySelectorAll(selector));
const animeApi = window.anime || null;
const animate = animeApi?.animate || null;
const stagger = animeApi?.stagger || ((n) => (_, i) => i * n);

const MINECRAFT_COLOR_CLASSES = {
  "0": "mc-black",
  "1": "mc-dark-blue",
  "2": "mc-dark-green",
  "3": "mc-dark-aqua",
  "4": "mc-dark-red",
  "5": "mc-dark-purple",
  "6": "mc-gold",
  "7": "mc-gray",
  "8": "mc-dark-gray",
  "9": "mc-blue",
  a: "mc-green",
  b: "mc-aqua",
  c: "mc-red",
  d: "mc-light-purple",
  e: "mc-yellow",
  f: "mc-white"
};

const MINECRAFT_FORMAT_CLASSES = {
  k: "mc-obfuscated",
  l: "mc-bold",
  m: "mc-strikethrough",
  n: "mc-underline",
  o: "mc-italic"
};

const OBFUSCATE_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789█▓▒░<>/\\{}[]!?$%#@*&+-=";

const els = {
  input: $("#code-input"),
  submit: $("#submit-code"),
  status: $("#archive-status"),
  result: $("#result-panel"),
  recordTitle: $("#record-title"),
  recordMeta: $("#record-meta"),
  recordBody: $("#record-body"),
  recordWarning: $("#record-warning"),
  copy: $("#copy-record"),
  reset: $("#reset-archive"),
  grid: $("#archive-grid"),
  unlockedCount: $("#unlocked-count"),
  totalCount: $("#total-count")
};

const VALID_RECORD_CODES = new Set(RED_ARCHIVE_RECORDS.map((record) => record.code));
let unlocked = new Set(loadUnlockedCodes().filter((code) => VALID_RECORD_CODES.has(code)));
let activeRecord = null;
let obfuscationTimer = null;

boot();

function boot() {
  els.totalCount.textContent = RED_ARCHIVE_RECORDS.length;
  renderGrid();
  bindEvents();
  startAmbientAnimations();

  if (animate) {
    animate(".eyebrow", { opacity: [0, 1], translateY: [-8, 0], duration: 900, delay: 150, ease: "outQuad" });
    animate(".title", { opacity: [0, 1], scale: [0.94, 1], duration: 1200, delay: 300, ease: "outExpo" });
    animate(".subtitle", { opacity: [0, 1], translateY: [14, 0], duration: 900, delay: 620, ease: "outQuad" });
    animate(".terminal-card", { opacity: [0, 1], translateY: [32, 0], duration: 900, delay: 820, ease: "outExpo" });
  }
}

function bindEvents() {
  els.submit.addEventListener("click", handleSubmit);
  els.input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") handleSubmit();
  });

  els.reset.addEventListener("click", () => {
    unlocked = new Set();
    localStorage.removeItem(STORAGE_KEY);
    activeRecord = null;
    els.result.classList.add("hidden");
    setStatus("RECORDS PURGED");
    renderGrid();
    pulseElement(els.reset);
  });

  els.copy.addEventListener("click", async () => {
    if (!activeRecord) return;
    const text = `${stripMinecraftFormatting(activeRecord.title)}\n${activeRecord.code}\n${stripMinecraftFormatting(activeRecord.category)}\n\n${stripMinecraftFormatting(activeRecord.body)}`;
    try {
      await navigator.clipboard.writeText(text);
      setStatus("ENTRY COPIED");
      els.copy.textContent = "Copied";
      setTimeout(() => (els.copy.textContent = "Copy entry"), 1200);
    } catch {
      setStatus("COPY BLOCKED");
    }
  });
}

function handleSubmit() {
  const normalized = normalizeCode(els.input.value);
  const record = RED_ARCHIVE_RECORDS.find((item) => normalizeCode(item.code) === normalized || normalizeCode(item.sourceId) === normalized);

  if (!normalized) {
    setStatus("AWAITING CODE");
    shake(els.input);
    return;
  }

  if (!record) {
    setStatus("ACCESS DENIED");
    showDenied();
    return;
  }

  unlocked.add(record.code);
  saveUnlockedCodes([...unlocked]);
  revealRecord(record);
  renderGrid();
}

function revealRecord(record) {
  activeRecord = record;
  setStatus("DECRYPTING");
  els.result.classList.remove("hidden");
  setFormattedContent(els.recordTitle, record.title);
  setFormattedContent(els.recordMeta, `${record.code} // ${record.category}`);
  setFormattedContent(els.recordWarning, record.threat);
  els.recordBody.innerHTML = "";

  if (animate) {
    animate(els.result, { opacity: [0, 1], translateY: [24, 0], scale: [0.98, 1], duration: 620, ease: "outExpo" });
    animate(".record-label, #record-title, #record-meta, .record-footer", {
      opacity: [0, 1],
      translateX: [-12, 0],
      delay: stagger(70),
      duration: 520,
      ease: "outQuad"
    });
  }

  typeFormattedText(els.recordBody, record.body, 15, () => setStatus("RECORD UNLOCKED"));
}

function showDenied() {
  els.result.classList.remove("hidden");
  els.recordTitle.textContent = "Record Not Found";
  els.recordMeta.textContent = "UNKNOWN-CODE // ACCESS REFUSED";
  els.recordWarning.textContent = "No record answers to that code.";
  els.recordBody.textContent = "No matching record exists. Check the recovered code, remove extra symbols, or seek another hidden code in-game.";
  activeRecord = null;
  shake(els.result);
}

function renderGrid() {
  els.unlockedCount.textContent = unlocked.size;
  els.grid.innerHTML = RED_ARCHIVE_RECORDS.map((record) => {
    const isUnlocked = unlocked.has(record.code);
    return `
      <article class="archive-card ${isUnlocked ? "" : "locked"}">
        <div class="code">${isUnlocked ? escapeHtml(record.code) : "LOCKED-RECORD"}</div>
        <h3>${isUnlocked ? renderMinecraftText(record.title) : escapeHtml(record.hiddenTitle || "Unknown Record")}</h3>
        <p>${isUnlocked ? escapeHtml(preview(stripMinecraftFormatting(record.body))) : "This file is sealed. Recover its code in-game to decrypt the entry."}</p>
        ${isUnlocked ? `<button class="ghost-button reopen" data-code="${escapeAttr(record.code)}">Open</button>` : ""}
      </article>
    `;
  }).join("");

  $$(".reopen").forEach((button) => {
    button.addEventListener("click", () => {
      const record = RED_ARCHIVE_RECORDS.find((item) => item.code === button.dataset.code);
      if (record) revealRecord(record);
    });
  });

  restartObfuscatedText();

  if (animate) {
    animate(".archive-card", {
      opacity: [0, 1],
      translateY: [16, 0],
      delay: stagger(45),
      duration: 480,
      ease: "outQuad"
    });
  }
}

function startAmbientAnimations() {
  if (!animate) return;

  animate(".sigil-ring", {
    rotate: "360deg",
    duration: 48000,
    loop: true,
    ease: "linear"
  });

  animate(".sigil", {
    scale: [0.92, 1.14],
    opacity: [0.55, 1],
    delay: stagger(220),
    duration: 2200,
    alternate: true,
    loop: true,
    ease: "inOutSine"
  });

  animate(".lights span", {
    opacity: [0.35, 1],
    delay: stagger(260),
    duration: 900,
    alternate: true,
    loop: true,
    ease: "inOutSine"
  });
}

function setFormattedContent(element, text) {
  element.innerHTML = renderMinecraftText(text);
  restartObfuscatedText();
}

function typeFormattedText(element, text, speed = 18, done = () => {}) {
  let index = 0;
  element.innerHTML = "";

  const timer = setInterval(() => {
    index += 1;

    // Formatting codes should apply instantly instead of appearing as typed text.
    while (text.charAt(index - 1) === "§" && index < text.length) {
      index += 1;
    }

    element.innerHTML = renderMinecraftText(text.slice(0, index));

    if (index >= text.length) {
      clearInterval(timer);
      restartObfuscatedText();
      done();
    }
  }, speed);
}

function renderMinecraftText(text) {
  const state = createFormattingState();
  let html = "";
  let buffer = "";

  const flush = () => {
    if (!buffer) return;

    const classes = [];
    if (state.colorClass) classes.push(state.colorClass);
    if (state.obfuscated) classes.push(MINECRAFT_FORMAT_CLASSES.k);
    if (state.bold) classes.push(MINECRAFT_FORMAT_CLASSES.l);
    if (state.strikethrough) classes.push(MINECRAFT_FORMAT_CLASSES.m);
    if (state.underline) classes.push(MINECRAFT_FORMAT_CLASSES.n);
    if (state.italic) classes.push(MINECRAFT_FORMAT_CLASSES.o);

    const classAttr = classes.length ? ` class="${classes.join(" ")}"` : "";
    const styleAttr = state.colorStyle ? ` style="color: ${state.colorStyle}"` : "";
    const originalAttr = state.obfuscated ? ` data-original="${escapeAttr(buffer)}"` : "";
    html += `<span${classAttr}${styleAttr}${originalAttr}>${escapeHtml(buffer).replace(/\n/g, "<br>")}</span>`;
    buffer = "";
  };

  for (let i = 0; i < String(text || "").length; i += 1) {
    const char = text[i];

    if (char === "§" && i + 1 < text.length) {
      const code = text[i + 1].toLowerCase();
      flush();

      if (code === "x") {
        const hex = readMinecraftHexColor(text, i);
        if (hex) {
          applyColor(state, null, `#${hex.value}`);
          i = hex.endIndex;
          continue;
        }
      }

      if (MINECRAFT_COLOR_CLASSES[code]) {
        applyColor(state, MINECRAFT_COLOR_CLASSES[code], null);
        i += 1;
        continue;
      }

      if (MINECRAFT_FORMAT_CLASSES[code]) {
        applyFormat(state, code);
        i += 1;
        continue;
      }

      if (code === "r") {
        resetFormattingState(state);
        i += 1;
        continue;
      }

      // Unknown § codes stay visible so mistakes are easier to catch while editing.
      buffer += char;
      continue;
    }

    buffer += char;
  }

  flush();
  return html;
}

function readMinecraftHexColor(text, startIndex) {
  // Supports Java's §x§R§R§G§G§B§B style hex formatting.
  let cursor = startIndex + 2;
  let value = "";

  for (let part = 0; part < 6; part += 1) {
    if (text[cursor] !== "§" || !/[0-9a-fA-F]/.test(text[cursor + 1] || "")) return null;
    value += text[cursor + 1];
    cursor += 2;
  }

  return { value, endIndex: cursor - 1 };
}

function createFormattingState() {
  return {
    colorClass: null,
    colorStyle: null,
    obfuscated: false,
    bold: false,
    strikethrough: false,
    underline: false,
    italic: false
  };
}

function resetFormattingState(state) {
  state.colorClass = null;
  state.colorStyle = null;
  state.obfuscated = false;
  state.bold = false;
  state.strikethrough = false;
  state.underline = false;
  state.italic = false;
}

function applyColor(state, colorClass, colorStyle) {
  // Minecraft color codes reset active formatting.
  resetFormattingState(state);
  state.colorClass = colorClass;
  state.colorStyle = colorStyle;
}

function applyFormat(state, code) {
  if (code === "k") state.obfuscated = true;
  if (code === "l") state.bold = true;
  if (code === "m") state.strikethrough = true;
  if (code === "n") state.underline = true;
  if (code === "o") state.italic = true;
}

function restartObfuscatedText() {
  if (obfuscationTimer) clearInterval(obfuscationTimer);

  const tick = () => {
    $$(".mc-obfuscated").forEach((span) => {
      const original = span.dataset.original || span.textContent || "";
      span.textContent = randomObfuscatedString(original);
    });
  };

  tick();
  obfuscationTimer = setInterval(tick, 82);
}

function randomObfuscatedString(original) {
  return Array.from(original).map((char) => {
    if (/\s/.test(char)) return char;
    return OBFUSCATE_CHARS[Math.floor(Math.random() * OBFUSCATE_CHARS.length)];
  }).join("");
}

function stripMinecraftFormatting(text) {
  return String(text || "").replace(/§x(§[0-9a-fA-F]){6}/g, "").replace(/§[0-9a-fk-orA-FK-OR]/g, "");
}

function escapeHtml(value) {
  return String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function escapeAttr(value) {
  return escapeHtml(value).replace(/`/g, "&#096;");
}

function normalizeCode(code) {
  return String(code || "")
    .trim()
    .toUpperCase()
    .replace(/[\s_]+/g, "-")
    .replace(/[^A-Z0-9-]/g, "")
    .replace(/-+/g, "-");
}

function loadUnlockedCodes() {
  try {
    const parsed = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function saveUnlockedCodes(codes) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(codes));
}

function preview(text) {
  return text.length > 116 ? `${text.slice(0, 116)}…` : text;
}

function setStatus(text) {
  els.status.textContent = text;
  pulseElement(els.status);
}

function pulseElement(target) {
  if (!animate || !target) return;
  animate(target, { scale: [1, 1.04, 1], duration: 360, ease: "outQuad" });
}

function shake(target) {
  if (!animate || !target) return;
  animate(target, {
    translateX: [0, -8, 8, -5, 5, 0],
    duration: 420,
    ease: "outQuad"
  });
}
