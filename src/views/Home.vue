<template>
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
        <router-link to="/patterns" class="btn btn-primary"
          >View Design Patterns</router-link
        >
        <router-link to="/portals" class="btn btn-scondary"
          >Explore Video Learning Environments</router-link
        >
      </div>
    </section>

    <section class="features">
      <h2>What's Inside</h2>
      <div class="grid grid-3">
        <div class="feature-card">
          <h3>42 Design Patterns</h3>
          <p>
            Common solutions for recurring design problems in video learning
            environments.
          </p>
        </div>
        <div class="feature-card">
          <h3>100+ Video Learning Environments</h3>
          <p>
            Video learning environments categorized and analyzed with
            screenshots and examples.
          </p>
        </div>
        <div hidden class="feature-card">
          <h3>Detailed Analysis</h3>
          <p>
            In-depth examination of UI elements and their implementation across
            different platforms.
          </p>
        </div>
      </div>
    </section>

    <section hidden class="about">
      <h2>About This Project</h2>
      <p>
        This project combines interaction design patterns with a comprehensive
        database of video learning environments. It serves as both a reference
        for designers and developers, and as an example of a pattern database
        system.
      </p>
      <p>
        Users are supported when selecting patterns and can get inspiration from
        how others have solved similar problems.
      </p>
      <router-link to="/about" class="btn btn-primary">Learn More</router-link>
    </section>
  </div>
</template>

<script setup></script>

<style scoped>
.jumbotron {
  background-color: #1e3a8a;
  color: white;
  padding: 3rem 0;
  border-radius: 8px;
  margin-bottom: 3rem;
  text-align: center;
}

.jumbotron h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
  color: #fff;
}

.jumbotron .lead,
.jumbotron p {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #fff;
}

.cta-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-top: 2rem;
  flex-wrap: wrap;
}

.features {
  margin: 3rem 0;
}

.features h2 {
  text-align: center;
  margin-bottom: 2rem;
}

.feature-card {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.feature-card h3 {
  color: #1e3a8a;
  margin-bottom: 0.5rem;
}

.about {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  margin: 2rem 0;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.about h2 {
  color: #1e3a8a;
  margin-bottom: 1rem;
}

.about a {
  margin-top: 1.5rem;
  display: inline-block;
}
</style>
