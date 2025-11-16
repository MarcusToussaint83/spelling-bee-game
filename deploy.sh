#!/bin/bash

echo "🚀 Spelling Bee Game Deployment Script"
echo "======================================"

# Check if git remote exists
if ! git remote get-url origin &>/dev/null; then
    echo "❌ No GitHub remote found. Please set up your GitHub repository first:"
    echo "   1. Go to GitHub.com and create a new repository"
    echo "   2. Run: git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git"
    echo "   3. Run: git push -u origin main"
    exit 1
fi

# Commit any changes
echo "📝 Committing any changes..."
git add .
git commit -m "Deployment update - $(date)"

# Push to GitHub
echo "📤 Pushing to GitHub..."
git push origin main

echo ""
echo "✅ Deployment complete!"
echo ""
echo "🌐 Next steps:"
echo "   1. Go to your GitHub repository"
echo "   2. Click Settings → Pages"
echo "   3. Source: Deploy from a branch"
echo "   4. Branch: main / (root)"
echo "   5. Save and wait 2-5 minutes"
echo ""
echo "🎮 Your game will be live at: https://YOUR_USERNAME.github.io/REPO_NAME"
echo ""
echo "🏆 Ready for competitive spelling practice!"
