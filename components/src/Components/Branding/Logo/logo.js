/**
 * Logo Component JavaScript
 * @file logo.js
 * @description Alpine.js functionality for logo interactions and lazy loading
 */

document.addEventListener('alpine:init', () => {
  Alpine.data('logoComponent', () => ({
    // Component state
    isLoaded: false,
    isError: false,
    isVisible: false,
    observer: null,

    // Initialize component
    init() {
      this.setupIntersectionObserver();
      this.setupImageErrorHandling();
      
      // Add loading class initially
      this.$el.classList.add('logo--loading');
      
      // Remove loading class after initialization
      this.$nextTick(() => {
        this.$el.classList.remove('logo--loading');
        this.isLoaded = true;
      });
    },

    // Setup intersection observer for lazy loading
    setupIntersectionObserver() {
      if ('IntersectionObserver' in window) {
        this.observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              this.isVisible = true;
              this.loadLogo();
              this.observer.unobserve(entry.target);
            }
          });
        }, {
          threshold: 0.1,
          rootMargin: '50px'
        });

        this.observer.observe(this.$el);
      } else {
        // Fallback for browsers without IntersectionObserver
        this.isVisible = true;
        this.loadLogo();
      }
    },

    // Load logo content
    loadLogo() {
      const img = this.$el.querySelector('.logo__image');
      if (img && !img.complete) {
        img.onload = () => {
          this.isLoaded = true;
          this.$el.classList.remove('logo--loading');
        };
        img.onerror = () => {
          this.handleImageError();
        };
      }
    },

    // Handle image loading errors
    setupImageErrorHandling() {
      const img = this.$el.querySelector('.logo__image');
      if (img) {
        img.addEventListener('error', () => {
          this.handleImageError();
        });
      }
    },

    // Handle image error
    handleImageError() {
      this.isError = true;
      this.isLoaded = false;
      this.$el.classList.add('logo--error');
      this.$el.classList.remove('logo--loading');
      
      // Dispatch error event for parent components
      this.$el.dispatchEvent(new CustomEvent('logo:error', {
        detail: { message: 'Failed to load logo image' },
        bubbles: true
      }));
    },

    // Handle logo click
    handleClick() {
      if (this.$el.dataset.logoUrl) {
        window.open(this.$el.dataset.logoUrl, '_blank', 'noopener,noreferrer');
      }
      
      // Dispatch click event
      this.$el.dispatchEvent(new CustomEvent('logo:click', {
        detail: { 
          logoType: this.$el.dataset.logoType,
          partnerName: this.$el.dataset.partnerName 
        },
        bubbles: true
      }));
    },

    // Handle logo hover
    handleHover() {
      if (this.$el.classList.contains('logo--interactive')) {
        // Add subtle animation or effect
        this.$el.style.transform = 'scale(1.02)';
      }
    },

    // Handle logo hover end
    handleHoverEnd() {
      if (this.$el.classList.contains('logo--interactive')) {
        this.$el.style.transform = '';
      }
    },

    // Cleanup
    destroy() {
      if (this.observer) {
        this.observer.disconnect();
      }
    }
  }));

  // Logo Grid Component for managing multiple logos
  Alpine.data('logoGrid', () => ({
    logos: [],
    loading: true,
    error: null,

    init() {
      this.loadLogos();
    },

    // Load all logos in the grid
    loadLogos() {
      const logoElements = this.$el.querySelectorAll('[data-logo]');
      this.logos = Array.from(logoElements).map(el => ({
        element: el,
        type: el.dataset.logoType,
        name: el.dataset.partnerName || el.dataset.logoName,
        loaded: false,
        error: false
      }));

      // Listen for logo events
      this.$el.addEventListener('logo:error', (e) => {
        this.handleLogoError(e.detail, e.target);
      });

      this.$el.addEventListener('logo:loaded', (e) => {
        this.handleLogoLoaded(e.target);
      });

      this.loading = false;
    },

    // Handle individual logo errors
    handleLogoError(detail, element) {
      const logo = this.logos.find(l => l.element === element);
      if (logo) {
        logo.error = true;
        logo.loaded = false;
      }
    },

    // Handle individual logo loaded
    handleLogoLoaded(element) {
      const logo = this.logos.find(l => l.element === element);
      if (logo) {
        logo.loaded = true;
        logo.error = false;
      }
    },

    // Get loading state
    get isLoading() {
      return this.logos.some(logo => !logo.loaded && !logo.error);
    },

    // Get error state
    get hasErrors() {
      return this.logos.some(logo => logo.error);
    },

    // Retry failed logos
    retryFailedLogos() {
      this.logos
        .filter(logo => logo.error)
        .forEach(logo => {
          logo.error = false;
          logo.element.classList.remove('logo--error');
          logo.element.classList.add('logo--loading');
          
          // Trigger reload
          const img = logo.element.querySelector('.logo__image');
          if (img) {
            img.src = img.src; // Force reload
          }
        });
    }
  }));
});

// Utility functions for logo management
window.LogoUtils = {
  // Preload logo images
  preloadLogo(src) {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve(img);
      img.onerror = reject;
      img.src = src;
    });
  },

  // Get optimal logo size based on container
  getOptimalSize(container) {
    const width = container.offsetWidth;
    if (width < 100) return 'xs';
    if (width < 150) return 'sm';
    if (width < 200) return 'md';
    if (width < 300) return 'lg';
    return 'xl';
  },

  // Generate logo alt text
  generateAltText(logoType, partnerName) {
    if (logoType === 'ihf') {
      return '30th IHF Men\'s Handball World Championship Germany 2027';
    }
    if (logoType === 'partner' && partnerName) {
      return `${partnerName} - Official Partner`;
    }
    return 'Logo';
  }
};