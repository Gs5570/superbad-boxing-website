// ─────────────────────────────────────────
// Coach profile data
// Replace placeholder content with real info
// img property reference the modal data
// ─────────────────────────────────────────

const coaches = {
  tony: {
    name: 'Tony Harrison',
    role: 'Head Coach & Co-Founder',
    tagline: 'Professional Fighter · WBC Champion',
    img: '/Media/tony-profile-img.webp', //modal image
    bio: 'Tony "SuperBad" Harrison is a Detroit-born professional boxer and WBC Super Welterweight Champion. After years competing at the highest level, Tony founded SuperBad Boxing Gym to give back to the Detroit community that shaped him. He leads with discipline, heart, and the same intensity that earned him a world title.',
    experience:
      'Over 15 years as a professional fighter. WBC Super Welterweight Champion. Competed in multiple world-level bouts. Trained under elite coaches throughout his career before establishing SuperBad as a championship-level training environment.',
    services: [
      'Technical boxing instruction',
      'Professional fight preparation',
      'One-on-one coaching sessions',
      'Mental toughness development',
      'Youth mentorship programs',
    ],
    hobbies:
      'Community outreach, motivational speaking, watching game film, and spending time with family in Detroit.',
    socials: [
      { icon: 'fa-brands fa-square-facebook', label: 'Facebook', href: '#' },
      { icon: 'fa-brands fa-square-instagram', label: 'Instagram', href: '#' },
      { icon: 'fa-brands fa-square-twitter', label: 'Twitter', href: '#' },
    ],
  },
  lj: {
    name: 'L.J. Harrison',
    role: 'Co-Founder & Trainer',
    tagline: 'Boxing Coach · Youth Mentor',
    img: '/Media/LJ-profile-img.png',
    bio: 'L.J. Harrison co-founded SuperBad Boxing Gym alongside his brother Tony to build a training home rooted in Detroit values. Known for his calm, methodical coaching style, L.J. specializes in developing fighters from the ground up — focusing on footwork, fundamentals, and fight IQ.',
    experience:
      'Over 10 years coaching amateur and professional fighters. Extensive background in youth development programs across Detroit. Certified USA Boxing coach with experience at the amateur and elite levels.',
    services: [
      'Boxing fundamentals & technique',
      'Amateur fight preparation',
      'Youth boxing programs',
      'Footwork & defensive coaching',
      'Group training sessions',
    ],
    hobbies:
      'Mentoring youth in the community, studying boxing history, and attending local amateur events.',
    socials: [
      { icon: 'fa-brands fa-square-facebook', label: 'Facebook', href: '#' },
      { icon: 'fa-brands fa-square-instagram', label: 'Instagram', href: '#' },
    ],
  },
  marcus: {
    name: 'Marcus Webb',
    role: 'Strength & Conditioning',
    tagline: 'S&C Specialist · NSCA Certified',
    img: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=400&q=80',
    bio: 'Marcus Webb brings championship-level strength and conditioning science to SuperBad. With a background in sports performance and a passion for boxing, Marcus designs programming that builds explosiveness, endurance, and resilience — the physical foundation every fighter needs.',
    experience:
      'NSCA Certified Strength & Conditioning Specialist (CSCS). 8+ years working with combat sports athletes. Former collegiate strength coach with a focus on power development and injury prevention.',
    services: [
      'Strength & conditioning programming',
      'Explosive power development',
      'Fight camp conditioning',
      'Injury prevention training',
      'Nutrition guidance',
    ],
    hobbies: 'Powerlifting, sports science research, hiking, and cooking.',
    socials: [
      { icon: 'fa-brands fa-square-instagram', label: 'Instagram', href: '#' },
    ],
  },
  diana: {
    name: 'Diana Cruz',
    role: 'Youth Development Coach',
    tagline: 'Youth Boxing · Community Leader',
    img: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?w=400&q=80',
    bio: "Diana Cruz is the heartbeat of SuperBad's youth programs. A lifelong Detroiter, Diana uses boxing as a tool to teach young people discipline, self-respect, and confidence. Her sessions are high-energy, structured, and built around personal growth as much as physical development.",
    experience:
      '6+ years coaching youth boxing programs. Background in education and child development. Certified USA Boxing youth coach. Passionate advocate for after-school athletic programs in Detroit.',
    services: [
      'Youth boxing fundamentals',
      'After-school training programs',
      'Discipline & character development',
      'Parent & youth workshops',
      'Community outreach sessions',
    ],
    hobbies:
      'Reading, community volunteering, attending youth sporting events, and dancing.',
    socials: [
      { icon: 'fa-brands fa-square-facebook', label: 'Facebook', href: '#' },
      { icon: 'fa-brands fa-square-instagram', label: 'Instagram', href: '#' },
    ],
  },
};

// ─────────────────────────────────────────
// Modal elements
// ─────────────────────────────────────────
const backdrop = document.getElementById('coachModal');
const modalClose = document.getElementById('modalClose');
const modalImg = document.getElementById('modalImg');
const modalRole = document.getElementById('modalRole');
const modalName = document.getElementById('modalCoachName');
const modalTag = document.getElementById('modalTagline');
const modalBio = document.getElementById('modalBio');
const modalExp = document.getElementById('modalExperience');
const modalSvcs = document.getElementById('modalServices');
const modalHob = document.getElementById('modalHobbies');
const modalSocs = document.getElementById('modalSocials');

// ─────────────────────────────────────────
// Open modal and populate with coach data
// ─────────────────────────────────────────
function openModal(coachKey) {
  const c = coaches[coachKey];
  if (!c) return;

  // Populate fields
  modalImg.src = c.img;
  modalImg.alt = c.name;
  modalRole.textContent = c.role;
  modalName.textContent = c.name;
  modalTag.textContent = c.tagline;
  modalBio.textContent = c.bio;
  modalExp.textContent = c.experience;
  modalHob.textContent = c.hobbies;

  // Services list
  modalSvcs.innerHTML = c.services.map((s) => `<li>${s}</li>`).join('');

  // Socials
  modalSocs.innerHTML = c.socials
    .map(
      (s) => `
      <a href="${s.href}" aria-label="${s.label}">
        <i class="${s.icon}" aria-hidden="true"></i> ${s.label}
      </a>
    `,
    )
    .join('');

  // Show modal
  backdrop.classList.add('is-open');
  document.body.style.overflow = 'hidden'; // prevent page scroll behind modal
}

// ─────────────────────────────────────────
// Close modal
// ─────────────────────────────────────────
function closeModal() {
  backdrop.classList.remove('is-open');
  document.body.style.overflow = '';
}

// ─────────────────────────────────────────
// Event listeners
// ─────────────────────────────────────────

// Details buttons on cards
document.querySelectorAll('.cp-details-btn').forEach((btn) => {
  btn.addEventListener('click', () => openModal(btn.dataset.coach));
});

// Close button
modalClose.addEventListener('click', closeModal);

// Click outside modal to close
backdrop.addEventListener('click', (e) => {
  if (e.target === backdrop) closeModal();
});

// Escape key to close
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});
