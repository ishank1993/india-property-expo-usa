# 🚀 Complete Setup Guide - NRI Nivesh Property Expo

## ✅ Part 1: Supabase Integration (COMPLETED)

### What's Been Done:

#### 1. **Backend API Endpoints Created**
Location: `/supabase/functions/server/index.tsx`

**Available Endpoints:**

- ✅ **POST** `/make-server-232426bc/register` - Store new registration
- ✅ **GET** `/make-server-232426bc/registration/:email` - Check if email is registered
- ✅ **GET** `/make-server-232426bc/registrations` - Get all registrations (admin)
- ✅ **GET** `/make-server-232426bc/health` - Health check

#### 2. **Data Storage Structure**
All registration data is stored in Supabase KV Store:

```typescript
{
  id: "reg_1234567890_abc123",
  fullName: "John Doe",
  email: "john@example.com",
  phone: "+6512345678",
  countryCode: "+65",
  dateOfVisit: "apr-18",
  preferredCity: "mumbai",
  educationalSession: "gift-city",
  consultationService: "tax-advisory",
  registeredAt: "2026-01-31T10:00:00.000Z",
  source: "website",
  status: "confirmed"
}
```

#### 3. **Frontend Integration**
Location: `/src/app/components/RegistrationModal.tsx`

- ✅ Form submits to Supabase backend
- ✅ Success/error handling with toast notifications
- ✅ Registration ID stored in localStorage
- ✅ Full validation before submission

### How to Test Supabase Integration:

1. **Fill out the registration form** on your website
2. **Open Browser Console** (F12) to see logs:
   - Look for: `✅ Registration successful: reg_...`
3. **Check Supabase Dashboard**:
   - Go to: https://app.supabase.com/project/cbodmftxkjkutlrqamcn
   - Navigate to: Functions → Logs
   - You'll see all registration events

### How to View All Registrations:

**Method 1: Using Browser (Quick Check)**
```
https://cbodmftxkjkutlrqamcn.supabase.co/functions/v1/make-server-232426bc/registrations
```

**Method 2: Using Supabase Dashboard**
- Project Dashboard → Functions → Logs
- Filter by "registration successful"

---

## 📁 Part 2: GitHub Setup with Easy Image Management

### Project Structure for GitHub:

```
nri-nivesh-property-expo/
├── public/                          # All static assets
│   ├── logo.png                     # Main logo (navbar)
│   ├── favicon.ico                  # Browser tab icon
│   ├── images/
│   │   ├── builders/                # Builder company logos
│   │   │   ├── builder-1.png
│   │   │   ├── builder-2.png
│   │   │   └── ...
│   │   ├── gallery/                 # Event photos
│   │   │   ├── event-1.jpg
│   │   │   ├── event-2.jpg
│   │   │   └── ...
│   │   └── hero/                    # Hero section images
│   │       └── hero-bg.jpg
│   └── og-image.png                 # Social media preview image
├── src/
│   ├── app/
│   │   ├── App.tsx
│   │   └── components/
│   └── styles/
├── package.json
├── README.md
└── .gitignore
```

### Step-by-Step: Connect to GitHub

#### Step 1: Create GitHub Repository

1. Go to https://github.com/new
2. Repository name: `nri-nivesh-property-expo`
3. Description: "Singapore's Largest India Property Exhibition 2026"
4. Choose: **Public** or **Private**
5. Click: **Create repository**

#### Step 2: Initialize Git (if not already done)

```bash
git init
git add .
git commit -m "Initial commit: NRI Nivesh Property Expo"
```

#### Step 3: Connect to GitHub

```bash
git remote add origin https://github.com/YOUR-USERNAME/nri-nivesh-property-expo.git
git branch -M main
git push -u origin main
```

---

## 🖼️ Managing Images Through GitHub

### Option 1: Direct GitHub Upload (No Code Needed)

#### For Logo Changes:

1. **Navigate to**: `public/` folder on GitHub
2. **Click**: "Add file" → "Upload files"
3. **Drag and drop** your `logo.png` file
4. **Commit** changes with message: "Update main logo"
5. **Done!** - Your logo is updated

#### For Builder Logos:

1. **Navigate to**: `public/images/builders/`
2. **Upload** all builder logo images
3. **Name them**: `builder-1.png`, `builder-2.png`, etc.
4. **Commit** changes

#### For Event Gallery:

1. **Navigate to**: `public/images/gallery/`
2. **Upload** event photos
3. **Name them**: `event-1.jpg`, `event-2.jpg`, etc.
4. **Commit** changes

### Option 2: Visual Editor Integration (Advanced)

For easier management, you can use these tools:

#### **GitHub Desktop** (Recommended for Beginners)
- Download: https://desktop.github.com/
- Drag-and-drop files directly
- Visual interface for commits
- No command line needed

#### **VS Code with GitHub Extension**
- Download VS Code: https://code.visualstudio.com/
- Install "GitHub" extension
- Clone your repository
- Manage files visually
- Integrated image preview

---

## 🎨 How to Update Specific Images

### 1. Main Logo (Navbar)

**Location**: `/public/logo.png`

**Referenced in**:
- `/src/app/components/Navbar.tsx` (line 62)
- `/src/app/components/Footer.tsx` (line 58)

**How to Update**:
```bash
# Replace the file
public/logo.png

# Commit changes
git add public/logo.png
git commit -m "Update main logo"
git push
```

**Recommended Specs**:
- Format: PNG with transparent background
- Size: 200px width, auto height
- Max file size: 100KB

---

### 2. Favicon (Browser Tab Icon)

**Location**: `/public/favicon.ico`

**Referenced in**: `/src/app/components/Favicon.tsx`

**How to Create Favicon**:
1. Use: https://favicon.io/favicon-converter/
2. Upload your logo image
3. Download the favicon package
4. Replace `favicon.ico` in `/public/`

**Recommended Specs**:
- Format: ICO or PNG
- Size: 32x32 or 64x64 pixels

---

### 3. Builder Logos

**Current Location**: Hardcoded placeholder images

**How to Add Real Builder Logos**:

1. **Create folder structure**:
```bash
public/images/builders/
```

2. **Add images**:
```bash
public/images/builders/
  ├── tata-housing.png
  ├── godrej-properties.png
  ├── sobha.png
  ├── prestige.png
  └── ...
```

3. **Update BuilderLogos.tsx**:

```typescript
// Replace the current builder logos array with real images
const builders = [
  { name: "Tata Housing", logo: "/images/builders/tata-housing.png" },
  { name: "Godrej Properties", logo: "/images/builders/godrej-properties.png" },
  { name: "Sobha", logo: "/images/builders/sobha.png" },
  // ... add all your builders
];
```

**Recommended Specs**:
- Format: PNG with transparent background
- Size: 200px × 100px (maintain aspect ratio)
- Max file size: 50KB per logo

---

### 4. Event Gallery Photos

**Current Location**: Using Unsplash placeholder images

**How to Add Real Event Photos**:

1. **Create folder**:
```bash
public/images/gallery/
```

2. **Add photos**:
```bash
public/images/gallery/
  ├── event-1.jpg
  ├── event-2.jpg
  ├── event-3.jpg
  └── ...
```

3. **Update Gallery.tsx**:

```typescript
const galleryImages = [
  "/images/gallery/event-1.jpg",
  "/images/gallery/event-2.jpg",
  "/images/gallery/event-3.jpg",
  // ... add all photos
];
```

**Recommended Specs**:
- Format: JPG (better for photos)
- Size: 1200px width (maintains quality)
- Max file size: 200KB per photo (compressed)

---

### 5. Social Media Preview Image (OG Image)

**Location**: `/public/og-image.png`

**Referenced in**: `/src/app/components/SEOHead.tsx`

**How to Create**:
1. Design: 1200px × 630px image
2. Include: Logo, event name, dates
3. Save as: `og-image.png`
4. Place in: `/public/`

**This image appears when sharing your site on**:
- WhatsApp
- Facebook
- LinkedIn
- Twitter/X

---

## 🔄 Automated Image Optimization

### Using GitHub Actions (Optional)

Create: `.github/workflows/optimize-images.yml`

```yaml
name: Optimize Images
on:
  push:
    paths:
      - 'public/images/**'

jobs:
  optimize:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: calibreapp/image-actions@main
        with:
          githubToken: ${{ secrets.GITHUB_TOKEN }}
          jpegQuality: 80
          pngQuality: 80
```

This will automatically optimize images when you upload them!

---

## 📊 How to Access Registration Data

### Method 1: Direct API Call

```javascript
// Get all registrations
const response = await fetch(
  'https://cbodmftxkjkutlrqamcn.supabase.co/functions/v1/make-server-232426bc/registrations',
  {
    headers: {
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...'
    }
  }
);
const data = await response.json();
console.log(data);
```

### Method 2: Supabase Dashboard

1. Go to: https://app.supabase.com/project/cbodmftxkjkutlrqamcn
2. Navigate to: **Functions** → **Logs**
3. Filter by: "registration successful"
4. View all registration data

### Method 3: Export to CSV/Excel (Coming Soon)

You can create an admin panel to:
- View all registrations in a table
- Export to CSV
- Filter by date, city, session type
- Send bulk emails

---

## 🔒 Security Best Practices

### 1. Environment Variables

**Never commit**:
- Supabase Service Role Key
- API keys
- Database passwords

**Use `.gitignore`**:
```
# .gitignore
.env
.env.local
node_modules/
dist/
.DS_Store
```

### 2. Public Anon Key is Safe

The public anon key in `info.tsx` is safe to commit:
- It's meant to be public
- Row Level Security (RLS) protects data
- Rate limiting prevents abuse

---

## 🚀 Deployment Options

### Option 1: Figma Make (Current)
- ✅ Already deployed
- ✅ Auto-updates on changes
- ✅ Free hosting

### Option 2: Vercel (Recommended for Production)
1. Go to: https://vercel.com/new
2. Import from GitHub
3. Connect your repository
4. Deploy with one click
5. Custom domain: `expo.nrinivesh.in`

### Option 3: Netlify
1. Go to: https://app.netlify.com/start
2. Connect GitHub repository
3. Deploy automatically

---

## 📞 Support Checklist

### If Registration Form Doesn't Work:

1. **Check Console Logs**:
   - Press F12
   - Look for errors
   - Share error message

2. **Check Supabase Status**:
   - Visit: https://status.supabase.com/

3. **Verify Function is Running**:
   ```
   https://cbodmftxkjkutlrqamcn.supabase.co/functions/v1/make-server-232426bc/health
   ```
   - Should return: `{"status":"ok"}`

### If Images Don't Load:

1. **Check file paths** are correct
2. **Verify files exist** in `/public/`
3. **Check file names** match exactly (case-sensitive)
4. **Clear browser cache**: Ctrl + Shift + R

---

## 📝 Quick Commands Reference

### Git Commands:
```bash
# Check status
git status

# Add all changes
git add .

# Commit with message
git commit -m "Your message"

# Push to GitHub
git push

# Pull latest changes
git pull
```

### Image Optimization:
```bash
# Install optimizer
npm install -g imagemin-cli

# Optimize images
imagemin public/images/* --out-dir=public/images/optimized
```

---

## ✨ Next Steps

### Recommended Improvements:

1. **Add Real Builder Logos**
   - Collect all builder company logos
   - Save in `/public/images/builders/`
   - Update `BuilderLogos.tsx`

2. **Add Event Photos**
   - Take/collect event photos
   - Save in `/public/images/gallery/`
   - Update `Gallery.tsx`

3. **Create Admin Dashboard**
   - View all registrations
   - Export data
   - Send emails

4. **Email Integration**
   - Send confirmation emails
   - Use SendGrid or Resend
   - Automated follow-ups

5. **Analytics Integration**
   - Google Analytics
   - Facebook Pixel
   - Track conversions

---

## 🎯 Summary

### ✅ What's Working Now:

1. ✅ Registration form connected to Supabase
2. ✅ Data stored securely in KV Store
3. ✅ All navigation working
4. ✅ Mobile responsive
5. ✅ SEO optimized
6. ✅ MAS/MARS compliant
7. ✅ Cookie consent
8. ✅ Legal pages

### 📸 For GitHub Image Management:

1. ✅ Create folder structure in `/public/`
2. ✅ Upload images via GitHub web interface or Desktop app
3. ✅ Update component references
4. ✅ Commit and push changes
5. ✅ Images will be automatically deployed

### 🔗 Important Links:

- **Supabase Project**: https://app.supabase.com/project/cbodmftxkjkutlrqamcn
- **Function Logs**: https://app.supabase.com/project/cbodmftxkjkutlrqamcn/functions/logs
- **GitHub Desktop**: https://desktop.github.com/
- **Favicon Generator**: https://favicon.io/
- **Image Optimizer**: https://tinypng.com/

---

**Need Help?** 
- Check console logs (F12)
- Review Supabase function logs
- Verify file paths are correct
- Test health endpoint: `/health`

**🎉 Your NRI Property Expo website is now fully functional with Supabase integration!**
