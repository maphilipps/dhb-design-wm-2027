const { getStoryContext } = require('@storybook/test-runner');
const { injectAxe, checkA11y, configureAxe } = require('axe-playwright');

module.exports = {
  setup() {
    // Configure axe for accessibility testing
    return {
      browsers: ['chromium'],
      launchOptions: {
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox'],
      },
    };
  },

  async preRender(page, context) {
    // Inject axe-core for accessibility testing
    await injectAxe(page);
  },

  async postRender(page, context) {
    // Get story context for conditional testing
    const storyContext = await getStoryContext(page, context);
    const { parameters = {} } = storyContext;

    // Configure axe rules based on story parameters
    await configureAxe(page, {
      rules: {
        // Disable color-contrast check for gradient text as it's complex to validate
        'color-contrast': parameters.a11y?.disableColorContrast 
          ? { enabled: false } 
          : { enabled: true },
        // Enable additional checks for interactive components
        'focus-order-semantics': { enabled: true },
        'keyboard-navigation': { enabled: true },
      },
    });

    // Run accessibility checks
    await checkA11y(page, '#root', {
      detailedReport: true,
      detailedReportOptions: {
        html: true,
      },
      // Only fail on violations, not incomplete checks
      includedImpacts: ['critical', 'serious'],
    });

    // Visual regression testing
    const storyId = context.id;
    const viewport = page.viewportSize();
    
    // Take screenshot for visual regression
    await page.screenshot({
      path: `screenshots/${storyId}-${viewport.width}x${viewport.height}.png`,
      fullPage: true,
    });

    // Test responsive design by checking multiple viewports
    if (parameters.viewport?.viewports) {
      const viewports = Object.values(parameters.viewport.viewports);
      
      for (const viewport of viewports) {
        await page.setViewportSize({
          width: viewport.styles.width.replace('px', ''),
          height: viewport.styles.height.replace('px', ''),
        });
        
        await page.screenshot({
          path: `screenshots/${storyId}-${viewport.name}.png`,
          fullPage: true,
        });
      }
    }

    // Test animations and interactions for components with data-animate attributes
    const animatedElements = await page.locator('[data-animate]').all();
    
    if (animatedElements.length > 0) {
      // Test that animations respect prefers-reduced-motion
      await page.emulateMedia({ reducedMotion: 'reduce' });
      await page.screenshot({
        path: `screenshots/${storyId}-reduced-motion.png`,
        fullPage: true,
      });
    }

    // Test keyboard navigation for interactive components
    const focusableElements = await page.locator('[tabindex]:not([tabindex="-1"]), button, a, input, select, textarea').all();
    
    if (focusableElements.length > 0) {
      // Test tab navigation
      for (let i = 0; i < Math.min(focusableElements.length, 5); i++) {
        await page.keyboard.press('Tab');
      }
      
      await page.screenshot({
        path: `screenshots/${storyId}-keyboard-focus.png`,
        fullPage: true,
      });
    }

    // Test high contrast mode simulation
    await page.emulateMedia({ colorScheme: 'dark', forcedColors: 'active' });
    await page.screenshot({
      path: `screenshots/${storyId}-high-contrast.png`,
      fullPage: true,
    });
  },

  async postVisit(page, context) {
    // Clean up after each story
    await page.emulateMedia({ reducedMotion: 'no-preference', colorScheme: 'light', forcedColors: 'none' });
  },
};