```html
<!-- Content Sections (Asymmetric Layout) -->
<section class="content-section">
  <div class="content-container">
    <div class="content-grid">
      <!-- Bento Block 1 -->
      <div class="bento-main">
        <span class="bento-label">Selected Work</span>
        <h3 class="bento-title">
          Visual storytelling through high-end digital experiences.
        </h3>
        <div class="bento-img-wrapper">
          <img
            alt="Interior design"
            class="bento-img"
            data-alt="Minimalist architectural space with clean lines, soft natural lighting, and a single designer chair against a white wall"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBlFJmW4JCrI-bjuEHJOa4nxouyUgo5fiwUhaCo3AZEUedr5vx5iROde2kP46yvqlGCDP0ppP1uY_Ar3L67QE6QsaPtx81P_bJtrg0D3v92dsTkD2sPrWe6_eYobV2IcxtKw53fz-FG73ZRZyFiREkeYsT7jmFs1dX5kkoFzGmbxYphvJGpnW2V67vc3zP5UZWNcq6WidtCQt7I1JtUxE_LdqcRVTJuxAtDo6drD8GOZFqTBhh-v7w5MinzODSAORUG07BC1ajefObC"
          />
        </div>
      </div>

      <!-- Bento Block 2 -->
      <div class="bento-side">
        <div class="bento-philosophy">
          <span class="material-symbols-outlined philosophy-icon"
            >lightbulb</span
          >
          <h4 class="philosophy-title">Philosophy</h4>
          <p class="philosophy-text">
            I believe in the power of negative space. By removing the
            unnecessary, we allow the essential to speak with authority and
            clarity.
          </p>
        </div>
        <div class="bento-expertise">
          <span class="expertise-label">Expertise</span>
          <ul class="expertise-list">
            <li class="expertise-item">
              <span class="expertise-dot"></span> Brand Identity
            </li>
            <li class="expertise-item">
              <span class="expertise-dot"></span> Editorial Design
            </li>
            <li class="expertise-item">
              <span class="expertise-dot"></span> Digital Architecture
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>
```

```css
/* =====================
         CONTENT SECTION
         ===================== */
.content-section {
  background-color: #f0f4f7;
  padding: 8rem 3rem;
  overflow: hidden;
}

.content-container {
  max-width: 1536px;
  margin: 0 auto;
}

.content-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
}

.bento-main {
  background-color: #ffffff;
  padding: 3rem;
  border-radius: 2rem;
  box-shadow: 0 20px 40px rgba(82, 92, 140, 0.06);
}

.bento-label {
  color: #818cf8;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 1rem;
  display: block;
}

.bento-title {
  font-size: 1.875rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: #2c3437;
}

.bento-img-wrapper {
  aspect-ratio: 16 / 9;
  width: 100%;
  border-radius: 1rem;
  overflow: hidden;
  margin-bottom: 1.5rem;
}

.bento-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 700ms;
}

.bento-main:hover .bento-img {
  transform: scale(1.05);
}

.bento-side {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

.bento-philosophy {
  background-color: #525c8c;
  padding: 3rem;
  border-radius: 2rem;
  color: #faf8ff;
}

.philosophy-icon {
  font-size: 2.25rem;
  margin-bottom: 1.5rem;
  display: block;
}

.philosophy-title {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

.philosophy-text {
  opacity: 0.9;
  line-height: 1.625;
  font-size: 0.875rem;
}

.bento-expertise {
  background-color: #e3e9ed;
  padding: 3rem;
  border-radius: 2rem;
}

.expertise-label {
  color: #6f557d;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 1rem;
  display: block;
}

.expertise-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.expertise-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-weight: 500;
  font-size: 0.875rem;
  color: #596064;
}

.expertise-item + .expertise-item {
  margin-top: 1rem;
}

.expertise-dot {
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 9999px;
  background-color: #6f557d;
  flex-shrink: 0;
}
```

```html
<!-- Footer -->
<footer class="footer">
  <div class="footer-inner">
    <p class="footer-copy">
      © 2024 Ethereal Professional. All rights reserved.
    </p>
    <div class="footer-links">
      <a class="footer-link" href="#">Privacy</a>
      <a class="footer-link" href="#">Terms</a>
      <a class="footer-link" href="#">LinkedIn</a>
    </div>
  </div>
</footer>
```

```css
/* =====================
         FOOTER
         ===================== */
.footer {
  width: 100%;
  padding: 3rem 0;
  background: transparent;
}

.footer-inner {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 0 3rem;
  gap: 1rem;
  max-width: 1536px;
  margin: 0 auto;
}

.footer-copy {
  font-size: 0.75rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #94a3b8;
}

.footer-links {
  display: flex;
  gap: 2rem;
  align-items: center;
}

.footer-link {
  font-size: 0.75rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #94a3b8;
  text-decoration: none;
  transition:
    color 300ms,
    opacity 300ms;
  opacity: 0.8;
}

.footer-link:hover {
  color: #818cf8;
  opacity: 1;
}
```
