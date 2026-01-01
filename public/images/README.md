# Brand Images Directory

## Brand Logo Setup

### Main Logo (Navbar & Footer)

**File**: `logo.png`

Place your main brand logo as `logo.png` in this directory.

#### Specifications:
- **Format**: PNG with transparent background
- **Dimensions**: 200x60px (or similar horizontal ratio)
- **File Size**: Under 50KB
- **Background**: Transparent
- **Usage**: Displays in navigation bar and footer

#### Steps to Add:
1. Create your logo with transparent background
2. Export as PNG
3. Optimize the image size
4. Save as `logo.png` in this folder
5. The website will automatically use it

---

### Favicon

**File**: `favicon.ico`

Place your favicon as `favicon.ico` in the `public/` directory (parent folder).

#### Specifications:
- **Format**: ICO
- **Dimensions**: 32x32px or 64x64px
- **Usage**: Browser tab icon

#### Generate Favicon:
- Use https://favicon.io/favicon-converter/
- Upload your logo
- Download the generated favicon.ico
- Place in `public/` folder (not in this images folder)

---

### Logo Tools & Resources:

**Create a Logo:**
- Canva: https://www.canva.com/create/logos/
- Looka: https://looka.com/
- LogoMakr: https://logomakr.com/

**Optimize Images:**
- TinyPNG: https://tinypng.com/
- Squoosh: https://squoosh.app/
- Compressor.io: https://compressor.io/

**Remove Background:**
- Remove.bg: https://www.remove.bg/
- Adobe Express: https://www.adobe.com/express/feature/image/remove-background

---

### Current Logo Path Configuration:

The website is configured to look for:
- Main Logo: `/logo.png` (in public folder root)
- Or: `/images/logo.png` (in this folder)

**To use this folder**, update these files:
1. `/src/app/components/Navbar.tsx` - line 62
2. `/src/app/components/Footer.tsx` - line 58

Change:
```tsx
src="/logo.png"
```

To:
```tsx
src="/images/logo.png"
```
