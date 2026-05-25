<template>
  <div class="network-wrap" ref="container">
    <div class="network-controls">
      <label class="ctrl-label">
        Min. co-occurrences:
        <input
          type="range"
          v-model.number="minEdge"
          :min="1"
          :max="maxPossibleEdge"
          class="ctrl-range"
        />
        <span class="ctrl-val">{{ minEdge }}</span>
      </label>
      <span class="ctrl-hint">{{ visibleEdges }} connections shown</span>
    </div>

    <svg ref="svgEl" class="network-svg">
      <defs>
        <marker
          id="arrow"
          viewBox="0 -5 10 10"
          refX="10"
          refY="0"
          markerWidth="6"
          markerHeight="6"
          orient="auto"
        >
          <path d="M0,-5L10,0L0,5" fill="#aaa" />
        </marker>
      </defs>
    </svg>

    <!-- Tooltip -->
    <div
      v-if="tooltip.visible"
      class="network-tooltip"
      :style="{ left: tooltip.x + 'px', top: tooltip.y + 'px' }"
    >
      <strong>{{ tooltip.title }}</strong>
      <span v-if="tooltip.sub">{{ tooltip.sub }}</span>
    </div>

    <!-- Legend -->
    <div class="network-legend">
      <div
        v-for="(color, group) in groupColor"
        :key="group"
        class="legend-item"
      >
        <span class="legend-dot" :style="{ background: color }"></span>
        {{ group }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, onMounted, onUnmounted, computed } from "vue";
import * as d3 from "d3";

const props = defineProps({
  portals: { type: Array, default: () => [] },
  patternGroup: { type: Object, required: true },
  groupColor: { type: Object, required: true },
  patternCounts: { type: Object, required: true },
});

const svgEl = ref(null);
const container = ref(null);
const minEdge = ref(10);
const tooltip = ref({ visible: false, x: 0, y: 0, title: "", sub: "" });

let simulation = null;

// Compute all co-occurrence pairs once from portals
const allPairs = computed(() => {
  const pairs = {};
  props.portals.forEach((portal) => {
    const ps = (portal.patterns || []).filter(Boolean);
    for (let i = 0; i < ps.length; i++) {
      for (let j = i + 1; j < ps.length; j++) {
        const a = ps[i] < ps[j] ? ps[i] : ps[j];
        const b = ps[i] < ps[j] ? ps[j] : ps[i];
        const key = `${a}|||${b}`;
        pairs[key] = (pairs[key] || 0) + 1;
      }
    }
  });
  return pairs;
});

const maxPossibleEdge = computed(() => {
  const vals = Object.values(allPairs.value);
  return vals.length ? Math.max(...vals) : 50;
});

const visibleEdges = computed(
  () =>
    Object.values(allPairs.value).filter((c) => c >= minEdge.value).length,
);

function draw() {
  if (!props.portals.length || !svgEl.value) return;

  const svg = d3.select(svgEl.value);
  svg.selectAll("*").remove();
  if (simulation) simulation.stop();

  const width = container.value?.clientWidth || 900;
  const height = 600;
  svg.attr("width", width).attr("height", height);

  // Build graph data
  const patternNames = Object.keys(props.patternCounts);
  const nodes = patternNames.map((name) => ({
    id: name,
    group: props.patternGroup[name] || "Other",
    count: props.patternCounts[name] || 0,
  }));

  const links = Object.entries(allPairs.value)
    .filter(([, c]) => c >= minEdge.value)
    .map(([key, count]) => {
      const [source, target] = key.split("|||");
      return { source, target, count };
    });

  // Scales
  const maxCount = d3.max(links, (d) => d.count) || 1;
  const strokeScale = d3
    .scaleLinear()
    .domain([minEdge.value, maxCount])
    .range([1, 14])
    .clamp(true);

  const maxNodeCount = d3.max(nodes, (d) => d.count) || 1;
  const radiusScale = d3
    .scaleSqrt()
    .domain([0, maxNodeCount])
    .range([6, 22]);

  // Zoom/pan layer
  const g = svg.append("g");
  svg.call(
    d3
      .zoom()
      .scaleExtent([0.3, 4])
      .on("zoom", (e) => g.attr("transform", e.transform)),
  );

  // Links
  const linkSel = g
    .append("g")
    .attr("class", "links")
    .selectAll("line")
    .data(links)
    .join("line")
    .attr("stroke", "#c8d3e0")
    .attr("stroke-opacity", 0.7)
    .attr("stroke-width", (d) => strokeScale(d.count))
    .attr("stroke-linecap", "round")
    .style("cursor", "default")
    .on("mouseover", (event, d) => {
      d3.select(event.currentTarget).attr("stroke", "#666").attr("stroke-opacity", 1);
      showTooltip(
        event,
        `${d.source.id ?? d.source} ↔ ${d.target.id ?? d.target}`,
        `${d.count} co-occurrences`,
      );
    })
    .on("mousemove", moveTooltip)
    .on("mouseout", (event) => {
      d3.select(event.currentTarget).attr("stroke", "#c8d3e0").attr("stroke-opacity", 0.7);
      hideTooltip();
    });

  // Node group
  const nodeSel = g
    .append("g")
    .attr("class", "nodes")
    .selectAll("g")
    .data(nodes)
    .join("g")
    .style("cursor", "grab")
    .call(
      d3
        .drag()
        .on("start", (event, d) => {
          if (!event.active) simulation.alphaTarget(0.3).restart();
          d.fx = d.x;
          d.fy = d.y;
        })
        .on("drag", (event, d) => {
          d.fx = event.x;
          d.fy = event.y;
        })
        .on("end", (event, d) => {
          if (!event.active) simulation.alphaTarget(0);
          d.fx = null;
          d.fy = null;
        }),
    )
    .on("mouseover", (event, d) => {
      showTooltip(event, d.id, `Used by ${d.count} environments · ${d.group}`);
    })
    .on("mousemove", moveTooltip)
    .on("mouseout", hideTooltip);

  // Circles
  nodeSel
    .append("circle")
    .attr("r", (d) => radiusScale(d.count))
    .attr("fill", (d) => props.groupColor[d.group] || "#999")
    .attr("stroke", "white")
    .attr("stroke-width", 2);

  // Labels
  nodeSel
    .append("text")
    .text((d) => d.id)
    .attr("text-anchor", "middle")
    .attr("dy", (d) => radiusScale(d.count) + 11)
    .attr("font-size", "9px")
    .attr("fill", "#333")
    .attr("pointer-events", "none")
    .style("user-select", "none");

  // Force simulation
  simulation = d3
    .forceSimulation(nodes)
    .force(
      "link",
      d3
        .forceLink(links)
        .id((d) => d.id)
        .distance(80)
        .strength(0.4),
    )
    .force("charge", d3.forceManyBody().strength(-250))
    .force("center", d3.forceCenter(width / 2, height / 2))
    .force(
      "collide",
      d3.forceCollide((d) => radiusScale(d.count) + 14),
    )
    .on("tick", () => {
      linkSel
        .attr("x1", (d) => d.source.x)
        .attr("y1", (d) => d.source.y)
        .attr("x2", (d) => d.target.x)
        .attr("y2", (d) => d.target.y);
      nodeSel.attr("transform", (d) => `translate(${d.x},${d.y})`);
    });
}

function showTooltip(event, title, sub) {
  const rect = container.value.getBoundingClientRect();
  tooltip.value = {
    visible: true,
    x: event.clientX - rect.left + 12,
    y: event.clientY - rect.top - 10,
    title,
    sub,
  };
}

function moveTooltip(event) {
  const rect = container.value.getBoundingClientRect();
  tooltip.value.x = event.clientX - rect.left + 12;
  tooltip.value.y = event.clientY - rect.top - 10;
}

function hideTooltip() {
  tooltip.value.visible = false;
}

watch(
  () => [props.portals, minEdge.value],
  () => draw(),
  { deep: false },
);

onMounted(() => {
  if (props.portals.length) draw();
});

onUnmounted(() => {
  if (simulation) simulation.stop();
});
</script>

<style scoped>
.network-wrap {
  position: relative;
  background: white;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.network-svg {
  display: block;
  width: 100%;
}

.network-controls {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 0.75rem 1rem;
  background: #f8fafc;
  border-bottom: 1px solid #e5e7eb;
  flex-wrap: wrap;
}

.ctrl-label {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.85rem;
  color: #444;
}

.ctrl-range {
  width: 120px;
  accent-color: #1e3a8a;
}

.ctrl-val {
  font-weight: 600;
  color: #1e3a8a;
  min-width: 24px;
  text-align: center;
}

.ctrl-hint {
  font-size: 0.8rem;
  color: #888;
}

.network-tooltip {
  position: absolute;
  background: rgba(15, 23, 42, 0.9);
  color: white;
  padding: 0.4rem 0.7rem;
  border-radius: 5px;
  font-size: 0.82rem;
  pointer-events: none;
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
  max-width: 240px;
  z-index: 10;
  white-space: nowrap;
}

.network-legend {
  position: absolute;
  bottom: 0.75rem;
  right: 0.75rem;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 6px;
  padding: 0.5rem 0.75rem;
  font-size: 0.78rem;
  color: #444;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.12);
}

.legend-item {
  display: flex;
  align-items: center;
  gap: 0.4rem;
}

.legend-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  flex-shrink: 0;
}
</style>
