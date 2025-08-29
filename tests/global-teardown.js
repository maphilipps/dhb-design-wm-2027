/**
 * Global teardown for Playwright tests
 * Clean up after all tests are complete
 */

async function globalTeardown() {
  console.log('🧹 Running global teardown for DHB Handball WM 2027 visual tests...');

  // Clean up any temporary files if needed
  // For now, we keep screenshots and results for inspection

  console.log('✅ Global teardown complete!');
}

module.exports = globalTeardown;