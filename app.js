/*
  The Red Archive — DemonTime lore code site
  Curated, grouped storyline-only record list. Gameplay-only, duplicate, deprecated, and old in-game archive-style entries were removed.

  Related records are clumped into larger story files so the site feels like a lore terminal instead of a checklist.
  Old codes can still work through aliases.

  Lore text supports Minecraft formatting codes:
  §k obfuscated, §l bold, §o italic, §n underline, §m strikethrough, §r reset,
  §0-§f color codes, and Java hex colors like §x§f§f§0§0§0§0.
*/

const RED_ARCHIVE_RECORDS = [
  {
    "code": "HEAVEN-SKY-THRESHOLD",
    "aliases": [
      "HEAVEN-DIMENSION",
      "SKY-BREACH",
      "HEAVEN-BIOME",
      "heaven_dimension",
      "sky_breach",
      "heaven_biome"
    ],
    "sourceId": "heaven_dimension+sky_breach+heaven_biome",
    "title": "Heaven and the Sky Threshold",
    "hiddenTitle": "Unknown Sky Dominion",
    "category": "Heaven",
    "triggerType": "discovery",
    "triggerId": "demontimessntwo:heavendimension|heavendimension|dimension/heavendimension|y400|heaven_dimension_transport|demontimessntwo:heavenbiome|heavenbiome",
    "threat": "Story Record // Heaven",
    "body": "The first sign of Heaven is not a gate. It is height. Climb until the sky thins and the world forgets how to keep you, and the breach opens into a realm too clean to trust. Its biome grows from divine light made into weather: pale grass, still trees, beautiful silence, and air that feels like judgment pretending to be peace. Heaven is not merely above the world. It is above consequence, or it believes it is."
  },
  {
    "code": "CLOUD-MATTER",
    "aliases": [
      "CLOUD-BLOCK",
      "cloud_block"
    ],
    "sourceId": "cloud_block",
    "title": "Cloud Matter",
    "hiddenTitle": "Unknown Cloud Matter",
    "category": "Heaven",
    "triggerType": "block",
    "triggerId": "demontimessntwo:cloud_block",
    "threat": "Matter Record // Heaven",
    "body": "Cloud matter can be shaped, but never fully convinced. It remembers being sky and treats solidity like a temporary favor. Heaven builds with things that should not hold weight, then calls the result proof of authority. Walk on it carefully. Anything that used to be air may eventually remember how to let go."
  },
  {
    "code": "HEAVENLY-WORKS",
    "aliases": [
      "HEAVENLY-FORGE",
      "HEAVENS-WRATH",
      "DIVINE-HALO",
      "heavenly_forge",
      "heavens_wrath",
      "divine_halo"
    ],
    "sourceId": "heavenly_forge+heavens_wrath+divine_halo",
    "title": "Heavenly Works: Forge, Halo, Wrath",
    "hiddenTitle": "Unknown Instruments of Judgment",
    "category": "Relics",
    "triggerType": "item",
    "triggerId": "demontimessntwo:heavenly_forge|demontimessntwo:heavens_wrath|demontimessntwo:true_heavens_wrath|demontimessntwo:divine_halo_helmet",
    "threat": "Relic Record // Judgment",
    "body": "The Heavenly Forge does not simply improve metal. It teaches material to accept a purpose higher than survival. A halo is not decoration; it is a crown with better public relations, a circle of light making a claim over the wearer. Heaven's Wrath is the same claim sharpened into a blade. The truer form does not strike harder because it is stronger. It strikes harder because mercy has been removed from the calculation."
  },
  {
    "code": "HEAVENLY-ALTAR-RITES",
    "aliases": [
      "HEAVENLY-ALTAR",
      "RITUAL-CLUE-ALTAR-FOUND",
      "RITUAL-CLUE-TOOLS",
      "RITUAL-CLUE-FIRST-LIGHT",
      "heavenly_altar",
      "ritual_clue_altar_found",
      "ritual_clue_tools",
      "ritual_clue_first_light"
    ],
    "sourceId": "heavenly_altar+ritual_clue_altar_found+ritual_clue_tools+ritual_clue_first_light",
    "title": "Heavenly Altar Rites",
    "hiddenTitle": "Unknown Altar Instructions",
    "category": "Rituals",
    "triggerType": "block",
    "triggerId": "demontimessntwo:heavenly_altar|demontimessntwo:goblet|demontimessntwo:athame|demontimessntwo:angelic_feather|demontimessntwo:gildedfeather|demontimessntwo:gilded_feather",
    "threat": "Ritual Record // Altar",
    "body": "The altar listens before it answers. Attention is the first offering; the rite begins the moment the player chooses to be noticed. The Goblet receives. The Athame divides. Feather offerings open the first pale paths because softness can still be power. Bring the wrong thing and the altar may ignore you. Bring the right thing and it may remember your name."
  },
  {
    "code": "PURIFIER-LOGIC",
    "aliases": [
      "PURIFIER",
      "PURIFIER-CORES",
      "RITUAL-CLUE-PURIFIER",
      "purifier",
      "purifier_cores",
      "ritual_clue_purifier"
    ],
    "sourceId": "purifier+purifier_cores+ritual_clue_purifier",
    "title": "Purifier Logic",
    "hiddenTitle": "Unknown Cleansing Machine",
    "category": "Rituals",
    "triggerType": "block",
    "triggerId": "demontimessntwo:purifier|demontimessntwo:basic_purifier_core|demontimessntwo:angelic_core|demontimessntwo:celestial_core|demontimessntwo:abyssal_core|demontimessntwo:blood_core|demontimessntwo:verdant_core|demontimessntwo:infernal_core|demontimessntwo:echo_core",
    "threat": "Ritual Record // Purification",
    "body": "The Purifier removes corruption, but it cannot erase history. Each core teaches the machine a different definition of clean: angelic mercy, abyssal silence, blood memory, verdant repair, infernal hunger, echo persistence. The cleanest result is not the one with no past. It is the one that survived the past without becoming obedient to it."
  },
  {
    "code": "FALLEN-HEAVENS-SCAR",
    "aliases": [
      "FALLEN-HEAVENS",
      "FALLEN-HEAVENS-FRINGE",
      "ASH-COVERED-DIRT",
      "CHARRED-WOOD-FAMILY",
      "fallen_heavens",
      "fallen_heavens_fringe",
      "ash_covered_dirt",
      "charred_wood_family"
    ],
    "sourceId": "fallen_heavens+fallen_heavens_fringe+ash_covered_dirt+charred_wood_family",
    "title": "The Fallen Heavens Scar",
    "hiddenTitle": "Unknown Fallen Biome",
    "category": "Fallen Heavens",
    "triggerType": "discovery",
    "triggerId": "demontimessntwo:fallen_heavens|fallen_heavens|demontimessntwo:fallen_heavens_fringe|fallen_heavens_fringe|fringe|demontimessntwo:ash_covered_dirt|demontimessntwo:charred_log|demontimessntwo:charred_wood|demontimessntwo:stripped_charred_log|demontimessntwo:stripped_charred_wood|demontimessntwo:charred_planks|demontimessntwo:charred_stairs|demontimessntwo:charred_slab|demontimessntwo:charred_fence|demontimessntwo:charred_fence_gate|demontimessntwo:charred_door|demontimessntwo:charred_trapdoor|demontimessntwo:charred_leaves",
    "threat": "Story Record // Fallen Heavens",
    "body": "Fallen Heavens is the scar left when something holy hit the ground and kept burning. The fringe is where ordinary life pretends recovery has begun, but ash-covered dirt and charred wood know better. Every path, trunk, plank, and footprint disturbs the remains of a place that believed itself untouchable. The land did not become cursed overnight; it became accused."
  },
  {
    "code": "FALLEN-RUINS-NETWORK",
    "aliases": [
      "BROKEN-CHURCH",
      "CHARRED-HOUSE",
      "SMALL-ALTAR",
      "fallen_ruins_network",
      "broken_church",
      "charred_house",
      "small_altar"
    ],
    "sourceId": "fallen_ruins_network+broken_church+charred_house+small_altar",
    "title": "The Fallen Ruins Network",
    "hiddenTitle": "Unknown Ruin Network",
    "category": "Ruins",
    "triggerType": "discovery",
    "triggerId": "demontimessntwo:fallen_heavens_ruins|demontimessntwo:cosmic_demon_ruins|complete_arena_network|demontimessntwo:fallen_heavens_ruins/broken_church|broken_church|demontimessntwo:fallen_heavens_ruins/charred_house|charred_house|demontimessntwo:fallen_heavens_ruins/small_altar|small_altar",
    "threat": "Structure Record // Ruins",
    "body": "The ruins are not scattered randomly. Paths, homes, altars, and a broken church form a pattern like a village trying to point at its own murderer. The church broke before it burned. The houses still frame their last seconds. The small altars prove not every rite needed a temple, only desperate hands and a price. Follow the roads and Fallen Heavens stops feeling like a biome. It starts feeling like a crime scene."
  },
  {
    "code": "COSMIC-DEMON-ENCOUNTER",
    "aliases": [
      "COSMIC-DEMON-ARENA",
      "COSMIC-DEMON",
      "cosmic_demon_arena",
      "cosmic_demon",
      "bestiary_cosmic_demon_basic"
    ],
    "sourceId": "cosmic_demon_arena+cosmic_demon",
    "title": "The Cosmic Demon Encounter",
    "hiddenTitle": "Unknown Collapse Boss",
    "category": "Bosses",
    "triggerType": "kill",
    "triggerId": "demontimessntwo:cosmic_demon_arena|demontimessntwo:cosmic_demon_ruins/arena|cosmic_demon_summoning_altar|demontimessntwo:cosmicdemon|cosmicdemon|cosmic_demon",
    "threat": "Boss Record // Collapse",
    "body": "The arena was not built for sport. Its paths, offerings, and altar curve toward one invitation: bring the Cosmic Demon close enough to fight. The demon is gravity given malice. It rearranges distance, movement, and safety until the battlefield becomes part of its body. Its core is not a trophy. It is the part of collapse that survived being defeated."
  },
  {
    "code": "GRAVITY-RELICS",
    "aliases": [
      "BLACKHOLE-CORE",
      "BLACKHOLE-STAFFS",
      "BLACK-HOLE-RING",
      "RITUAL-CLUE-GRAVITY",
      "blackhole_core",
      "blackhole_staffs",
      "black_hole_ring",
      "ritual_clue_gravity"
    ],
    "sourceId": "blackhole_core+blackhole_staffs+black_hole_ring+ritual_clue_gravity",
    "title": "Gravity Relics",
    "hiddenTitle": "Unknown Collapse Relics",
    "category": "Relics",
    "triggerType": "item",
    "triggerId": "demontimessntwo:blackholecore|demontimessntwo:blackhole_core_item|demontimessntwo:stabilized_blackhole_staff|demontimessntwo:blackhole_staff|demontimessntwo:event_horizon_staff|demontimessntwo:singularity_staff|demontimessntwo:black_hole_ring|demontimessntwo:celestial_singularity",
    "threat": "Relic Record // Collapse",
    "body": "A Blackhole Core is contained disaster. The staff line begins as controlled failure and ends as jurisdiction over gravity. The ring is a private agreement with collapse, teaching nearby things to fall toward the wearer. Black-hole offerings are never cheap, even when the cost is not obvious yet. The safest relic is the one you never forget is hungry."
  },
  {
    "code": "FALLEN-STAR-RECORD",
    "aliases": [
      "STAR-CLUSTER-STRUCTURE",
      "STAR-MATERIALS",
      "star_cluster_structure",
      "star_materials"
    ],
    "sourceId": "star_cluster_structure+star_materials",
    "title": "Fallen Star Record",
    "hiddenTitle": "Unknown Fallen Star",
    "category": "Relics",
    "triggerType": "item",
    "triggerId": "demontimessntwo:star_cluster_structure|star_cluster|demontimessntwo:star_metal_fragment|demontimessntwo:fallen_star_core|demontimessntwo:cracked_star_shell|demontimessntwo:star_metal_ingot|demontimessntwo:celestial_singularity",
    "threat": "Relic Record // Falling Star",
    "body": "The star cluster does not look built so much as arranged after impact. Pieces of sky gathered there like witnesses after a crash. Star fragments, fallen cores, cracked shells, ingots, and singularities all belong to the moment the sky stopped being distant and became debris. Every shard feels like it arrived angry and has not cooled enough to forgive the ground."
  },
  {
    "code": "ANGELIC-ECOLOGY",
    "aliases": [
      "ANGELIC-CHICKEN",
      "ANGELIC-FEATHER",
      "GILDED-FEATHER",
      "angelic_chicken",
      "angelic_feather",
      "gilded_feather"
    ],
    "sourceId": "angelic_chicken+angelic_feather+gilded_feather",
    "title": "Angelic Ecology",
    "hiddenTitle": "Unknown Angelic Life",
    "category": "Creatures",
    "triggerType": "item",
    "triggerId": "demontimessntwo:angelicchicken|angelicchicken|demontimessntwo:angelic_feather|demontimessntwo:gildedfeather|demontimessntwo:gilded_feather",
    "threat": "Creature Record // Heaven",
    "body": "Not every holy creature arrives with wings spread and judgment blazing. Some cluck softly in the grass and make Heaven seem harmless. Angelic feathers are the softest proof that Heaven can be touched, while gilded feathers turn softness into a signature. That is the first trick of divine ecology: teach the player to smile before showing them teeth."
  },
  {
    "code": "CHOIR-WISP",
    "aliases": [
      "choir_wisp"
    ],
    "sourceId": "choir_wisp",
    "title": "Choir Wisp",
    "hiddenTitle": "Unknown Choir Light",
    "category": "Creatures",
    "triggerType": "discovery",
    "triggerId": "demontimessntwo:wisp|wisp|choir_wisp",
    "threat": "Creature Record // Choir",
    "body": "A Choir Wisp is less an animal than a note that learned to hover. It blesses, flees, pulses, and punishes like a fragment of sacred music trapped in a body. Strike one and the backlash feels personal, as if the song remembers who interrupted it. Some records describe the true choir as §kUNTRANSLATED§r, which may mean lost, sealed, or still singing somewhere no ear should reach."
  },
  {
    "code": "FALLEN-SERAPH",
    "aliases": [
      "bestiary_fallen_seraph_basic",
      "fallen_seraph"
    ],
    "sourceId": "bestiary_fallen_seraph_basic",
    "title": "Fallen Seraph",
    "hiddenTitle": "Unknown Fallen Seraph",
    "category": "Bosses",
    "triggerType": "kill",
    "triggerId": "demontimessntwo:fallen_seraph|fallen_seraph|fallenseraph",
    "threat": "Boss Record // Fallen Heaven",
    "body": "The Fallen Seraph is not a monster pretending to be holy. It is holiness after the fall, still convinced its pain is doctrine. Lasers, dives, halos, and gravity pins are not just attacks. They are a sermon delivered by something that no longer knows how to stop preaching. Defeating it does not disprove Heaven. It proves Heaven can bleed."
  },
  {
    "code": "TITAN-REMAINS",
    "aliases": [
      "TITAN-REMNANT",
      "TITAN-REMNANT-VARIANTS",
      "RITUAL-CLUE-TITAN",
      "titan_remnant",
      "titan_remnant_variants",
      "ritual_clue_titan"
    ],
    "sourceId": "titan_remnant+titan_remnant_variants+ritual_clue_titan",
    "title": "Titan Remains",
    "hiddenTitle": "Unknown Titan Relic",
    "category": "Relics",
    "triggerType": "item",
    "triggerId": "demontimessntwo:titan_remnant|demontimessntwo:titanremanent|demontimessntwo:controlledtitanremanent|demontimessntwo:permanentlyconcealedtitanremanent|demontimessntwo:blessed_titan_remnant|demontimessntwo:concealed_titan_remnant|demontimessntwo:blood_stabilized_remnant",
    "threat": "Relic Record // Titan",
    "body": "A Titan Remnant is not dead material. It is leftover enormity with memory, stubbornness, and opinions. Control, concealment, blessing, blood stabilization, and binding each solve one problem while teaching the relic a new grudge. The altar treats Titan matter like a sleeping witness and tries not to wake too much of it at once."
  },
  {
    "code": "GRACE-OF-MERCY",
    "aliases": [
      "GRACE-MATERIALS",
      "grace_materials"
    ],
    "sourceId": "grace_materials",
    "title": "Grace of Mercy",
    "hiddenTitle": "Unknown Grace Relic",
    "category": "Relics",
    "triggerType": "item",
    "triggerId": "demontimessntwo:grace_dust|demontimessntwo:bottled_grace|demontimessntwo:grace_apple|demontimessntwo:grace_locket|demontimessntwo:celestial_amulet",
    "threat": "Relic Record // Grace",
    "body": "Grace looks gentle because mercy knows how to hide its strength. Dust, bottles, apples, lockets, and amulets carry the same impossible promise: not yet, not here, not this death. In a world where Heaven often feels like judgment, grace is the stranger record. It suggests something holy may still want the player to live."
  },
  {
    "code": "RITUAL-FAILURE-RULES",
    "aliases": [
      "ALTAR-UNSTABLE-FAILURE",
      "ALTAR-STABILIZED-FAILURE",
      "ALTAR-VOLATILE-FAILURE",
      "altar_unstable_failure",
      "altar_stabilized_failure",
      "altar_volatile_failure"
    ],
    "sourceId": "altar_unstable_failure+altar_stabilized_failure+altar_volatile_failure",
    "title": "Ritual Failure Rules",
    "hiddenTitle": "Unknown Failure Record",
    "category": "Warnings",
    "triggerType": "discovery",
    "triggerId": "altar_unstable_failure|altar_stabilized_failure|altar_volatile_failure",
    "threat": "Warning Record // Rituals",
    "body": "Failure is not always absence. Sometimes failure is arrival. An altar without containment can fizzle, bite back, drain what was offered, or wake nearby things that should have stayed asleep. Stabilization makes the mistake survivable, not kind. Volatile power makes success louder and failure louder still. Safety is not mercy; it is geometry under pressure."
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
  const record = RED_ARCHIVE_RECORDS.find((item) => {
    const aliases = Array.isArray(item.aliases) ? item.aliases : [];
    return normalizeCode(item.code) === normalized || normalizeCode(item.sourceId) === normalized || aliases.some((alias) => normalizeCode(alias) === normalized);
  });

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
