# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This project converts the design from the DHB Handball World Championship 2027 PDF (`Website_WM27 1.pdf`) into a Storybook component library using atomic design principles. The tech stack consists of:

- **Storybook** - Component development environment
- **Tailwind CSS 4** - Utility-first CSS framework 
- **Alpine.js** - Lightweight reactive framework for interactivity
- **TWIG** - Template engine for component markup
- **Puppeteer MCP** - Visual regression testing against PDF designs

## Key Architecture Decisions

### Atomic Design Structure
Components are organized following atomic design methodology:
- **Atoms**: Basic UI elements (buttons, inputs, logos)
- **Molecules**: Component combinations (navigation items, card headers) 
- **Organisms**: Complex UI sections (headers, hero sections, venue cards)
- **Templates**: Page-level layout structures
- **Pages**: Complete page implementations

### Technology Integration
- TWIG templates provide the markup structure
- Alpine.js handles interactive behaviors (dropdowns, modals, animations)
- Tailwind 4 provides utility classes for styling
- Storybook serves as both development environment and documentation

## Essential Commands

### Development
```bash
npm run storybook        # Start Storybook development server
npm run build-storybook  # Build static Storybook for deployment
```

### Design Validation
```bash
npm run puppeteer:compare  # Compare current components with PDF designs
npm run puppeteer:screenshot  # Generate screenshots for visual testing
```

### Build & Deploy
```bash
npm run build     # Build production assets
npm run dev       # Development server with hot reload
```

## PDF Design Reference

The source design is in `Website_WM27 1.pdf` which contains:
- Homepage with hero section featuring handball players
- Ticket purchase flow
- Match schedule layout
- News section with article cards
- Venues section with German city showcases
- Partners/sponsors footer layout

Key design elements include:
- Dark blue primary background (#1a1a2e approximate)
- Bright accent colors (red #ff4757, yellow #feca57)
- Bold typography with strong contrast
- Geometric overlays and angular design elements
- Sports photography integration

## Visual Testing Strategy

Use Puppeteer MCP to maintain design fidelity:
1. Capture component screenshots in Storybook
2. Compare against extracted PDF sections
3. Flag visual deviations for manual review
4. Maintain pixel-perfect accuracy for key brand elements

## Component Development Workflow

1. Extract design section from PDF
2. Create atomic components (atoms → molecules → organisms)
3. Implement TWIG template with Alpine.js interactivity
4. Style with Tailwind utilities
5. Test in Storybook
6. Validate against PDF using Puppeteer
7. Document in Storybook stories