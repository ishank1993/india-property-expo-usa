# ✅ Final Deployment Checklist

## Pre-Deployment Tasks

### 1. Test Registration Form ✅
- [x] Fill out form with test data
- [x] Verify data appears in Supabase
- [x] Check email validation
- [x] Test phone number validation
- [x] Verify success message displays
- [x] Check localStorage updates

**Test URL**: 
```
https://cbodmftxkjkutlrqamcn.supabase.co/functions/v1/make-server-232426bc/health
```
Expected response: `{"status":"ok"}`

---

### 2. Upload Real Images
- [ ] Main logo (`/public/logo.png`)
- [ ] Favicon (`/public/favicon.ico`)
- [ ] Builder logos (`/public/images/builders/`)
- [ ] Event gallery (`/public/images/gallery/`)
- [ ] OG image (`/public/og-image.png`)

**Action Items**:
1. Collect all image files
2. Optimize using TinyPNG: https://tinypng.com/
3. Upload to `/public/` folder via GitHub
4. Update component references if needed

---

### 3. Update Content
- [ ] Verify event dates are correct (31 Jan & 1 Feb 2026)
- [ ] Check venue address (Novotel Kitchener)
- [ ] Update builder names if needed
- [ ] Verify contact details (phone, email)
- [ ] Check social media links
- [ ] Update main website link if changed

---

### 4. Test All Navigation
- [ ] Desktop navigation menu
- [ ] Mobile hamburger menu
- [ ] Footer links
- [ ] Legal pages (Terms, Privacy, Disclaimer)
- [ ] Scroll anchors (#venues, #contact)
- [ ] External links (social media, main website)
- [ ] WhatsApp button

---

### 5. Mobile Responsiveness
Test on these devices:
- [ ] iPhone (375px)
- [ ] Android (360px)
- [ ] iPad (768px)
- [ ] Desktop (1920px)

**Test these elements**:
- [ ] Registration modal
- [ ] Navigation menu
- [ ] Forms and inputs
- [ ] Images scale properly
- [ ] Text is readable
- [ ] Buttons are clickable (48px min)

---

### 6. SEO Optimization
- [ ] Meta title is descriptive
- [ ] Meta description under 160 characters
- [ ] OG image uploaded and linked
- [ ] Favicon displays correctly
- [ ] Structured data for FAQs
- [ ] Alt text on all images

**Test with**:
- Google Search Console
- Facebook Sharing Debugger: https://developers.facebook.com/tools/debug/
- LinkedIn Post Inspector: https://www.linkedin.com/post-inspector/

---

### 7. Performance Check
- [ ] Images compressed
- [ ] No console errors
- [ ] Page loads under 3 seconds
- [ ] Lighthouse score above 90

**Run Lighthouse**:
1. Open DevTools (F12)
2. Go to "Lighthouse" tab
3. Click "Generate report"
4. Check all scores

---

### 8. Legal Compliance
- [ ] Cookie consent banner appears
- [ ] Privacy Policy updated
- [ ] Terms & Conditions reviewed
- [ ] Disclaimer page present
- [ ] MAS/MARS compliance footer on all pages
- [ ] Email addresses correct (info@nrinivesh.in)

---

## GitHub Setup

### 1. Create Repository
- [ ] Repository created on GitHub
- [ ] Description added
- [ ] README.md updated

```bash
git init
git add .
git commit -m "Initial commit: NRI Nivesh Property Expo 2026"
git remote add origin https://github.com/YOUR-USERNAME/nri-nivesh-property-expo.git
git branch -M main
git push -u origin main
```

### 2. Setup Branch Protection
- [ ] Protect `main` branch
- [ ] Require pull request reviews
- [ ] Enable status checks

### 3. Add Collaborators (if needed)
- [ ] Add team members
- [ ] Set appropriate permissions

---

## Supabase Configuration

### 1. Verify Functions are Running
- [ ] Check function status in dashboard
- [ ] Test health endpoint
- [ ] Review function logs

**Dashboard**: https://app.supabase.com/project/cbodmftxkjkutlrqamcn/functions

### 2. Monitor Usage
- [ ] Check function invocations
- [ ] Review error logs
- [ ] Monitor storage usage

### 3. Set up Alerts (Optional)
- [ ] Email alerts for errors
- [ ] Usage limit notifications

---

## Domain Configuration

### Option 1: Using Current Deployment (Figma Make)
- [x] Site already deployed
- [x] Auto-updates on changes
- [x] HTTPS enabled

**Current URL**: [Your Figma Make URL]

### Option 2: Custom Domain (Recommended)
**Suggested domain**: `expo.nrinivesh.in`

#### Using Vercel:
1. Go to: https://vercel.com/new
2. Import from GitHub
3. Connect repository
4. Deploy
5. Add custom domain in settings

#### DNS Settings:
```
Type: CNAME
Name: expo
Value: cname.vercel-dns.com
```

---

## Email Integration (Future)

### Setup Email Service (Recommended: Resend)

1. **Sign up**: https://resend.com/
2. **Get API key**
3. **Create email template**:
   - Welcome email
   - Registration confirmation
   - Event reminder

4. **Update backend** to send emails:
```typescript
// Add to registration endpoint
import { Resend } from 'npm:resend';

const resend = new Resend(Deno.env.get('RESEND_API_KEY'));

await resend.emails.send({
  from: 'NRI Nivesh <noreply@nrinivesh.in>',
  to: formData.email,
  subject: '🎉 Your NRI Property Expo Pass is Confirmed!',
  html: emailTemplate
});
```

---

## Analytics Setup

### Google Analytics

1. **Create GA4 Property**: https://analytics.google.com/
2. **Get Measurement ID**: G-XXXXXXXXXX
3. **Add to SEOHead.tsx**:

```typescript
<script
  async
  src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`}
></script>
<script
  dangerouslySetInnerHTML={{
    __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-XXXXXXXXXX');
    `,
  }}
/>
```

### Facebook Pixel (Optional)

1. **Get Pixel ID**: https://business.facebook.com/events_manager
2. **Add tracking code** to SEOHead.tsx
3. **Track registration events**

---

## Marketing Setup

### 1. Social Media Assets
- [ ] Create Facebook event
- [ ] Post on Instagram
- [ ] Share on LinkedIn
- [ ] Set up WhatsApp Business

### 2. Prepare Content
- [ ] Email campaign templates
- [ ] Social media posts
- [ ] WhatsApp broadcast message
- [ ] SMS campaign (if applicable)

### 3. Ads Setup (if running paid campaigns)
- [ ] Google Ads
- [ ] Facebook/Instagram Ads
- [ ] LinkedIn Ads
- [ ] Verify conversion tracking

---

## Launch Day Checklist

### Morning of Launch:
- [ ] Test registration form one final time
- [ ] Check Supabase functions are running
- [ ] Verify all images loading correctly
- [ ] Test on multiple devices
- [ ] Check WhatsApp button works
- [ ] Verify phone number is correct

### Monitor:
- [ ] Registration submissions in real-time
- [ ] Function logs for errors
- [ ] Website traffic (if analytics enabled)
- [ ] User feedback

### Support:
- [ ] Have phone ready for support calls
- [ ] Monitor email for questions
- [ ] Check WhatsApp messages
- [ ] Respond to social media comments

---

## Post-Launch Tasks

### Week 1:
- [ ] Export registration data
- [ ] Send confirmation emails (if setup)
- [ ] Share registration numbers on social media
- [ ] Fix any reported issues

### Week 2:
- [ ] Send event reminder emails
- [ ] Post updates on social media
- [ ] Respond to all queries
- [ ] Prepare for event day

### Before Event:
- [ ] Print attendee list
- [ ] Prepare registration desk materials
- [ ] Test check-in system
- [ ] Coordinate with venue

### After Event:
- [ ] Send thank you emails
- [ ] Share event photos
- [ ] Collect feedback
- [ ] Plan for next expo

---

## Backup & Security

### 1. Backup Registration Data
```bash
# Export all registrations
curl https://cbodmftxkjkutlrqamcn.supabase.co/functions/v1/make-server-232426bc/registrations \
  -H "Authorization: Bearer YOUR_KEY" > registrations-backup.json
```

### 2. Regular Backups
- [ ] Daily export during active registration period
- [ ] Store in multiple locations
- [ ] Keep offline backup

### 3. Security Monitoring
- [ ] Monitor function logs for unusual activity
- [ ] Check for failed login attempts
- [ ] Review CORS settings

---

## Emergency Contacts

### Technical Issues:
- **Supabase Support**: https://supabase.com/support
- **Figma Make Support**: [Support link]
- **Domain Provider**: [Your provider]

### Backup Plan:
If website goes down:
1. **Use offline registration**: Google Forms backup
2. **Share backup link** via social media
3. **Manual data entry** from backup form

**Backup Google Form**: [Create and link here]

---

## Success Metrics

### Track These KPIs:

**Website**:
- [ ] Total visitors
- [ ] Registration conversion rate
- [ ] Average time on site
- [ ] Bounce rate
- [ ] Mobile vs desktop traffic

**Registrations**:
- [ ] Total registrations
- [ ] Registrations by date
- [ ] Registrations by city preference
- [ ] Educational session signups
- [ ] Consultation bookings

**Marketing**:
- [ ] Email open rate
- [ ] Social media engagement
- [ ] Ad click-through rate
- [ ] Cost per registration

---

## Final Pre-Launch Test

### Run This Complete Test:

1. **Visit site** in incognito mode
2. **Click all navigation** links
3. **Fill out registration form** with test data
4. **Verify confirmation** message
5. **Check Supabase** for test entry
6. **Test on mobile** device
7. **Share on WhatsApp** to test OG image
8. **Check all links** in footer
9. **Test legal pages**
10. **Verify contact information**

---

## Launch Announcement Template

### Email:
```
Subject: 🎉 Register FREE for Singapore's Largest India Property Expo

Dear [Name],

We're excited to announce the NRI Nivesh India Property Exhibition 2026!

📅 Date: 31st Jan - 1st Feb 2026
📍 Venue: Novotel Kitchener Road, Singapore
🎟️ Entry: Completely FREE

Register now: [Your website URL]

See you there!
NRI Nivesh Team
```

### Social Media:
```
🏡 Singapore's Largest India Property Exhibition is HERE!

✨ 500+ Premium Projects
🏢 35+ Trusted Developers
🌍 15+ Indian Cities
💰 Properties from ₹30L to ₹15Cr

📅 31 Jan - 1 Feb 2026
📍 Novotel Kitchener, Singapore

Register FREE 👉 [Link]

#NRIInvestment #IndiaRealEstate #PropertyExpo #Singapore #NRINivesh
```

---

## Support & Resources

### Documentation:
- ✅ Setup Guide: `/SETUP_GUIDE.md`
- ✅ Image Management: `/IMAGE_MANAGEMENT.md`
- ✅ Navigation Test: `/NAVIGATION_TEST_CHECKLIST.md`

### Quick Links:
- **Supabase Dashboard**: https://app.supabase.com/project/cbodmftxkjkutlrqamcn
- **GitHub Repository**: [Your repo URL]
- **Live Website**: [Your website URL]

### Tools:
- **Image Optimization**: https://tinypng.com/
- **Favicon Generator**: https://favicon.io/
- **Meta Tags Checker**: https://metatags.io/
- **Mobile Test**: https://search.google.com/test/mobile-friendly

---

## 🎯 READY TO LAUNCH?

### Pre-Flight Checklist:
- [ ] All tests passed
- [ ] Images uploaded
- [ ] Content verified
- [ ] Registration form working
- [ ] Mobile responsive
- [ ] Legal pages complete
- [ ] Contact details correct
- [ ] Backup plan ready

### Launch Commands:
```bash
# Final commit
git add .
git commit -m "Final pre-launch updates"
git push origin main

# Tag this release
git tag -a v1.0.0 -m "Launch version - NRI Property Expo 2026"
git push origin v1.0.0
```

---

**🚀 You're ready to launch! Good luck with your NRI Property Expo 2026!**

**Need help?** Check the console logs, Supabase function logs, or reach out to support.
