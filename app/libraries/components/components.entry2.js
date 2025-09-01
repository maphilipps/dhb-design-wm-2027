class o {
  constructor(e) {
    ;((this.element = e), this.init())
  }
  init() {
    ;(this.setupTruncation(), this.setupCopyable())
  }
  /**
   * Setup text truncation with expand/collapse functionality
   */
  setupTruncation() {
    if (this.element.hasAttribute('data-truncate')) {
      const e = parseInt(this.element.getAttribute('data-truncate')) || 150,
        t = this.element.textContent.trim()
      if (t.length > e) {
        const d = t.substring(0, e) + '...'
        let i = !1
        const s = document.createElement('button')
        ;((s.className = 'body-text__toggle body-text--sm body-text--yellow'),
          s.setAttribute('aria-expanded', 'false'))
        const a = () => {
          ;(i
            ? ((this.element.innerHTML = t),
              (s.textContent = ' Show Less'),
              s.setAttribute('aria-expanded', 'true'))
            : ((this.element.innerHTML = d),
              (s.textContent = ' Show More'),
              s.setAttribute('aria-expanded', 'false')),
            this.element.appendChild(s))
        }
        ;(s.addEventListener('click', () => {
          ;((i = !i), a())
        }),
          a())
      }
    }
  }
  /**
   * Setup copy-to-clipboard functionality
   */
  setupCopyable() {
    this.element.hasAttribute('data-copyable') &&
      ((this.element.style.cursor = 'pointer'),
      this.element.setAttribute('title', 'Click to copy'),
      this.element.addEventListener('click', async () => {
        try {
          await navigator.clipboard.writeText(this.element.textContent)
          const e = this.element.style.color
          ;((this.element.style.color = 'var(--dhb-yellow)'),
            setTimeout(() => {
              this.element.style.color = e
            }, 200))
        } catch (e) {
          console.warn('Failed to copy text:', e)
        }
      }))
  }
  /**
   * Update text content dynamically
   * @param {string} newText - New text content
   */
  updateText(e) {
    ;((this.element.textContent = e),
      this.element.hasAttribute('data-truncate') && this.setupTruncation())
  }
  /**
   * Add emphasis class temporarily
   * @param {number} duration - Duration in milliseconds
   */
  emphasize(e = 1e3) {
    ;(this.element.classList.add('body-text--emphasized'),
      setTimeout(() => {
        this.element.classList.remove('body-text--emphasized')
      }, e))
  }
}
document.addEventListener('DOMContentLoaded', () => {
  document
    .querySelectorAll('.body-text[data-truncate], .body-text[data-copyable]')
    .forEach(e => {
      new o(e)
    })
})
class r {
  constructor(e) {
    ;((this.element = e), (this.isAnimating = !1), this.init())
  }
  init() {
    ;(this.element.addEventListener('mouseenter', () => this.onHover()),
      this.element.addEventListener('mouseleave', () => this.onHoverOut()),
      this.element.addEventListener('click', () => this.onClick()),
      this.checkAnimations())
  }
  onHover() {
    this.isAnimating ||
      ((this.element.style.transform = 'scale(1.05)'),
      (this.element.style.transition = 'transform 0.3s ease-out'))
  }
  onHoverOut() {
    this.isAnimating || (this.element.style.transform = 'scale(1)')
  }
  onClick() {
    this.triggerPulse()
  }
  triggerPulse() {
    this.isAnimating ||
      ((this.isAnimating = !0),
      this.element.classList.add('brand-logo--pulsing'),
      setTimeout(() => {
        ;(this.element.classList.remove('brand-logo--pulsing'),
          (this.isAnimating = !1))
      }, 1e3))
  }
  checkAnimations() {
    const e = this.element.getAttribute('data-animate')
    e && this.element.classList.add(`brand-logo--${e}`)
  }
}
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.brand-logo').forEach(e => new r(e))
})
class l {
  constructor(e) {
    ;((this.element = e), (this.observer = null), this.init())
  }
  init() {
    ;(this.setupIntersectionObserver(), this.setupHoverEffects())
  }
  setupIntersectionObserver() {
    this.element.classList.contains('heading--animated') &&
      ((this.observer = new IntersectionObserver(
        e => {
          e.forEach(t => {
            t.isIntersecting &&
              ((t.target.style.animationDelay = '0s'),
              (t.target.style.animationPlayState = 'running'),
              this.observer.unobserve(t.target))
          })
        },
        {
          threshold: 0.1,
          rootMargin: '0px 0px -50px 0px',
        },
      )),
      this.observer.observe(this.element))
  }
  setupHoverEffects() {
    this.element.classList.contains('heading--section') &&
      (this.element.addEventListener('mouseenter', () => {
        ;((this.element.style.transform = 'translateX(0.5rem)'),
          (this.element.style.transition = 'transform 0.3s ease-out'))
      }),
      this.element.addEventListener('mouseleave', () => {
        this.element.style.transform = 'translateX(0)'
      }))
  }
  // Method to trigger animation manually
  animate() {
    this.element.classList.contains('heading--animated') &&
      ((this.element.style.animation = 'none'),
      this.element.offsetHeight,
      (this.element.style.animation = 'fade-in-up 0.8s ease-out forwards'))
  }
}
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.heading').forEach(e => new l(e))
})
Drupal.behaviors.BodyText = {
  attach(n) {
    once('body-text', '.body-text', n).forEach(t => {
      new o(t)
    })
  },
}
Drupal.behaviors.BrandLogo = {
  attach(n) {
    once('brand-logo', '.brand-logo', n).forEach(t => {
      new r(t)
    })
  },
}
Drupal.behaviors.Heading = {
  attach(n) {
    once('heading', '.heading', n).forEach(t => {
      new l(t)
    })
  },
}
