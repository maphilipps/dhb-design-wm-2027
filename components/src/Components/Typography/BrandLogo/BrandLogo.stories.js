import Component from './brand-logo.html.twig';

const meta = {
  title: 'Atoms/Typography/BrandLogo',
  component: Component,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'The DHB Brand Logo component displays the "27WM27" branding with various sizes and color variants. This is the primary brand element used throughout the DHB Handball World Championship 2027 website.'
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
    brand_text: {
      control: 'text',
      description: 'The text content for the brand logo',
      table: {
        defaultValue: { summary: '27WM27' }
      }
    },
    variant: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Size variant of the brand logo',
      table: {
        defaultValue: { summary: 'md' }
      }
    },
    color: {
      control: 'select',
      options: ['primary', 'white', 'navy'],
      description: 'Color variant of the brand logo',
      mapping: {
        primary: 'brand-logo--primary',
        white: 'brand-logo--white',  
        navy: 'brand-logo--navy'
      }
    },
    animate: {
      control: 'boolean',
      description: 'Enable brand pulse animation',
      table: {
        defaultValue: { summary: false }
      }
    }
  },
  args: {
    brand_text: '27WM27',
    variant: 'md',
    color: 'primary',
    animate: false
  }
};

export default meta;

// Default brand logo
export const Default = {
  args: {
    brand_text: '27WM27',
    variant: 'md'
  }
};

// Size variants
export const ExtraSmall = {
  args: {
    brand_text: '27WM27',
    variant: 'xs'
  }
};

export const Small = {
  args: {
    brand_text: '27WM27', 
    variant: 'sm'
  }
};

export const Medium = {
  args: {
    brand_text: '27WM27',
    variant: 'md'
  }
};

export const Large = {
  args: {
    brand_text: '27WM27',
    variant: 'lg'
  }
};

export const ExtraLarge = {
  args: {
    brand_text: '27WM27',
    variant: 'xl'
  }
};

// Color variants
export const WhiteOnNavy = {
  args: {
    brand_text: '27WM27',
    variant: 'lg',
    classes: 'brand-logo--white'
  },
  parameters: {
    backgrounds: {
      default: 'dhb-navy'
    }
  }
};

export const NavyOnWhite = {
  args: {
    brand_text: '27WM27',
    variant: 'lg', 
    classes: 'brand-logo--navy'
  },
  parameters: {
    backgrounds: {
      default: 'white'
    }
  }
};

// Animated version
export const WithAnimation = {
  args: {
    brand_text: '27WM27',
    variant: 'lg',
    animate: true
  }
};

// Custom text
export const CustomText = {
  args: {
    brand_text: 'WM27',
    variant: 'lg'
  }
};

// All sizes showcase
export const AllSizes = {
  render: () => `
    <div style="display: flex; flex-direction: column; gap: 2rem; align-items: center;">
      ${Component({ brand_text: '27WM27', variant: 'xs' })}
      ${Component({ brand_text: '27WM27', variant: 'sm' })}
      ${Component({ brand_text: '27WM27', variant: 'md' })}
      ${Component({ brand_text: '27WM27', variant: 'lg' })}
      ${Component({ brand_text: '27WM27', variant: 'xl' })}
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story: 'Showcase of all available brand logo sizes from extra small to extra large.'
      }
    }
  }
};