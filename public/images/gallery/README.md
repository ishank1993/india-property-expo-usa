# Gallery Images

This folder contains photos for the event photo gallery on your website.

## Image Guidelines

**Recommended Specifications:**
- Format: JPG or WebP (WebP preferred for better compression)
- Dimensions: 1200x800px or 1080x720px (landscape orientation works best)
- File size: Under 300KB each for optimal performance
- Quality: 75-80% compression (use tools like TinyPNG, ImageOptim, or Squoosh)

**Optimization Tools:**
- Online: https://squoosh.app or https://tinypng.com
- Mac: ImageOptim (free app)
- Command line: `convert input.jpg -quality 75 -resize 1200x800 output.jpg`

## Image Categories

### Event Photos (event-1.jpg, event-2.jpg, etc.)
- Past property expo/exhibition photos
- Booth displays
- Event venue shots
- Registration desk photos

### Singapore Photos (singapore-1.jpg, singapore-2.jpg, etc.)
- Marina Bay Sands
- Merlion
- Gardens by the Bay
- Chinatown
- Little India
- Sentosa Island
- Singapore skyline

### Networking Photos (networking-1.jpg, networking-2.jpg, etc.)
- Business meetings
- Developer consultations
- Networking sessions
- Handshake photos

## How to Add Your Images

1. Place your images in this folder with descriptive names
2. Update `src/app/components/Gallery.tsx` with the correct filenames and titles
3. Commit and push changes

## Example Filenames

```
event-1.jpg
event-2.jpg
singapore-1.jpg
singapore-2.jpg
singapore-3.jpg
singapore-4.jpg
singapore-5.jpg
singapore-6.jpg
singapore-7.jpg
networking-1.jpg
networking-2.jpg
```
