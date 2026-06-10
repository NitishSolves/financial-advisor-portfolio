/**
 * animations.js
 * Handles: scroll-reveal via IntersectionObserver,
 * animated number counters, stagger delays
 */

(function () {
  'use strict';

  /* ── Scroll Reveal ──────────────────────────────────────────── */
  const revealEls = document.querySelectorAll('[data-reveal]');

  if (revealEls.length > 0) {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            revealObserver.unobserve(entry.target); // fire once
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -60px 0px',
      }
    );

    revealEls.forEach((el) => {
      revealObserver.observe(el);
    });
  }

  /* ── Animated Number Counter ────────────────────────────────── */
  const counters = document.querySelectorAll('.count-up');

  function animateCounter(el) {
    const target   = parseInt(el.getAttribute('data-target'), 10);
    const duration = 1800; // ms
    const start    = performance.now();

    function step(now) {
      const elapsed  = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // Ease-out cubic
      const eased    = 1 - Math.pow(1 - progress, 3);
      const current  = Math.round(eased * target);
      el.textContent = current.toLocaleString('en-IN');

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        el.textContent = target.toLocaleString('en-IN');
      }
    }

    requestAnimationFrame(step);
  }

  if (counters.length > 0) {
    const counterObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCounter(entry.target);
            counterObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    counters.forEach((counter) => {
      counterObserver.observe(counter);
    });
  }

  /* ── Timeline items stagger ─────────────────────────────────── */
  const timelineItems = document.querySelectorAll('.timeline-item');

  if (timelineItems.length > 0) {
    const tlObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'none';
            tlObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );

    timelineItems.forEach((item, i) => {
      item.style.opacity = '0';
      item.style.transform = 'translateY(30px)';
      item.style.transition = `opacity 0.6s cubic-bezier(0.16,1,0.3,1) ${i * 0.1}s, transform 0.6s cubic-bezier(0.16,1,0.3,1) ${i * 0.1}s`;
      tlObserver.observe(item);
    });
  }

  /* ── Service card stagger ───────────────────────────────────── */
  const serviceCards = document.querySelectorAll('.service-card, .service-detail-card');

  if (serviceCards.length > 0) {
    const cardObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, idx) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.style.opacity = '1';
              entry.target.style.transform = 'translateY(0)';
            }, idx * 60);
            cardObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 }
    );

    serviceCards.forEach((card) => {
      card.style.opacity    = '0';
      card.style.transform  = 'translateY(20px)';
      card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
      cardObserver.observe(card);
    });
  }

  /* ── Testimonial card stagger ───────────────────────────────── */
  const testimonialCards = document.querySelectorAll('.testimonial-card, .legacy-story-card');

  if (testimonialCards.length > 0) {
    const testObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, idx) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.style.opacity = '1';
              entry.target.style.transform = 'translateY(0)';
            }, idx * 80);
            testObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    testimonialCards.forEach((card) => {
      card.style.opacity    = '0';
      card.style.transform  = 'translateY(24px)';
      card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      testObserver.observe(card);
    });
  }

  /* ── Claim steps stagger ────────────────────────────────────── */
  const claimSteps = document.querySelectorAll('.claim-step');

  if (claimSteps.length > 0) {
    const claimObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            claimObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    claimSteps.forEach((step, i) => {
      step.style.opacity    = '0';
      step.style.transform  = 'translateY(20px)';
      step.style.transition = `opacity 0.5s ease ${i * 0.1}s, transform 0.5s ease ${i * 0.1}s`;
      claimObserver.observe(step);
    });
  }

  /* ── Metric item hover lift ─────────────────────────────────── */
  const metricItems = document.querySelectorAll('.metric-item');
  metricItems.forEach((item) => {
    item.addEventListener('mouseenter', () => {
      item.style.transition = 'background 0.2s ease';
      item.style.background = 'rgba(255,255,255,0.03)';
    });
    item.addEventListener('mouseleave', () => {
      item.style.background = '';
    });
  });

  /* ── Mobile CTA bar visibility ──────────────────────────────── */
  if (window.innerWidth < 768) {
    let ticking      = false;
    const mobileBar  = document.querySelector('.mobile-cta-bar');

    function updateBar() {
      if (!mobileBar) return;
      const scrollY = window.scrollY;
      if (scrollY > 200) {
        mobileBar.style.display = 'flex';
      }
      ticking = false;
    }

    window.addEventListener('scroll', () => {
      if (!ticking) {
        requestAnimationFrame(updateBar);
        ticking = true;
      }
    }, { passive: true });
  }

})();
