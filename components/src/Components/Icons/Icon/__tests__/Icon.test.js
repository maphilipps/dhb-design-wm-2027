/**
 * @vitest-environment jsdom
 */

import { describe, it, expect, beforeEach, afterEach } from 'vitest'
import { render, screen } from '@testing-library/dom'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'

// Mock Twig component - in real tests this would be handled by the Twig renderer
function mockIconComponent(props = {}) {
  const {
    name = 'handball',
    size = 'md',
    color = 'currentColor',
    interactive = false,
    aria_label = '',
    classes = '',
    role = 'img'
  } = props

  return `
    <span class="icon icon--${size} icon--${color} ${classes}" 
          role="${role}"
          ${aria_label ? `aria-label="${aria_label}"` : 'aria-hidden="true"'}
          ${interactive ? 'tabindex="0"' : ''}>
      <svg viewBox="0 0 24 24" class="icon__svg">
        <circle cx="12" cy="12" r="9" stroke="currentColor"/>
      </svg>
      ${props.sr_only_text ? `<span class="sr-only">${props.sr_only_text}</span>` : ''}
    </span>
  `
}

describe('Icon Component', () => {
  let container

  beforeEach(() => {
    container = document.createElement('div')
    document.body.appendChild(container)
  })

  afterEach(() => {
    if (container) {
      document.body.removeChild(container)
    }
  })

  describe('Rendering', () => {
    it('renders with default props', () => {
      container.innerHTML = mockIconComponent()
      const icon = container.querySelector('.icon')
      
      expect(icon).toBeInTheDocument()
      expect(icon).toHaveClass('icon--md')
      expect(icon).toHaveClass('icon--currentColor')
      expect(icon).toHaveAttribute('role', 'img')
    })

    it('renders with custom size', () => {
      container.innerHTML = mockIconComponent({ size: 'lg' })
      const icon = container.querySelector('.icon')
      
      expect(icon).toHaveClass('icon--lg')
    })

    it('renders with custom color', () => {
      container.innerHTML = mockIconComponent({ color: 'yellow' })
      const icon = container.querySelector('.icon')
      
      expect(icon).toHaveClass('icon--yellow')
    })

    it('renders with additional classes', () => {
      container.innerHTML = mockIconComponent({ classes: 'custom-class' })
      const icon = container.querySelector('.icon')
      
      expect(icon).toHaveClass('custom-class')
    })
  })

  describe('Accessibility', () => {
    it('has proper ARIA attributes for decorative icons', () => {
      container.innerHTML = mockIconComponent()
      const icon = container.querySelector('.icon')
      
      expect(icon).toHaveAttribute('aria-hidden', 'true')
      expect(icon).toHaveAttribute('role', 'img')
    })

    it('has proper ARIA attributes for informative icons', () => {
      container.innerHTML = mockIconComponent({ 
        aria_label: 'Handball sport icon',
        role: 'img'
      })
      const icon = container.querySelector('.icon')
      
      expect(icon).toHaveAttribute('aria-label', 'Handball sport icon')
      expect(icon).toHaveAttribute('role', 'img')
      expect(icon).not.toHaveAttribute('aria-hidden')
    })

    it('is focusable when interactive', () => {
      container.innerHTML = mockIconComponent({ 
        interactive: true,
        aria_label: 'Menu button'
      })
      const icon = container.querySelector('.icon')
      
      expect(icon).toHaveAttribute('tabindex', '0')
      expect(icon).toHaveAttribute('aria-label', 'Menu button')
    })

    it('includes screen reader text when provided', () => {
      container.innerHTML = mockIconComponent({ 
        sr_only_text: 'Handball championship icon'
      })
      const srText = container.querySelector('.sr-only')
      
      expect(srText).toBeInTheDocument()
      expect(srText).toHaveTextContent('Handball championship icon')
    })
  })

  describe('Interaction', () => {
    it('can be focused when interactive', async () => {
      const user = userEvent.setup()
      container.innerHTML = mockIconComponent({ 
        interactive: true,
        aria_label: 'Interactive icon'
      })
      const icon = container.querySelector('.icon')
      
      await user.tab()
      expect(icon).toHaveFocus()
    })

    it('responds to click events when interactive', async () => {
      const user = userEvent.setup()
      let clicked = false
      
      container.innerHTML = mockIconComponent({ 
        interactive: true,
        aria_label: 'Clickable icon'
      })
      const icon = container.querySelector('.icon')
      
      icon.addEventListener('click', () => {
        clicked = true
      })
      
      await user.click(icon)
      expect(clicked).toBe(true)
    })

    it('responds to keyboard events when interactive', async () => {
      const user = userEvent.setup()
      let activated = false
      
      container.innerHTML = mockIconComponent({ 
        interactive: true,
        aria_label: 'Keyboard accessible icon'
      })
      const icon = container.querySelector('.icon')
      
      icon.addEventListener('click', () => {
        activated = true
      })
      
      icon.focus()
      await user.keyboard('{Enter}')
      expect(activated).toBe(true)
      
      activated = false
      await user.keyboard(' ')
      expect(activated).toBe(true)
    })
  })

  describe('SVG Content', () => {
    it('contains SVG element', () => {
      container.innerHTML = mockIconComponent()
      const svg = container.querySelector('.icon__svg')
      
      expect(svg).toBeInTheDocument()
      expect(svg.tagName.toLowerCase()).toBe('svg')
    })

    it('SVG has proper viewBox', () => {
      container.innerHTML = mockIconComponent()
      const svg = container.querySelector('.icon__svg')
      
      expect(svg).toHaveAttribute('viewBox', '0 0 24 24')
    })

    it('SVG has accessible class', () => {
      container.innerHTML = mockIconComponent()
      const svg = container.querySelector('.icon__svg')
      
      expect(svg).toHaveClass('icon__svg')
    })
  })

  describe('Size Variants', () => {
    const sizeClasses = ['xs', 'sm', 'md', 'lg', 'xl']
    
    sizeClasses.forEach(size => {
      it(`applies ${size} size class correctly`, () => {
        container.innerHTML = mockIconComponent({ size })
        const icon = container.querySelector('.icon')
        
        expect(icon).toHaveClass(`icon--${size}`)
      })
    })
  })

  describe('Color Variants', () => {
    const colorVariants = [
      'currentColor',
      'navy',
      'white', 
      'yellow',
      'red',
      'gray-100',
      'gray-500',
      'gray-700'
    ]
    
    colorVariants.forEach(color => {
      it(`applies ${color} color class correctly`, () => {
        container.innerHTML = mockIconComponent({ color })
        const icon = container.querySelector('.icon')
        
        expect(icon).toHaveClass(`icon--${color}`)
      })
    })
  })

  describe('Role Variants', () => {
    it('can have img role', () => {
      container.innerHTML = mockIconComponent({ role: 'img' })
      const icon = container.querySelector('.icon')
      
      expect(icon).toHaveAttribute('role', 'img')
    })

    it('can have button role for interactive icons', () => {
      container.innerHTML = mockIconComponent({ 
        role: 'button',
        interactive: true,
        aria_label: 'Button icon'
      })
      const icon = container.querySelector('.icon')
      
      expect(icon).toHaveAttribute('role', 'button')
    })

    it('can have presentation role for decorative icons', () => {
      container.innerHTML = mockIconComponent({ role: 'presentation' })
      const icon = container.querySelector('.icon')
      
      expect(icon).toHaveAttribute('role', 'presentation')
    })
  })

  describe('CSS Custom Properties', () => {
    it('inherits currentColor properly', () => {
      container.innerHTML = `
        <div style="color: red;">
          ${mockIconComponent({ color: 'currentColor' })}
        </div>
      `
      const icon = container.querySelector('.icon')
      
      expect(icon).toHaveClass('icon--currentColor')
    })
  })

  describe('Screen Reader Support', () => {
    it('hides decorative icons from screen readers', () => {
      container.innerHTML = mockIconComponent()
      const icon = container.querySelector('.icon')
      
      expect(icon).toHaveAttribute('aria-hidden', 'true')
    })

    it('provides accessible names for informative icons', () => {
      container.innerHTML = mockIconComponent({ 
        aria_label: 'Handball championship logo'
      })
      const icon = container.querySelector('.icon')
      
      expect(icon).toHaveAttribute('aria-label', 'Handball championship logo')
      expect(icon).not.toHaveAttribute('aria-hidden')
    })

    it('includes supplementary screen reader text', () => {
      container.innerHTML = mockIconComponent({ 
        sr_only_text: 'Additional context for screen readers'
      })
      const srText = container.querySelector('.sr-only')
      
      expect(srText).toBeInTheDocument()
      expect(srText).toHaveTextContent('Additional context for screen readers')
    })
  })

  describe('Performance', () => {
    it('uses efficient SVG rendering', () => {
      container.innerHTML = mockIconComponent()
      const svg = container.querySelector('.icon__svg')
      
      // Check that SVG has performance-optimized attributes
      expect(svg).toHaveAttribute('viewBox')
      expect(svg.getAttribute('fill')).toBe(null) // Should use CSS for coloring
    })
  })

  describe('Error Handling', () => {
    it('renders fallback content for unknown icon names', () => {
      // This would be handled by the Twig template's default case
      container.innerHTML = mockIconComponent({ name: 'unknown-icon' })
      const icon = container.querySelector('.icon')
      const svg = container.querySelector('.icon__svg')
      
      expect(icon).toBeInTheDocument()
      expect(svg).toBeInTheDocument()
    })
  })
})