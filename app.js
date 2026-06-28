/*
  The Red Archive — DemonTime lore code site
  Based on the Heavenly Book entry list, but written so the website does not depend on an in-game archive system.

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
    "threat": "Recovered Lore // Heaven",
    "body": "A pale realm above the ordinary sky, reached only when the world forgets where up is supposed to end. The air feels clean in the wrong way, like a blade washed before judgment. Every step says the same thing: Heaven is beautiful, but it is not safe."
  },
  {
    "code": "SKY-BREACH",
    "sourceId": "sky_breach",
    "title": "Sky Breach",
    "hiddenTitle": "Unknown Sky Threshold",
    "category": "Heaven",
    "triggerType": "discovery",
    "triggerId": "y400|heaven_dimension_transport|demontimessntwo:heavendimension",
    "threat": "Recovered Lore // Heaven",
    "body": "Climb high enough and the sky stops being scenery. The blue thins, the wind goes silent, and the boundary opens like a wound. Travelers call it a doorway, but doors usually ask permission before they swallow you."
  },
  {
    "code": "HEAVEN-BIOME",
    "sourceId": "heaven_biome",
    "title": "Heaven Biome",
    "hiddenTitle": "Unknown Heaven Biome",
    "category": "Heaven",
    "triggerType": "discovery",
    "triggerId": "demontimessntwo:heavenbiome|heavenbiome",
    "threat": "Recovered Lore // Heaven",
    "body": "The Heaven biome grows where light has settled too long in one place. Grass, trees, and clouds carry a soft radiance, but the quiet is unnatural. Nothing there feels dead, yet everything feels watched."
  },
  {
    "code": "CLOUD-BLOCK",
    "sourceId": "cloud_block",
    "title": "Cloud Block",
    "hiddenTitle": "Unknown Cloud Matter",
    "category": "Heaven",
    "triggerType": "block",
    "triggerId": "demontimessntwo:cloud_block",
    "threat": "Block Lore // Heaven",
    "body": "Cloud matter can be gathered and shaped, though it never fully agrees to become solid. It holds weight like a secret and gives the player a way to build across emptiness. Too much of it in one place makes the ground feel optional."
  },
  {
    "code": "HEAVENLY-WOOD-FAMILY",
    "sourceId": "heavenly_wood_family",
    "title": "Heavenly Wood Set",
    "hiddenTitle": "Unknown Pale Wood",
    "category": "Heaven",
    "triggerType": "block",
    "triggerId": "demontimessntwo:heavenly_log|demontimessntwo:heavenly_wood|demontimessntwo:stripped_heavenly_log|demontimessntwo:stripped_heavenly_wood|demontimessntwo:heavenly_planks|demontimessntwo:heavenly_leaves",
    "threat": "Block Lore // Heaven",
    "body": "Heavenly wood is pale, clean, and almost too smooth under the hand. Its logs, planks, leaves, stairs, doors, signs, and fences all carry the same strange calm. It is excellent building material for anyone who does not mind their house feeling like a chapel."
  },
  {
    "code": "HEAVENLY-FORGE",
    "sourceId": "heavenly_forge",
    "title": "Heavenly Forge",
    "hiddenTitle": "Unknown Divine Workstation",
    "category": "Heaven",
    "triggerType": "block",
    "triggerId": "demontimessntwo:heavenly_forge",
    "threat": "Block Lore // Heaven",
    "body": "The Heavenly Forge does not simply heat metal. It teaches material to accept a higher purpose, whether the material wanted one or not. Tools made through it tend to feel lighter, sharper, and a little less forgiving."
  },
  {
    "code": "HEAVENLY-ALTAR",
    "sourceId": "heavenly_altar",
    "title": "Heavenly Altar",
    "hiddenTitle": "Unknown Altar",
    "category": "Heaven",
    "triggerType": "block",
    "triggerId": "demontimessntwo:heavenly_altar",
    "threat": "Block Lore // Heaven",
    "body": "The Heavenly Altar is not a crafting table with better manners. It responds to offerings, tools, position, and intent. Bring the wrong thing and it may ignore you; bring the right thing and it may answer too clearly."
  },
  {
    "code": "HEAVENLY-CACHE-BOX",
    "sourceId": "heavenly_cache_box",
    "title": "Heavenly Cache Box",
    "hiddenTitle": "Unknown Cache",
    "category": "Heaven",
    "triggerType": "block",
    "triggerId": "demontimessntwo:heavenly_cache_box",
    "threat": "Block Lore // Heaven",
    "body": "The Heavenly Cache Box is a locked mercy, a reward sealed behind proof of progress. Its keys are not just keys; they are permission. When one opens, it feels less like looting and more like being allowed to survive a little longer."
  },
  {
    "code": "PURIFIER",
    "sourceId": "purifier",
    "title": "Purifier",
    "hiddenTitle": "Unknown Purifier",
    "category": "Heaven",
    "triggerType": "block",
    "triggerId": "demontimessntwo:purifier",
    "threat": "Block Lore // Heaven",
    "body": "The Purifier removes corruption, but it does not erase history. Cleansed materials still remember what stained them. That memory is why purified things are often stronger, stranger, and less innocent than they look."
  },
  {
    "code": "FALLEN-HEAVENS",
    "sourceId": "fallen_heavens",
    "title": "Fallen Heavens",
    "hiddenTitle": "Unknown Fallen Biome",
    "category": "Fallen Heavens",
    "triggerType": "discovery",
    "triggerId": "demontimessntwo:fallen_heavens|fallen_heavens",
    "threat": "Recovered Lore // Fallen Heavens",
    "body": "Fallen Heavens is what happens when a holy place crashes and keeps burning. The ground is scarred, the air tastes like ash, and the ruins feel accused. Heaven did not descend there; it fell, and the world has not forgiven the impact."
  },
  {
    "code": "FALLEN-HEAVENS-FRINGE",
    "sourceId": "fallen_heavens_fringe",
    "title": "Fallen Heavens Fringe",
    "hiddenTitle": "Unknown Fringe",
    "category": "Fallen Heavens",
    "triggerType": "discovery",
    "triggerId": "demontimessntwo:fallen_heavens_fringe|fallen_heavens_fringe|fringe",
    "threat": "Recovered Lore // Fallen Heavens",
    "body": "The fringe is where normal life tries to return to the edge of the wound. Grass pushes near ash, trees lean away from old light, and the land pretends it is recovering. It is not healing yet. It is only learning how to breathe around the scar."
  },
  {
    "code": "ASH-COVERED-DIRT",
    "sourceId": "ash_covered_dirt",
    "title": "Ash Covered Dirt",
    "hiddenTitle": "Unknown Ashen Ground",
    "category": "Fallen Heavens",
    "triggerType": "block",
    "triggerId": "demontimessntwo:ash_covered_dirt",
    "threat": "Block Lore // Fallen Heavens",
    "body": "This dirt is not merely dirty; it is covered in the remains of something that once believed itself untouchable. Footsteps leave dull marks in the ash. Digging it up feels like disturbing a funeral that nobody admitted happened."
  },
  {
    "code": "CHARRED-WOOD-FAMILY",
    "sourceId": "charred_wood_family",
    "title": "Charred Wood Set",
    "hiddenTitle": "Unknown Burned Wood",
    "category": "Fallen Heavens",
    "triggerType": "block",
    "triggerId": "demontimessntwo:charred_log|demontimessntwo:charred_wood|demontimessntwo:stripped_charred_log|demontimessntwo:stripped_charred_wood|demontimessntwo:charred_planks|demontimessntwo:charred_stairs|demontimessntwo:charred_slab|demontimessntwo:charred_fence|demontimessntwo:charred_fence_gate|demontimessntwo:charred_door|demontimessntwo:charred_trapdoor|demontimessntwo:charred_leaves",
    "threat": "Block Lore // Fallen Heavens",
    "body": "Charred wood keeps the shape of a tree while surrendering the memory of being alive. Logs, planks, stairs, fences, doors, boats, and leaves all carry the same blackened silence. It builds sturdy shelters, but every shelter made from it feels like a survivor's apology."
  },
  {
    "code": "CHARRED-BOATS",
    "sourceId": "charred_boats",
    "title": "Charred Boats",
    "hiddenTitle": "Unknown Burned Boat",
    "category": "Fallen Heavens",
    "triggerType": "item",
    "triggerId": "demontimessntwo:charred_boat|demontimessntwo:charred_chest_boat",
    "threat": "Item Lore // Fallen Heavens",
    "body": "Charred boats float with an ugly kind of loyalty. They are built from burned wood that should have become useless, yet still carries players across water. The hull creaks like it remembers fire and resents the mercy of drowning."
  },
  {
    "code": "COSMIC-DEMON-ARENA",
    "sourceId": "cosmic_demon_arena",
    "title": "Cosmic Demon Arena",
    "hiddenTitle": "Unknown Arena",
    "category": "Structures",
    "triggerType": "discovery",
    "triggerId": "demontimessntwo:cosmic_demon_arena|demontimessntwo:cosmic_demon_ruins/arena|cosmic_demon_summoning_altar",
    "threat": "Recovered Lore // Structures",
    "body": "The arena was built for a fight that should not happen in an ordinary world. Barrels, ruin paths, and the summoning altar all point toward one purpose: draw the Cosmic Demon close and make the player regret being understood by gravity."
  },
  {
    "code": "FALLEN-RUINS-NETWORK",
    "sourceId": "fallen_ruins_network",
    "title": "Fallen Heavens Ruins Network",
    "hiddenTitle": "Unknown Ruin Network",
    "category": "Structures",
    "triggerType": "discovery",
    "triggerId": "demontimessntwo:fallen_heavens_ruins|demontimessntwo:cosmic_demon_ruins|complete_arena_network",
    "threat": "Recovered Lore // Structures",
    "body": "The ruin network spreads like a broken diagram around the arena. Paths, satellite structures, and burned buildings make the place feel like a village that died mid-prayer. Follow the spokes long enough and they all begin to point at the same wrong center."
  },
  {
    "code": "BROKEN-CHURCH",
    "sourceId": "broken_church",
    "title": "Broken Church",
    "hiddenTitle": "Unknown Church",
    "category": "Structures",
    "triggerType": "discovery",
    "triggerId": "demontimessntwo:fallen_heavens_ruins/broken_church|broken_church",
    "threat": "Recovered Lore // Structures",
    "body": "The broken church still knows what worship is, even after the roof failed and the walls split. Its silence is heavier than stone. Something here was begged for, something answered, and neither side left clean."
  },
  {
    "code": "CHARRED-HOUSE",
    "sourceId": "charred_house",
    "title": "Charred House",
    "hiddenTitle": "Unknown Burned House",
    "category": "Structures",
    "triggerType": "discovery",
    "triggerId": "demontimessntwo:fallen_heavens_ruins/charred_house|charred_house",
    "threat": "Recovered Lore // Structures",
    "body": "A burned house is worse than a ruin because it still remembers being ordinary. Charred walls frame rooms where nothing domestic survived. The structure does not threaten the player; it simply stands there and asks why anyone came back."
  },
  {
    "code": "CHARRED-BUILDING",
    "sourceId": "charred_building",
    "title": "Charred Building",
    "hiddenTitle": "Unknown Burned Building",
    "category": "Structures",
    "triggerType": "discovery",
    "triggerId": "demontimessntwo:fallen_heavens_ruins/charred_building|charred_building",
    "threat": "Recovered Lore // Structures",
    "body": "This smaller burned structure looks simple until the ash pattern starts making sense. It was not only destroyed; it was selected. Every blackened beam suggests the fire had direction, patience, and a reason."
  },
  {
    "code": "FOUNTAIN",
    "sourceId": "fountain",
    "title": "Fallen Fountain",
    "hiddenTitle": "Unknown Fountain",
    "category": "Structures",
    "triggerType": "discovery",
    "triggerId": "demontimessntwo:fallen_heavens_ruins/fountain|fountain",
    "threat": "Recovered Lore // Structures",
    "body": "The fallen fountain still carries water through stone that should have gone dry. Slate, columns, and broken polish surround it like a memory of public beauty. The water looks clean, but reflections in it often seem late to arrive."
  },
  {
    "code": "PATH-REMNANT",
    "sourceId": "path_remnant",
    "title": "Path Remnant",
    "hiddenTitle": "Unknown Broken Path",
    "category": "Structures",
    "triggerType": "discovery",
    "triggerId": "demontimessntwo:fallen_heavens_ruins/path_remnant|path_remnant|spokes",
    "threat": "Recovered Lore // Structures",
    "body": "These path remnants connect ruin to ruin with gravel, cobble, and damaged stone. They do not make travel easier so much as inevitable. Walk one and it feels like stepping into a sentence that was already written."
  },
  {
    "code": "SMALL-ALTAR",
    "sourceId": "small_altar",
    "title": "Small Altar",
    "hiddenTitle": "Unknown Black Altar",
    "category": "Structures",
    "triggerType": "discovery",
    "triggerId": "demontimessntwo:fallen_heavens_ruins/small_altar|small_altar",
    "threat": "Recovered Lore // Structures",
    "body": "The small altar is made from black marble, candles, skulls, and charred stairs: a quiet place for loud mistakes. It does not have the authority of the Heavenly Altar, but it has hunger. Smaller mouths can still bite."
  },
  {
    "code": "FORGE-STRUCTURE",
    "sourceId": "forge_structure",
    "title": "Forge Structure",
    "hiddenTitle": "Unknown Forge Structure",
    "category": "Structures",
    "triggerType": "discovery",
    "triggerId": "demontimessntwo:forge_structure|forge_structure",
    "threat": "Recovered Lore // Structures",
    "body": "The forge structure appears where work and worship have become difficult to separate. It promises progress, but every upgrade asks what was spent to make it possible. Some tools leave this place sharper than their owners."
  },
  {
    "code": "STAR-CLUSTER-STRUCTURE",
    "sourceId": "star_cluster_structure",
    "title": "Star Cluster Structure",
    "hiddenTitle": "Unknown Star Cluster",
    "category": "Structures",
    "triggerType": "discovery",
    "triggerId": "demontimessntwo:star_cluster_structure|star_cluster",
    "threat": "Recovered Lore // Structures",
    "body": "The star cluster structure gathers pieces of fallen sky into a pattern the world can barely hold. Its materials feel cold even near flame. Whatever fell there did not simply crash; it arrived with instructions."
  },
  {
    "code": "CHOIR-WISP",
    "sourceId": "choir_wisp",
    "title": "Choir Wisp",
    "hiddenTitle": "Unknown Choir Light",
    "category": "Mobs",
    "triggerType": "discovery",
    "triggerId": "demontimessntwo:wisp|wisp|choir_wisp",
    "threat": "Recovered Lore // Mobs",
    "body": "Choir Wisps are Heaven echoes given motion. They drift like fragments of a song, bless wounded allies, flee danger, and punish cruelty with brief holy backlash. To kill one is easy. To understand why it was singing is harder."
  },
  {
    "code": "ANGELIC-CHICKEN",
    "sourceId": "angelic_chicken",
    "title": "Angelic Chicken",
    "hiddenTitle": "Unknown Angelic Creature",
    "category": "Mobs",
    "triggerType": "kill",
    "triggerId": "demontimessntwo:angelicchicken|angelicchicken",
    "threat": "Kill Record // Mobs",
    "body": "Angelic Chickens look harmless because Heaven understands camouflage. Their feathers carry the first hint of divine ecology, soft enough to collect and strange enough to matter. Never mistake gentleness for absence of power."
  },
  {
    "code": "COSMIC-DEMON",
    "sourceId": "cosmic_demon",
    "title": "Cosmic Demon",
    "hiddenTitle": "Unknown Cosmic Boss",
    "category": "Bosses",
    "triggerType": "kill",
    "triggerId": "demontimessntwo:cosmicdemon|cosmicdemon",
    "threat": "Kill Record // Bosses",
    "body": "The Cosmic Demon is a boss-shaped collapse, a hunger dressed in orbiting shields and black-hole pressure. The arena does not contain it; the arena merely gives the fight a place to happen. Victory means surviving gravity long enough to steal its heart."
  },
  {
    "code": "ANGELIC-FEATHER",
    "sourceId": "angelic_feather",
    "title": "Angelic Feather",
    "hiddenTitle": "Unknown Feather",
    "category": "Relics",
    "triggerType": "item",
    "triggerId": "demontimessntwo:angelic_feather",
    "threat": "Item Lore // Relics",
    "body": "An Angelic Feather is light, warm, and almost insultingly delicate. It comes from Heaven-touched life and carries enough divine residue to begin early progression. Hold too many and your inventory starts feeling like evidence."
  },
  {
    "code": "GILDED-FEATHER",
    "sourceId": "gilded_feather",
    "title": "Gilded Feather",
    "hiddenTitle": "Unknown Gilded Feather",
    "category": "Relics",
    "triggerType": "item",
    "triggerId": "demontimessntwo:gildedfeather|demontimessntwo:gilded_feather",
    "threat": "Item Lore // Relics",
    "body": "A Gilded Feather is what happens when grace learns the language of value. It shines without needing light and feels heavier than it should. It is not just prettier than an Angelic Feather; it is more demanding."
  },
  {
    "code": "DIVINE-HALO",
    "sourceId": "divine_halo",
    "title": "Divine Halo",
    "hiddenTitle": "Unknown Halo",
    "category": "Relics",
    "triggerType": "item",
    "triggerId": "demontimessntwo:divine_halo_helmet",
    "threat": "Item Lore // Relics",
    "body": "The Divine Halo is worn like armor, but it feels more like a verdict circling the head. It suggests protection, status, and accusation all at once. A player wearing it does not look blessed so much as noticed."
  },
  {
    "code": "HEAVENLY-STICK",
    "sourceId": "heavenly_stick",
    "title": "Heavenly Stick",
    "hiddenTitle": "Unknown Heavenly Rod",
    "category": "Relics",
    "triggerType": "item",
    "triggerId": "demontimessntwo:heavenly_stick|demontimessntwo:enchanted_heavenly_stick",
    "threat": "Item Lore // Relics",
    "body": "The Heavenly Stick looks simple because sacred tools often begin as jokes. Enchanted, it becomes a rod of focus for recipes and higher Heaven work. The first lesson is humility: even a stick can become a key if the sky approves."
  },
  {
    "code": "HEAVENS-WRATH",
    "sourceId": "heavens_wrath",
    "title": "Heaven's Wrath",
    "hiddenTitle": "Unknown Heaven Weapon",
    "category": "Relics",
    "triggerType": "item",
    "triggerId": "demontimessntwo:heavens_wrath|demontimessntwo:true_heavens_wrath",
    "threat": "Item Lore // Relics",
    "body": "Heaven's Wrath is the weapon path where metal learns judgment. The higher form, True Heaven's Wrath, is not just a better blade; it is a holy sentence given an edge. Swing carefully. Verdicts rarely apologize."
  },
  {
    "code": "BLACKHOLE-CORE",
    "sourceId": "blackhole_core",
    "title": "Blackhole Core",
    "hiddenTitle": "Unknown Singularity Core",
    "category": "Relics",
    "triggerType": "item",
    "triggerId": "demontimessntwo:blackholecore|demontimessntwo:blackhole_core_item",
    "threat": "Item Lore // Relics",
    "body": "A Blackhole Core is contained collapse, still trying to become disaster. It belongs to the Cosmic Demon, staff progression, and anything reckless enough to make gravity negotiable. The safest core is the one you never forget is hungry."
  },
  {
    "code": "BLACKHOLE-STAFFS",
    "sourceId": "blackhole_staffs",
    "title": "Blackhole Staff Line",
    "hiddenTitle": "Unknown Gravity Staff",
    "category": "Relics",
    "triggerType": "item",
    "triggerId": "demontimessntwo:blackhole_staff|demontimessntwo:stabilized_blackhole_staff|demontimessntwo:event_horizon_staff|demontimessntwo:singularity_staff",
    "threat": "Item Lore // Relics",
    "body": "The Blackhole Staff line begins as a controlled failure and ends as an argument with reality. Base, stabilized, event-horizon, and singularity tiers each ask for more precision. Aim poorly and the world may obey anyway."
  },
  {
    "code": "BLACK-HOLE-RING",
    "sourceId": "black_hole_ring",
    "title": "Black Hole Ring",
    "hiddenTitle": "Unknown Black-Hole Bauble",
    "category": "Relics",
    "triggerType": "item",
    "triggerId": "demontimessntwo:black_hole_ring",
    "threat": "Item Lore // Relics",
    "body": "The Black Hole Ring is a worn singularity ward and a rare reward for players willing to flirt with collapse. Even dormant, it listens for nearby gravity. When awake, it teaches drops to fall in the player's direction."
  },
  {
    "code": "ANGELIC-FEATHER-CHARM",
    "sourceId": "angelic_feather_charm",
    "title": "Angelic Feather Charm",
    "hiddenTitle": "Unknown Angelic Charm",
    "category": "Relics",
    "triggerType": "item",
    "triggerId": "demontimessntwo:angelic_feather_charm",
    "threat": "Item Lore // Relics",
    "body": "The Angelic Feather Charm is a small mercy disguised as an accessory. It belongs with falling, floating, and the fragile hope that the ground can be delayed. It does not remove danger; it softens the argument."
  },
  {
    "code": "TITAN-REMNANT",
    "sourceId": "titan_remnant",
    "title": "Titan Remnant",
    "hiddenTitle": "Unknown Titan Relic",
    "category": "Relics",
    "triggerType": "item",
    "triggerId": "demontimessntwo:titan_remnant|demontimessntwo:titanremanent",
    "threat": "Item Lore // Relics",
    "body": "A Titan Remnant is not dead material. It is leftover strength with memory, stubbornness, and opinions. Boss rewards may break off into fragments, but fragments of a Titan still remember being enormous."
  },
  {
    "code": "TITAN-REMNANT-VARIANTS",
    "sourceId": "titan_remnant_variants",
    "title": "Titan Remnant Variants",
    "hiddenTitle": "Unknown Altered Remnant",
    "category": "Relics",
    "triggerType": "item",
    "triggerId": "demontimessntwo:controlledtitanremanent|demontimessntwo:permanentlyconcealedtitanremanent|demontimessntwo:blessed_titan_remnant|demontimessntwo:concealed_titan_remnant|demontimessntwo:blood_stabilized_remnant",
    "threat": "Item Lore // Relics",
    "body": "Altered Titan Remnants reveal the path of control: blessing, concealment, blood stabilization, and binding. Each form solves one problem while teaching the material a new grudge. Power refined this way is never neutral."
  },
  {
    "code": "TITAN-BAUBLES",
    "sourceId": "titan_baubles",
    "title": "Titan Baubles",
    "hiddenTitle": "Unknown Titan Bauble",
    "category": "Relics",
    "triggerType": "item",
    "triggerId": "demontimessntwo:titan_heart_pendant|demontimessntwo:titan_belt|demontimessntwo:reinforced_titan_belt|demontimessntwo:titan_bound_relic",
    "threat": "Item Lore // Relics",
    "body": "Titan baubles turn endurance into something wearable. Pendants, belts, reinforced belts, and bound relics all share the same promise: the body can keep going after common sense says stop. That promise always has a cost."
  },
  {
    "code": "PURIFIER-CORES",
    "sourceId": "purifier_cores",
    "title": "Purifier Cores",
    "hiddenTitle": "Unknown Purifier Core",
    "category": "Relics",
    "triggerType": "item",
    "triggerId": "demontimessntwo:basic_purifier_core|demontimessntwo:angelic_core|demontimessntwo:celestial_core|demontimessntwo:abyssal_core|demontimessntwo:blood_core|demontimessntwo:verdant_core|demontimessntwo:infernal_core|demontimessntwo:echo_core",
    "threat": "Item Lore // Relics",
    "body": "Purifier cores are moral machinery. Angelic, celestial, abyssal, blood, verdant, infernal, and echo cores each decide differently what clean means. The machine obeys the core, not the player's conscience."
  },
  {
    "code": "HEAVENLY-CACHE-KEYS",
    "sourceId": "heavenly_cache_keys",
    "title": "Heavenly Cache Keys",
    "hiddenTitle": "Unknown Cache Key",
    "category": "Relics",
    "triggerType": "item",
    "triggerId": "demontimessntwo:heavenly_cache_key_fragment|demontimessntwo:heavenly_cache_key",
    "threat": "Item Lore // Relics",
    "body": "Heavenly Cache Keys begin as fragments because permission is rarely given whole. Assemble the key and a sealed reward may open. Leave it broken and it remains a lesson: locked Heaven rewards are built, not simply found."
  },
  {
    "code": "AEROLITE-MATERIALS",
    "sourceId": "aerolite_materials",
    "title": "Aerolite Materials",
    "hiddenTitle": "Unknown Pale Metal",
    "category": "Materials",
    "triggerType": "item",
    "triggerId": "demontimessntwo:aerolite_chunk|demontimessntwo:aerolite_ingot|demontimessntwo:aerolite_smithing_template|demontimessntwo:aerolite_ore|demontimessntwo:aerolite_block",
    "threat": "Item Lore // Materials",
    "body": "Aerolite is pale metal with a skyward temperament. Ore, chunks, ingots, blocks, and smithing templates all carry the same clean pressure. It is the kind of material that wants to become a tool before the player has decided what for."
  },
  {
    "code": "AEROLITE-TOOLS",
    "sourceId": "aerolite_tools",
    "title": "Aerolite Tools",
    "hiddenTitle": "Unknown Aerolite Tool",
    "category": "Materials",
    "triggerType": "item",
    "triggerId": "demontimessntwo:aerolite_pickaxe|demontimessntwo:aerolite_axe|demontimessntwo:aerolite_sword|demontimessntwo:aerolite_shovel|demontimessntwo:aerolite_hoe|demontimessntwo:blessed_aerolite_sword|demontimessntwo:aerolite_utility_belt",
    "threat": "Item Lore // Materials",
    "body": "Aerolite tools feel light without feeling weak. Pickaxe, axe, sword, shovel, hoe, blessed blade, and utility belt form an early divine equipment path. They reward players who prefer precision over brute force."
  },
  {
    "code": "ASTRELIUM-MATERIALS",
    "sourceId": "astrelium_materials",
    "title": "Astrelium Materials",
    "hiddenTitle": "Unknown Star Metal",
    "category": "Materials",
    "triggerType": "item",
    "triggerId": "demontimessntwo:astrelium_chunk|demontimessntwo:astrelium_ingot|demontimessntwo:astrelium_smithing_template|demontimessntwo:astrelium_ore|demontimessntwo:astrelium_block",
    "threat": "Item Lore // Materials",
    "body": "Astrelium is star metal that remembers the fall. Its ore, chunks, ingots, blocks, and templates seem quiet until used near higher progression. Then the material begins to hum like a night sky trying to wake up."
  },
  {
    "code": "ASTRELIUM-TOOLS",
    "sourceId": "astrelium_tools",
    "title": "Astrelium Tools",
    "hiddenTitle": "Unknown Astrelium Tool",
    "category": "Materials",
    "triggerType": "item",
    "triggerId": "demontimessntwo:astrelium_pickaxe|demontimessntwo:astrelium_axe|demontimessntwo:astrelium_sword|demontimessntwo:astrelium_shovel|demontimessntwo:astrelium_hoe|demontimessntwo:astrelium_war_belt",
    "threat": "Item Lore // Materials",
    "body": "Astrelium tools are built from fallen-star discipline. The sword, axe, pickaxe, shovel, hoe, and war belt feel more severe than Aerolite. They are not graceful tools; they are practical pieces of midnight."
  },
  {
    "code": "STAR-MATERIALS",
    "sourceId": "star_materials",
    "title": "Star Materials",
    "hiddenTitle": "Unknown Fallen Star Material",
    "category": "Materials",
    "triggerType": "item",
    "triggerId": "demontimessntwo:star_metal_fragment|demontimessntwo:fallen_star_core|demontimessntwo:cracked_star_shell|demontimessntwo:star_metal_ingot|demontimessntwo:celestial_singularity",
    "threat": "Item Lore // Materials",
    "body": "Star materials are pieces of impact: fragments, cores, cracked shells, ingots, and singularities. They belong to the part of progression where the sky stops being distant. Every piece feels like it arrived angry."
  },
  {
    "code": "GRACE-MATERIALS",
    "sourceId": "grace_materials",
    "title": "Grace Materials",
    "hiddenTitle": "Unknown Grace Material",
    "category": "Materials",
    "triggerType": "item",
    "triggerId": "demontimessntwo:grace_dust|demontimessntwo:bottled_grace|demontimessntwo:grace_apple|demontimessntwo:grace_locket|demontimessntwo:celestial_amulet",
    "threat": "Item Lore // Materials",
    "body": "Grace materials are soft-looking power: dust, bottles, apples, lockets, and amulets. They heal, preserve, and protect, but mercy is still a force. The gentlest item in the set may be the one that scares death the most."
  },
  {
    "code": "STABILIZER-CIRCLE-BASIC",
    "sourceId": "stabilizer_circle_basic",
    "title": "Stabilizer Circle",
    "hiddenTitle": "Unknown Stabilizer Pattern",
    "category": "Rituals",
    "triggerType": "discovery",
    "triggerId": "stabilizer_circle_basic",
    "threat": "Recovered Lore // Rituals",
    "body": "Four stabilizers around the Heavenly Altar form the first safe circuit. It is not perfect, but it gives overlimit work a shape to lean on. Without it, power spills wherever it pleases."
  },
  {
    "code": "STABILIZER-CIRCLE-ADVANCED",
    "sourceId": "stabilizer_circle_advanced",
    "title": "Advanced Stabilizer Circle",
    "hiddenTitle": "Unknown Advanced Pattern",
    "category": "Rituals",
    "triggerType": "discovery",
    "triggerId": "stabilizer_circle_advanced",
    "threat": "Recovered Lore // Rituals",
    "body": "Eight stabilizers complete the full ring and turn a dangerous rite into proper containment geometry. The circle catches failed pressure before the altar can throw it back at the player. Safety, in this case, means surviving the mistake."
  },
  {
    "code": "STABILIZER-LESSER",
    "sourceId": "stabilizer_lesser",
    "title": "Lesser Stabilizer",
    "hiddenTitle": "Unknown Stabilizer",
    "category": "Rituals",
    "triggerType": "block",
    "triggerId": "demontimessntwo:lesser_stabilizer",
    "threat": "Block Lore // Rituals",
    "body": "The Lesser Stabilizer is a basic anchor for altar work. Its stability is weak, but even weak order matters when power starts misbehaving. Place enough of them and the circle begins to listen."
  },
  {
    "code": "STABILIZER-EMPOWERED",
    "sourceId": "stabilizer_empowered",
    "title": "Empowered Stabilizer",
    "hiddenTitle": "Unknown Empowered Stabilizer",
    "category": "Rituals",
    "triggerType": "block",
    "triggerId": "demontimessntwo:empowered_stabilizer",
    "threat": "Block Lore // Rituals",
    "body": "The Empowered Stabilizer is built for stronger upgrade pressure. It helps protect items from downgrade and keeps failed force from scattering too quickly. It does not make the rite gentle; it makes the violence organized."
  },
  {
    "code": "STABILIZER-CELESTIAL",
    "sourceId": "stabilizer_celestial",
    "title": "Celestial Stabilizer",
    "hiddenTitle": "Unknown Celestial Stabilizer",
    "category": "Rituals",
    "triggerType": "block",
    "triggerId": "demontimessntwo:celestial_stabilizer",
    "threat": "Block Lore // Rituals",
    "body": "The Celestial Stabilizer favors safe outcomes and cleaner overlimit attempts. Its purpose is protection: hold the item together while too much power tries to enter. It is the stabilizer for players who value survival over spectacle."
  },
  {
    "code": "STABILIZER-TITAN",
    "sourceId": "stabilizer_titan",
    "title": "Titan Stabilizer",
    "hiddenTitle": "Unknown Titan Stabilizer",
    "category": "Rituals",
    "triggerType": "block",
    "triggerId": "demontimessntwo:titan_stabilizer",
    "threat": "Block Lore // Rituals",
    "body": "The Titan Stabilizer protects the item body through endurance rather than elegance. Heavy pressure, repeated strain, and brutal upgrades are its language. It does not soothe the circle. It braces its bones."
  },
  {
    "code": "STABILIZER-VOLATILE",
    "sourceId": "stabilizer_volatile",
    "title": "Volatile Stabilizer",
    "hiddenTitle": "Unknown Volatile Stabilizer",
    "category": "Rituals",
    "triggerType": "block",
    "triggerId": "demontimessntwo:volatile_stabilizer",
    "threat": "Block Lore // Rituals",
    "body": "The Volatile Stabilizer feeds extra power into the circle and dares the altar to use it. Success may come faster, louder, and stronger. Failure also arrives that way, with teeth and witnesses."
  },
  {
    "code": "BESTIARY-ANGELIC-CHICKEN-BASIC",
    "sourceId": "bestiary_angelic_chicken_basic",
    "title": "Angelic Chicken: Field Notes",
    "hiddenTitle": "Unknown Creature Notes",
    "category": "Bestiary",
    "triggerType": "kill",
    "triggerId": "demontimessntwo:angelicchicken|angelicchicken",
    "threat": "Kill Record // Bestiary",
    "body": "Field note: Angelic Chickens are Heaven-touched wildlife, soft-bodied and deceptively important. Their presence proves divine ecology is not all halos and judgment. Sometimes Heaven begins with feathers, clucks, and a warning nobody respects."
  },
  {
    "code": "BESTIARY-ANGELIC-CHICKEN-DROPS",
    "sourceId": "bestiary_angelic_chicken_drops",
    "title": "Angelic Chicken: Drops",
    "hiddenTitle": "Unknown Creature Drops",
    "category": "Bestiary",
    "triggerType": "manual",
    "triggerId": "bestiary_angelic_chicken@10",
    "threat": "Manual Study // Bestiary",
    "body": "Field note: Repeated encounters point toward feather-based materials as the useful reward path. Angelic and gilded feathers should feel like early keys to divine crafting. The creature is small, but its drops open doors above its weight class."
  },
  {
    "code": "BESTIARY-ANGELIC-CHICKEN-WEAKNESS",
    "sourceId": "bestiary_angelic_chicken_weakness",
    "title": "Angelic Chicken: Weakness",
    "hiddenTitle": "Unknown Creature Weakness",
    "category": "Bestiary",
    "triggerType": "manual",
    "triggerId": "bestiary_angelic_chicken@25",
    "threat": "Manual Study // Bestiary",
    "body": "Field note: Angelic Chickens are not a serious combat threat. The real danger is psychological: they make Heaven look harmless. That is how sacred places lure players into lowering their guard."
  },
  {
    "code": "BESTIARY-CHOIR-WISP-BASIC",
    "sourceId": "bestiary_choir_wisp_basic",
    "title": "Choir Wisp: Field Notes",
    "hiddenTitle": "Unknown Wisp Notes",
    "category": "Bestiary",
    "triggerType": "kill",
    "triggerId": "demontimessntwo:choir_wisp|choir_wisp|wisp",
    "threat": "Kill Record // Bestiary",
    "body": "Field note: Choir Wisps are rare Heaven echoes with movement that feels musical instead of animal. Their pulse and hover patterns suggest a fragment of song trapped in a body. Approach as if the air itself is listening."
  },
  {
    "code": "BESTIARY-CHOIR-WISP-DROPS",
    "sourceId": "bestiary_choir_wisp_drops",
    "title": "Choir Wisp: Drops",
    "hiddenTitle": "Unknown Wisp Drops",
    "category": "Bestiary",
    "triggerType": "manual",
    "triggerId": "bestiary_choir_wisp@10",
    "threat": "Manual Study // Bestiary",
    "body": "Field note: Enough encounters reveal the Wisp's reward identity: echo-themed materials and soft divine residues. Its drops should feel less like meat or loot and more like collecting a note after the singer has vanished."
  },
  {
    "code": "BESTIARY-CHOIR-WISP-WEAKNESS",
    "sourceId": "bestiary_choir_wisp_weakness",
    "title": "Choir Wisp: Weakness",
    "hiddenTitle": "Unknown Wisp Weakness",
    "category": "Bestiary",
    "triggerType": "manual",
    "triggerId": "bestiary_choir_wisp@25",
    "threat": "Manual Study // Bestiary",
    "body": "Field note: The Wisp is fragile under sustained pressure. Stay close after it blinks away, interrupt the rhythm, and do not let its pulse reset the fight. It survives through distance, not toughness."
  },
  {
    "code": "BESTIARY-COSMIC-DEMON-BASIC",
    "sourceId": "bestiary_cosmic_demon_basic",
    "title": "Cosmic Demon: Field Notes",
    "hiddenTitle": "Unknown Boss Notes",
    "category": "Bestiary",
    "triggerType": "kill",
    "triggerId": "demontimessntwo:cosmicdemon|cosmicdemon|cosmic_demon",
    "threat": "Kill Record // Bestiary",
    "body": "Field note: The Cosmic Demon fights like gravity learned hatred. Shield pressure, black-hole hazards, and orbiting defenses make the battle feel less like a duel and more like weather. The player wins by making chaos brief."
  },
  {
    "code": "BESTIARY-COSMIC-DEMON-DROPS",
    "sourceId": "bestiary_cosmic_demon_drops",
    "title": "Cosmic Demon: Drops",
    "hiddenTitle": "Unknown Boss Drops",
    "category": "Bestiary",
    "triggerType": "manual",
    "triggerId": "bestiary_cosmic_demon@3",
    "threat": "Manual Study // Bestiary",
    "body": "Field note: Repeated victories confirm the core reward identity: Blackhole Core, Titan Remnant, Stabilized Blackhole Fragment, and the rarer Celestial Singularity. These are not trophies. They are pieces of a collapse that failed to finish."
  },
  {
    "code": "BESTIARY-COSMIC-DEMON-WEAKNESS",
    "sourceId": "bestiary_cosmic_demon_weakness",
    "title": "Cosmic Demon: Weakness",
    "hiddenTitle": "Unknown Boss Weakness",
    "category": "Bestiary",
    "triggerType": "manual",
    "triggerId": "bestiary_cosmic_demon@5",
    "threat": "Manual Study // Bestiary",
    "body": "Field note: The shield cores are the opening. Break the orbiting protection, respect the pull, and punish the demon before the arena controls the pace. Greed gets dragged into the center first."
  },
  {
    "code": "BESTIARY-FALLEN-SERAPH-BASIC",
    "sourceId": "bestiary_fallen_seraph_basic",
    "title": "Fallen Seraph: Field Notes",
    "hiddenTitle": "Unknown Seraph Notes",
    "category": "Bestiary",
    "triggerType": "kill",
    "triggerId": "demontimessntwo:fallen_seraph|fallen_seraph|fallenseraph",
    "threat": "Kill Record // Bestiary",
    "body": "Field note: The Fallen Seraph is not just a large enemy. Its phases are a sermon delivered with lasers, dives, halos, and gravity pins. Every attack asks whether the player can survive a god having a bad day."
  },
  {
    "code": "BESTIARY-FALLEN-SERAPH-DROPS",
    "sourceId": "bestiary_fallen_seraph_drops",
    "title": "Fallen Seraph: Drops",
    "hiddenTitle": "Unknown Seraph Drops",
    "category": "Bestiary",
    "triggerType": "manual",
    "triggerId": "bestiary_fallen_seraph@3",
    "threat": "Manual Study // Bestiary",
    "body": "Field note: The Fallen Seraph's rewards should feed star-metal, fallen-star, and high Heaven progression. Its body is a battlefield between what fell and what still insists it was holy. Loot from it should feel like stolen judgment."
  },
  {
    "code": "BESTIARY-FALLEN-SERAPH-WEAKNESS",
    "sourceId": "bestiary_fallen_seraph_weakness",
    "title": "Fallen Seraph: Weakness",
    "hiddenTitle": "Unknown Seraph Weakness",
    "category": "Bestiary",
    "triggerType": "manual",
    "triggerId": "bestiary_fallen_seraph@5",
    "threat": "Manual Study // Bestiary",
    "body": "Field note: Every phase adds pressure. Watch the attack order, move before the beam settles, and treat the final phase like a race. Hesitation gives the Seraph time to turn the sky into a weapon."
  },
  {
    "code": "LORE-BLACKHOLE-BASIC",
    "sourceId": "lore_blackhole_basic",
    "title": "Black-Hole Lore: First Contact",
    "hiddenTitle": "Unknown Gravity Lore",
    "category": "Lore",
    "triggerType": "item",
    "triggerId": "demontimessntwo:blackholecore|demontimessntwo:blackhole_core_item|demontimessntwo:stabilized_blackhole_fragment",
    "threat": "Item Lore // Lore",
    "body": "Item lore: Black-hole materials are not just crafting parts. They are contained collapse, useful only while the container keeps winning. The moment the container loses, the item stops being an ingredient and becomes an event."
  },
  {
    "code": "LORE-BLACK-HOLE-RING-BASIC",
    "sourceId": "lore_black_hole_ring_basic",
    "title": "Black Hole Ring: Dormant",
    "hiddenTitle": "Unknown Ring Lore",
    "category": "Lore",
    "triggerType": "item",
    "triggerId": "demontimessntwo:black_hole_ring",
    "threat": "Item Lore // Lore",
    "body": "Item lore: The Black Hole Ring is a dormant singularity ward. Even idle, it listens for nearby gravity and waits for the wearer to need more than luck. A ring this quiet should never be trusted completely."
  },
  {
    "code": "LORE-BLACK-HOLE-RING-USED",
    "sourceId": "lore_black_hole_ring_used",
    "title": "Black Hole Ring: Awake",
    "hiddenTitle": "Unknown Active Ring Lore",
    "category": "Lore",
    "triggerType": "use",
    "triggerId": "demontimessntwo:black_hole_ring",
    "threat": "Use Record // Lore",
    "body": "Item lore: When used, the ring reveals its real trick: nearby drops bend toward the wearer, and black-hole damage loses some of its bite. It does not defeat gravity. It convinces gravity to play favorites."
  },
  {
    "code": "LORE-BLACKHOLE-STAFF-USED",
    "sourceId": "lore_blackhole_staff_used",
    "title": "Gravity Staff: Handling Notes",
    "hiddenTitle": "Unknown Staff Use Lore",
    "category": "Lore",
    "triggerType": "use",
    "triggerId": "demontimessntwo:blackhole_staff|demontimessntwo:stabilized_blackhole_staff|demontimessntwo:event_horizon_staff|demontimessntwo:singularity_staff",
    "threat": "Use Record // Lore",
    "body": "Item lore: The staff line is not a wand. It is a controlled failure state: aim, release, and hope the world agrees with your math. Good users guide collapse. Bad users become part of the demonstration."
  },
  {
    "code": "LORE-BLACKHOLE-STAFF-FULL",
    "sourceId": "lore_blackhole_staff_full",
    "title": "Gravity Staff: Complete Line",
    "hiddenTitle": "Unknown Complete Staff Lore",
    "category": "Lore",
    "triggerType": "item",
    "triggerId": "demontimessntwo:event_horizon_staff|demontimessntwo:singularity_staff",
    "threat": "Item Lore // Lore",
    "body": "Item lore: The higher staff tiers stop asking whether gravity should obey. Event-horizon and singularity forms begin deciding where gravity is allowed to exist. That is not magic anymore; it is jurisdiction."
  },
  {
    "code": "LORE-HEAVENS-WRATH-BASIC",
    "sourceId": "lore_heavens_wrath_basic",
    "title": "Heaven's Wrath: First Edge",
    "hiddenTitle": "Unknown Blade Lore",
    "category": "Lore",
    "triggerType": "item",
    "triggerId": "demontimessntwo:heavens_wrath|demontimessntwo:blessed_aerolite_sword|demontimessntwo:celestial_blade",
    "threat": "Item Lore // Lore",
    "body": "Item lore: Heaven's Wrath is a weapon path, but its theme is judgment. Ordinary metal is taught to remember the sky and punish what stands beneath it. The first edge is bright because warnings usually are."
  },
  {
    "code": "LORE-HEAVENS-WRATH-USED",
    "sourceId": "lore_heavens_wrath_used",
    "title": "Heaven's Wrath: In Motion",
    "hiddenTitle": "Unknown Blade Use Lore",
    "category": "Lore",
    "triggerType": "use",
    "triggerId": "demontimessntwo:heavens_wrath|demontimessntwo:blessed_aerolite_sword|demontimessntwo:celestial_blade|demontimessntwo:true_heavens_wrath",
    "threat": "Use Record // Lore",
    "body": "Item lore: In motion, the blade behaves like a verdict. Its power belongs to timing, range, and restraint, not button-mashing fury. Heaven does not swing wildly. Heaven chooses."
  },
  {
    "code": "LORE-HEAVENS-WRATH-FULL",
    "sourceId": "lore_heavens_wrath_full",
    "title": "True Heaven's Wrath",
    "hiddenTitle": "Unknown True Blade Lore",
    "category": "Lore",
    "triggerType": "item",
    "triggerId": "demontimessntwo:true_heavens_wrath",
    "threat": "Item Lore // Lore",
    "body": "Item lore: True Heaven's Wrath is the line completed: not a sword that became holy, but a holy sentence given an edge. It does not ask whether the target deserves mercy. That question was decided before the swing."
  },
  {
    "code": "LORE-TITAN-REMNANT-BASIC",
    "sourceId": "lore_titan_remnant_basic",
    "title": "Titan Remnant: Bone Memory",
    "hiddenTitle": "Unknown Titan Lore",
    "category": "Lore",
    "triggerType": "item",
    "triggerId": "demontimessntwo:titan_remnant|demontimessntwo:titanremanent",
    "threat": "Item Lore // Lore",
    "body": "Item lore: Titan Remnants are not dead material. They are leftovers with opinions, bone memory, and a stubborn refusal to become small. Crafting with them feels like negotiating with something that used to block out the sun."
  },
  {
    "code": "LORE-TITAN-REMNANT-FULL",
    "sourceId": "lore_titan_remnant_full",
    "title": "Titan Remnant: Altered Forms",
    "hiddenTitle": "Unknown Altered Titan Lore",
    "category": "Lore",
    "triggerType": "item",
    "triggerId": "demontimessntwo:blessed_titan_remnant|demontimessntwo:concealed_titan_remnant|demontimessntwo:blood_stabilized_remnant|demontimessntwo:titan_bound_relic",
    "threat": "Item Lore // Lore",
    "body": "Item lore: Altered remnants reveal the Titan path: blessing, concealment, blood stabilization, and finally binding. Each stage adds control while removing innocence. By the end, the relic does not feel made. It feels captured."
  },
  {
    "code": "LORE-PURIFIER-CORES-BASIC",
    "sourceId": "lore_purifier_cores_basic",
    "title": "Purifier Cores: First Circuit",
    "hiddenTitle": "Unknown Core Lore",
    "category": "Lore",
    "triggerType": "item",
    "triggerId": "demontimessntwo:basic_purifier_core|demontimessntwo:angelic_core|demontimessntwo:abyssal_core|demontimessntwo:celestial_core|demontimessntwo:blood_core|demontimessntwo:verdant_core|demontimessntwo:infernal_core|demontimessntwo:echo_core",
    "threat": "Item Lore // Lore",
    "body": "Item lore: Purifier cores are moral machinery. Each core changes what the machine thinks clean means, from angelic mercy to infernal hunger to echo memory. Purification is not always kindness. Sometimes it is editing with a blade."
  },
  {
    "code": "LORE-INFUSION-BOOKS-FULL",
    "sourceId": "lore_infusion_books_full",
    "title": "Infusion Books: Marginalia",
    "hiddenTitle": "Unknown Infusion Lore",
    "category": "Lore",
    "triggerType": "item",
    "triggerId": "demontimessntwo:restored_infusion_book|demontimessntwo:celestial_infusion_book|demontimessntwo:abyssal_infusion_book",
    "threat": "Item Lore // Lore",
    "body": "Item lore: Upgraded infusion books do not merely list recipes. They argue with the reader about what transformation should cost. Margins shift, diagrams accuse, and the page always seems to know what the player is trying to skip."
  },
  {
    "code": "LORE-UPGRADE-TABLE-DEEPER",
    "sourceId": "lore_upgrade_table_deeper",
    "title": "Upgrade Table: Deeper Work",
    "hiddenTitle": "Unknown Upgrade Lore",
    "category": "Lore",
    "triggerType": "block",
    "triggerId": "demontimessntwo:upgrade_table",
    "threat": "Block Lore // Lore",
    "body": "Upgrade lore: The table can safely improve equipment for a while. Past that, power needs stabilizing or the item starts fighting back. Overlimit work is less about making something stronger and more about convincing it not to break itself becoming better."
  },
  {
    "code": "LORE-UPGRADE-CATALYSTS-BASIC",
    "sourceId": "lore_upgrade_catalysts_basic",
    "title": "Upgrade Catalysts: Pressure",
    "hiddenTitle": "Unknown Catalyst Lore",
    "category": "Lore",
    "triggerType": "item",
    "triggerId": "demontimessntwo:upgrade_catalyst|demontimessntwo:lesser_upgrade_catalyst|demontimessntwo:focused_upgrade_catalyst|demontimessntwo:empowered_upgrade_catalyst|demontimessntwo:aerolite_upgrade_catalyst|demontimessntwo:celestial_upgrade_catalyst|demontimessntwo:titan_upgrade_catalyst|demontimessntwo:volatile_upgrade_catalyst",
    "threat": "Item Lore // Lore",
    "body": "Item lore: Catalysts push an item toward a better version of itself. Better does not always mean safer, kinder, or more stable. A catalyst is pressure with a purpose, and pressure leaves marks."
  },
  {
    "code": "LORE-UPGRADE-CATALYSTS-FULL",
    "sourceId": "lore_upgrade_catalysts_full",
    "title": "Upgrade Catalysts: Overlimit",
    "hiddenTitle": "Unknown Overlimit Lore",
    "category": "Lore",
    "triggerType": "item",
    "triggerId": "demontimessntwo:celestial_upgrade_catalyst|demontimessntwo:titan_upgrade_catalyst|demontimessntwo:volatile_upgrade_catalyst",
    "threat": "Item Lore // Lore",
    "body": "Item lore: High-tier catalysts are overlimit tools. Celestial, Titan, and Volatile pressure should pair with stabilizers once upgrades pass the safe range. Without a circle, ambition becomes shrapnel."
  },
  {
    "code": "LORE-FALLING-BAUBLES-USED",
    "sourceId": "lore_falling_baubles_used",
    "title": "Bauble Lore: Falling Refused",
    "hiddenTitle": "Unknown Falling Bauble Lore",
    "category": "Lore",
    "triggerType": "use",
    "triggerId": "demontimessntwo:angelic_feather_charm|demontimessntwo:celestial_amulet|demontimessntwo:astral_ring",
    "threat": "Use Record // Lore",
    "body": "Use lore: Falling baubles do not remove gravity. They negotiate with it every tick the wearer is losing the argument. The charm does not say no to the ground; it says not yet."
  },
  {
    "code": "LORE-LIFE-BAUBLES-USED",
    "sourceId": "lore_life_baubles_used",
    "title": "Bauble Lore: Emergency Mercy",
    "hiddenTitle": "Unknown Life Bauble Lore",
    "category": "Lore",
    "triggerType": "use",
    "triggerId": "demontimessntwo:grace_locket|demontimessntwo:titan_heart_pendant|demontimessntwo:blood_pact_ring|demontimessntwo:verdant_ring",
    "threat": "Use Record // Lore",
    "body": "Use lore: Life baubles wait until the body is scared enough to listen. Then they spend their charge to keep the wearer moving, even when flesh has already voted to stop. Mercy, here, is an emergency system."
  },
  {
    "code": "LORE-ABYSSAL-WARDS-USED",
    "sourceId": "lore_abyssal_wards_used",
    "title": "Bauble Lore: Warding the Void",
    "hiddenTitle": "Unknown Warding Lore",
    "category": "Lore",
    "triggerType": "use",
    "triggerId": "demontimessntwo:abyssal_warding_charm|demontimessntwo:reinforced_abyssal_warding_charm|demontimessntwo:celestial_abyssal_warding_charm",
    "threat": "Use Record // Lore",
    "body": "Use lore: Abyssal wards do not block the void. They teach the void to take less, which is not the same as safety. Surviving the abyss means learning how to be an unsatisfying meal."
  },
  {
    "code": "RITUAL-CLUE-ALTAR-FOUND",
    "sourceId": "ritual_clue_altar_found",
    "title": "Ritual Clue: The Altar Listens",
    "hiddenTitle": "Unknown Altar Clue",
    "category": "Rituals",
    "triggerType": "block",
    "triggerId": "demontimessntwo:heavenly_altar",
    "threat": "Block Lore // Rituals",
    "body": "Ritual clue: The altar reacts to attention before it reacts to offerings. Bring tools, symbols, and materials that already belong to Heaven. A careless rite is just noise with candles."
  },
  {
    "code": "RITUAL-CLUE-TOOLS",
    "sourceId": "ritual_clue_tools",
    "title": "Ritual Clue: Cup and Knife",
    "hiddenTitle": "Unknown Tool Clue",
    "category": "Rituals",
    "triggerType": "item",
    "triggerId": "demontimessntwo:goblet|demontimessntwo:athame",
    "threat": "Item Lore // Rituals",
    "body": "Ritual clue: The Goblet receives. The Athame divides. Together they tell the altar this is not ordinary crafting. One holds the promise; the other decides what must be cut away."
  },
  {
    "code": "RITUAL-CLUE-FIRST-LIGHT",
    "sourceId": "ritual_clue_first_light",
    "title": "Ritual Clue: First Light",
    "hiddenTitle": "Unknown Feather Clue",
    "category": "Rituals",
    "triggerType": "item",
    "triggerId": "demontimessntwo:angelic_feather|demontimessntwo:gildedfeather|demontimessntwo:gilded_feather",
    "threat": "Item Lore // Rituals",
    "body": "Ritual clue: Feather offerings belong to gentler rites. They open early Heaven paths and teach the player that softness can still be power. Do not let the first light become the only light."
  },
  {
    "code": "RITUAL-CLUE-GRAVITY",
    "sourceId": "ritual_clue_gravity",
    "title": "Ritual Clue: Gravity Offering",
    "hiddenTitle": "Unknown Gravity Clue",
    "category": "Rituals",
    "triggerType": "item",
    "triggerId": "demontimessntwo:blackholecore|demontimessntwo:blackhole_core_item|demontimessntwo:celestial_singularity",
    "threat": "Item Lore // Rituals",
    "body": "Ritual clue: Black-hole offerings should ask for power, staff progression, or expensive singular rewards. They should never feel cheap because collapse is not a discount ingredient. Pay carefully or pay twice."
  },
  {
    "code": "RITUAL-CLUE-TITAN",
    "sourceId": "ritual_clue_titan",
    "title": "Ritual Clue: Titan Offering",
    "hiddenTitle": "Unknown Titan Clue",
    "category": "Rituals",
    "triggerType": "item",
    "triggerId": "demontimessntwo:titan_remnant|demontimessntwo:titanremanent",
    "threat": "Item Lore // Rituals",
    "body": "Ritual clue: Titan offerings belong to endurance, binding, belts, heavy survival, and boss-tier upgrades. They are not delicate materials. They answer best to rites that respect weight."
  },
  {
    "code": "RITUAL-CLUE-PURIFIER",
    "sourceId": "ritual_clue_purifier",
    "title": "Ritual Clue: Purifier Logic",
    "hiddenTitle": "Unknown Purifier Clue",
    "category": "Rituals",
    "triggerType": "block",
    "triggerId": "demontimessntwo:purifier",
    "threat": "Block Lore // Rituals",
    "body": "Ritual clue: Purifier rites separate corruption from material, but the output should remember what it used to be. Cleansing without memory is just erasure. The best results keep the scar and change what it means."
  },
  {
    "code": "RITUAL-CLUE-CACHE",
    "sourceId": "ritual_clue_cache",
    "title": "Ritual Clue: Cache Key",
    "hiddenTitle": "Unknown Cache Clue",
    "category": "Rituals",
    "triggerType": "item",
    "triggerId": "demontimessntwo:heavenly_cache_key_fragment|demontimessntwo:heavenly_cache_key",
    "threat": "Item Lore // Rituals",
    "body": "Ritual clue: A complete key should open a cache. A broken key should teach the player that locked Heaven rewards are built, not simply found. The door is not being cruel; it is checking whether the lesson landed."
  },
  {
    "code": "ALTAR-UNSTABLE-FAILURE",
    "sourceId": "altar_unstable_failure",
    "title": "Unstable Altar Failure",
    "hiddenTitle": "Unknown Altar Failure",
    "category": "Rituals",
    "triggerType": "discovery",
    "triggerId": "altar_unstable_failure",
    "threat": "Recovered Lore // Rituals",
    "body": "Failure note: An altar without a stabilizer circle can fail raw. The rite may fizzle, backlash, drain favor, or wake nearby hostile things. The altar does not punish ignorance; it simply refuses to catch what the player drops."
  },
  {
    "code": "ALTAR-STABILIZED-FAILURE",
    "sourceId": "altar_stabilized_failure",
    "title": "Stabilized Altar Failure",
    "hiddenTitle": "Unknown Stabilized Failure",
    "category": "Rituals",
    "triggerType": "discovery",
    "triggerId": "altar_stabilized_failure",
    "threat": "Recovered Lore // Rituals",
    "body": "Failure note: A stabilizer circle does not make every rite succeed. It makes failure survivable. The circle catches the worst of the mistake, leaving the player with smoke, warning, and another chance to be smarter."
  },
  {
    "code": "ALTAR-VOLATILE-FAILURE",
    "sourceId": "altar_volatile_failure",
    "title": "Volatile Stabilizer Backlash",
    "hiddenTitle": "Unknown Volatile Failure",
    "category": "Rituals",
    "triggerType": "discovery",
    "triggerId": "altar_volatile_failure",
    "threat": "Recovered Lore // Rituals",
    "body": "Failure note: Volatile stabilizers feed more power into the circle. They improve success, but when they go wrong, they go wrong loudly. If the ritual starts sounding pleased with itself, step back."
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
