# Puppeteer MCP Configuration

## Visual Regression Testing Setup

### Purpose
Compare Storybook components against the source PDF design (`Website_WM27 1.pdf`) to ensure pixel-perfect implementation.

### Implementation Strategy

#### 1. PDF Section Extraction
- Extract specific design sections from PDF as reference images
- Name conventions: `pdf-{section-name}.png` (e.g., `pdf-hero-section.png`)
- Store in `tests/visual-references/`

#### 2. Component Screenshots
- Capture Storybook component renderings
- Use consistent viewport sizes matching PDF layout
- Generate at multiple breakpoints (desktop, tablet, mobile)

#### 3. Comparison Process
```javascript
// Example Puppeteer MCP usage
await page.goto('http://localhost:6006/story/hero-section');
await page.screenshot({ path: 'tests/screenshots/hero-component.png' });
// Compare with tests/visual-references/pdf-hero-section.png
```

### Test Configuration

#### Viewport Sizes
- Desktop: 1920x1080 (primary PDF reference)
- Tablet: 768x1024
- Mobile: 375x667

#### Comparison Thresholds
- Pixel difference threshold: 5% (adjustable)
- Color variance tolerance: 10 RGB units
- Layout shift detection enabled

### Automation Scripts

#### Essential Commands
- `npm run test:visual` - Run full visual regression suite
- `npm run test:visual:update` - Update reference images
- `npm run test:visual:component` - Test specific component

#### CI/CD Integration
- Auto-run on pull requests
- Generate difference reports
- Block merges on significant visual regressions

### Puppeteer MCP Specific Features

#### PDF Comparison
- Direct PDF page comparison capabilities
- Text extraction and layout analysis
- Color palette matching validation

#### Interactive Element Testing
- Alpine.js behavior validation
- Animation and transition testing
- Responsive breakpoint verification

### File Organization
```
tests/
├── visual-references/     # PDF-extracted reference images
├── screenshots/          # Current component screenshots  
├── diffs/               # Visual difference reports
└── puppeteer-config.js  # Test configuration
```