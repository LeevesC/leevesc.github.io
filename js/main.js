import { basic_info } from "/data/basic_info.js";

const $ = (id) => document.getElementById(id);
const blobs = [
  {
    el: document.querySelector(".hero-blob-1"),
    speedX: 0.00018,
    ampX: 38,
    phaseX: 0,
    speedY: 0.00013,
    ampY: 28,
    phaseY: 1.2,
    speedS: 0.0001,
    ampS: 0.06,
    phaseS: 0.5, // subtle scale pulse
  },
  {
    el: document.querySelector(".hero-blob-2"),
    speedX: 0.00014,
    ampX: 30,
    phaseX: 2.1,
    speedY: 0.0002,
    ampY: 40,
    phaseY: 0.4,
    speedS: 0.00012,
    ampS: 0.07,
    phaseS: 1.8,
  },
  {
    el: document.querySelector(".hero-blob-3"),
    speedX: 0.00022,
    ampX: 45,
    phaseX: 1.0,
    speedY: 0.00016,
    ampY: 32,
    phaseY: 2.5,
    speedS: 0.00009,
    ampS: 0.05,
    phaseS: 3.1,
  },
];

/* =====================
     Nav render
     ===================== */
function renderNav() {
  const tabs = ["about", "experience", "skills", "projects"];
  $("nav-bar").innerHTML = `
      <div class="nav-container">
        <div class="nav-logo">LEE ZHOU</div>
        <div class="nav-links">
        ${tabs.map((s) => `<a class="nav-link" href="#">${s}</a>`).join("")}
        </div>
        <button class="nav-menu-btn">
          <span class="material-symbols-outlined">menu</span>
        </button>
      </div>`;
}

/* =====================
     Scroll line ANIMATIONS
     ===================== */
function animateScrollLine() {
  const scrollLineFill = document.querySelector(".scroll-line-fill");
  // Animate the fill block sliding downward through the line in a loop,
  // giving a visual "scroll down" cue.
  const DURATION = 1400; // ms per loop cycle
  let startTime = null;

  function animateScrollLine(timestamp) {
    if (!startTime) startTime = timestamp;

    const progress = ((timestamp - startTime) % DURATION) / DURATION; // 0 → 1

    // top travels from -50% (block fully above line) to 100% (fully below),
    // which is a total travel of 150% across the 50%-tall block.
    const topPercent = -50 + progress * 150;
    scrollLineFill.style.top = topPercent + "%";

    requestAnimationFrame(animateScrollLine);
  }

  requestAnimationFrame(animateScrollLine);
}

/* =====================
     HERO BLOB ANIMATIONS
     ===================== */
function animateBlobs(timestamp) {
  for (const blob of blobs) {
    const tx = Math.sin(timestamp * blob.speedX + blob.phaseX) * blob.ampX;
    const ty = Math.cos(timestamp * blob.speedY + blob.phaseY) * blob.ampY;
    const scale =
      1 + Math.sin(timestamp * blob.speedS + blob.phaseS) * blob.ampS;
    blob.el.style.transform = `translate(${tx}px, ${ty}px) scale(${scale})`;
  }
  requestAnimationFrame(animateBlobs);
}

document.addEventListener("DOMContentLoaded", () => {
  renderNav();
  animateScrollLine();
  requestAnimationFrame(animateBlobs);
});

/* =====================
   NAV — anchor links + mobile toggle
   ===================== */
function patchNavLinks() {
  const sections = ["about", "experience", "skills", "projects"];
  document.querySelectorAll(".nav-link").forEach((link, i) => {
    if (sections[i]) link.href = `#${sections[i]}`;
  });
}

// Event delegation handles the dynamically-rendered nav button
document.addEventListener("click", (e) => {
  const btn = e.target.closest(".nav-menu-btn");
  if (!btn) return;

  const navLinks = document.querySelector(".nav-links");
  const icon = btn.querySelector(".material-symbols-outlined");
  const isOpen = navLinks.dataset.open === "true";

  if (isOpen) {
    navLinks.dataset.open = "false";
    icon.textContent = "menu";
    navLinks.style.cssText = "";
  } else {
    navLinks.dataset.open = "true";
    icon.textContent = "close";
    Object.assign(navLinks.style, {
      display: "flex",
      flexDirection: "column",
      position: "absolute",
      top: "100%",
      left: "0",
      right: "0",
      padding: "1.5rem 3rem",
      background: "rgba(255,255,255,0.97)",
      backdropFilter: "blur(64px)",
      webkitBackdropFilter: "blur(64px)",
      boxShadow: "0 20px 40px rgba(82,92,140,0.08)",
      gap: "1.25rem",
    });
  }
});

window.addEventListener("resize", () => {
  if (window.innerWidth >= 768) {
    const navLinks = document.querySelector(".nav-links");
    const icon = document.querySelector(
      ".nav-menu-btn .material-symbols-outlined",
    );
    if (navLinks) {
      navLinks.style.cssText = "";
      navLinks.dataset.open = "false";
    }
    if (icon) icon.textContent = "menu";
  }
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
   INIT — second DOMContentLoaded runs after renderNav()
   ===================== */
document.addEventListener("DOMContentLoaded", () => {
  renderSkills();
  patchNavLinks();
  initScrollReveal();
});

/* =====================
   SKILLS RENDER — category emoji + collapse/expand for cards with >4 items
   ===================== */
const SKILL_ICONS = {
  "Systems & Analysis": "🏗️",
  "Stakeholder & Process": "🤝",
  "Data & Analytics": "📊",
  "Automation & Integration": "⚙️",
  "Networking & Infrastructure": "🌐",
  "Tools & Platforms": "🛠️",
};

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
