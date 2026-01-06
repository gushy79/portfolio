/**
 * Main JavaScript
 * Navigation, scroll animations, and interactions
 * Nick Gushlow Portfolio
 */

(function() {
  'use strict';

  // ==========================================================================
  // CONFIGURATION
  // ==========================================================================

  const CONFIG = {
    scrollThreshold: 50,           // Pixels scrolled before nav background appears
    animationThreshold: 0.15,      // Intersection observer threshold (15% in view)
    debounceDelay: 10,             // Debounce delay for scroll handler (ms)
    staggerDelay: 80               // Stagger delay between animated siblings (ms)
  };

  // ==========================================================================
  // UTILITY FUNCTIONS
  // ==========================================================================

  /**
   * Debounce function to limit execution rate
   * @param {Function} func - Function to debounce
   * @param {number} wait - Wait time in milliseconds
   * @returns {Function} - Debounced function
   */
  function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }

  /**
   * Check if user prefers reduced motion
   * @returns {boolean} - True if user prefers reduced motion
   */
  function prefersReducedMotion() {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }

  // ==========================================================================
  // NAVIGATION
  // ==========================================================================

  /**
   * Navigation module
   */
  const Navigation = {
    nav: null,
    toggle: null,
    mobileMenu: null,
    closeButton: null,
    mobileLinks: null,
    isOpen: false,

    /**
     * Initialise navigation
     */
    init() {
      this.nav = document.querySelector('.nav');
      this.toggle = document.querySelector('.nav__toggle');
      this.mobileMenu = document.querySelector('.nav__mobile');
      this.closeButton = document.querySelector('.nav__mobile-close');
      this.mobileLinks = document.querySelectorAll('.nav__mobile-link');

      if (!this.nav) return;

      this.bindEvents();
      this.handleScroll();
    },

    /**
     * Bind event listeners
     */
    bindEvents() {
      // Scroll handler for nav background
      window.addEventListener('scroll', debounce(() => this.handleScroll(), CONFIG.debounceDelay), { passive: true });

      // Mobile menu toggle
      if (this.toggle) {
        this.toggle.addEventListener('click', () => this.openMenu());
      }

      // Close button
      if (this.closeButton) {
        this.closeButton.addEventListener('click', () => this.closeMenu());
      }

      // Close on mobile link click
      if (this.mobileLinks) {
        this.mobileLinks.forEach(link => {
          link.addEventListener('click', () => this.closeMenu());
        });
      }

      // Close on escape key
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && this.isOpen) {
          this.closeMenu();
        }
      });

      // Smooth scroll for anchor links
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => this.handleAnchorClick(e, anchor));
      });
    },

    /**
     * Handle scroll - toggle nav background
     */
    handleScroll() {
      if (!this.nav) return;

      if (window.scrollY > CONFIG.scrollThreshold) {
        this.nav.classList.add('nav--scrolled');
      } else {
        this.nav.classList.remove('nav--scrolled');
      }

      // Update active nav link
      this.updateActiveLink();
    },

    /**
     * Update active navigation link based on scroll position
     */
    updateActiveLink() {
      const sections = document.querySelectorAll('section[id]');
      const navLinks = document.querySelectorAll('.nav__link');

      let currentSection = '';

      sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          currentSection = section.getAttribute('id');
        }
      });

      navLinks.forEach(link => {
        link.classList.remove('nav__link--active');
        const href = link.getAttribute('href');
        if (href === `#${currentSection}`) {
          link.classList.add('nav__link--active');
        }
      });
    },

    /**
     * Open mobile menu
     */
    openMenu() {
      if (!this.mobileMenu || !this.toggle) return;

      this.isOpen = true;
      this.mobileMenu.classList.add('nav__mobile--open');
      this.mobileMenu.setAttribute('aria-hidden', 'false');
      this.toggle.setAttribute('aria-expanded', 'true');
      document.body.classList.add('scroll-locked');

      // Focus first link
      const firstLink = this.mobileMenu.querySelector('.nav__mobile-link');
      if (firstLink) {
        firstLink.focus();
      }

      // Trap focus within menu
      this.trapFocus();
    },

    /**
     * Close mobile menu
     */
    closeMenu() {
      if (!this.mobileMenu || !this.toggle) return;

      this.isOpen = false;
      this.mobileMenu.classList.remove('nav__mobile--open');
      this.mobileMenu.setAttribute('aria-hidden', 'true');
      this.toggle.setAttribute('aria-expanded', 'false');
      document.body.classList.remove('scroll-locked');

      // Return focus to toggle
      this.toggle.focus();
    },

    /**
     * Trap focus within mobile menu
     */
    trapFocus() {
      if (!this.mobileMenu) return;

      const focusableElements = this.mobileMenu.querySelectorAll(
        'a[href], button, input, textarea, select, [tabindex]:not([tabindex="-1"])'
      );

      if (focusableElements.length === 0) return;

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      const handleTabKey = (e) => {
        if (e.key !== 'Tab') return;

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            lastElement.focus();
            e.preventDefault();
          }
        } else {
          if (document.activeElement === lastElement) {
            firstElement.focus();
            e.preventDefault();
          }
        }
      };

      this.mobileMenu.addEventListener('keydown', handleTabKey);
    },

    /**
     * Handle smooth scroll for anchor links
     * @param {Event} e - Click event
     * @param {Element} anchor - Anchor element
     */
    handleAnchorClick(e, anchor) {
      const href = anchor.getAttribute('href');
      if (!href || href === '#') return;

      const target = document.querySelector(href);
      if (!target) return;

      e.preventDefault();

      // Get nav height for offset
      const navHeight = this.nav ? this.nav.offsetHeight : 0;
      const targetPosition = target.offsetTop - navHeight;

      // Use smooth scroll if motion is not reduced
      if (prefersReducedMotion()) {
        window.scrollTo(0, targetPosition);
      } else {
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }

      // Close mobile menu if open
      if (this.isOpen) {
        this.closeMenu();
      }
    }
  };

  // ==========================================================================
  // SCROLL ANIMATIONS
  // ==========================================================================

  /**
   * Scroll animations module using Intersection Observer
   */
  const ScrollAnimations = {
    observer: null,

    /**
     * Initialise scroll animations
     */
    init() {
      // Skip if reduced motion is preferred
      if (prefersReducedMotion()) {
        this.showAllElements();
        return;
      }

      this.createObserver();
      this.observeElements();
    },

    /**
     * Create Intersection Observer
     */
    createObserver() {
      const options = {
        root: null,
        rootMargin: '0px',
        threshold: CONFIG.animationThreshold
      };

      this.observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            // Unobserve after animation triggers
            this.observer.unobserve(entry.target);
          }
        });
      }, options);
    },

    /**
     * Observe all animatable elements
     */
    observeElements() {
      // Single elements
      const animateElements = document.querySelectorAll('[data-animate]');
      animateElements.forEach(el => {
        this.observer.observe(el);
      });

      // Staggered groups
      const staggerGroups = document.querySelectorAll('[data-animate-stagger]');
      staggerGroups.forEach(group => {
        this.observer.observe(group);
      });
    },

    /**
     * Show all elements immediately (for reduced motion)
     */
    showAllElements() {
      const allAnimated = document.querySelectorAll('[data-animate], [data-animate-stagger]');
      allAnimated.forEach(el => {
        el.classList.add('is-visible');
      });
    }
  };

  // ==========================================================================
  // COPYRIGHT YEAR
  // ==========================================================================

  /**
   * Update copyright year in footer
   */
  function updateCopyrightYear() {
    const yearElement = document.getElementById('copyright-year');
    if (yearElement) {
      yearElement.textContent = new Date().getFullYear();
    }
  }

  // ==========================================================================
  // INITIALISATION
  // ==========================================================================

  /**
   * Initialise all modules when DOM is ready
   */
  function init() {
    Navigation.init();
    ScrollAnimations.init();
    updateCopyrightYear();
  }

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
