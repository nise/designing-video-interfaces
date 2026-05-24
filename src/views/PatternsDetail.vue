<template>
  <div
    class="container"
    v-if="pattern"
    @mouseover="onCiteHover"
    @mouseout="scheduleCiteHide"
  >
    <router-link to="/patterns" class="back-link"
      >← Back to Patterns</router-link
    >
    <h1>
      {{ pattern.name }}
      <span
        v-if="confLevel(pattern)"
        class="conf-badge"
        :title="confTitle(pattern)"
      >
        {{ confLevel(pattern) }}
      </span>
    </h1>

    <div v-if="ok(pattern.synopsis)" class="section">
      <p v-html="renderText(pattern.synopsis)"></p>
    </div>

    <div v-if="ok(pattern.context)" class="section">
      <h3>Context</h3>
      <p v-html="renderText(pattern.context)"></p>
    </div>

    <div v-if="ok(pattern.problem)" class="section">
      <h3>Problem</h3>
      <p v-html="renderText(pattern.problem)"></p>
    </div>

    <div v-if="ok(pattern.forces)" class="section">
      <h3>Forces</h3>
      <p v-html="renderText(pattern.forces)"></p>
    </div>

    <div v-if="ok(pattern.solution)" class="section">
      <h3>Solution</h3>
      <p v-html="renderText(pattern.solution)"></p>
    </div>

    <div v-if="ok(pattern.consequences)" class="section">
      <h3>Consequences</h3>
      <p v-html="renderText(pattern.consequences)"></p>
    </div>

    <div v-if="relatedPatterns.length" class="section">
      <h3>Related Patterns</h3>
      <ul>
        <li v-for="rp in relatedPatterns" :key="rp._id?.$oid || rp.label">
          <router-link
            v-if="rp.isInternal"
            :to="'/patterns/' + slugify(rp.label)"
            >{{ rp.label }}</router-link
          >
          <span v-else>{{ rp.label }}</span>
          <span v-if="ok(rp.type)" class="rp-type"> ({{ rp.type }})</span>
          <span v-if="rp.source" class="rp-source"
            >from <em>{{ rp.source }}</em></span
          >
          <span
            v-if="rp.description && rp.description !== 'undefined'"
            class="rp-desc"
            >, {{ rp.description }}</span
          >
        </li>
      </ul>
    </div>

    <div v-if="evidenceItems.length" class="section">
      <h3>Examples</h3>
      <div v-for="ev in evidenceItems" :key="ev.example" class="evidence-item">
        <p v-html="renderText(ev.rational)"></p>
        <img
          v-if="ev.example"
          :src="'/img/screenshots/' + ev.example"
          :alt="ev.example"
          class="evidence-img"
          @error="$event.target.style.display = 'none'"
        />
      </div>
    </div>

    <div v-if="usedInPortals.length" class="section">
      <h3>Used in {{ usedInPortals.length }} Environment(s)</h3>
      <ul>
        <li v-for="portal in usedInPortals" :key="portal._id">
          <router-link :to="'/portals/' + slugify(portal.name)">{{
            portal.name
          }}</router-link>
          <span v-if="portal.provider" class="provider-name">
            — {{ portal.provider }}</span
          >
        </li>
      </ul>
    </div>

    <router-link to="/patterns" class="back-link"
      >← Back to Patterns</router-link
    >
  </div>
  <div v-else class="container"><p>Loading...</p></div>

  <!-- Citation tooltip -->
  <div
    v-show="tooltipVisible"
    class="cite-tooltip"
    :style="tooltipStyle"
    @mouseenter="cancelCiteHide"
    @mouseleave="tooltipVisible = false"
  >
    <template v-if="tooltipData">
      <div class="cite-key">[{{ tooltipData.key }}]</div>
      <div v-if="tooltipData.author" class="cite-author">
        {{ tooltipData.author }}
      </div>
      <div v-if="tooltipData.title" class="cite-title">
        <em>{{ tooltipData.title }}</em>
      </div>
      <div class="cite-meta">
        <span v-if="tooltipData.year">{{ tooltipData.year }}</span>
        <span v-if="tooltipData.journal"> · {{ tooltipData.journal }}</span>
        <span v-else-if="tooltipData.booktitle">
          · {{ tooltipData.booktitle }}</span
        >
        <span v-else-if="tooltipData.publisher">
          · {{ tooltipData.publisher }}</span
        >
      </div>
      <a
        v-if="tooltipData.url"
        :href="tooltipData.url"
        target="_blank"
        rel="noopener"
        class="cite-url"
        >{{ tooltipData.url }}</a
      >
      <div
        v-if="!tooltipData.author && !tooltipData.title"
        class="cite-unknown"
      >
        No reference data for [{{ tooltipData.key }}]
      </div>
    </template>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from "vue";
import { useRoute } from "vue-router";
import { slugify, ok, confLevel, confTitle } from "../composables/utils.js";

const route = useRoute();
const pattern = ref(null);
const portals = ref([]);
const references = ref({});
const tooltipVisible = ref(false);
const tooltipData = ref(null);
const tooltipStyle = ref({});
let hideTimer = null;

function parseBib(text) {
  const result = {};
  const parts = text.split(/(?=@\w+\{)/);
  for (const part of parts) {
    const keyMatch = part.match(/@\w+\{([^,\s]+),/);
    if (!keyMatch) continue;
    const key = keyMatch[1].trim();
    const fields = {};
    const fieldRe = /(\w+)\s*=\s*\{([^{}]*)\}/g;
    let fm;
    while ((fm = fieldRe.exec(part)) !== null) {
      fields[fm[1].toLowerCase()] = fm[2].trim();
    }
    result[key] = fields;
  }
  return result;
}

function onCiteHover(e) {
  const span = e.target.closest?.(".cite-ref");
  if (!span) return;
  clearTimeout(hideTimer);
  const key = span.dataset.key;
  const entry = references.value[key] || {};
  tooltipData.value = { key, ...entry };
  const rect = span.getBoundingClientRect();
  tooltipStyle.value = {
    position: "fixed",
    left: Math.min(rect.left, window.innerWidth - 330) + "px",
    top: rect.bottom + 6 + "px",
  };
  tooltipVisible.value = true;
}

function scheduleCiteHide(e) {
  if (e.relatedTarget?.closest?.(".cite-tooltip")) return;
  hideTimer = setTimeout(() => {
    tooltipVisible.value = false;
  }, 150);
}

function cancelCiteHide() {
  clearTimeout(hideTimer);
}

const usedInPortals = computed(() => {
  if (!pattern.value?.name) return [];
  return portals.value.filter(
    (p) => p.patterns && p.patterns.includes(pattern.value.name),
  );
});

const COLLECTIONS = {
  schuemmer: "Till Schümmer & Stephan Lukosch (2007)",
  tidwell2005: "Jenifer Tidwell (2005)",
  welie: "Martijn van Welie",
  ypatterns: "Yahoo! yPatterns",
  quince: "Quince UX Pattern Collection",
  kunert: "Tibor Kunert (2009)",
  malone: "Erin Malone & Chris Crumlish (2009)",
  bernstein: "Bernstein",
};

const relatedPatterns = computed(() => {
  if (!pattern.value?.related_patterns) return [];
  return pattern.value.related_patterns
    .filter((rp) => rp.label && rp.label !== "undefined")
    .map((rp) => {
      const coll = rp.pattern_collection;
      const isInternal = !coll || coll === "this" || coll === "own";
      return {
        ...rp,
        isInternal,
        source: isInternal ? null : COLLECTIONS[coll] || coll,
      };
    });
});

const evidenceItems = computed(() => {
  if (!pattern.value?.evidence) return [];
  return pattern.value.evidence.filter(
    (ev) =>
      ev.rational && ev.rational !== "undefined" && ev.rational.trim() !== "",
  );
});

function renderText(text) {
  if (!text) return "";
  let s = text;
  // Citations: \protect[KEY] → cite span (must come before \protect is stripped)
  s = s.replace(
    /\\protect\[([A-Za-z][^\]]+)\]/g,
    (_, key) =>
      `<span class="cite-ref" tabindex="0" data-key="${key}">[${key}]</span>`,
  );
  // Citations: <a id="bibKEY">(KEY)</a> → cite span (already-HTML format in some fields)
  s = s.replace(
    /<a id="bib([^"]+)">[^<]*<\/a>/g,
    (_, key) =>
      `<span class="cite-ref" tabindex="0" data-key="${key}">[${key}]</span>`,
  );
  // Remaining LaTeX
  s = s.replace(/\\protect\s*/g, "");
  s = s.replace(/\\setcounter\{[^}]*\}\{[^}]*\}/g, "");
  s = s.replace(/\\value\{[^}]*\}/g, "");
  s = s.replace(/\\footnotemark/g, "");
  s = s.replace(/\\texttrademark/g, "\u2122");
  s = s.replace(/\\degree/g, "\u00b0");
  s = s.replace(
    /\\href\{([^}]*)\}\{([^}]*)\}/g,
    '<a href="$1" target="_blank" rel="noopener">$2</a>',
  );
  s = s.replace(/\\(?:textit|emph)\{([^}]*)\}/g, "<em>$1</em>");
  // Markdown links → HTML
  s = s.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_, label, url) => {
    const normalized = url.replace(
      /^\/patterns\/(?:view\/)?(.+)$/,
      (m, slug) => "/patterns/" + slug.toLowerCase(),
    );
    return `<a href="${normalized}">${label}</a>`;
  });
  return s;
}

async function loadPattern(id) {
  try {
    const [patRes, portalRes] = await Promise.all([
      fetch("/data/patterns.json"),
      fetch("/data/portals.json"),
    ]);
    const patterns = await patRes.json();
    pattern.value = patterns.find((p) => slugify(p.name) === id) || null;
    portals.value = await portalRes.json();
  } catch (error) {
    console.error("Error loading pattern:", error);
  }
}

watch(
  () => route.params.id,
  (id) => loadPattern(id),
);

onMounted(async () => {
  await loadPattern(route.params.id);
  try {
    const r = await fetch("/data/references.bib");
    references.value = parseBib(await r.text());
  } catch (e) {
    console.warn("Could not load references.bib", e);
  }
});
</script>

<style scoped>
.back-link {
  display: inline-block;
  margin-bottom: 1.5rem;
  color: #3b82f6;
  text-decoration: none;
  transition: color 0.3s;
}

.back-link:hover {
  color: #1e3a8a;
}

.conf-badge {
  display: inline-block;
  margin-left: 0.6rem;
  font-size: 0.65em;
  font-weight: 700;
  letter-spacing: 0.05em;
  color: #b45309;
  vertical-align: middle;
  cursor: help;
  font-family: monospace;
}

.rp-type {
  color: #6b7280;
  font-size: 0.875em;
}

.rp-source {
  margin-left: 0.4rem;
  font-size: 0.8em;
  color: #9ca3af;
}

.rp-desc {
  font-size: 0.8em;
  color: #9ca3af;
}

:deep(.cite-ref) {
  color: #2563eb;
  cursor: help;
  font-size: 0.85em;
  vertical-align: super;
  text-decoration: none;
  border-bottom: 1px dashed #93c5fd;
}

.cite-tooltip {
  background: #1e293b;
  color: #f1f5f9;
  border-radius: 6px;
  padding: 0.75rem 1rem;
  max-width: 320px;
  font-size: 0.825rem;
  line-height: 1.5;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);
  z-index: 1000;
  pointer-events: auto;
}

.cite-tooltip .cite-key {
  font-weight: 700;
  color: #fbbf24;
  margin-bottom: 0.25rem;
}

.cite-tooltip .cite-author {
  color: #cbd5e1;
  margin-bottom: 0.2rem;
}

.cite-tooltip .cite-title {
  color: #f1f5f9;
  margin-bottom: 0.2rem;
}

.cite-tooltip .cite-meta {
  color: #94a3b8;
  margin-bottom: 0.2rem;
}

.cite-tooltip .cite-url {
  color: #60a5fa;
  font-size: 0.75rem;
  word-break: break-all;
  display: block;
  margin-top: 0.25rem;
}

.cite-tooltip .cite-unknown {
  color: #f87171;
  font-style: italic;
}

.pattern-detail {
  background: white;
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.pattern-detail h1 {
  color: #1e3a8a;
  margin-bottom: 2rem;
  border-bottom: 2px solid #fbbf24;
  padding-bottom: 1rem;
}

.description-block {
  margin-bottom: 2rem;
  padding: 1.5rem;
  background: #f0f9ff;
  border-radius: 8px;
  border-left: 4px solid #fbbf24;
}

.description-block h2 {
  color: #1e3a8a;
  margin-bottom: 1rem;
}

.related-portals {
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 2px solid #e5e7eb;
}

.related-portals h2 {
  color: #1e3a8a;
  margin-bottom: 1.5rem;
}

.portal-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
}

.portal-link {
  text-decoration: none;
  color: inherit;
}

.portal-item {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  border: 2px solid #e5e7eb;
  transition: all 0.3s;
  cursor: pointer;
}

.portal-item:hover {
  border-color: #3b82f6;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transform: translateY(-2px);
}

.portal-item h3 {
  color: #1e3a8a;
  margin-bottom: 0.5rem;
}

.portal-item p {
  color: #6b7280;
  font-size: 0.95rem;
  margin-bottom: 0.75rem;
}

.provider {
  display: inline-block;
  background: rgba(59, 130, 246, 0.1);
  color: #3b82f6;
  padding: 0.25rem 0.75rem;
  border-radius: 4px;
  font-size: 0.85rem;
}

.no-results {
  text-align: center;
  padding: 2rem;
  background: #f9fafb;
  border-radius: 8px;
  color: #6b7280;
}

.loading {
  text-align: center;
  padding: 3rem;
  color: #6b7280;
}

.section {
  margin: 1.5rem 0;
}

.evidence-item {
  margin-bottom: 1.5rem;
  padding-left: 1rem;
  border-left: 3px solid #ccc;
}

.evidence-img {
  max-width: 100%;
  border-radius: 4px;
  margin-top: 0.5rem;
}

.provider-name {
  color: #888;
}
</style>
