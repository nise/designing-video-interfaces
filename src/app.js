import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";

function slugify(str) {
  return (str || "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function renderText(text) {
  if (!text) return "";
  // Convert markdown links [label](url) to <a href> tags.
  // Normalize /patterns/view/Pattern-Name and /patterns/Pattern-Name → /patterns/pattern-name
  return text.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_, label, url) => {
    const normalized = url.replace(
      /^\/patterns\/(?:view\/)?(.+)$/,
      (m, slug) => "/patterns/" + slug.toLowerCase(),
    );
    return `<a href="${normalized}">${label}</a>`;
  });
}

// Import components
const Home = {
  template: `
    <div class="container">
      <section class="jumbotron">
        <h1>Designing Video Interfaces</h1>
        <p class="lead">
          Interaction Design Patterns for Video Learning Environments
        </p>
        <p>
          A comprehensive database of video learning environments with 42
          interaction design patterns and analysis of 100+ video applications.
        </p>
        <div class="cta-buttons">
          <router-link to="/portals" class="btn btn-primary">Explore Portals</router-link>
          <router-link to="/patterns" class="btn btn-secondary">View Patterns</router-link>
        </div>
      </section>
    </div>
  `,
};

const PortalsList = {
  template: `
    <div class="container">
      <h1>Video Learning Environments</h1>
      <p>Browse all 121 portals</p>
      <div v-if="portals.length" class="table-responsive">
        <table class="data-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Provider</th>
              <th>Patterns</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="portal in portals" :key="portal._id">
              <td>{{ portal.name }}</td>
              <td>{{ portal.provider }}</td>
              <td>{{ portal.patterns ? portal.patterns.length : 0 }}</td>
              <td><router-link :to="'/portals/' + slugify(portal.name)" class="btn btn-sm">View</router-link></td>
            </tr>
          </tbody>
        </table>
      </div>
      <p v-else>Loading portals...</p>
    </div>
  `,
  data() {
    return {
      portals: [],
    };
  },
  methods: { slugify },
  async mounted() {
    try {
      const response = await fetch(
        `${import.meta.env.BASE_URL}data/portals.json`,
      );
      this.portals = await response.json();
    } catch (error) {
      console.error("Error loading portals:", error);
    }
  },
};

const PatternsList = {
  template: `
    <div class="container">
      <div class="jumbotron">
        <h2>Design Patterns of video-based Learning Environments</h2>
        <p>Explore {{ patterns.length }} design patterns</p>
      </div>
      <div style="margin-bottom:1.5rem">
        <input v-model="searchQuery" type="text" placeholder="Search patterns..."
          style="width:100%;max-width:400px;padding:0.75rem;border:1px solid #e5e7eb;border-radius:4px;font-size:1rem" />
      </div>
      <div v-if="filteredPatterns.length" style="display:grid;grid-template-columns:repeat(3,1fr);gap:1.5rem">
        <div v-for="pattern in filteredPatterns" :key="pattern._id"
          style="background:white;padding:1rem;border-radius:8px;box-shadow:0 1px 3px rgba(0,0,0,.1);display:flex;flex-direction:column;border-left:4px solid #3b82f6">
          <router-link :to="'/patterns/' + slugify(pattern.name)" style="display:block;text-decoration:none">
            <div v-if="firstImage(pattern)" style="width:100%;aspect-ratio:4/3;overflow:hidden;border-radius:4px;margin-bottom:0.75rem;background:#f3f4f6">
              <img :src="firstImage(pattern)" :alt="pattern.name"
                style="width:100%;height:100%;object-fit:cover;display:block"
                @error="$event.target.parentElement.style.display='none'" />
            </div>
            <h3 style="color:#1e3a8a;margin-bottom:0.5rem;font-size:1rem">{{ pattern.name }}</h3>
          </router-link>
          <p style="flex:1;color:#6b7280;font-size:0.875rem;margin-bottom:0.75rem;line-height:1.4">{{ truncate(stripHtml(pattern.consequences || pattern.problem || ''), 120) }}</p>
          <router-link :to="'/patterns/' + slugify(pattern.name)" style="padding:0;text-align:left;font-size:0.875rem;color:#3b82f6;text-decoration:none;border:none;background:none">Details →</router-link>
        </div>
      </div>
      <p v-else-if="patterns.length">No patterns match your search.</p>
      <p v-else>Loading patterns...</p>
    </div>
  `,
  data() {
    return {
      patterns: [],
      searchQuery: "",
    };
  },
  computed: {
    filteredPatterns() {
      if (!this.searchQuery) return this.patterns;
      const q = this.searchQuery.toLowerCase();
      return this.patterns.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          (p.consequences && p.consequences.toLowerCase().includes(q)) ||
          (p.problem && p.problem.toLowerCase().includes(q)),
      );
    },
  },
  methods: {
    slugify,
    truncate(text, len) {
      if (!text) return "";
      return text.length > len ? text.substring(0, len) + "..." : text;
    },
    stripHtml(html) {
      return html ? html.replace(/<[^>]*>/g, "") : "";
    },
    firstImage(pattern) {
      if (pattern.illustration) {
        return pattern.illustration.replace(/^\/static/, "");
      }
      const ev = pattern.evidence && pattern.evidence.find((e) => e.example);
      return ev
        ? import.meta.env.BASE_URL + "img/screenshots/" + ev.example
        : null;
    },
  },
  async mounted() {
    try {
      const response = await fetch(
        `${import.meta.env.BASE_URL}data/patterns.json`,
      );
      this.patterns = await response.json();
    } catch (error) {
      console.error("Error loading patterns:", error);
    }
  },
};

const PortalsDetail = {
  template: `
    <div class="container" v-if="portal">
      <router-link to="/portals" class="btn">← Back to Portals</router-link>
      <h1>{{ portal.name }}</h1>

      <div style="margin:1.5rem 0">
        <p v-if="ok(portal.provider)">
          <strong>Provider:</strong>
          <a v-if="ok(portal.url)" :href="portal.url" target="_blank" rel="noopener">{{ portal.provider }}</a>
          <span v-else>{{ portal.provider }}</span>
        </p>
        <p v-if="ok(portal.category)"><strong>Category:</strong> {{ portal.category }}</p>
        <p v-if="ok(portal.availability)"><strong>Availability:</strong> {{ portal.availability }}</p>
        <p v-if="portal.usability && portal.usability.open_source !== undefined">
          <strong>Open Source:</strong> {{ portal.usability.open_source ? 'Yes' : 'No' }}
        </p>
      </div>

      <div v-if="portal.tags && portal.tags.length" style="margin:1.5rem 0">
        <h3>Tags</h3>
        <span v-for="tag in portal.tags" :key="tag" style="display:inline-block;margin:0.25rem;padding:0.2rem 0.6rem;background:#e5e7eb;border-radius:4px">{{ tag }}</span>
      </div>

      <div v-if="ok(portal.description)" style="margin:1.5rem 0">
        <h3>Description</h3>
        <p v-html="portal.description"></p>
      </div>

      <div v-if="portal.patterns && portal.patterns.length" style="margin:1.5rem 0">
        <h3>Design Patterns ({{ portal.patterns.length }})</h3>
        <ul>
          <li v-for="p in portal.patterns" :key="p">
            <router-link :to="'/patterns/' + slugify(p)">{{ p }}</router-link>
          </li>
        </ul>
      </div>

      <router-link to="/portals" class="btn">← Back to Portals</router-link>
    </div>
    <div v-else class="container"><p>Loading...</p></div>
  `,
  data() {
    return { portal: null };
  },
  methods: {
    ok(val) {
      return (
        val && val !== "undefined" && String(val).trim() !== "" && val !== "-"
      );
    },
    slugify,
  },
  async mounted() {
    try {
      const response = await fetch(
        `${import.meta.env.BASE_URL}data/portals.json`,
      );
      const portals = await response.json();
      this.portal = portals.find(
        (p) => slugify(p.name) === this.$route.params.id,
      );
    } catch (error) {
      console.error("Error loading portal:", error);
    }
  },
};

const PatternsDetail = {
  template: `
    <div class="container" v-if="pattern">
      <router-link to="/patterns" class="btn">← Back to Patterns</router-link>
      <h1>{{ pattern.name }}</h1>

      <div v-if="ok(pattern.synopsis)" style="margin:1.5rem 0">
        <h3>Synopsis</h3>
        <p v-html="renderText(pattern.synopsis)"></p>
      </div>

      <div v-if="ok(pattern.problem)" style="margin:1.5rem 0">
        <h3>Problem</h3>
        <p v-html="renderText(pattern.problem)"></p>
      </div>

      <div v-if="ok(pattern.context)" style="margin:1.5rem 0">
        <h3>Context</h3>
        <p v-html="renderText(pattern.context)"></p>
      </div>

      <div v-if="ok(pattern.forces)" style="margin:1.5rem 0">
        <h3>Forces</h3>
        <p v-html="renderText(pattern.forces)"></p>
      </div>

      <div v-if="ok(pattern.solution)" style="margin:1.5rem 0">
        <h3>Solution</h3>
        <p v-html="renderText(pattern.solution)"></p>
      </div>

      <div v-if="ok(pattern.consequences)" style="margin:1.5rem 0">
        <h3>Consequences</h3>
        <p v-html="renderText(pattern.consequences)"></p>
      </div>

      <div v-if="relatedPatterns.length" style="margin:1.5rem 0">
        <h3>Related Patterns</h3>
        <ul>
          <li v-for="rp in relatedPatterns" :key="rp.label">
            <router-link :to="'/patterns/' + slugify(rp.label)">{{ rp.label }}</router-link>
            <span v-if="ok(rp.type)"> ({{ rp.type }})</span>
          </li>
        </ul>
      </div>

      <div v-if="evidenceItems.length" style="margin:1.5rem 0">
        <h3>Examples</h3>
        <div v-for="ev in evidenceItems" :key="ev.example" style="margin-bottom:1.5rem;padding-left:1rem;border-left:3px solid #ccc">
          <p v-html="renderText(ev.rational)"></p>
          <img v-if="ev.example" :src="'${import.meta.env.BASE_URL}img/screenshots/' + ev.example" :alt="ev.example" style="max-width:100%;border-radius:4px;margin-top:0.5rem;" @error="$event.target.style.display='none'" />
        </div>
      </div>

      <div v-if="usedInPortals.length" style="margin:1.5rem 0">
        <h3>Used in {{ usedInPortals.length }} Environment(s)</h3>
        <ul>
          <li v-for="portal in usedInPortals" :key="portal._id.$oid">
            <router-link :to="'/portals/' + slugify(portal.name)">{{ portal.name }}</router-link>
            <span v-if="portal.provider" style="color:#888"> — {{ portal.provider }}</span>
          </li>
        </ul>
      </div>

      <router-link to="/patterns" class="btn">← Back to Patterns</router-link>
    </div>
    <div v-else class="container"><p>Loading...</p></div>
  `,
  data() {
    return { pattern: null, portals: [] };
  },
  computed: {
    usedInPortals() {
      if (!this.pattern?.name) return [];
      return this.portals.filter(
        (p) => p.patterns && p.patterns.includes(this.pattern.name),
      );
    },
    relatedPatterns() {
      if (!this.pattern?.related_patterns) return [];
      return this.pattern.related_patterns.filter(
        (rp) => rp.label && rp.label !== "undefined",
      );
    },
    evidenceItems() {
      if (!this.pattern?.evidence) return [];
      return this.pattern.evidence.filter(
        (ev) =>
          ev.rational &&
          ev.rational !== "undefined" &&
          ev.rational.trim() !== "",
      );
    },
  },
  methods: {
    ok(val) {
      return (
        val && val !== "undefined" && String(val).trim() !== "" && val !== "-"
      );
    },
    slugify,
    renderText,
    async loadPattern(id) {
      try {
        const [patRes, portalRes] = await Promise.all([
          fetch(`${import.meta.env.BASE_URL}data/patterns.json`),
          fetch(`${import.meta.env.BASE_URL}data/portals.json`),
        ]);
        const patterns = await patRes.json();
        this.pattern = patterns.find((p) => slugify(p.name) === id) || null;
        this.portals = await portalRes.json();
      } catch (error) {
        console.error("Error loading pattern:", error);
      }
    },
  },
  watch: {
    "$route.params.id"(id) {
      this.loadPattern(id);
    },
  },
  async mounted() {
    this.loadPattern(this.$route.params.id);
  },
};

const About = {
  template: `
    <div class="container">
      <h1>About This Project</h1>
      <p>This is a comprehensive resource for studying interaction design patterns in video learning environments.</p>
    </div>
  `,
};

// Router configuration
const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/portals", name: "PortalsList", component: PortalsList },
  { path: "/portals/:id", name: "PortalsDetail", component: PortalsDetail },
  { path: "/patterns", name: "PatternsList", component: PatternsList },
  { path: "/patterns/:id", name: "PatternsDetail", component: PatternsDetail },
  { path: "/about", name: "About", component: About },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Root component
const App = {
  template: `
    <div class="app">
      <nav class="navbar">
        <div class="container">
          <router-link to="/" class="navbar-brand">Designing Video Interfaces</router-link>
          <ul class="nav-menu">
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/portals">Portals</router-link></li>
            <li><router-link to="/patterns">Patterns</router-link></li>
            <li><router-link to="/about">About</router-link></li>
          </ul>
        </div>
      </nav>
      <main>
        <router-view></router-view>
      </main>
      <footer class="footer">
        <div class="container">
          <p>&copy; 2024 Designing Video Interfaces. All rights reserved.</p>
        </div>
      </footer>
    </div>
  `,
};

// Create and mount app
const app = createApp(App);
app.use(router);
app.mount("#app");
