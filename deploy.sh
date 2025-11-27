#!/bin/bash
# Deployment Script for Cloudflare Pages
# Optimizes and deploys willcarpenter.me

set -e

echo "🚀 Starting deployment process..."
echo ""

# Step 1: Optimize images (optional, can be skipped with --skip-optimize)
if [[ "$1" != "--skip-optimize" ]]; then
    echo "Step 1: Optimizing images..."
    if command -v magick &> /dev/null || command -v convert &> /dev/null; then
        ./optimize-images.sh
    else
        echo "⚠️  ImageMagick not installed. Skipping image optimization."
        echo "   Install with: brew install imagemagick"
    fi
    echo ""
else
    echo "⏭️  Skipping image optimization (--skip-optimize flag set)"
    echo ""
fi

# Step 2: Check git status
echo "Step 2: Checking git status..."
if [[ -n $(git status -s) ]]; then
    echo "📝 Uncommitted changes detected:"
    git status -s
    echo ""
    read -p "Commit these changes? (y/N) " -n 1 -r
    echo
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        echo "Enter commit message:"
        read commit_message
        git add .
        git commit -m "$commit_message"
    else
        echo "⚠️  Warning: Deploying with uncommitted local changes"
    fi
else
    echo "✓ Working tree clean"
fi
echo ""

# Step 3: Push to GitHub
echo "Step 3: Pushing to GitHub..."
current_branch=$(git branch --show-current)
echo "Pushing branch: $current_branch"
git push origin "$current_branch"
echo "✓ Pushed to GitHub"
echo ""

# Step 4: Wait for Cloudflare Pages deployment
echo "Step 4: Cloudflare Pages deployment"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "🌐 Your site will deploy automatically via Cloudflare Pages"
echo ""
echo "📍 Check deployment status:"
echo "   https://dash.cloudflare.com/pages"
echo ""
echo "🔗 Production URL:"
echo "   https://willcarpenter.me"
echo ""
echo "💡 Tips:"
echo "   • CF Pages typically deploys in 1-2 minutes"
echo "   • Check the dashboard for build logs if issues occur"
echo "   • Hard refresh (Ctrl+Shift+R) to bypass browser cache"
echo ""
echo "✅ Deployment initiated successfully!"
