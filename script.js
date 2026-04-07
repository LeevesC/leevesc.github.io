document.addEventListener('DOMContentLoaded', () => {

  /* =====================
     MOBILE NAV TOGGLE
     ===================== */
  const navMenuBtn = document.querySelector('.nav-menu-btn');
  const navLinks = document.querySelector('.nav-links');
  const menuIcon = navMenuBtn.querySelector('.material-symbols-outlined');

  navMenuBtn.addEventListener('click', () => {
    const isOpen = navLinks.dataset.open === 'true';

    if (isOpen) {
      navLinks.dataset.open = 'false';
      menuIcon.textContent = 'menu';
      Object.assign(navLinks.style, {
        display: '',
        flexDirection: '',
        position: '',
        top: '',
        left: '',
        right: '',
        padding: '',
        background: '',
        backdropFilter: '',
        webkitBackdropFilter: '',
        boxShadow: '',
        gap: '',
      });
    } else {
      navLinks.dataset.open = 'true';
      menuIcon.textContent = 'close';
      Object.assign(navLinks.style, {
        display: 'flex',
        flexDirection: 'column',
        position: 'absolute',
        top: '100%',
        left: '0',
        right: '0',
        padding: '1.5rem 3rem',
        background: 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(64px)',
        webkitBackdropFilter: 'blur(64px)',
        boxShadow: '0 20px 40px rgba(82, 92, 140, 0.06)',
        gap: '1.25rem',
      });
    }
  });

  // Close menu and reset icon when viewport expands past mobile breakpoint
  window.addEventListener('resize', () => {
    if (window.innerWidth >= 768) {
      navLinks.dataset.open = 'false';
      menuIcon.textContent = 'menu';
      navLinks.style.cssText = '';
    }
  });


  /* =====================
     SCROLL INDICATOR ANIMATION
     ===================== */
  const scrollLineFill = document.querySelector('.scroll-line-fill');

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
    scrollLineFill.style.top = topPercent + '%';

    requestAnimationFrame(animateScrollLine);
  }

  requestAnimationFrame(animateScrollLine);


  /* =====================
     HERO BLOB ANIMATIONS
     ===================== */

  // Each blob drifts with its own speed, amplitude and phase offset so they
  // never move in sync, producing an organic, lava-lamp-like feel.
  const blobs = [
    {
      el: document.querySelector('.hero-blob-1'),
      speedX: 0.00018, ampX: 38,  phaseX: 0,
      speedY: 0.00013, ampY: 28,  phaseY: 1.2,
      speedS: 0.00010, ampS: 0.06, phaseS: 0.5,  // subtle scale pulse
    },
    {
      el: document.querySelector('.hero-blob-2'),
      speedX: 0.00014, ampX: 30,  phaseX: 2.1,
      speedY: 0.00020, ampY: 40,  phaseY: 0.4,
      speedS: 0.00012, ampS: 0.07, phaseS: 1.8,
    },
    {
      el: document.querySelector('.hero-blob-3'),
      speedX: 0.00022, ampX: 45,  phaseX: 1.0,
      speedY: 0.00016, ampY: 32,  phaseY: 2.5,
      speedS: 0.00009, ampS: 0.05, phaseS: 3.1,
    },
  ];

  function animateBlobs(timestamp) {
    for (const blob of blobs) {
      const tx = Math.sin(timestamp * blob.speedX + blob.phaseX) * blob.ampX;
      const ty = Math.cos(timestamp * blob.speedY + blob.phaseY) * blob.ampY;
      const scale = 1 + Math.sin(timestamp * blob.speedS + blob.phaseS) * blob.ampS;
      blob.el.style.transform = `translate(${tx}px, ${ty}px) scale(${scale})`;
    }
    requestAnimationFrame(animateBlobs);
  }

  requestAnimationFrame(animateBlobs);

});
