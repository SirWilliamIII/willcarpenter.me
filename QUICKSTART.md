# Quick Start Guide

## Local Development

```bash
# Start local server
./start.sh

# Visit
http://localhost:8000
```

## Deployment

```bash
# Deploy everything (optimizes images + pushes)
./deploy.sh

# Skip image optimization
./deploy.sh --skip-optimize
```

## Manual Deployment

```bash
git add .
git commit -m "your message"
git push origin main
```

Cloudflare Pages will automatically deploy in 1-2 minutes.

## Image Optimization

```bash
# Optimize all images before committing
./optimize-images.sh
```

**Requires:** `brew install imagemagick`

## Useful Links

- **Production:** https://willcarpenter.me
- **CF Pages Dashboard:** https://dash.cloudflare.com/pages
- **GitHub Repo:** https://github.com/SirWilliamIII/willcarpenter.me

## Shortlinks

After deployment, these work:
- `willcarpenter.me/github` → Your GitHub
- `willcarpenter.me/linkedin` → Your LinkedIn
- `willcarpenter.me/about` → About section
- `willcarpenter.me/projects` → Projects section

## Troubleshooting

**Changes not showing?**
1. Check CF Pages dashboard for deployment status
2. Hard refresh browser: `Ctrl+Shift+R` (or `Cmd+Shift+R` on Mac)
3. Wait 2-3 minutes for deployment

**Deployment failed?**
1. Check build logs in CF Pages dashboard
2. Verify `public/` directory exists
3. Run `./start.sh` locally to test

## File Structure

```
public/               # Everything here gets deployed
  ├── index.html      # Main page
  ├── 404.html        # Error page
  ├── css/            # Stylesheets
  ├── js/             # JavaScript
  ├── images/         # Images & assets
  ├── _headers        # HTTP headers config
  └── _redirects      # URL redirects

wrangler.toml         # CF Pages config
.cfpages.yml          # Build settings
deploy.sh             # Deployment script
optimize-images.sh    # Image compression
```

## Quick Edits

**Update content:** Edit `public/index.html`
**Change styles:** Edit files in `public/css/`
**Add redirects:** Edit `public/_redirects`
**Modify headers:** Edit `public/_headers`

Then run `./deploy.sh`
