<template>
  <div class="pattern-card">
    <button
      @click.prevent="$emit('toggle-fav', pattern.name)"
      :title="isFav ? 'Remove from favorites' : 'Add to favorites'"
      class="fav-btn"
      :class="{ 'fav-btn--active': isFav }"
    >
      {{ isFav ? "♥" : "♡" }}
    </button>

    <router-link :to="'/patterns/' + slugify(pattern.name)" class="card-link">
      <div v-if="thumbnail" class="card-thumb">
        <img
          :src="thumbnail"
          :alt="pattern.name"
          class="card-thumb-img"
          @error="$event.target.parentElement.style.display = 'none'"
        />
      </div>
      <h3 class="card-title">
        {{ pattern.name }}
        <span v-if="stars" class="conf-stars" :title="starsTitle">{{
          stars
        }}</span>
      </h3>
    </router-link>

    <p class="card-desc">{{ description }}</p>
    <router-link :to="'/patterns/' + slugify(pattern.name)" class="card-details"
      >Details →</router-link
    >
  </div>
</template>

<script setup>
import { computed } from "vue";
import {
  slugify,
  confLevel,
  confTitle,
  truncate,
  stripHtml,
  stripLatex,
} from "../composables/utils.js";

const props = defineProps({
  pattern: { type: Object, required: true },
  isFav: { type: Boolean, default: false },
});

defineEmits(["toggle-fav"]);

const stars = computed(() => confLevel(props.pattern));
const starsTitle = computed(() => confTitle(props.pattern));

const thumbnail = computed(() => {
  if (props.pattern.illustration)
    return (
      import.meta.env.BASE_URL +
      props.pattern.illustration.replace(/^\/static\//, "")
    );
  const ev = props.pattern.evidence?.find((e) => e.example);
  return ev ? import.meta.env.BASE_URL + "img/screenshots/" + ev.example : null;
});

const description = computed(() =>
  truncate(
    stripHtml(
      stripLatex(props.pattern.consequences || props.pattern.problem || ""),
    ),
    120,
  ),
);
</script>

<style scoped>
.pattern-card {
  background: white;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  border-left: 1px solid #ccc;
  position: relative;
}

.fav-btn {
  position: absolute;
  top: 0.6rem;
  right: 0.6rem;
  background: none;
  border: none;
  font-size: 1.1rem;
  cursor: pointer;
  color: #d1d5db;
  line-height: 1;
  padding: 0.1rem 0.2rem;
  border-radius: 3px;
  transition: color 0.15s;
  z-index: 1;
}

.fav-btn:hover {
  color: #e11d48;
}

.fav-btn--active {
  color: #e11d48;
}

.card-link {
  display: block;
  text-decoration: none;
  flex-shrink: 0;
}

.card-thumb {
  width: 100%;
  max-width: 100%;
  max-height: 180px;
  height: 180px;
  overflow: hidden;
  border-radius: 4px;
  margin-bottom: 0.75rem;
  background: #f3f4f6;
  flex-shrink: 0;
}

.card-thumb-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.card-title {
  color: #1e3a8a;
  margin-bottom: 0.5rem;
  font-size: 1rem;
}

.conf-stars {
  margin-left: 0.3rem;
  font-size: 0.75em;
  font-weight: 700;
  color: #b45309;
  font-family: monospace;
  cursor: help;
  letter-spacing: 0.05em;
}

.card-desc {
  flex: 1;
  color: #6b7280;
  font-size: 0.875rem;
  margin-bottom: 0.75rem;
  line-height: 1.4;
}

.card-details {
  font-size: 0.875rem;
  color: #3b82f6;
  text-decoration: none;
}
</style>
