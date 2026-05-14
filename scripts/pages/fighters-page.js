document.addEventListener('DOMContentLoaded', function () {
  // ─────────────────────────────────────────
  // Fighter data — replace with real info
  // ─────────────────────────────────────────
  const fighters = {
    tony: {
      name: 'Tony Harrison',
      category: 'professional',
      weight: 'Super Welterweight · 154 lb',
      img: '../Media/logo.png',
      record: { win: 20, loss: 3, draw: 0, ko: 14 },
      bio: 'Tony "SuperBad" Harrison is a Detroit-born WBC Super Welterweight Champion. Known for sharp counterpunching and ring intelligence, Tony has competed at the highest levels of professional boxing and now brings that experience back to the community that raised him.',
      info: [
        { label: 'Stance', value: 'Orthodox' },
        { label: 'Height', value: '6\'1" / 185cm' },
        { label: 'Reach', value: '74" / 188cm' },
        { label: 'Nationality', value: 'American' },
        { label: 'Hometown', value: 'Detroit, MI' },
        { label: 'Career', value: '2012 – Present' },
      ],
      socials: [
        { icon: 'fa-brands fa-square-facebook', label: 'Facebook', href: '#' },
        {
          icon: 'fa-brands fa-square-instagram',
          label: 'Instagram',
          href: '#',
        },
        { icon: 'fa-brands fa-square-twitter', label: 'Twitter', href: '#' },
      ],
    },
    lj: {
      name: 'L.J. Harrison',
      category: 'professional',
      weight: 'Welterweight · 147 lb',
      img: '../Media/logo.png',
      record: { win: 14, loss: 1, draw: 0, ko: 8 },
      bio: 'L.J. Harrison is a Detroit-bred professional welterweight with a relentless pressure style. Co-founder of SuperBad Boxing Gym, L.J. leads by example both inside and outside the ring, combining elite footwork with calculated aggression.',
      info: [
        { label: 'Stance', value: 'Southpaw' },
        { label: 'Height', value: '5\'11" / 180cm' },
        { label: 'Reach', value: '72" / 183cm' },
        { label: 'Nationality', value: 'American' },
        { label: 'Hometown', value: 'Detroit, MI' },
        { label: 'Career', value: '2014 – Present' },
      ],
      socials: [
        { icon: 'fa-brands fa-square-facebook', label: 'Facebook', href: '#' },
        {
          icon: 'fa-brands fa-square-instagram',
          label: 'Instagram',
          href: '#',
        },
      ],
    },
    marcus: {
      name: 'Marcus Webb',
      category: 'amateur',
      weight: 'Middleweight · 160 lb',
      img: '../Media/logo.png',
      record: { win: 8, loss: 2, draw: 1, ko: 4 },
      bio: "Marcus Webb is one of SuperBad's most promising amateur middleweights. His combination of boxing skill and elite conditioning makes him a physically imposing and technically sound competitor.",
      info: [
        { label: 'Stance', value: 'Orthodox' },
        { label: 'Height', value: '6\'0" / 183cm' },
        { label: 'Reach', value: '73" / 185cm' },
        { label: 'Nationality', value: 'American' },
        { label: 'Hometown', value: 'Detroit, MI' },
        { label: 'Career', value: '2020 – Present' },
      ],
      socials: [
        {
          icon: 'fa-brands fa-square-instagram',
          label: 'Instagram',
          href: '#',
        },
      ],
    },
    diana: {
      name: 'Diana Cruz',
      category: 'amateur',
      weight: 'Lightweight · 135 lb',
      img: '../Media/logo.png',
      record: { win: 6, loss: 0, draw: 0, ko: 2 },
      bio: 'Diana Cruz is an undefeated amateur lightweight with exceptional speed and technical precision. A Detroit native, she is quickly building a name in the Michigan amateur circuit with her disciplined, intelligent style.',
      info: [
        { label: 'Stance', value: 'Orthodox' },
        { label: 'Height', value: '5\'6" / 168cm' },
        { label: 'Reach', value: '67" / 170cm' },
        { label: 'Nationality', value: 'American' },
        { label: 'Hometown', value: 'Detroit, MI' },
        { label: 'Career', value: '2022 – Present' },
      ],
      socials: [
        { icon: 'fa-brands fa-square-facebook', label: 'Facebook', href: '#' },
        {
          icon: 'fa-brands fa-square-instagram',
          label: 'Instagram',
          href: '#',
        },
      ],
    },
    jaylen: {
      name: 'Jaylen Brooks',
      category: 'youth',
      weight: 'Junior Lightweight · Age 16',
      img: '../Media/logo.png',
      record: { win: 4, loss: 1, draw: 0, ko: 2 },
      bio: "Jaylen Brooks joined SuperBad at age 13 and has quickly risen to become one of Detroit's top youth prospects. Disciplined, coachable, and hungry, Jaylen is building the foundation for a promising future in the sport.",
      info: [
        { label: 'Stance', value: 'Orthodox' },
        { label: 'Height', value: '5\'8" / 173cm' },
        { label: 'Age', value: '16' },
        { label: 'Nationality', value: 'American' },
        { label: 'Hometown', value: 'Detroit, MI' },
        { label: 'Career', value: '2023 – Present' },
        { label: 'School', value: 'Rochester Hills Christian School' },
        { label: 'Grade', value: 'High school' },
      ],
      socials: [
        {
          icon: 'fa-brands fa-square-instagram',
          label: 'Instagram',
          href: '#',
        },
      ],
    },
    keisha: {
      name: 'Keisha Moore',
      category: 'youth',
      weight: 'Flyweight · Age 15',
      img: '../Media/logo.png',
      record: { win: 3, loss: 0, draw: 0, ko: 1 },
      bio: 'Keisha Moore is an undefeated youth flyweight with exceptional speed and ring awareness. She began training at SuperBad at 13 and has already captured regional attention with her technical, composed style.',
      info: [
        { label: 'Stance', value: 'Southpaw' },
        { label: 'Height', value: '5\'3" / 160cm' },
        { label: 'Age', value: '15' },
        { label: 'Nationality', value: 'American' },
        { label: 'Hometown', value: 'Detroit, MI' },
        { label: 'Career', value: '2024 – Present' },
      ],
      socials: [
        {
          icon: 'fa-brands fa-square-instagram',
          label: 'Instagram',
          href: '#',
        },
      ],
    },
  };

  const badgeStyles = {
    professional: { cls: 'fp-badge--pro', text: 'Professional' },
    amateur: { cls: 'fp-badge--am', text: 'Amateur' },
    youth: { cls: 'fp-badge--youth', text: 'Youth' },
  };

  // ─────────────────────────────────────────
  // Modal
  // ─────────────────────────────────────────
  const backdrop = document.getElementById('fighterModal');
  const modalClose = document.getElementById('fpModalClose');
  const modalImg = document.getElementById('fpModalImg');
  const modalBadge = document.getElementById('fpModalBadge');
  const modalName = document.getElementById('modalFighterName');
  const modalWeight = document.getElementById('fpModalWeight');
  const modalStats = document.getElementById('fpModalStats');
  const modalBio = document.getElementById('fpModalBio');
  const modalInfo = document.getElementById('fpModalInfoGrid');
  const modalSocials = document.getElementById('fpModalSocials');
  // Note: modal footer (book a session) removed — weight/age info now only in modal

  function openModal(key) {
    const f = fighters[key];
    if (!f) return;
    const badge = badgeStyles[f.category];
    modalImg.src = f.img;
    modalImg.alt = f.name;
    modalBadge.textContent = badge.text;
    modalBadge.className = `fp-modal-badge ${badge.cls}`;
    modalName.textContent = f.name;
    modalWeight.textContent = f.weight;
    modalBio.textContent = f.bio;

    const r = f.record;
    modalStats.innerHTML = `
      <div class="fp-modal-stat"><span class="fp-modal-stat-value win">${r.win}</span><span class="fp-modal-stat-label">Wins</span></div>
      <div class="fp-modal-stat"><span class="fp-modal-stat-value loss">${r.loss}</span><span class="fp-modal-stat-label">Losses</span></div>
      <div class="fp-modal-stat"><span class="fp-modal-stat-value draw">${r.draw}</span><span class="fp-modal-stat-label">Draws</span></div>
      <div class="fp-modal-stat"><span class="fp-modal-stat-value">${r.ko}</span><span class="fp-modal-stat-label">KOs</span></div>
    `;

    modalInfo.innerHTML = f.info
      .map(
        (i) =>
          `<div class="fp-modal-info-item"><span class="fp-modal-info-label">${i.label}</span><span class="fp-modal-info-value">${i.value}</span></div>`,
      )
      .join('');

    modalSocials.innerHTML = f.socials
      .map(
        (s) =>
          `<a href="${s.href}" aria-label="${s.label}"><i class="${s.icon}" aria-hidden="true"></i> ${s.label}</a>`,
      )
      .join('');

    backdrop.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    backdrop.classList.remove('is-open');
    document.body.style.overflow = '';
  }

  document.querySelectorAll('.fp-details-btn').forEach((btn) => {
    btn.addEventListener('click', () => openModal(btn.dataset.fighter));
  });
  modalClose.addEventListener('click', closeModal);
  backdrop.addEventListener('click', (e) => {
    if (e.target === backdrop) closeModal();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });

  // ─────────────────────────────────────────
  // Filter + Search
  // ─────────────────────────────────────────
  const filterBtns = document.querySelectorAll('.fp-filter-btn');
  const cards = Array.from(document.querySelectorAll('.fp-card'));
  const noResults = document.getElementById('fpNoResults');
  let activeFilter = 'all';
  let searchTerm = '';

  function applyFilters() {
    let visible = 0;
    cards.forEach((card) => {
      const matchCat =
        activeFilter === 'all' || card.dataset.category === activeFilter;
      const matchSrc = card
        .querySelector('.fp-card-name')
        .textContent.toLowerCase()
        .includes(searchTerm);
      const show = matchCat && matchSrc;
      card.hidden = !show;
      if (show) visible++;
    });
    noResults.hidden = visible > 0;
  }

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterBtns.forEach((b) => b.classList.remove('is-active'));
      btn.classList.add('is-active');
      activeFilter = btn.dataset.filter;
      applyFilters();
    });
  });

  document.getElementById('fpSearch').addEventListener('input', (e) => {
    searchTerm = e.target.value.toLowerCase().trim();
    applyFilters();
  });
}); // end DOMContentLoaded
