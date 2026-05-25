<template>
  <div>
    <!-- Hero -->
    <section class="hero">
      <div class="container hero-inner">
        <div class="hero-badge">
          PhD Research &middot; TU Dresden &middot; 2012–2017
        </div>
        <h1>Designing Video Interfaces</h1>
        <p class="hero-lead">
          Interaction Design Patterns for Video Learning Environments
        </p>
        <p class="hero-desc">
          A research-based catalogue of 42 interaction design patterns and 121
          analysed video learning environments — grounded in empirical
          evaluation and years of field study.
        </p>
        <div class="cta-buttons">
          <router-link to="/patterns" class="btn btn-primary"
            >Browse Design Patterns</router-link
          >
          <router-link to="/portals" class="btn btn-secondary"
            >Explore Environments</router-link
          >
        </div>
      </div>
    </section>

    <!-- Stats strip -->
    <section class="stats-strip">
      <div class="container stats-grid">
        <div class="stat">
          <span class="stat-number">42</span>
          <span class="stat-label">Design Patterns</span>
        </div>
        <div class="stat">
          <span class="stat-number">121</span>
          <span class="stat-label">Video Environments</span>
        </div>
        <div class="stat">
          <span class="stat-number">6</span>
          <span class="stat-label">Pattern Categories</span>
        </div>
        <div class="stat">
          <span class="stat-number">2</span>
          <span class="stat-label">Pattern Levels</span>
        </div>
      </div>
    </section>

    <!-- Feature cards -->
    <section class="features">
      <div class="container">
        <h2>Explore the Collection</h2>
        <div class="feature-grid">
          <router-link to="/patterns" class="feature-card feature-card--link">
            <div class="feature-icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.8"
              >
                <rect x="3" y="3" width="7" height="7" rx="1" />
                <rect x="14" y="3" width="7" height="7" rx="1" />
                <rect x="3" y="14" width="7" height="7" rx="1" />
                <rect x="14" y="14" width="7" height="7" rx="1" />
              </svg>
            </div>
            <h3>Design Patterns</h3>
            <p>
              42 interaction design patterns organised at Micro and Macro levels
              across six functional groups. Each pattern documents context,
              problem, forces, solution, consequences, and real-world examples
              with screenshots.
            </p>
            <ul class="feature-highlights">
              <li>Pattern selection wizard</li>
              <li>Confidence indicators (proto, candidate, validated)</li>
              <li>Favourites &amp; full-text search</li>
              <li>Citation tooltips with BibTeX references</li>
            </ul>
          </router-link>

          <router-link to="/portals" class="feature-card feature-card--link">
            <div class="feature-icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.8"
              >
                <rect x="2" y="4" width="20" height="14" rx="2" />
                <polygon
                  points="10,9 10,15 15,12"
                  fill="currentColor"
                  stroke="none"
                />
                <line x1="8" y1="20" x2="16" y2="20" />
              </svg>
            </div>
            <h3>Video Learning Environments</h3>
            <p>
              121 video learning environments collected, categorised, and
              examined for their design choices. Browse sortable tables, full
              screenshot galleries, and detailed portal pages.
            </p>
            <ul class="feature-highlights">
              <li>Sortable &amp; filterable table view</li>
              <li>Screenshot gallery with lightbox</li>
              <li>Pattern usage per environment</li>
            </ul>
          </router-link>

          <router-link to="/analysis" class="feature-card feature-card--link">
            <div class="feature-icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.8"
              >
                <line x1="4" y1="20" x2="4" y2="4" />
                <line x1="4" y1="20" x2="20" y2="20" />
                <rect x="7" y="12" width="3" height="8" rx="0.5" />
                <rect x="12" y="7" width="3" height="13" rx="0.5" />
                <rect x="17" y="10" width="3" height="10" rx="0.5" />
              </svg>
            </div>
            <h3>Pattern Analysis</h3>
            <p>
              Frequency charts, co-occurrence tables, and a force-directed
              network showing how patterns cluster and co-appear across the 121
              environments.
            </p>
            <ul class="feature-highlights">
              <li>Pattern frequency bar charts</li>
              <li>Co-occurrence network graph</li>
              <li>Group-level clustering</li>
            </ul>
          </router-link>
        </div>
      </div>
    </section>

    <!-- Research context -->
    <section class="research">
      <div class="container research-inner">
        <div class="research-text">
          <h2>About the Research</h2>
          <p>
            <em>Designing Video Interfaces</em> is the result of a PhD project
            at <strong>Technische Universität Dresden</strong>. Data collection
            and pattern elaboration was completed in March 2017. The author,
            <strong>Niels Seidel</strong>, is a researcher in interaction design
            and distance learning, currently at CATALPA — Center of Advanced
            Technology for Assisted Learning and Predictive Analytics at
            FernUniversität Hagen.
          </p>
          <router-link to="/about" class="btn btn-outline"
            >More about the project</router-link
          >
        </div>
        <div class="research-pubs">
          <h3>Key Publications</h3>
          <ul>
            <li>
              Seidel, N. (2018).
              <em
                >Interaction Design Patterns und CSCL-Scripts für
                Videolernumgebungen.</em
              >
              TU Dresden.
              <a
                href="http://nbn-resolving.de/urn:nbn:de:bsz:14-qucosa-233756"
                target="_blank"
                rel="noopener"
                >Thesis</a
              >
            </li>
            <li>
              Seidel, N. (2017).
              <em>Empirical Evaluation Methods for Pattern Languages.</em>
              EuroPLoP 2017.
              <a
                href="http://doi.org/10.1145/3147704.3147719"
                target="_blank"
                rel="noopener"
                >DOI</a
              >
            </li>
            <li>
              Seidel, N. (2016). <em>Video Assessment Patterns.</em>
              EuroPLoP 2016.
              <a
                href="http://doi.org/10.1145/3011784.3011820"
                target="_blank"
                rel="noopener"
                >DOI</a
              >
            </li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup></script>

<style scoped>
/* ── Hero ── */
.hero {
  background: linear-gradient(135deg, #1e3a8a 0%, #1e4db8 60%, #1d4ed8 100%);
  color: white;
  padding: 2.5rem 0 2.5rem;
  margin-top: -2rem;
  text-align: center;
}

.hero-inner {
  max-width: 780px;
  margin: 0 auto;
}

.hero-badge {
  display: inline-block;
  background: rgba(255, 255, 255, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 999px;
  padding: 0.25rem 1rem;
  font-size: 0.8rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  margin-bottom: 1.5rem;
  color: rgba(255, 255, 255, 0.9);
}

.hero h1 {
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 0.75rem;
  color: #fff;
  line-height: 1.1;
}

.hero-lead {
  font-size: 1.25rem;
  color: rgba(255, 255, 255, 0.85);
  margin-bottom: 1rem;
  font-style: italic;
}

.hero-desc {
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.75);
  max-width: 600px;
  margin: 0 auto 2rem;
  line-height: 1.7;
}

.cta-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.btn-secondary {
  background: rgba(255, 255, 255, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.5);
  color: white;
  padding: 0.6rem 1.4rem;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 500;
  transition: background 0.2s;
}

.btn-secondary:hover {
  background: rgba(255, 255, 255, 0.25);
}

.btn-outline {
  border: 1px solid #1e3a8a;
  color: #1e3a8a;
  padding: 0.6rem 1.4rem;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 500;
  display: inline-block;
  margin-top: 1rem;
  transition:
    background 0.2s,
    color 0.2s;
}

.btn-outline:hover {
  background: #1e3a8a;
  color: white;
}

/* ── Stats strip ── */
.stats-strip {
  background: #f1f5f9;
  border-bottom: 1px solid #e2e8f0;
  padding: 1.5rem 0;
}

.stats-grid {
  display: flex;
  justify-content: center;
  gap: 3rem;
  flex-wrap: wrap;
}

.stat {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.2rem;
}

.stat-number {
  font-size: 2rem;
  font-weight: 700;
  color: #1e3a8a;
  line-height: 1;
}

.stat-label {
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: #64748b;
}

/* ── Features ── */
.features {
  padding: 3rem 0;
}

.features h2 {
  text-align: center;
  margin-bottom: 2rem;
  font-size: 1.6rem;
  color: #1e3a8a;
}

.feature-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

@media (max-width: 800px) {
  .feature-grid {
    grid-template-columns: 1fr;
  }
}

.feature-card {
  background: white;
  padding: 2rem 1.75rem;
  border-radius: 10px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);
  border: 1px solid #e8edf5;
  text-align: left;
}

.feature-card--link {
  display: block;
  text-decoration: none;
  color: inherit;
  transition:
    box-shadow 0.2s,
    transform 0.2s,
    border-color 0.2s;
}

.feature-card--link:hover {
  box-shadow: 0 6px 20px rgba(30, 58, 138, 0.12);
  transform: translateY(-3px);
  border-color: #bfdbfe;
}

.feature-icon {
  width: 48px;
  height: 48px;
  background: #eff6ff;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.25rem;
  color: #1d4ed8;
}

.feature-icon svg {
  width: 26px;
  height: 26px;
}

.feature-card h3 {
  color: #1e3a8a;
  font-size: 1.1rem;
  margin-bottom: 0.6rem;
}

.feature-card p {
  font-size: 0.9rem;
  color: #475569;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.feature-highlights {
  list-style: none;
  padding: 0;
  margin: 0;
}

.feature-highlights li {
  font-size: 0.82rem;
  color: #64748b;
  padding: 0.2rem 0;
  padding-left: 1.2rem;
  position: relative;
}

.feature-highlights li::before {
  content: "→";
  position: absolute;
  left: 0;
  color: #3b82f6;
}

/* ── Research section ── */
.research {
  background: #f8fafc;
  border-top: 1px solid #e2e8f0;
  padding: 3rem 0;
}

.research-inner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: start;
}

@media (max-width: 700px) {
  .research-inner {
    grid-template-columns: 1fr;
  }
}

.research-text h2 {
  color: #1e3a8a;
  margin-bottom: 1rem;
}

.research-text p {
  font-size: 0.95rem;
  color: #475569;
  line-height: 1.7;
  margin-bottom: 0.75rem;
}

.research-pubs h3 {
  color: #1e3a8a;
  margin-bottom: 0.75rem;
  font-size: 1rem;
}

.research-pubs ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.research-pubs li {
  font-size: 0.85rem;
  color: #475569;
  line-height: 1.5;
  padding-left: 1rem;
  border-left: 3px solid #bfdbfe;
}

.research-pubs a {
  color: #1d4ed8;
  text-decoration: none;
}

.research-pubs a:hover {
  text-decoration: underline;
}
</style>
