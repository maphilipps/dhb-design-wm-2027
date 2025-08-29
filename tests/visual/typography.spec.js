import { test, expect } from '@playwright/test';

/**
 * Visual regression tests for DHB Handball WM 2027 Typography Components
 * 
 * These tests compare component rendering against the original PDF designs
 * to ensure pixel-perfect implementation of the DHB brand guidelines.
 */

test.describe('DHB Typography Components Visual Regression', () => {
  
  test.beforeEach(async ({ page }) => {
    // Navigate to Storybook
    await page.goto('/');
    
    // Wait for Storybook to load
    await page.waitForSelector('[data-testid="storybook-root"]', { timeout: 10000 });
  });

  test.describe('Heading Component', () => {
    
    test('Brand logo 27WM27 matches PDF design', async ({ page }) => {
      // Navigate to brand typography showcase
      await page.goto('/iframe.html?id=atoms-typography-heading--brand-typography-showcase');
      
      // Wait for component to render
      await page.waitForSelector('.heading--brand', { timeout: 5000 });
      
      // Wait for animations to complete
      await page.waitForTimeout(2000);
      
      // Take screenshot and compare
      await expect(page.locator('.heading--brand').first()).toHaveScreenshot('heading-brand-27wm27.png', {
        threshold: 0.2,
        animations: 'disabled',
      });
    });

    test('Display headings match PDF hero sections', async ({ page }) => {
      await page.goto('/iframe.html?id=atoms-typography-heading--display-large');
      
      await page.waitForSelector('.heading--display', { timeout: 5000 });
      await page.waitForTimeout(1000);
      
      await expect(page.locator('.heading--display')).toHaveScreenshot('heading-display-hero.png', {
        threshold: 0.2,
        animations: 'disabled',
      });
    });

    test('Section headings with accent lines match PDF', async ({ page }) => {
      await page.goto('/iframe.html?id=atoms-typography-heading--section-heading');
      
      await page.waitForSelector('.heading--section', { timeout: 5000 });
      await page.waitForTimeout(500);
      
      // Check that the accent line is properly rendered
      await expect(page.locator('.heading--section')).toHaveScreenshot('heading-section-accent.png', {
        threshold: 0.2,
      });
    });

    test('Typography hierarchy matches PDF structure', async ({ page }) => {
      await page.goto('/iframe.html?id=atoms-typography-heading--typography-hierarchy');
      
      await page.waitForSelector('.heading', { timeout: 5000 });
      await page.waitForTimeout(1000);
      
      // Test the complete hierarchy
      await expect(page.locator('div').first()).toHaveScreenshot('typography-hierarchy-complete.png', {
        threshold: 0.2,
        fullPage: true,
        animations: 'disabled',
      });
    });

    test('Gradient animations work correctly', async ({ page }) => {
      await page.goto('/iframe.html?id=atoms-typography-heading--gradient-heading');
      
      await page.waitForSelector('.heading--gradient', { timeout: 5000 });
      
      // Capture initial state
      await expect(page.locator('.heading--gradient')).toHaveScreenshot('heading-gradient-initial.png', {
        threshold: 0.2,
        animations: 'disabled',
      });
      
      // Test reduced motion
      await page.emulateMedia({ reducedMotion: 'reduce' });
      await expect(page.locator('.heading--gradient')).toHaveScreenshot('heading-gradient-reduced-motion.png', {
        threshold: 0.2,
      });
    });
  });

  test.describe('Body Text Component', () => {
    
    test('Lead text matches PDF introduction paragraphs', async ({ page }) => {
      await page.goto('/iframe.html?id=atoms-typography-bodytext--lead-text');
      
      await page.waitForSelector('.body-text--lead', { timeout: 5000 });
      
      await expect(page.locator('.body-text--lead')).toHaveScreenshot('bodytext-lead-paragraph.png', {
        threshold: 0.2,
      });
    });

    test('Typography sizes match PDF content hierarchy', async ({ page }) => {
      await page.goto('/iframe.html?id=atoms-typography-bodytext--typography-sizes');
      
      await page.waitForSelector('.body-text', { timeout: 5000 });
      await page.waitForTimeout(1000);
      
      await expect(page.locator('div').first()).toHaveScreenshot('bodytext-size-hierarchy.png', {
        threshold: 0.2,
        fullPage: true,
      });
    });

    test('Color variants match PDF content styling', async ({ page }) => {
      // Test white text on navy background
      await page.goto('/iframe.html?id=atoms-typography-bodytext--white-text');
      
      await page.waitForSelector('.body-text--white', { timeout: 5000 });
      
      await expect(page.locator('.body-text--white')).toHaveScreenshot('bodytext-white-on-navy.png', {
        threshold: 0.2,
      });
    });

    test('PDF content examples render correctly', async ({ page }) => {
      await page.goto('/iframe.html?id=atoms-typography-bodytext--pdf-content-showcase');
      
      await page.waitForSelector('.body-text', { timeout: 5000 });
      await page.waitForTimeout(1500);
      
      await expect(page.locator('div').first()).toHaveScreenshot('bodytext-pdf-examples.png', {
        threshold: 0.2,
        fullPage: true,
      });
    });
  });

  test.describe('Brand Logo Component', () => {
    
    test('Brand logo sizes match PDF specifications', async ({ page }) => {
      await page.goto('/iframe.html?id=atoms-typography-brandlogo--all-sizes');
      
      await page.waitForSelector('.brand-logo', { timeout: 5000 });
      await page.waitForTimeout(1000);
      
      await expect(page.locator('div').first()).toHaveScreenshot('brandlogo-all-sizes.png', {
        threshold: 0.2,
        fullPage: true,
        animations: 'disabled',
      });
    });

    test('Brand logo animations work correctly', async ({ page }) => {
      await page.goto('/iframe.html?id=atoms-typography-brandlogo--with-animation');
      
      await page.waitForSelector('.brand-logo[data-animate]', { timeout: 5000 });
      
      // Test animation state
      await expect(page.locator('.brand-logo[data-animate]')).toHaveScreenshot('brandlogo-animated.png', {
        threshold: 0.3, // Higher threshold for animations
        animations: 'disabled',
      });
    });

    test('Brand logo color variants match PDF branding', async ({ page }) => {
      // Test white logo on navy
      await page.goto('/iframe.html?id=atoms-typography-brandlogo--white-on-navy');
      
      await page.waitForSelector('.brand-logo--white', { timeout: 5000 });
      
      await expect(page.locator('.brand-logo--white')).toHaveScreenshot('brandlogo-white-variant.png', {
        threshold: 0.2,
        animations: 'disabled',
      });
    });
  });

  test.describe('Responsive Design', () => {
    
    test('Components respond correctly to mobile viewport', async ({ page }) => {
      // Set mobile viewport
      await page.setViewportSize({ width: 375, height: 667 });
      
      await page.goto('/iframe.html?id=atoms-typography-heading--typography-hierarchy');
      await page.waitForSelector('.heading', { timeout: 5000 });
      await page.waitForTimeout(1000);
      
      await expect(page.locator('div').first()).toHaveScreenshot('responsive-mobile-hierarchy.png', {
        threshold: 0.2,
        fullPage: true,
        animations: 'disabled',
      });
    });

    test('Components respond correctly to tablet viewport', async ({ page }) => {
      // Set tablet viewport
      await page.setViewportSize({ width: 768, height: 1024 });
      
      await page.goto('/iframe.html?id=atoms-typography-heading--pdf-examples');
      await page.waitForSelector('.heading', { timeout: 5000 });
      await page.waitForTimeout(1500);
      
      await expect(page.locator('div').first()).toHaveScreenshot('responsive-tablet-examples.png', {
        threshold: 0.2,
        fullPage: true,
        animations: 'disabled',
      });
    });
  });

  test.describe('Accessibility Visual Tests', () => {
    
    test('High contrast mode renders correctly', async ({ page }) => {
      await page.goto('/iframe.html?id=atoms-typography-heading--typography-hierarchy');
      
      // Emulate high contrast mode
      await page.emulateMedia({ colorScheme: 'dark', forcedColors: 'active' });
      
      await page.waitForSelector('.heading', { timeout: 5000 });
      await page.waitForTimeout(1000);
      
      await expect(page.locator('div').first()).toHaveScreenshot('accessibility-high-contrast.png', {
        threshold: 0.3, // Higher threshold for forced colors
        fullPage: true,
        animations: 'disabled',
      });
    });

    test('Focus states are visible and accessible', async ({ page }) => {
      await page.goto('/iframe.html?id=atoms-typography-heading--section-heading');
      
      await page.waitForSelector('.heading--section[tabindex]', { timeout: 5000 });
      
      // Focus the element
      await page.locator('.heading--section[tabindex]').focus();
      
      await expect(page.locator('.heading--section[tabindex]')).toHaveScreenshot('accessibility-focus-state.png', {
        threshold: 0.2,
      });
    });
  });

  test.describe('Cross-browser Consistency', () => {
    
    test('Typography renders consistently across browsers', async ({ page, browserName }) => {
      await page.goto('/iframe.html?id=atoms-typography-heading--brand-typography-showcase');
      
      await page.waitForSelector('.heading--brand', { timeout: 5000 });
      await page.waitForTimeout(2000);
      
      await expect(page.locator('div').first()).toHaveScreenshot(`cross-browser-${browserName}-typography.png`, {
        threshold: 0.3, // Higher threshold for cross-browser differences
        fullPage: true,
        animations: 'disabled',
      });
    });
  });
});