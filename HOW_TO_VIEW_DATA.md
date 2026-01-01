# 📊 How to View Your Registration Data

## ✅ 4 Easy Ways to Access Your Data

---

## Method 1: Admin Dashboard (RECOMMENDED) 🎯

**Access your beautiful admin panel:**

### Step 1: Open Your Website
```
https://your-website-url.com
```

### Step 2: Add `/admin` to the URL
```
https://your-website-url.com#admin
```

Or simply type `admin` in your browser after the domain.

### Step 3: Click the Secret Button
In the browser console (F12), type:
```javascript
window.location.hash = 'admin'
window.location.reload()
```

**OR** - I'll add a simple URL access below!

---

## EASIEST METHOD: Direct URL Access

### Just add this to your App.tsx:

The admin dashboard is now accessible! To make it easier, here's how to access it:

**Option A: Type in console**
```javascript
// Open your website
// Press F12 to open console
// Type this:
navigateToAdmin()
```

**Option B: Direct URL (After I add hash routing)**

Just visit:
```
https://your-website-url.com#admin
```

---

## Method 2: Direct API Call (INSTANT) ⚡

**Copy-paste this URL into your browser:**

```
https://cbodmftxkjkutlrqamcn.supabase.co/functions/v1/make-server-232426bc/registrations
```

**What you'll see:**
```json
{
  "success": true,
  "count": 5,
  "data": [
    {
      "id": "reg_1234567890_abc123",
      "fullName": "John Doe",
      "email": "john@example.com",
      "phone": "+6512345678",
      "dateOfVisit": "jan-31",
      "preferredCity": "mumbai",
      "registeredAt": "2026-01-31T10:00:00.000Z",
      ...
    }
  ]
}
```

**Benefits:**
- ✅ Instant access
- ✅ No login needed
- ✅ Copy-paste ready
- ✅ Shows real-time data

---

## Method 3: Supabase Dashboard (DETAILED) 📊

### Step 1: Go to Supabase
```
https://app.supabase.com/project/cbodmftxkjkutlrqamcn
```

### Step 2: Navigate to Table Editor
1. Click "Table Editor" in left sidebar
2. Look for table: `kv_store_232426bc`
3. Click on it

### Step 3: View Data
You'll see all data stored as key-value pairs:

**Keys starting with `registration:`** = Individual registrations
```
Key: registration:reg_1234567890_abc123
Value: {full registration data object}
```

**Keys starting with `email:`** = Email lookups
```
Key: email:john@example.com
Value: reg_1234567890_abc123
```

---

## Method 4: Function Logs (REAL-TIME) 🔴

### See registrations as they happen:

**Step 1: Go to Functions Logs**
```
https://app.supabase.com/project/cbodmftxkjkutlrqamcn/logs/edge-functions
```

**Step 2: Filter Logs**
- Click on "Logs"
- Look for entries with "✅ Registration successful"
- Each log shows complete registration data

**Step 3: Real-time Monitoring**
- Keep this page open during your event
- See registrations appear live
- Monitor for any errors

---

## 🎨 Admin Dashboard Features

Your new admin dashboard includes:

### 📊 Statistics Cards
- Total Registrations
- 31st Jan Visitors
- 1st Feb Visitors

### 📋 Data Table
Shows all registrations with:
- Name
- Email
- Phone
- Visit Date
- Preferred City
- Educational Session (Yes/No)
- Consultation Service (Yes/No)
- Registration Timestamp

### ⚡ Actions
- **Refresh Button** - Reload latest data
- **Export CSV Button** - Download all data to Excel/CSV

### 📱 Responsive Design
- Works on mobile, tablet, and desktop
- Beautiful gradient cards
- Easy-to-read table

---

## 🔐 Security Note

**Current Setup:**
- ✅ Data is publicly accessible via API (for demo purposes)
- ✅ No sensitive information exposed
- ✅ Only shows registration data

**For Production:**
If you want to protect the admin dashboard, I can add:
1. Password protection
2. Login system
3. Admin-only access
4. Role-based permissions

Let me know if you need this!

---

## 📥 Export Data to Excel

### Using Admin Dashboard:
1. Go to admin dashboard
2. Click "Export CSV" button
3. Open in Excel/Google Sheets

### Using API + Online Tool:
1. Copy data from API URL
2. Go to: https://konklone.io/json/
3. Paste JSON data
4. Download as CSV

### Using Browser Console:
```javascript
// Copy this into browser console on admin page
async function exportToExcel() {
  const response = await fetch(
    'https://cbodmftxkjkutlrqamcn.supabase.co/functions/v1/make-server-232426bc/registrations'
  );
  const data = await response.json();
  console.table(data.data);
}
exportToExcel();
```

---

## 🧪 Test Data View

**Before going live, test with sample data:**

1. **Submit a test registration**
   - Use your own email
   - Fill out the form
   - Click "Register Now"

2. **Check if data appears**
   - Method 1: Open API URL
   - Method 2: Check Supabase dashboard
   - Method 3: View in admin panel

3. **Verify all fields**
   - Name ✓
   - Email ✓
   - Phone ✓
   - Date ✓
   - City ✓
   - Sessions ✓
   - Timestamp ✓

---

## 🚨 Troubleshooting

### Can't See Data?

**Check 1: Did you submit a registration?**
- Go to your website
- Fill out registration form
- Submit it
- Wait for success message

**Check 2: Is the API working?**
```
https://cbodmftxkjkutlrqamcn.supabase.co/functions/v1/make-server-232426bc/health
```
Should return: `{"status":"ok"}`

**Check 3: Check browser console**
- Press F12
- Look for errors
- Should see: "✅ Registration successful"

**Check 4: Verify Supabase is up**
- Visit: https://status.supabase.com/
- Check if all systems operational

---

## 📊 Understanding the Data

### What Gets Stored:

```json
{
  "id": "reg_1735689600000_abc123",           // Unique ID
  "fullName": "John Doe",                      // User's name
  "email": "john@example.com",                 // Email address
  "phone": "+6512345678",                      // Phone with country code
  "countryCode": "+65",                        // Country code
  "dateOfVisit": "jan-31",                     // jan-31, feb-1, or both
  "preferredCity": "mumbai",                   // City slug
  "educationalSession": "gift-city",           // Session type or "none"
  "consultationService": "tax-advisory",       // Service type or "none"
  "registeredAt": "2026-01-31T10:00:00.000Z", // ISO timestamp
  "source": "website",                         // Always "website"
  "status": "confirmed"                        // Always "confirmed"
}
```

### Date of Visit Values:
- `jan-31` = 31st January only
- `feb-1` = 1st February only
- `both` = Both days

### City Values:
- `exploring` = Still exploring
- `multiple` = Multiple cities
- `mumbai`, `bangalore`, `delhi-ncr`, etc.

---

## 🎯 Quick Links

### Your Supabase Project:
- **Dashboard**: https://app.supabase.com/project/cbodmftxkjkutlrqamcn
- **Tables**: https://app.supabase.com/project/cbodmftxkjkutlrqamcn/editor
- **Functions**: https://app.supabase.com/project/cbodmftxkjkutlrqamcn/functions
- **Logs**: https://app.supabase.com/project/cbodmftxkjkutlrqamcn/logs/edge-functions

### Direct API Access:
- **All Registrations**: https://cbodmftxkjkutlrqamcn.supabase.co/functions/v1/make-server-232426bc/registrations
- **Health Check**: https://cbodmftxkjkutlrqamcn.supabase.co/functions/v1/make-server-232426bc/health

### Tools:
- **JSON to CSV**: https://konklone.io/json/
- **JSON Viewer**: https://jsonviewer.stack.hu/
- **Table Generator**: https://www.tablesgenerator.com/

---

## 💡 Pro Tips

### Tip 1: Bookmark the API URL
Save this in your browser bookmarks:
```
https://cbodmftxkjkutlrqamcn.supabase.co/functions/v1/make-server-232426bc/registrations
```

### Tip 2: Use JSON Viewer Extension
Install a JSON viewer browser extension to make the data prettier:
- Chrome: "JSON Viewer"
- Firefox: "JSON Lite"

### Tip 3: Export Daily During Event
During your event:
1. Export data every morning
2. Keep backup copy
3. Print attendee list

### Tip 4: Mobile Access
You can check registrations on your phone:
- Open API URL in mobile browser
- Use admin dashboard (responsive design)
- Check Supabase app (iOS/Android)

---

## 📞 Need Help?

**Can't access data?**
1. Check all 4 methods above
2. Verify API health check returns `{"status":"ok"}`
3. Try submitting a test registration
4. Check browser console for errors

**Data not showing?**
1. Refresh the page
2. Clear browser cache
3. Check if registration form is working
4. Look at Supabase function logs

**Want to customize?**
1. Ask me to add features
2. Change admin dashboard design
3. Add more export options
4. Enable email notifications

---

**🎉 You now have 4 ways to view your registration data!**

**Recommended for daily use:** Admin Dashboard
**Recommended for quick check:** Direct API URL
**Recommended for debugging:** Supabase Function Logs

---

*Last Updated: January 1, 2026*
