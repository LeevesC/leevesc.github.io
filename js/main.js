import { basic_info } from "/data/basic_info.js";

const $ = (id) => document.getElementById(id);
const tabs = ["blog", "about", "experience", "skills", "projects"];
const ON_BLOG = document.location.pathname.endsWith("blog.html");

const SUPABASE_URL =
  "https://qylhanxworezjtgynavd.supabase.co/rest/v1/blog_content?select=*";
const SUPABASE_KEY = "sb_publishable_d3I1qevssUyISaD_Wvx0LQ_rNTjbUa5";

async function fetchBlogPosts() {
  const res = await fetch(SUPABASE_URL, {
    headers: {
      apikey: SUPABASE_KEY,
      Authorization: `Bearer ${SUPABASE_KEY}`,
    },
  });
  if (!res.ok) throw new Error(`Supabase fetch failed: ${res.status}`);
  return res.json();
}

const SKILL_ICONS = {
  "Systems & Analysis": "🏗️",
  "Stakeholder & Process": "🤝",
  "Data & Analytics": "📊",
  "Automation & Integration": "⚙️",
  "Networking & Infrastructure": "🌐",
  "Tools & Platforms": "🛠️",
};

/* =====================
   Nav
   ===================== */
function renderNav() {
  $("nav-bar").innerHTML = `
      <div class="nav-container">
        <div class="nav-logo">LEE ZHOU</div>
        <div class="nav-links">
        ${tabs
          .map((s) => {
            const isBlog = s === "blog";
            const isActive = ON_BLOG && isBlog;
            const href = isBlog
              ? "blog.html"
              : ON_BLOG
                ? `index.html#${s}`
                : `#${s}`;
            return `<a class="nav-link${isActive ? " nav-link--active" : ""}" href="${href}">${s}</a>`;
          })
          .join("")}
        </div>
        <button class="nav-menu-btn">
          <span class="material-symbols-outlined">menu</span>
        </button>
      </div>`;
}

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
   Scroll reveal
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
    { threshold: 0.1 },
  );
  document
    .querySelectorAll(".reveal-item")
    .forEach((el) => observer.observe(el));
}

/* =====================
   Skills (index only)
   ===================== */
const PREVIEW_COUNT = 4;

function renderSkills() {
  const grid = $("skills-grid");
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

  grid.querySelectorAll(".skill-toggle-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const expanded = btn.getAttribute("aria-expanded") === "true";
      const extraEl = btn.previousElementSibling;
      const labelEl = btn.querySelector(".skill-toggle-label");
      const count = extraEl.querySelectorAll(".skill-item").length;
      extraEl.hidden = expanded;
      btn.setAttribute("aria-expanded", String(!expanded));
      labelEl.textContent = expanded ? `+${count} more` : "Show less";
    });
  });
}

/* =====================
   Blog feed (blog page only)
   ===================== */
const MONTHS = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

// "2026-04-13T13:00:40+00:00" → { time: "13:00", date: "13 Apr 2026" }
function parseTimestamp(iso) {
  const d = new Date(iso);
  const hh = String(d.getUTCHours()).padStart(2, "0");
  const mm = String(d.getUTCMinutes()).padStart(2, "0");
  const dd = String(d.getUTCDate()).padStart(2, "0");
  const mon = MONTHS[d.getUTCMonth()];
  const yyyy = d.getUTCFullYear();
  return { time: `${hh}:${mm}`, date: `${dd} ${mon} ${yyyy}` };
}

function renderBlog(posts) {
  const feed = $("blog-feed");
  if (!feed) return;

  feed.innerHTML = posts
    .map((post, i) => {
      const { time, date } = parseTimestamp(post.time);
      return `
    <article class="blog-post reveal-item" style="transition-delay:${i * 80}ms">
      <div class="post-meta">
        <span class="post-time">${time}</span>
        <span class="post-meta-sep" aria-hidden="true"></span>
        <span class="post-date">${date}</span>
      </div>
      <h2 class="post-title">${post.title}</h2>
      <p class="post-content">${post.content}</p>
    </article>`;
    })
    .join("");
}

/* =====================
   Init
   ===================== */
document.addEventListener("DOMContentLoaded", async () => {
  renderNav();
  renderSkills();

  if (ON_BLOG) {
    try {
      const posts = await fetchBlogPosts();
      renderBlog(posts);
    } catch (err) {
      console.error(err);
      const feed = $("blog-feed");
      if (feed)
        feed.innerHTML = `<p style="color:var(--on-surface-variant)">Failed to load posts.</p>`;
    }
  }

  initScrollReveal();
});
