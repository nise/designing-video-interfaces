<template>
  <div class="container" v-if="portal">
    <router-link to="/portals" class="back-link">← Back to Portals</router-link>
    <h1>{{ portal.name }}</h1>

    <div style="margin: 1.5rem 0">
      <p v-if="ok(portal.provider)">
        <strong>Provider:</strong>
        <a
          v-if="ok(portal.url)"
          :href="portal.url"
          target="_blank"
          rel="noopener"
          >{{ portal.provider }}</a
        >
        <span v-else>{{ portal.provider }}</span>
      </p>
      <p v-if="ok(portal.category)">
        <strong>Category:</strong> {{ portal.category }}
      </p>
      <p v-if="ok(portal.analysis?.availability)">
        <strong>Availability:</strong> {{ portal.analysis.availability }}
      </p>
      <p v-if="portal.usability && portal.usability.open_source !== undefined">
        <strong>Open Source:</strong>
        {{ portal.usability.open_source ? "Yes" : "No" }}
      </p>
    </div>

    <div v-if="portal.tags && portal.tags.length" style="margin: 1.5rem 0">
      <h3>Tags</h3>
      <span v-for="tag in portal.tags" :key="tag" class="badge badge-primary">{{
        tag
      }}</span>
    </div>

    <div v-if="ok(portal.description)" style="margin: 1.5rem 0">
      <h3>Description</h3>
      <p v-html="portal.description"></p>
    </div>

    <div
      v-if="portal.patterns && portal.patterns.length"
      style="margin: 1.5rem 0"
    >
      <h3>Design Patterns ({{ portal.patterns.length }})</h3>
      <ul>
        <li v-for="p in portal.patterns" :key="p">
          <router-link :to="'/patterns/' + slugify(p)">{{ p }}</router-link>
        </li>
      </ul>
    </div>

    <div v-if="portalImages.length" class="images-section">
      <h3>Screenshots ({{ portalImages.length }})</h3>
      <div class="image-grid">
        <div
          v-for="(img, i) in portalImages"
          :key="img.filename"
          class="image-card"
          @click="openLightbox(i)"
        >
          <img
            :src="'/img/screenshots/' + img.filename"
            :alt="img.caption || portal.name"
            class="portal-image"
            @error="$event.target.parentElement.style.display = 'none'"
          />
          <div v-if="img.caption" class="image-caption">{{ img.caption }}</div>
        </div>
      </div>
    </div>

    <router-link to="/portals" class="back-link">← Back to Portals</router-link>
  </div>

  <!-- Lightbox -->
  <Teleport to="body">
    <div
      v-if="lightbox.open"
      class="lightbox-overlay"
      @click.self="closeLightbox"
    >
      <div class="lightbox-box">
        <button class="lb-close" @click="closeLightbox">✕</button>
        <button
          class="lb-prev"
          @click="lightboxStep(-1)"
          :disabled="lightbox.index === 0"
        >
          ‹
        </button>
        <img
          :src="'/img/screenshots/' + portalImages[lightbox.index]?.filename"
          :alt="portalImages[lightbox.index]?.caption || portal?.name"
          class="lb-img"
          @error="$event.target.style.display = 'none'"
        />
        <button
          class="lb-next"
          @click="lightboxStep(1)"
          :disabled="lightbox.index >= portalImages.length - 1"
        >
          ›
        </button>
        <div class="lb-caption">
          {{ portal?.name }} — {{ lightbox.index + 1 }} /
          {{ portalImages.length }}
        </div>
      </div>
    </div>
  </Teleport>

  <div v-if="!portal" class="container"><p>Loading...</p></div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";
import { useRoute } from "vue-router";
import { slugify, ok } from "../composables/utils.js";

const route = useRoute();
const portal = ref(null);
const allImages = ref([]);
const lightbox = ref({ open: false, index: 0 });

const portalImages = computed(() => {
  if (!portal.value) return [];
  return allImages.value.filter((img) => img.portal === portal.value.name);
});

function openLightbox(index) {
  lightbox.value = { open: true, index };
}

function closeLightbox() {
  lightbox.value = { open: false, index: 0 };
}

function lightboxStep(dir) {
  const max = portalImages.value.length - 1;
  lightbox.value.index = Math.max(0, Math.min(max, lightbox.value.index + dir));
}

function onKeydown(e) {
  if (!lightbox.value.open) return;
  if (e.key === "Escape") closeLightbox();
  if (e.key === "ArrowLeft") lightboxStep(-1);
  if (e.key === "ArrowRight") lightboxStep(1);
}

onMounted(async () => {
  window.addEventListener("keydown", onKeydown);
  try {
    const [portalRes, imgRes] = await Promise.all([
      fetch(`${import.meta.env.BASE_URL}data/portals.json`),
      fetch(`${import.meta.env.BASE_URL}data/images.json`),
    ]);
    const portals = await portalRes.json();
    allImages.value = await imgRes.json();
    portal.value = portals.find((p) => slugify(p.name) === route.params.id);
  } catch (error) {
    console.error("Error loading portal:", error);
  }
});

onUnmounted(() => {
  window.removeEventListener("keydown", onKeydown);
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

.portal-detail {
  background: white;
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.portal-detail h1 {
  color: #1e3a8a;
  margin-bottom: 2rem;
  border-bottom: 2px solid #003366;
  padding-bottom: 1rem;
}

.info-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
}

.info-block {
  background: #f9fafb;
  padding: 1.5rem;
  border-radius: 8px;
  border-left: 4px solid #3b82f6;
}

.info-block h3 {
  color: #1e3a8a;
  margin-bottom: 0.75rem;
  font-size: 0.95rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.info-block a {
  color: #3b82f6;
  text-decoration: none;
  word-break: break-word;
}

.info-block a:hover {
  text-decoration: underline;
}

.badge {
  display: inline-block;
  padding: 0.4rem 0.8rem;
  border-radius: 4px;
  font-size: 0.85rem;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
}

.badge-primary {
  background: rgba(59, 130, 246, 0.1);
  color: #3b82f6;
}

.badge-secondary {
  background: rgba(156, 163, 175, 0.1);
  color: #6b7280;
}

.badge-link {
  cursor: pointer;
  transition: all 0.3s;
}

.badge-link:hover {
  background: rgba(59, 130, 246, 0.2);
}

.description-block {
  margin: 2rem 0;
  padding: 1.5rem;
  background: #f0f9ff;
  border-radius: 8px;
  border-left: 4px solid #fbbf24;
}

.description-block h2 {
  color: #1e3a8a;
  margin-bottom: 1rem;
}

.images-section {
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 2px solid #e5e7eb;
}

.images-section h2 {
  color: #1e3a8a;
  margin-bottom: 1.5rem;
}

.image-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem;
}

.image-card {
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition:
    transform 0.3s,
    box-shadow 0.3s;
}

.image-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.portal-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  display: block;
}

.image-caption {
  padding: 0.75rem;
  font-size: 0.9rem;
  color: #4b5563;
  min-height: 40px;
}

.image-tags {
  padding: 0 0.75rem 0.75rem 0.75rem;
}

.loading {
  text-align: center;
  padding: 3rem;
  color: #6b7280;
}

/* Lightbox */
.lightbox-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.85);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
}

.lightbox-box {
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  max-width: 90vw;
  flex-direction: column;
}

.lb-img {
  max-width: 80vw;
  max-height: 75vh;
  border-radius: 6px;
  display: block;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.6);
}

.lb-close {
  position: absolute;
  top: -2.5rem;
  right: 0;
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  line-height: 1;
  opacity: 0.8;
}

.lb-close:hover {
  opacity: 1;
}

.lb-prev,
.lb-next {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.15);
  border: none;
  color: white;
  font-size: 2.5rem;
  cursor: pointer;
  border-radius: 4px;
  line-height: 1;
  padding: 0.1rem 0.4rem;
  transition: background 0.15s;
}

.lb-prev {
  left: -3.5rem;
}
.lb-next {
  right: -3.5rem;
}

.lb-prev:hover,
.lb-next:hover {
  background: rgba(255, 255, 255, 0.3);
}

.lb-prev:disabled,
.lb-next:disabled {
  opacity: 0.25;
  cursor: default;
}

.lb-caption {
  color: #d1d5db;
  font-size: 0.875rem;
  margin-top: 0.5rem;
  text-align: center;
}
</style>
