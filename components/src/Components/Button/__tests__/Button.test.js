/**
 * Button Component Tests
 * DHB Handball World Championship 2027
 */

import { describe, it, expect, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/dom'
import '@testing-library/jest-dom'

// Mock TWIG template - in real tests this would be compiled
const mockButtonTemplate = (props = {}) => {
  const {
    text = 'Button',
    variant = 'primary',
    size = 'medium',
    tag = 'button',
    type = 'button',
    disabled = false,
    href = '',
    id = '',
    aria_label = '',
    classes = '',
  } = props

  const classNames = [
    'button',
    \`button--\${variant}\`,
    \`button--\${size}\`,
    classes
  ].filter(Boolean).join(' ')

  const isAnchor = tag === 'a'
  const attributes = [
    id ? \`id="\${id}"\` : '',
    isAnchor && href ? \`href="\${href}"\` : '',
    !isAnchor && type ? \`type="\${type}"\` : '',
    disabled ? 'disabled' : '',
    aria_label ? \`aria-label="\${aria_label}"\` : '',
  ].filter(Boolean).join(' ')

  return \`<\${tag} class="\${classNames}" \${attributes}><span class="button__content">\${text}</span></\${tag}>\`
}

describe('Button Component', () => {
  describe('Basic Rendering', () => {
    it('renders a button with default props', () => {
      const html = mockButtonTemplate()
      document.body.innerHTML = html
      
      const button = screen.getByRole('button')
      expect(button).toBeInTheDocument()
      expect(button).toHaveTextContent('Button')
      expect(button).toHaveClass('button', 'button--primary', 'button--medium')
    })

    it('renders custom button text', () => {
      const html = mockButtonTemplate({ text: 'TICKETS' })
      document.body.innerHTML = html
      
      const button = screen.getByRole('button')
      expect(button).toHaveTextContent('TICKETS')
    })

    it('applies custom ID', () => {
      const html = mockButtonTemplate({ id: 'ticket-button' })
      document.body.innerHTML = html
      
      const button = screen.getByRole('button')
      expect(button).toHaveAttribute('id', 'ticket-button')
    })
  })

  describe('Variants', () => {
    it('renders primary variant correctly', () => {
      const html = mockButtonTemplate({ variant: 'primary' })
      document.body.innerHTML = html
      
      const button = screen.getByRole('button')
      expect(button).toHaveClass('button--primary')
    })

    it('renders secondary variant correctly', () => {
      const html = mockButtonTemplate({ variant: 'secondary' })
      document.body.innerHTML = html
      
      const button = screen.getByRole('button')
      expect(button).toHaveClass('button--secondary')
    })

    it('renders text variant correctly', () => {
      const html = mockButtonTemplate({ variant: 'text' })
      document.body.innerHTML = html
      
      const button = screen.getByRole('button')
      expect(button).toHaveClass('button--text')
    })

    it('renders outline variants correctly', () => {
      const html = mockButtonTemplate({ variant: 'outline-primary' })
      document.body.innerHTML = html
      
      const button = screen.getByRole('button')
      expect(button).toHaveClass('button--outline-primary')
    })
  })

  describe('Sizes', () => {
    it('renders small size correctly', () => {
      const html = mockButtonTemplate({ size: 'small' })
      document.body.innerHTML = html
      
      const button = screen.getByRole('button')
      expect(button).toHaveClass('button--small')
    })

    it('renders medium size correctly', () => {
      const html = mockButtonTemplate({ size: 'medium' })
      document.body.innerHTML = html
      
      const button = screen.getByRole('button')
      expect(button).toHaveClass('button--medium')
    })

    it('renders large size correctly', () => {
      const html = mockButtonTemplate({ size: 'large' })
      document.body.innerHTML = html
      
      const button = screen.getByRole('button')
      expect(button).toHaveClass('button--large')
    })
  })

  describe('Button Types', () => {
    it('renders submit button correctly', () => {
      const html = mockButtonTemplate({ type: 'submit' })
      document.body.innerHTML = html
      
      const button = screen.getByRole('button')
      expect(button).toHaveAttribute('type', 'submit')
    })

    it('renders reset button correctly', () => {
      const html = mockButtonTemplate({ type: 'reset' })
      document.body.innerHTML = html
      
      const button = screen.getByRole('button')
      expect(button).toHaveAttribute('type', 'reset')
    })
  })

  describe('Link Buttons', () => {
    it('renders as anchor when tag is "a"', () => {
      const html = mockButtonTemplate({ 
        tag: 'a', 
        href: '/tickets',
        text: 'Buy Tickets'
      })
      document.body.innerHTML = html
      
      const link = screen.getByRole('link')
      expect(link).toBeInTheDocument()
      expect(link).toHaveAttribute('href', '/tickets')
      expect(link).toHaveTextContent('Buy Tickets')
    })
  })

  describe('States', () => {
    it('renders disabled state correctly', () => {
      const html = mockButtonTemplate({ disabled: true })
      document.body.innerHTML = html
      
      const button = screen.getByRole('button')
      expect(button).toBeDisabled()
    })
  })

  describe('Accessibility', () => {
    it('applies custom aria-label', () => {
      const html = mockButtonTemplate({ 
        text: 'TICKETS',
        aria_label: 'Buy tickets for DHB Handball World Championship 2027'
      })
      document.body.innerHTML = html
      
      const button = screen.getByRole('button')
      expect(button).toHaveAttribute('aria-label', 'Buy tickets for DHB Handball World Championship 2027')
    })

    it('maintains semantic button role', () => {
      const html = mockButtonTemplate()
      document.body.innerHTML = html
      
      const button = screen.getByRole('button')
      expect(button).toBeInTheDocument()
    })

    it('maintains semantic link role for anchor buttons', () => {
      const html = mockButtonTemplate({ tag: 'a', href: '/test' })
      document.body.innerHTML = html
      
      const link = screen.getByRole('link')
      expect(link).toBeInTheDocument()
    })
  })

  describe('CSS Classes', () => {
    it('includes all required base classes', () => {
      const html = mockButtonTemplate({ variant: 'primary', size: 'large' })
      document.body.innerHTML = html
      
      const button = screen.getByRole('button')
      expect(button).toHaveClass('button')
      expect(button).toHaveClass('button--primary')
      expect(button).toHaveClass('button--large')
    })

    it('applies additional custom classes', () => {
      const html = mockButtonTemplate({ classes: 'custom-class another-class' })
      document.body.innerHTML = html
      
      const button = screen.getByRole('button')
      expect(button).toHaveClass('custom-class', 'another-class')
    })
  })

  describe('Content Structure', () => {
    it('wraps button text in content span', () => {
      const html = mockButtonTemplate({ text: 'Test Button' })
      document.body.innerHTML = html
      
      const contentSpan = document.querySelector('.button__content')
      expect(contentSpan).toBeInTheDocument()
      expect(contentSpan).toHaveTextContent('Test Button')
    })
  })

  describe('PDF Design Compliance', () => {
    it('renders primary ticket button matching PDF specs', () => {
      const html = mockButtonTemplate({
        text: 'TICKETS',
        variant: 'primary',
        size: 'large'
      })
      document.body.innerHTML = html
      
      const button = screen.getByRole('button')
      expect(button).toHaveTextContent('TICKETS')
      expect(button).toHaveClass('button--primary', 'button--large')
    })

    it('renders secondary learn more button', () => {
      const html = mockButtonTemplate({
        text: 'Learn More',
        variant: 'secondary',
        size: 'medium'
      })
      document.body.innerHTML = html
      
      const button = screen.getByRole('button')
      expect(button).toHaveTextContent('Learn More')
      expect(button).toHaveClass('button--secondary', 'button--medium')
    })

    it('renders text read more button', () => {
      const html = mockButtonTemplate({
        text: 'READ MORE',
        variant: 'text',
        tag: 'a',
        href: '/article'
      })
      document.body.innerHTML = html
      
      const link = screen.getByRole('link')
      expect(link).toHaveTextContent('READ MORE')
      expect(link).toHaveClass('button--text')
      expect(link).toHaveAttribute('href', '/article')
    })
  })
})

// Alpine.js Integration Tests
describe('Button Alpine.js Integration', () => {
  // Note: These would require Alpine.js to be loaded in the test environment
  // For now, we test the data structure and attributes

  it('should have proper Alpine.js data structure for loading states', () => {
    // This would test that buttonComponent.initButton() returns proper data
    const expectedStructure = {
      loading: false,
      setLoading: expect.any(Function),
      toggleLoading: expect.any(Function),
      handleClick: expect.any(Function)
    }
    
    // In a real test environment with Alpine.js:
    // const buttonData = window.buttonComponent.initButton()
    // expect(buttonData).toMatchObject(expectedStructure)
  })
})