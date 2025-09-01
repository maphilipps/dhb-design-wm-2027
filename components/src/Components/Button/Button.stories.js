import Component from './button.html.twig'

const meta = {
  title: 'Atoms/Button',
  component: Component,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
The DHB Button component provides three main variants matching the PDF design specifications: Primary (red CTA), Secondary (yellow), and Text (navy with underline). All buttons include comprehensive accessibility features and loading states.

## PDF Design Reference
- **Primary Button**: Red "TICKETS" CTA button (#ff4757 background, white text)
- **Secondary Button**: Yellow button variant (#feca57 background, navy text)
- **Text Button**: "READ MORE" links (navy text with hover underline)

## Accessibility Features (WCAG 2.1 AA Compliant)

- **Screen Reader Support**: Full ARIA implementation with labels, descriptions, and state announcements
- **Keyboard Navigation**: Full keyboard support with visible focus indicators
- **Touch Targets**: 44px minimum height for touch-friendly interaction
- **Loading States**: Accessible loading indicators with screen reader announcements
- **High Contrast**: Support for high contrast and forced colors modes
- **Motion Sensitivity**: Respects prefers-reduced-motion for animations

## Interactive States
- **Default**: Base appearance per variant
- **Hover**: Subtle lift effect and color changes
- **Active**: Pressed state with immediate visual feedback
- **Focus**: High-contrast focus rings for keyboard navigation
- **Disabled**: Reduced opacity with proper ARIA attributes
- **Loading**: Spinner animation with accessibility announcements

## Usage Guidelines

1. Use Primary buttons for main CTAs (ticket purchases, form submissions)
2. Use Secondary buttons for alternative actions or secondary CTAs
3. Use Text buttons for navigation links and "read more" actions
4. Always provide meaningful button text (avoid "Click here", "Submit")
5. Use loading states for asynchronous operations
6. Ensure buttons have sufficient contrast in all states
        `,
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
    text: {
      control: 'text',
      description: 'Button text content',
      table: {
        defaultValue: { summary: 'Button' },
      },
    },
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'text', 'text-light', 'outline-primary', 'outline-secondary', 'outline-white'],
      description: 'Button style variant',
      table: {
        defaultValue: { summary: 'primary' },
      },
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Button size (affects padding and typography)',
      table: {
        defaultValue: { summary: 'medium' },
      },
    },
    tag: {
      control: 'select',
      options: ['button', 'a', 'input'],
      description: 'HTML tag for the button element',
      table: {
        defaultValue: { summary: 'button' },
      },
    },
    type: {
      control: 'select',
      options: ['button', 'submit', 'reset'],
      description: 'Button type (for button and input tags)',
      table: {
        defaultValue: { summary: 'button' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    href: {
      control: 'text',
      description: 'URL for anchor tag buttons',
      if: { arg: 'tag', eq: 'a' },
    },
    target: {
      control: 'select',
      options: ['_self', '_blank', '_parent', '_top'],
      description: 'Target for anchor tag buttons',
      if: { arg: 'tag', eq: 'a' },
    },
    rel: {
      control: 'text',
      description: 'Relationship attribute for anchor buttons',
      if: { arg: 'tag', eq: 'a' },
    },
    id: {
      control: 'text',
      description: 'Element ID',
    },
    // Icon controls
    icon_start: {
      control: 'text',
      description: 'SVG icon HTML to display at start of button',
      table: {
        category: 'Icons',
      },
    },
    icon_end: {
      control: 'text',
      description: 'SVG icon HTML to display at end of button',
      table: {
        category: 'Icons',
      },
    },
    // Accessibility controls
    aria_label: {
      control: 'text',
      description: 'ARIA label for screen readers',
      table: {
        category: 'Accessibility',
      },
    },
    aria_describedby: {
      control: 'text',
      description: 'ID of element that describes this button',
      table: {
        category: 'Accessibility',
      },
    },
    aria_expanded: {
      control: 'select',
      options: [null, 'true', 'false'],
      description: 'ARIA expanded state for dropdown buttons',
      table: {
        category: 'Accessibility',
      },
    },
    aria_pressed: {
      control: 'select',
      options: [null, 'true', 'false'],
      description: 'ARIA pressed state for toggle buttons',
      table: {
        category: 'Accessibility',
      },
    },
    role: {
      control: 'text',
      description: 'ARIA role override',
      table: {
        category: 'Accessibility',
      },
    },
    tabindex: {
      control: 'number',
      description: 'Tab order for keyboard navigation',
      table: {
        category: 'Accessibility',
        defaultValue: { summary: '0' },
      },
    },
    // Alpine.js controls
    alpine_click: {
      control: 'text',
      description: 'Alpine.js @click handler',
      table: {
        category: 'Alpine.js',
      },
    },
    alpine_data: {
      control: 'text',
      description: 'Alpine.js x-data object',
      table: {
        category: 'Alpine.js',
      },
    },
    loading: {
      control: 'boolean',
      description: 'Show loading state with spinner',
      table: {
        category: 'Alpine.js',
        defaultValue: { summary: 'false' },
      },
    },
  },
  args: {
    text: 'TICKETS',
    variant: 'primary',
    size: 'medium',
    tag: 'button',
    type: 'button',
    disabled: false,
  },
}

export default meta

// Primary button variants
export const PrimaryButton = {
  args: {
    text: 'TICKETS',
    variant: 'primary',
    size: 'medium',
  },
}

export const PrimaryButtonSmall = {
  args: {
    text: 'Buy Now',
    variant: 'primary',
    size: 'small',
  },
}

export const PrimaryButtonLarge = {
  args: {
    text: 'GET YOUR TICKETS NOW',
    variant: 'primary',
    size: 'large',
  },
}

// Secondary button variants
export const SecondaryButton = {
  args: {
    text: 'Learn More',
    variant: 'secondary',
    size: 'medium',
  },
}

export const SecondaryButtonSmall = {
  args: {
    text: 'Details',
    variant: 'secondary',
    size: 'small',
  },
}

export const SecondaryButtonLarge = {
  args: {
    text: 'EXPLORE VENUES',
    variant: 'secondary',
    size: 'large',
  },
}

// Text button variants
export const TextButton = {
  args: {
    text: 'READ MORE',
    variant: 'text',
    size: 'medium',
  },
  parameters: {
    backgrounds: {
      default: 'white',
    },
  },
}

export const TextButtonLight = {
  args: {
    text: 'View Details',
    variant: 'text-light',
    size: 'medium',
  },
  parameters: {
    backgrounds: {
      default: 'dhb-navy',
    },
  },
}

// Outline button variants
export const OutlinePrimary = {
  args: {
    text: 'Secondary Action',
    variant: 'outline-primary',
    size: 'medium',
  },
  parameters: {
    backgrounds: {
      default: 'white',
    },
  },
}

export const OutlineSecondary = {
  args: {
    text: 'Alternative',
    variant: 'outline-secondary',
    size: 'medium',
  },
  parameters: {
    backgrounds: {
      default: 'dhb-navy',
    },
  },
}

export const OutlineWhite = {
  args: {
    text: 'White Outline',
    variant: 'outline-white',
    size: 'medium',
  },
  parameters: {
    backgrounds: {
      default: 'dhb-navy',
    },
  },
}

// Button states
export const DisabledStates = {
  render: () => \`
    <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
      \${Component({ text: 'Primary Disabled', variant: 'primary', disabled: true })}
      \${Component({ text: 'Secondary Disabled', variant: 'secondary', disabled: true })}
      \${Component({ text: 'Text Disabled', variant: 'text', disabled: true })}
    </div>
  \`,
  parameters: {
    docs: {
      description: {
        story: 'Buttons in disabled state with reduced opacity and no interaction.',
      },
    },
  },
}

export const LoadingStates = {
  render: () => \`
    <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
      \${Component({ 
        text: 'Processing...', 
        variant: 'primary', 
        loading: true,
        alpine_data: 'buttonComponent.initButton(true)'
      })}
      \${Component({ 
        text: 'Loading...', 
        variant: 'secondary', 
        loading: true,
        alpine_data: 'buttonComponent.initButton(true)'
      })}
    </div>
  \`,
  parameters: {
    docs: {
      description: {
        story: 'Buttons with loading spinners for asynchronous operations.',
      },
    },
  },
}

// Size comparison
export const SizeComparison = {
  render: () => \`
    <div style="display: flex; align-items: center; gap: 1rem; flex-wrap: wrap;">
      \${Component({ text: 'Small', variant: 'primary', size: 'small' })}
      \${Component({ text: 'Medium', variant: 'primary', size: 'medium' })}
      \${Component({ text: 'Large', variant: 'primary', size: 'large' })}
    </div>
  \`,
  parameters: {
    docs: {
      description: {
        story: 'Button size variants showing relative proportions and touch target compliance.',
      },
    },
  },
}

// Buttons with icons
export const ButtonsWithIcons = {
  render: () => \`
    <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
      \${Component({ 
        text: 'Download', 
        variant: 'primary',
        icon_start: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" /></svg>'
      })}
      \${Component({ 
        text: 'Next', 
        variant: 'secondary',
        icon_end: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>'
      })}
      \${Component({ 
        text: 'External Link', 
        variant: 'text',
        icon_end: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" /></svg>'
      })}
    </div>
  \`,
  parameters: {
    docs: {
      description: {
        story: 'Buttons with icons at start or end positions for enhanced visual communication.',
      },
    },
    backgrounds: {
      default: 'white',
    },
  },
}

// Link buttons
export const LinkButtons = {
  render: () => \`
    <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
      \${Component({ 
        text: 'Ticket Store', 
        variant: 'primary',
        tag: 'a',
        href: '/tickets',
        target: '_blank',
        rel: 'noopener noreferrer'
      })}
      \${Component({ 
        text: 'Match Schedule', 
        variant: 'secondary',
        tag: 'a',
        href: '/schedule'
      })}
      \${Component({ 
        text: 'Read Article', 
        variant: 'text',
        tag: 'a',
        href: '/news/article'
      })}
    </div>
  \`,
  parameters: {
    docs: {
      description: {
        story: 'Buttons rendered as anchor tags for navigation, maintaining button styling with proper link semantics.',
      },
    },
    backgrounds: {
      default: 'white',
    },
  },
}

// PDF Examples - Real use cases from the design
export const PDFExamples = {
  render: () => \`
    <div style="display: flex; flex-direction: column; gap: 3rem;">
      
      <!-- Hero Section CTA -->
      <div style="text-align: center; padding: 3rem; background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%); border-radius: 1rem;">
        <h2 style="color: white; font-size: 2.5rem; font-weight: bold; margin-bottom: 2rem; text-shadow: 0 2px 4px rgba(0,0,0,0.3);">World Championship</h2>
        <p style="color: rgba(255,255,255,0.9); font-size: 1.25rem; margin-bottom: 2rem;">Germany 14.- 31.01.2027</p>
        \${Component({ 
          text: 'TICKETS', 
          variant: 'primary', 
          size: 'large',
          aria_label: 'Purchase tickets for DHB Handball World Championship 2027'
        })}
      </div>
      
      <!-- News Section -->
      <div style="background: white; padding: 2rem; border-radius: 1rem;">
        <h3 style="color: #1a1a2e; font-size: 1.5rem; font-weight: bold; margin-bottom: 1.5rem;">Latest News</h3>
        <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
          \${Component({ 
            text: 'READ MORE', 
            variant: 'text', 
            size: 'small',
            tag: 'a',
            href: '#article-1'
          })}
          \${Component({ 
            text: 'View All News', 
            variant: 'secondary', 
            size: 'medium'
          })}
        </div>
      </div>
      
      <!-- Venue Section -->
      <div style="background: #1a1a2e; padding: 2rem; border-radius: 1rem;">
        <h3 style="color: #feca57; font-size: 1.5rem; font-weight: bold; margin-bottom: 1.5rem; text-transform: uppercase;">Venues</h3>
        <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
          \${Component({ 
            text: 'EXPLORE VENUES', 
            variant: 'secondary', 
            size: 'medium'
          })}
          \${Component({ 
            text: 'View Details', 
            variant: 'text-light', 
            size: 'small'
          })}
        </div>
      </div>
      
      <!-- Form Actions -->
      <div style="background: white; padding: 2rem; border-radius: 1rem; border: 2px solid #f0f0f0;">
        <h3 style="color: #1a1a2e; font-size: 1.25rem; font-weight: bold; margin-bottom: 1.5rem;">Newsletter Signup</h3>
        <div style="display: flex; gap: 1rem; align-items: center; flex-wrap: wrap;">
          <input type="email" placeholder="Enter email address" style="flex: 1; min-width: 250px; padding: 0.75rem; border: 2px solid #e0e0e0; border-radius: 0.5rem;">
          \${Component({ 
            text: 'Subscribe', 
            variant: 'primary', 
            type: 'submit',
            size: 'medium'
          })}
        </div>
      </div>
      
    </div>
  \`,
  parameters: {
    docs: {
      description: {
        story: 'Real-world button usage examples from the DHB Handball WM 2027 PDF design, showing how buttons integrate with actual content layouts and user flows.',
      },
    },
    backgrounds: {
      default: 'white',
    },
  },
}

// Interactive Alpine.js examples
export const InteractiveExamples = {
  render: () => \`
    <div style="display: flex; flex-direction: column; gap: 2rem;">
      
      <!-- Loading Demo -->
      <div style="background: white; padding: 2rem; border-radius: 1rem;">
        <h4 style="color: #1a1a2e; margin-bottom: 1rem;">Loading State Demo</h4>
        \${Component({ 
          text: 'Submit Form', 
          variant: 'primary',
          alpine_data: 'buttonComponent.initButton()',
          alpine_click: 'handleClick(() => new Promise(resolve => setTimeout(resolve, 3000)))'
        })}
        <p style="color: #666; font-size: 0.875rem; margin-top: 0.5rem;">Click to see 3-second loading state</p>
      </div>
      
      <!-- Toggle Button -->
      <div style="background: #1a1a2e; padding: 2rem; border-radius: 1rem;">
        <h4 style="color: white; margin-bottom: 1rem;">Toggle Button</h4>
        \${Component({ 
          text: 'Toggle Favorites', 
          variant: 'outline-white',
          alpine_data: '{ pressed: false }',
          alpine_click: 'pressed = !pressed',
          'x-bind:aria-pressed': 'pressed.toString()'
        })}
        <p style="color: rgba(255,255,255,0.7); font-size: 0.875rem; margin-top: 0.5rem;">ARIA pressed state toggles on click</p>
      </div>
      
    </div>
  \`,
  parameters: {
    docs: {
      description: {
        story: 'Interactive button examples using Alpine.js for loading states, toggles, and dynamic behaviors.',
      },
    },
  },
}

// Accessibility showcase
export const AccessibilityFeatures = {
  render: () => \`
    <div style="display: flex; flex-direction: column; gap: 3rem;">
      
      <!-- Screen Reader Support -->
      <div style="background: white; padding: 2rem; border-radius: 1rem;">
        <h4 style="color: #1a1a2e; margin-bottom: 1rem; font-size: 1.125rem;">Screen Reader Support</h4>
        \${Component({ 
          text: 'Buy Tickets', 
          variant: 'primary',
          aria_label: 'Buy tickets for DHB Handball World Championship 2027 in Germany',
          aria_describedby: 'ticket-info'
        })}
        <p id="ticket-info" style="color: #666; font-size: 0.875rem; margin-top: 0.5rem;">
          Enhanced ARIA label provides context: "Buy tickets for DHB Handball World Championship 2027 in Germany"
        </p>
      </div>
      
      <!-- Keyboard Navigation -->
      <div style="background: #1a1a2e; padding: 2rem; border-radius: 1rem;">
        <h4 style="color: white; margin-bottom: 1rem; font-size: 1.125rem;">Keyboard Navigation</h4>
        <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
          \${Component({ text: 'First', variant: 'outline-white', tabindex: 0 })}
          \${Component({ text: 'Second', variant: 'outline-white', tabindex: 0 })}
          \${Component({ text: 'Third', variant: 'outline-white', tabindex: 0 })}
        </div>
        <p style="color: rgba(255,255,255,0.7); font-size: 0.875rem; margin-top: 0.5rem;">
          Use Tab key to navigate, Enter/Space to activate
        </p>
      </div>
      
      <!-- High Contrast Support -->
      <div style="background: #f0f0f0; padding: 2rem; border-radius: 1rem; border: 2px solid #ccc;">
        <h4 style="color: #1a1a2e; margin-bottom: 1rem; font-size: 1.125rem;">High Contrast Mode Ready</h4>
        <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
          \${Component({ text: 'Primary', variant: 'primary' })}
          \${Component({ text: 'Secondary', variant: 'secondary' })}
          \${Component({ text: 'Text Link', variant: 'text' })}
        </div>
        <p style="color: #666; font-size: 0.875rem; margin-top: 0.5rem;">
          Buttons adapt to forced-colors mode automatically
        </p>
      </div>
      
      <!-- Touch Target Compliance -->
      <div style="background: white; padding: 2rem; border-radius: 1rem;">
        <h4 style="color: #1a1a2e; margin-bottom: 1rem; font-size: 1.125rem;">Touch Target Compliance</h4>
        <div style="display: flex; gap: 0.5rem; align-items: center; flex-wrap: wrap;">
          \${Component({ text: 'Small (32px)', variant: 'primary', size: 'small' })}
          \${Component({ text: 'Medium (44px)', variant: 'primary', size: 'medium' })}
          \${Component({ text: 'Large (56px)', variant: 'primary', size: 'large' })}
        </div>
        <p style="color: #666; font-size: 0.875rem; margin-top: 0.5rem;">
          Medium and Large sizes meet 44px minimum touch target guidelines
        </p>
      </div>
      
    </div>
  \`,
  parameters: {
    docs: {
      description: {
        story: \`
# Accessibility Features

The DHB Button component includes comprehensive accessibility features for WCAG 2.1 AA compliance:

## Screen Reader Support
- **aria-label**: Enhanced descriptions beyond visible text
- **aria-describedby**: Links to additional context
- **aria-pressed**: Toggle state for screen readers
- **aria-expanded**: Dropdown state announcements

## Keyboard Navigation  
- Full keyboard support with Tab, Enter, and Space keys
- High-contrast focus indicators with 2px ring
- Proper focus management for disabled states
- Sequential navigation with logical tab order

## Touch Accessibility
- Medium (44px) and Large (56px) sizes meet touch target minimums
- Enhanced touch areas for better mobile interaction
- Appropriate spacing to prevent accidental activation

## Visual Accessibility
- High contrast mode support with forced-colors media query
- Respects prefers-reduced-motion for animations
- Color-independent interaction states (not just color changes)
- Enhanced shadows and borders for better definition

## Loading States
- Screen reader announcements for state changes
- ARIA-live regions for dynamic content updates
- Proper button labeling during async operations
- Keyboard interaction prevention during loading
        \`,
      },
    },
  },
}