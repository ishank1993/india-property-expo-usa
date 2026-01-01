# 🎨 Logo Setup Guide - Complete Instructions

This guide will help you add your brand logo and real estate developer logos to your website.

---

## 📋 Quick Overview

Your website has two types of logos:

1. **Brand Logo** - Your main "NRI Nivesh" logo (appears in navbar and footer)
2. **Developer Logos** - Logos of real estate developers (appears in the "Trusted Partners" section)

---

## 🏢 Part 1: Adding Your Brand Logo

### Step 1: Prepare Your Logo

1. **Create or obtain your logo** with these specifications:
   - Format: PNG with transparent background
   - Dimensions: 200-250px width × 50-80px height (horizontal format works best)
   - File size: Under 50KB
   - Background: Transparent (so it works on any background color)

2. **Optimize your logo**:
   - Visit https://tinypng.com/
   - Upload your logo PNG file
   - Download the compressed version
   - This reduces file size while maintaining quality

### Step 2: Add Logo to Your Project

**Option A: Place in public folder (Recommended)**
```bash
# Save your logo file as:
public/logo.png
```

**Option B: Place in images folder**
```bash
# Save your logo file as:
public/images/logo.png

# Then update these files:
# - src/app/components/Navbar.tsx (line 62)
# - src/app/components/Footer.tsx (line 58)
# Change: src="/logo.png"
# To: src="/images/logo.png"
```

### Step 3: Verify Logo Display

1. Start your development server: `npm run dev`
2. Check the navigation bar at the top - your logo should appear
3. Scroll to the footer - your logo should appear there too
4. If logo doesn't show, check browser console for errors

---

## 🏗️ Part 2: Adding Developer Logos

### Step 1: Download Developer Logos

You need logos for these 15 developers (or add your own):

1. Godrej Properties
2. Lodha
3. Rustomjee
4. Sobha
5. Raymond Realty
6. Puravankara
7. L&T Realty
8. Kolte Patil
9. Kalpataru
10. BPTP
11. Prestige Group
12. Brigade Group
13. Oberoi Realty
14. Mahindra Lifespaces
15. Shapoorji Pallonji

**Where to find logos:**

- **Google Image Search**: Search "[Developer Name] logo png"
- **Official Websites**: Most developers have media/press kits
- **Brandfetch**: https://brandfetch.com/ (search by company name)
- **Clearbit Logo API**: Some companies available at https://clearbit.com/logo

### Step 2: Prepare Developer Logos

For each logo:

1. **Download** the logo (preferably PNG with transparent background)
2. **Resize** to approximately 400×200px (maintain aspect ratio)
3. **Optimize** using https://tinypng.com/
4. **Rename** according to the table below

| Developer Name | File Name | Save As |
|----------------|-----------|---------|
| Godrej Properties | godrej.png | public/logos/godrej.png |
| Lodha | lodha.png | public/logos/lodha.png |
| Rustomjee | rustomjee.png | public/logos/rustomjee.png |
| Sobha | sobha.png | public/logos/sobha.png |
| Raymond Realty | raymond.png | public/logos/raymond.png |
| Puravankara | puravankara.png | public/logos/puravankara.png |
| L&T Realty | lnt.png | public/logos/lnt.png |
| Kolte Patil | koltepatil.png | public/logos/koltepatil.png |
| Kalpataru | kalpataru.png | public/logos/kalpataru.png |
| BPTP | bptp.png | public/logos/bptp.png |
| Prestige Group | prestige.png | public/logos/prestige.png |
| Brigade Group | brigade.png | public/logos/brigade.png |
| Oberoi Realty | oberoi.png | public/logos/oberoi.png |
| Mahindra Lifespaces | mahindra.png | public/logos/mahindra.png |
| Shapoorji Pallonji | shapoorji.png | public/logos/shapoorji.png |

### Step 3: Add Logos to Project

Create the folder structure and add your files:

```bash
# Create the logos directory (already created)
public/logos/

# Add all logo files:
public/logos/godrej.png
public/logos/lodha.png
public/logos/rustomjee.png
# ... and so on
```

### Step 4: Verify Developer Logos

1. Start/restart your development server: `npm run dev`
2. Scroll to the "Trusted Partners" section
3. You should see all logos in a grid layout
4. If a logo is missing, the developer name will show instead

---

## 🎯 Part 3: Adding a Favicon

A favicon is the small icon that appears in browser tabs.

### Step 1: Create Favicon

1. Visit https://favicon.io/favicon-converter/
2. Upload your brand logo
3. Download the generated files
4. You'll get a package with multiple files

### Step 2: Add Favicon to Project

```bash
# Place the main favicon file:
public/favicon.ico
```

### Step 3: Verify Favicon

1. Restart your development server
2. Look at your browser tab
3. The favicon should appear next to your page title

---

## 📝 Part 4: Customizing Developer List

Want to add different developers or change the list?

### Edit the BuilderLogos Component

1. Open: `src/app/components/BuilderLogos.tsx`
2. Find the `builders` array (around line 5-20)
3. Add, remove, or modify entries:

```tsx
const builders = [
  { name: "Godrej Properties", logo: "/logos/godrej.png" },
  { name: "Your New Developer", logo: "/logos/newdev.png" },
  // Add more developers here
];
```

### Adding a New Developer:

1. Add a new entry to the `builders` array
2. Download and add the logo file to `public/logos/`
3. Make sure the filename matches the `logo` path

**Example:**
```tsx
{ name: "DLF Limited", logo: "/logos/dlf.png" }
```

Then add `dlf.png` to the `public/logos/` folder.

---

## 🔧 Troubleshooting

### Logo Not Showing?

**Problem**: Logo shows as broken image or fallback text

**Solutions**:
1. Check file path is correct
2. Ensure file is in the right location (`public/` folder)
3. Check file extension matches (`.png` not `.PNG`)
4. Clear browser cache (Cmd+Shift+R on Mac, Ctrl+Shift+R on Windows)
5. Check browser console for errors

### Logo Too Large/Small?

**For Brand Logo:**
- Adjust size in image editor before uploading
- Or modify height in Navbar.tsx: `className="h-10 md:h-12"` (change numbers)

**For Developer Logos:**
- They auto-resize to fit cards
- Adjust `max-h-16` in BuilderLogos.tsx line 75

### Logo Quality Poor?

1. Use higher resolution source image
2. Use PNG format (not JPG) for logos
3. Ensure transparent background
4. Don't stretch small logos to larger sizes

---

## 📱 Testing Checklist

After adding logos, test:

- [ ] Brand logo visible on desktop
- [ ] Brand logo visible on mobile
- [ ] Brand logo in navbar
- [ ] Brand logo in footer
- [ ] Favicon in browser tab
- [ ] All developer logos loading
- [ ] Hover effects working on developer logos
- [ ] Logos look good on different screen sizes
- [ ] No broken images or console errors

---

## 🎨 Logo Design Tips

### For Your Brand Logo:

1. **Keep it simple** - Complex logos don't scale well
2. **Use readable fonts** - Avoid fancy scripts at small sizes
3. **Test on dark and light backgrounds** - Use transparent PNG
4. **Make it horizontal** - Works better in navigation bars
5. **Include brand colors** - Match your website theme

### For Developer Logos:

1. **Consistent sizing** - All logos should be similar dimensions
2. **Transparent backgrounds** - Looks more professional
3. **High quality** - No pixelated or blurry images
4. **Official sources** - Use logos from official websites
5. **Respect trademarks** - Only use logos you have permission for

---

## 📂 Folder Structure Reference

```
your-project/
├── public/
│   ├── favicon.ico           ← Your favicon
│   ├── logo.png              ← Your brand logo
│   ├── robots.txt
│   ├── images/               ← Alternative location for images
│   │   ├── logo.png
│   │   └── README.md
│   └── logos/                ← All developer logos
│       ├── godrej.png
│       ├── lodha.png
│       ├── rustomjee.png
│       ├── ... (more logos)
│       └── README.md
└── src/
    └── app/
        └── components/
            ├── BuilderLogos.tsx   ← Developer logos component
            ├── Navbar.tsx         ← Contains brand logo
            └── Footer.tsx         ← Contains brand logo
```

---

## 🚀 Quick Start Commands

```bash
# Start development server to see changes
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## 📞 Need Help?

If you encounter issues:

1. Check the file paths are exactly correct
2. Look at browser console for error messages
3. Verify file names match exactly (case-sensitive on some systems)
4. Ensure images are in the right format (PNG/JPG)
5. Try clearing cache and restarting dev server

---

## ✅ Summary

**To add logos:**

1. **Brand logo** → Save as `public/logo.png`
2. **Favicon** → Save as `public/favicon.ico`
3. **Developer logos** → Save in `public/logos/` with correct filenames
4. **Test** → Run `npm run dev` and verify all logos appear

That's it! Your website will now display all your brand and developer logos beautifully.
