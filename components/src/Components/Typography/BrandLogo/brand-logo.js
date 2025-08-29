// DHB Brand Logo Interactive Behaviors
class BrandLogo {
  constructor(element) {
    this.element = element;
    this.isAnimating = false;
    this.init();
  }

  init() {
    // Add hover interactions
    this.element.addEventListener('mouseenter', () => this.onHover());
    this.element.addEventListener('mouseleave', () => this.onHoverOut());
    
    // Add click interactions
    this.element.addEventListener('click', () => this.onClick());
    
    // Initialize any existing animations
    this.checkAnimations();
  }

  onHover() {
    if (!this.isAnimating) {
      this.element.style.transform = 'scale(1.05)';
      this.element.style.transition = 'transform 0.3s ease-out';
    }
  }

  onHoverOut() {
    if (!this.isAnimating) {
      this.element.style.transform = 'scale(1)';
    }
  }

  onClick() {
    // Trigger brand pulse animation
    this.triggerPulse();
  }

  triggerPulse() {
    if (this.isAnimating) return;
    
    this.isAnimating = true;
    this.element.classList.add('brand-logo--pulsing');
    
    setTimeout(() => {
      this.element.classList.remove('brand-logo--pulsing');
      this.isAnimating = false;
    }, 1000);
  }

  checkAnimations() {
    const animateAttr = this.element.getAttribute('data-animate');
    if (animateAttr) {
      this.element.classList.add(`brand-logo--${animateAttr}`);
    }
  }
}

// Auto-initialize all brand logo components
document.addEventListener('DOMContentLoaded', () => {
  const brandLogos = document.querySelectorAll('.brand-logo');
  brandLogos.forEach(logo => new BrandLogo(logo));
});

// Export for module usage
export default BrandLogo;