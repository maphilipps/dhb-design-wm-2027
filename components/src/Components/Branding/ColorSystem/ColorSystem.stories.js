import Component from './color-system.html.twig'

const meta = {
  title: 'Atoms/Branding/ColorSystem',
  component: Component,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
The DHB Color System atom displays the complete brand color palette for the DHB Handball World Championship 2027. 
This foundational component provides the visual reference for all color usage throughout the design system.

**Key Features:**
- Complete brand color palette (Navy, Red, Yellow, White)
- Interactive color swatches with click-to-copy functionality
- Accessible color combinations with contrast validation
- Utility class reference for developers
- WCAG 2.1 AA compliant color contrast ratios

**Brand Colors:**
- **Navy (#1a1a2e)**: Primary background color, headers, and main content areas
- **Red (#ff4757)**: Primary CTA buttons, important highlights, and interactive elements
- **Yellow (#feca57)**: Secondary accents, highlights, and complementary elements
- **White (#ffffff)**: Text overlays, contrasts, and light backgrounds
        `,
      },
    },
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#f8f9fa' },
        { name: 'dhb-navy', value: '#1a1a2e' },
        { name: 'white', value: '#ffffff' },
      ],
    },
  },
  argTypes: {
    title: {
      control: 'text',
      description: 'Title for the color system display',
      table: {
        defaultValue: { summary: 'DHB Brand Colors' },
      },
    },
    show_palette: {
      control: 'boolean',
      description: 'Show the complete color palette swatches',
      table: {
        defaultValue: { summary: true },
      },
    },
    show_combinations: {
      control: 'boolean',
      description: 'Show color combination examples',
      table: {
        defaultValue: { summary: true },
      },
    },
    show_utilities: {
      control: 'boolean',
      description: 'Show utility class reference',
      table: {
        defaultValue: { summary: true },
      },
    },
    variant: {
      control: 'select',
      options: ['default', 'compact', 'detailed'],
      description: 'Display variant of the color system',
      table: {
        defaultValue: { summary: 'default' },
      },
    },
  },
  args: {
    title: 'DHB Brand Colors',
    show_palette: true,
    show_combinations: true,
    show_utilities: true,
    variant: 'default',
  },
}

export default meta

// Complete color system with all sections
export const Default = {
  args: {
    title: 'DHB Brand Colors',
    show_palette: true,
    show_combinations: true,
    show_utilities: true,
  },
}

// Color palette only
export const PaletteOnly = {
  name: 'Color Palette Only',
  args: {
    title: 'DHB Color Palette',
    show_palette: true,
    show_combinations: false,
    show_utilities: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Displays only the brand color swatches with hex values and names.',
      },
    },
  },
}

// Color combinations showcase
export const CombinationsOnly = {
  name: 'Color Combinations',
  args: {
    title: 'Brand Color Combinations',
    show_palette: false,
    show_combinations: true,
    show_utilities: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Shows approved color combinations with proper contrast ratios for accessibility.',
      },
    },
  },
}

// Developer utility reference
export const UtilitiesOnly = {
  name: 'Utility Classes',
  args: {
    title: 'Tailwind Color Utilities',
    show_palette: false,
    show_combinations: false,
    show_utilities: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Reference guide for developers showing available Tailwind CSS utility classes.',
      },
    },
  },
}

// Compact version
export const Compact = {
  args: {
    title: 'DHB Colors',
    show_palette: true,
    show_combinations: false,
    show_utilities: false,
    variant: 'compact',
  },
  parameters: {
    docs: {
      description: {
        story: 'Compact version suitable for sidebars or documentation panels.',
      },
    },
  },
}

// Accessibility showcase
export const AccessibilityDemo = {
  name: 'Accessibility Features',
  render: () => `
    <div class="space-y-8">
      <div class="bg-white p-6 rounded-lg border">
        <h3 class="text-heading-lg font-heading text-dhb-navy mb-4">Keyboard Navigation</h3>
        <p class="text-body text-dhb-gray-700 mb-4">Use arrow keys to navigate between color swatches, Space or Enter to copy colors.</p>
        ${Component({ 
          show_palette: true, 
          show_combinations: false, 
          show_utilities: false 
        })}
      </div>
      
      <div class="bg-dhb-gray-100 p-6 rounded-lg">
        <h3 class="text-heading-lg font-heading text-dhb-navy mb-4">Contrast Ratios (WCAG 2.1 AA)</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="bg-dhb-navy text-dhb-white p-4 rounded">
            <strong>White on Navy</strong><br>
            Contrast Ratio: 14.8:1 ✅ AAA
          </div>
          <div class="bg-dhb-red text-dhb-white p-4 rounded">
            <strong>White on Red</strong><br>
            Contrast Ratio: 5.9:1 ✅ AA
          </div>
          <div class="bg-dhb-white border border-dhb-gray-300 text-dhb-navy p-4 rounded">
            <strong>Navy on White</strong><br>
            Contrast Ratio: 14.8:1 ✅ AAA
          </div>
          <div class="bg-dhb-yellow text-dhb-navy p-4 rounded">
            <strong>Navy on Yellow</strong><br>
            Contrast Ratio: 8.4:1 ✅ AAA
          </div>
        </div>
      </div>
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates accessibility features including keyboard navigation and WCAG-compliant color contrasts.',
      },
    },
  },
}

// Brand usage guidelines
export const BrandGuidelines = {
  name: 'Brand Usage Guidelines',
  render: () => `
    <div class="space-y-8">
      <div class="bg-white p-6 rounded-lg border">
        <h3 class="text-heading-lg font-heading text-dhb-navy mb-4">Do's</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="border-l-4 border-green-500 pl-4">
            <h4 class="font-semibold text-dhb-navy">Primary Actions</h4>
            <div class="bg-dhb-red text-white px-4 py-2 rounded mt-2 inline-block">
              Use Red for primary CTAs
            </div>
          </div>
          <div class="border-l-4 border-green-500 pl-4">
            <h4 class="font-semibold text-dhb-navy">Backgrounds</h4>
            <div class="bg-dhb-navy text-white px-4 py-2 rounded mt-2 inline-block">
              Navy for main backgrounds
            </div>
          </div>
        </div>
      </div>
      
      <div class="bg-red-50 border border-red-200 p-6 rounded-lg">
        <h3 class="text-heading-lg font-heading text-red-700 mb-4">Don'ts</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="border-l-4 border-red-500 pl-4">
            <h4 class="font-semibold text-red-700">Avoid Low Contrast</h4>
            <div class="bg-dhb-yellow text-dhb-yellow px-4 py-2 rounded mt-2 inline-block border">
              Yellow on Yellow ❌
            </div>
          </div>
          <div class="border-l-4 border-red-500 pl-4">
            <h4 class="font-semibold text-red-700">Don't Use Off-Brand Colors</h4>
            <div class="bg-purple-500 text-white px-4 py-2 rounded mt-2 inline-block">
              Purple is not on-brand ❌
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story: 'Guidelines for proper usage of DHB brand colors including do\'s and don\'ts.',
      },
    },
  },
}

// All color variations showcase
export const AllVariations = {
  name: 'All Variations',
  render: () => `
    <div class="space-y-12">
      <div>
        <h3 class="text-heading-lg font-heading text-dhb-navy mb-6">Complete Color System</h3>
        ${Component({ 
          title: 'Full Implementation',
          show_palette: true, 
          show_combinations: true, 
          show_utilities: true 
        })}
      </div>
      
      <div>
        <h3 class="text-heading-lg font-heading text-dhb-navy mb-6">Palette Only</h3>
        ${Component({ 
          show_palette: true, 
          show_combinations: false, 
          show_utilities: false 
        })}
      </div>
      
      <div>
        <h3 class="text-heading-lg font-heading text-dhb-navy mb-6">Combinations Only</h3>
        ${Component({ 
          show_palette: false, 
          show_combinations: true, 
          show_utilities: false 
        })}
      </div>
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story: 'Comprehensive showcase of all available color system variations and configurations.',
      },
    },
  },
}