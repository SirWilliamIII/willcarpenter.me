#!/bin/bash
# Deployment Script for willcarpenter.me
# Pushes to GitHub, then pulls on Oracle VPS via SSH

set -e

VPS_HOST="oracle"
REPO_DIR="/var/www/willcarpenter.me"

echo "Starting deployment..."
echo ""

# Step 1: Optimize images (optional, can be skipped with --skip-optimize)
if [[ "$1" != "--skip-optimize" ]]; then
    echo "Step 1: Optimizing images..."
    if command -v magick &> /dev/null || command -v convert &> /dev/null; then
        ./optimize-images.sh
    else
        echo "ImageMagick not installed. Skipping image optimization."
    fi
    echo ""
else
    echo "Skipping image optimization (--skip-optimize flag set)"
    echo ""
fi

# Step 2: Check git status
echo "Step 2: Checking git status..."
if [[ -n $(git status -s) ]]; then
    echo "Uncommitted changes detected:"
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
        echo "Warning: Deploying with uncommitted local changes"
    fi
else
    echo "Working tree clean"
fi
echo ""

# Step 3: Push to GitHub
echo "Step 3: Pushing to GitHub..."
current_branch=$(git branch --show-current)
echo "Pushing branch: $current_branch"
git push origin "$current_branch"
echo "Pushed to GitHub"
echo ""

# Step 4: Pull on VPS
echo "Step 4: Deploying to VPS..."
ssh "$VPS_HOST" "cd $REPO_DIR && git pull origin $current_branch"
echo "Deployed to VPS"
echo ""

echo "Done! Site live at https://willcarpenter.me"
