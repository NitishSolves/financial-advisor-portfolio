/**
 * contact.js
 * Handles: contact form validation, submission flow,
 * WhatsApp message construction, success/error states
 */

(function () {
  'use strict';

  const form = document.getElementById('contactForm');
  if (!form) return;

  /* ── Field references ───────────────────────────────────────── */
  const nameField    = form.querySelector('[name="fullname"]');
  const phoneField   = form.querySelector('[name="phone"]');
  const emailField   = form.querySelector('[name="email"]');
  const serviceField = form.querySelector('[name="service"]');
  const messageField = form.querySelector('[name="message"]');
  const submitBtn    = form.querySelector('.form-submit-btn');
  const formSuccess  = document.getElementById('formSuccess');
  const formBody     = document.getElementById('formBody');

  /* ── Validation rules ───────────────────────────────────────── */
  const validators = {
    fullname: {
      validate: (v) => v.trim().length >= 2,
      message: 'Please enter your full name (at least 2 characters).',
    },
    phone: {
      validate: (v) => /^[6-9]\d{9}$/.test(v.replace(/[\s\-\+]/g, '')),
      message: 'Please enter a valid 10-digit Indian mobile number.',
    },
    email: {
      validate: (v) => v === '' || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v),
      message: 'Please enter a valid email address.',
    },
    message: {
      validate: (v) => v.trim().length >= 10,
      message: 'Please describe your query (at least 10 characters).',
    },
  };

  /* ── Helpers ────────────────────────────────────────────────── */
  function getGroup(field) {
    return field ? field.closest('.form-group') : null;
  }

  function showError(field, msg) {
    const group = getGroup(field);
    if (!group) return;
    group.classList.add('has-error');
    const errEl = group.querySelector('.form-group__error');
    if (errEl) errEl.textContent = msg;
  }

  function clearError(field) {
    const group = getGroup(field);
    if (!group) return;
    group.classList.remove('has-error');
    const errEl = group.querySelector('.form-group__error');
    if (errEl) errEl.textContent = '';
  }

  function validateField(field) {
    if (!field) return true;
    const name  = field.getAttribute('name');
    const value = field.value;
    const rule  = validators[name];

    if (!rule) return true;

    clearError(field);
    if (!rule.validate(value)) {
      showError(field, rule.message);
      return false;
    }
    return true;
  }

  /* ── Live validation on blur ────────────────────────────────── */
  [nameField, phoneField, emailField, messageField].forEach((field) => {
    if (!field) return;
    field.addEventListener('blur', () => validateField(field));
    field.addEventListener('input', () => {
      if (getGroup(field).classList.contains('has-error')) {
        validateField(field);
      }
    });
  });

  /* ── Phone: auto-format ─────────────────────────────────────── */
  if (phoneField) {
    phoneField.addEventListener('input', (e) => {
      // Strip non-digits then limit to 10
      let val = e.target.value.replace(/\D/g, '').slice(0, 10);
      e.target.value = val;
    });
  }

  /* ── Full form validation ───────────────────────────────────── */
  function validateAll() {
    const results = [
      validateField(nameField),
      validateField(phoneField),
      validateField(emailField),
      validateField(messageField),
    ];
    return results.every(Boolean);
  }

  /* ── Build WhatsApp message ─────────────────────────────────── */
  function buildWhatsAppMessage() {
    const name    = nameField ? nameField.value.trim() : '';
    const phone   = phoneField ? phoneField.value.trim() : '';
    const email   = emailField ? emailField.value.trim() : '';
    const service = serviceField ? serviceField.options[serviceField.selectedIndex].text : '';
    const msg     = messageField ? messageField.value.trim() : '';

    const lines = [
      `Hello Rajesh ji,`,
      ``,
      `I would like to inquire about your services.`,
      ``,
      `*Name:* ${name}`,
      `*Phone:* ${phone}`,
      email ? `*Email:* ${email}` : null,
      service && service !== 'Select a service' ? `*Service Interest:* ${service}` : null,
      ``,
      `*Message:*`,
      msg,
    ].filter((line) => line !== null);

    return encodeURIComponent(lines.join('\n'));
  }

  /* ── Loading state ──────────────────────────────────────────── */
  function setLoading(loading) {
    if (!submitBtn) return;
    submitBtn.disabled = loading;
    if (loading) {
      submitBtn.innerHTML = `
        <svg class="spin" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true">
          <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" opacity="0.2"/>
          <path d="M21 12a9 9 0 00-9-9" stroke-linecap="round"/>
        </svg>
        Sending...
      `;
      submitBtn.style.opacity = '0.8';
    } else {
      submitBtn.innerHTML = `<i class="fa-solid fa-paper-plane" aria-hidden="true"></i> Send Message`;
      submitBtn.style.opacity = '';
    }
  }

  /* ── Show success ───────────────────────────────────────────── */
  function showSuccess() {
    if (formBody) formBody.style.display = 'none';
    if (formSuccess) {
      formSuccess.style.display = 'flex';
    }
  }

  /* ── Form submit ────────────────────────────────────────────── */
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (!validateAll()) {
      // Focus first error
      const firstError = form.querySelector('.has-error input, .has-error textarea, .has-error select');
      if (firstError) firstError.focus();
      return;
    }

    setLoading(true);

    // Simulate async (replace with real endpoint if backend added later)
    setTimeout(() => {
      setLoading(false);

      // Construct WhatsApp link and open in new tab
      const waMsg  = buildWhatsAppMessage();
      const waLink = `https://wa.me/919876543210?text=${waMsg}`;
      window.open(waLink, '_blank', 'noopener,noreferrer');

      // Show success UI
      showSuccess();

      // Reset form
      form.reset();
    }, 1200);
  });

  /* ── Inject CSS for spinner ─────────────────────────────────── */
  const spinStyle = document.createElement('style');
  spinStyle.textContent = `
    @keyframes spin {
      from { transform: rotate(0deg); }
      to   { transform: rotate(360deg); }
    }
    .spin { animation: spin 0.8s linear infinite; }
  `;
  document.head.appendChild(spinStyle);

})();
