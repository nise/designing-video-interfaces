<template>
  <div class="container">
    <h1>Design Patterns of video-based Learning Environments</h1>
    <p>Explore {{ patterns.length }} design patterns</p>

    <div class="filter-bar">
      <input
        v-model="searchQuery"
        type="text"
        placeholder="Search patterns..."
        class="search-input"
      />
      <select v-model="filterLevel">
        <option value="">All Levels</option>
        <option value="micro">Micro</option>
        <option value="macro">Macro</option>
      </select>
      <select v-model="filterFunc">
        <option value="">All Functions</option>
        <option value="basic">Basic Controls</option>
        <option value="player">Playback</option>
        <option value="annotation">Annotations</option>
        <option value="portal">Portal</option>
        <option value="authoring">Authoring</option>
        <option value="timeaccess">Time Access</option>
        <option value="structure">Structuring</option>
        <option value="contribution">Contribution</option>
        <option value="selforga">Self-Organisation</option>
        <option value="layout">Layout</option>
      </select>
      <select v-model="filterStatus">
        <option value="">All Status</option>
        <option value="workshoped-pattern">Workshopped</option>
        <option value="pattern">Pattern</option>
        <option value="proto-pattern">Proto-pattern</option>
      </select>
      <button
        v-if="filterLevel || filterFunc || filterStatus || searchQuery"
        @click="clearFilters"
        class="clear-btn"
      >
        Clear ×
      </button>
    </div>
    <div class="wizard-toggle">
      <a
        href="#"
        @click.prevent="showWizard = !showWizard"
        class="wizard-toggle-link"
      >
        <span class="wizard-caret">{{ showWizard ? "▼" : "►" }}</span> Selection
        Wizard
      </a>
      <span class="toggle-sep">|</span>
      <a
        href="#"
        @click.prevent="showFavOnly = !showFavOnly"
        :class="['wizard-toggle-link', { 'fav-active': showFavOnly }]"
      >
        <span>{{ showFavOnly ? "♥" : "♡" }}</span> My Favorites
        <span v-if="favorites.size" class="fav-count"
          >({{ favorites.size }})</span
        >
      </a>
    </div>

    <!-- Wizard panel -->
    <div v-if="showWizard" class="wizard-panel">
      <div class="wizard-header">
        <h3>Find the right patterns for your needs</h3>
        <p>
          Answer the questions below. Recommended patterns will appear as you
          select.
        </p>
        <button v-if="wizardAnyChecked" @click="resetWizard" class="clear-btn">
          Reset wizard
        </button>
      </div>
      <ul class="wizard-list">
        <li
          v-for="q in wizardQuestions"
          :key="q.key"
          :class="{ checked: wizardAnswers[q.key] }"
        >
          <label>
            <span class="toggle-wrap">
              <input type="checkbox" v-model="wizardAnswers[q.key]" />
              <span class="toggle-track">
                <span class="toggle-thumb"></span>
              </span>
              <span class="toggle-label">{{
                wizardAnswers[q.key] ? "Yes" : "No"
              }}</span>
            </span>
            <span class="question-text">{{ q.text }}</span>
          </label>
        </li>
      </ul>
      <div v-if="wizardAnyChecked" class="wizard-summary">
        {{ wizardRecommended.size }} pattern{{
          wizardRecommended.size !== 1 ? "s" : ""
        }}
        recommended
      </div>
    </div>

    <!-- Sectioned pattern display -->
    <template v-if="patterns.length">
      <p v-if="!sectionedPatterns.length" class="no-results">
        No patterns match your search.
      </p>
      <template v-for="section in sectionedPatterns" :key="section.level">
        <div class="section-level">
          <h2 class="section-level-heading">{{ section.label }}</h2>
          <p class="section-level-desc">{{ section.description }}</p>
        </div>
        <div
          v-for="func in section.functions"
          :key="func.tag"
          class="section-func-group"
        >
          <h3 class="section-func-heading">
            {{ func.label }}
            <span class="section-count">{{ func.patterns.length }}</span>
          </h3>
          <p v-if="func.description" class="section-func-desc">
            {{ func.description }}
          </p>
          <div class="patterns-grid">
            <PatternCard
              v-for="pattern in func.patterns"
              :key="pattern._id?.$oid || pattern.name"
              :pattern="pattern"
              :is-fav="favorites.has(pattern.name)"
              @toggle-fav="toggleFav"
            />
          </div>
        </div>
      </template>
    </template>
    <p v-else>Loading patterns...</p>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import PatternCard from "../components/PatternCard.vue";

const SECTIONS = [
  {
    level: "micro",
    label: "Micro Patterns",
    description:
      "Fine-grained interaction patterns targeting specific features within a video player or learning environment.",
    functions: [
      {
        tag: "basic",
        label: "Basic Controls",
        description:
          "Foundational features present in virtually all video environments.",
      },
      {
        tag: "player",
        label: "Playback",
        description:
          "Patterns for video navigation, speed control and playback management.",
      },
      {
        tag: "annotation",
        label: "Annotations",
        description:
          "Patterns for adding marks, overlays and time-synced notes to video.",
      },
      {
        tag: "timeaccess",
        label: "Time Access",
        description:
          "Patterns enabling temporal navigation and time-based content retrieval.",
      },
      {
        tag: "structure",
        label: "Structuring",
        description:
          "Patterns for organising the internal structure of video and learning content.",
      },
      {
        tag: "contribution",
        label: "Contribution",
        description:
          "Patterns enabling collaborative and user-generated content.",
      },
      {
        tag: "selforga",
        label: "Self-Organisation",
        description:
          "Patterns supporting personal learning management and bookmarking.",
      },
      {
        tag: "layout",
        label: "Layout",
        description:
          "Patterns for the visual arrangement of the video learning environment.",
      },
    ],
  },
  {
    level: "macro",
    label: "Macro Patterns",
    description:
      "Higher-level patterns describing overall system architecture and platform design.",
    functions: [
      {
        tag: "portal",
        label: "Portal Design",
        description:
          "Patterns for structuring video platforms and learning portals.",
      },
      {
        tag: "authoring",
        label: "Authoring",
        description:
          "Patterns for video creation, editing and curriculum authoring tools.",
      },
    ],
  },
];

const FAVS_KEY = "vp_favorites";

const patterns = ref([]);
const searchQuery = ref("");
const filterLevel = ref("");
const filterFunc = ref("");
const filterStatus = ref("");
const showWizard = ref(false);
const showFavOnly = ref(false);
const favorites = ref(
  new Set(JSON.parse(localStorage.getItem(FAVS_KEY) || "[]")),
);

function toggleFav(name) {
  const s = new Set(favorites.value);
  s.has(name) ? s.delete(name) : s.add(name);
  favorites.value = s;
  localStorage.setItem(FAVS_KEY, JSON.stringify([...s]));
}

const wizardQuestions = [
  {
    key: "f1",
    text: "Does the learning environment include multiple media types (e.g. videos, images, text/hypertext)?",
  },
  { key: "f2", text: "Are multiple videos integrated into the application?" },
  {
    key: "f3",
    text: "Do you display additional media synchronously alongside the video?",
  },
  {
    key: "f4",
    text: "Does your target audience include people with visual, auditory, or language impairments (e.g. low vision, hard of hearing, non-native speakers)?",
  },
  {
    key: "f5",
    text: "Do you want to create links within videos or between videos and other learning resources?",
  },
  { key: "f6", text: "Is at least one video longer than 10 minutes?" },
  {
    key: "f7",
    text: "Does at least one video have high visual dynamics or many visual details?",
  },
  {
    key: "f8",
    text: "Should learners be able to extend or contribute to the learning content?",
  },
  {
    key: "f9",
    text: "Should learners engage with the learning resources independently and self-directed?",
  },
  {
    key: "f10",
    text: "Do you intend to provide a back-channel for comments or annotations?",
  },
  {
    key: "f11",
    text: "Do learners interact with each other or collaborate on a shared task within the application?",
  },
  {
    key: "f12",
    text: "Do you expect your target audience to primarily use mobile devices with small screens?",
  },
];

const decisionModel = {
  f1: ["Sequential Media"],
  f2: [
    "Branching Videos",
    "Detail on Demand",
    "Hyperlinks",
    "Journaled Navigation",
    "Playlist",
    "Related Videos",
    "User Ratings",
    "Viewing History",
    "Visual Summary",
  ],
  f3: ["Full Screen", "Simultaneous Media", "Synchronized Map"],
  f4: ["Closed Captions", "Transcript"],
  f5: [
    "Annotated Timeline",
    "Branching Videos",
    "Detail on Demand",
    "Hyperlinks",
    "Journaled Navigation",
    "Temporal Tags",
  ],
  f6: ["Table of Content", "Temporal Tags", "Visual Summary"],
  f7: [
    "Loop",
    "Object Tracking",
    "Playback Speed",
    "Skip Back",
    "Visual Highlighting",
    "Zoom",
  ],
  f8: [
    "Add Video",
    "Annotations",
    "Comments",
    "Direct Authoring",
    "Follow Revisions",
    "Media Fragments",
    "Object Tracking",
    "Remix",
    "User Notes",
    "Video Manipulation",
  ],
  f9: [
    "Assessment",
    "Playlist",
    "Related Videos",
    "Search",
    "Table of Content",
    "Temporal Bookmarks",
    "User Notes",
    "User Traces",
    "Viewing History",
  ],
  f10: ["Annotations", "Assessment", "Comments", "User Ratings"],
  f11: ["Comments", "User Ratings", "User Traces"],
  f12: [
    "Annotated Timeline",
    "Classified Marks",
    "Multi-Timeline Editing",
    "Overlays",
    "Remix",
    "Simultaneous Media",
    "Synchronized Map",
    "User Traces",
    "Video Manipulation",
  ],
};

const wizardAnswers = ref(
  Object.fromEntries(wizardQuestions.map((q) => [q.key, false])),
);

const wizardAnyChecked = computed(() =>
  Object.values(wizardAnswers.value).some(Boolean),
);

const wizardRecommended = computed(() => {
  const names = new Set();
  for (const [key, checked] of Object.entries(wizardAnswers.value)) {
    if (checked) decisionModel[key].forEach((n) => names.add(n));
  }
  return names;
});

function resetWizard() {
  for (const key of Object.keys(wizardAnswers.value))
    wizardAnswers.value[key] = false;
}

function clearFilters() {
  searchQuery.value = "";
  filterLevel.value = "";
  filterFunc.value = "";
  filterStatus.value = "";
  showFavOnly.value = false;
  resetWizard();
}

const filteredPatterns = computed(() => {
  let result = patterns.value;
  if (showFavOnly.value)
    result = result.filter((p) => favorites.value.has(p.name));
  if (wizardAnyChecked.value)
    result = result.filter((p) => wizardRecommended.value.has(p.name));
  if (searchQuery.value) {
    const q = searchQuery.value.toLowerCase();
    result = result.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        (p.consequences && p.consequences.toLowerCase().includes(q)) ||
        (p.problem && p.problem.toLowerCase().includes(q)),
    );
  }
  if (filterLevel.value)
    result = result.filter((p) =>
      p.management?.tags?.includes(filterLevel.value),
    );
  if (filterFunc.value)
    result = result.filter((p) =>
      p.management?.tags?.includes(filterFunc.value),
    );
  if (filterStatus.value)
    result = result.filter((p) =>
      p.management?.tags?.includes(filterStatus.value),
    );
  return result;
});

const sectionedPatterns = computed(() => {
  const assignedIds = new Set();
  const result = SECTIONS.map((section) => ({
    ...section,
    functions: section.functions
      .map((func) => {
        const ps = filteredPatterns.value.filter((p) => {
          const id = p._id?.$oid || p.name;
          if (assignedIds.has(id)) return false;
          const tags = p.management?.tags || [];
          return tags.includes(section.level) && tags.includes(func.tag);
        });
        ps.forEach((p) => assignedIds.add(p._id?.$oid || p.name));
        return { ...func, patterns: ps };
      })
      .filter((f) => f.patterns.length > 0),
  })).filter((s) => s.functions.length > 0);

  const other = filteredPatterns.value.filter(
    (p) => !assignedIds.has(p._id?.$oid || p.name),
  );
  if (other.length) {
    result.push({
      level: "other",
      label: "Other Patterns",
      description: "Patterns not yet fully classified.",
      functions: [
        { tag: "other", label: "", description: "", patterns: other },
      ],
    });
  }
  return result;
});

onMounted(async () => {
  try {
    const response = await fetch("/data/patterns.json");
    patterns.value = await response.json();
  } catch (error) {
    console.error("Error loading patterns:", error);
  }
});
</script>

<style scoped>
.jumbotron {
  background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%);
  color: white;
  padding: 2rem;
  border-radius: 8px;
  margin-bottom: 2rem;
}

.jumbotron h2 {
  margin-bottom: 0.5rem;
}

.search-bar {
  margin-bottom: 2rem;
}

.search-bar input {
  width: 100%;
  max-width: 400px;
  padding: 0.75rem;
  border: 1px solid #e5e7eb;
  border-radius: 4px;
  font-size: 1rem;
}

.filter-bar {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-bottom: 2rem;
  align-items: center;
}

.filter-bar .search-input {
  flex: 1 1 220px;
  padding: 0.6rem 0.75rem;
  border: 1px solid #e5e7eb;
  border-radius: 4px;
  font-size: 0.95rem;
}

.filter-bar select {
  padding: 0.6rem 0.75rem;
  border: 1px solid #e5e7eb;
  border-radius: 4px;
  font-size: 0.95rem;
  background: white;
  cursor: pointer;
}

.filter-bar select:focus,
.filter-bar .search-input:focus {
  outline: 2px solid #3b82f6;
  border-color: #3b82f6;
}

.clear-btn {
  padding: 0.6rem 1rem;
  background: #f3f4f6;
  border: 1px solid #d1d5db;
  border-radius: 4px;
  font-size: 0.875rem;
  cursor: pointer;
  color: #374151;
}

.clear-btn:hover {
  background: #e5e7eb;
}

.wizard-toggle {
  margin-bottom: 0.75rem;
  margin-top: -0.5rem;
}

.wizard-toggle-link {
  font-size: 0.9rem;
  color: #3b82f6;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
}

.wizard-toggle-link:hover {
  text-decoration: underline;
}

.wizard-toggle-link.fav-active {
  color: #e11d48;
}

.toggle-sep {
  color: #d1d5db;
  margin: 0 0.5rem;
}

.fav-count {
  font-size: 0.8em;
  color: #6b7280;
}

.wizard-caret {
  font-size: 0.65rem;
  line-height: 1;
}

.wizard-panel {
  background: #f0f9ff;
  border: 1px solid #bae6fd;
  border-radius: 8px;
  padding: 1.5rem;
  margin-bottom: 2rem;
}

.wizard-header {
  margin-bottom: 1.25rem;
}

.wizard-header h3 {
  color: #1e3a8a;
  margin: 0 0 0.25rem;
  font-size: 1.1rem;
}

.wizard-header p {
  color: #64748b;
  font-size: 0.9rem;
  margin: 0 0 0.75rem;
}

.wizard-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.wizard-list li {
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 6px;
  padding: 0.75rem 1rem;
  transition: border-color 0.2s;
}

.wizard-list li.checked {
  border-color: #3b82f6;
  background: #eff6ff;
}

.wizard-list li label {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  cursor: pointer;
}

.toggle-wrap {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  flex-shrink: 0;
  margin-top: 1px;
}

.toggle-wrap input[type="checkbox"] {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
}

.toggle-track {
  display: inline-block;
  width: 36px;
  height: 20px;
  background: #d1d5db;
  border-radius: 10px;
  position: relative;
  transition: background 0.2s;
  flex-shrink: 0;
}

.toggle-wrap input:checked ~ .toggle-track {
  background: #3b82f6;
}

.toggle-thumb {
  position: absolute;
  top: 2px;
  left: 2px;
  width: 16px;
  height: 16px;
  background: white;
  border-radius: 50%;
  transition: transform 0.2s;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
}

.wizard-list li.checked .toggle-thumb {
  transform: translateX(16px);
}

.toggle-label {
  font-size: 0.75rem;
  font-weight: 600;
  color: #6b7280;
  min-width: 2rem;
}

.wizard-list li.checked .toggle-label {
  color: #2563eb;
}

.question-text {
  font-size: 0.9rem;
  color: #1e293b;
  line-height: 1.4;
}

.wizard-matches {
  margin-top: 0.5rem;
  padding-top: 0.5rem;
  border-top: 1px solid #bfdbfe;
  font-size: 0.8rem;
  color: #64748b;
}

.wizard-matches a {
  color: #2563eb;
  text-decoration: none;
}

.wizard-matches a:hover {
  text-decoration: underline;
}

.wizard-summary {
  margin-top: 1rem;
  padding-top: 0.75rem;
  border-top: 1px solid #bae6fd;
  font-size: 0.875rem;
  font-weight: 600;
  color: #1e3a8a;
}

.patterns-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  align-items: start;
}

.section-level {
  margin: 2.5rem 0 0.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 3px solid #1e3a8a;
}

.section-level:first-of-type {
  margin-top: 1.5rem;
}

.section-level-heading {
  font-size: 1.5rem;
  font-weight: 700;
  color: #1e3a8a;
  margin: 0 0 0.25rem;
}

.section-level-desc {
  color: #6b7280;
  font-size: 0.9rem;
  margin: 0;
}

.section-func-group {
  margin: 1.75rem 0 0;
}

.section-func-heading {
  font-size: 1.05rem;
  font-weight: 600;
  color: #374151;
  margin: 0 0 0.25rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.section-count {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: #e5e7eb;
  color: #6b7280;
  font-size: 0.75rem;
  font-weight: 600;
  border-radius: 10px;
  padding: 0.1rem 0.5rem;
  min-width: 1.4rem;
}

.section-func-desc {
  color: #9ca3af;
  font-size: 0.85rem;
  margin: 0 0 0.75rem;
}

@media (max-width: 900px) {
  .patterns-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .patterns-grid {
    grid-template-columns: 1fr;
  }
}

.pattern-card {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  transition: all 0.3s;
}

.pattern-card:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  transform: translateY(-2px);
}

.pattern-thumb {
  width: 100%;
  aspect-ratio: 1 / 1;
  overflow: hidden;
  border-radius: 4px;
  margin-bottom: 1rem;
  background: #f3f4f6;
}

.pattern-thumb img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.pattern-card h3 {
  color: #1e3a8a;
  margin-bottom: 0.15rem;
}

.description {
  flex: 1;
  color: #6b7280;
  font-size: 0.95rem;
  margin-bottom: 1rem;
}

.pattern-meta {
  font-size: 0.85rem;
  color: #9ca3af;
  margin-bottom: 1rem;
}

.count {
  background: rgba(59, 130, 246, 0.1);
  color: #3b82f6;
  padding: 0.25rem 0.5rem;
  border-radius: 3px;
}

.btn {
  padding: 0.5rem 1rem;
  background: #3b82f6;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  text-decoration: none;
  display: inline-block;
  transition: background 0.3s;
}

.btn:hover {
  background: #1e3a8a;
}

.no-results {
  text-align: center;
  padding: 2rem;
  background: white;
  border-radius: 8px;
  color: #6b7280;
}
</style>
