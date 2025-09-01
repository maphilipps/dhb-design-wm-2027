/**
 * DHB Icon Component JavaScript
 * Provides Alpine.js interactions and accessibility enhancements
 */

// Icon component functionality
document.addEventListener('alpine:init', () => {
  Alpine.data('iconComponent', (config = {}) => ({
    // Icon state management
    isActive: config.active || false,
    isLoading: config.loading || false,
    isDisabled: config.disabled || false,
    
    // Animation control
    animationClass: config.animation || '',
    
    // Accessibility
    ariaLabel: config.ariaLabel || '',
    role: config.role || 'img',
    
    // Initialize component
    init() {
      // Set initial accessibility attributes
      if (this.ariaLabel) {
        this.$el.setAttribute('aria-label', this.ariaLabel);
      }
      
      // Handle keyboard navigation for interactive icons
      if (this.$el.hasAttribute('tabindex')) {
        this.setupKeyboardNavigation();
      }
      
      // Setup animation control
      this.setupAnimations();
      
      // Emit ready event
      this.$dispatch('icon-ready', { element: this.$el });
    },
    
    // Toggle active state
    toggle() {
      if (this.isDisabled) return;
      
      this.isActive = !this.isActive;
      this.$dispatch('icon-toggle', { 
        active: this.isActive,
        element: this.$el 
      });
    },
    
    // Set loading state
    setLoading(loading) {
      this.isLoading = loading;
      
      if (loading) {
        this.$el.classList.add('icon--loading');
        this.$el.setAttribute('aria-busy', 'true');
      } else {
        this.$el.classList.remove('icon--loading');
        this.$el.removeAttribute('aria-busy');
      }
      
      this.$dispatch('icon-loading-change', { 
        loading: this.isLoading,
        element: this.$el 
      });
    },
    
    // Set disabled state
    setDisabled(disabled) {
      this.isDisabled = disabled;
      
      if (disabled) {
        this.$el.classList.add('icon--disabled');
        this.$el.setAttribute('aria-disabled', 'true');
        this.$el.setAttribute('tabindex', '-1');
      } else {
        this.$el.classList.remove('icon--disabled');
        this.$el.removeAttribute('aria-disabled');
        this.$el.setAttribute('tabindex', '0');
      }
      
      this.$dispatch('icon-disabled-change', { 
        disabled: this.isDisabled,
        element: this.$el 
      });
    },
    
    // Handle click events
    handleClick(event) {
      if (this.isDisabled || this.isLoading) {
        event.preventDefault();
        return;
      }
      
      // Add click animation
      this.addClickAnimation();
      
      // Emit click event
      this.$dispatch('icon-click', { 
        event: event,
        element: this.$el,
        active: this.isActive 
      });
    },
    
    // Setup keyboard navigation
    setupKeyboardNavigation() {
      this.$el.addEventListener('keydown', (event) => {
        if (this.isDisabled || this.isLoading) return;
        
        // Handle Enter and Space key presses
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          this.handleClick(event);
        }
        
        // Handle arrow keys for icon groups
        if (event.key.startsWith('Arrow')) {
          this.handleArrowNavigation(event);
        }
      });
    },
    
    // Handle arrow key navigation in icon groups
    handleArrowNavigation(event) {
      const iconGroup = this.$el.closest('.icon-group');
      if (!iconGroup) return;
      
      const icons = Array.from(iconGroup.querySelectorAll('.icon[tabindex="0"]'));
      const currentIndex = icons.indexOf(this.$el);
      
      let nextIndex;
      switch (event.key) {
        case 'ArrowLeft':
          nextIndex = currentIndex > 0 ? currentIndex - 1 : icons.length - 1;
          break;
        case 'ArrowRight':
          nextIndex = currentIndex < icons.length - 1 ? currentIndex + 1 : 0;
          break;
        default:
          return;
      }
      
      event.preventDefault();
      icons[nextIndex]?.focus();
    },
    
    // Setup animations
    setupAnimations() {
      if (this.animationClass) {
        this.$el.classList.add(`icon--${this.animationClass}`);
      }
      
      // Handle reduced motion preference
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        this.$el.classList.remove('icon--spin', 'icon--bounce', 'icon--pulse');
      }
    },
    
    // Add click animation effect
    addClickAnimation() {
      this.$el.style.transform = 'scale(0.95)';
      
      // Reset animation after short delay
      setTimeout(() => {
        this.$el.style.transform = '';
      }, 150);
    },
    
    // Update icon appearance based on state
    updateAppearance() {
      // Update classes based on state
      this.$el.classList.toggle('icon--active', this.isActive);
      this.$el.classList.toggle('icon--loading', this.isLoading);
      this.$el.classList.toggle('icon--disabled', this.isDisabled);
      
      // Update ARIA attributes
      this.$el.setAttribute('aria-pressed', this.isActive.toString());
    },
    
    // Watch for state changes
    $watch: {
      isActive(value) {
        this.updateAppearance();
      },
      isLoading(value) {
        this.setLoading(value);
      },
      isDisabled(value) {
        this.setDisabled(value);
      }
    }
  }));
});

// Utility functions for icon management
window.DHBIcons = {
  // Get all icons on the page
  getAllIcons() {
    return document.querySelectorAll('.icon');
  },
  
  // Get icons by name
  getIconsByName(name) {
    return document.querySelectorAll(`.icon[data-icon="${name}"]`);
  },
  
  // Set global icon theme
  setTheme(theme) {
    const icons = this.getAllIcons();
    icons.forEach(icon => {
      icon.classList.remove('icon--navy', 'icon--white', 'icon--yellow', 'icon--red');
      if (theme !== 'currentColor') {
        icon.classList.add(`icon--${theme}`);
      }
    });
  },
  
  // Batch update icon states
  updateIconStates(selector, states) {
    const icons = document.querySelectorAll(selector);
    icons.forEach(icon => {
      const alpineComponent = Alpine.$data(icon);
      if (alpineComponent) {
        Object.assign(alpineComponent, states);
      }
    });
  },
  
  // Setup icon accessibility
  enhanceAccessibility() {
    const icons = this.getAllIcons();
    icons.forEach(icon => {
      // Ensure proper roles
      if (!icon.getAttribute('role')) {
        icon.setAttribute('role', 'img');
      }
      
      // Add screen reader text if missing aria-label
      if (!icon.getAttribute('aria-label') && !icon.querySelector('.sr-only')) {
        const iconName = icon.dataset.icon || 'icon';
        icon.setAttribute('aria-label', iconName);
      }
    });
  },
  
  // Performance optimization for large icon sets
  optimizeRendering() {
    const icons = this.getAllIcons();
    
    // Use requestAnimationFrame for smooth updates
    const updateBatch = (iconBatch) => {
      iconBatch.forEach(icon => {
        icon.style.willChange = 'transform';
      });
      
      requestAnimationFrame(() => {
        iconBatch.forEach(icon => {
          icon.style.willChange = 'auto';
        });
      });
    };
    
    // Process icons in batches
    const batchSize = 50;
    for (let i = 0; i < icons.length; i += batchSize) {
      const batch = Array.from(icons).slice(i, i + batchSize);
      updateBatch(batch);
    }
  }
};

// Initialize icon enhancements when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  // Enhance accessibility for all icons
  window.DHBIcons.enhanceAccessibility();
  
  // Optimize rendering performance
  window.DHBIcons.optimizeRendering();
  
  // Setup global keyboard shortcuts for icon navigation
  document.addEventListener('keydown', (event) => {
    // Ctrl/Cmd + I to focus first interactive icon
    if ((event.ctrlKey || event.metaKey) && event.key === 'i') {
      const firstIcon = document.querySelector('.icon[tabindex="0"]');
      if (firstIcon) {
        event.preventDefault();
        firstIcon.focus();
      }
    }
  });
});

// Export for module systems
if (typeof module !== 'undefined' && module.exports) {
  module.exports = window.DHBIcons;
}