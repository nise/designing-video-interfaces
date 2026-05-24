// This service will load data from JSON files in the public/data directory

// MongoDB extended JSON exports wrap ObjectIds as { $oid: "..." }.
// This helper extracts a plain string id.
function extractId(id) {
  if (!id) return id;
  if (typeof id === "string") return id;
  if (id.$oid) return id.$oid;
  return String(id);
}

function normalizePortal(p) {
  return { ...p, _id: extractId(p._id) };
}

function normalizePattern(p) {
  return {
    ...p,
    _id: extractId(p._id),
    // The exported data stores the main text in "consequences"; map it to
    // "description" so the views can use a consistent field name.
    description: p.description || p.consequences || p.problem || "",
  };
}

const base = import.meta.env.BASE_URL;

export const dataService = {
  async getPortals() {
    try {
      const response = await fetch(`${base}data/portals.json`);
      if (!response.ok) throw new Error("Failed to load portals");
      const data = await response.json();
      return data.map(normalizePortal);
    } catch (error) {
      console.error("Error loading portals:", error);
      return [];
    }
  },

  async getPortal(id) {
    const portals = await this.getPortals();
    return portals.find((p) => p._id === id);
  },

  async getPatterns() {
    try {
      const response = await fetch(`${base}data/patterns.json`);
      if (!response.ok) throw new Error("Failed to load patterns");
      const data = await response.json();
      return data.map(normalizePattern);
    } catch (error) {
      console.error("Error loading patterns:", error);
      return [];
    }
  },

  async getPattern(id) {
    const patterns = await this.getPatterns();
    return patterns.find((p) => p._id === id || p.name === id);
  },

  async getImages() {
    try {
      const response = await fetch(`${base}data/images.json`);
      if (!response.ok) throw new Error("Failed to load images");
      return await response.json();
    } catch (error) {
      console.error("Error loading images:", error);
      return [];
    }
  },

  async getImagesByPortal(portalName) {
    const images = await this.getImages();
    return images.filter((img) => img.portal === portalName);
  },

  async getImagesByPattern(patternName) {
    const images = await this.getImages();
    return images.filter((img) => img.tags && img.tags.includes(patternName));
  },
};
