/**
 * DHB BodyText Component JavaScript
 * 
 * Handles dynamic behavior for body text components including:
 * - Text truncation and expansion
 * - Copy-to-clipboard functionality  
 * - Dynamic text updates
 */

export class BodyText {
  constructor(element) {
    this.element = element;
    this.init();
  }

  init() {
    // Initialize any dynamic behaviors
    this.setupTruncation();
    this.setupCopyable();
  }

  /**
   * Setup text truncation with expand/collapse functionality
   */
  setupTruncation() {
    if (this.element.hasAttribute('data-truncate')) {
      const maxLength = parseInt(this.element.getAttribute('data-truncate')) || 150;
      const originalText = this.element.textContent.trim();
      
      if (originalText.length > maxLength) {
        const truncatedText = originalText.substring(0, maxLength) + '...';
        let isExpanded = false;
        
        // Create expand/collapse functionality
        const toggleButton = document.createElement('button');
        toggleButton.className = 'body-text__toggle body-text--sm body-text--yellow';
        toggleButton.setAttribute('aria-expanded', 'false');
        
        const updateContent = () => {
          if (isExpanded) {
            this.element.innerHTML = originalText;
            toggleButton.textContent = ' Show Less';
            toggleButton.setAttribute('aria-expanded', 'true');
          } else {
            this.element.innerHTML = truncatedText;
            toggleButton.textContent = ' Show More';
            toggleButton.setAttribute('aria-expanded', 'false');
          }
          this.element.appendChild(toggleButton);
        };
        
        toggleButton.addEventListener('click', () => {
          isExpanded = !isExpanded;
          updateContent();
        });
        
        updateContent();
      }
    }
  }

  /**
   * Setup copy-to-clipboard functionality
   */
  setupCopyable() {
    if (this.element.hasAttribute('data-copyable')) {
      this.element.style.cursor = 'pointer';
      this.element.setAttribute('title', 'Click to copy');
      
      this.element.addEventListener('click', async () => {
        try {
          await navigator.clipboard.writeText(this.element.textContent);
          
          // Visual feedback
          const originalColor = this.element.style.color;
          this.element.style.color = 'var(--dhb-yellow)';
          
          setTimeout(() => {
            this.element.style.color = originalColor;
          }, 200);
          
        } catch (err) {
          console.warn('Failed to copy text:', err);
        }
      });
    }
  }

  /**
   * Update text content dynamically
   * @param {string} newText - New text content
   */
  updateText(newText) {
    this.element.textContent = newText;
    // Re-initialize truncation if needed
    if (this.element.hasAttribute('data-truncate')) {
      this.setupTruncation();
    }
  }

  /**
   * Add emphasis class temporarily
   * @param {number} duration - Duration in milliseconds
   */
  emphasize(duration = 1000) {
    this.element.classList.add('body-text--emphasized');
    
    setTimeout(() => {
      this.element.classList.remove('body-text--emphasized');
    }, duration);
  }
}

// Auto-initialize BodyText components
document.addEventListener('DOMContentLoaded', () => {
  const bodyTextElements = document.querySelectorAll('.body-text[data-truncate], .body-text[data-copyable]');
  
  bodyTextElements.forEach(element => {
    new BodyText(element);
  });
});

export default BodyText;