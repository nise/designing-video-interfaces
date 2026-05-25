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

    <svg ref="svgEl" class="network-svg"></svg>

    <!-- Tooltip -->
    <div
      v-if="tooltip.visible"
      class="network-tooltip"
      :style="{ left: tooltip.x + 'px', top: tooltip.y + 'px' }"
    >
      <strong>{{ tooltip.title }}</strong>
      <span v-if="tooltip.sub">{{ tooltip.sub }}</span>
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
const minEdge = ref(3);
const tooltip = ref({ visible: false, x: 0, y: 0, title: "", sub: "" });

let simulation = null;

// All co-occurrence counts computed from portals
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
  () => Object.values(allPairs.value).filter((c) => c >= minEdge.value).length,
);

// Group cluster positions as fractions of (width, height)
// Arranged in a 3-wide × 2-tall ring
const GROUP_POS = {
  "Basic Functions": { fx: 0.18, fy: 0.28 },
  "Temporal Access": { fx: 0.5, fy: 0.14 },
  Contribution: { fx: 0.82, fy: 0.28 },
  Structuring: { fx: 0.82, fy: 0.72 },
  "Self-organization": { fx: 0.5, fy: 0.86 },
  Layout: { fx: 0.18, fy: 0.72 },
};

function draw() {
  if (!props.portals.length || !svgEl.value) return;

  const svg = d3.select(svgEl.value);
  svg.selectAll("*").remove();
  if (simulation) simulation.stop();

  const width = container.value?.clientWidth || 900;
  const height = 700;
  svg.attr("width", width).attr("height", height);

  // Build nodes — all patterns that appear in portals
  const patternNames = Object.keys(props.patternCounts);
  const nodes = patternNames.map((name) => {
    const group = props.patternGroup[name] || "Other";
    const pos = GROUP_POS[group] || { fx: 0.5, fy: 0.5 };
    return {
      id: name,
      group,
      count: props.patternCounts[name] || 0,
      // initial position near group centroid with jitter
      x: pos.fx * width + (Math.random() - 0.5) * 80,
      y: pos.fy * height + (Math.random() - 0.5) * 80,
    };
  });

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
    .range([0.8, 12])
    .clamp(true);

  const opacityScale = d3
    .scaleLinear()
    .domain([minEdge.value, maxCount])
    .range([0.25, 0.85])
    .clamp(true);

  const maxNodeCount = d3.max(nodes, (d) => d.count) || 1;
  const radiusScale = d3.scaleSqrt().domain([0, maxNodeCount]).range([5, 20]);

  // Zoom/pan
  const g = svg.append("g");
  svg.call(
    d3
      .zoom()
      .scaleExtent([0.25, 5])
      .on("zoom", (e) => g.attr("transform", e.transform)),
  );

  // Group label rings (drawn first, behind everything)
  const groupLabelData = Object.entries(GROUP_POS).map(([name, pos]) => ({
    name,
    x: pos.fx * width,
    y: pos.fy * height,
    color: props.groupColor[name] || "#999",
  }));

  g.append("g")
    .attr("class", "group-labels")
    .selectAll("text")
    .data(groupLabelData)
    .join("text")
    .attr("x", (d) => d.x)
    .attr("y", (d) => d.y)
    .attr("text-anchor", "middle")
    .attr("font-size", "12px")
    .attr("font-weight", "600")
    .attr("fill", (d) => d.color)
    .attr("opacity", 0.35)
    .attr("pointer-events", "none")
    .style("user-select", "none")
    .text((d) => d.name);

  // Links
  const linkSel = g
    .append("g")
    .attr("class", "links")
    .selectAll("line")
    .data(links)
    .join("line")
    .attr("stroke", "#94a3b8")
    .attr("stroke-opacity", (d) => opacityScale(d.count))
    .attr("stroke-width", (d) => strokeScale(d.count))
    .attr("stroke-linecap", "round")
    .style("cursor", "default")
    .on("mouseover", (event, d) => {
      d3.select(event.currentTarget)
        .attr("stroke", "#334155")
        .attr("stroke-opacity", 1);
      const srcId = d.source.id ?? d.source;
      const tgtId = d.target.id ?? d.target;
      showTooltip(event, `${srcId} ↔ ${tgtId}`, `${d.count} co-occurrences`);
    })
    .on("mousemove", moveTooltip)
    .on("mouseout", (event, d) => {
      d3.select(event.currentTarget)
        .attr("stroke", "#94a3b8")
        .attr("stroke-opacity", opacityScale(d.count));
      hideTooltip();
    });

  // Node groups (circle + label)
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
      d3.select(event.currentTarget)
        .select("circle")
        .attr("stroke", "#0f172a")
        .attr("stroke-width", 3);
      showTooltip(event, d.id, `${d.count} environments · ${d.group}`);
    })
    .on("mousemove", moveTooltip)
    .on("mouseout", (event) => {
      d3.select(event.currentTarget)
        .select("circle")
        .attr("stroke", "white")
        .attr("stroke-width", 2);
      hideTooltip();
    });

  nodeSel
    .append("circle")
    .attr("r", (d) => radiusScale(d.count))
    .attr("fill", (d) => props.groupColor[d.group] || "#94a3b8")
    .attr("stroke", "white")
    .attr("stroke-width", 2);

  nodeSel
    .append("text")
    .text((d) => d.id)
    .attr("text-anchor", "middle")
    .attr("dy", (d) => radiusScale(d.count) + 10)
    .attr("font-size", "8.5px")
    .attr("fill", "#1e293b")
    .attr("pointer-events", "none")
    .style("user-select", "none");

  // Force simulation with group clustering
  simulation = d3
    .forceSimulation(nodes)
    .force(
      "link",
      d3
        .forceLink(links)
        .id((d) => d.id)
        .distance(60)
        .strength(0.25),
    )
    .force("charge", d3.forceManyBody().strength(-180))
    .force(
      "collide",
      d3.forceCollide((d) => radiusScale(d.count) + 12),
    )
    // Pull each node toward its group centroid
    .force(
      "x",
      d3
        .forceX((d) => {
          const pos = GROUP_POS[d.group] || { fx: 0.5 };
          return pos.fx * width;
        })
        .strength(0.18),
    )
    .force(
      "y",
      d3
        .forceY((d) => {
          const pos = GROUP_POS[d.group] || { fy: 0.5 };
          return pos.fy * height;
        })
        .strength(0.18),
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
    x: event.clientX - rect.left + 14,
    y: event.clientY - rect.top - 12,
    title,
    sub,
  };
}
function moveTooltip(event) {
  const rect = container.value.getBoundingClientRect();
  tooltip.value.x = event.clientX - rect.left + 14;
  tooltip.value.y = event.clientY - rect.top - 12;
}
function hideTooltip() {
  tooltip.value.visible = false;
}

watch(
  () => props.portals,
  () => {
    if (props.portals.length) draw();
  },
);
watch(minEdge, () => {
  if (props.portals.length) draw();
});

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
  width: 130px;
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
  background: rgba(15, 23, 42, 0.92);
  color: white;
  padding: 0.4rem 0.75rem;
  border-radius: 5px;
  font-size: 0.82rem;
  pointer-events: none;
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
  max-width: 260px;
  z-index: 10;
}
</style>
