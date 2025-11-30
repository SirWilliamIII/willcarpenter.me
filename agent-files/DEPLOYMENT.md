# Deployment Guide

## Overview

This site is deployed to **Cloudflare Pages** with automatic deployments from GitHub.

- **Production URL**: https://willcarpenter.me
- **Repository**: https://github.com/SirWilliamIII/willcarpenter.me
- **Platform**: Cloudflare Pages
- **Build Directory**: `public/`

## Quick Deploy

```bash
# Option 1: Use the deploy script (recommended)
./deploy.sh

# Option 2: Skip image optimization
./deploy.sh --skip-optimize

# Option 3: Manual deployment
git add .
git commit -m "your message"
git push origin main
```

## Deployment Configuration

### Cloudflare Pages Settings

**Build Configuration:**
- Framework preset: None (static site)
- Build command: (leave empty)
- Build output directory: `public`
- Root directory: `/`

**Environment Variables:**
None required for this static site

### Build Files

- **wrangler.toml**: Cloudflare Workers/Pages configuration
- **.cfpages.yml**: CF Pages build settings
- **public/_headers**: HTTP security and caching headers
- **public/_redirects**: URL redirects and shortlinks

## Optimization

### Image Optimization

Before committing large images, run:

```bash
./optimize-images.sh
```

This will:
- Compress PNG and JPG files
- Strip metadata
- Reduce file sizes by 30-70%
- Preserve originals if optimization doesn't help

**Requirements:**
```bash
brew install imagemagick
```

### Current Image Sizes

Large images that should be optimized:
- `public/images/locker.png` - 4.8MB (should be <500KB)
- `public/images/kela.png` - 1.7MB (should be <300KB)
- `public/images/about.png` - 1MB (should be <200KB)
- `public/images/f1-odds.png` - 850KB (should be <150KB)

## Caching Strategy

Configured in `public/_headers`:

| Asset Type | Cache Duration | Notes |
|------------|----------------|-------|
| Bootstrap/FontAwesome | 1 year (immutable) | Versioned dependencies |
| CSS/JS | 1 day | Site-specific styles/scripts |
| Images | 1 week | Project screenshots |
| PDFs | 1 hour | Resume, documents |
| HTML | No cache | Dynamic content |

## Security Headers

All pages include:
- **HSTS**: Force HTTPS with preload
- **X-Frame-Options**: Prevent clickjacking
- **CSP**: Content Security Policy
- **X-Content-Type-Options**: Prevent MIME sniffing
- **Referrer-Policy**: Control referrer information

## Useful Shortlinks

Configured in `public/_redirects`:

- `willcarpenter.me/github` → GitHub profile
- `willcarpenter.me/linkedin` → LinkedIn profile
- `willcarpenter.me/about` → About section
- `willcarpenter.me/projects` → Projects section
- `willcarpenter.me/labs` → Labs section

## Deployment Workflow

### Standard Deployment

1. Make changes locally
2. Test with `./start.sh`
3. Run `./deploy.sh`
4. Script will:
   - Optimize images
   - Commit changes (if needed)
   - Push to GitHub
   - Trigger CF Pages deployment

### Emergency Rollback

If a deployment breaks production:

```bash
# Find the last working commit
git log --oneline -10

# Revert to that commit
git revert <commit-hash>
git push origin main

# Or hard reset (destructive)
git reset --hard <commit-hash>
git push origin main --force
```

### Manual CF Pages Deployment

1. Go to https://dash.cloudflare.com/pages
2. Select your project
3. Click "Create deployment"
4. Select branch to deploy
5. Click "Deploy"

## Performance Optimization

### Current Optimizations

✅ Minified CSS and JS via CF Pages
✅ HTTP/2 and HTTP/3 enabled
✅ Brotli compression automatic
✅ Edge caching via Cloudflare CDN
✅ Security headers configured

### Recommended Optimizations

🔲 Run `./optimize-images.sh` to compress existing images
🔲 Convert large PNGs to WebP format for 50%+ savings
🔲 Add `loading="lazy"` to below-fold images
🔲 Preload critical fonts in `<head>`

## Monitoring

### Check Deployment Status

```bash
# View recent deployments
# Go to: https://dash.cloudflare.com/pages

# Check site health
curl -I https://willcarpenter.me

# Test cache headers
curl -I https://willcarpenter.me/css/styles.css
```

### Common Issues

**Issue: Changes not appearing on production**

```bash
# 1. Verify commit was pushed
git log origin/main -1

# 2. Check CF Pages dashboard for deployment status
# 3. Hard refresh browser (Ctrl+Shift+R)
# 4. Purge CF cache if needed
```

**Issue: Build failing on CF Pages**

- Check build logs in CF Pages dashboard
- Ensure `public/` directory exists
- Verify no build command is set (static site)

**Issue: 404 errors**

- Check `public/_redirects` file
- Ensure `404.html` exists in `public/`
- Verify file paths are correct (case-sensitive)

## Analytics

Google Tag Manager is configured (GTM-MM4NF82W):
- Pageviews tracked automatically
- Custom events can be added via GTM dashboard
- Analytics data in Google Analytics account

## Troubleshooting

### Clear Cloudflare Cache

1. Go to CF Pages dashboard
2. Select deployment
3. Click "Manage deployment"
4. Click "Purge cache"

### Test Locally

```bash
./start.sh
# Then visit http://localhost:8000
```

### Validate Configuration Files

```bash
# Check _headers syntax
cat public/_headers

# Check _redirects syntax
cat public/_redirects

# Verify CF Pages config
cat wrangler.toml
cat .cfpages.yml
```

## References

- [Cloudflare Pages Docs](https://developers.cloudflare.com/pages/)
- [HTTP Headers Reference](https://developers.cloudflare.com/pages/configuration/headers/)
- [Redirects Reference](https://developers.cloudflare.com/pages/configuration/redirects/)
