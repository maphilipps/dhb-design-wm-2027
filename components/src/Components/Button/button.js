/**
 * Button Component JavaScript
 * DHB Handball World Championship 2027
 * Alpine.js interactions for button components
 */

// Button state management
window.buttonComponent = {
  /**
   * Initialize button with loading state capability
   * @param {boolean} initialLoading - Initial loading state
   * @returns {Object} Alpine.js data object
   */
  initButton(initialLoading = false) {
    return {
      loading: initialLoading,
      
      /**
       * Set button loading state
       * @param {boolean} state - Loading state
       */
      setLoading(state) {
        this.loading = state
      },
      
      /**
       * Toggle loading state
       */
      toggleLoading() {
        this.loading = !this.loading
      },
      
      /**
       * Handle button click with loading state
       * @param {Function} callback - Click handler function
       * @param {number} duration - Loading duration in ms
       */
      async handleClick(callback, duration = 2000) {
        if (this.loading) return
        
        this.setLoading(true)
        
        try {
          if (typeof callback === 'function') {
            await callback()
          }
          
          // Simulate async operation if no callback
          if (!callback) {
            await new Promise(resolve => setTimeout(resolve, duration))
          }
        } catch (error) {
          console.error('Button click error:', error)
        } finally {
          this.setLoading(false)
        }
      }
    }
  },

  /**
   * Handle form submission with loading state
   * @param {HTMLFormElement} form - Form element
   * @param {Object} options - Submission options
   */
  async submitForm(form, options = {}) {
    const button = form.querySelector('button[type="submit"]')
    if (!button) return

    const buttonData = button._x_dataStack?.[0]
    if (!buttonData) return

    buttonData.setLoading(true)

    try {
      if (options.validate && !form.checkValidity()) {
        form.reportValidity()
        return
      }

      // Custom submission handler
      if (options.onSubmit) {
        await options.onSubmit(form)
      } else {
        // Default form submission
        form.submit()
      }
    } catch (error) {
      console.error('Form submission error:', error)
    } finally {
      buttonData.setLoading(false)
    }
  },

  /**
   * Accessibility helpers
   */
  a11y: {
    /**
     * Announce button state to screen readers
     * @param {string} message - Message to announce
     */
    announce(message) {
      const announcement = document.createElement('div')
      announcement.setAttribute('aria-live', 'polite')
      announcement.setAttribute('aria-atomic', 'true')
      announcement.className = 'sr-only'
      announcement.textContent = message
      
      document.body.appendChild(announcement)
      
      setTimeout(() => {
        document.body.removeChild(announcement)
      }, 1000)
    },

    /**
     * Update button accessible name for loading state
     * @param {HTMLElement} button - Button element
     * @param {boolean} loading - Loading state
     * @param {string} loadingText - Text to show when loading
     */
    updateLoadingState(button, loading, loadingText = 'Loading...') {
      if (loading) {
        button.setAttribute('aria-label', `${button.textContent.trim()} - ${loadingText}`)
        this.announce(`${button.textContent.trim()} is loading`)
      } else {
        button.removeAttribute('aria-label')
      }
    }
  }
}

// Alpine.js directive for automatic button loading management
document.addEventListener('alpine:init', () => {
  Alpine.directive('button-loading', (el, { expression }, { evaluateLater, effect }) => {
    const getCallback = evaluateLater(expression)
    
    el.addEventListener('click', async (event) => {
      const data = Alpine.$data(el)
      if (!data || data.loading) return
      
      event.preventDefault()
      
      data.setLoading(true)
      window.buttonComponent.a11y.updateLoadingState(el, true)
      
      try {
        const callback = await getCallback()
        if (typeof callback === 'function') {
          await callback()
        }
      } catch (error) {
        console.error('Button loading directive error:', error)
      } finally {
        data.setLoading(false)
        window.buttonComponent.a11y.updateLoadingState(el, false)
      }
    })
  })
})

// Export for module systems
export default window.buttonComponent