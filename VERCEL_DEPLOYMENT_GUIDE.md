# 🚀 VERCEL DEPLOYMENT GUIDE - NRI Property Expo

## Complete step-by-step guide to deploy your website on Vercel

---

## **📋 PREREQUISITES**

Before deploying, make sure you have:

✅ **Git Repository** (GitHub, GitLab, or Bitbucket account)  
✅ **Vercel Account** (free tier works perfectly)  
✅ **Your project code** ready to push  
✅ **Supabase Edge Functions** already deployed (backend)

---

## **🎯 DEPLOYMENT OPTIONS**

### **Option 1: Deploy via Vercel Dashboard** (Recommended - Easiest)
### **Option 2: Deploy via Vercel CLI**
### **Option 3: Deploy via GitHub Integration** (Most Popular)

---

# **OPTION 1: VERCEL DASHBOARD (EASIEST)** ⭐

## **STEP 1: Push Code to Git Repository**

### **1.1 Initialize Git (if not already done)**
```bash
# In your project folder
git init
git add .
git commit -m "Initial commit - NRI Property Expo"
```

### **1.2 Create GitHub Repository**
1. Go to https://github.com/new
2. Repository name: `nri-property-expo-singapore`
3. Description: `NRI Property Expo 2026 - Singapore Edition`
4. Keep it **Private** or **Public** (your choice)
5. Click **"Create repository"**

### **1.3 Push to GitHub**
```bash
# Replace YOUR_USERNAME with your GitHub username
git remote add origin https://github.com/YOUR_USERNAME/nri-property-expo-singapore.git
git branch -M main
git push -u origin main
```

---

## **STEP 2: Deploy on Vercel**

### **2.1 Sign Up / Login to Vercel**
1. Go to https://vercel.com
2. Click **"Sign Up"** or **"Login"**
3. Choose **"Continue with GitHub"** (recommended)
4. Authorize Vercel to access your repositories

### **2.2 Import Your Project**
1. Click **"Add New..."** → **"Project"**
2. Find your repository: `nri-property-expo-singapore`
3. Click **"Import"**

### **2.3 Configure Project Settings**

#### **Framework Preset:**
- Vercel should auto-detect: **Vite**
- If not, select **Vite** from dropdown

#### **Root Directory:**
- Leave as `./` (default)

#### **Build Command:**
```bash
npm run build
```

#### **Output Directory:**
```bash
dist
```

#### **Install Command:**
```bash
npm install
```

---

## **STEP 3: Environment Variables** ⚠️ IMPORTANT

### **3.1 Add Environment Variables**

Click **"Environment Variables"** section and add:

**No environment variables needed!** ✅

Your Supabase credentials are already in the `/utils/supabase/info.tsx` file which is safe to deploy because:
- Uses **public** anon key (safe for frontend)
- **Service role key** stays on Supabase server only
- No sensitive data exposed

---

## **STEP 4: Deploy!** 🚀

1. Click **"Deploy"**
2. Wait 2-3 minutes while Vercel:
   - Installs dependencies
   - Builds your project
   - Deploys to global CDN

### **Expected Build Output:**
```
✅ Installing dependencies...
✅ Building application...
✅ Generating static files...
✅ Uploading to Vercel CDN...
✅ Deployment ready!
```

---

## **STEP 5: Verify Deployment** ✅

### **5.1 Check Deployment URL**
- Vercel gives you a URL like: `https://nri-property-expo-singapore.vercel.app`
- Click to open your live website

### **5.2 Test All Features**
1. ✅ Click "Register" button → Modal opens
2. ✅ Fill form and submit → Success message
3. ✅ Navigate to all pages → Everything loads
4. ✅ Check mobile view → Responsive
5. ✅ Go to `yoururl.vercel.app/#admin` → Admin works

### **5.3 Test Backend Connection**
1. Submit a registration form
2. Go to admin dashboard
3. Verify data appears
4. ✅ If data shows → Backend connected!

---

# **OPTION 2: VERCEL CLI** (For Developers)

## **STEP 1: Install Vercel CLI**

```bash
# Install globally
npm install -g vercel

# Or use with npx (no install needed)
npx vercel
```

---

## **STEP 2: Login to Vercel**

```bash
vercel login
```

This opens browser to authenticate.

---

## **STEP 3: Deploy**

```bash
# In your project folder
cd /path/to/your/project

# Deploy to production
vercel --prod

# Or just deploy (preview first)
vercel
```

### **Follow the prompts:**
```
? Set up and deploy? Yes
? Which scope? Your Name
? Link to existing project? No
? What's your project's name? nri-property-expo-singapore
? In which directory is your code located? ./
? Want to override settings? No
```

### **Wait for deployment:**
```
✅ Building...
✅ Uploading...
✅ Deployed to production!
🔗 https://nri-property-expo-singapore.vercel.app
```

---

# **OPTION 3: GITHUB INTEGRATION** (Most Popular) ⭐⭐⭐

## **Benefits:**
- ✅ Auto-deploys on every `git push`
- ✅ Preview deployments for pull requests
- ✅ Rollback to previous versions easily

---

## **STEP 1: Connect GitHub to Vercel**

1. Push code to GitHub (see Option 1, Step 1)
2. Go to https://vercel.com/dashboard
3. Click **"Add New..."** → **"Project"**
4. **"Import Git Repository"**
5. Select your GitHub repo
6. Click **"Import"**

---

## **STEP 2: Configure Build Settings**

Same as Option 1, Step 2.3:
- Framework: **Vite**
- Build Command: `npm run build`
- Output Directory: `dist`

---

## **STEP 3: Enable Auto-Deploy**

✅ **Already enabled by default!**

Now every time you push to GitHub:
```bash
git add .
git commit -m "Update homepage"
git push
```

Vercel automatically:
1. Detects the push
2. Builds your project
3. Deploys to production
4. Sends you a notification

---

# **📊 BUILD CONFIGURATION**

## **Verify package.json scripts:**

Your `package.json` should have:

```json
{
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview"
  }
}
```

✅ Already configured correctly!

---

# **🌐 CUSTOM DOMAIN SETUP** (Optional)

## **STEP 1: Buy a Domain**

Buy from:
- Namecheap (recommended)
- GoDaddy
- Google Domains
- Vercel Domains

Example: `nripropertyexpo.sg` or `nrinivesh-singapore.com`

---

## **STEP 2: Add Domain to Vercel**

1. Go to your project on Vercel
2. Click **"Settings"** → **"Domains"**
3. Click **"Add"**
4. Enter your domain: `yourdomain.com`
5. Click **"Add"**

---

## **STEP 3: Configure DNS**

Vercel provides DNS records to add:

### **For Root Domain (yourdomain.com):**
```
Type: A
Name: @
Value: 76.76.21.21
```

### **For www subdomain:**
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

---

## **STEP 4: Verify Domain**

1. Add DNS records in your domain registrar
2. Wait 5-60 minutes for DNS propagation
3. Vercel auto-verifies
4. ✅ SSL certificate auto-installed
5. ✅ Your site is live on custom domain!

---

# **⚙️ ADVANCED CONFIGURATION**

## **vercel.json** (Optional)

Create `/vercel.json` in your project root:

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite",
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ],
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        }
      ]
    }
  ]
}
```

This adds:
- ✅ SPA routing (for React Router if needed)
- ✅ Security headers
- ✅ Custom build configuration

---

# **🔧 TROUBLESHOOTING**

## **Problem 1: Build Fails**

### **Error: "Module not found"**
```bash
# Solution: Make sure all dependencies are in package.json
npm install
git add package.json package-lock.json
git commit -m "Update dependencies"
git push
```

### **Error: "TypeScript errors"**
```bash
# Solution: Fix TypeScript errors or disable check
# In package.json:
"build": "vite build"
# Instead of:
"build": "tsc && vite build"
```

---

## **Problem 2: Blank Page After Deploy**

### **Check browser console (F12):**
```bash
# If you see "Failed to load module" errors:
# Make sure your import paths are correct

# Fix relative imports:
❌ import { Button } from "components/ui/button"
✅ import { Button } from "./components/ui/button"
```

### **Check base path in vite.config.ts:**
```typescript
export default defineConfig({
  base: '/', // Should be '/' for Vercel
  // ...
})
```

---

## **Problem 3: Images Not Loading**

### **Solution 1: Check public folder**
- Images in `/public` folder are accessible at `/image.png`
- Don't use `/public/image.png` in code

### **Solution 2: Use absolute paths**
```typescript
// ✅ Correct
<img src="/logo.png" alt="Logo" />

// ❌ Wrong
<img src="./logo.png" alt="Logo" />
```

---

## **Problem 4: API Calls Failing**

### **Check CORS and API endpoints:**
```typescript
// Make sure Supabase URL is correct
const response = await fetch(
  `https://cbodmftxkjkutlrqamcn.supabase.co/functions/v1/...`
);

// Check browser console for CORS errors
// If CORS error: Update Supabase Edge Function CORS settings
```

---

## **Problem 5: Environment Variables Not Working**

### **Remember:**
- ❌ Don't need `.env` file for this project
- ✅ Credentials are in `/utils/supabase/info.tsx`
- ✅ File is already included in build

### **If you add .env later:**
1. Add variables in Vercel Dashboard
2. Prefix with `VITE_` for Vite to expose them
3. Redeploy

---

# **📱 VERCEL FEATURES YOU'LL LOVE**

## **1. Preview Deployments** 🎯
- Every branch gets its own URL
- Test before merging to main
- Share with team for feedback

## **2. Instant Rollbacks** ⏮️
- Made a mistake? Rollback in 1 click
- Go to "Deployments" → Find old version → "Promote to Production"

## **3. Analytics** 📊
- See visitor stats
- Monitor performance
- Check Core Web Vitals

## **4. Automatic HTTPS** 🔒
- SSL certificate auto-generated
- Force HTTPS enabled by default
- No configuration needed

## **5. Global CDN** 🌍
- Your site served from 100+ locations worldwide
- Lightning-fast load times
- Automatic caching

## **6. Unlimited Bandwidth** ∞
- Free tier: 100GB/month
- More than enough for most sites
- Auto-scales on demand

---

# **🚦 DEPLOYMENT CHECKLIST**

### **Before Deploying:**
```
[ ] Code is pushed to Git repository
[ ] All dependencies in package.json
[ ] Build command works locally: npm run build
[ ] No TypeScript errors (or disabled check)
[ ] Images are in /public folder
[ ] Supabase Edge Functions are deployed
[ ] Tested locally: npm run dev
```

### **During Deployment:**
```
[ ] Connected repository to Vercel
[ ] Selected correct framework (Vite)
[ ] Build command: npm run build
[ ] Output directory: dist
[ ] Clicked Deploy button
[ ] Waited for build to complete
```

### **After Deployment:**
```
[ ] Opened deployed URL
[ ] Tested all pages load
[ ] Tested register button works
[ ] Submitted test registration
[ ] Checked admin dashboard
[ ] Verified mobile responsiveness
[ ] Checked browser console (no errors)
[ ] Shared URL with team
```

---

# **📊 DEPLOYMENT TIMELINE**

```
┌─────────────────────────────────────────────────────┐
│                DEPLOYMENT TIMELINE                   │
├─────────────────────────────────────────────────────┤
│                                                      │
│  Push to GitHub:              ~30 seconds           │
│  Vercel detects push:         ~10 seconds           │
│  Install dependencies:        ~1 minute             │
│  Build project:               ~1-2 minutes          │
│  Upload to CDN:               ~30 seconds           │
│  DNS propagation:             Instant               │
│  SSL certificate:             Automatic             │
│                                                      │
│  TOTAL TIME: ~3-4 minutes ⚡                         │
│                                                      │
└─────────────────────────────────────────────────────┘
```

---

# **🎯 QUICK DEPLOY COMMANDS**

### **First Time Setup:**
```bash
# 1. Push to GitHub
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/your-repo.git
git push -u origin main

# 2. Deploy to Vercel (using CLI)
npm install -g vercel
vercel login
vercel --prod
```

### **Future Updates:**
```bash
# Just push to GitHub
git add .
git commit -m "Update feature"
git push

# Vercel auto-deploys! ✅
```

---

# **🌟 POST-DEPLOYMENT OPTIMIZATION**

## **1. Enable Analytics**
1. Go to project → Settings → Analytics
2. Enable Web Analytics (free)
3. See real-time visitor data

## **2. Set Up Monitoring**
1. Settings → Integrations
2. Add Slack/Discord for deployment notifications
3. Get notified on every deploy

## **3. Configure Redirects**
Add to `vercel.json`:
```json
{
  "redirects": [
    {
      "source": "/old-page",
      "destination": "/new-page",
      "permanent": true
    }
  ]
}
```

## **4. Speed Optimization**
- ✅ Already optimized with Vite
- ✅ Auto-minification enabled
- ✅ Gzip compression enabled
- ✅ CDN caching enabled

---

# **💰 PRICING**

## **Vercel Free Tier** (Perfect for this project!)

✅ **Included:**
- Unlimited deployments
- 100GB bandwidth/month
- Automatic HTTPS
- Global CDN
- Preview deployments
- Web Analytics (basic)
- Custom domains (free)
- 100+ edge network locations

❌ **Limitations:**
- Commercial use requires Pro ($20/month)
- Advanced analytics needs Pro
- Priority support needs Pro

### **For NRI Property Expo:**
✅ **Free tier is perfect!** (unless heavy traffic)

---

# **📞 SUPPORT & RESOURCES**

## **Official Resources:**
- 📚 Vercel Docs: https://vercel.com/docs
- 💬 Vercel Discord: https://vercel.com/discord
- 🐦 Vercel Twitter: @vercel
- 📧 Support: support@vercel.com

## **Useful Links:**
- Deployment Dashboard: https://vercel.com/dashboard
- Status Page: https://www.vercel-status.com
- Changelog: https://vercel.com/changelog

---

# **✅ FINAL VERIFICATION**

After deployment, verify:

```
╔═══════════════════════════════════════════════╗
║                                               ║
║         VERCEL DEPLOYMENT CHECKLIST          ║
║                                               ║
║  [ ] Site loads on Vercel URL                ║
║  [ ] All pages accessible                    ║
║  [ ] Images load correctly                   ║
║  [ ] Register button works                   ║
║  [ ] Form submission successful              ║
║  [ ] Backend API connected                   ║
║  [ ] Admin dashboard accessible              ║
║  [ ] Mobile responsive                       ║
║  [ ] No console errors                       ║
║  [ ] HTTPS enabled (🔒 icon)                 ║
║                                               ║
║  STATUS: LIVE & OPERATIONAL ✅               ║
║                                               ║
╚═══════════════════════════════════════════════╝
```

---

# **🎉 CONGRATULATIONS!**

Your **NRI Property Expo Singapore** website is now:

✅ **Live on Vercel**  
✅ **Globally distributed** (CDN)  
✅ **Automatically HTTPS**  
✅ **Auto-deploying** on every push  
✅ **Production ready**  
✅ **Scalable & fast**  

**Share your live URL with the world!** 🌍🚀

---

**Need help?** Check troubleshooting section or contact Vercel support.

**Happy deploying!** 🎊
