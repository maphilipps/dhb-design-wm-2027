// DHB Heading Interactive Behaviors
class Heading {
  constructor(element) {
    this.element = element
    this.observer = null
    this.init()
  }

  init() {
    // Check for animation on scroll
    this.setupIntersectionObserver()

    // Add hover effects for interactive headings
    this.setupHoverEffects()
  }

  setupIntersectionObserver() {
    // Only animate headings that have animation class
    if (this.element.classList.contains('heading--animated')) {
      this.observer = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.style.animationDelay = '0s'
              entry.target.style.animationPlayState = 'running'
              this.observer.unobserve(entry.target)
            }
          })
        },
        {
          threshold: 0.1,
          rootMargin: '0px 0px -50px 0px',
        },
      )

      this.observer.observe(this.element)
    }
  }

  setupHoverEffects() {
    // Add subtle hover effects for section headings
    if (this.element.classList.contains('heading--section')) {
      this.element.addEventListener('mouseenter', () => {
        this.element.style.transform = 'translateX(0.5rem)'
        this.element.style.transition = 'transform 0.3s ease-out'
      })

      this.element.addEventListener('mouseleave', () => {
        this.element.style.transform = 'translateX(0)'
      })
    }
  }

  // Method to trigger animation manually
  animate() {
    if (this.element.classList.contains('heading--animated')) {
      this.element.style.animation = 'none'
      // Trigger reflow
      // eslint-disable-next-line no-unused-expressions
      this.element.offsetHeight
      this.element.style.animation = 'fade-in-up 0.8s ease-out forwards'
    }
  }
}

// Auto-initialize all headings
document.addEventListener('DOMContentLoaded', () => {
  const headings = document.querySelectorAll('.heading')
  headings.forEach(heading => new Heading(heading))
})

// Export for module usage
export default Heading
