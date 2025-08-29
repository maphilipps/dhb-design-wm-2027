/**
 * Global setup for Playwright tests
 * Ensures Storybook is running and ready before tests begin
 */

const { chromium } = require('@playwright/test');

async function globalSetup() {
  console.log('🚀 Starting global setup for DHB Handball WM 2027 visual tests...');

  // Launch browser for setup
  const browser = await chromium.launch();
  const page = await browser.newPage();

  try {
    // Wait for Storybook to be available
    console.log('⏳ Waiting for Storybook to be available...');
    
    await page.goto('http://localhost:6006', { 
      waitUntil: 'networkidle',
      timeout: 60000 
    });

    // Wait for Storybook to fully load
    await page.waitForSelector('[data-testid="storybook-root"]', { 
      timeout: 30000 
    });

    console.log('✅ Storybook is ready for testing!');

    // Create screenshots directory if it doesn't exist
    const fs = require('fs');
    if (!fs.existsSync('screenshots')) {
      fs.mkdirSync('screenshots', { recursive: true });
      console.log('📁 Created screenshots directory');
    }

    // Create test results directory
    if (!fs.existsSync('test-results')) {
      fs.mkdirSync('test-results', { recursive: true });
      console.log('📁 Created test-results directory');
    }

    console.log('🎯 Global setup complete - ready for visual regression testing!');

  } catch (error) {
    console.error('❌ Global setup failed:', error);
    throw error;
  } finally {
    await browser.close();
  }
}

module.exports = globalSetup;