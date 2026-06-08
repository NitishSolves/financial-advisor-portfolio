/**
 * faq.js
 * Handles: FAQ accordion expand/collapse with smooth animation,
 * keyboard accessibility, ARIA state management, single-open mode
 */

(function () {
  'use strict';

  const faqItems = document.querySelectorAll('.faq-item');
  if (!faqItems.length) return;

  /**
   * Open a single FAQ item
   */
  function openItem(item) {
    const btn    = item.querySelector('.faq-item__question');
    const answer = item.querySelector('.faq-item__answer');
    const inner  = item.querySelector('.faq-item__answer-inner');

    if (!btn || !answer) return;

    item.classList.add('open');
    btn.setAttribute('aria-expanded', 'true');
    answer.setAttribute('aria-hidden', 'false');

    // Set exact height for smooth animation
    answer.style.maxHeight = inner.scrollHeight + 'px';
  }

  /**
   * Close a single FAQ item
   */
  function closeItem(item) {
    const btn    = item.querySelector('.faq-item__question');
    const answer = item.querySelector('.faq-item__answer');

    if (!btn || !answer) return;

    item.classList.remove('open');
    btn.setAttribute('aria-expanded', 'false');
    answer.setAttribute('aria-hidden', 'true');
    answer.style.maxHeight = '0';
  }

  /**
   * Toggle an item (close all others first — accordion mode)
   */
  function toggleItem(item) {
    const isOpen = item.classList.contains('open');

    // Close all
    faqItems.forEach((other) => {
      if (other !== item) closeItem(other);
    });

    // Toggle clicked
    if (isOpen) {
      closeItem(item);
    } else {
      openItem(item);
    }
  }

  /* ── Event Listeners ────────────────────────────────────────── */
  faqItems.forEach((item, index) => {
    const btn    = item.querySelector('.faq-item__question');
    const answer = item.querySelector('.faq-item__answer');

    if (!btn) return;

    // Set initial ARIA attributes
    btn.setAttribute('aria-expanded', 'false');
    btn.setAttribute('aria-controls', `faq-answer-${index}`);

    if (answer) {
      answer.setAttribute('id', `faq-answer-${index}`);
      answer.setAttribute('aria-hidden', 'true');
      answer.style.maxHeight = '0';
    }

    // Click handler
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      toggleItem(item);
    });

    // Keyboard: Space / Enter
    btn.addEventListener('keydown', (e) => {
      if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        toggleItem(item);
      }
      // Arrow keys for navigation between FAQ items
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        const next = faqItems[index + 1];
        if (next) next.querySelector('.faq-item__question').focus();
      }
      if (e.key === 'ArrowUp') {
        e.preventDefault();
        const prev = faqItems[index - 1];
        if (prev) prev.querySelector('.faq-item__question').focus();
      }
    });
  });

  /* ── Open first item by default (optional) ──────────────────── */
  // Uncomment to open the first FAQ item on page load:
  // if (faqItems[0]) openItem(faqItems[0]);

})();
