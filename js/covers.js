/* =====================
   COVER SVG DEFINITIONS
   Injected into .exp-card-cover and .project-cover elements at runtime.
   ===================== */

const SVG_EXP_COVER = `<svg class="exp-cover-art" viewBox="0 0 200 80" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <circle cx="170" cy="10" r="55" fill="rgba(255,255,255,0.07)" />
  <circle cx="170" cy="10" r="35" fill="rgba(255,255,255,0.06)" />
  <circle cx="20" cy="75" r="38" fill="rgba(255,255,255,0.04)" />
</svg>`;

const SVG_PROJECT_NBN = `<svg class="project-cover-icon" viewBox="0 0 160 100" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <circle cx="80" cy="18" r="7" fill="rgba(255,255,255,0.75)" />
  <circle cx="45" cy="48" r="5.5" fill="rgba(255,255,255,0.55)" />
  <circle cx="115" cy="48" r="5.5" fill="rgba(255,255,255,0.55)" />
  <circle cx="25" cy="76" r="4" fill="rgba(255,255,255,0.38)" />
  <circle cx="65" cy="76" r="4" fill="rgba(255,255,255,0.38)" />
  <circle cx="95" cy="76" r="4" fill="rgba(255,255,255,0.38)" />
  <circle cx="135" cy="76" r="4" fill="rgba(255,255,255,0.38)" />
  <line x1="80" y1="25" x2="45" y2="42" stroke="rgba(255,255,255,0.3)" stroke-width="1.5" />
  <line x1="80" y1="25" x2="115" y2="42" stroke="rgba(255,255,255,0.3)" stroke-width="1.5" />
  <line x1="45" y1="53" x2="25" y2="72" stroke="rgba(255,255,255,0.2)" stroke-width="1.2" />
  <line x1="45" y1="53" x2="65" y2="72" stroke="rgba(255,255,255,0.2)" stroke-width="1.2" />
  <line x1="115" y1="53" x2="95" y2="72" stroke="rgba(255,255,255,0.2)" stroke-width="1.2" />
  <line x1="115" y1="53" x2="135" y2="72" stroke="rgba(255,255,255,0.2)" stroke-width="1.2" />
</svg>`;

const SVG_PROJECT_PIPELINE = `<svg class="project-cover-icon" viewBox="0 0 160 100" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <rect x="8" y="36" width="34" height="28" rx="6" fill="rgba(255,255,255,0.18)" stroke="rgba(255,255,255,0.55)" stroke-width="1.5" />
  <rect x="63" y="36" width="34" height="28" rx="6" fill="rgba(255,255,255,0.18)" stroke="rgba(255,255,255,0.55)" stroke-width="1.5" />
  <rect x="118" y="36" width="34" height="28" rx="6" fill="rgba(255,255,255,0.18)" stroke="rgba(255,255,255,0.55)" stroke-width="1.5" />
  <text x="25" y="53" text-anchor="middle" fill="rgba(255,255,255,0.85)" font-size="7.5" font-weight="700" font-family="monospace">EB</text>
  <text x="80" y="53" text-anchor="middle" fill="rgba(255,255,255,0.85)" font-size="7.5" font-weight="700" font-family="monospace">AC</text>
  <text x="135" y="53" text-anchor="middle" fill="rgba(255,255,255,0.85)" font-size="7.5" font-weight="700" font-family="monospace">BE</text>
  <line x1="43" y1="50" x2="61" y2="50" stroke="rgba(255,255,255,0.6)" stroke-width="1.8" />
  <path d="M57 46 L63 50 L57 54" stroke="rgba(255,255,255,0.6)" stroke-width="1.8" fill="none" stroke-linejoin="round" stroke-linecap="round" />
  <line x1="98" y1="50" x2="116" y2="50" stroke="rgba(255,255,255,0.6)" stroke-width="1.8" />
  <path d="M112 46 L118 50 L112 54" stroke="rgba(255,255,255,0.6)" stroke-width="1.8" fill="none" stroke-linejoin="round" stroke-linecap="round" />
  <circle cx="52" cy="50" r="2.5" fill="rgba(255,255,255,0.55)" />
  <circle cx="107" cy="50" r="2.5" fill="rgba(255,255,255,0.55)" />
</svg>`;

// Map modifier class → SVG for project covers
const PROJECT_COVER_SVGS = {
  "project-cover--nbn": SVG_PROJECT_NBN,
  "project-cover--pipeline": SVG_PROJECT_PIPELINE,
};

// Inject the same decorative SVG into all experience card covers
document.querySelectorAll(".exp-card-cover").forEach((cover) => {
  cover.insertAdjacentHTML("afterbegin", SVG_EXP_COVER);
});

// Inject the matching SVG into each project cover by modifier class
Object.entries(PROJECT_COVER_SVGS).forEach(([cls, svg]) => {
  const el = document.querySelector(`.${cls}`);
  if (el) el.insertAdjacentHTML("afterbegin", svg);
});
