// ─────────────────────────────────────────
// Programs Page — programs.js
// Highlights the active anchor pill as the
// user scrolls through each program section
// ─────────────────────────────────────────

document.addEventListener('DOMContentLoaded', function () {
  const anchorLinks = document.querySelectorAll('.pp-anchor-link');
  const programSections = document.querySelectorAll('.pp-program[id]');

  if (!anchorLinks.length || !programSections.length) return;

  // ── Smooth scroll for anchor links ──
  anchorLinks.forEach((link) => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (!target) return;

      // Account for fixed header + anchor bar height
      const headerH =
        parseInt(
          getComputedStyle(document.documentElement).getPropertyValue(
            '--header-h',
          ),
        ) || 126;
      const anchorBarH =
        document.getElementById('ppAnchorBar')?.offsetHeight || 56;
      const offset = headerH + anchorBarH + 8;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;

      window.scrollTo({ top, behavior: 'smooth' });
    });
  });

  // ── Intersection Observer to highlight active pill ──
  const observerOptions = {
    root: null,
    // Fire when section reaches ~20% from top of viewport
    rootMargin: `-${(parseInt(getComputedStyle(document.documentElement).getPropertyValue('--header-h')) || 126) + 60}px 0px -60% 0px`,
    threshold: 0,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      const id = entry.target.getAttribute('id');
      const link = document.querySelector(`.pp-anchor-link[href="#${id}"]`);
      if (!link) return;

      // Remove active from all
      anchorLinks.forEach((l) => l.classList.remove('is-active'));
      // Add to current
      link.classList.add('is-active');

      // Scroll the anchor bar so the active pill is visible
      link.scrollIntoView({
        block: 'nearest',
        inline: 'center',
        behavior: 'smooth',
      });
    });
  }, observerOptions);

  programSections.forEach((section) => observer.observe(section));
});
