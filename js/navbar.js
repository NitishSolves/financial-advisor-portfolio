/**
 * navbar.js
 * Handles: sticky scroll state, hamburger menu open/close,
 * active link highlighting, body scroll lock, outside-click close
 */

(function () {
  'use strict';

  /* ── Element references ─────────────────────────────────────── */
  const navbar       = document.getElementById('navbar');
  const hamburger    = document.getElementById('hamburger');
  const mobileMenu   = document.getElementById('mobileMenu');
  const navLinks     = document.querySelectorAll('.navbar__link');
  const mobileLinks  = document.querySelectorAll('.mobile-menu__link');
  const allSections  = document.querySelectorAll('section[id]');

  if (!navbar) return; // guard: not on a page with navbar

  /* ── Sticky / Scroll-shrink ─────────────────────────────────── */
  let lastScroll = 0;

  function handleScroll() {
    const scrollY = window.scrollY;

    // Add 'scrolled' class after 60px
    if (scrollY > 60) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    lastScroll = scrollY;
    highlightActiveSection();
  }

  /* ── Active Section Highlighting ───────────────────────────── */
  function highlightActiveSection() {
    const scrollMid = window.scrollY + window.innerHeight / 3;

    allSections.forEach((section) => {
      const top    = section.offsetTop;
      const bottom = top + section.offsetHeight;
      const id     = section.getAttribute('id');

      if (scrollMid >= top && scrollMid < bottom) {
        // Map section ids to nav link hrefs
        navLinks.forEach((link) => {
          const href = link.getAttribute('href') || '';
          // For same-page anchors
          if (href.includes('#' + id) || (id === 'hero' && href === 'index.html')) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }

  /* ── Hamburger / Mobile Menu ────────────────────────────────── */
  let menuOpen = false;

  function openMenu() {
    menuOpen = true;
    hamburger.setAttribute('aria-expanded', 'true');
    mobileMenu.classList.add('open');
    mobileMenu.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    // Focus first link for accessibility
    const firstLink = mobileMenu.querySelector('.mobile-menu__link');
    if (firstLink) firstLink.focus();
  }

  function closeMenu() {
    menuOpen = false;
    hamburger.setAttribute('aria-expanded', 'false');
    mobileMenu.classList.remove('open');
    mobileMenu.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    hamburger.focus();
  }

  function toggleMenu() {
    if (menuOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  }

  if (hamburger) {
    hamburger.addEventListener('click', toggleMenu);
  }

  // Close on mobile link click
  mobileLinks.forEach((link) => {
    link.addEventListener('click', () => {
      closeMenu();
    });
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && menuOpen) {
      closeMenu();
    }
  });

  // Close on outside click
  document.addEventListener('click', (e) => {
    if (menuOpen && !mobileMenu.contains(e.target) && !hamburger.contains(e.target)) {
      closeMenu();
    }
  });

  // Trap focus in mobile menu
  mobileMenu.addEventListener('keydown', (e) => {
    if (!menuOpen || e.key !== 'Tab') return;
    const focusable = mobileMenu.querySelectorAll(
      'a, button, input, [tabindex]:not([tabindex="-1"])'
    );
    const first = focusable[0];
    const last  = focusable[focusable.length - 1];

    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  });

  /* ── Mark active page link ──────────────────────────────────── */
  function markCurrentPage() {
    const path = window.location.pathname;
    const page = path.split('/').pop() || 'index.html';

    navLinks.forEach((link) => {
      const href = (link.getAttribute('href') || '').split('/').pop();
      if (href === page || (page === '' && href === 'index.html')) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });

    mobileLinks.forEach((link) => {
      const href = (link.getAttribute('href') || '').split('/').pop();
      if (href === page || (page === '' && href === 'index.html')) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }

  /* ── Init ───────────────────────────────────────────────────── */
  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll(); // run once on load
  markCurrentPage();

})();
