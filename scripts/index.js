// ─────────────────────────────────────────
// Carousel arrow navigation
// ─────────────────────────────────────────

const inputs = Array.from(
  document.querySelectorAll('.carousel input[type="radio"]'),
);

if (inputs.length) {
  const carousel = document.querySelector('.carousel');

  // SVG paths for arrows
  const leftSVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path d="M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z"/></svg>`;
  const rightSVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"/></svg>`;

  // Create arrow buttons
  const prev = document.createElement('button');
  prev.className = 'carousel-arrow prev';
  prev.setAttribute('aria-label', 'Previous slide');
  prev.innerHTML = leftSVG;

  const next = document.createElement('button');
  next.className = 'carousel-arrow next';
  next.setAttribute('aria-label', 'Next slide');
  next.innerHTML = rightSVG;

  // Insert into carousel
  carousel.appendChild(prev);
  carousel.appendChild(next);

  // Get current active index
  function getActiveIndex() {
    return inputs.findIndex((input) => input.checked);
  }

  // Infinite carousel — both arrows always visible
  function updateArrows() {
    prev.classList.remove('hidden');
    next.classList.remove('hidden');
  }

  // Navigate to a slide by index — wraps around for infinite loop
  function goTo(index) {
    const total = inputs.length;
    const wrapped = (index + total) % total; // wraps: -1 → last, last+1 → 0
    inputs[wrapped].checked = true;
    updateArrows();
  }

  // Arrow click handlers
  prev.addEventListener('click', () => goTo(getActiveIndex() - 1));
  next.addEventListener('click', () => goTo(getActiveIndex() + 1));

  // Also update arrows when dots are clicked directly
  inputs.forEach((input, i) => {
    input.addEventListener('change', updateArrows);
  });

  // Set initial state
  updateArrows();
}

// ─────────────────────────────────────────
// Highlight the active nav item based on
// the current page URL
// ─────────────────────────────────────────

const navLinks = document.querySelectorAll('.nav-items a');
const currentPage = window.location.pathname; // e.g. "/about.html"

navLinks.forEach((link) => {
  const linkPath = new URL(link.href).pathname;

  if (linkPath === currentPage) {
    link.classList.add('nav-active');
  }
});
