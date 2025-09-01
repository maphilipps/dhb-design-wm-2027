import Component from './heading.html.twig'

const meta = {
  title: 'Atoms/Typography/Heading',
  component: Component,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
The DHB Heading component provides semantic heading levels (H1-H6) with various display styles for different contexts. Includes display headings for hero sections, section headings with accent lines, and standard heading hierarchy.

## Accessibility Features (WCAG 2.1 AA Compliant)

- **Screen Reader Support**: Full ARIA implementation with labels, descriptions, and semantic structure
- **Keyboard Navigation**: Focusable headings with visible focus indicators
- **Motion Sensitivity**: Respects prefers-reduced-motion for animations
- **High Contrast**: Supports high contrast and forced colors modes
- **Touch Targets**: 44px minimum touch targets on mobile devices
- **Semantic Structure**: Separate visual styling from semantic meaning for proper document hierarchy

## Usage Guidelines

1. Always use semantic HTML tags (h1-h6) that match your document structure
2. Visual styling (level) can be independent of semantic tag
3. Provide aria-label for headings that need additional context
4. Use tabindex="0" only when headings need to be focusable for navigation
5. Enable reduced_motion for users with motion sensitivity
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
      description: 'The heading text content',
      table: {
        defaultValue: { summary: 'Heading Text' },
      },
    },
    tag: {
      control: 'select',
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
      description: 'HTML semantic tag for the heading (critical for screen readers)',
      table: {
        defaultValue: { summary: 'h1' },
      },
    },
    level: {
      control: 'select',
      options: [
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        'display',
        'display-sm',
        'brand',
        'section',
        'section-large',
      ],
      description: 'Visual styling level (independent of semantic tag)',
      table: {
        defaultValue: { summary: '1' },
      },
    },
    color: {
      control: 'select',
      options: [
        'primary',
        'navy',
        'white',
        'yellow',
        'red',
        'gradient',
        'gradient-brand',
      ],
      description: 'Color variant of the heading',
      table: {
        defaultValue: { summary: 'primary' },
      },
    },
    id: {
      control: 'text',
      description: 'Optional ID attribute for linking and navigation',
    },
    // Accessibility Controls
    aria_label: {
      control: 'text',
      description: 'ARIA label for screen readers when heading text needs clarification',
      table: {
        category: 'Accessibility',
      },
    },
    aria_describedby: {
      control: 'text',
      description: 'ID of element that describes this heading',
      table: {
        category: 'Accessibility',
      },
    },
    aria_level: {
      control: 'number',
      description: 'Override heading level for screen readers (when semantic tag differs from visual level)',
      table: {
        category: 'Accessibility',
      },
    },
    role: {
      control: 'text',
      description: 'ARIA role override (use with caution)',
      table: {
        category: 'Accessibility',
      },
    },
    tabindex: {
      control: 'number',
      description: 'Tab order for keyboard navigation (-1 to remove from tab order, 0 to include)',
      table: {
        category: 'Accessibility',
        defaultValue: { summary: '-1' },
      },
    },
    reduced_motion: {
      control: 'boolean',
      description: 'Disable animations for users who prefer reduced motion',
      table: {
        category: 'Accessibility',
        defaultValue: { summary: 'false' },
      },
    },
    sr_only: {
      control: 'boolean',
      description: 'Show only alternative text for screen readers',
      table: {
        category: 'Accessibility',
        defaultValue: { summary: 'false' },
      },
    },
    sr_text: {
      control: 'text',
      description: 'Alternative text for screen readers when sr_only is true',
      table: {
        category: 'Accessibility',
      },
    },
  },
  args: {
    text: 'World Championship',
    tag: 'h1',
    level: '1',
    color: 'primary',
  },
}

export default meta

// Standard heading levels
export const Heading1 = {
  args: {
    text: 'World Championship',
    tag: 'h1',
    level: '1',
  },
}

export const Heading2 = {
  args: {
    text: 'Match Schedule',
    tag: 'h2',
    level: '2',
  },
}

export const Heading3 = {
  args: {
    text: 'Tournament Results',
    tag: 'h3',
    level: '3',
  },
}

export const Heading4 = {
  args: {
    text: 'Team Statistics',
    tag: 'h4',
    level: '4',
  },
}

export const Heading5 = {
  args: {
    text: 'Player Information',
    tag: 'h5',
    level: '5',
  },
}

export const Heading6 = {
  args: {
    text: 'Game Details',
    tag: 'h6',
    level: '6',
  },
}

// Display headings for hero sections
export const DisplayLarge = {
  args: {
    text: 'Where Handball Moves Us',
    tag: 'h1',
    level: 'display',
    color: 'gradient',
  },
}

export const DisplaySmall = {
  args: {
    text: 'Get Your Tickets Now!',
    tag: 'h2',
    level: 'display-sm',
    color: 'white',
  },
}

// Brand typography (27WM27 style)
export const BrandLarge = {
  args: {
    text: '27WM27',
    tag: 'h1',
    level: 'brand',
    color: 'gradient-brand',
  },
}

export const BrandWhite = {
  args: {
    text: 'WM27WM',
    tag: 'div',
    level: 'brand',
    color: 'white',
  },
}

// Section headings with accent lines
export const SectionHeading = {
  args: {
    text: 'NEWS',
    tag: 'h2',
    level: 'section',
    color: 'yellow',
  },
}

export const SectionVenues = {
  args: {
    text: 'VENUES',
    tag: 'h2',
    level: 'section',
    color: 'white',
  },
}

// Large section headings
export const SectionLarge = {
  args: {
    text: 'MATCH SCHEDULE',
    tag: 'h1',
    level: 'section-large',
    color: 'yellow',
  },
}

// Color variants
export const GradientHeading = {
  args: {
    text: 'World Championship',
    tag: 'h1',
    level: '1',
    color: 'gradient',
  },
}

export const YellowHeading = {
  args: {
    text: 'Match Schedule',
    tag: 'h2',
    level: '2',
    color: 'yellow',
  },
}

export const RedHeading = {
  args: {
    text: 'Live Results',
    tag: 'h2',
    level: '2',
    color: 'red',
  },
}

export const WhiteOnNavy = {
  args: {
    text: 'Tournament Info',
    tag: 'h2',
    level: '2',
    color: 'white',
  },
  parameters: {
    backgrounds: {
      default: 'dhb-navy',
    },
  },
}

export const NavyOnWhite = {
  args: {
    text: 'Championship Details',
    tag: 'h2',
    level: '2',
    color: 'navy',
  },
  parameters: {
    backgrounds: {
      default: 'white',
    },
  },
}

// Typography hierarchy showcase
export const TypographyHierarchy = {
  render: () => `
    <div style="display: flex; flex-direction: column; gap: 2rem;">
      ${Component({ text: 'Display Heading - Hero Section', tag: 'h1', level: 'display', color: 'gradient' })}
      ${Component({ text: 'H1 - Main Page Title', tag: 'h1', level: '1', color: 'white' })}
      ${Component({ text: 'H2 - Major Section', tag: 'h2', level: '2', color: 'white' })}
      ${Component({ text: 'SECTION HEADING', tag: 'h2', level: 'section', color: 'yellow' })}
      ${Component({ text: 'H3 - Sub Section', tag: 'h3', level: '3', color: 'white' })}
      ${Component({ text: 'H4 - Content Group', tag: 'h4', level: '4', color: 'white' })}
      ${Component({ text: 'H5 - Content Subgroup', tag: 'h5', level: '5', color: 'white' })}
      ${Component({ text: 'H6 - Detail Header', tag: 'h6', level: '6', color: 'white' })}
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story:
          'Complete typography hierarchy showing all heading levels and their relative sizes.',
      },
    },
  },
}

// Real-world examples from PDF
export const PDFExamples = {
  render: () => `
    <div style="display: flex; flex-direction: column; gap: 3rem;">
      <!-- Brand Elements from PDF -->
      <div style="text-align: center;">
        ${Component({ text: '27WM27', tag: 'div', level: 'brand', color: 'gradient-brand' })}
        <p style="color: var(--dhb-muted, rgba(255,255,255,0.7)); margin-top: 0.5rem; font-size: 0.875rem; letter-spacing: 0.1em;">BRAND PATTERN</p>
      </div>
      
      <!-- Hero Section -->
      <div>
        ${Component({ text: 'World Championship', tag: 'h1', level: 'display', color: 'white' })}
        <p style="color: var(--dhb-white); margin-top: 1rem; font-size: 1.125rem; font-weight: 500;">Germany 14.- 31.01.2027</p>
      </div>
      
      <!-- Call-to-Action Headings -->
      <div>
        ${Component({ text: 'GET YOUR TICKETS NOW!', tag: 'h2', level: 'display-sm', color: 'white' })}
      </div>
      
      <!-- Large Section Headers -->
      <div>
        ${Component({ text: 'MATCH SCHEDULE', tag: 'h1', level: 'section-large', color: 'yellow' })}
      </div>
      
      <!-- Standard Section Headers -->
      <div>
        ${Component({ text: 'NEWS', tag: 'h2', level: 'section', color: 'yellow' })}
      </div>
      
      <div>
        ${Component({ text: 'VENUES', tag: 'h2', level: 'section', color: 'white' })}
      </div>
      
      <!-- Gradient Display Headings -->
      <div>
        ${Component({ text: 'WHERE HANDBALL MOVES US', tag: 'h1', level: 'display', color: 'gradient' })}
      </div>
      
      <!-- Page Title Example -->
      <div>
        ${Component({ text: 'FAQ', tag: 'h1', level: 'display-sm', color: 'white' })}
      </div>
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story:
          'Comprehensive examples of headings as they appear in the DHB Handball WM 2027 PDF design, including brand patterns, hero sections, call-to-actions, and section headers.',
      },
    },
  },
}

// Brand Typography Showcase
export const BrandTypographyShowcase = {
  render: () => `
    <div style="display: flex; flex-direction: column; gap: 2rem; text-align: center;">
      ${Component({ text: '27WM27', tag: 'div', level: 'brand', color: 'gradient-brand' })}
      ${Component({ text: 'WM27WM', tag: 'div', level: 'brand', color: 'white' })}
      ${Component({ text: '27WM27', tag: 'div', level: 'brand', color: 'yellow' })}
      ${Component({ text: 'WM27WM', tag: 'div', level: 'brand', color: 'red' })}
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story:
          'Brand typography patterns showing the distinctive 27WM27 styling used throughout the championship branding.',
      },
    },
  },
}

// Accessibility Examples
export const AccessibilityFeatures = {
  render: () => `
    <div style="display: flex; flex-direction: column; gap: 3rem;">
      
      <!-- Standard Heading with ARIA Label -->
      <div>
        <h3 style="color: var(--dhb-yellow); font-size: 1rem; margin-bottom: 1rem; text-transform: uppercase; letter-spacing: 0.1em;">ARIA Label Example</h3>
        ${Component({ 
          text: 'Match Results', 
          tag: 'h2', 
          level: '2', 
          color: 'white',
          aria_label: 'Match results for Group Stage Round 1',
          id: 'match-results-heading'
        })}
        <p style="color: var(--dhb-white, #ffffff); margin-top: 0.5rem; font-size: 0.875rem;">Screen readers will announce: "Match results for Group Stage Round 1"</p>
      </div>

      <!-- Focusable Heading for Navigation -->
      <div>
        <h3 style="color: var(--dhb-yellow); font-size: 1rem; margin-bottom: 1rem; text-transform: uppercase; letter-spacing: 0.1em;">Keyboard Navigation</h3>
        ${Component({ 
          text: 'Tournament Schedule', 
          tag: 'h2', 
          level: 'section', 
          color: 'yellow',
          tabindex: 0,
          id: 'tournament-schedule'
        })}
        <p style="color: var(--dhb-white, #ffffff); margin-top: 0.5rem; font-size: 0.875rem;">Try tabbing to this heading - it receives keyboard focus</p>
      </div>

      <!-- Reduced Motion Example -->
      <div>
        <h3 style="color: var(--dhb-yellow); font-size: 1rem; margin-bottom: 1rem; text-transform: uppercase; letter-spacing: 0.1em;">Reduced Motion Support</h3>
        ${Component({ 
          text: 'Championship Finals', 
          tag: 'h1', 
          level: 'display', 
          color: 'gradient',
          reduced_motion: true
        })}
        <p style="color: var(--dhb-white, #ffffff); margin-top: 0.5rem; font-size: 0.875rem;">Gradient animation disabled for accessibility</p>
      </div>

      <!-- Screen Reader Only Text -->
      <div>
        <h3 style="color: var(--dhb-yellow); font-size: 1rem; margin-bottom: 1rem; text-transform: uppercase; letter-spacing: 0.1em;">Screen Reader Only</h3>
        ${Component({ 
          text: 'Live Match', 
          tag: 'h2', 
          level: '2', 
          color: 'red',
          sr_only: true,
          sr_text: 'Live match in progress: Germany versus France, currently 15 to 12'
        })}
        <p style="color: var(--dhb-white, #ffffff); margin-top: 0.5rem; font-size: 0.875rem;">Screen readers get detailed context, visual users see clean design</p>
      </div>

      <!-- Semantic vs Visual Level -->
      <div>
        <h3 style="color: var(--dhb-yellow); font-size: 1rem; margin-bottom: 1rem; text-transform: uppercase; letter-spacing: 0.1em;">Semantic Structure</h3>
        ${Component({ 
          text: 'Team Statistics', 
          tag: 'h4', 
          level: 'display-sm', 
          color: 'white',
          aria_level: 4
        })}
        <p style="color: var(--dhb-white, #ffffff); margin-top: 0.5rem; font-size: 0.875rem;">Visually styled as display heading, but semantically an H4 for proper document structure</p>
      </div>

    </div>
  `,
  parameters: {
    docs: {
      description: {
        story: `
# Accessibility Features

The DHB Heading component includes comprehensive accessibility features to ensure WCAG 2.1 AA compliance:

## ARIA Support
- **aria-label**: Provides alternative text for screen readers
- **aria-describedby**: Links to descriptive content
- **aria-level**: Override semantic heading level when needed

## Keyboard Navigation
- **tabindex**: Control keyboard focus behavior
- Visible focus indicators with high contrast
- Enhanced focus rings for better visibility

## Motion Sensitivity
- **reduced_motion**: Respects user motion preferences
- Disables gradient animations when requested
- Maintains visual appeal without motion

## Screen Reader Support
- **sr_only**: Provides rich context for screen readers
- Clean visual design with detailed audio descriptions
- Proper semantic structure maintenance

## Color & Contrast
- High contrast mode support
- Forced colors mode compatibility
- Enhanced text shadows for better visibility

## Best Practices
- Separate semantic meaning (tag) from visual styling (level)
- Proper heading hierarchy for document structure
- Touch targets meet minimum 44px requirement on mobile
        `,
      },
    },
    backgrounds: {
      default: 'dhb-navy',
    },
  },
}

// Accessibility Testing Stories
export const HighContrastMode = {
  args: {
    text: 'High Contrast Heading',
    tag: 'h2',
    level: '2',
    color: 'white',
  },
  parameters: {
    docs: {
      description: {
        story: 'Test heading appearance in high contrast mode. Use browser developer tools to simulate high contrast.',
      },
    },
    backgrounds: {
      default: 'dhb-navy',
    },
  },
}

export const ReducedMotionTest = {
  args: {
    text: 'Motion-Sensitive Heading',
    tag: 'h1',
    level: 'display',
    color: 'gradient',
    reduced_motion: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Test heading with animations disabled for users who prefer reduced motion.',
      },
    },
  },
}

export const KeyboardNavigation = {
  args: {
    text: 'Focusable Heading',
    tag: 'h2',
    level: 'section',
    color: 'yellow',
    tabindex: 0,
    aria_label: 'Navigate to section about keyboard accessibility',
  },
  parameters: {
    docs: {
      description: {
        story: 'Test keyboard navigation by pressing Tab to focus this heading. Press Enter or Space to interact.',
      },
    },
  },
}

export const ScreenReaderSupport = {
  args: {
    text: 'News',
    tag: 'h2',
    level: 'section',
    color: 'yellow',
    aria_label: 'Latest news and updates from the handball championship',
    sr_text: 'Latest news and updates section - 5 new articles available',
  },
  parameters: {
    docs: {
      description: {
        story: 'Test with screen readers to hear enhanced context and descriptions.',
      },
    },
  },
}
