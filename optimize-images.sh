#!/bin/bash
# Image Optimization Script for Cloudflare Pages Deployment
# This script optimizes images before deployment to reduce load times

set -e

echo "🖼️  Starting image optimization..."

# Check if ImageMagick is installed (for PNG/JPG optimization)
if ! command -v magick &> /dev/null && ! command -v convert &> /dev/null; then
    echo "⚠️  ImageMagick not found. Install with: brew install imagemagick"
    echo "Skipping image optimization..."
    exit 0
fi

# Optimize PNG files
echo "Optimizing PNG files..."
find public/images -type f -name "*.png" | while read file; do
    echo "  Optimizing: $file"
    # Create backup
    cp "$file" "$file.bak"
    # Optimize (reduce quality to 85%, strip metadata)
    magick "$file" -quality 85 -strip "$file" 2>/dev/null || convert "$file" -quality 85 -strip "$file"

    # Check if optimized version is smaller
    original_size=$(stat -f%z "$file.bak" 2>/dev/null || stat -c%s "$file.bak")
    new_size=$(stat -f%z "$file" 2>/dev/null || stat -c%s "$file")

    if [ $new_size -lt $original_size ]; then
        saved=$((original_size - new_size))
        echo "    ✓ Saved $(numfmt --to=iec-i --suffix=B $saved 2>/dev/null || echo $saved bytes)"
        rm "$file.bak"
    else
        echo "    → No improvement, keeping original"
        mv "$file.bak" "$file"
    fi
done

# Optimize JPG files
echo "Optimizing JPG files..."
find public/images -type f \( -name "*.jpg" -o -name "*.jpeg" \) | while read file; do
    echo "  Optimizing: $file"
    cp "$file" "$file.bak"
    magick "$file" -quality 85 -strip "$file" 2>/dev/null || convert "$file" -quality 85 -strip "$file"

    original_size=$(stat -f%z "$file.bak" 2>/dev/null || stat -c%s "$file.bak")
    new_size=$(stat -f%z "$file" 2>/dev/null || stat -c%s "$file")

    if [ $new_size -lt $original_size ]; then
        saved=$((original_size - new_size))
        echo "    ✓ Saved $(numfmt --to=iec-i --suffix=B $saved 2>/dev/null || echo $saved bytes)"
        rm "$file.bak"
    else
        echo "    → No improvement, keeping original"
        mv "$file.bak" "$file"
    fi
done

echo "✅ Image optimization complete!"
echo ""
echo "📊 Current public/ directory size:"
du -sh public/
