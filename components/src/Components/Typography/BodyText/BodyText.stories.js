import Component from './body-text.html.twig';

const meta = {
  title: 'Atoms/Typography/BodyText',
  component: Component,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'The DHB BodyText component provides semantic text content with various sizes, weights, and color variants. Optimized for readability and accessibility with responsive scaling and proper contrast ratios.'
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
      description: 'The text content',
      table: {
        defaultValue: { summary: 'Body text content' }
      }
    },
    tag: {
      control: 'select',
      options: ['p', 'span', 'div', 'blockquote', 'figcaption'],
      description: 'HTML semantic tag for the text',
      table: {
        defaultValue: { summary: 'p' }
      }
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'base', 'lg', 'xl', '2xl', 'lead', 'caption'],
      description: 'Text size variant',
      table: {
        defaultValue: { summary: 'base' }
      }
    },
    weight: {
      control: 'select',
      options: ['light', 'normal', 'medium', 'semibold', 'bold'],
      description: 'Font weight variant',
      table: {
        defaultValue: { summary: 'normal' }
      }
    },
    color: {
      control: 'select',
      options: ['primary', 'navy', 'white', 'yellow', 'red', 'muted', 'muted-dark'],
      description: 'Color variant',
      table: {
        defaultValue: { summary: 'primary' }
      }
    },
    id: {
      control: 'text',
      description: 'Optional ID attribute'
    }
  },
  args: {
    text: 'From November 26 to December 14, 2025, the world will unite for the 27th IHF Men\'s Handball World Championship in the Netherlands and Germany—the ultimate stage of handball.',
    tag: 'p',
    size: 'base',
    weight: 'normal',
    color: 'primary'
  }
};

export default meta;

// Basic Size Variants
export const ExtraSmall = {
  args: {
    text: 'Extra small text for fine details and disclaimers.',
    size: 'xs'
  }
};

export const Small = {
  args: {
    text: 'Small text for secondary information and captions.',
    size: 'sm'
  }
};

export const Base = {
  args: {
    text: 'Base text size for standard paragraph content and readable body text.',
    size: 'base'
  }
};

export const Large = {
  args: {
    text: 'Large text for emphasizing important content.',
    size: 'lg'
  }
};

export const ExtraLarge = {
  args: {
    text: 'Extra large text for prominent content.',
    size: 'xl'
  }
};

export const ExtraLarge2 = {
  args: {
    text: 'XXL text for high impact statements.',
    size: '2xl'
  }
};

// Special Purpose Variants
export const LeadText = {
  args: {
    text: 'This is lead text, perfect for introduction paragraphs that need to stand out and draw the reader in with enhanced readability.',
    size: 'lead'
  }
};

export const Caption = {
  args: {
    text: 'Caption text for image descriptions, footnotes, and supplementary information.',
    size: 'caption'
  }
};

// Weight Variants
export const LightWeight = {
  args: {
    text: 'Light weight text for elegant, minimal emphasis.',
    weight: 'light'
  }
};

export const MediumWeight = {
  args: {
    text: 'Medium weight text for subtle emphasis.',
    weight: 'medium'
  }
};

export const SemiboldWeight = {
  args: {
    text: 'Semibold text for moderate emphasis.',
    weight: 'semibold'
  }
};

export const BoldWeight = {
  args: {
    text: 'Bold text for strong emphasis and important information.',
    weight: 'bold'
  }
};

// Color Variants
export const WhiteText = {
  args: {
    text: 'White text on dark backgrounds for high contrast readability.',
    color: 'white'
  }
};

export const NavyText = {
  args: {
    text: 'Navy text for content on light backgrounds.',
    color: 'navy'
  },
  parameters: {
    backgrounds: {
      default: 'white'
    }
  }
};

export const YellowText = {
  args: {
    text: 'Yellow accent text for highlighting key information.',
    color: 'yellow'
  }
};

export const RedText = {
  args: {
    text: 'Red accent text for urgent or important information.',
    color: 'red'
  }
};

export const MutedText = {
  args: {
    text: 'Muted text for secondary information that should be less prominent.',
    color: 'muted'
  }
};

export const MutedDarkText = {
  args: {
    text: 'Muted dark text for secondary information on light backgrounds.',
    color: 'muted-dark'
  },
  parameters: {
    backgrounds: {
      default: 'white'
    }
  }
};

// Real PDF Examples
export const TournamentDescription = {
  args: {
    text: 'From November 26 to December 14, 2025, the world will unite for the 27th IHF Men\'s Handball World Championship in the Netherlands and Germany—the ultimate stage of handball. Under the motto "Hands Up For More," the best teams from around the globe will compete in five cities: Rotterdam, \'s-Hertogenbosch, Dortmund, Stuttgart, and Trier.',
    size: 'base',
    weight: 'normal',
    color: 'primary'
  }
};

export const TournamentSubtext = {
  args: {
    text: 'With every block, every goal, and every cheer, we put our hands up—for fair play, fierce competition, and the love of the game. Dream big, aim high: hands up for more!',
    size: 'base',
    weight: 'normal',
    color: 'muted'
  }
};

export const VenueDescription = {
  args: {
    text: 'Debit harchiliquas sinum eos eatur aliamusa pliquam, quiae rest experate volorum fuga. Dolorem porestotat et autemquo debit volor molupta si ape vel et prero modiant faceseq uostiis aspiene pa sitatiis que volorrovid ullandi tatiuscia delis as exersperatur molest, id etur?',
    size: 'sm',
    weight: 'normal',
    color: 'white'
  }
};

export const ScheduleDescription = {
  args: {
    text: 'The draw for the 2025 Handball World Championship will take place at the end of May 2025. As soon as the draw is completed, we will announce the full match schedule. However, the match days for the Dutch and German handball teams are already confirmed, and tickets for these days are available in the ticket shop.',
    size: 'base',
    weight: 'normal',
    color: 'white'
  }
};

export const FAQAnswer = {
  args: {
    text: 'Debit harchiliquas sinum eos eatur aliamusa pliquam, quiae rest experate volorum fuga. Dolorem porestotat et autemquo debit volor molupta si ape vel et prero modiant faceseq uostiis aspiene pa sitatiis que volorrovid ullandi tatiuscia delis as exersperatur molest, id etur?',
    size: 'base',
    weight: 'normal',
    color: 'white'
  }
};

// Typography Showcase
export const TypographySizes = {
  render: () => `
    <div style="display: flex; flex-direction: column; gap: 1.5rem;">
      ${Component({ text: 'Extra Large 2XL - High Impact Statements', size: '2xl', color: 'white' })}
      ${Component({ text: 'Extra Large XL - Prominent Content', size: 'xl', color: 'white' })}
      ${Component({ text: 'Large - Important Information', size: 'lg', color: 'white' })}
      ${Component({ text: 'Lead Text - Introduction paragraphs with enhanced readability and spacing', size: 'lead', color: 'white' })}
      ${Component({ text: 'Base - Standard body text for comfortable reading and optimal line height', size: 'base', color: 'white' })}
      ${Component({ text: 'Small - Secondary information and supplementary content', size: 'sm', color: 'white' })}
      ${Component({ text: 'Caption - Image descriptions and fine print details', size: 'caption', color: 'white' })}
      ${Component({ text: 'Extra Small - Legal text and disclaimers', size: 'xs', color: 'white' })}
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story: 'Complete typography size hierarchy showing all available body text sizes.'
      }
    }
  }
};

export const TypographyWeights = {
  render: () => `
    <div style="display: flex; flex-direction: column; gap: 1rem;">
      ${Component({ text: 'Bold Weight - Strong emphasis for important information', weight: 'bold', color: 'white' })}
      ${Component({ text: 'Semibold Weight - Moderate emphasis for key points', weight: 'semibold', color: 'white' })}
      ${Component({ text: 'Medium Weight - Subtle emphasis for highlighted content', weight: 'medium', color: 'white' })}
      ${Component({ text: 'Normal Weight - Standard text weight for optimal readability', weight: 'normal', color: 'white' })}
      ${Component({ text: 'Light Weight - Minimal emphasis for elegant typography', weight: 'light', color: 'white' })}
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story: 'Typography weight variants from light to bold for different emphasis levels.'
      }
    }
  }
};

export const PDFContentShowcase = {
  render: () => `
    <div style="display: flex; flex-direction: column; gap: 2rem; max-width: 800px;">
      <div>
        ${Component({ text: 'From November 26 to December 14, 2025, the world will unite for the 27th IHF Men\'s Handball World Championship in the Netherlands and Germany—the ultimate stage of handball.', size: 'lead', weight: 'normal', color: 'white' })}
      </div>
      
      <div>
        ${Component({ text: 'Under the motto "Hands Up For More," the best teams from around the globe will compete in five cities: Rotterdam, \'s-Hertogenbosch, Dortmund, Stuttgart, and Trier.', size: 'base', weight: 'normal', color: 'white' })}
      </div>
      
      <div>
        ${Component({ text: 'With every block, every goal, and every cheer, we put our hands up—for fair play, fierce competition, and the love of the game. Dream big, aim high: hands up for more!', size: 'base', weight: 'normal', color: 'muted' })}
      </div>
      
      <div>
        ${Component({ text: 'COMING SOON', size: 'sm', weight: 'bold', color: 'yellow' })}
      </div>
      
      <div>
        ${Component({ text: 'The draw for the 2025 Handball World Championship will take place at the end of May 2025. As soon as the draw is completed, we will announce the full match schedule.', size: 'sm', weight: 'normal', color: 'white' })}
      </div>
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story: 'Real examples of body text as it appears in the DHB Handball WM 2027 PDF design, showcasing proper hierarchy and emphasis.'
      }
    }
  }
};