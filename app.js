/*
  The Red Archive — DemonTime lore code prototype
  Edit RED_ARCHIVE_RECORDS to add, remove, or change lore codes.
*/

const RED_ARCHIVE_RECORDS = [
  {
    code: "SERAPH-ASH-001",
    title: "The First Choir",
    category: "Seraphim / Burned Registry",
    threat: "Apostate Hymn",
    body: "The first choir did not sing to praise Heaven. It screamed to keep something sealed below it. Every note became ash. Every ash became a name. Every name was filed here, where angels are forbidden to look."
  },
  {
    code: "CHOIR-WAIL-777",
    title: "Choir Wail Incident",
    category: "Weapon Record / Choir Bow",
    threat: "Resonance Unstable",
    body: "The Choir Wail is not an attack. It is a memory of the moment Heaven realized sound could bleed. Full resonance opens the wound. Partial resonance only teaches the bow to hunger."
  },
  {
    code: "EIDOLON-RED-13",
    title: "The Red Eidolon",
    category: "Entity Fragment / Unconfirmed",
    threat: "Do Not Summon",
    body: "Witnesses described a figure in red standing behind the altar flame. It did not speak. It raised one hand, and every contract in the room signed itself in a language older than mercy."
  },
  {
    code: "SEAL-BROKEN-404",
    title: "Missing Seal Report",
    category: "Seal Index / Failure State",
    threat: "Containment Error",
    body: "A seal that vanishes was never a seal. It was a warning pretending to be geometry. Player-made seals endure because they are anchored by choice. Structure-born seals fade because the world rejects old lies."
  },
  {
    code: "ALTAR-BENEATH-9",
    title: "The Chest Beneath",
    category: "Ritual Note / Heavenly Altar",
    threat: "Inventory Communion",
    body: "The altar does not want offerings placed upon it. It wants offerings hidden beneath it, where roots, bones, and commands can agree on what must be taken."
  },
  {
    code: "GOBLET-GOLD-022",
    title: "Goblet of the Choir",
    category: "Ritual Tool / Vessel",
    threat: "Vocal Residue",
    body: "Gold remembers the shape of worship. The goblet catches what spills from a hymn before it becomes language. Drink only if you are willing to be remembered back."
  },
  {
    code: "ATHAME-OBSIDIAN-006",
    title: "Obsidian Athame",
    category: "Ritual Tool / Blade",
    threat: "Edge Without Shadow",
    body: "Obsidian cuts the light first. Flesh is an afterthought. The athame is used to separate a ritual from the world long enough for impossible rules to apply."
  },
  {
    code: "CONTRACT-DREAM-666",
    title: "Per-Player Contract Clause",
    category: "Contract System / Dream Debt",
    threat: "World-Bound",
    body: "A contract is not saved in the player. It is saved in the world remembering the player. Leave the world, and the debt sleeps. Return, and the ink wakes up hungry."
  },
  {
    code: "HEAVEN-ERR-500",
    title: "Heaven Error Log",
    category: "Administrative Relic / Redacted",
    threat: "Divine Exception",
    body: "ERROR 500: Mercy failed to compile. Judgment loop exceeded permitted recursion depth. Reassigning blame to mortal category. Please contact no one."
  },
  {
    code: "RED-ARCHIVE-000",
    title: "The Archive Opens",
    category: "Root Record / Access Granted",
    threat: "Welcome, Archivist",
    body: "You were not invited here. That is why the door opened. The Red Archive prefers thieves, mourners, oathbreakers, and anyone who still knows how to ask dangerous questions."
  }
];

const STORAGE_KEY = "demontime.redArchive.unlocked";
const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => Array.from(document.querySelectorAll(selector));
const animeApi = window.anime || null;
const animate = animeApi?.animate || null;
const stagger = animeApi?.stagger || ((n) => (_, i) => i * n);

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

let unlocked = new Set(loadUnlockedCodes());
let activeRecord = null;

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
    setStatus("ARCHIVE PURGED");
    renderGrid();
    pulseElement(els.reset);
  });

  els.copy.addEventListener("click", async () => {
    if (!activeRecord) return;
    const text = `${activeRecord.title}\n${activeRecord.code}\n${activeRecord.category}\n\n${activeRecord.body}`;
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
  const record = RED_ARCHIVE_RECORDS.find((item) => normalizeCode(item.code) === normalized);

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
  els.recordTitle.textContent = record.title;
  els.recordMeta.textContent = `${record.code} // ${record.category}`;
  els.recordWarning.textContent = record.threat;
  els.recordBody.textContent = "";

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

  typeText(els.recordBody, record.body, 15, () => setStatus("RECORD UNLOCKED"));
}

function showDenied() {
  els.result.classList.remove("hidden");
  els.recordTitle.textContent = "Record Not Found";
  els.recordMeta.textContent = "UNKNOWN-CODE // ACCESS REFUSED";
  els.recordWarning.textContent = "The archive does not know this name.";
  els.recordBody.textContent = "No matching record exists. Check the recovered code, remove extra symbols, or seek another archive fragment in-game.";
  activeRecord = null;
  shake(els.result);
}

function renderGrid() {
  els.unlockedCount.textContent = unlocked.size;
  els.grid.innerHTML = RED_ARCHIVE_RECORDS.map((record) => {
    const isUnlocked = unlocked.has(record.code);
    return `
      <article class="archive-card ${isUnlocked ? "" : "locked"}">
        <div class="code">${isUnlocked ? record.code : "LOCKED-RECORD"}</div>
        <h3>${isUnlocked ? record.title : "████████████"}</h3>
        <p>${isUnlocked ? preview(record.body) : "This file is sealed. Recover its code in-game to decrypt the entry."}</p>
        ${isUnlocked ? `<button class="ghost-button reopen" data-code="${record.code}">Open</button>` : ""}
      </article>
    `;
  }).join("");

  $$(".reopen").forEach((button) => {
    button.addEventListener("click", () => {
      const record = RED_ARCHIVE_RECORDS.find((item) => item.code === button.dataset.code);
      if (record) revealRecord(record);
    });
  });

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

function typeText(element, text, speed = 18, done = () => {}) {
  let index = 0;
  const timer = setInterval(() => {
    element.textContent += text.charAt(index);
    index += 1;
    if (index >= text.length) {
      clearInterval(timer);
      done();
    }
  }, speed);
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
