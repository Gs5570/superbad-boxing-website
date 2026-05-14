// ─────────────────────────────────────────
// Contact form — basic validation + feedback
// ─────────────────────────────────────────

document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contactForm');
  const feedback = document.getElementById('formFeedback');

  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = form.fullName.value.trim();
    const email = form.email.value.trim();
    const subject = form.subject.value.trim();
    const message = form.message.value.trim();

    // Basic validation
    if (!name || !email || !subject || !message) {
      showFeedback('Please fill in all required fields.', 'error');
      return;
    }

    if (!isValidEmail(email)) {
      showFeedback('Please enter a valid email address.', 'error');
      return;
    }

    // ── Replace this block with your real form submission (EmailJS, Formspree, etc.) ──
    // For now we simulate a successful send
    showFeedback('Message sent! We will get back to you shortly.', 'success');
    form.reset();
  });

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function showFeedback(message, type) {
    feedback.textContent = message;
    feedback.className = `cu-form-feedback ${type}`;
    feedback.hidden = false;

    // Auto-hide after 6 seconds
    setTimeout(() => {
      feedback.hidden = true;
    }, 6000);
  }
});
