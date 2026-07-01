/*
  The Red Archive — DemonTime: Season Two lore code site
  In-game items reveal private archive codes; this site restores the matching memory groups.

  Codes are normalized before checking, so lowercase, spaces, and hyphens are ignored.
  Example: SKY-A7F4, skya7f4, sky a7f4, and sky-a7f4 all unlock the same memory.

  Lore text supports Minecraft formatting codes:
  §k obfuscated, §l bold, §o italic, §n underline, §m strikethrough, §r reset,
  §0-§f color codes, and Java hex colors like §x§f§f§0§0§0§0.
*/

const RED_ARCHIVE_RECORDS = [
  {
    code: "SKY-A7F4",
    sourceId: "sky_threshold_heaven_dimension_heaven_biome",
    title: "Sky Threshold Memory",
    hiddenTitle: "Unrestored Sky Memory",
    category: "Heaven Memory",
    triggerType: "code_fragment",
    triggerId: "demontimessntwo:red_archive_sky_fragment|heaven_dimension|sky_threshold|heaven_biome",
    threat: "Memory Group // Heaven Threshold",
    effect: "sky",
    guideTitle: "Follow the sky breach",
    guideHint: "Search high places, Heaven travel clues, and anything that makes the world feel too thin.",
    associatedRecords: ["Sky Threshold", "Heaven Dimension", "Heaven Biome", "Cloud Matter", "Heaven Transport Route"],
    body: "Heaven does not open like a door. It thins. The higher the player climbs, the less the world remembers how to keep them, until the sky becomes a threshold and the threshold becomes a verdict. Beyond it waits the Heaven Dimension: pale grass, quiet trees, cloud matter, and air too clean to trust. The biome is beautiful in the way a courtroom is beautiful before the sentence is read. §8Recovered note:§r the sky was never empty. It was watching."
  },
  {
    code: "ALTAR-8MZ2",
    sourceId: "heavenly_altar_rituals_cache_failure",
    title: "Altar Memory: Cache and Failure",
    hiddenTitle: "Unrestored Altar Memory",
    category: "Ritual Memory",
    triggerType: "code_fragment",
    triggerId: "demontimessntwo:red_archive_altar_fragment|heavenly_altar|heavenly_cache_box|heavenly_cache_key|altar_failure",
    threat: "Memory Group // Altar Rites",
    effect: "altar",
    guideTitle: "Listen to the altar",
    guideHint: "Work with ritual tools, cache keys, offerings, and failed rites. The altar remembers both success and backlash.",
    associatedRecords: ["Heavenly Altar", "Ritual Failure", "Heavenly Cache", "Cache Key", "Offering Logic", "Stabilized Failure"],
    body: "The Heavenly Altar listens before it answers. A Goblet receives. An Athame divides. A feather asks gently. A cache key asks with proof. The cache is not a chest so much as a promise that Heaven locked away something it still wanted found by the correct hands. Failed rites are not empty mistakes; they are failed negotiations. Without containment, the altar may fizzle, bite, drain, or wake things buried under the ritual geometry. §cThe altar does not forgive sloppy names.§r"
  },
  {
    code: "CHOIR-9K2M",
    sourceId: "choir_bow_choir_wail_hymn_resonance",
    title: "Choir Memory: Resonance",
    hiddenTitle: "Unrestored Choir Memory",
    category: "Weapon Memory",
    triggerType: "code_fragment",
    triggerId: "demontimessntwo:red_archive_choir_fragment|choir_bow|choir_wail|hymn_shot|resonance",
    threat: "Memory Group // Choir Bow",
    effect: "choir",
    guideTitle: "Tune the bow",
    guideHint: "Experiment with the Choir Bow, full charge, shifting, resonance, Hymn Shot, and Choir Wail.",
    associatedRecords: ["Choir Bow", "Hymn Shot", "Choir Wail", "Resonance", "Full Draw", "Song Pressure"],
    body: "The Choir Bow is not a bow that learned music. It is music forced into the shape of a weapon. Hymn Shot is the first clean note: focused, obedient, almost merciful. Choir Wail is the note after obedience breaks, when sound stops blessing the target and starts accusing it. Resonance is the memory between shots, the gathered pressure of every note that has not yet been allowed to scream. When the string is drawn, distance gains a voice. When the shot lands, the target learns what it sounds like to be named."
  },
  {
    code: "SERAPH-Q6R1",
    sourceId: "seraphic_angelic_enemies_feathers_divine_halo",
    title: "Seraphic Memory: Feathers and Halos",
    hiddenTitle: "Unrestored Seraphic Memory",
    category: "Creature Memory",
    triggerType: "code_fragment",
    triggerId: "demontimessntwo:red_archive_seraph_fragment|angelicchicken|choir_wisp|fallen_seraph|angelic_feather|gilded_feather|divine_halo",
    threat: "Memory Group // Seraphic Remains",
    effect: "seraph",
    guideTitle: "Study what Heaven sheds",
    guideHint: "Look for angelic enemies, feathers, halos, wisps, and anything beautiful enough to be suspicious.",
    associatedRecords: ["Angelic Enemies", "Angelic Feather", "Gilded Feather", "Divine Halo", "Choir Wisp", "Seraphic Remains"],
    body: "Not every angelic thing arrives as a boss. Some arrive as feathers, halos, wisps, and soft creatures that make Heaven look harmless. Angelic feathers are the first touchable proof that divine life bleeds materials into the world. Gilded feathers remember rank. Halos remember command. Seraphic enemies remember Heaven before the fall and hate the ground for surviving them. The prettiest pieces are often the most dangerous, because they teach the player to smile before showing them what judgment weighs."
  },
  {
    code: "THRONE-X8V3",
    sourceId: "heaven_authority_heavens_wrath_fallen_heaven_cosmic_demon",
    title: "Throne Memory: Wrath and Collapse",
    hiddenTitle: "Unrestored Throne Memory",
    category: "Authority Memory",
    triggerType: "code_fragment",
    triggerId: "demontimessntwo:red_archive_throne_fragment|heavens_wrath|true_heavens_wrath|fallen_heavens|cosmicdemon|blackhole_core",
    threat: "Memory Group // Heaven Authority",
    effect: "throne",
    guideTitle: "Challenge authority",
    guideHint: "Follow Heaven's Wrath, Fallen Heaven scars, black-hole relics, and the Cosmic Demon encounter.",
    associatedRecords: ["Heaven's Wrath", "True Heaven's Wrath", "Fallen Heaven", "Cosmic Demon", "Blackhole Core", "Authority Scar"],
    body: "Heaven calls its violence authority because authority sounds cleaner than fear. Heaven's Wrath is not merely a weapon path; it is a verdict sharpened until mercy falls away from the edge. Fallen Heaven is what happens when that authority crashes into the world and leaves a scar that still smells like ash. The Cosmic Demon is the counterargument: collapse wearing hunger, gravity with malice, a throne made from everything that falls. Between Wrath and Collapse, DemonTime asks one question: who gets to decide what deserves to remain standing?"
  },
  {
    code: "SEAL-V4ND",
    sourceId: "seal_blocks_containment_ruins_sealed_structures",
    title: "Seal Memory: Containment Ruins",
    hiddenTitle: "Unrestored Seal Memory",
    category: "Containment Memory",
    triggerType: "code_fragment",
    triggerId: "demontimessntwo:red_archive_seal_fragment|seal_block|fallen_heavens_ruins|broken_church|small_altar|sealed_structure",
    threat: "Memory Group // Seals and Ruins",
    effect: "seal",
    guideTitle: "Read the containment marks",
    guideHint: "Investigate seal blocks, sealed structures, broken churches, small altars, and ruin paths.",
    associatedRecords: ["Seal Blocks", "Containment", "Broken Church", "Small Altar", "Sealed Structures", "Fallen Ruins"],
    body: "A seal is not a wall. A wall says no. A seal says not yet. The ruins of Fallen Heaven are full of that difference: broken churches, burned houses, small altars, sealed structures, and paths arranged like a village trying to point at its own murderer. Containment does not mean victory. It means the thing inside still matters enough to be feared. §8Recovered warning:§r if a seal fades too quickly, it was never meant to hold. If it remains, ask what it is protecting you from."
  },
  {
    code: "ARMOR-3VNX",
    sourceId: "divine_armor_equipment_newest_heaven_gear",
    title: "Armor Memory: Divine Equipment",
    hiddenTitle: "Unrestored Armor Memory",
    category: "Armory Memory",
    triggerType: "code_fragment",
    triggerId: "demontimessntwo:red_archive_armor_fragment|angelic_protector|set_of_the_fallen_worlds|drowned_warrior|burned_warrior|stonecrest_warrior|warrior_of_silence|divine_armor|heaven_gear",
    threat: "Memory Group // Divine Armory",
    effect: "armor",
    guideTitle: "Wear the story",
    guideHint: "Craft, wear, or complete the newest Heaven gear and warrior sets. Some armor only speaks as a full set.",
    associatedRecords: ["Divine Armor", "Angelic Protector", "Set of the Fallen Worlds", "Drowned Warrior", "Burned Warrior", "Stonecrest Warrior", "Warrior of Silence"],
    body: "Divine armor is not just protection. It is a story the body is forced to wear. Angelic gear teaches survival to look beautiful. Protector armor turns duty into wings. The Set of the Fallen Worlds carries drowned pressure, burned endurance, stone patience, and silence sharp enough to cut sound from the air. New Heaven gear does not ask whether the player is worthy. It asks whether the player can keep moving while every plate remembers a different apocalypse."
  },
  {
    code: "RELIC-T7C2",
    sourceId: "ritual_tools_goblet_athame_relic_memory",
    title: "Relic Memory: Cup, Knife, and Remnant",
    hiddenTitle: "Unrestored Relic Memory",
    category: "Relic Memory",
    triggerType: "code_fragment",
    triggerId: "demontimessntwo:red_archive_relic_fragment|goblet|athame|titan_remnant|blackhole_core|grace_locket|ritual_tool",
    threat: "Memory Group // Ritual Relics",
    effect: "relic",
    guideTitle: "Carry the tools that remember",
    guideHint: "Look for goblets, athames, remnants, gravity cores, grace objects, and ritual relic fragments.",
    associatedRecords: ["Goblet", "Athame", "Titan Remnant", "Blackhole Core", "Grace Locket", "Ritual Relics"],
    body: "Relics are objects that survived long enough to become arguments. The Goblet receives what the player is willing to offer. The Athame divides what can be spared from what must be taken. Titan remnants remember size, blood, and stubbornness. Gravity relics remember collapse. Grace relics remember the strange mercy of not dying yet. None of them are neutral. Every relic is a tool, a witness, and a small locked mouth waiting for the correct rite to make it speak."
  }
];

const FALSE_CODE_RESPONSES = {
  HEAVEN: "Heaven is not a valid answer.",
  GOD: "Authority rejected. Witness level insufficient.",
  THRONE: "The throne refuses a name without a wound.",
  SEAL: "A seal is not opened by calling it a seal.",
  CHOIR: "A song without resonance is only noise.",
  SERAPH: "Too broad. Heaven likes titles, not truth.",
  ALTAR: "The altar heard you. It did not agree.",
  VOID: "The void answers, but not from this gate.",
  REDARCHIVE: "You are standing at the door. Find the knock.",
  ARCHIVE: "The archive is not the key. The key is what survived.",
  DEMONTIME: "Season Two is watching.",
  BLOOD: "Blood is an offering, not a password.",
  ANGEL: "The prettiest name is still incomplete.",
  FRITZ: "The archive looks away, politely.",
  SAM: "External witness detected. She cannot restore what you have not recovered."
};

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
  associatedList: $("#associated-list"),
  copy: $("#copy-record"),
  reset: $("#reset-archive"),
  grid: $("#archive-grid"),
  unlockedCount: $("#unlocked-count"),
  totalCount: $("#total-count"),
  guide: $("#progression-guide"),
  guideCount: $("#guide-count"),
  integrityValue: $("#integrity-value"),
  integrityFill: $("#integrity-fill"),
  archiveVoice: $("#archive-voice"),
  tabButtons: $$(".tab-button"),
  tabPanels: $$(".tab-panel")
};

const VALID_RECORD_CODES = new Set(RED_ARCHIVE_RECORDS.map((record) => record.code));
let unlocked = new Set(loadUnlockedCodes().filter((code) => VALID_RECORD_CODES.has(code)));
let activeRecord = null;
let obfuscationTimer = null;

boot();

function boot() {
  els.totalCount.textContent = RED_ARCHIVE_RECORDS.length;
  renderAll();
  bindEvents();
  initializeTabs();
  startAmbientAnimations();

  if (animate) {
    animate(".eyebrow", { opacity: [0, 1], translateY: [-8, 0], duration: 900, delay: 150, ease: "outQuad" });
    animate(".title", { opacity: [0, 1], scale: [0.94, 1], duration: 1200, delay: 300, ease: "outExpo" });
    animate(".subtitle", { opacity: [0, 1], translateY: [14, 0], duration: 900, delay: 620, ease: "outQuad" });
    animate(".terminal-card", { opacity: [0, 1], translateY: [32, 0], duration: 900, delay: 820, ease: "outExpo" });
    animate(".progression-card", { opacity: [0, 1], translateY: [18, 0], delay: stagger(50), duration: 520, ease: "outQuad" });
  }
}

function bindEvents() {
  els.submit.addEventListener("click", handleSubmit);
  els.input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") handleSubmit();
  });

  els.tabButtons.forEach((button) => {
    button.addEventListener("click", () => switchTab(button.dataset.tabTarget, true));
  });

  els.reset.addEventListener("click", () => {
    unlocked = new Set();
    localStorage.removeItem(STORAGE_KEY);
    activeRecord = null;
    els.result.classList.add("hidden");
    clearEffectClass();
    setStatus("RECORDS PURGED");
    renderAll();
    pulseElement(els.reset);
  });

  els.copy.addEventListener("click", async () => {
    if (!activeRecord) return;
    const associated = activeRecord.associatedRecords?.length
      ? `\n\nAssociated records:\n- ${activeRecord.associatedRecords.join("\n- ")}`
      : "";
    const text = `${stripMinecraftFormatting(activeRecord.title)}\n${activeRecord.code}\n${stripMinecraftFormatting(activeRecord.category)}\n\n${stripMinecraftFormatting(activeRecord.body)}${associated}`;
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

function initializeTabs() {
  const requestedPanel = window.location.hash === "#progression-guide" || window.location.hash === "#guide"
    ? "guide-panel"
    : "archive-panel";
  switchTab(requestedPanel, false);
}

function switchTab(panelId, updateHash = false) {
  if (!panelId) return;

  els.tabPanels.forEach((panel) => {
    const isActive = panel.id === panelId;
    panel.classList.toggle("active", isActive);
    panel.hidden = !isActive;
  });

  els.tabButtons.forEach((button) => {
    const isActive = button.dataset.tabTarget === panelId;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-selected", String(isActive));
  });

  if (updateHash) {
    const hash = panelId === "guide-panel" ? "#progression-guide" : "#archive";
    history.replaceState(null, "", hash);
  }

  if (animate) {
    const activePanel = document.getElementById(panelId);
    if (activePanel) {
      animate(activePanel, { opacity: [0, 1], translateY: [10, 0], duration: 360, ease: "outQuad" });
      if (panelId === "guide-panel") {
        animate("#guide-panel .progression-card", { opacity: [0, 1], translateY: [12, 0], delay: stagger(35), duration: 420, ease: "outQuad" });
      }
    }
  }
}

function handleSubmit() {
  const normalized = normalizeCode(els.input.value);
  const record = RED_ARCHIVE_RECORDS.find((item) => normalizeCode(item.code) === normalized);

  if (!normalized) {
    setStatus("AWAITING CODE");
    shake(els.input);
    return;
  }

  if (record && unlocked.has(record.code)) {
    setStatus("MEMORY RESTORED");
    showAlreadyRestored(record);
    return;
  }

  if (record) {
    unlocked.add(record.code);
    saveUnlockedCodes([...unlocked]);
    revealRecord(record);
    renderAll();
    return;
  }

  const falseResponse = FALSE_CODE_RESPONSES[normalized];
  if (falseResponse) {
    setStatus("FALSE SEQUENCE");
    showFalseCode(falseResponse, normalized);
    return;
  }

  setStatus("ACCESS DENIED");
  showDenied();
}

function revealRecord(record) {
  activeRecord = record;
  setStatus("DECRYPTING");
  els.result.classList.remove("hidden");
  applyEffectClass(record.effect);
  setFormattedContent(els.recordTitle, record.title);
  setFormattedContent(els.recordMeta, `${record.code} // ${record.category}`);
  setFormattedContent(els.recordWarning, record.threat);
  renderAssociatedRecords(record);
  els.recordBody.innerHTML = "";

  if (animate) {
    animate(els.result, { opacity: [0, 1], translateY: [24, 0], scale: [0.98, 1], duration: 620, ease: "outExpo" });
    animate(".record-label, #record-title, #record-meta, .associated-section, .record-footer", {
      opacity: [0, 1],
      translateX: [-12, 0],
      delay: stagger(70),
      duration: 520,
      ease: "outQuad"
    });
  }

  runRecordEffect(record.effect);
  typeFormattedText(els.recordBody, record.body, 15, () => {
    setStatus("RECORD UNLOCKED");
    updateArchiveVoice();
  });
}

function showDenied() {
  els.result.classList.remove("hidden");
  applyEffectClass("denied");
  els.recordTitle.textContent = "Sequence Rejected";
  els.recordMeta.textContent = "UNKNOWN-CODE // ACCESS REFUSED";
  els.recordWarning.textContent = "No memory answers to that sequence.";
  els.recordBody.textContent = getArchiveRejectionMessage();
  renderAssociatedRecords(null);
  activeRecord = null;
  shake(els.result);
  updateArchiveVoice();
}

function showFalseCode(message, normalizedCode) {
  els.result.classList.remove("hidden");
  applyEffectClass("false");
  els.recordTitle.textContent = "False Sequence Detected";
  els.recordMeta.textContent = `${normalizedCode} // NOT A RESTORATION CODE`;
  els.recordWarning.textContent = "The archive recognizes the shape of the mistake.";
  els.recordBody.textContent = message;
  renderAssociatedRecords(null);
  activeRecord = null;
  shake(els.result);
  updateArchiveVoice(message);
}

function showAlreadyRestored(record) {
  activeRecord = record;
  els.result.classList.remove("hidden");
  applyEffectClass(record.effect);
  els.recordTitle.textContent = "Memory Already Restored";
  els.recordMeta.textContent = `${record.code} // ${record.category}`;
  els.recordWarning.textContent = record.threat;
  els.recordBody.textContent = "This memory has already been restored.";
  renderAssociatedRecords(record);
  pulseElement(els.result);
  updateArchiveVoice("This memory has already been restored.");
}

function renderAssociatedRecords(record) {
  if (!els.associatedList) return;

  if (!record || !record.associatedRecords?.length) {
    els.associatedList.innerHTML = `<li class="empty-associated">No associated records recovered.</li>`;
    return;
  }

  els.associatedList.innerHTML = record.associatedRecords
    .map((item) => `<li>${escapeHtml(item)}</li>`)
    .join("");
}

function renderAll() {
  renderGrid();
  renderProgressionGuide();
  updateArchiveVoice();
}

function renderGrid() {
  els.unlockedCount.textContent = unlocked.size;
  els.grid.innerHTML = RED_ARCHIVE_RECORDS.map((record) => {
    const isUnlocked = unlocked.has(record.code);
    return `
      <article class="archive-card ${isUnlocked ? "" : "locked"} effect-mini-${escapeAttr(record.effect)}">
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

function renderProgressionGuide() {
  if (!els.guide) return;

  const total = RED_ARCHIVE_RECORDS.length;
  const count = unlocked.size;
  const percent = total ? Math.round((count / total) * 100) : 0;

  els.guideCount.textContent = `${count}/${total}`;
  els.integrityValue.textContent = `${percent}%`;
  els.integrityFill.style.width = `${percent}%`;

  els.guide.innerHTML = RED_ARCHIVE_RECORDS.map((record, index) => {
    const isUnlocked = unlocked.has(record.code);
    return `
      <article class="progression-card ${isUnlocked ? "restored" : "sealed"}">
        <div class="progression-index">${String(index + 1).padStart(2, "0")}</div>
        <div>
          <h3>${escapeHtml(record.guideTitle || record.title)}</h3>
          <p>${escapeHtml(record.guideHint || "Recover this memory inside DemonTime: Season Two.")}</p>
          <span class="progression-state">${isUnlocked ? "RESTORED" : "SEALED"}</span>
        </div>
      </article>
    `;
  }).join("");
}

function updateArchiveVoice(forcedMessage = "") {
  if (!els.archiveVoice) return;
  els.archiveVoice.textContent = forcedMessage || getArchiveVoiceMessage();
  pulseElement(els.archiveVoice);
}

function getArchiveVoiceMessage() {
  const count = unlocked.size;
  const total = RED_ARCHIVE_RECORDS.length;

  if (count === 0) return "The archive is silent. It wants proof before it gives language.";
  if (count < Math.ceil(total * 0.33)) return "The archive has begun to remember you.";
  if (count < Math.ceil(total * 0.66)) return "The archive is listening more closely now. It does not like how much you know.";
  if (count < total) return "Stop restoring what Heaven buried.";
  return "All current memories are restored. The archive is no longer asleep.";
}

function getArchiveRejectionMessage() {
  const count = unlocked.size;
  const total = RED_ARCHIVE_RECORDS.length;
  const base = "The archive rejects this sequence.";

  if (count === 0) return base;
  if (count < Math.ceil(total * 0.33)) return `${base} It has not learned to trust guesses.`;
  if (count < Math.ceil(total * 0.66)) return `${base} You are guessing. It dislikes that.`;
  if (count < total) return `${base} Stop restoring what Heaven buried.`;
  return `${base} The final door is not a code. It is a consequence.`;
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

function applyEffectClass(effect = "") {
  clearEffectClass();
  if (effect) els.result.classList.add(`effect-${effect}`);
}

function clearEffectClass() {
  if (!els.result) return;
  els.result.className = els.result.className
    .split(/\s+/)
    .filter((className) => !className.startsWith("effect-"))
    .join(" ");
}

function runRecordEffect(effect) {
  if (!animate) return;

  const pulseMap = {
    sky: { boxShadow: ["0 0 0 rgba(115,255,241,0)", "0 0 60px rgba(115,255,241,0.34)", "0 0 45px rgba(213,20,39,0.27)"] },
    altar: { scale: [1, 1.012, 1], boxShadow: ["0 0 45px rgba(213,20,39,0.27)", "0 0 72px rgba(255,51,72,0.45)", "0 0 45px rgba(213,20,39,0.27)"] },
    choir: { translateX: [0, -2, 3, -1, 0] },
    seraph: { opacity: [0.85, 1, 0.92, 1] },
    throne: { scale: [0.99, 1.02, 1] },
    seal: { translateX: [0, -5, 5, -3, 3, 0] },
    armor: { boxShadow: ["0 0 45px rgba(213,20,39,0.27)", "0 0 72px rgba(240,183,93,0.38)", "0 0 45px rgba(213,20,39,0.27)"] },
    relic: { rotate: [0, 0.35, -0.25, 0] }
  };

  animate(els.result, {
    ...(pulseMap[effect] || pulseMap.altar),
    duration: 760,
    ease: "outQuad"
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
    .toUpperCase()
    .replace(/[^A-Z0-9]/g, "");
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
