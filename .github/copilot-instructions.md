# AI Coding Instructions - NRI Nivesh Property Expo

## Project Overview
React 18 + TypeScript + Vite landing page for Singapore property expo, with Supabase backend for registration management. Optimized for mobile-first design with MAS/MARS compliance for Singapore financial regulations.

## Architecture Essentials

### Data Flow Pattern
**Frontend → Supabase Edge Function → KV Store**
- Registration form ([RegistrationModal.tsx](../src/app/components/RegistrationModal.tsx)) posts to Supabase edge function at `/make-server-232426bc/register`
- Edge function ([supabase/functions/server/index.tsx](../supabase/functions/server/index.tsx)) validates and stores in KV store with dual keys: `registration:{id}` and `email:{email}`
- Admin dashboard ([AdminDashboard.tsx](../src/app/components/AdminDashboard.tsx)) fetches from `/make-server-232426bc/registrations`
- All API calls use `projectId` and `publicAnonKey` from [utils/supabase/info.tsx](../utils/supabase/info.tsx)
  - ⚠️ **Security**: File contains live credentials and is committed to repo (public anon key only, safe for frontend)
  - File is auto-generated - changes will be overwritten by Supabase CLI
  - Never commit service role keys or sensitive credentials

### Component Architecture
- Single-page app with hash routing (`#admin`, `#wealth`, `#privacy`, etc.)
- All pages defined in [App.tsx](../src/app/App.tsx) using `currentPage` state
- Timed modal popups (10s, 40s, 1min intervals) controlled by `popupCount` state
- Form submission sets `localStorage.getItem('registrationSubmitted')` to prevent repeat popups

### UI Component Library
Extensive Radix UI + custom components in `src/app/components/ui/`. All use the `cn()` utility from [utils.ts](../src/app/components/ui/utils.ts) which merges `clsx` + `tailwind-merge` for conditional classes.

## Development Commands

```bash
npm run dev          # Start dev server (Vite) at http://localhost:3000
npm run build        # Production build → dist/ folder
vercel --prod        # Deploy to Vercel (primary)
# OR via Figma Make auto-deployment on git push
```

### Testing Strategy
**No automated tests** - project uses manual verification:
- Follow [DEPLOYMENT_CHECKLIST.md](../DEPLOYMENT_CHECKLIST.md) for pre-launch testing
- [NAVIGATION_TEST_CHECKLIST.md](../NAVIGATION_TEST_CHECKLIST.md) for feature verification
- Test registration flow end-to-end before each deployment
- Verify on real mobile devices (primary target: Singapore NRIs on mobile)

## Critical Conventions

### Styling
- **Indian tricolor theme**: Orange (#FF9933), White, Green (#138808) - see [theme.css](../src/styles/theme.css)
- Use `cn()` for all className merging: `className={cn("base-class", conditional && "conditional-class")}`
- Mobile-first: All components must work on small screens first
- Image optimization: 
  - Always include `loading="lazy"` for off-screen images
  - Add explicit `width` and `height` attributes to prevent layout shifts
  - Compress via TinyPNG before adding to repo
  - Logo: 160x48px (Navbar), 160x40px (Footer)
  - Builder logos: 200x80px
  - Gallery images: 1200x800px
  - Use `fetchpriority="high"` only for above-the-fold images (Hero background, Navbar logo)

### Form Validation
Client-side only, inline validation in [RegistrationModal.tsx](../src/app/components/RegistrationModal.tsx#L88-L107):
- Email: regex `/^[^\s@]+@[^\s@]+\.[^\s@]+$/`
- Phone: 7-15 digits
- Terms checkbox required
Toast notifications via `sonner` library for all user feedback

### State Management
- No Redux/Zustand - pure React `useState`
- LocalStorage for: admin auth (24hr session), form submission flag, cookie consent
- Admin session check pattern: store timestamp, validate < 24hrs on mount

### Compliance (MAS/MARS Singapore)
**Never use promotional/advisory language**:
- ❌ "invest", "returns", "guaranteed", "profitable", "best"
- ✅ "explore", "information", "curated", "opportunities", "verified"
See [MAS_COMPLIANCE_UPDATES.md](../MAS_COMPLIANCE_UPDATES.md) for complete word replacement guide.

## Integration Points

### Supabase Edge Functions (Deno)
- Runtime: Deno with Hono framework
- CORS enabled for all origins (`origin: "*"`)
- Base path: `/make-server-232426bc/` (hardcoded prefix)
- KV Store keys: `registration:reg_{timestamp}_{random}` and `email:{lowercase_email}`

### Meta Pixel & GTM
Both deferred to `window.addEventListener('load')` for performance. See [MetaPixel.tsx](../src/app/components/MetaPixel.tsx) for conversion tracking pattern using `@/utils/metaConversionApi`.

### Admin Access
URL: `https://site.com#admin` → Default credentials in [AdminLogin.tsx](../src/app/components/AdminLogin.tsx): `admin`/`admin123`

## Build Configuration

Vite config ([vite.config.ts](../vite.config.ts)) has aggressive code-splitting:
- Manual chunks: `vendor-react`, `vendor-radix`, `vendor-motion`, `vendor-ui`
- Build target: `es2015` (not esnext) for broader browser support
- No sourcemaps in production
- 1000kb chunk size warning limit

## Common Patterns

**Modal Pattern**: All modals use Radix Dialog with controlled `isOpen` + `onClose` props
```tsx
<Dialog open={isOpen} onOpenChange={onClose}>
```

**Toast Notifications**: Import from sonner
```tsx
import { toast } from "sonner";
toast.error("Error message");
toast.success("Success message");
```

**API Calls**: Direct fetch with hardcoded Supabase URLs
```tsx
const response = await fetch(
  `https://${projectId}.supabase.co/functions/v1/make-server-232426bc/endpoint`,
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${publicAnonKey}`
    },
    body: JSON.stringify(data)
  }
);
```

## File Organization

- Components: `src/app/components/` (flat structure, no subdirs except `ui/`)
- UI library: `src/app/components/ui/` (47 Radix components, never edit directly)
- Styles: `src/styles/` (fonts, tailwind, theme imported via index.css)
- Utils: `src/utils/` (Meta API), root `utils/` (Supabase credentials)
- Edge functions: `supabase/functions/server/` (index.tsx + kv_store.tsx)

## Documentation Cross-Reference

- Setup: [QUICK_START.md](../QUICK_START.md)
- Deployment: [DEPLOY_NOW.md](../DEPLOY_NOW.md), [VERCEL_DEPLOYMENT_GUIDE.md](../VERCEL_DEPLOYMENT_GUIDE.md)
- Architecture: [ARCHITECTURE.md](../ARCHITECTURE.md) (detailed data flow diagrams)
- Admin: [ADMIN_LOGIN_CREDENTIALS.md](../ADMIN_LOGIN_CREDENTIALS.md)
- Performance: [PERFORMANCE_FIX_APPLIED.md](../PERFORMANCE_FIX_APPLIED.md)

## Favicon Configuration (Bulletproof)

All favicon files are in `/public/` and configured in [index.html](../index.html):
- `favicon.ico` - Legacy browsers (48x48 ICO)
- `favicon.svg` - Modern browsers (scalable SVG)
- `favicon-16x16.png`, `favicon-32x32.png` - Standard PNGs
- `apple-touch-icon.png` - iOS devices (180x180)
- `android-chrome-192x192.png`, `android-chrome-512x512.png` - Android/PWA
- `safari-pinned-tab.svg` - Safari pinned tabs (single-color silhouette)
- `browserconfig.xml` - Microsoft tiles
- `site.webmanifest` - PWA manifest with all icon sizes

MIME types configured in [vercel.json](../vercel.json) with 1-year cache headers.

## Key Gotchas

1. **Never modify `utils/supabase/info.tsx`** - auto-generated, contains live credentials
2. **Hash routing only** - no React Router, all navigation via `window.location.hash`
3. **Country code field required** - default +65 (Singapore) in registration form
4. **Images must be in public/images/** - builder logos, gallery photos, etc.
5. **Admin logout clears localStorage** - no backend session invalidation
6. **Timed popups stop after form submission** - checks `hasSubmitted` state + localStorage
7. **Deployment auto-triggers** - Figma Make or Vercel deploy on every git push to main branch
8. **Favicon updates** - After changing any favicon file, clear browser cache (Ctrl+Shift+R)
