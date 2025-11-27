# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static personal portfolio website for Will Carpenter, showcasing professional experience, technical projects, and skills. The site is built with vanilla HTML, CSS, and JavaScript with no build process required.

**Live Site**: https://willcarpenter.me

## Local Development

Start the local development server using the provided script:

```bash
# Using the start script (recommended)
./start.sh

# Or manually
cd public && npx http-server . -p 8000

# Alternatives (if http-server not available)
python3 -m http.server 8000 --directory public
php -S localhost:8000 -t public
```

Then navigate to `http://localhost:8000`

## Architecture

### Static Site Structure

This is a pure static site with no build tools, bundlers, or package managers. All files in `/public` are served directly.

```
/public
├── index.html           # Main entry point (single-page site)
├── 404.html             # Error page
├── css/                 # Modular CSS files
│   ├── styles.css       # Root CSS variables and base styles
│   ├── theme.css        # Dark/light theme definitions
│   ├── header.css       # Navigation bar styles
│   ├── footer.css       # Footer styles
│   ├── index.css        # Homepage-specific styles
│   └── projects.css     # Project cards styles
├── js/                  # Vanilla JavaScript modules
│   ├── set-theme.js     # Theme initialization (runs first)
│   ├── pref-theme.js    # Theme preference management
│   ├── theme-toggle.js  # Theme switching logic
│   └── scroll-pos.js    # Scroll position tracking
├── images/              # Static assets
├── bootstrap-5/         # Bootstrap 5 framework files
└── fontawesome-6/       # Font Awesome icon library
```

### Theme System Architecture

The theme system is the most complex part of the architecture. Understanding the load order is critical:

1. **Initialization** (`set-theme.js`): Runs in `<head>` to prevent flash of unstyled content
   - Sets dark mode as default if no preference exists
   - Must run before page render

2. **Application** (`pref-theme.js`): Runs inline in `<head>` after set-theme.js
   - Reads localStorage value
   - Applies appropriate class to `<body>` element (`light` or `dark`)
   - Defaults to dark mode

3. **Toggle Logic** (`theme-toggle.js`): Runs after DOM load
   - Handles button clicks to switch themes
   - Persists choice to localStorage
   - Also initializes Bootstrap tooltips

**CSS Implementation**:
- Base variables defined in `styles.css:1-16` (light mode defaults)
- Dark mode variables defined with `-dark` suffix in same location
- `theme.css:12-22` contains `.dark` class selector that overrides CSS variables
- Theme switcher button shows moon icon in light mode, sun icon in dark mode

**Key Pattern**: The theme system uses CSS variable reassignment rather than separate stylesheets:
```css
/* styles.css - Define both sets */
:root {
  --text-color: #1a1a1a;           /* Light mode */
  --text-color-dark: #e4e6eb;      /* Dark mode */
}

/* theme.css - Dark mode overrides */
body.dark {
  --text-color: var(--text-color-dark);
}
```

### Third-Party Dependencies

- **Bootstrap 5**: Grid system, responsive utilities, card components
- **Font Awesome 6**: Icon library loaded via local copy (not CDN)
- **Google Fonts**: Alata, Lora, and Roboto font families
- **Google Tag Manager**: Analytics tracking (GTM-MM4NF82W)

## CSS Architecture

All CSS uses a consistent variable system. When adding styles:

1. **Use CSS variables** for all colors: `var(--text-color)`, `var(--background-color)`, etc.
2. **Never hardcode colors** - this breaks theme switching
3. **Define both light and dark variants** in `styles.css:1-16` if adding new colors
4. **Override in theme.css** if the dark mode version needs special handling
5. **Component-specific styles** go in separate CSS files (e.g., `header.css`, `footer.css`)
6. **Mobile-first responsive design** using Bootstrap breakpoints: xs (<576px), sm (576px), md (768px), lg (992px), xl (1200px)

## JavaScript Patterns

- All scripts use **vanilla JavaScript** (no frameworks)
- DOM manipulation waits for DOMContentLoaded or uses `defer` attribute
- localStorage is used for client-side persistence (key: `pref-theme`)
- Scripts are loaded at the end of `<body>` or with `defer` attribute
- Exception: Theme scripts run in `<head>` to prevent flash of unstyled content

## Content Structure

The single-page site contains these sections in order:

1. **Hero Section** (`index.html:198`) - Introduction with headline stack, headshot, and CTA buttons
2. **About Section** (after hero) - Professional background and philosophy
3. **Experience Section** - Timeline of roles at companies (Quantum Metric, Cloudsnap, Right Call Consulting)
4. **Projects Section** (`index.html:430`) - Showcase of technical projects with live demos (Vector Similarity Explorer, F1 Race Analysis)

## Common Tasks

### Updating Content

All content is in `index.html`. Sections are clearly marked with semantic `<section>` tags and IDs (e.g., `#hero`, `#about`, `#experience`).

### Adding a New Project

Projects are displayed as cards in the "Projects" section:

1. Locate the projects section starting at `index.html:430`
2. Copy an existing `.lab-card` structure (e.g., `index.html:432-464`)
3. Update:
   - Image path in `.lab-card-image`
   - Title in `.lab-card-title`
   - Tagline in `.lab-card-tagline`
   - Description in `.lab-card-description`
   - Tech badges in `.lab-card-badges`
   - Live demo link in `.lab-card-cta`
4. Add project image to `/public/images/` directory

### Modifying Theme Colors

1. Update CSS variables in `styles.css:1-16`
2. Light mode uses base variables (e.g., `--text-color`)
3. Dark mode uses `-dark` suffix variants (e.g., `--text-color-dark`)
4. If needed, add overrides in `theme.css` within the `body.dark` selector
5. Changes propagate automatically through the entire site

### Testing Theme Switching

To test theme switching:
1. Open browser DevTools → Application → Local Storage
2. Verify `pref-theme` key switches between `light` and `dark`
3. Ensure no FOUC (flash of unstyled content) on page load
4. Test that all colors respond to theme changes (no hardcoded values)

## Git Workflow

This repository uses a simple main branch workflow:
- Main branch: `main`
- Commits should be descriptive (see recent: "changed vector image", "cleaned up writing")
- No formal branching strategy - work directly on main or use feature branches as needed

## Known Issues & TODOs

Reference `REDESIGN_PLAN.md` for planned visual improvements and modernization efforts. This includes:
- Hero section enhancements
- Typography upgrades
- Card component redesigns
- Animation improvements
