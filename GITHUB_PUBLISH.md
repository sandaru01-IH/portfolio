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
git remote add origin https://github.com/YOUR_USERNAME/alphagrid-website.git

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

## After Publishing
- Your partner can view the code at: `https://github.com/YOUR_USERNAME/alphagrid-website`
- To deploy the site, consider using Vercel (recommended for Next.js):
  1. Go to https://vercel.com
  2. Import your GitHub repository
  3. Deploy automatically!

