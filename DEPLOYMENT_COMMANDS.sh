#!/bin/bash

# ============================================
# NRI PROPERTY EXPO - VERCEL DEPLOYMENT SCRIPT
# ============================================

echo "🚀 Starting deployment process..."
echo ""

# ============================================
# STEP 1: INITIALIZE GIT (if not already done)
# ============================================

if [ ! -d .git ]; then
    echo "📦 Initializing Git repository..."
    git init
    echo "✅ Git initialized!"
else
    echo "✅ Git already initialized!"
fi

# ============================================
# STEP 2: COMMIT ALL CHANGES
# ============================================

echo ""
echo "📝 Committing changes..."
git add .
git commit -m "Deploy NRI Property Expo to Vercel"
echo "✅ Changes committed!"

# ============================================
# STEP 3: PUSH TO GITHUB
# ============================================

echo ""
echo "⚠️  IMPORTANT: You need to create a GitHub repository first!"
echo ""
echo "1. Go to: https://github.com/new"
echo "2. Repository name: nri-property-expo-singapore"
echo "3. Keep it Private or Public"
echo "4. Click 'Create repository'"
echo ""
read -p "Press Enter when you've created the GitHub repository..."

echo ""
read -p "Enter your GitHub username: " GITHUB_USERNAME
read -p "Enter your repository name (e.g., nri-property-expo-singapore): " REPO_NAME

echo ""
echo "🔗 Adding GitHub remote..."
git remote add origin https://github.com/$GITHUB_USERNAME/$REPO_NAME.git 2>/dev/null || git remote set-url origin https://github.com/$GITHUB_USERNAME/$REPO_NAME.git

echo ""
echo "⬆️  Pushing to GitHub..."
git branch -M main
git push -u origin main

if [ $? -eq 0 ]; then
    echo "✅ Successfully pushed to GitHub!"
else
    echo "❌ Failed to push to GitHub. Please check your credentials."
    exit 1
fi

# ============================================
# STEP 4: DEPLOY TO VERCEL
# ============================================

echo ""
echo "🚀 Now deploying to Vercel..."
echo ""

# Check if Vercel CLI is installed
if ! command -v vercel &> /dev/null; then
    echo "📦 Vercel CLI not found. Installing..."
    npm install -g vercel
    echo "✅ Vercel CLI installed!"
else
    echo "✅ Vercel CLI already installed!"
fi

echo ""
echo "🔐 Please login to Vercel..."
vercel login

echo ""
echo "🚀 Deploying to production..."
vercel --prod

if [ $? -eq 0 ]; then
    echo ""
    echo "╔═══════════════════════════════════════════════╗"
    echo "║                                               ║"
    echo "║     🎉 DEPLOYMENT SUCCESSFUL! 🎉             ║"
    echo "║                                               ║"
    echo "║   Your website is now LIVE on Vercel!        ║"
    echo "║                                               ║"
    echo "║   Check the URL above ↑                      ║"
    echo "║                                               ║"
    echo "╚═══════════════════════════════════════════════╝"
    echo ""
    echo "📝 Next steps:"
    echo "1. Open the Vercel URL in your browser"
    echo "2. Test the registration form"
    echo "3. Check the admin dashboard at: [URL]/#admin"
    echo "4. Share your live website!"
    echo ""
else
    echo "❌ Deployment failed. Please check the error messages above."
    exit 1
fi

# ============================================
# STEP 5: OPEN VERCEL DASHBOARD
# ============================================

echo ""
read -p "Would you like to open the Vercel dashboard? (y/n): " OPEN_DASHBOARD

if [ "$OPEN_DASHBOARD" = "y" ] || [ "$OPEN_DASHBOARD" = "Y" ]; then
    echo "🌐 Opening Vercel dashboard..."
    if [[ "$OSTYPE" == "darwin"* ]]; then
        # macOS
        open https://vercel.com/dashboard
    elif [[ "$OSTYPE" == "linux-gnu"* ]]; then
        # Linux
        xdg-open https://vercel.com/dashboard
    elif [[ "$OSTYPE" == "msys" || "$OSTYPE" == "cygwin" ]]; then
        # Windows
        start https://vercel.com/dashboard
    fi
fi

echo ""
echo "✅ Deployment script completed!"
echo "🎊 Happy deploying!"
