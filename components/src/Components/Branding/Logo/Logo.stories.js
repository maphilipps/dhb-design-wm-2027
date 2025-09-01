import Component from './logo.html.twig'

const meta = {
  title: 'Atoms/Branding/Logo',
  component: Component,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'The Logo component displays various types of logos including the IHF official logo and partner logos. This component supports SVG-based logos with proper accessibility and responsive behavior.',
      },
    },
    backgrounds: {
      default: 'dhb-navy',
      values: [
        { name: 'dhb-navy', value: '#1a1a2e' },
        { name: 'white', value: '#ffffff' },
        { name: 'dhb-yellow', value: '#feca57' },
        { name: 'dhb-red', value: '#ff4757' },
      ],
    },
  },
  argTypes: {
    logo_type: {
      control: 'select',
      options: ['ihf', 'partner', 'generic'],
      description: 'Type of logo to display',
      table: {
        defaultValue: { summary: 'generic' },
      },
    },
    partner_name: {
      control: 'select',
      options: ['gerflor', 'hummel', 'molten', 'sportfive', 'blaklader', 'lidl', 'wurth', 'grundfos'],
      description: 'Partner name for partner logos',
      if: { arg: 'logo_type', eq: 'partner' },
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
      description: 'Size variant of the logo',
      table: {
        defaultValue: { summary: 'md' },
      },
    },
    variant: {
      control: 'select',
      options: ['default', 'interactive', 'dark-bg', 'light-bg'],
      description: 'Visual variant of the logo',
      table: {
        defaultValue: { summary: 'default' },
      },
    },
    logo_url: {
      control: 'text',
      description: 'URL for generic logo images',
      if: { arg: 'logo_type', eq: 'generic' },
    },
    logo_text: {
      control: 'text',
      description: 'Fallback text for generic logos',
      if: { arg: 'logo_type', eq: 'generic' },
    },
    aria_label: {
      control: 'text',
      description: 'Custom accessibility label',
    },
    sr_only: {
      control: 'boolean',
      description: 'Hide logo visually but keep accessible to screen readers',
      table: {
        defaultValue: { summary: false },
      },
    },
  },
  args: {
    logo_type: 'ihf',
    size: 'md',
    variant: 'default',
    sr_only: false,
  },
}

export default meta

// IHF Official Logo
export const IHFLogo = {
  args: {
    logo_type: 'ihf',
    size: 'lg',
    aria_label: '30th IHF Men\'s Handball World Championship Germany 2027',
  },
}

// Partner Logos - IHF Partners
export const GerflorLogo = {
  args: {
    logo_type: 'partner',
    partner_name: 'gerflor',
    size: 'md',
  },
  parameters: {
    backgrounds: {
      default: 'white',
    },
  },
}

export const HummelLogo = {
  args: {
    logo_type: 'partner',
    partner_name: 'hummel',
    size: 'md',
  },
  parameters: {
    backgrounds: {
      default: 'white',
    },
  },
}

export const MoltenLogo = {
  args: {
    logo_type: 'partner',
    partner_name: 'molten',
    size: 'md',
  },
  parameters: {
    backgrounds: {
      default: 'white',
    },
  },
}

export const SportfiveLogo = {
  args: {
    logo_type: 'partner',
    partner_name: 'sportfive',
    size: 'md',
  },
  parameters: {
    backgrounds: {
      default: 'white',
    },
  },
}

// Event Partner Logos
export const BlakladerLogo = {
  args: {
    logo_type: 'partner',
    partner_name: 'blaklader',
    size: 'md',
  },
  parameters: {
    backgrounds: {
      default: 'white',
    },
  },
}

export const LidlLogo = {
  args: {
    logo_type: 'partner',
    partner_name: 'lidl',
    size: 'md',
  },
  parameters: {
    backgrounds: {
      default: 'white',
    },
  },
}

export const WurthLogo = {
  args: {
    logo_type: 'partner',
    partner_name: 'wurth',
    size: 'md',
  },
  parameters: {
    backgrounds: {
      default: 'white',
    },
  },
}

export const GrundfosLogo = {
  args: {
    logo_type: 'partner',
    partner_name: 'grundfos',
    size: 'md',
  },
  parameters: {
    backgrounds: {
      default: 'white',
    },
  },
}

// Interactive Logo
export const InteractiveLogo = {
  args: {
    logo_type: 'partner',
    partner_name: 'molten',
    size: 'lg',
    variant: 'interactive',
  },
  parameters: {
    backgrounds: {
      default: 'white',
    },
    docs: {
      description: {
        story: 'Interactive logo with hover effects and click functionality.',
      },
    },
  },
}

// Size Variants
export const SizeVariants = {
  render: () => `
    <div style="display: flex; flex-direction: column; gap: 2rem; align-items: center;">
      <div style="display: flex; gap: 1rem; align-items: center;">
        ${Component({ logo_type: 'ihf', size: 'xs' })}
        <span style="color: #feca57;">Extra Small (xs)</span>
      </div>
      <div style="display: flex; gap: 1rem; align-items: center;">
        ${Component({ logo_type: 'ihf', size: 'sm' })}
        <span style="color: #feca57;">Small (sm)</span>
      </div>
      <div style="display: flex; gap: 1rem; align-items: center;">
        ${Component({ logo_type: 'ihf', size: 'md' })}
        <span style="color: #feca57;">Medium (md)</span>
      </div>
      <div style="display: flex; gap: 1rem; align-items: center;">
        ${Component({ logo_type: 'ihf', size: 'lg' })}
        <span style="color: #feca57;">Large (lg)</span>
      </div>
      <div style="display: flex; gap: 1rem; align-items: center;">
        ${Component({ logo_type: 'ihf', size: 'xl' })}
        <span style="color: #feca57;">Extra Large (xl)</span>
      </div>
      <div style="display: flex; gap: 1rem; align-items: center;">
        ${Component({ logo_type: 'ihf', size: 'xxl' })}
        <span style="color: #feca57;">XXL (xxl)</span>
      </div>
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story: 'Showcase of all available logo sizes using the IHF logo.',
      },
    },
  },
}

// IHF Partners Grid
export const IHFPartnersGrid = {
  render: () => `
    <div class="logo-grid" style="background: white; padding: 2rem; border-radius: 12px;">
      <h3 style="grid-column: 1 / -1; text-align: center; color: #1a1a2e; margin-bottom: 1rem;">OFFICIAL IHF PARTNERS</h3>
      ${Component({ logo_type: 'partner', partner_name: 'gerflor', size: 'md' })}
      ${Component({ logo_type: 'partner', partner_name: 'hummel', size: 'md' })}
      ${Component({ logo_type: 'partner', partner_name: 'molten', size: 'md' })}
      ${Component({ logo_type: 'partner', partner_name: 'sportfive', size: 'md' })}
    </div>
  `,
  parameters: {
    backgrounds: {
      default: 'dhb-navy',
    },
    docs: {
      description: {
        story: 'Grid display of all IHF official partner logos as seen in the PDF.',
      },
    },
  },
}

// Event Partners Grid
export const EventPartnersGrid = {
  render: () => `
    <div class="logo-grid" style="background: white; padding: 2rem; border-radius: 12px;">
      <h3 style="grid-column: 1 / -1; text-align: center; color: #1a1a2e; margin-bottom: 1rem;">OFFICIAL EVENT PARTNERS</h3>
      ${Component({ logo_type: 'partner', partner_name: 'blaklader', size: 'md' })}
      ${Component({ logo_type: 'partner', partner_name: 'lidl', size: 'md' })}
      ${Component({ logo_type: 'partner', partner_name: 'wurth', size: 'md' })}
      ${Component({ logo_type: 'partner', partner_name: 'grundfos', size: 'md' })}
    </div>
  `,
  parameters: {
    backgrounds: {
      default: 'dhb-navy',
    },
    docs: {
      description: {
        story: 'Grid display of all official event partner logos as seen in the PDF.',
      },
    },
  },
}

// Complete Footer Logo Section
export const FooterLogoSection = {
  render: () => `
    <div style="background: #1a1a2e; padding: 3rem 2rem; color: white;">
      <div style="max-width: 1200px; margin: 0 auto;">
        
        <!-- IHF Partners Section -->
        <div style="margin-bottom: 3rem;">
          <h2 style="text-align: center; color: white; font-size: 2rem; font-weight: 900; margin-bottom: 2rem; letter-spacing: 0.1em;">OFFICIAL IHF PARTNERS</h2>
          <div class="logo-grid">
            ${Component({ logo_type: 'partner', partner_name: 'gerflor', size: 'lg' })}
            ${Component({ logo_type: 'partner', partner_name: 'hummel', size: 'lg' })}
            ${Component({ logo_type: 'partner', partner_name: 'molten', size: 'lg' })}
            ${Component({ logo_type: 'partner', partner_name: 'sportfive', size: 'lg' })}
          </div>
        </div>

        <!-- Event Partners Section -->
        <div style="margin-bottom: 3rem;">
          <h2 style="text-align: center; color: white; font-size: 2rem; font-weight: 900; margin-bottom: 2rem; letter-spacing: 0.1em;">OFFICIAL EVENT PARTNERS</h2>
          <div class="logo-grid">
            ${Component({ logo_type: 'partner', partner_name: 'blaklader', size: 'lg' })}
            ${Component({ logo_type: 'partner', partner_name: 'lidl', size: 'lg' })}
            ${Component({ logo_type: 'partner', partner_name: 'wurth', size: 'lg' })}
            ${Component({ logo_type: 'partner', partner_name: 'grundfos', size: 'lg' })}
          </div>
        </div>

        <!-- Footer Tagline -->
        <div style="text-align: center; margin-top: 3rem;">
          <h2 style="color: white; font-size: 3rem; font-weight: 900; letter-spacing: 0.15em; text-transform: uppercase; margin: 0;">WHERE HANDBALL LIVES</h2>
        </div>

      </div>
    </div>
  `,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'dhb-navy',
    },
    docs: {
      description: {
        story: 'Complete footer section with partner logos as seen in the PDF design, including proper typography and spacing.',
      },
    },
  },
}

// Generic Logo with Custom Image
export const GenericLogo = {
  args: {
    logo_type: 'generic',
    logo_url: 'https://via.placeholder.com/200x60/1a1a2e/ffffff?text=CUSTOM+LOGO',
    alt_text: 'Custom Logo',
    size: 'md',
  },
  parameters: {
    backgrounds: {
      default: 'white',
    },
    docs: {
      description: {
        story: 'Generic logo implementation with custom image URL.',
      },
    },
  },
}

// Accessibility Showcase
export const AccessibilityShowcase = {
  render: () => `
    <div style="display: flex; flex-direction: column; gap: 2rem; padding: 2rem;">
      <h3 style="color: #feca57; margin-bottom: 1rem;">Accessibility Features</h3>
      
      <!-- Screen Reader Only -->
      <div>
        <p style="color: white; margin-bottom: 0.5rem;">Screen Reader Only (visually hidden):</p>
        ${Component({ logo_type: 'ihf', sr_only: true, sr_text: 'IHF Logo - Screen Reader Only' })}
        <span style="color: #feca57; font-size: 0.9em;">(Logo is present but visually hidden)</span>
      </div>

      <!-- High Contrast Compatible -->
      <div>
        <p style="color: white; margin-bottom: 0.5rem;">High Contrast Mode Compatible:</p>
        ${Component({ logo_type: 'partner', partner_name: 'molten', size: 'lg', classes: 'logo--partner' })}
      </div>

      <!-- Interactive with Focus States -->
      <div>
        <p style="color: white; margin-bottom: 0.5rem;">Interactive with Focus States (try tabbing to it):</p>
        ${Component({ logo_type: 'partner', partner_name: 'hummel', size: 'lg', variant: 'interactive' })}
      </div>
      
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story: 'Demonstration of accessibility features including screen reader support, high contrast mode, and keyboard navigation.',
      },
    },
  },
}

// Error State
export const ErrorState = {
  args: {
    logo_type: 'generic',
    logo_url: 'https://invalid-url-for-testing.com/logo.png',
    logo_text: 'FALLBACK',
    size: 'md',
    classes: 'logo--error',
  },
  parameters: {
    backgrounds: {
      default: 'white',
    },
    docs: {
      description: {
        story: 'Error state when logo fails to load, showing fallback text.',
      },
    },
  },
}