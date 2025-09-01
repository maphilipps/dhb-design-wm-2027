// Import existing component classes
import { BodyText } from './Components/Typography/BodyText/body-text.js'
import BrandLogo from './Components/Typography/BrandLogo/brand-logo.js'
import Heading from './Components/Typography/Heading/heading.js'
import './Components/Branding/Logo/logo.js'

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
