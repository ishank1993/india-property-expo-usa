# 🖼️ Image Management Guide - Quick Reference

## Current Image Locations in Code

### 1. Logo (Navbar & Footer)
**Files**: 
- `/src/app/components/Navbar.tsx` (line 62)
- `/src/app/components/Footer.tsx` (line 58)

**Current path**: `/logo.png`

**To update**:
```bash
# Place new logo file at:
public/logo.png

# Or update the src attribute in both files:
src="/logo.png"  →  src="/images/new-logo.png"
```

---

### 2. Favicon
**File**: `/src/app/components/Favicon.tsx`

**Current code**:
```typescript
<link rel="icon" type="image/x-icon" href="/favicon.ico" />
```

**To update**:
```bash
# Place new favicon at:
public/favicon.ico
```

**Generate favicon**: https://favicon.io/favicon-converter/

---

### 3. Builder Logos
**File**: `/src/app/components/BuilderLogos.tsx`

**Current**: Uses placeholder builder names (no images yet)

**To add images**:

1. **Create this structure**:
```
public/
  └── images/
      └── builders/
          ├── builder-1.png
          ├── builder-2.png
          ├── builder-3.png
          └── ...
```

2. **Update BuilderLogos.tsx** (around line 10):
```typescript
const builders = [
  { name: "Tata Housing", logo: "/images/builders/tata-housing.png" },
  { name: "Godrej Properties", logo: "/images/builders/godrej.png" },
  { name: "Sobha", logo: "/images/builders/sobha.png" },
  { name: "Prestige", logo: "/images/builders/prestige.png" },
  { name: "Lodha", logo: "/images/builders/lodha.png" },
  { name: "Brigade", logo: "/images/builders/brigade.png" },
  { name: "Mahindra Lifespaces", logo: "/images/builders/mahindra.png" },
  { name: "Shapoorji Pallonji", logo: "/images/builders/shapoorji.png" },
  { name: "L&T Realty", logo: "/images/builders/lnt.png" },
  { name: "DLF", logo: "/images/builders/dlf.png" },
];
```

3. **Update the render section** (around line 30):
```typescript
{builders.map((builder, index) => (
  <div
    key={index}
    className="flex items-center justify-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all"
  >
    <img
      src={builder.logo}
      alt={builder.name}
      className="h-12 object-contain grayscale hover:grayscale-0 transition-all"
      onError={(e) => {
        // Fallback to text if image fails
        e.currentTarget.style.display = 'none';
        const parent = e.currentTarget.parentElement;
        if (parent) {
          const span = document.createElement('span');
          span.className = "text-gray-600 font-semibold";
          span.innerText = builder.name;
          parent.appendChild(span);
        }
      }}
    />
  </div>
))}
```

---

### 4. Gallery Images
**File**: `/src/app/components/Gallery.tsx`

**Current**: Uses Unsplash API (placeholder images)

**To add real images**:

1. **Create this structure**:
```
public/
  └── images/
      └── gallery/
          ├── event-1.jpg
          ├── event-2.jpg
          ├── event-3.jpg
          ├── event-4.jpg
          ├── event-5.jpg
          └── event-6.jpg
```

2. **Update Gallery.tsx** (around line 5):

Replace the current `images` array with:
```typescript
const images = [
  {
    url: "/images/gallery/event-1.jpg",
    alt: "NRI Property Expo 2025 - Main Hall"
  },
  {
    url: "/images/gallery/event-2.jpg",
    alt: "Attendees exploring property options"
  },
  {
    url: "/images/gallery/event-3.jpg",
    alt: "Developer presentations"
  },
  {
    url: "/images/gallery/event-4.jpg",
    alt: "One-on-one consultations"
  },
  {
    url: "/images/gallery/event-5.jpg",
    alt: "Networking session"
  },
  {
    url: "/images/gallery/event-6.jpg",
    alt: "Property showcase area"
  }
];
```

3. **Update the image rendering** (around line 30):
```typescript
{images.map((image, index) => (
  <div key={index} className="relative group overflow-hidden rounded-xl shadow-lg">
    <img
      src={image.url}
      alt={image.alt}
      className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
      loading="lazy"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <div className="absolute bottom-4 left-4 text-white">
        <p className="text-sm font-semibold">{image.alt}</p>
      </div>
    </div>
  </div>
))}
```

---

### 5. Hero Background Image
**File**: `/src/app/components/Hero.tsx`

**Current**: Uses gradient background

**To add background image**:

1. **Add image**:
```
public/
  └── images/
      └── hero/
          └── hero-bg.jpg
```

2. **Update Hero.tsx** (around line 15):

Change the `className` on the main section:
```typescript
// Before:
className="relative min-h-screen bg-gradient-to-br from-orange-50 via-white to-green-50..."

// After:
className="relative min-h-screen bg-cover bg-center bg-no-repeat..."
style={{ backgroundImage: "url('/images/hero/hero-bg.jpg')" }}
```

3. **Add overlay** for text readability:
```typescript
<section 
  className="relative min-h-screen bg-cover bg-center bg-no-repeat pt-20"
  style={{ backgroundImage: "url('/images/hero/hero-bg.jpg')" }}
>
  {/* Add overlay */}
  <div className="absolute inset-0 bg-gradient-to-br from-orange-900/80 via-black/60 to-green-900/80"></div>
  
  {/* Make content relative to overlay */}
  <div className="relative z-10 container mx-auto px-4 py-20">
    {/* Rest of hero content */}
  </div>
</section>
```

---

### 6. OG Image (Social Media Preview)
**File**: `/src/app/components/SEOHead.tsx`

**Current**: No OG image set

**To add**:

1. **Create OG image**:
```
public/
  └── og-image.png
```

**Specs**:
- Size: 1200px × 630px
- Format: PNG or JPG
- Include: Logo, event name, dates, location

2. **Update SEOHead.tsx** (around line 10):

Add these meta tags:
```typescript
<meta property="og:image" content="https://yourdomain.com/og-image.png" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta property="og:image:alt" content="NRI Nivesh Property Expo 2026 - Singapore" />

<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:image" content="https://yourdomain.com/og-image.png" />
```

---

## Image Specifications

### Logo
- **Format**: PNG with transparent background
- **Size**: 200px width × auto height
- **Max file size**: 100KB
- **Usage**: Navbar, Footer

### Favicon
- **Format**: ICO or PNG
- **Size**: 32×32 or 64×64 pixels
- **Max file size**: 10KB
- **Usage**: Browser tab icon

### Builder Logos
- **Format**: PNG with transparent background
- **Size**: 200px × 100px (maintain aspect ratio)
- **Max file size**: 50KB each
- **Style**: Grayscale filter applied (becomes color on hover)

### Gallery Photos
- **Format**: JPG (better compression for photos)
- **Size**: 1200px width (maintains quality)
- **Max file size**: 200KB each
- **Aspect ratio**: 16:9 or 4:3

### Hero Background
- **Format**: JPG
- **Size**: 1920px × 1080px
- **Max file size**: 300KB
- **Quality**: High (80-90%)

### OG Image
- **Format**: PNG or JPG
- **Size**: 1200px × 630px (exact)
- **Max file size**: 200KB
- **Required elements**: Logo, event name, dates

---

## Quick Upload Checklist

### Using GitHub Web Interface:

1. **Navigate to your repository** on GitHub
2. **Go to folder**: `public/`
3. **Click**: "Add file" → "Upload files"
4. **Drag and drop** all your images
5. **Organize** into subfolders (builders, gallery, etc.)
6. **Commit changes** with message: "Add event images"
7. **Done!** Your site will auto-update

### Using GitHub Desktop:

1. **Open GitHub Desktop**
2. **Clone your repository** (first time only)
3. **Navigate to**: `public/` folder in file explorer
4. **Create subfolders**: `images/builders/`, `images/gallery/`
5. **Drag and drop** images into folders
6. **Commit** changes in GitHub Desktop
7. **Push** to GitHub
8. **Done!** Your site will auto-update

---

## Image Optimization Tools

### Before Uploading:

1. **TinyPNG** - https://tinypng.com/
   - Compress PNG/JPG files
   - Reduces file size by 50-70%
   - Maintains quality

2. **Squoosh** - https://squoosh.app/
   - Advanced compression options
   - Compare before/after
   - Multiple format support

3. **ImageOptim** (Mac) - https://imageoptim.com/
   - Batch optimization
   - Drag-and-drop interface

4. **Caesium** (Windows) - https://saerasoft.com/caesium/
   - Batch compression
   - Preview quality

---

## File Naming Convention

### Good Names:
✅ `tata-housing.png`
✅ `event-main-hall-2025.jpg`
✅ `hero-bg-expo.jpg`
✅ `logo-nri-nivesh.png`

### Bad Names:
❌ `IMG_1234.jpg`
❌ `New Image (1).png`
❌ `Screenshot 2024-01-31.png`
❌ `LOGO FINAL FINAL v2.png`

**Rules**:
- Use lowercase
- Use hyphens instead of spaces
- Be descriptive
- Keep it short (max 30 characters)
- No special characters

---

## Testing Images

### After uploading:

1. **Clear browser cache**: Ctrl + Shift + R (or Cmd + Shift + R on Mac)
2. **Check in Incognito**: Open incognito/private window
3. **Test on mobile**: Check responsive behavior
4. **Verify in Console**: F12 → Check for 404 errors

### Common Issues:

**Image not loading?**
- ✅ Check file path is correct (case-sensitive!)
- ✅ Verify file exists in `public/` folder
- ✅ Clear cache and hard refresh
- ✅ Check file extension matches (`.png` vs `.PNG`)

**Image too large?**
- ✅ Compress before uploading
- ✅ Use JPG for photos, PNG for logos
- ✅ Resize to recommended dimensions

---

## Folder Structure Summary

```
public/
├── logo.png                    # Main logo (navbar/footer)
├── favicon.ico                 # Browser icon
├── og-image.png               # Social media preview
└── images/
    ├── builders/              # Builder company logos
    │   ├── tata-housing.png
    │   ├── godrej.png
    │   └── ...
    ├── gallery/               # Event photos
    │   ├── event-1.jpg
    │   ├── event-2.jpg
    │   └── ...
    └── hero/                  # Hero section images
        └── hero-bg.jpg
```

---

## Need Help?

### Image not showing?
1. Check file path in code matches actual file location
2. Verify filename (case-sensitive!)
3. Clear browser cache
4. Check browser console for 404 errors

### Image quality poor?
1. Use higher resolution source
2. Don't exceed recommended dimensions
3. Use correct format (PNG for logos, JPG for photos)
4. Optimize without over-compressing

### Slow loading?
1. Compress images before uploading
2. Use WebP format (modern browsers)
3. Add `loading="lazy"` attribute
4. Use responsive images with srcset

---

**🎨 Your images are now ready to be managed through GitHub!**

All updates will automatically reflect on your live site.
