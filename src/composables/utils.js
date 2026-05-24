// Shared utility functions used across view components.

export function slugify(str) {
  return (str || "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function ok(val) {
  return val && val !== "undefined" && String(val).trim() !== "" && val !== "-";
}

export function truncate(text, len) {
  if (!text || text === "undefined") return "";
  return text.length > len ? text.slice(0, len) + "…" : text;
}

export function confLevel(p) {
  const n = parseInt(p?.confidence?.["$numberInt"]);
  if (!n) return "";
  return "*".repeat(n);
}

export function confTitle(p) {
  const n = parseInt(p?.confidence?.["$numberInt"]);
  const labels = {
    1: "Proto-pattern (*)",
    2: "Candidate pattern (**)",
    3: "Validated pattern (***)",
  };
  return labels[n] || "";
}

export function stripLatex(text) {
  if (!text) return "";
  let s = text;
  s = s.replace(/\\protect\s*/g, "");
  s = s.replace(/\\setcounter\{[^}]*\}\{[^}]*\}/g, "");
  s = s.replace(/\\value\{[^}]*\}/g, "");
  s = s.replace(/\\footnotemark/g, "");
  s = s.replace(/\\texttrademark/g, "\u2122");
  s = s.replace(/\\degree/g, "\u00b0");
  s = s.replace(/\\href\{[^}]*\}\{([^}]*)\}/g, "$1");
  s = s.replace(/\\(?:textit|emph)\{([^}]*)\}/g, "$1");
  return s;
}

export function stripHtml(html) {
  return html ? html.replace(/<[^>]*>/g, "") : "";
}
