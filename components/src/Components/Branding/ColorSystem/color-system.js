/**
 * Color System Component JavaScript
 * Provides interactive functionality for the DHB color system atom
 */

export default function ColorSystem() {
  return {
    // Component data
    copiedColor: null,
    showCopyFeedback: false,

    // Initialize color system functionality
    init() {
      this.setupColorSwatchInteractions()
      this.setupKeyboardNavigation()
      this.setupAccessibility()
    },

    // Copy color value to clipboard
    async copyColor(colorValue, swatchElement) {
      try {
        await navigator.clipboard.writeText(colorValue)
        this.copiedColor = colorValue
        this.showCopyFeedback = true
        
        // Add visual feedback to swatch
        swatchElement.classList.add('color-swatch--copied')
        
        // Reset feedback after 2 seconds
        setTimeout(() => {
          this.showCopyFeedback = false
          this.copiedColor = null
          swatchElement.classList.remove('color-swatch--copied')
        }, 2000)

        // Announce to screen readers
        this.announceToScreenReader(`Copied ${colorValue} to clipboard`)
        
      } catch (err) {
        console.warn('Failed to copy color to clipboard:', err)
        this.announceToScreenReader('Failed to copy color')
      }
    },

    // Setup color swatch interactions
    setupColorSwatchInteractions() {
      const swatches = this.$el.querySelectorAll('.color-system__swatch')
      
      swatches.forEach(swatch => {
        const colorValue = swatch.dataset.color
        
        // Click to copy
        swatch.addEventListener('click', () => {
          this.copyColor(colorValue, swatch)
        })

        // Keyboard support
        swatch.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault()
            this.copyColor(colorValue, swatch)
          }
        })

        // Make focusable
        swatch.setAttribute('tabindex', '0')
        swatch.setAttribute('role', 'button')
        swatch.setAttribute('aria-label', `Copy ${colorValue} to clipboard`)
      })
    },

    // Setup keyboard navigation between swatches
    setupKeyboardNavigation() {
      const swatches = this.$el.querySelectorAll('.color-system__swatch')
      
      swatches.forEach((swatch, index) => {
        swatch.addEventListener('keydown', (e) => {
          let targetIndex = -1
          
          switch (e.key) {
            case 'ArrowRight':
            case 'ArrowDown':
              targetIndex = (index + 1) % swatches.length
              break
            case 'ArrowLeft':
            case 'ArrowUp':
              targetIndex = (index - 1 + swatches.length) % swatches.length
              break
            case 'Home':
              targetIndex = 0
              break
            case 'End':
              targetIndex = swatches.length - 1
              break
          }
          
          if (targetIndex !== -1) {
            e.preventDefault()
            swatches[targetIndex].focus()
          }
        })
      })
    },

    // Setup accessibility features
    setupAccessibility() {
      // Add live region for announcements
      const liveRegion = document.createElement('div')
      liveRegion.setAttribute('aria-live', 'polite')
      liveRegion.setAttribute('aria-atomic', 'true')
      liveRegion.className = 'sr-only'
      liveRegion.id = 'color-system-announcements'
      this.$el.appendChild(liveRegion)
    },

    // Announce message to screen readers
    announceToScreenReader(message) {
      const liveRegion = this.$el.querySelector('#color-system-announcements')
      if (liveRegion) {
        liveRegion.textContent = message
        
        // Clear after announcement
        setTimeout(() => {
          liveRegion.textContent = ''
        }, 1000)
      }
    },

    // Check color contrast ratio (utility method)
    checkContrast(color1, color2) {
      // Simplified contrast checking - in a real implementation,
      // you'd want to use a proper color contrast library
      const luminance1 = this.getLuminance(color1)
      const luminance2 = this.getLuminance(color2)
      
      const lighter = Math.max(luminance1, luminance2)
      const darker = Math.min(luminance1, luminance2)
      
      return (lighter + 0.05) / (darker + 0.05)
    },

    // Get relative luminance of a color (simplified)
    getLuminance(hex) {
      // Convert hex to RGB
      const r = parseInt(hex.slice(1, 3), 16) / 255
      const g = parseInt(hex.slice(3, 5), 16) / 255
      const b = parseInt(hex.slice(5, 7), 16) / 255
      
      // Apply sRGB gamma correction
      const sRGB = [r, g, b].map(c => {
        return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4)
      })
      
      // Calculate relative luminance
      return 0.2126 * sRGB[0] + 0.7152 * sRGB[1] + 0.0722 * sRGB[2]
    }
  }
}