// ─────────────────────────────────────────
// Gallery Page — gallery.js
// Filter · Load More · Lightbox · Swipe
// ─────────────────────────────────────────

document.addEventListener('DOMContentLoaded', function () {
  const ITEMS_PER_PAGE = 9; // how many photos show initially

  // ── Elements ──
  const grid = document.getElementById('gpGrid');
  const filterBtns = document.querySelectorAll('.gp-filter-btn');
  const loadMoreBtn = document.getElementById('gpLoadMore');
  const loadMoreWrap = document.getElementById('gpLoadMoreWrap');
  const noResults = document.getElementById('gpNoResults');
  const lightbox = document.getElementById('gpLightbox');
  const lbImg = document.getElementById('gpLbImg');
  const lbCategory = document.getElementById('gpLbCategory');
  const lbCaption = document.getElementById('gpLbCaption');
  const lbCounter = document.getElementById('gpLbCounter');
  const lbClose = document.getElementById('gpLbClose');
  const lbPrev = document.getElementById('gpLbPrev');
  const lbNext = document.getElementById('gpLbNext');

  // All photo items
  const allItems = Array.from(grid.querySelectorAll('.gp-item'));

  let activeFilter = 'all';
  let visibleItems = []; // items matching current filter
  let shownCount = 0; // how many are currently shown
  let lightboxIndex = 0; // current photo in lightbox

  // ─────────────────────────────────────────
  // FILTER
  // ─────────────────────────────────────────
  function applyFilter(filter) {
    activeFilter = filter;
    shownCount = 0;

    // Hide all first
    allItems.forEach((item) => {
      item.hidden = true;
      item.classList.remove('gp-hidden-more');
    });

    // Build visible list
    visibleItems = allItems.filter(
      (item) => filter === 'all' || item.dataset.category === filter,
    );

    if (visibleItems.length === 0) {
      noResults.hidden = false;
      loadMoreWrap.hidden = true;
      return;
    }

    noResults.hidden = true;
    showBatch();
  }

  function showBatch() {
    const nextBatch = visibleItems.slice(
      shownCount,
      shownCount + ITEMS_PER_PAGE,
    );
    nextBatch.forEach((item) => {
      item.hidden = false;
      item.classList.remove('gp-hidden-more');
    });
    shownCount += nextBatch.length;

    // Show/hide load more
    loadMoreWrap.hidden = shownCount >= visibleItems.length;
  }

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterBtns.forEach((b) => b.classList.remove('is-active'));
      btn.classList.add('is-active');
      applyFilter(btn.dataset.filter);
    });
  });

  loadMoreBtn.addEventListener('click', showBatch);

  // ─────────────────────────────────────────
  // LIGHTBOX
  // ─────────────────────────────────────────
  function openLightbox(index) {
    lightboxIndex = index;
    updateLightbox();
    lightbox.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightbox.classList.remove('is-open');
    document.body.style.overflow = '';
  }

  function updateLightbox() {
    const item = visibleItems[lightboxIndex];
    const img = item.querySelector('.gp-img');
    const label = item.querySelector('.gp-item-label');
    const caption = item.dataset.caption || '';

    lbImg.src = img.src;
    lbImg.alt = img.alt;
    lbCategory.textContent = label ? label.textContent : '';
    lbCaption.textContent = caption;
    lbCounter.textContent = `${lightboxIndex + 1} / ${visibleItems.length}`;

    // Show/hide arrows at ends
    lbPrev.style.opacity = lightboxIndex === 0 ? '0.3' : '1';
    lbNext.style.opacity =
      lightboxIndex === visibleItems.length - 1 ? '0.3' : '1';
  }

  function prevPhoto() {
    if (lightboxIndex > 0) {
      lightboxIndex--;
      updateLightbox();
    }
  }

  function nextPhoto() {
    if (lightboxIndex < visibleItems.length - 1) {
      lightboxIndex++;
      updateLightbox();
    }
  }

  // Open on photo click — only visible items are clickable
  grid.addEventListener('click', (e) => {
    const item = e.target.closest('.gp-item');
    if (!item || item.hidden) return;

    // Find index in visibleItems
    const idx = visibleItems.indexOf(item);
    if (idx === -1) return;
    openLightbox(idx);
  });

  lbClose.addEventListener('click', closeLightbox);
  lbPrev.addEventListener('click', prevPhoto);
  lbNext.addEventListener('click', nextPhoto);

  // Click outside photo to close
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('is-open')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') prevPhoto();
    if (e.key === 'ArrowRight') nextPhoto();
  });

  // ─────────────────────────────────────────
  // TOUCH SWIPE (lightbox on mobile)
  // ─────────────────────────────────────────
  let touchStartX = 0;

  lightbox.addEventListener(
    'touchstart',
    (e) => {
      touchStartX = e.touches[0].clientX;
    },
    { passive: true },
  );

  lightbox.addEventListener('touchend', (e) => {
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      diff > 0 ? nextPhoto() : prevPhoto();
    }
  });

  // ─────────────────────────────────────────
  // INIT — show first batch
  // ─────────────────────────────────────────
  applyFilter('all');
});
