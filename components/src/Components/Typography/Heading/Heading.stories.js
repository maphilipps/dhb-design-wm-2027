import Component from './heading.html.twig';

const meta = {
  title: 'Atoms/Typography/Heading',
  component: Component,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'The DHB Heading component provides semantic heading levels (H1-H6) with various display styles for different contexts. Includes display headings for hero sections, section headings with accent lines, and standard heading hierarchy.'
      }
    },
    backgrounds: {
      default: 'dhb-navy',
      values: [
        { name: 'dhb-navy', value: '#1a1a2e' },
        { name: 'white', value: '#ffffff' },
        { name: 'dhb-yellow', value: '#feca57' },
        { name: 'dhb-red', value: '#ff4757' }
      ]
    }
  },
  argTypes: {
    text: {
      control: 'text',
      description: 'The heading text content',
      table: {
        defaultValue: { summary: 'Heading Text' }
      }
    },
    tag: {
      control: 'select',
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
      description: 'HTML semantic tag for the heading',
      table: {
        defaultValue: { summary: 'h1' }
      }
    },
    level: {
      control: 'select',
      options: ['1', '2', '3', '4', '5', '6', 'display', 'display-sm', 'brand', 'section', 'section-large'],
      description: 'Visual styling level (independent of semantic tag)',
      table: {
        defaultValue: { summary: '1' }
      }
    },
    color: {
      control: 'select',
      options: ['primary', 'navy', 'white', 'yellow', 'red', 'gradient', 'gradient-brand'],
      description: 'Color variant of the heading',
      table: {
        defaultValue: { summary: 'primary' }
      }
    },
    id: {
      control: 'text',
      description: 'Optional ID attribute for linking'
    }
  },
  args: {
    text: 'World Championship',
    tag: 'h1',
    level: '1',
    color: 'primary'
  }
};

export default meta;

// Standard heading levels
export const Heading1 = {
  args: {
    text: 'World Championship',
    tag: 'h1',
    level: '1'
  }
};

export const Heading2 = {
  args: {
    text: 'Match Schedule',
    tag: 'h2', 
    level: '2'
  }
};

export const Heading3 = {
  args: {
    text: 'Tournament Results',
    tag: 'h3',
    level: '3'
  }
};

export const Heading4 = {
  args: {
    text: 'Team Statistics',
    tag: 'h4',
    level: '4'
  }
};

export const Heading5 = {
  args: {
    text: 'Player Information', 
    tag: 'h5',
    level: '5'
  }
};

export const Heading6 = {
  args: {
    text: 'Game Details',
    tag: 'h6',
    level: '6'
  }
};

// Display headings for hero sections
export const DisplayLarge = {
  args: {
    text: 'Where Handball Moves Us',
    tag: 'h1',
    level: 'display',
    color: 'gradient'
  }
};

export const DisplaySmall = {
  args: {
    text: 'Get Your Tickets Now!',
    tag: 'h2',
    level: 'display-sm',
    color: 'white'
  }
};

// Brand typography (27WM27 style)
export const BrandLarge = {
  args: {
    text: '27WM27',
    tag: 'h1',
    level: 'brand',
    color: 'gradient-brand'
  }
};

export const BrandWhite = {
  args: {
    text: 'WM27WM',
    tag: 'div',
    level: 'brand',
    color: 'white'
  }
};

// Section headings with accent lines
export const SectionHeading = {
  args: {
    text: 'NEWS',
    tag: 'h2',
    level: 'section',
    color: 'yellow'
  }
};

export const SectionVenues = {
  args: {
    text: 'VENUES',
    tag: 'h2', 
    level: 'section',
    color: 'white'
  }
};

// Large section headings
export const SectionLarge = {
  args: {
    text: 'MATCH SCHEDULE',
    tag: 'h1',
    level: 'section-large',
    color: 'yellow'
  }
};

// Color variants
export const GradientHeading = {
  args: {
    text: 'World Championship',
    tag: 'h1',
    level: '1',
    color: 'gradient'
  }
};

export const YellowHeading = {
  args: {
    text: 'Match Schedule',
    tag: 'h2',
    level: '2', 
    color: 'yellow'
  }
};

export const RedHeading = {
  args: {
    text: 'Live Results',
    tag: 'h2',
    level: '2',
    color: 'red'
  }
};

export const WhiteOnNavy = {
  args: {
    text: 'Tournament Info',
    tag: 'h2',
    level: '2',
    color: 'white'
  },
  parameters: {
    backgrounds: {
      default: 'dhb-navy'
    }
  }
};

export const NavyOnWhite = {
  args: {
    text: 'Championship Details',
    tag: 'h2',
    level: '2', 
    color: 'navy'
  },
  parameters: {
    backgrounds: {
      default: 'white'
    }
  }
};

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
        story: 'Complete typography hierarchy showing all heading levels and their relative sizes.'
      }
    }
  }
};

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
        story: 'Comprehensive examples of headings as they appear in the DHB Handball WM 2027 PDF design, including brand patterns, hero sections, call-to-actions, and section headers.'
      }
    }
  }
};

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
        story: 'Brand typography patterns showing the distinctive 27WM27 styling used throughout the championship branding.'
      }
    }
  }
};