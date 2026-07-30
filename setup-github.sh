#!/bin/bash

# Storm Surge GIS Dashboard - GitHub Setup Script
# This script helps you quickly set up and deploy to GitHub

echo "================================================"
echo "Storm Surge GIS Dashboard - GitHub Setup"
echo "================================================"
echo ""

# Check if git is installed
if ! command -v git &> /dev/null; then
    echo "❌ Git is not installed. Please install git first."
    echo "   Visit: https://git-scm.com/downloads"
    exit 1
fi

echo "✅ Git is installed"
echo ""

# Initialize git repository
if [ ! -d ".git" ]; then
    echo "📦 Initializing git repository..."
    git init
    echo "✅ Git repository initialized"
else
    echo "✅ Git repository already exists"
fi

echo ""

# Check if files are staged
if [ -z "$(git status --porcelain)" ]; then
    echo "✅ No changes to commit"
else
    echo "📝 Adding files to git..."
    git add .
    echo "✅ Files added"
    
    echo ""
    echo "💾 Creating initial commit..."
    git commit -m "Initial commit: Storm Surge GIS Dashboard

- Interactive Leaflet.js map with 23+ coastal locations
- Vulnerability Index calculator with multi-criteria assessment
- Storm surge inundation estimator
- Analytics dashboard with Chart.js visualizations
- GIS methodologies documentation
- Responsive design with Tailwind CSS
- Accessibility features (ARIA labels, keyboard navigation)
- Mobile-first responsive layout"
    echo "✅ Initial commit created"
fi

echo ""
echo "================================================"
echo "Next Steps:"
echo "================================================"
echo ""
echo "1. Create a new repository on GitHub:"
echo "   → Visit: https://github.com/new"
echo "   → Repository name: storm-surge-gis-dashboard"
echo "   → Description: Interactive GIS dashboard for coastal storm surge vulnerability assessment"
echo "   → Make it Public (required for free GitHub Pages)"
echo "   → Do NOT initialize with README, .gitignore, or license"
echo "   → Click 'Create repository'"
echo ""
echo "2. Link your local repository to GitHub:"
echo "   Run these commands (replace YOUR-USERNAME):"
echo ""
echo "   git remote add origin https://github.com/YOUR-USERNAME/storm-surge-gis-dashboard.git"
echo "   git branch -M main"
echo "   git push -u origin main"
echo ""
echo "3. Enable GitHub Pages:"
echo "   → Go to repository Settings → Pages"
echo "   → Source: Deploy from branch 'main'"
echo "   → Folder: / (root)"
echo "   → Click Save"
echo ""
echo "4. Access your dashboard:"
echo "   → URL: https://YOUR-USERNAME.github.io/storm-surge-gis-dashboard/"
echo "   → Wait 1-5 minutes for deployment"
echo ""
echo "================================================"
echo "Alternative: Quick Deploy to Netlify"
echo "================================================"
echo ""
echo "1. Visit: https://app.netlify.com/drop"
echo "2. Drag and drop this entire folder"
echo "3. Get instant deployment URL"
echo ""
echo "================================================"
echo "For detailed instructions, see DEPLOYMENT.md"
echo "================================================"
