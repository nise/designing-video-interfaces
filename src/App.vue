<template>
  <div class="app">
    <nav class="navbar">
      <div class="container">
        <router-link to="/" class="navbar-brand"
          >Designing Video Interfaces</router-link
        >
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
        <div class="footer-logos">
          <a
            href="https://www.fernuni-hagen.de/english/research/clusters/catalpa/"
            target="_blank"
            rel="noopener"
          >
            <img
              src="/img/logos/catalpa.jpg"
              alt="CATALPA"
              class="footer-logo"
            />
          </a>
          <a
            href="https://www.fernuni-hagen.de/"
            target="_blank"
            rel="noopener"
          >
            <img
              src="/img/logos/fernuni.jpg"
              alt="FernUniversität in Hagen"
              class="footer-logo"
            />
          </a>
          <a href="https://tu-dresden.de/" target="_blank" rel="noopener">
            <img
              src="/img/logos/tud.png"
              alt="TU Dresden"
              class="footer-logo"
            />
          </a>
          <img
            src="/img/logos/eu.png"
            alt="European Union"
            class="footer-logo"
          />
          <img
            src="/img/logos/esf.png"
            alt="European Social Fund"
            class="footer-logo"
          />
          <img src="/img/logos/sachsen.png" alt="Sachsen" class="footer-logo" />
          <img
            src="/img/logos/escience.png"
            alt="eScience"
            class="footer-logo"
          />
          <a href="https://www.startnext.com/" target="_blank" rel="noopener">
            <img
              src="/img/logos/startnext.png"
              alt="Startnext"
              class="footer-logo"
            />
          </a>
          <img
            src="/img/logos/hillerschevilla.jpg"
            alt="Hiller Schevilla"
            class="footer-logo"
          />
        </div>
        <p class="footer-copy">
          &copy; 2024 Niels Seidel. GNU GPL v3 or later.
        </p>
      </div>
    </footer>
  </div>
</template>

<script setup></script>

<style scoped>
.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.navbar {
  background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%);
  color: white;
  padding: 1rem 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.navbar .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.navbar-brand {
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
  text-decoration: none;
  transition: opacity 0.3s;
}

.navbar-brand:hover {
  opacity: 0.8;
}

.nav-menu {
  display: flex;
  list-style: none;
  gap: 2rem;
}

.nav-menu a {
  color: white;
  text-decoration: none;
  transition: opacity 0.3s;
}

.nav-menu a:hover {
  opacity: 0.8;
}

.nav-menu a.router-link-active {
  border-bottom: 2px solid #fbbf24;
}

main {
  flex: 1;
  padding: 2rem 0;
}

.footer {
  background: #1f2937;
  color: #9ca3af;
  text-align: center;
  padding: 2rem;
  margin-top: 2rem;
}

.footer-logos {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 1rem;
}

.footer-logo {
  height: 40px;
  width: auto;
  object-fit: contain;
  filter: grayscale(30%);
  opacity: 0.85;
  transition: opacity 0.2s;
}

.footer-logo:hover {
  opacity: 1;
  filter: none;
}

.footer-copy {
  margin: 0;
  font-size: 0.85rem;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

@media (max-width: 768px) {
  .nav-menu {
    flex-direction: column;
    gap: 0.5rem;
  }

  .navbar .container {
    flex-direction: column;
    gap: 1rem;
  }
}
</style>
