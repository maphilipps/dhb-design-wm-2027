// Import existing component classes
import { BodyText } from './Components/Typography/BodyText/body-text.js'
import BrandLogo from './Components/Typography/BrandLogo/brand-logo.js'
import Heading from './Components/Typography/Heading/heading.js'
import buttonComponent from './Components/Button/button.js'

// Register Drupal behaviors for existing components
Drupal.behaviors.BodyText = {
  attach(context) {
    const bodyTexts = once('body-text', '.body-text', context)
    bodyTexts.forEach(bodyText => {
      new BodyText(bodyText)
    })
  },
}

Drupal.behaviors.BrandLogo = {
  attach(context) {
    const brandLogos = once('brand-logo', '.brand-logo', context)
    brandLogos.forEach(brandLogo => {
      new BrandLogo(brandLogo)
    })
  },
}

Drupal.behaviors.Heading = {
  attach(context) {
    const headings = once('heading', '.heading', context)
    headings.forEach(heading => {
      new Heading(heading)
    })
  },
}

Drupal.behaviors.Button = {
  attach(context) {
    const buttons = once('button-component', '.button', context)
    buttons.forEach(button => {
      // Initialize Alpine.js data if not already present
      if (!button._x_dataStack && button.hasAttribute('x-data')) {
        // Alpine.js will handle initialization
        return
      }
      
      // For non-Alpine buttons, add basic interaction enhancements
      if (!button.hasAttribute('x-data')) {
        button.addEventListener('click', (event) => {
          if (button.disabled) {
            event.preventDefault()
            return
          }
          
          // Add ripple effect or other enhancements here if needed
        })
      }
    })
  },
}
