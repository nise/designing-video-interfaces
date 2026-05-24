<template>
  <div class="container">
    <h1>Video Learning Environments</h1>
    <p>Browse {{ portals.length }} environments</p>
    <div v-if="sortedPortals.length" class="table-responsive">
      <table class="table">
        <thead>
          <tr>
            <th class="th-thumb"></th>
            <th class="sortable" @click="setSort('name')">
              Name <span class="sort-icon">{{ sortIcon("name") }}</span>
            </th>
            <th class="sortable" @click="setSort('provider')">
              Provider <span class="sort-icon">{{ sortIcon("provider") }}</span>
            </th>
            <th class="sortable" @click="setSort('category')">
              Category <span class="sort-icon">{{ sortIcon("category") }}</span>
            </th>
            <th class="sortable" @click="setSort('availability')">
              Availability
              <span class="sort-icon">{{ sortIcon("availability") }}</span>
            </th>
            <th class="sortable th-center" @click="setSort('open_source')">
              Open Source
              <span class="sort-icon">{{ sortIcon("open_source") }}</span>
            </th>
            <th class="sortable th-center" @click="setSort('patterns')">
              Patterns <span class="sort-icon">{{ sortIcon("patterns") }}</span>
            </th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="portal in sortedPortals"
            :key="portal._id?.$oid || portal.name"
          >
            <td class="td-thumb">
              <img
                v-if="imagesByPortal[portal.name]?.length"
                :src="
                  baseUrl + 'img/screenshots/' + imagesByPortal[portal.name][0]
                "
                :alt="portal.name"
                class="portal-thumb"
                @click="openLightbox(portal.name, 0)"
                @error="$event.target.style.display = 'none'"
              />
            </td>
            <td>
              <router-link
                :to="'/portals/' + slugify(portal.name)"
                class="portal-name-link"
                >{{ portal.name }}</router-link
              >
            </td>
            <td>{{ portal.provider || "—" }}</td>
            <td>{{ portal.category || "—" }}</td>
            <td>
              <span class="avail-text" :title="portal.analysis?.availability">
                {{ truncate(portal.analysis?.availability, 55) || "—" }}
              </span>
            </td>
            <td class="td-center">
              <span
                v-if="portal.usability?.open_source === true"
                class="os-yes"
                title="Open Source"
                >✓</span
              >
              <span
                v-else-if="portal.usability?.open_source === false"
                class="os-no"
                title="Proprietary"
                >✗</span
              >
              <span v-else class="os-unknown">—</span>
            </td>
            <td class="td-center">
              {{ portal.patterns ? portal.patterns.length : 0 }}
            </td>
            <td>
              <router-link :to="'/portals/' + slugify(portal.name)" class="btn"
                >View</router-link
              >
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <p v-else>Loading…</p>

    <!-- Lightbox -->
    <Teleport to="body">
      <div
        v-if="lightbox.open"
        class="lightbox-overlay"
        @click.self="closeLightbox"
        @keydown.esc="closeLightbox"
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
            :src="baseUrl + 'img/screenshots/' + lightboxImages[lightbox.index]"
            :alt="lightbox.portal"
            class="lb-img"
            @error="$event.target.style.display = 'none'"
          />
          <button
            class="lb-next"
            @click="lightboxStep(1)"
            :disabled="lightbox.index >= lightboxImages.length - 1"
          >
            ›
          </button>
          <div class="lb-caption">
            {{ lightbox.portal }} — {{ lightbox.index + 1 }} /
            {{ lightboxImages.length }}
          </div>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<script setup>
const baseUrl = import.meta.env.BASE_URL;
import { ref, computed, onMounted, onUnmounted } from "vue";
import { slugify, truncate } from "../composables/utils.js";

const portals = ref([]);
const images = ref([]);

const sortKey = ref("name");
const sortDir = ref(1); // 1 = asc, -1 = desc

const lightbox = ref({ open: false, portal: "", index: 0 });

function sortVal(portal, key) {
  switch (key) {
    case "name":
      return (portal.name || "").toLowerCase();
    case "provider":
      return (portal.provider || "").toLowerCase();
    case "category":
      return (portal.category || "").toLowerCase();
    case "availability":
      return (portal.analysis?.availability || "").toLowerCase();
    case "open_source": {
      const v = portal.usability?.open_source;
      return v === true ? 0 : v === false ? 1 : 2;
    }
    case "patterns":
      return portal.patterns?.length ?? 0;
    default:
      return "";
  }
}

function setSort(key) {
  if (sortKey.value === key) {
    sortDir.value *= -1;
  } else {
    sortKey.value = key;
    sortDir.value = 1;
  }
}

function sortIcon(key) {
  if (sortKey.value !== key) return "⇅";
  return sortDir.value === 1 ? "↑" : "↓";
}

// --- computed ---
const imagesByPortal = computed(() => {
  const map = {};
  for (const img of images.value) {
    if (!img.portal) continue;
    if (!map[img.portal]) map[img.portal] = [];
    map[img.portal].push(img.filename);
  }
  return map;
});

const sortedPortals = computed(() => {
  return [...portals.value].sort((a, b) => {
    const va = sortVal(a, sortKey.value);
    const vb = sortVal(b, sortKey.value);
    if (va < vb) return -1 * sortDir.value;
    if (va > vb) return 1 * sortDir.value;
    return 0;
  });
});

const lightboxImages = computed(() => {
  return imagesByPortal.value[lightbox.value.portal] || [];
});

// --- lightbox ---
function openLightbox(portalName, index) {
  lightbox.value = { open: true, portal: portalName, index };
}

function closeLightbox() {
  lightbox.value = { open: false, portal: "", index: 0 };
}

function lightboxStep(dir) {
  const max = lightboxImages.value.length - 1;
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
    portals.value = await portalRes.json();
    images.value = await imgRes.json();
  } catch (error) {
    console.error("Error loading portals:", error);
  }
});

onUnmounted(() => {
  window.removeEventListener("keydown", onKeydown);
});
</script>

<style scoped>
.table-responsive {
  overflow-x: auto;
}

.table {
  width: 100%;
  border-collapse: collapse;
  background: white;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  font-size: 0.875rem;
}

.table thead {
  background: #f3f4f6;
  border-bottom: 2px solid #1e3a8a;
}

.table th {
  padding: 0.75rem 1rem;
  text-align: left;
  font-weight: 600;
  color: #1e3a8a;
  white-space: nowrap;
}

.table th.sortable {
  cursor: pointer;
  user-select: none;
}

.table th.sortable:hover {
  background: #e5e7eb;
}

.th-center {
  text-align: center;
}

.sort-icon {
  font-size: 0.75em;
  opacity: 0.7;
  margin-left: 0.2rem;
}

.table td {
  padding: 0.6rem 1rem;
  border-bottom: 1px solid #e5e7eb;
  vertical-align: middle;
}

.table tbody tr:hover {
  background: #f9fafb;
}

/* thumbnail column */
.th-thumb {
  width: 70px;
  padding: 0.5rem;
}

.td-thumb {
  width: 70px;
  padding: 0.4rem 0.5rem;
}

.portal-thumb {
  width: 64px;
  height: 44px;
  object-fit: cover;
  border-radius: 4px;
  cursor: pointer;
  display: block;
  border: 1px solid #e5e7eb;
  transition: opacity 0.15s;
}

.portal-thumb:hover {
  opacity: 0.85;
}

.photo-count {
  font-size: 0.75rem;
  color: #3b82f6;
  cursor: pointer;
  margin-top: 0.2rem;
  white-space: nowrap;
}

.photo-count:hover {
  text-decoration: underline;
}

.portal-name-link {
  color: #1e3a8a;
  font-weight: 500;
  text-decoration: none;
}

.portal-name-link:hover {
  text-decoration: underline;
}

/* availability */
.avail-text {
  color: #4b5563;
  cursor: help;
}

/* open source indicators */
.td-center {
  text-align: center;
}

.os-yes {
  color: #16a34a;
  font-weight: 700;
  font-size: 1.1em;
}

.os-no {
  color: #dc2626;
  font-weight: 700;
  font-size: 1.1em;
}

.os-unknown {
  color: #9ca3af;
}

/* View button */
.btn {
  padding: 0.35rem 0.8rem;
  background: #3b82f6;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  text-decoration: none;
  display: inline-block;
  font-size: 0.8rem;
  white-space: nowrap;
  transition: background 0.2s;
}

.btn:hover {
  background: #1e3a8a;
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
