import { basic_info } from "/data/basic_info.js";

const $ = (id) => document.getElementById(id);
const tabs = ["about", "experience", "skills", "projects"];
const SKILL_ICONS = {
  "Systems & Analysis": "🏗️",
  "Stakeholder & Process": "🤝",
  "Data & Analytics": "📊",
  "Automation & Integration": "⚙️",
  "Networking & Infrastructure": "🌐",
  "Tools & Platforms": "🛠️",
};

/* =====================
     Nav render
     ===================== */
function renderNav() {
  $("nav-bar").innerHTML = `
      <div class="nav-container">
        <div class="nav-logo">LEE ZHOU</div>
        <div class="nav-links">
        ${tabs.map((s) => `<a class="nav-link" href=#${s}>${s}</a>`).join("")}
        </div>
        <button class="nav-menu-btn">
          <span class="material-symbols-outlined">menu</span>
        </button>
      </div>`;
}

// Event delegation handles the dynamically-rendered nav button
document.addEventListener("click", (e) => {
  const btn = e.target.closest(".nav-menu-btn");
  if (!btn) return;

  const navLinks = document.querySelector(".nav-links");
  const icon = btn.querySelector(".material-symbols-outlined");
  const isOpen = navLinks.dataset.open === "true";

  navLinks.dataset.open = isOpen ? "false" : "true";
  icon.textContent = isOpen ? "menu" : "close";
});

/* =====================
   SCROLL REVEAL — IntersectionObserver
   ===================== */
function initScrollReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 },
  );

  document
    .querySelectorAll(".reveal-item")
    .forEach((el) => observer.observe(el));
}

/* =====================
   SKILLS RENDER — category emoji + collapse/expand for cards with >4 items
   ===================== */

const PREVIEW_COUNT = 4; // items shown before "show more"

function renderSkills() {
  const grid = document.getElementById("skills-grid");
  if (!grid) return;

  grid.innerHTML = basic_info.skills
    .map((group, i) => {
      const icon = SKILL_ICONS[group.category] ?? "💡";
      const preview = group.items.slice(0, PREVIEW_COUNT);
      const extra = group.items.slice(PREVIEW_COUNT);
      const hasMore = extra.length > 0;

      const itemHTML = (item) => `
        <li class="skill-item">
          <span class="skill-name">${item.name}</span>
          <span class="skill-badge skill-badge--${item.level}">${item.level}</span>
        </li>`;

      return `
        <div class="skill-group reveal-item" style="transition-delay:${i * 70}ms">
          <div class="skill-group-header">
            <span class="skill-category-icon" aria-hidden="true">${icon}</span>
            <h3 class="skill-group-title">${group.category}</h3>
          </div>
          <ul class="skill-list">
            ${preview.map(itemHTML).join("")}
          </ul>
          ${
            hasMore
              ? `
          <div class="skill-extra" hidden>
            <ul class="skill-list">
              ${extra.map(itemHTML).join("")}
            </ul>
          </div>
          <button class="skill-toggle-btn" aria-expanded="false">
            <span class="skill-toggle-label">+${extra.length} more</span>
            <span class="material-symbols-outlined skill-toggle-icon">expand_more</span>
          </button>`
              : ""
          }
        </div>`;
    })
    .join("");

  // Attach toggle listeners after HTML is inserted
  grid.querySelectorAll(".skill-toggle-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const expanded = btn.getAttribute("aria-expanded") === "true";
      const extraEl = btn.previousElementSibling; // .skill-extra
      const labelEl = btn.querySelector(".skill-toggle-label");
      const count = extraEl.querySelectorAll(".skill-item").length;

      extraEl.hidden = expanded;
      btn.setAttribute("aria-expanded", String(!expanded));
      labelEl.textContent = expanded ? `+${count} more` : "Show less";
    });
  });
}

/* =====================
   INIT — second DOMContentLoaded runs after renderNav()
   ===================== */
document.addEventListener("DOMContentLoaded", () => {
  renderNav();
  renderSkills();
  initScrollReveal();
});
