# Project Setup Instructions

## Initial Setup

This project transforms the DHB Handball WM 2027 PDF design into atomic design components using Storybook.

### Technology Stack
- **Storybook 8** - Component development environment
- **Tailwind CSS 4** - Utility-first CSS framework
- **Alpine.js 3** - Lightweight JavaScript framework
- **TWIG** - Template engine for component structure
- **Puppeteer MCP** - Visual regression testing

### Recommended Repository Structure
```
src/
├── atoms/           # Basic UI elements
├── molecules/       # Component combinations  
├── organisms/       # Complex sections
├── templates/       # Page layouts
└── pages/           # Full page implementations

stories/             # Storybook stories
assets/             # Images, fonts, etc.
docs/               # Documentation
tests/              # Visual regression tests
```

### Key Development Commands
- `npm run storybook` - Development server
- `npm run build-storybook` - Production build
- `npm run puppeteer:compare` - Visual comparison with PDF

### Visual Testing Integration
Use Puppeteer MCP to validate components against the PDF design sections for pixel-perfect accuracy.