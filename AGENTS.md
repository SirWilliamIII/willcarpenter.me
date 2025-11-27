# Repository Guidelines

## Project Structure & Module Organization
All production files live in `public/`, which is the directory deployed as-is. `public/index.html` is the single entry point that wires Bootstrap (`public/bootstrap-5`) and Font Awesome (`public/fontawesome-6`). Modular CSS is grouped by feature in `public/css/` (for example, `header.css`, `projects.css`, `theme.css`) and JavaScript enhancements sit in `public/js/` (`theme-toggle.js`, `scrollProgressBar.js`, etc.). Place raster and SVG assets in `public/images/`; heavy originals can be parked in `fold/` before being optimized. Keep third-party bundles in their current vendor folders to avoid inflating diffs.

## Build, Test, and Development Commands
- `npx http-server public --port 4173`: quick local preview of the static site; mirrors the production folder structure.  
- `npx prettier --check "public/**/*.{html,css,js}"`: enforces the two-space indentation and multi-line attribute style already used in `public/index.html`.  
- `npx htmlhint "public/**/*.html"`: catches malformed markup before shipping; align rule tweaks via a `.htmlhintrc` if needed.  
- `npx lighthouse http://localhost:4173 --view`: optional performance/accessibility report; attach notable regressions to your PR.

## Coding Style & Naming Conventions
Author semantic HTML with two-space indentation and lowercase attributes to match the existing markup. Keep CSS selectors hyphenated (`.primary-font`, `.scroll-progress`) and scope rules by section to avoid bleeding styles; shared tokens belong in `styles.css` or `theme.css`, while page-specific rules stay near their feature files. JavaScript modules in `public/js/` should expose a single `init` routine, rely on `data-*` hooks instead of class name queries when possible, and use const/let with arrow functions for consistency.

## Testing Guidelines
Before opening a PR, run Prettier and HTMLHint plus a manual tour of critical flows: navigation collapse, theme toggle (`public/js/theme-toggle.js`), scroll progress, and the contact CTA. Verify responsive breakpoints at 320px, 768px, and 1280px because several layout helpers live in `public/css/index.css`. When editing assets referenced in `scripts-combined.js` or `styles-combined.css`, double-check that the combined files remain in sync if you regenerate them.

## Commit & Pull Request Guidelines
Follow the short, imperative commit style already in history (`changed vector image`, `cleaned up writing`). Limit commits to one concern and describe visual changes with a brief note or screenshot in the PR body. Every PR should include: purpose summary, testing evidence (commands above), and any Netlify/preview URL if applicable. Reference related issues with “Closes #ID” so automation can pick it up.
