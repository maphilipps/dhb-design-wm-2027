import { defineConfig, devices } from '@playwright/test';

/**
 * Playwright configuration for DHB Handball WM 2027 visual regression testing
 * 
 * This configuration sets up Playwright to work with Storybook for:
 * - Visual regression testing against PDF designs
 * - Cross-browser compatibility testing
 * - Responsive design validation
 * - Accessibility testing
 */

export default defineConfig({
  // Test directory
  testDir: './tests/visual',
  
  // Global test timeout
  timeout: 30000,
  
  // Expect timeout for assertions
  expect: {
    // Timeout for expect() calls
    timeout: 5000,
    
    // Threshold for image comparison (allows for minor rendering differences)
    threshold: 0.2,
    
    // Configure screenshot comparison
    toMatchSnapshot: {
      threshold: 0.2,
      mode: 'strict',
    },
  },

  // Fail the build on CI if you accidentally left test.only in the source code
  forbidOnly: !!process.env.CI,

  // Retry on CI only
  retries: process.env.CI ? 2 : 0,

  // Opt out of parallel tests on CI
  workers: process.env.CI ? 1 : undefined,

  // Reporter to use
  reporter: [
    ['html'],
    ['json', { outputFile: 'test-results/results.json' }],
    // GitHub Actions reporter
    process.env.CI ? ['github'] : ['list'],
  ],

  // Shared settings for all the projects below
  use: {
    // Base URL for Storybook
    baseURL: 'http://localhost:6006',

    // Collect trace when retrying the failed test
    trace: 'on-first-retry',

    // Take screenshot on failure
    screenshot: 'only-on-failure',

    // Record video on failure
    video: 'retain-on-failure',

    // Enable accessibility testing
    // Note: This will be handled by the test-runner for Storybook stories
  },

  // Configure projects for major browsers
  projects: [
    {
      name: 'chromium',
      use: { 
        ...devices['Desktop Chrome'],
        // Enable accessibility features
        launchOptions: {
          args: [
            '--disable-web-security',
            '--disable-features=VizDisplayCompositor',
            '--disable-gpu',
            '--no-sandbox',
          ],
        },
      },
    },

    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },

    // Test against mobile viewports
    {
      name: 'Mobile Chrome',
      use: { ...devices['Pixel 5'] },
    },
    
    {
      name: 'Mobile Safari',
      use: { ...devices['iPhone 12'] },
    },

    // Test against tablet viewports
    {
      name: 'iPad',
      use: { ...devices['iPad Pro'] },
    },
    
    // High-resolution desktop testing
    {
      name: 'Desktop High DPI',
      use: { 
        ...devices['Desktop Chrome HiDPI'],
        viewport: { width: 1920, height: 1080 },
      },
    },
  ],

  // Run your local dev server before starting the tests
  webServer: {
    command: 'npm run build-storybook && npm run http-server',
    port: 6006,
    reuseExistingServer: !process.env.CI,
    timeout: 120000,
  },

  // Output directory for test artifacts
  outputDir: 'test-results/',
  
  // Screenshot and video settings
  screenshots: 'only-on-failure',
  videos: 'retain-on-failure',
  
  // Global setup and teardown
  globalSetup: require.resolve('./tests/global-setup.js'),
  globalTeardown: require.resolve('./tests/global-teardown.js'),
});