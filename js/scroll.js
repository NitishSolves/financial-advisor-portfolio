/**
 * scroll.js
 * Handles: smooth scrolling for all anchor links,
 * navbar offset correction, scroll-to-top on external page loads
 */

(function () {
  'use strict';

  /* ── Smooth scroll for same-page anchor links ───────────────── */
  const NAVBAR_HEIGHT = 80; // px — matches max navbar height

  function getNavbarOffset() {
    const nav = document.getElementById('navbar');
    return nav ? nav.offsetHeight + 16 : NAVBAR_HEIGHT;
  }

  function scrollToTarget(targetEl) {
    if (!targetEl) return;
    const offset = getNavbarOffset();
    const top    = targetEl.getBoundingClientRect().top + window.scrollY - offset;

    window.scrollTo({
      top:      Math.max(0, top),
      behavior: 'smooth',
    });
  }

  // Handle all <a href="#..."> clicks
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      const href = anchor.getAttribute('href');
      if (href === '#' || href === '#!') return;

      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        scrollToTarget(target);

        // Update URL without scrolling
        history.pushState(null, '', href);
      }
    });
  });

  /* ── Handle hash in URL on page load ───────────────────────── */
  window.addEventListener('load', () => {
    if (window.location.hash) {
      const target = document.querySelector(window.location.hash);
      if (target) {
        // Small delay for fonts/images to load
        setTimeout(() => scrollToTarget(target), 300);
      }
    }
  });

  /* ── Scroll-to-top button (optional — auto-inject) ──────────── */
  function createScrollTopBtn() {
    const btn = document.createElement('button');
    btn.className = 'scroll-top-btn';
    btn.setAttribute('aria-label', 'Scroll to top');
    btn.innerHTML = '<i class="fa-solid fa-chevron-up" aria-hidden="true"></i>';

    btn.style.cssText = `
      position: fixed;
      bottom: 5.5rem;
      right: 1.5rem;
      width: 42px;
      height: 42px;
      border-radius: 50%;
      background: var(--navy, #0B1F3A);
      color: white;
      border: 1px solid rgba(201,168,76,0.3);
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 0.85rem;
      opacity: 0;
      transform: translateY(10px);
      transition: opacity 0.3s ease, transform 0.3s ease, background 0.2s ease;
      z-index: 190;
      box-shadow: 0 4px 16px rgba(0,0,0,0.2);
    `;

    document.body.appendChild(btn);

    // Show after 400px scroll
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        btn.style.opacity = '1';
        btn.style.transform = 'translateY(0)';
      } else {
        btn.style.opacity = '0';
        btn.style.transform = 'translateY(10px)';
      }
    }, { passive: true });

    btn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    btn.addEventListener('mouseenter', () => {
      btn.style.background = 'var(--gold, #C9A84C)';
      btn.style.color = 'var(--navy, #0B1F3A)';
    });
    btn.addEventListener('mouseleave', () => {
      btn.style.background = 'var(--navy, #0B1F3A)';
      btn.style.color = 'white';
    });
  }

  // Only add scroll-top on pages with enough content
  if (document.body.scrollHeight > 1400) {
    createScrollTopBtn();
  }

  /* ── Reveal mobile CTA bar on first scroll ──────────────────── */
  const mobileCTABar = document.querySelector('.mobile-cta-bar');
  if (mobileCTABar && window.innerWidth < 768) {
    mobileCTABar.style.display = 'flex';
  }

})();
