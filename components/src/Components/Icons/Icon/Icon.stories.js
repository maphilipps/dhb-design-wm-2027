import Component from './icon.html.twig'

const meta = {
  title: 'Atoms/Icons/Icon',
  component: Component,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'The DHB Icon component provides a comprehensive library of SVG icons for the Handball World Championship 2027 website. Icons are scalable, accessible, and support various color themes and interactive states.',
      },
    },
    backgrounds: {
      default: 'dhb-navy',
      values: [
        { name: 'dhb-navy', value: '#1a1a2e' },
        { name: 'white', value: '#ffffff' },
        { name: 'dhb-yellow', value: '#feca57' },
        { name: 'dhb-red', value: '#ff4757' },
        { name: 'gray', value: '#6c757d' },
      ],
    },
  },
  argTypes: {
    name: {
      control: 'select',
      options: [
        'handball',
        'calendar',
        'location',
        'arrow-up',
        'arrow-down',
        'arrow-left',
        'arrow-right',
        'menu',
        'close',
        'home',
        'clock',
        'news',
        'trophy',
        'search',
        'user',
        'settings',
        'share',
        'flag-de',
        'flag-en',
        'medal',
        'language',
      ],
      description: 'The name of the icon to display',
      table: {
        defaultValue: { summary: 'handball' },
      },
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Size variant of the icon',
      table: {
        defaultValue: { summary: 'md' },
      },
    },
    color: {
      control: 'select',
      options: ['currentColor', 'navy', 'white', 'yellow', 'red', 'gray-500', 'gray-700'],
      description: 'Color variant of the icon',
      table: {
        defaultValue: { summary: 'currentColor' },
      },
    },
    interactive: {
      control: 'boolean',
      description: 'Make the icon interactive (clickable/focusable)',
      table: {
        defaultValue: { summary: false },
      },
    },
    aria_label: {
      control: 'text',
      description: 'Accessible label for screen readers',
    },
    classes: {
      control: 'text',
      description: 'Additional CSS classes',
    },
  },
  args: {
    name: 'handball',
    size: 'md',
    color: 'currentColor',
    interactive: false,
  },
}

export default meta

// Default icon
export const Default = {
  args: {
    name: 'handball',
    size: 'md',
    color: 'white',
    aria_label: 'Handball icon',
  },
}

// Size variants
export const ExtraSmall = {
  args: {
    name: 'handball',
    size: 'xs',
    color: 'white',
  },
}

export const Small = {
  args: {
    name: 'handball',
    size: 'sm',
    color: 'white',
  },
}

export const Medium = {
  args: {
    name: 'handball',
    size: 'md',
    color: 'white',
  },
}

export const Large = {
  args: {
    name: 'handball',
    size: 'lg',
    color: 'white',
  },
}

export const ExtraLarge = {
  args: {
    name: 'handball',
    size: 'xl',
    color: 'white',
  },
}

// Color variants
export const NavyOnWhite = {
  args: {
    name: 'handball',
    size: 'lg',
    color: 'navy',
  },
  parameters: {
    backgrounds: { default: 'white' },
  },
}

export const WhiteOnNavy = {
  args: {
    name: 'handball',
    size: 'lg',
    color: 'white',
  },
  parameters: {
    backgrounds: { default: 'dhb-navy' },
  },
}

export const YellowAccent = {
  args: {
    name: 'trophy',
    size: 'lg',
    color: 'yellow',
  },
  parameters: {
    backgrounds: { default: 'dhb-navy' },
  },
}

export const RedAccent = {
  args: {
    name: 'medal',
    size: 'lg',
    color: 'red',
  },
  parameters: {
    backgrounds: { default: 'dhb-navy' },
  },
}

// Interactive icon
export const Interactive = {
  args: {
    name: 'menu',
    size: 'lg',
    color: 'white',
    interactive: true,
    aria_label: 'Open navigation menu',
  },
}

// Navigation icons
export const NavigationIcons = {
  render: () => `
    <div style="display: flex; gap: 2rem; align-items: center; flex-wrap: wrap;">
      ${Component({ name: 'menu', size: 'lg', color: 'white', aria_label: 'Menu' })}
      ${Component({ name: 'close', size: 'lg', color: 'white', aria_label: 'Close' })}
      ${Component({ name: 'arrow-left', size: 'lg', color: 'white', aria_label: 'Previous' })}
      ${Component({ name: 'arrow-right', size: 'lg', color: 'white', aria_label: 'Next' })}
      ${Component({ name: 'arrow-up', size: 'lg', color: 'white', aria_label: 'Up' })}
      ${Component({ name: 'arrow-down', size: 'lg', color: 'white', aria_label: 'Down' })}
      ${Component({ name: 'home', size: 'lg', color: 'white', aria_label: 'Home' })}
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story: 'Navigation icons for menu controls, arrows, and home navigation.',
      },
    },
  },
}

// Content icons
export const ContentIcons = {
  render: () => `
    <div style="display: flex; gap: 2rem; align-items: center; flex-wrap: wrap;">
      ${Component({ name: 'calendar', size: 'lg', color: 'white', aria_label: 'Schedule' })}
      ${Component({ name: 'location', size: 'lg', color: 'white', aria_label: 'Location' })}
      ${Component({ name: 'clock', size: 'lg', color: 'white', aria_label: 'Time' })}
      ${Component({ name: 'news', size: 'lg', color: 'white', aria_label: 'News' })}
      ${Component({ name: 'search', size: 'lg', color: 'white', aria_label: 'Search' })}
      ${Component({ name: 'user', size: 'lg', color: 'white', aria_label: 'User Profile' })}
      ${Component({ name: 'settings', size: 'lg', color: 'white', aria_label: 'Settings' })}
      ${Component({ name: 'share', size: 'lg', color: 'white', aria_label: 'Share' })}
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story: 'Content and interface icons for common website functionality.',
      },
    },
  },
}

// Sport and competition icons
export const SportIcons = {
  render: () => `
    <div style="display: flex; gap: 2rem; align-items: center; flex-wrap: wrap;">
      ${Component({ name: 'handball', size: 'xl', color: 'yellow', aria_label: 'Handball' })}
      ${Component({ name: 'trophy', size: 'xl', color: 'yellow', aria_label: 'Championship Trophy' })}
      ${Component({ name: 'medal', size: 'xl', color: 'red', aria_label: 'Medal Award' })}
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story: 'Sport-specific icons for handball championship branding.',
      },
    },
    backgrounds: { default: 'dhb-navy' },
  },
}

// Language and country icons
export const CountryIcons = {
  render: () => `
    <div style="display: flex; gap: 2rem; align-items: center; flex-wrap: wrap;">
      ${Component({ name: 'flag-de', size: 'lg', color: 'currentColor', aria_label: 'German', classes: 'icon--flag' })}
      ${Component({ name: 'flag-en', size: 'lg', color: 'currentColor', aria_label: 'English', classes: 'icon--flag' })}
      ${Component({ name: 'language', size: 'lg', color: 'white', aria_label: 'Language Selection' })}
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story: 'Country flags and language selection icons.',
      },
    },
  },
}

// All sizes showcase
export const AllSizes = {
  render: () => `
    <div style="display: flex; flex-direction: column; gap: 2rem; align-items: center;">
      <div style="display: flex; align-items: center; gap: 1rem;">
        <span style="color: white; min-width: 60px; font-size: 0.875rem;">XS (16px)</span>
        ${Component({ name: 'handball', size: 'xs', color: 'white' })}
      </div>
      <div style="display: flex; align-items: center; gap: 1rem;">
        <span style="color: white; min-width: 60px; font-size: 0.875rem;">SM (20px)</span>
        ${Component({ name: 'handball', size: 'sm', color: 'white' })}
      </div>
      <div style="display: flex; align-items: center; gap: 1rem;">
        <span style="color: white; min-width: 60px; font-size: 0.875rem;">MD (24px)</span>
        ${Component({ name: 'handball', size: 'md', color: 'white' })}
      </div>
      <div style="display: flex; align-items: center; gap: 1rem;">
        <span style="color: white; min-width: 60px; font-size: 0.875rem;">LG (32px)</span>
        ${Component({ name: 'handball', size: 'lg', color: 'white' })}
      </div>
      <div style="display: flex; align-items: center; gap: 1rem;">
        <span style="color: white; min-width: 60px; font-size: 0.875rem;">XL (48px)</span>
        ${Component({ name: 'handball', size: 'xl', color: 'white' })}
      </div>
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story: 'Complete size system demonstration from 16px to 48px.',
      },
    },
  },
}

// All colors showcase
export const AllColors = {
  render: () => `
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(120px, 1fr)); gap: 2rem; align-items: center;">
      <div style="text-align: center;">
        <div style="margin-bottom: 0.5rem;">${Component({ name: 'handball', size: 'xl', color: 'navy' })}</div>
        <span style="color: white; font-size: 0.75rem;">Navy</span>
      </div>
      <div style="text-align: center;">
        <div style="margin-bottom: 0.5rem;">${Component({ name: 'handball', size: 'xl', color: 'white' })}</div>
        <span style="color: white; font-size: 0.75rem;">White</span>
      </div>
      <div style="text-align: center;">
        <div style="margin-bottom: 0.5rem;">${Component({ name: 'handball', size: 'xl', color: 'yellow' })}</div>
        <span style="color: white; font-size: 0.75rem;">Yellow</span>
      </div>
      <div style="text-align: center;">
        <div style="margin-bottom: 0.5rem;">${Component({ name: 'handball', size: 'xl', color: 'red' })}</div>
        <span style="color: white; font-size: 0.75rem;">Red</span>
      </div>
      <div style="text-align: center;">
        <div style="margin-bottom: 0.5rem;">${Component({ name: 'handball', size: 'xl', color: 'gray-500' })}</div>
        <span style="color: white; font-size: 0.75rem;">Gray</span>
      </div>
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story: 'Brand color system applied to icons.',
      },
    },
  },
}

// Complete icon library
export const CompleteLibrary = {
  render: () => {
    const iconNames = [
      'handball', 'calendar', 'location', 'arrow-up', 'arrow-down', 'arrow-left', 'arrow-right',
      'menu', 'close', 'home', 'clock', 'news', 'trophy', 'search', 'user', 'settings',
      'share', 'flag-de', 'flag-en', 'medal', 'language'
    ];
    
    return `
      <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(120px, 1fr)); gap: 1.5rem;">
        ${iconNames.map(name => `
          <div style="display: flex; flex-direction: column; align-items: center; gap: 0.5rem; padding: 1rem; border: 1px solid rgba(255,255,255,0.1); border-radius: 0.5rem;">
            ${Component({ name, size: 'lg', color: 'white', aria_label: name.replace('-', ' ') })}
            <span style="color: white; font-size: 0.75rem; text-align: center; text-transform: capitalize;">${name.replace('-', ' ')}</span>
          </div>
        `).join('')}
      </div>
    `;
  },
  parameters: {
    docs: {
      description: {
        story: 'Complete icon library showing all available icons with their names.',
      },
    },
    layout: 'fullscreen',
  },
}

// Interactive examples with Alpine.js
export const InteractiveExamples = {
  render: () => `
    <div style="display: flex; flex-direction: column; gap: 2rem; align-items: center;">
      <div style="display: flex; gap: 1rem; align-items: center;">
        <span style="color: white; margin-right: 1rem;">Navigation:</span>
        ${Component({ 
          name: 'menu', 
          size: 'lg', 
          color: 'white', 
          interactive: true,
          aria_label: 'Toggle menu',
          x_data: 'iconComponent({ active: false })',
          x_on: 'toggle()'
        })}
        ${Component({ 
          name: 'search', 
          size: 'lg', 
          color: 'white', 
          interactive: true,
          aria_label: 'Open search',
          x_data: 'iconComponent()',
          x_on: 'handleClick($event)'
        })}
        ${Component({ 
          name: 'user', 
          size: 'lg', 
          color: 'white', 
          interactive: true,
          aria_label: 'User menu',
          x_data: 'iconComponent()',
          x_on: 'handleClick($event)'
        })}
      </div>
      
      <div style="display: flex; gap: 1rem; align-items: center;">
        <span style="color: white; margin-right: 1rem;">Actions:</span>
        ${Component({ 
          name: 'share', 
          size: 'lg', 
          color: 'yellow', 
          interactive: true,
          aria_label: 'Share content',
          x_data: 'iconComponent({ animation: "pulse" })',
          x_on: 'handleClick($event)',
          classes: 'icon--pulse'
        })}
        ${Component({ 
          name: 'trophy', 
          size: 'lg', 
          color: 'yellow', 
          interactive: true,
          aria_label: 'View achievements',
          x_data: 'iconComponent()',
          x_on: 'handleClick($event)'
        })}
      </div>
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story: 'Interactive icons with Alpine.js functionality and keyboard navigation support.',
      },
    },
  },
}

// Accessibility examples
export const AccessibilityExamples = {
  render: () => `
    <div style="display: flex; flex-direction: column; gap: 2rem;">
      <div>
        <h3 style="color: white; margin-bottom: 1rem; font-size: 1rem;">Decorative icons (aria-hidden):</h3>
        <div style="display: flex; gap: 1rem; align-items: center;">
          <span style="color: white;">Match Schedule</span>
          ${Component({ name: 'calendar', size: 'md', color: 'white', role: 'presentation' })}
          <span style="color: white;">Location</span>
          ${Component({ name: 'location', size: 'md', color: 'white', role: 'presentation' })}
        </div>
      </div>
      
      <div>
        <h3 style="color: white; margin-bottom: 1rem; font-size: 1rem;">Informative icons (with labels):</h3>
        <div style="display: flex; gap: 2rem; align-items: center;">
          ${Component({ 
            name: 'trophy', 
            size: 'lg', 
            color: 'yellow', 
            aria_label: 'Championship trophy - competition results',
            role: 'img'
          })}
          ${Component({ 
            name: 'handball', 
            size: 'lg', 
            color: 'white', 
            aria_label: 'Handball sport - official game ball',
            role: 'img'
          })}
        </div>
      </div>
      
      <div>
        <h3 style="color: white; margin-bottom: 1rem; font-size: 1rem;">Interactive icons (focusable):</h3>
        <div style="display: flex; gap: 1rem; align-items: center;">
          ${Component({ 
            name: 'menu', 
            size: 'lg', 
            color: 'white', 
            interactive: true,
            aria_label: 'Open main navigation menu',
            role: 'button'
          })}
          ${Component({ 
            name: 'search', 
            size: 'lg', 
            color: 'white', 
            interactive: true,
            aria_label: 'Open search functionality',
            role: 'button'
          })}
          ${Component({ 
            name: 'settings', 
            size: 'lg', 
            color: 'white', 
            interactive: true,
            aria_label: 'Open settings and preferences',
            role: 'button'
          })}
        </div>
      </div>
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story: 'Examples showing proper accessibility implementation with appropriate roles and labels.',
      },
    },
  },
}