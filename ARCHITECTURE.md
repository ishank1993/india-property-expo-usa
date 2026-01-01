# 🔄 System Architecture & Data Flow

## System Overview

```
┌─────────────────────────────────────────────────────────────────┐
│                    NRI NIVESH PROPERTY EXPO                      │
│                  Complete System Architecture                    │
└─────────────────────────────────────────────────────────────────┘
```

## 1. User Journey Flow

```
┌──────────┐         ┌──────────┐         ┌──────────┐         ┌──────────┐
│  User    │         │  Browse  │         │  Click   │         │  Fill    │
│  Visits  │────────▶│  Website │────────▶│ Register │────────▶│   Form   │
│  Site    │         │  Content │         │  Button  │         │          │
└──────────┘         └──────────┘         └──────────┘         └──────────┘
                                                                       │
                                                                       ▼
┌──────────┐         ┌──────────┐         ┌──────────┐         ┌──────────┐
│  Receive │         │  Data    │         │ Validate │         │  Submit  │
│  Confirm │◀────────│  Stored  │◀────────│   Data   │◀────────│   Form   │
│  Message │         │ Supabase │         │  Client  │         │          │
└──────────┘         └──────────┘         └──────────┘         └──────────┘
```

---

## 2. Data Flow Architecture

```
┌─────────────────────────────────────────────────────────────────────┐
│                           FRONTEND (React)                           │
│  ┌─────────────────────────────────────────────────────────────┐   │
│  │                   RegistrationModal.tsx                      │   │
│  │  ┌────────────┐  ┌────────────┐  ┌────────────────────┐   │   │
│  │  │   Form     │  │ Validation │  │  Submit Handler    │   │   │
│  │  │  Inputs    │─▶│   Logic    │─▶│  (Supabase Call)   │   │   │
│  │  └────────────┘  └────────────┘  └────────────────────┘   │   │
│  └─────────────────────────────┬───────────────────────────────┘   │
└────────────────────────────────┼─────────────────────────────────┘
                                 │
                                 │ HTTPS POST
                                 │ Authorization: Bearer [key]
                                 │ Content-Type: application/json
                                 │
                                 ▼
┌─────────────────────────────────────────────────────────────────────┐
│                    SUPABASE EDGE FUNCTIONS (Deno)                    │
│  ┌─────────────────────────────────────────────────────────────┐   │
│  │                    server/index.tsx                          │   │
│  │  ┌────────────┐  ┌────────────┐  ┌────────────────────┐   │   │
│  │  │  Receive   │  │  Validate  │  │  Generate Unique   │   │   │
│  │  │  Request   │─▶│   Fields   │─▶│  Registration ID   │   │   │
│  │  └────────────┘  └────────────┘  └────────────────────┘   │   │
│  │                                            │                 │   │
│  │                                            ▼                 │   │
│  │                                  ┌────────────────────┐    │   │
│  │                                  │  Store in KV Store │    │   │
│  │                                  │  - By ID           │    │   │
│  │                                  │  - By Email        │    │   │
│  │                                  └────────────────────┘    │   │
│  └─────────────────────────────────────────────────────────────┘   │
└────────────────────────────────┬────────────────────────────────────┘
                                 │
                                 │ Response: Success/Error
                                 │
                                 ▼
┌─────────────────────────────────────────────────────────────────────┐
│                    SUPABASE KV STORE (Database)                      │
│  ┌─────────────────────────────────────────────────────────────┐   │
│  │  Key: registration:reg_123456789_abc                        │   │
│  │  Value: {                                                    │   │
│  │    id, fullName, email, phone, dateOfVisit,                 │   │
│  │    preferredCity, educationalSession,                        │   │
│  │    consultationService, registeredAt, status                 │   │
│  │  }                                                            │   │
│  └─────────────────────────────────────────────────────────────┘   │
│  ┌─────────────────────────────────────────────────────────────┐   │
│  │  Key: email:john@example.com                                │   │
│  │  Value: reg_123456789_abc  (points to registration ID)      │   │
│  └─────────────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────────┘
```

---

## 3. Registration Form Validation Flow

```
┌─────────────────────────────────────────────────────────────────┐
│                      Form Field Validation                       │
└─────────────────────────────────────────────────────────────────┘

User Types ─┐
            │
            ▼
┌──────────────────┐
│   Full Name      │────▶ Check: Not empty
└──────────────────┘      ├─ Valid ───────┐
                          └─ Invalid ──────┼──▶ Show Error Toast
                                            │
┌──────────────────┐                       │
│   Email          │────▶ Check: Valid email format
└──────────────────┘      ├─ Valid ───────┤
                          └─ Invalid ──────┤
                                            │
┌──────────────────┐                       │
│   Phone          │────▶ Check: 7-15 digits, numbers only
└──────────────────┘      ├─ Valid ───────┤
                          └─ Invalid ──────┤
                                            │
┌──────────────────┐                       │
│   Country Code   │────▶ Selected: Default +65
└──────────────────┘                       │
                                            │
┌──────────────────┐                       │
│   Date of Visit  │────▶ Check: Date selected
└──────────────────┘      ├─ Valid ───────┤
                          └─ Invalid ──────┤
                                            │
┌──────────────────┐                       │
│   City           │────▶ Check: City selected
└──────────────────┘      ├─ Valid ───────┤
                          └─ Invalid ──────┤
                                            │
┌──────────────────┐                       │
│   Terms Checkbox │────▶ Check: Checked
└──────────────────┘      ├─ Valid ───────┤
                          └─ Invalid ──────┤
                                            │
                          All Valid? ──────┘
                                │
                                ▼
                          ┌──────────┐
                          │  Submit  │
                          │ to API   │
                          └──────────┘
```

---

## 4. Backend API Endpoints

```
┌─────────────────────────────────────────────────────────────────┐
│                    SUPABASE EDGE FUNCTIONS                       │
└─────────────────────────────────────────────────────────────────┘

Base URL: https://cbodmftxkjkutlrqamcn.supabase.co/functions/v1/make-server-232426bc

┌───────────────────────────────────────────────────────────────┐
│  POST /register                                                │
│  ─────────────────────────────────────────────────────────── │
│  Purpose: Create new registration                             │
│  Input:   {fullName, email, phone, countryCode, ...}         │
│  Output:  {success: true, registrationId, data}               │
│  Error:   {success: false, error: "message"}                  │
└───────────────────────────────────────────────────────────────┘

┌───────────────────────────────────────────────────────────────┐
│  GET /registration/:email                                      │
│  ─────────────────────────────────────────────────────────── │
│  Purpose: Check if email is registered                        │
│  Input:   Email in URL parameter                              │
│  Output:  {success: true, data: {...}}                        │
│  Error:   {success: false, message: "Not found"}              │
└───────────────────────────────────────────────────────────────┘

┌───────────────────────────────────────────────────────────────┐
│  GET /registrations                                            │
│  ─────────────────────────────────────────────────────────── │
│  Purpose: Get all registrations (Admin)                       │
│  Input:   None                                                 │
│  Output:  {success: true, count: N, data: [...]}              │
│  Auth:    Requires Authorization header                       │
└───────────────────────────────────────────────────────────────┘

┌───────────────────────────────────────────────────────────────┐
│  GET /health                                                   │
│  ─────────────────────────────────────────────────────────── │
│  Purpose: System health check                                 │
│  Input:   None                                                 │
│  Output:  {status: "ok"}                                       │
└───────────────────────────────────────────────────────────────┘
```

---

## 5. Image Management Workflow

```
┌─────────────────────────────────────────────────────────────────┐
│                     IMAGE UPLOAD WORKFLOW                        │
└─────────────────────────────────────────────────────────────────┘

Step 1: Prepare Images
─────────────────────────
┌─────────────┐
│  Designer   │
│  Provides   │──▶ Collect all images
│  Images     │    - Logo
└─────────────┘    - Builder logos
                   - Event photos
                   - Favicon
                   │
                   ▼
Step 2: Optimize
─────────────────
┌─────────────┐
│  TinyPNG    │──▶ Compress images (50-70% reduction)
│  Squoosh    │    Keep quality high
└─────────────┘    Maintain dimensions
                   │
                   ▼
Step 3: Organize
─────────────────
┌─────────────┐
│  Folder     │──▶ public/
│  Structure  │    ├── logo.png
└─────────────┘    ├── favicon.ico
                   └── images/
                       ├── builders/
                       ├── gallery/
                       └── hero/
                   │
                   ▼
Step 4: Upload
─────────────────
┌─────────────┐
│  GitHub     │──▶ Method A: Web Interface
│  Upload     │    - Navigate to folder
└─────────────┘    - Upload files
                   - Commit
                   │
                   │    Method B: GitHub Desktop
                   │    - Drag & drop
                   │    - Commit & push
                   │
                   ▼
Step 5: Update Code (if needed)
────────────────────────────────
┌─────────────┐
│  Component  │──▶ Update image paths
│  References │    - BuilderLogos.tsx
└─────────────┘    - Gallery.tsx
                   - Hero.tsx
                   │
                   ▼
Step 6: Deploy
─────────────────
┌─────────────┐
│  Auto       │──▶ Push to GitHub
│  Deploy     │    Wait 1-2 minutes
└─────────────┘    Images live!
```

---

## 6. Page Navigation Structure

```
┌─────────────────────────────────────────────────────────────────┐
│                         WEBSITE STRUCTURE                        │
└─────────────────────────────────────────────────────────────────┘

                          ┌─────────────┐
                          │   NAVBAR    │
                          │  (Always    │
                          │   Visible)  │
                          └──────┬──────┘
                                 │
                 ┌───────────────┼───────────────┐
                 │               │               │
                 ▼               ▼               ▼
        ┌────────────┐  ┌────────────┐  ┌────────────┐
        │   Home     │  │   Wealth   │  │   Legal    │
        │   Page     │  │   Page     │  │   Pages    │
        └────────────┘  └────────────┘  └────────────┘
              │               │               │
              │               │               └──┬── Terms
              │               │                  ├── Privacy
              │               │                  └── Disclaimer
              │               │
              ▼               ▼
     ┌────────────────┐ ┌────────────────┐
     │ - Hero         │ │ - Tax Clinic   │
     │ - Services     │ │ - GIFT City    │
     │ - Builders     │ │ - Consultations│
     │ - Presence Map │ └────────────────┘
     │ - Why Attend   │
     │ - Investments  │
     │ - Gallery      │
     │ - FAQ          │
     │ - Location     │
     │ - Testimonials │
     └────────────────┘
              │
              ▼
        ┌──────────┐
        │  FOOTER  │
        │ (Always) │
        └──────────┘
              │
              ▼
     ┌─────────────────┐
     │ Compliance      │
     │ Footer (Always) │
     └─────────────────┘
```

---

## 7. Component Hierarchy

```
App.tsx
│
├── SEOHead
│   ├── Meta tags
│   ├── Structured data
│   └── Open Graph
│
├── Favicon
│
├── Navbar
│   ├── Logo
│   ├── Navigation links
│   ├── Register button
│   └── Mobile menu
│
├── Page Content (Conditional)
│   │
│   ├── Home Page
│   │   ├── Hero
│   │   ├── ServicesSection
│   │   ├── BuilderLogos
│   │   ├── IndiaPresence
│   │   ├── WhyAttend
│   │   ├── InvestmentOpportunities
│   │   ├── Gallery
│   │   ├── FAQSection
│   │   ├── Location
│   │   └── Testimonials
│   │
│   ├── Wealth Page
│   │   ├── Tax Clinic section
│   │   ├── GIFT City section
│   │   └── Consultation services
│   │
│   └── Legal Pages
│       ├── TermsConditions
│       ├── PrivacyPolicy
│       └── Disclaimer
│
├── Footer
│   ├── Brand & mission
│   ├── Quick links
│   ├── Legal links
│   └── Contact info
│
├── ComplianceFooter
│   └── MAS/MARS disclaimer
│
├── WhatsAppButton (Floating)
│
├── CookieConsent (Popup)
│
└── RegistrationModal (Popup)
    ├── Form fields
    ├── Validation
    ├── Submit handler
    └── Success screen
```

---

## 8. State Management Flow

```
┌─────────────────────────────────────────────────────────────────┐
│                      APPLICATION STATE                           │
└─────────────────────────────────────────────────────────────────┘

App.tsx (Main State)
├── currentPage: "home" | "wealth" | "terms" | "privacy" | "disclaimer"
├── isRegisterOpen: boolean
├── popupCount: number (0-4)
├── hasSubmitted: boolean
│
│   ┌────────────────────────────────────────┐
│   │  RegistrationModal.tsx (Local State)  │
│   ├────────────────────────────────────────┤
│   ├── formData: {                          │
│   │     fullName, email, phone,            │
│   │     countryCode, dateOfVisit,          │
│   │     preferredCity,                     │
│   │     educationalSession,                │
│   │     consultationService,               │
│   │     agreeToTerms                       │
│   │   }                                    │
│   ├── isSubmitting: boolean                │
│   ├── isSuccess: boolean                   │
│   └────────────────────────────────────────┘
│
└── LocalStorage
    ├── registrationSubmitted: "true" | null
    ├── registrationId: string | null
    └── cookieConsent: "accepted" | "rejected" | null
```

---

## 9. Security & Data Flow

```
┌─────────────────────────────────────────────────────────────────┐
│                         SECURITY LAYERS                          │
└─────────────────────────────────────────────────────────────────┘

User Input
    │
    ▼
┌────────────────┐
│  Client-Side   │  ✅ Email format validation
│  Validation    │  ✅ Phone number validation
└────────────────┘  ✅ Required field checks
    │               ✅ Terms acceptance check
    ▼
┌────────────────┐
│  HTTPS         │  ✅ Encrypted transmission
│  Connection    │  ✅ SSL/TLS certificate
└────────────────┘
    │
    ▼
┌────────────────┐
│  Authorization │  ✅ Bearer token required
│  Header        │  ✅ Public anon key (safe)
└────────────────┘
    │
    ▼
┌────────────────┐
│  Backend       │  ✅ Re-validate all fields
│  Validation    │  ✅ Sanitize inputs
└────────────────┘  ✅ Check data types
    │
    ▼
┌────────────────┐
│  Supabase      │  ✅ Row Level Security
│  Security      │  ✅ API rate limiting
└────────────────┘  ✅ Audit logs
    │
    ▼
┌────────────────┐
│  KV Store      │  ✅ Encrypted at rest
│  (Database)    │  ✅ Automatic backups
└────────────────┘  ✅ Access controls
```

---

## 10. Deployment Pipeline

```
┌─────────────────────────────────────────────────────────────────┐
│                      DEPLOYMENT WORKFLOW                         │
└─────────────────────────────────────────────────────────────────┘

Developer
    │
    │  1. Make changes locally
    │
    ▼
┌─────────────┐
│  Git Commit │  git add .
│             │  git commit -m "message"
└─────────────┘
    │
    │  2. Push to GitHub
    │
    ▼
┌─────────────┐
│   GitHub    │  git push origin main
│  Repository │
└─────────────┘
    │
    │  3. Automatic trigger
    │
    ▼
┌─────────────┐
│   Deploy    │  Figma Make / Vercel
│   Service   │  - Build project
└─────────────┘  - Run tests
    │            - Deploy to CDN
    │
    │  4. Live in ~2 minutes
    │
    ▼
┌─────────────┐
│    Live     │  Website updated
│   Website   │  Users see changes
└─────────────┘
```

---

## 11. Monitoring & Analytics

```
┌─────────────────────────────────────────────────────────────────┐
│                     MONITORING DASHBOARD                         │
└─────────────────────────────────────────────────────────────────┘

┌──────────────────┐  ┌──────────────────┐  ┌──────────────────┐
│  Supabase Logs   │  │  Browser Console │  │  Google Analytics│
│  ──────────────  │  │  ──────────────  │  │  ──────────────  │
│  • Function runs │  │  • Client errors │  │  • Page views    │
│  • API responses │  │  • Network fails │  │  • User flow     │
│  • Error logs    │  │  • Performance   │  │  • Conversions   │
│  • Registration  │  │  • Warnings      │  │  • Traffic       │
└──────────────────┘  └──────────────────┘  └──────────────────┘
         │                     │                      │
         └─────────────────────┴──────────────────────┘
                               │
                               ▼
                     ┌──────────────────┐
                     │   Monitoring     │
                     │   Dashboard      │
                     │  ──────────────  │
                     │  • Total regs    │
                     │  • Conversion %  │
                     │  • Error rate    │
                     │  • Performance   │
                     └──────────────────┘
```

---

## 12. Backup & Recovery Flow

```
┌─────────────────────────────────────────────────────────────────┐
│                    BACKUP STRATEGY                               │
└─────────────────────────────────────────────────────────────────┘

Primary Data (Supabase KV Store)
    │
    ├──▶ Automatic Backups (Supabase)
    │    ├── Every 24 hours
    │    └── Retention: 7 days
    │
    ├──▶ Manual Export (Daily during active period)
    │    ├── curl API endpoint
    │    ├── Save to JSON file
    │    └── Store in multiple locations
    │
    └──▶ Code Backup (GitHub)
         ├── Git version control
         ├── Tag releases
         └── Branch protection

Recovery Process
    │
    ├──▶ Scenario 1: Data corruption
    │    └── Restore from latest backup
    │
    ├──▶ Scenario 2: Accidental deletion
    │    └── Revert to previous Git commit
    │
    └──▶ Scenario 3: Complete failure
         └── Deploy backup instance
              Use exported data
              Restore from GitHub
```

---

**📊 This architecture ensures:**
- ✅ Fast performance
- ✅ Data security
- ✅ Easy scalability
- ✅ Simple maintenance
- ✅ Quick recovery

**🔍 For detailed implementation, see:**
- `/SETUP_GUIDE.md` - Complete setup
- `/IMAGE_MANAGEMENT.md` - Image handling
- `/DEPLOYMENT_CHECKLIST.md` - Launch prep

