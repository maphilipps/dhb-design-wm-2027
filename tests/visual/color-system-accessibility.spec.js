/**
 * Color System Accessibility Tests
 * Visual and accessibility testing for the DHB Color System atom
 */

import { test, expect } from '@playwright/test'
import { injectAxe, checkA11y } from 'axe-playwright'

const STORYBOOK_URL = 'http://localhost:6006'
const COLOR_SYSTEM_STORIES = [
  'atoms-branding-colorsystem--default',
  'atoms-branding-colorsystem--palette-only',
  'atoms-branding-colorsystem--combinations-only',
  'atoms-branding-colorsystem--utilities-only',
  'atoms-branding-colorsystem--accessibility-demo'
]

test.describe('Color System - Accessibility Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`${STORYBOOK_URL}/iframe.html`)
    await injectAxe(page)
  })

  COLOR_SYSTEM_STORIES.forEach((storyId) => {
    test(`should pass axe accessibility tests - ${storyId}`, async ({ page }) => {
      await page.goto(`${STORYBOOK_URL}/iframe.html?id=${storyId}`)
      
      // Wait for component to load
      await page.waitForSelector('.color-system', { timeout: 5000 })
      
      // Run axe accessibility tests
      await checkA11y(page, null, {
        detailedReport: true,
        detailedReportOptions: { html: true },
        verbose: true,
        tags: ['wcag2a', 'wcag2aa', 'wcag21aa', 'best-practice']
      })
    })
  })

  test('should have proper ARIA labels and roles', async ({ page }) => {
    await page.goto(`${STORYBOOK_URL}/iframe.html?id=atoms-branding-colorsystem--default`)
    await page.waitForSelector('.color-system')

    // Check main component role
    const colorSystem = page.locator('.color-system')
    await expect(colorSystem).toHaveAttribute('role', 'presentation')

    // Check palette group
    const palette = page.locator('.color-system__palette')
    if (await palette.count() > 0) {
      await expect(palette).toHaveAttribute('role', 'group')
      await expect(palette).toHaveAttribute('aria-label', 'DHB Brand Color Palette')
    }

    // Check color swatches have proper labels
    const swatches = page.locator('.color-system__swatch')
    const swatchCount = await swatches.count()
    
    for (let i = 0; i < swatchCount; i++) {
      const swatch = swatches.nth(i)
      await expect(swatch).toHaveAttribute('aria-label')
      await expect(swatch).toHaveAttribute('title')
      
      const ariaLabel = await swatch.getAttribute('aria-label')
      expect(ariaLabel).toContain('#')
    }
  })

  test('should support keyboard navigation', async ({ page }) => {
    await page.goto(`${STORYBOOK_URL}/iframe.html?id=atoms-branding-colorsystem--palette-only`)
    await page.waitForSelector('.color-system__swatch')

    const swatches = page.locator('.color-system__swatch')
    const firstSwatch = swatches.first()
    const secondSwatch = swatches.nth(1)

    // Focus first swatch
    await firstSwatch.focus()
    await expect(firstSwatch).toBeFocused()

    // Navigate with arrow keys
    await page.keyboard.press('ArrowRight')
    await expect(secondSwatch).toBeFocused()

    // Navigate back
    await page.keyboard.press('ArrowLeft')
    await expect(firstSwatch).toBeFocused()

    // Test Home key
    await page.keyboard.press('ArrowRight') // Move away from first
    await page.keyboard.press('Home')
    await expect(firstSwatch).toBeFocused()

    // Test End key
    const lastSwatch = swatches.last()
    await page.keyboard.press('End')
    await expect(lastSwatch).toBeFocused()
  })

  test('should have proper focus indicators', async ({ page }) => {
    await page.goto(`${STORYBOOK_URL}/iframe.html?id=atoms-branding-colorsystem--palette-only`)
    await page.waitForSelector('.color-system__swatch')

    const firstSwatch = page.locator('.color-system__swatch').first()
    
    // Focus the swatch
    await firstSwatch.focus()
    
    // Check that focus styling is applied
    const focusRing = await firstSwatch.evaluate((el) => {
      const styles = window.getComputedStyle(el)
      return {
        outline: styles.outline,
        outlineWidth: styles.outlineWidth,
        outlineColor: styles.outlineColor
      }
    })
    
    expect(focusRing.outlineWidth).not.toBe('0px')
    expect(focusRing.outline).not.toBe('none')
  })

  test('should support reduced motion preferences', async ({ page }) => {
    // Set reduced motion preference
    await page.emulateMedia({ reducedMotion: 'reduce' })
    
    await page.goto(`${STORYBOOK_URL}/iframe.html?id=atoms-branding-colorsystem--default`)
    await page.waitForSelector('.color-system')

    const swatches = page.locator('.color-system__swatch')
    const firstSwatch = swatches.first()

    // Check that transitions are reduced or disabled
    const transitions = await firstSwatch.evaluate((el) => {
      const styles = window.getComputedStyle(el)
      return {
        transition: styles.transition,
        transitionDuration: styles.transitionDuration
      }
    })

    // With reduced motion, transitions should be very short or none
    if (transitions.transitionDuration !== 'none') {
      expect(transitions.transitionDuration).toMatch(/0\.01ms|0s/)
    }
  })

  test('should support high contrast mode', async ({ page }) => {
    // Simulate high contrast mode
    await page.addStyleTag({
      content: `
        @media (prefers-contrast: high) {
          .color-system__swatch {
            border: 2px solid black !important;
          }
          .color-system__swatch-label {
            background: white !important;
            color: black !important;
          }
        }
      `
    })

    await page.goto(`${STORYBOOK_URL}/iframe.html?id=atoms-branding-colorsystem--palette-only`)
    await page.waitForSelector('.color-system__swatch')

    // Test that high contrast styles are applied
    const swatch = page.locator('.color-system__swatch').first()
    const borderWidth = await swatch.evaluate((el) => {
      return window.getComputedStyle(el).borderWidth
    })

    // High contrast mode should have visible borders
    expect(borderWidth).not.toBe('0px')
  })
})

test.describe('Color System - Color Contrast Tests', () => {
  const colorCombinations = [
    { bg: '#1a1a2e', fg: '#ffffff', name: 'White on Navy' },
    { bg: '#ff4757', fg: '#ffffff', name: 'White on Red' },
    { bg: '#ffffff', fg: '#1a1a2e', name: 'Navy on White' },
    { bg: '#feca57', fg: '#1a1a2e', name: 'Navy on Yellow' }
  ]

  colorCombinations.forEach(({ bg, fg, name }) => {
    test(`should meet WCAG AA contrast ratio for ${name}`, async ({ page }) => {
      await page.goto(`${STORYBOOK_URL}/iframe.html?id=atoms-branding-colorsystem--combinations-only`)
      await page.waitForSelector('.color-system__combination')

      // Create a test element with the color combination
      const testElement = await page.evaluateHandle(({ bg, fg }) => {
        const element = document.createElement('div')
        element.style.backgroundColor = bg
        element.style.color = fg
        element.style.padding = '20px'
        element.textContent = 'Test text for contrast'
        element.className = 'contrast-test'
        document.body.appendChild(element)
        return element
      }, { bg, fg })

      // Check contrast ratio using axe
      await checkA11y(page, '.contrast-test', {
        rules: {
          'color-contrast': { enabled: true }
        }
      })

      // Clean up test element
      await testElement.evaluate((el) => el.remove())
    })
  })

  test('should validate brand color combinations', async ({ page }) => {
    await page.goto(`${STORYBOOK_URL}/iframe.html?id=atoms-branding-colorsystem--combinations-only`)
    await page.waitForSelector('.color-system__combination')

    // Check that all combination examples are present
    await expect(page.locator('.bg-dhb-navy')).toBeVisible()
    await expect(page.locator('.bg-dhb-white')).toBeVisible()
    await expect(page.locator('.bg-dhb-red')).toBeVisible()
    await expect(page.locator('.bg-dhb-yellow')).toBeVisible()

    // Check text contrast within combinations
    const navyBg = page.locator('.bg-dhb-navy')
    await expect(navyBg.locator('.text-dhb-white')).toBeVisible()
    await expect(navyBg.locator('.text-dhb-yellow')).toBeVisible()
    await expect(navyBg.locator('.text-dhb-red')).toBeVisible()

    const whiteBg = page.locator('.bg-dhb-white')
    await expect(whiteBg.locator('.text-dhb-navy')).toBeVisible()
    await expect(whiteBg.locator('.text-dhb-red')).toBeVisible()
  })
})

test.describe('Color System - Visual Regression', () => {
  test('should match visual baseline - Default', async ({ page }) => {
    await page.goto(`${STORYBOOK_URL}/iframe.html?id=atoms-branding-colorsystem--default`)
    await page.waitForSelector('.color-system')
    
    await expect(page.locator('.color-system')).toHaveScreenshot('color-system-default.png', {
      fullPage: true,
      animations: 'disabled'
    })
  })

  test('should match visual baseline - Palette Only', async ({ page }) => {
    await page.goto(`${STORYBOOK_URL}/iframe.html?id=atoms-branding-colorsystem--palette-only`)
    await page.waitForSelector('.color-system')
    
    await expect(page.locator('.color-system')).toHaveScreenshot('color-system-palette.png', {
      animations: 'disabled'
    })
  })

  test('should match visual baseline - Combinations', async ({ page }) => {
    await page.goto(`${STORYBOOK_URL}/iframe.html?id=atoms-branding-colorsystem--combinations-only`)
    await page.waitForSelector('.color-system')
    
    await expect(page.locator('.color-system')).toHaveScreenshot('color-system-combinations.png', {
      animations: 'disabled'
    })
  })

  test('should match visual baseline - Dark theme', async ({ page }) => {
    await page.goto(`${STORYBOOK_URL}/iframe.html?id=atoms-branding-colorsystem--default&globals=backgrounds.value:dhb-navy`)
    await page.waitForSelector('.color-system')
    
    await expect(page.locator('.color-system')).toHaveScreenshot('color-system-dark.png', {
      animations: 'disabled'
    })
  })
})

test.describe('Color System - Interactive Features', () => {
  test('should show hover states', async ({ page }) => {
    await page.goto(`${STORYBOOK_URL}/iframe.html?id=atoms-branding-colorsystem--palette-only`)
    await page.waitForSelector('.color-system__swatch')

    const firstSwatch = page.locator('.color-system__swatch').first()
    
    // Hover over swatch
    await firstSwatch.hover()
    
    // Check that hover styles are applied
    const transform = await firstSwatch.evaluate((el) => {
      return window.getComputedStyle(el).transform
    })
    
    // Should have some transform (scale) on hover
    expect(transform).not.toBe('none')
  })

  test('should handle click interactions', async ({ page }) => {
    await page.goto(`${STORYBOOK_URL}/iframe.html?id=atoms-branding-colorsystem--palette-only`)
    await page.waitForSelector('.color-system__swatch')

    const firstSwatch = page.locator('.color-system__swatch').first()
    
    // Click the swatch
    await firstSwatch.click()
    
    // Check that any interactive feedback is provided
    // This would depend on the actual implementation of the copy functionality
    const copyFeedback = page.locator('[aria-live]')
    if (await copyFeedback.count() > 0) {
      // If there's a live region, it should announce the copy action
      await expect(copyFeedback).not.toBeEmpty()
    }
  })

  test('should support touch interactions', async ({ page }) => {
    // Simulate touch device
    await page.setViewportSize({ width: 375, height: 667 })
    
    await page.goto(`${STORYBOOK_URL}/iframe.html?id=atoms-branding-colorsystem--palette-only`)
    await page.waitForSelector('.color-system__swatch')

    const swatches = page.locator('.color-system__swatch')
    
    // Check that touch targets are adequately sized (44px minimum)
    for (let i = 0; i < await swatches.count(); i++) {
      const swatch = swatches.nth(i)
      const boundingBox = await swatch.boundingBox()
      
      expect(boundingBox.height).toBeGreaterThanOrEqual(44)
      expect(boundingBox.width).toBeGreaterThanOrEqual(44)
    }
  })
})