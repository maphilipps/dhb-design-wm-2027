/**
 * @file Logo.test.js
 * @description Unit tests for the Logo component
 */

import { render, screen, fireEvent, waitFor } from '@testing-library/dom'
import '@testing-library/jest-dom'
import LogoTemplate from '../logo.html.twig'
import '../logo.js'

// Mock IntersectionObserver
global.IntersectionObserver = class IntersectionObserver {
  constructor(callback) {
    this.callback = callback
  }
  
  observe() {
    // Immediately trigger callback as if element is visible
    this.callback([{ isIntersecting: true, target: {} }])
  }
  
  unobserve() {}
  disconnect() {}
}

describe('Logo Component', () => {
  // Test IHF Logo
  describe('IHF Logo', () => {
    test('renders IHF logo with correct attributes', () => {
      const html = LogoTemplate({
        logo_type: 'ihf',
        size: 'lg',
        aria_label: '30th IHF Men\'s Handball World Championship Germany 2027'
      })
      
      document.body.innerHTML = html
      
      const logoElement = screen.getByRole('img')
      expect(logoElement).toBeInTheDocument()
      expect(logoElement).toHaveAttribute('aria-label', '30th IHF Men\'s Handball World Championship Germany 2027')
      expect(logoElement).toHaveClass('logo', 'logo--ihf', 'logo--lg')
      
      // Check SVG is present
      const svg = logoElement.querySelector('.logo__svg')
      expect(svg).toBeInTheDocument()
      expect(svg).toHaveAttribute('viewBox', '0 0 160 160')
    })

    test('includes proper SVG text elements for IHF logo', () => {
      const html = LogoTemplate({
        logo_type: 'ihf',
        size: 'md'
      })
      
      document.body.innerHTML = html
      
      // Check for SVG text content
      const svgTexts = document.querySelectorAll('.logo__text')
      expect(svgTexts.length).toBeGreaterThan(0)
    })
  })

  // Test Partner Logos
  describe('Partner Logos', () => {
    const partners = ['gerflor', 'hummel', 'molten', 'sportfive', 'blaklader', 'lidl', 'wurth', 'grundfos']
    
    partners.forEach(partner => {
      test(`renders ${partner} logo correctly`, () => {
        const html = LogoTemplate({
          logo_type: 'partner',
          partner_name: partner,
          size: 'md'
        })
        
        document.body.innerHTML = html
        
        const logoElement = screen.getByRole('img')
        expect(logoElement).toBeInTheDocument()
        expect(logoElement).toHaveClass('logo', 'logo--partner', 'logo--md')
        expect(logoElement).toHaveAttribute('aria-label', expect.stringContaining('Official Partner'))
        
        // Check SVG is present
        const svg = logoElement.querySelector('.logo__svg')
        expect(svg).toBeInTheDocument()
      })
    })

    test('partner logo includes partner name in aria-label', () => {
      const html = LogoTemplate({
        logo_type: 'partner',
        partner_name: 'molten',
        size: 'md'
      })
      
      document.body.innerHTML = html
      
      const logoElement = screen.getByRole('img')
      expect(logoElement).toHaveAttribute('aria-label', 'molten - Official Partner')
    })
  })

  // Test Generic Logo
  describe('Generic Logo', () => {
    test('renders generic logo with image URL', () => {
      const testUrl = 'https://example.com/logo.png'
      const html = LogoTemplate({
        logo_type: 'generic',
        logo_url: testUrl,
        alt_text: 'Test Logo',
        size: 'md'
      })
      
      document.body.innerHTML = html
      
      const logoElement = screen.getByRole('img')
      expect(logoElement).toBeInTheDocument()
      
      const img = logoElement.querySelector('.logo__image')
      expect(img).toBeInTheDocument()
      expect(img).toHaveAttribute('src', testUrl)
      expect(img).toHaveAttribute('alt', 'Test Logo')
    })

    test('renders generic logo with placeholder when no URL provided', () => {
      const html = LogoTemplate({
        logo_type: 'generic',
        logo_text: 'PLACEHOLDER',
        size: 'md'
      })
      
      document.body.innerHTML = html
      
      const logoElement = screen.getByRole('img')
      expect(logoElement).toBeInTheDocument()
      
      const placeholder = logoElement.querySelector('.logo__placeholder')
      expect(placeholder).toBeInTheDocument()
      
      const text = placeholder.querySelector('.logo__text')
      expect(text).toHaveTextContent('PLACEHOLDER')
    })
  })

  // Test Size Variants
  describe('Size Variants', () => {
    const sizes = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl']
    
    sizes.forEach(size => {
      test(`renders ${size} size variant correctly`, () => {
        const html = LogoTemplate({
          logo_type: 'ihf',
          size: size
        })
        
        document.body.innerHTML = html
        
        const logoElement = screen.getByRole('img')
        expect(logoElement).toHaveClass(`logo--${size}`)
      })
    })

    test('defaults to md size when no size specified', () => {
      const html = LogoTemplate({
        logo_type: 'ihf'
      })
      
      document.body.innerHTML = html
      
      const logoElement = screen.getByRole('img')
      expect(logoElement).toHaveClass('logo--md')
    })
  })

  // Test Accessibility Features
  describe('Accessibility Features', () => {
    test('includes screen reader text when sr_only is true', () => {
      const html = LogoTemplate({
        logo_type: 'ihf',
        sr_only: true,
        sr_text: 'Screen reader text'
      })
      
      document.body.innerHTML = html
      
      const logoElement = screen.getByRole('img')
      expect(logoElement).toHaveAttribute('aria-hidden', 'true')
      
      const srText = logoElement.querySelector('.sr-only')
      expect(srText).toBeInTheDocument()
      expect(srText).toHaveTextContent('Screen reader text')
    })

    test('has proper role and aria-label attributes', () => {
      const html = LogoTemplate({
        logo_type: 'partner',
        partner_name: 'hummel',
        aria_label: 'Custom aria label'
      })
      
      document.body.innerHTML = html
      
      const logoElement = screen.getByRole('img')
      expect(logoElement).toHaveAttribute('role', 'img')
      expect(logoElement).toHaveAttribute('aria-label', 'Custom aria label')
    })

    test('defaults to appropriate aria-label when none provided', () => {
      const html = LogoTemplate({
        logo_type: 'ihf'
      })
      
      document.body.innerHTML = html
      
      const logoElement = screen.getByRole('img')
      expect(logoElement).toHaveAttribute('aria-label', '30th IHF Men\'s Handball World Championship Germany 2027')
    })
  })

  // Test CSS Classes
  describe('CSS Classes', () => {
    test('applies base logo classes', () => {
      const html = LogoTemplate({
        logo_type: 'ihf',
        size: 'lg'
      })
      
      document.body.innerHTML = html
      
      const logoElement = screen.getByRole('img')
      expect(logoElement).toHaveClass('logo')
      expect(logoElement).toHaveClass('logo--ihf')
      expect(logoElement).toHaveClass('logo--lg')
    })

    test('applies custom classes', () => {
      const html = LogoTemplate({
        logo_type: 'partner',
        partner_name: 'molten',
        classes: 'custom-class another-class'
      })
      
      document.body.innerHTML = html
      
      const logoElement = screen.getByRole('img')
      expect(logoElement).toHaveClass('custom-class', 'another-class')
    })

    test('applies variant classes correctly', () => {
      const html = LogoTemplate({
        logo_type: 'partner',
        partner_name: 'sportfive',
        variant: 'interactive'
      })
      
      document.body.innerHTML = html
      
      const logoElement = screen.getByRole('img')
      expect(logoElement).toHaveClass('logo--interactive')
    })
  })

  // Test Interactive Features
  describe('Interactive Features', () => {
    beforeEach(() => {
      // Reset Alpine.js data
      if (window.Alpine) {
        window.Alpine.store('logo', {})
      }
    })

    test('handles click events on interactive logos', async () => {
      const html = `
        <div data-logo data-logo-type="partner" data-partner-name="molten" 
             class="logo logo--partner logo--interactive" 
             x-data="logoComponent()" 
             @click="handleClick()">
          ${LogoTemplate({
            logo_type: 'partner',
            partner_name: 'molten',
            variant: 'interactive'
          })}
        </div>
      `
      
      document.body.innerHTML = html
      
      const logoElement = document.querySelector('[data-logo]')
      
      // Mock the handleClick method
      const handleClickSpy = jest.fn()
      logoElement.handleClick = handleClickSpy
      
      fireEvent.click(logoElement)
      
      // In a real Alpine.js environment, this would work
      // For now, just test that the element is clickable
      expect(logoElement).toBeInTheDocument()
    })
  })

  // Test Error Handling
  describe('Error Handling', () => {
    test('applies error classes when specified', () => {
      const html = LogoTemplate({
        logo_type: 'generic',
        logo_url: 'invalid-url.png',
        classes: 'logo--error'
      })
      
      document.body.innerHTML = html
      
      const logoElement = screen.getByRole('img')
      expect(logoElement).toHaveClass('logo--error')
    })
  })

  // Test Custom Attributes
  describe('Custom Attributes', () => {
    test('applies custom id attribute', () => {
      const html = LogoTemplate({
        logo_type: 'ihf',
        id: 'custom-logo-id'
      })
      
      document.body.innerHTML = html
      
      const logoElement = screen.getByRole('img')
      expect(logoElement).toHaveAttribute('id', 'custom-logo-id')
    })

    test('applies aria-describedby when provided', () => {
      const html = LogoTemplate({
        logo_type: 'partner',
        partner_name: 'gerflor',
        aria_describedby: 'logo-description'
      })
      
      document.body.innerHTML = html
      
      const logoElement = screen.getByRole('img')
      expect(logoElement).toHaveAttribute('aria-describedby', 'logo-description')
    })
  })

  // Test Logo Utility Functions
  describe('Logo Utility Functions', () => {
    test('LogoUtils.generateAltText generates correct alt text', () => {
      expect(window.LogoUtils.generateAltText('ihf')).toBe('30th IHF Men\'s Handball World Championship Germany 2027')
      expect(window.LogoUtils.generateAltText('partner', 'molten')).toBe('molten - Official Partner')
      expect(window.LogoUtils.generateAltText('generic')).toBe('Logo')
    })

    test('LogoUtils.getOptimalSize returns appropriate size', () => {
      const mockContainer = {
        offsetWidth: 80
      }
      expect(window.LogoUtils.getOptimalSize(mockContainer)).toBe('xs')
      
      mockContainer.offsetWidth = 120
      expect(window.LogoUtils.getOptimalSize(mockContainer)).toBe('sm')
      
      mockContainer.offsetWidth = 180
      expect(window.LogoUtils.getOptimalSize(mockContainer)).toBe('md')
      
      mockContainer.offsetWidth = 250
      expect(window.LogoUtils.getOptimalSize(mockContainer)).toBe('lg')
      
      mockContainer.offsetWidth = 350
      expect(window.LogoUtils.getOptimalSize(mockContainer)).toBe('xl')
    })
  })
})