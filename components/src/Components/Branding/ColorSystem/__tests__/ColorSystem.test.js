import { describe, it, expect, beforeEach, vi, afterEach } from 'vitest'
import { render, screen } from '@testing-library/dom'
import userEvent from '@testing-library/user-event'
import Component from '../color-system.html.twig'

// Mock clipboard API
Object.assign(navigator, {
  clipboard: {
    writeText: vi.fn(),
  },
})

describe('ColorSystem Component', () => {
  let container

  beforeEach(() => {
    container = document.createElement('div')
    document.body.appendChild(container)
  })

  afterEach(() => {
    document.body.removeChild(container)
    vi.clearAllMocks()
  })

  describe('Component Rendering', () => {
    it('renders with default configuration', () => {
      container.innerHTML = Component({
        show_palette: true,
        show_combinations: true,
        show_utilities: true
      })

      expect(container.querySelector('.color-system')).toBeTruthy()
      expect(container.querySelector('.color-system__palette')).toBeTruthy()
      expect(container.querySelector('.color-system__combinations')).toBeTruthy()
      expect(container.querySelector('.color-system__utilities')).toBeTruthy()
    })

    it('renders title when provided', () => {
      const title = 'DHB Brand Colors'
      container.innerHTML = Component({
        title: title,
        show_palette: true
      })

      expect(container.querySelector('.color-system__title')).toBeTruthy()
      expect(container.querySelector('.color-system__title').textContent.trim()).toBe(title)
    })

    it('renders only palette when other sections are disabled', () => {
      container.innerHTML = Component({
        show_palette: true,
        show_combinations: false,
        show_utilities: false
      })

      expect(container.querySelector('.color-system__palette')).toBeTruthy()
      expect(container.querySelector('.color-system__combinations')).toBeFalsy()
      expect(container.querySelector('.color-system__utilities')).toBeFalsy()
    })
  })

  describe('Color Swatches', () => {
    beforeEach(() => {
      container.innerHTML = Component({
        show_palette: true
      })
    })

    it('renders all DHB brand color swatches', () => {
      const expectedColors = ['#1a1a2e', '#ff4757', '#feca57', '#ffffff']
      const swatches = container.querySelectorAll('.color-system__swatch')

      expect(swatches.length).toBe(4)

      swatches.forEach((swatch, index) => {
        expect(swatch.dataset.color).toBe(expectedColors[index])
      })
    })

    it('includes proper color names and hex values', () => {
      const navySwatch = container.querySelector('[data-color="#1a1a2e"]')
      const redSwatch = container.querySelector('[data-color="#ff4757"]')
      const yellowSwatch = container.querySelector('[data-color="#feca57"]')
      const whiteSwatch = container.querySelector('[data-color="#ffffff"]')

      expect(navySwatch.querySelector('.color-system__swatch-name').textContent).toBe('Navy')
      expect(navySwatch.querySelector('.color-system__swatch-hex').textContent).toBe('#1a1a2e')

      expect(redSwatch.querySelector('.color-system__swatch-name').textContent).toBe('Red')
      expect(redSwatch.querySelector('.color-system__swatch-hex').textContent).toBe('#ff4757')

      expect(yellowSwatch.querySelector('.color-system__swatch-name').textContent).toBe('Yellow')
      expect(yellowSwatch.querySelector('.color-system__swatch-hex').textContent).toBe('#feca57')

      expect(whiteSwatch.querySelector('.color-system__swatch-name').textContent).toBe('White')
      expect(whiteSwatch.querySelector('.color-system__swatch-hex').textContent).toBe('#ffffff')
    })

    it('has proper accessibility attributes', () => {
      const swatches = container.querySelectorAll('.color-system__swatch')

      swatches.forEach(swatch => {
        expect(swatch.getAttribute('aria-label')).toContain(swatch.dataset.color)
        expect(swatch.getAttribute('title')).toBeTruthy()
      })
    })
  })

  describe('Color Combinations', () => {
    beforeEach(() => {
      container.innerHTML = Component({
        show_combinations: true
      })
    })

    it('renders color combination examples', () => {
      const combinations = container.querySelectorAll('.color-system__combination')
      expect(combinations.length).toBe(4) // Navy, White, Red, Yellow backgrounds

      // Check for specific combinations
      expect(container.querySelector('.bg-dhb-navy')).toBeTruthy()
      expect(container.querySelector('.bg-dhb-white')).toBeTruthy()
      expect(container.querySelector('.bg-dhb-red')).toBeTruthy()
      expect(container.querySelector('.bg-dhb-yellow')).toBeTruthy()
    })

    it('includes text demonstrating proper contrast', () => {
      const navyBg = container.querySelector('.bg-dhb-navy')
      const whiteBg = container.querySelector('.bg-dhb-white')

      expect(navyBg.querySelector('.text-dhb-white')).toBeTruthy()
      expect(navyBg.querySelector('.text-dhb-yellow')).toBeTruthy()
      expect(navyBg.querySelector('.text-dhb-red')).toBeTruthy()

      expect(whiteBg.querySelector('.text-dhb-navy')).toBeTruthy()
      expect(whiteBg.querySelector('.text-dhb-red')).toBeTruthy()
    })
  })

  describe('Utility Classes', () => {
    beforeEach(() => {
      container.innerHTML = Component({
        show_utilities: true
      })
    })

    it('renders utility class sections', () => {
      const sections = container.querySelectorAll('.color-system__utility-section')
      expect(sections.length).toBe(3) // Background, Text, Border colors
    })

    it('includes all DHB color utility classes', () => {
      const expectedUtilities = [
        'bg-dhb-navy', 'bg-dhb-red', 'bg-dhb-yellow', 'bg-dhb-white',
        'text-dhb-navy', 'text-dhb-red', 'text-dhb-yellow', 'text-dhb-white',
        'border-dhb-navy', 'border-dhb-red', 'border-dhb-yellow', 'border-dhb-white'
      ]

      expectedUtilities.forEach(utility => {
        const utilityElement = container.querySelector(`.color-system__utility-code:contains("${utility}")`)
        const found = Array.from(container.querySelectorAll('.color-system__utility-code'))
          .some(el => el.textContent === utility)
        expect(found).toBe(true)
      })
    })
  })

  describe('Accessibility', () => {
    beforeEach(() => {
      container.innerHTML = Component({
        show_palette: true
      })
    })

    it('has proper ARIA roles and labels', () => {
      const palette = container.querySelector('.color-system__palette')
      const combinations = container.querySelector('.color-system__combinations')

      expect(palette?.getAttribute('role')).toBe('group')
      expect(palette?.getAttribute('aria-label')).toBe('DHB Brand Color Palette')

      if (combinations) {
        expect(combinations.getAttribute('role')).toBe('group')
        expect(combinations.getAttribute('aria-label')).toBe('Color Combinations')
      }
    })

    it('supports keyboard navigation', async () => {
      const user = userEvent.setup()
      const swatches = container.querySelectorAll('.color-system__swatch')

      // Focus first swatch
      swatches[0].focus()
      expect(document.activeElement).toBe(swatches[0])

      // Navigate with arrow keys
      await user.keyboard('{ArrowRight}')
      expect(document.activeElement).toBe(swatches[1])

      await user.keyboard('{ArrowLeft}')
      expect(document.activeElement).toBe(swatches[0])
    })

    it('supports reduced motion preferences', () => {
      // Mock reduced motion preference
      Object.defineProperty(window, 'matchMedia', {
        writable: true,
        value: vi.fn().mockImplementation(query => ({
          matches: query.includes('prefers-reduced-motion'),
          media: query,
          onchange: null,
          addListener: vi.fn(),
          removeListener: vi.fn(),
        })),
      })

      container.innerHTML = Component({ show_palette: true })

      // In a real implementation, you'd test that animations are disabled
      // This is a placeholder for more comprehensive accessibility testing
      expect(container.querySelector('.color-system')).toBeTruthy()
    })
  })

  describe('Component Variants', () => {
    it('applies variant data attribute', () => {
      container.innerHTML = Component({
        variant: 'compact',
        show_palette: true
      })

      const colorSystem = container.querySelector('.color-system')
      expect(colorSystem.dataset.variant).toBe('compact')
    })

    it('applies custom CSS classes', () => {
      const customClass = 'custom-color-system'
      container.innerHTML = Component({
        classes: customClass,
        show_palette: true
      })

      expect(container.querySelector(`.${customClass}`)).toBeTruthy()
    })

    it('includes custom ID when provided', () => {
      const customId = 'my-color-system'
      container.innerHTML = Component({
        id: customId,
        show_palette: true
      })

      expect(container.querySelector(`#${customId}`)).toBeTruthy()
    })
  })

  describe('Brand Color Validation', () => {
    it('uses exact DHB brand color values', () => {
      container.innerHTML = Component({ show_palette: true })

      const swatches = container.querySelectorAll('.color-system__swatch')
      const actualColors = Array.from(swatches).map(swatch => swatch.dataset.color)
      const expectedColors = ['#1a1a2e', '#ff4757', '#feca57', '#ffffff']

      expect(actualColors).toEqual(expectedColors)
    })

    it('applies correct Tailwind classes for each color', () => {
      container.innerHTML = Component({ show_palette: true })

      expect(container.querySelector('.bg-dhb-navy')).toBeTruthy()
      expect(container.querySelector('.bg-dhb-red')).toBeTruthy()
      expect(container.querySelector('.bg-dhb-yellow')).toBeTruthy()
      expect(container.querySelector('.bg-dhb-white')).toBeTruthy()
    })
  })
})