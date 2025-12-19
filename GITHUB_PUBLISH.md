# Publishing to GitHub - Quick Guide

## Step 1: Create GitHub Repository
1. Go to https://github.com/new
2. Repository name: `alphagrid-website` (or your choice)
3. Description: "AlphaGrid Portfolio Website"
4. Choose Public or Private
5. **DO NOT** check "Add a README file" (we already have one)
6. Click "Create repository"

## Step 2: Connect and Push

After creating the repository, run these commands (replace `YOUR_USERNAME` with your GitHub username):

```powershell
# Navigate to project directory
cd "E:\Work\Business\AlphaGrid\WEBSITE ALPHAGRID"

# Add GitHub remote (replace YOUR_USERNAME and REPO_NAME)
git remote add origin https://github.com/sandaru01-IH/portfolio.git

# Rename branch to main (if needed)
git branch -M main

# Push to GitHub
git push -u origin main
```

## Alternative: Using SSH (if you have SSH keys set up)
```powershell
git remote add origin git@github.com:YOUR_USERNAME/alphagrid-website.git
git branch -M main
git push -u origin main
```

## Step 3: Enable GitHub Pages (IMPORTANT!)

Your site has been deployed! Now enable GitHub Pages:

1. Go to your repository: https://github.com/sandaru01-IH/portfolio
2. Click on **Settings** (top menu)
3. Scroll down to **Pages** (left sidebar)
4. Under **Source**, select:
   - **Branch**: `gh-pages`
   - **Folder**: `/ (root)`
5. Click **Save**
6. Wait 1-2 minutes for GitHub to process

## ✅ Your Live Site URL

Once enabled, your site will be available at:

**https://sandaru01-IH.github.io/portfolio/**

This is the link you can share with your partner! 🎉

## Future Updates

To update your live site after making changes:

```powershell
npm run build
npm run deploy
git push
```

Then wait 1-2 minutes for GitHub Pages to update.

