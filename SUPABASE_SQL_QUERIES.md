# 📊 SQL Queries for Supabase - View Your Data Beautifully

## 🎯 How to Run These Queries in Supabase

### Step 1: Open SQL Editor
1. Go to: https://app.supabase.com/project/cbodmftxkjkutlrqamcn
2. Click "**SQL Editor**" in the left sidebar
3. Click "**New Query**" button

### Step 2: Copy & Paste SQL Query
- Copy any query below
- Paste it in the SQL editor
- Click "**Run**" button (or press Ctrl+Enter)

### Step 3: View Results
- Results appear in the table below
- You can export to CSV
- Sort and filter the data

---

## 📋 QUERY 1: View All Registrations (Pretty Format)

This query shows all registration data in a clean, readable format:

```sql
-- View All Registrations in Readable Format
SELECT 
  value->>'id' AS registration_id,
  value->>'fullName' AS full_name,
  value->>'email' AS email,
  value->>'phone' AS phone,
  value->>'countryCode' AS country_code,
  CASE 
    WHEN value->>'dateOfVisit' = 'apr-18' THEN '18 Apr 2026'
    WHEN value->>'dateOfVisit' = 'apr-19' THEN '19 Apr 2026'
    WHEN value->>'dateOfVisit' = 'both' THEN 'Both Days'
    ELSE value->>'dateOfVisit'
  END AS date_of_visit,
  REPLACE(REPLACE(value->>'preferredCity', '-', ' '), '_', ' ') AS preferred_city,
  CASE 
    WHEN value->>'educationalSession' = 'none' THEN 'None'
    ELSE REPLACE(REPLACE(value->>'educationalSession', '-', ' '), '_', ' ')
  END AS educational_session,
  CASE 
    WHEN value->>'consultationService' = 'none' THEN 'None'
    ELSE REPLACE(REPLACE(value->>'consultationService', '-', ' '), '_', ' ')
  END AS consultation_service,
  TO_CHAR(
    (value->>'registeredAt')::timestamp AT TIME ZONE 'Asia/Singapore',
    'DD Mon YYYY, HH24:MI'
  ) AS registered_at_singapore_time,
  value->>'status' AS status
FROM kv_store_232426bc
WHERE key LIKE 'registration:%'
ORDER BY (value->>'registeredAt')::timestamp DESC;
```

**What this shows:**
- ✅ All registrations in clean format
- ✅ Dates formatted nicely
- ✅ City names without dashes
- ✅ Singapore timezone
- ✅ Sorted by newest first

---

## 📊 QUERY 2: Registration Statistics Summary

Get a quick overview of your registrations:

```sql
-- Registration Statistics Dashboard
SELECT 
  COUNT(*) AS total_registrations,
  COUNT(CASE WHEN value->>'dateOfVisit' = 'apr-18' THEN 1 END) AS apr_18_only,
  COUNT(CASE WHEN value->>'dateOfVisit' = 'apr-19' THEN 1 END) AS apr_19_only,
  COUNT(CASE WHEN value->>'dateOfVisit' = 'both' THEN 1 END) AS both_days,
  COUNT(CASE WHEN value->>'educationalSession' != 'none' THEN 1 END) AS with_educational_session,
  COUNT(CASE WHEN value->>'consultationService' != 'none' THEN 1 END) AS with_consultation_service,
  MIN((value->>'registeredAt')::timestamp) AS first_registration,
  MAX((value->>'registeredAt')::timestamp) AS latest_registration
FROM kv_store_232426bc
WHERE key LIKE 'registration:%';
```

**What this shows:**
- 📈 Total registrations
- 📅 Count by visit date
- 🎓 Educational session signups
- 💼 Consultation service requests
- ⏰ First and latest registration times

---

## 🌍 QUERY 3: Registrations by City

See which cities are most popular:

```sql
-- Registrations by Preferred City
SELECT 
  CASE 
    WHEN value->>'preferredCity' = 'exploring' THEN 'Still Exploring'
    WHEN value->>'preferredCity' = 'multiple' THEN 'Multiple Cities'
    ELSE INITCAP(REPLACE(REPLACE(value->>'preferredCity', '-', ' '), '_', ' '))
  END AS city,
  COUNT(*) AS registration_count,
  ROUND(COUNT(*) * 100.0 / (SELECT COUNT(*) FROM kv_store_232426bc WHERE key LIKE 'registration:%'), 2) AS percentage
FROM kv_store_232426bc
WHERE key LIKE 'registration:%'
GROUP BY value->>'preferredCity'
ORDER BY registration_count DESC;
```

**What this shows:**
- 🏙️ Popular cities
- 📊 Registration count per city
- 📈 Percentage breakdown

---

## 📅 QUERY 4: Registrations by Date

See registration trends over time:

```sql
-- Registrations by Date (Daily Count)
SELECT 
  TO_CHAR(
    (value->>'registeredAt')::timestamp AT TIME ZONE 'Asia/Singapore',
    'DD Mon YYYY'
  ) AS registration_date,
  COUNT(*) AS registrations_count,
  STRING_AGG(value->>'fullName', ', ' ORDER BY (value->>'registeredAt')::timestamp) AS registered_names
FROM kv_store_232426bc
WHERE key LIKE 'registration:%'
GROUP BY TO_CHAR((value->>'registeredAt')::timestamp AT TIME ZONE 'Asia/Singapore', 'DD Mon YYYY')
ORDER BY MIN((value->>'registeredAt')::timestamp) DESC;
```

**What this shows:**
- 📆 Daily registration counts
- 👥 Names of people who registered each day
- 📈 Registration trends

---

## 🎓 QUERY 5: Educational Sessions Interest

See which educational sessions are most popular:

```sql
-- Educational Session Popularity
SELECT 
  CASE 
    WHEN value->>'educationalSession' = 'none' THEN 'No Session Selected'
    WHEN value->>'educationalSession' = 'gift-city' THEN 'GIFT City Tax Benefits'
    WHEN value->>'educationalSession' = 'fema' THEN 'FEMA Compliance & RBI Rules'
    WHEN value->>'educationalSession' = 'real-estate' THEN 'Real Estate Investment Strategies'
    WHEN value->>'educationalSession' = 'nri-taxation' THEN 'NRI Taxation in India'
    ELSE REPLACE(value->>'educationalSession', '-', ' ')
  END AS session_topic,
  COUNT(*) AS interest_count,
  ROUND(COUNT(*) * 100.0 / (SELECT COUNT(*) FROM kv_store_232426bc WHERE key LIKE 'registration:%'), 2) AS percentage
FROM kv_store_232426bc
WHERE key LIKE 'registration:%'
GROUP BY value->>'educationalSession'
ORDER BY interest_count DESC;
```

**What this shows:**
- 🎓 Session popularity
- 📊 Interest count
- 📈 Percentage breakdown

---

## 💼 QUERY 6: Consultation Services Interest

See which consultation services are most requested:

```sql
-- Consultation Service Popularity
SELECT 
  CASE 
    WHEN value->>'consultationService' = 'none' THEN 'No Consultation Selected'
    WHEN value->>'consultationService' = 'tax-advisory' THEN 'Tax Advisory for NRIs'
    WHEN value->>'consultationService' = 'legal-assistance' THEN 'Legal Assistance'
    WHEN value->>'consultationService' = 'property-management' THEN 'Property Management'
    WHEN value->>'consultationService' = 'investment-planning' THEN 'Investment Planning'
    ELSE REPLACE(value->>'consultationService', '-', ' ')
  END AS service_type,
  COUNT(*) AS request_count,
  ROUND(COUNT(*) * 100.0 / (SELECT COUNT(*) FROM kv_store_232426bc WHERE key LIKE 'registration:%'), 2) AS percentage
FROM kv_store_232426bc
WHERE key LIKE 'registration:%'
GROUP BY value->>'consultationService'
ORDER BY request_count DESC;
```

**What this shows:**
- 💼 Service popularity
- 📊 Request count
- 📈 Percentage breakdown

---

## 📧 QUERY 7: Search by Email

Find a specific registration by email:

```sql
-- Search Registration by Email
-- Replace 'john@example.com' with the email you're looking for
SELECT 
  value->>'id' AS registration_id,
  value->>'fullName' AS full_name,
  value->>'email' AS email,
  value->>'phone' AS phone,
  value->>'dateOfVisit' AS date_of_visit,
  value->>'preferredCity' AS preferred_city,
  value->>'educationalSession' AS educational_session,
  value->>'consultationService' AS consultation_service,
  value->>'registeredAt' AS registered_at
FROM kv_store_232426bc
WHERE key LIKE 'registration:%'
  AND value->>'email' ILIKE '%john@example.com%';
```

**How to use:**
1. Replace `john@example.com` with the email you want to search
2. Run the query
3. See the full registration details

---

## 📱 QUERY 8: Registrations by Phone Country Code

See which countries your registrants are from:

```sql
-- Registrations by Country Code
SELECT 
  value->>'countryCode' AS country_code,
  CASE 
    WHEN value->>'countryCode' = '+65' THEN 'Singapore'
    WHEN value->>'countryCode' = '+91' THEN 'India'
    WHEN value->>'countryCode' = '+1' THEN 'USA/Canada'
    WHEN value->>'countryCode' = '+44' THEN 'UK'
    WHEN value->>'countryCode' = '+971' THEN 'UAE'
    WHEN value->>'countryCode' = '+61' THEN 'Australia'
    ELSE 'Other'
  END AS country,
  COUNT(*) AS registration_count
FROM kv_store_232426bc
WHERE key LIKE 'registration:%'
GROUP BY value->>'countryCode'
ORDER BY registration_count DESC;
```

**What this shows:**
- 🌍 Country distribution
- 📞 Phone country codes
- 📊 Registration count per country

---

## ⏰ QUERY 9: Recent Registrations (Last 24 Hours)

See the most recent registrations:

```sql
-- Registrations in Last 24 Hours
SELECT 
  value->>'fullName' AS full_name,
  value->>'email' AS email,
  value->>'phone' AS phone,
  value->>'preferredCity' AS preferred_city,
  TO_CHAR(
    (value->>'registeredAt')::timestamp AT TIME ZONE 'Asia/Singapore',
    'DD Mon YYYY, HH24:MI:SS'
  ) AS registered_at,
  EXTRACT(HOUR FROM (NOW() - (value->>'registeredAt')::timestamp)) AS hours_ago
FROM kv_store_232426bc
WHERE key LIKE 'registration:%'
  AND (value->>'registeredAt')::timestamp > (NOW() - INTERVAL '24 hours')
ORDER BY (value->>'registeredAt')::timestamp DESC;
```

**What this shows:**
- 🕐 Registrations from last 24 hours
- ⏰ How long ago each registration happened
- 👥 Recent registrant details

---

## 🔥 QUERY 10: Export-Ready Format (For Excel)

Perfect format for exporting to Excel or CSV:

```sql
-- Export-Ready Registration Data
SELECT 
  ROW_NUMBER() OVER (ORDER BY (value->>'registeredAt')::timestamp) AS row_number,
  value->>'id' AS registration_id,
  value->>'fullName' AS full_name,
  value->>'email' AS email,
  value->>'phone' AS complete_phone,
  value->>'countryCode' AS country_code,
  CASE 
    WHEN value->>'dateOfVisit' = 'apr-18' THEN '18-Apr-2026'
    WHEN value->>'dateOfVisit' = 'apr-19' THEN '19-Apr-2026'
    WHEN value->>'dateOfVisit' = 'both' THEN 'Both Days'
  END AS visit_date,
  INITCAP(REPLACE(value->>'preferredCity', '-', ' ')) AS city,
  CASE 
    WHEN value->>'educationalSession' = 'none' THEN 'No'
    ELSE 'Yes'
  END AS wants_educational_session,
  CASE 
    WHEN value->>'educationalSession' != 'none' THEN INITCAP(REPLACE(value->>'educationalSession', '-', ' '))
    ELSE '-'
  END AS session_topic,
  CASE 
    WHEN value->>'consultationService' = 'none' THEN 'No'
    ELSE 'Yes'
  END AS wants_consultation,
  CASE 
    WHEN value->>'consultationService' != 'none' THEN INITCAP(REPLACE(value->>'consultationService', '-', ' '))
    ELSE '-'
  END AS consultation_type,
  TO_CHAR((value->>'registeredAt')::timestamp AT TIME ZONE 'Asia/Singapore', 'DD-MM-YYYY') AS registration_date,
  TO_CHAR((value->>'registeredAt')::timestamp AT TIME ZONE 'Asia/Singapore', 'HH24:MI:SS') AS registration_time
FROM kv_store_232426bc
WHERE key LIKE 'registration:%'
ORDER BY (value->>'registeredAt')::timestamp;
```

**What this shows:**
- 📋 Clean format ready for Excel
- 🔢 Row numbers
- 📊 All fields formatted nicely
- 📥 Easy to export as CSV

**To export:**
1. Run this query
2. Click "Download CSV" button in Supabase
3. Open in Excel

---

## 🎨 QUERY 11: Create a Beautiful View (One-Time Setup)

Create a permanent view for easy access to registration data:

```sql
-- Create a View for Easy Access (Run this once)
CREATE OR REPLACE VIEW registrations_view AS
SELECT 
  value->>'id' AS id,
  value->>'fullName' AS full_name,
  value->>'email' AS email,
  value->>'phone' AS phone,
  value->>'countryCode' AS country_code,
  value->>'dateOfVisit' AS date_of_visit,
  value->>'preferredCity' AS preferred_city,
  value->>'educationalSession' AS educational_session,
  value->>'consultationService' AS consultation_service,
  (value->>'registeredAt')::timestamp AS registered_at,
  value->>'status' AS status
FROM kv_store_232426bc
WHERE key LIKE 'registration:%';
```

**After running this, you can simply query:**

```sql
-- Now you can use this simple query anytime!
SELECT * FROM registrations_view
ORDER BY registered_at DESC;
```

**Benefits:**
- ✅ Simple queries
- ✅ No complex JSON parsing
- ✅ Easy to remember
- ✅ Faster access

---

## 💡 Pro Tips for Using SQL in Supabase

### Tip 1: Save Your Favorite Queries
- Click "Save" button in SQL Editor
- Name your query (e.g., "All Registrations")
- Access it quickly from saved queries

### Tip 2: Use Filters
Add filters to any query with WHERE clause:

```sql
-- Example: Filter by city
WHERE value->>'preferredCity' = 'mumbai'

-- Example: Filter by date
WHERE (value->>'registeredAt')::timestamp > '2026-01-15'

-- Example: Multiple filters
WHERE value->>'preferredCity' = 'bangalore'
  AND value->>'dateOfVisit' = 'both'
```

### Tip 3: Export Results
After running any query:
1. Click "Download" button
2. Choose CSV or JSON format
3. Open in Excel

### Tip 4: Combine Queries
You can combine queries to get multiple insights:

```sql
-- Combined Statistics Query
SELECT 'Total Registrations' AS metric, COUNT(*)::text AS value
FROM kv_store_232426bc WHERE key LIKE 'registration:%'
UNION ALL
SELECT 'Mumbai Interest', COUNT(*)::text
FROM kv_store_232426bc 
WHERE key LIKE 'registration:%' AND value->>'preferredCity' = 'mumbai'
UNION ALL
SELECT 'With Educational Session', COUNT(*)::text
FROM kv_store_232426bc 
WHERE key LIKE 'registration:%' AND value->>'educationalSession' != 'none';
```

### Tip 5: Real-Time Monitoring
Set up a query to run automatically:
1. Create a saved query
2. Pin it to your dashboard
3. Refresh to see latest data

---

## 🔍 Troubleshooting SQL Queries

### Query Returns Empty?
- **Check:** Make sure you have registrations in the database
- **Test:** Run Query 2 (Statistics) to see if there's any data
- **Verify:** Check that table name is `kv_store_232426bc`

### Error: "column does not exist"?
- **Issue:** The query is looking for a regular column, not JSON
- **Fix:** Make sure you're using `value->>'fieldName'` syntax
- **Check:** Field names are case-sensitive

### Date Format Issues?
- **Solution:** Use Singapore timezone:
  ```sql
  (value->>'registeredAt')::timestamp AT TIME ZONE 'Asia/Singapore'
  ```

### Slow Query Performance?
- **Tip:** Add limit to queries:
  ```sql
  LIMIT 100
  ```
- **Tip:** Only select fields you need
- **Tip:** Use the view (Query 11) for better performance

---

## 📊 Quick Reference - Common Fields

### Field Names in JSON:
```
value->>'id'                    → Registration ID
value->>'fullName'              → Full Name
value->>'email'                 → Email Address
value->>'phone'                 → Phone Number
value->>'countryCode'           → Country Code
value->>'dateOfVisit'           → Date of Visit
value->>'preferredCity'         → Preferred City
value->>'educationalSession'    → Educational Session
value->>'consultationService'   → Consultation Service
value->>'registeredAt'          → Registration Timestamp
value->>'status'                → Status
```

### Date of Visit Values:
- `apr-18` = 18th April only
- `apr-19` = 19th April only
- `both` = Both days

### Common City Values:
- `exploring` = Still exploring
- `multiple` = Multiple cities
- `mumbai`, `bangalore`, `delhi-ncr`, `pune`, `hyderabad`, etc.

---

## 🎉 You're All Set!

**Now you can:**
- ✅ View all registrations in clean format
- ✅ Get statistics and analytics
- ✅ Export data to Excel/CSV
- ✅ Search specific registrations
- ✅ Monitor trends over time
- ✅ Create custom reports

**Most useful queries:**
1. **Query 1** - View all registrations (daily use)
2. **Query 2** - Statistics summary (overview)
3. **Query 10** - Export-ready format (Excel export)

**Remember:** You can modify any query to fit your needs!

---

*For more help, check: https://supabase.com/docs/guides/database/sql-editor*

*Last Updated: January 1, 2026*
