<template>
  <div class="container">
    <section class="analysis-header">
      <h1>Pattern Analysis</h1>
      <p class="lead">
        How often each design pattern appears across
        <strong>{{ totalPortals }} video learning environments</strong>, grouped
        by category.
      </p>
    </section>

    <div v-if="loading" class="loading">Loading data…</div>

    <template v-else>
      <div class="summary-grid">
        <div class="summary-card">
          <span class="summary-num">{{ totalPortals }}</span>
          <span class="summary-label">Learning Environments</span>
        </div>
        <div class="summary-card">
          <span class="summary-num">{{ totalPatterns }}</span>
          <span class="summary-label">Design Patterns</span>
        </div>
        <div class="summary-card">
          <span class="summary-num">{{ totalImplementations }}</span>
          <span class="summary-label">Pattern Implementations</span>
        </div>
        <div class="summary-card">
          <span class="summary-num">{{ avgPatternsPerPortal }}</span>
          <span class="summary-label">Patterns per Environment (avg)</span>
        </div>
      </div>

      <section v-for="group in groups" :key="group.name" class="group-section">
        <h2 class="group-title">
          {{ group.name }}
          <span class="group-count">{{ group.patterns.length }} patterns</span>
        </h2>
        <div class="bar-chart">
          <div v-for="p in group.patterns" :key="p.name" class="bar-row">
            <router-link
              :to="'/patterns/' + slugify(p.name)"
              class="bar-label"
              >{{ p.name }}</router-link
            >
            <div class="bar-track">
              <div
                class="bar-fill"
                :style="{ width: (p.count / totalPortals) * 100 + '%' }"
                :title="p.count + ' of ' + totalPortals + ' environments'"
              ></div>
            </div>
            <span class="bar-count">
              {{ p.count }}
              <span class="bar-pct"
                >({{ Math.round((p.count / totalPortals) * 100) }}%)</span
              >
            </span>
          </div>
        </div>
      </section>

      <section class="network-section">
        <h2>Pattern Co-occurrence Network</h2>
        <p class="section-desc">
          Nodes are design patterns (sized by frequency, colored by category).
          Edges connect patterns that appear together in the same learning
          environment — the thicker the line, the more co-occurrences. Drag
          nodes, scroll to zoom.
        </p>
        <PatternNetwork
          :portals="portals"
          :pattern-group="PATTERN_GROUP"
          :group-color="GROUP_COLOR"
          :pattern-counts="patternCounts"
        />
      </section>

      <section class="cooccurrence-section">
        <h2>Most Frequent Pattern Combinations</h2>
        <p class="section-desc">
          Pattern pairs that most often appear together in the same learning
          environment.
        </p>
        <table class="cooc-table">
          <thead>
            <tr>
              <th>Pattern A</th>
              <th>Pattern B</th>
              <th>Co-occurrences</th>
              <th>% of Environments</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="pair in topCoOccurrences" :key="pair.key">
              <td>
                <router-link :to="'/patterns/' + slugify(pair.a)">{{
                  pair.a
                }}</router-link>
              </td>
              <td>
                <router-link :to="'/patterns/' + slugify(pair.b)">{{
                  pair.b
                }}</router-link>
              </td>
              <td class="cooc-count">{{ pair.count }}</td>
              <td class="cooc-pct">
                {{ Math.round((pair.count / totalPortals) * 100) }}%
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </template>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { slugify } from "../composables/utils.js";
import PatternNetwork from "../components/PatternNetwork.vue";

// Pattern → category mapping (derived from original analysisStructs.js)
const PATTERN_GROUP = {
  "Basic Controls": "Basic Functions",
  "Appropriate Delivery": "Basic Functions",
  "Loading Indicator": "Basic Functions",
  "Shortcut Commands": "Basic Functions",
  Search: "Temporal Access",
  "Table of Content": "Temporal Access",
  "Temporal Tags": "Temporal Access",
  "Temporal Bookmarks": "Temporal Access",
  "Playback Speed": "Temporal Access",
  "Playback Direction": "Temporal Access",
  Zoom: "Temporal Access",
  "Visual Summary": "Temporal Access",
  "Annotated Timeline": "Temporal Access",
  Transcript: "Temporal Access",
  "Closed Captions": "Temporal Access",
  "Skip Back": "Temporal Access",
  "Journaled Navigation": "Temporal Access",
  Loop: "Temporal Access",
  "Add Video": "Contribution",
  Annotations: "Contribution",
  Comments: "Contribution",
  "Inline Drawing": "Contribution",
  Polls: "Contribution",
  "Direct Authoring": "Contribution",
  Remix: "Contribution",
  "Video Manipulation": "Contribution",
  "Multi-Timeline Editing": "Contribution",
  "Video Manager": "Structuring",
  "Sequential Media": "Structuring",
  "Related Videos": "Structuring",
  Hyperlinks: "Structuring",
  "Branching Videos": "Structuring",
  "Detail on Demand": "Structuring",
  "Media Fragments": "Structuring",
  "Classified Marks": "Structuring",
  "User Ratings": "Structuring",
  Break: "Structuring",
  "Viewing History": "Self-organization",
  Playlist: "Self-organization",
  "Follow Revisions": "Self-organization",
  "User Notes": "Self-organization",
  Assessment: "Self-organization",
  "User Traces": "Self-organization",
  "Full Screen": "Layout",
  "Simultaneous Media": "Layout",
  "Synchronized Map": "Layout",
  Overlays: "Layout",
  "Visual Highlighting": "Layout",
  "Object Tracking": "Layout",
  "Multi-Angle Video": "Layout",
};

const GROUP_ORDER = [
  "Basic Functions",
  "Temporal Access",
  "Contribution",
  "Structuring",
  "Self-organization",
  "Layout",
];

const GROUP_COLOR = {
  "Basic Functions": "#1e3a8a",
  "Temporal Access": "#0369a1",
  Contribution: "#047857",
  Structuring: "#92400e",
  "Self-organization": "#7c3aed",
  Layout: "#be123c",
};

const portals = ref([]);
const loading = ref(true);

onMounted(async () => {
  const res = await fetch(`${import.meta.env.BASE_URL}data/portals.json`);
  portals.value = await res.json();
  loading.value = false;
});

const totalPortals = computed(() => portals.value.length);

const patternCounts = computed(() => {
  const counts = {};
  portals.value.forEach((portal) => {
    (portal.patterns || []).forEach((p) => {
      if (p) counts[p] = (counts[p] || 0) + 1;
    });
  });
  return counts;
});

const totalPatterns = computed(() => Object.keys(patternCounts.value).length);

const totalImplementations = computed(() =>
  Object.values(patternCounts.value).reduce((s, n) => s + n, 0),
);

const avgPatternsPerPortal = computed(() => {
  if (!totalPortals.value) return 0;
  return (totalImplementations.value / totalPortals.value).toFixed(1);
});

const groups = computed(() =>
  GROUP_ORDER.map((groupName) => ({
    name: groupName,
    color: GROUP_COLOR[groupName],
    patterns: Object.entries(PATTERN_GROUP)
      .filter(([, g]) => g === groupName)
      .map(([name]) => ({ name, count: patternCounts.value[name] || 0 }))
      .sort((a, b) => b.count - a.count),
  })),
);

// Pattern co-occurrence: count portals that implement both pattern A and B
const topCoOccurrences = computed(() => {
  const pairs = {};
  portals.value.forEach((portal) => {
    const ps = (portal.patterns || []).filter(Boolean);
    for (let i = 0; i < ps.length; i++) {
      for (let j = i + 1; j < ps.length; j++) {
        const key =
          ps[i] < ps[j] ? `${ps[i]}|||${ps[j]}` : `${ps[j]}|||${ps[i]}`;
        pairs[key] = (pairs[key] || 0) + 1;
      }
    }
  });
  return Object.entries(pairs)
    .map(([key, count]) => {
      const [a, b] = key.split("|||");
      return { key, a, b, count };
    })
    .sort((a, b) => b.count - a.count)
    .slice(0, 15);
});
</script>

<style scoped>
.analysis-header {
  margin-bottom: 2rem;
}

.analysis-header h1 {
  color: #1e3a8a;
}

.analysis-header .lead {
  font-size: 1.15rem;
  color: #555;
}

/* Summary cards */
.summary-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 1rem;
  margin-bottom: 3rem;
}

.summary-card {
  background: white;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  padding: 1.25rem 1rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.summary-num {
  font-size: 2rem;
  font-weight: 700;
  color: #1e3a8a;
  line-height: 1;
}

.summary-label {
  font-size: 0.8rem;
  color: #666;
  text-transform: uppercase;
  letter-spacing: 0.04em;
}

/* Pattern groups */
.group-section {
  margin-bottom: 2.5rem;
}

.group-title {
  color: #1e3a8a;
  font-size: 1.2rem;
  margin-bottom: 0.75rem;
  border-bottom: 2px solid #e5e7eb;
  padding-bottom: 0.4rem;
  display: flex;
  align-items: baseline;
  gap: 0.75rem;
}

.group-count {
  font-size: 0.8rem;
  font-weight: normal;
  color: #888;
}

/* Bar chart */
.bar-chart {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.bar-row {
  display: grid;
  grid-template-columns: 220px 1fr 90px;
  align-items: center;
  gap: 0.75rem;
}

.bar-label {
  font-size: 0.9rem;
  color: #1e3a8a;
  text-decoration: none;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.bar-label:hover {
  text-decoration: underline;
}

.bar-track {
  background: #f1f5f9;
  border-radius: 4px;
  height: 20px;
  overflow: hidden;
}

.bar-fill {
  height: 100%;
  background: #1e3a8a;
  border-radius: 4px;
  transition: width 0.4s ease;
  min-width: 2px;
}

.bar-count {
  font-size: 0.85rem;
  color: #444;
  text-align: right;
  white-space: nowrap;
}

.bar-pct {
  color: #999;
  font-size: 0.78rem;
}

/* Network */
.network-section {
  margin-bottom: 3rem;
}

.network-section h2 {
  color: #1e3a8a;
  margin-bottom: 0.5rem;
}

/* Co-occurrence table */
.cooccurrence-section {
  margin-top: 3rem;
  margin-bottom: 3rem;
}

.cooccurrence-section h2 {
  color: #1e3a8a;
  margin-bottom: 0.5rem;
}

.section-desc {
  color: #666;
  margin-bottom: 1rem;
  font-size: 0.95rem;
}

.cooc-table {
  width: 100%;
  border-collapse: collapse;
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.cooc-table th {
  background: #1e3a8a;
  color: white;
  padding: 0.75rem 1rem;
  text-align: left;
  font-size: 0.85rem;
  font-weight: 600;
}

.cooc-table td {
  padding: 0.6rem 1rem;
  border-bottom: 1px solid #f1f5f9;
  font-size: 0.9rem;
}

.cooc-table tr:last-child td {
  border-bottom: none;
}

.cooc-table tr:nth-child(even) td {
  background: #f8fafc;
}

.cooc-table a {
  color: #1e3a8a;
  text-decoration: none;
}

.cooc-table a:hover {
  text-decoration: underline;
}

.cooc-count {
  font-weight: 600;
}

.cooc-pct {
  color: #666;
}

@media (max-width: 640px) {
  .bar-row {
    grid-template-columns: 140px 1fr 70px;
    gap: 0.4rem;
  }

  .bar-label {
    font-size: 0.8rem;
  }
}
</style>
