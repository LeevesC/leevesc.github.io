document.addEventListener("DOMContentLoaded", () => {
  /* =====================
     MOBILE NAV TOGGLE
     ===================== */
  const navMenuBtn = document.querySelector(".nav-menu-btn");
  const navLinks = document.querySelector(".nav-links");
  const menuIcon = navMenuBtn.querySelector(".material-symbols-outlined");

  navMenuBtn.addEventListener("click", () => {
    const isOpen = navLinks.dataset.open === "true";

    if (isOpen) {
      navLinks.dataset.open = "false";
      menuIcon.textContent = "menu";
      Object.assign(navLinks.style, {
        display: "",
        flexDirection: "",
        position: "",
        top: "",
        left: "",
        right: "",
        padding: "",
        background: "",
        backdropFilter: "",
        webkitBackdropFilter: "",
        boxShadow: "",
        gap: "",
      });
    } else {
      navLinks.dataset.open = "true";
      menuIcon.textContent = "close";
      Object.assign(navLinks.style, {
        display: "flex",
        flexDirection: "column",
        position: "absolute",
        top: "100%",
        left: "0",
        right: "0",
        padding: "1.5rem 3rem",
        background: "rgba(255, 255, 255, 0.95)",
        backdropFilter: "blur(64px)",
        webkitBackdropFilter: "blur(64px)",
        boxShadow: "0 20px 40px rgba(82, 92, 140, 0.06)",
        gap: "1.25rem",
      });
    }
  });

  // Close menu and reset icon when viewport expands past mobile breakpoint
  window.addEventListener("resize", () => {
    if (window.innerWidth >= 768) {
      navLinks.dataset.open = "false";
      menuIcon.textContent = "menu";
      navLinks.style.cssText = "";
    }
  });

  /* =====================
     HERO BLOB ANIMATIONS
     ===================== */

  // Each blob drifts with its own speed, amplitude and phase offset so they
  // never move in sync, producing an organic, lava-lamp-like feel.

  requestAnimationFrame(animateBlobs);
});
