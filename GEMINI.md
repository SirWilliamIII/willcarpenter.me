# GEMINI.md

This file provides guidance to Gemini when working with code in this repository.

## Project Overview

This is a static personal portfolio website for Will Carpenter, showcasing professional experience, technical projects, and skills. The site is built with vanilla HTML, CSS, and JavaScript, and uses Bootstrap 5 and Font Awesome 6. There is no build process required; all files in the `public/` directory are served directly.

**Live Site**: https://willcarpenter.me

## Local Development

Start the local development server using the provided script or other standard methods for serving static files.

```bash
# Using the start script (recommended)
./start.sh

# Or manually with npx http-server
npx http-server public -p 8000

# Alternative with Python
python3 -m http.server 8000 --directory public
```

Then navigate to `http://localhost:8000` in your browser.

### Quality Checks

The following commands can be used to check for code quality and performance:

```bash
# Check formatting with Prettier
npx prettier --check "public/**/*.{html,css,js}"

# Lint HTML files
npx htmlhint "public/**/*.html"

# Run Lighthouse for performance/accessibility report
npx lighthouse http://localhost:8000 --view
```

## Architecture

### Static Site Structure

The project is a pure static site. All production files are located in the `/public` directory.

-   `/public/index.html`: The main and only HTML file.
-   `/public/css/`: Contains modular CSS files.
    -   `styles.css`: Base styles and CSS variables.
    -   `theme.css`: Handles the light/dark theme switching.
    -   Other CSS files are scoped to specific sections of the page (e.g., `header.css`, `projects.css`).
-   `/public/js/`: Contains vanilla JavaScript modules for interactivity.
-   `/public/images/`: Static image assets.
-   `/public/bootstrap-5/` and `/public/fontawesome-6/`: Local copies of the respective frameworks.

### Theme System

The light/dark theme system is a key feature. It is implemented via CSS variables and JavaScript.

1.  **`set-theme.js` & `pref-theme.js`**: These scripts run in the `<head>` to apply the correct theme ('light' or 'dark') to the `<body>` element based on the user's `localStorage` preference, preventing a flash of unstyled content.
2.  **`theme-toggle.js`**: This script handles the theme toggle button, allowing the user to switch between themes and persisting the choice to `localStorage`.
3.  **CSS Variables**:
    -   Base styles and variables (for light mode) are defined in `:root` in `public/css/styles.css`.
    -   Dark mode variable overrides are defined in `public/css/theme.css` within a `body.dark` selector.

When adding or modifying styles, always use the CSS variables for colors to ensure consistency with the theme system.

### Content Structure

The website is a single page with the following sections:

1.  **Hero**: Introduction and primary call-to-action buttons.
2.  **About**: Professional background and approach.
3.  **Experience**: A timeline of work experience.
4.  **Projects**: A showcase of personal and professional projects.

All content is located directly in `public/index.html`.
