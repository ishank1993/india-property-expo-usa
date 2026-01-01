# 🔐 Admin Dashboard Login Credentials

## ✨ Quick Access

### Admin Dashboard URL:
```
https://your-website-url.com#admin
```

---

## 🔑 Default Login Credentials

### Username:
```
admin
```

### Password:
```
admin123
```

---

## ⚙️ How to Change Credentials

### Method 1: Edit the Code (Recommended for Production)

Open the file: `/src/app/components/AdminLogin.tsx`

Find this section (around line 24-28):

```typescript
// Check credentials
// Default credentials: admin / admin123
// You can change these by setting environment variables or in the code below
const validUsername = "admin";
const validPassword = "admin123";
```

**Change to your desired credentials:**

```typescript
const validUsername = "your-new-username";
const validPassword = "your-new-secure-password";
```

**Save the file and redeploy!**

---

## 🔒 Security Features

### Session Management:
- ✅ 24-hour session timeout
- ✅ Automatic logout after expiration
- ✅ Secure localStorage storage
- ✅ Login timestamp tracking

### What Gets Stored:
```javascript
localStorage.setItem("adminAuthenticated", "true")
localStorage.setItem("adminLoginTime", "2026-01-31T10:00:00.000Z")
```

### Session Check:
- Every time you visit `#admin`
- Checks if session is less than 24 hours old
- Auto-logout if expired

---

## 🚀 Quick Login Flow

1. **Visit:** `yoursite.com#admin`
2. **Enter:**
   - Username: `admin`
   - Password: `admin123`
3. **Click:** "Login to Dashboard"
4. **Done!** You're in the dashboard

---

## 🔐 Security Best Practices

### ⚠️ BEFORE GOING LIVE:

1. **Change Default Password**
   - Use a strong, unique password
   - Minimum 12 characters
   - Mix of letters, numbers, symbols

2. **Don't Share Credentials**
   - Keep login details private
   - Only share with authorized team members

3. **Use HTTPS**
   - Always access over secure connection
   - Never use HTTP for admin access

4. **Regular Password Changes**
   - Change password every 90 days
   - Use password manager

5. **Monitor Access**
   - Check who's accessing the dashboard
   - Review session logs

---

## 🔄 Logout Procedure

### To Logout:
1. Click the "**Logout**" button (top right)
2. Or close the browser tab
3. Or wait 24 hours for auto-logout

### What Happens on Logout:
- ✅ Session cleared from localStorage
- ✅ Redirected to login page
- ✅ Dashboard data cleared from memory

---

## 🛡️ Advanced Security (Optional)

### Want Better Security?

I can add:

1. **Two-Factor Authentication (2FA)**
   - SMS verification
   - Email OTP
   - Authenticator app

2. **Role-Based Access**
   - Admin role (full access)
   - Viewer role (read-only)
   - Editor role (limited access)

3. **IP Whitelisting**
   - Only allow specific IPs
   - Block unauthorized locations

4. **Audit Logs**
   - Track who logged in
   - Monitor data exports
   - Record all actions

5. **Password Reset**
   - Email-based reset
   - Security questions
   - Admin-initiated reset

**Let me know if you want any of these features!**

---

## 📱 Access from Multiple Devices

### Same Credentials Work On:
- ✅ Desktop computer
- ✅ Laptop
- ✅ Tablet
- ✅ Mobile phone
- ✅ Any web browser

### Each Device:
- Has its own 24-hour session
- Stores session independently
- Can be logged out separately

---

## ❓ Troubleshooting Login Issues

### Can't Login?

**Issue: "Invalid credentials" error**
- ✅ Double-check username: `admin`
- ✅ Double-check password: `admin123`
- ✅ Check for extra spaces
- ✅ Make sure Caps Lock is off

**Issue: Page won't load**
- ✅ Check URL ends with `#admin`
- ✅ Clear browser cache
- ✅ Try incognito/private mode
- ✅ Check internet connection

**Issue: Session expires too quickly**
- ✅ Current timeout: 24 hours
- ✅ Don't clear browser data
- ✅ Stay on same browser

**Issue: Forgot to change default password**
- ✅ Edit AdminLogin.tsx file
- ✅ Change validUsername and validPassword
- ✅ Redeploy the site

---

## 🎯 Quick Reference Card

**Print this out and keep it safe:**

```
═══════════════════════════════════════════
    NRI NIVESH ADMIN DASHBOARD ACCESS
═══════════════════════════════════════════

URL:       yoursite.com#admin

Username:  admin
Password:  admin123

Session:   24 hours
Security:  Password protected

═══════════════════════════════════════════
        ⚠️  KEEP THIS CONFIDENTIAL  ⚠️
═══════════════════════════════════════════
```

---

## 📞 Support

**Need Help?**
- Check SQL queries: `/SUPABASE_SQL_QUERIES.md`
- View data guide: `/HOW_TO_VIEW_DATA.md`
- Quick reference: `/VIEW_DATA_QUICK.md`

**Can't Access Dashboard?**
1. Verify URL has `#admin` at the end
2. Check credentials are correct
3. Clear browser cache
4. Try different browser

---

## 🎉 Summary

✅ **Default Login:** `admin` / `admin123`
✅ **Access URL:** Add `#admin` to your website
✅ **Session:** 24 hours automatic timeout
✅ **Change Password:** Edit AdminLogin.tsx file
✅ **Logout:** Click logout button or wait 24 hours

**Remember to change the default password before going live!**

---

*Last Updated: January 1, 2026*
*For internal use only - Keep confidential*
