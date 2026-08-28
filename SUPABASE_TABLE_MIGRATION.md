# 🔄 Supabase Table Migration Guide

## Overview
Successfully migrated from **KV Store** to **PostgreSQL Table** for better data management, querying, and scalability.

---

## ✅ What Changed

### Before (KV Store):
```
registration:reg_123 → { data }
email:user@example.com → reg_123
```

### After (PostgreSQL Table):
```sql
registrations table with proper schema, indexes, and RLS
```

---

## 📋 Migration Steps

### Step 1: Create the Table in Supabase

1. **Go to Supabase Dashboard**:
   ```
   https://app.supabase.com/project/cbodmftxkjkutlrqamcn
   ```

2. **Navigate to SQL Editor**:
   - Click "SQL Editor" in the left sidebar
   - Click "New Query"

3. **Copy and Execute the SQL**:
   - Open: `/supabase/migrations/create_registrations_table.sql`
   - Copy all contents
   - Paste into SQL Editor
   - Click "Run" or press `Ctrl+Enter`

4. **Verify Table Creation**:
   - Go to "Table Editor" in left sidebar
   - You should see `registrations` table
   - Click on it to view structure

### Step 2: Deploy Updated Edge Function

```bash
# Navigate to your project
cd /Users/ishankohli/Documents/GitHub/Singaporewebsitenriniveshlp

# Deploy the updated function
npx supabase functions deploy server --project-ref cbodmftxkjkutlrqamcn

# Or deploy all functions
npx supabase functions deploy --project-ref cbodmftxkjkutlrqamcn
```

### Step 3: Test the New Setup

```bash
# Test health endpoint
curl https://cbodmftxkjkutlrqamcn.supabase.co/functions/v1/make-server-232426bc/health

# Test registration (replace with real data)
curl -X POST https://cbodmftxkjkutlrqamcn.supabase.co/functions/v1/make-server-232426bc/register \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_ANON_KEY" \
  -d '{
    "fullName": "Test User",
    "email": "test@example.com",
    "phone": "12345678",
    "countryCode": "+65",
    "dateOfVisit": "apr-18",
    "preferredCity": "mumbai"
  }'

# Check registrations
curl https://cbodmftxkjkutlrqamcn.supabase.co/functions/v1/make-server-232426bc/registrations \
  -H "Authorization: Bearer YOUR_ANON_KEY"
```

---

## 📊 Table Schema

```sql
registrations
├── id (TEXT, PRIMARY KEY)
├── full_name (TEXT, NOT NULL)
├── email (TEXT, NOT NULL)
├── phone (TEXT, NOT NULL)
├── country_code (TEXT, NOT NULL)
├── date_of_visit (TEXT, NOT NULL)
├── preferred_city (TEXT, NOT NULL)
├── educational_session (TEXT, DEFAULT 'none')
├── consultation_service (TEXT, DEFAULT 'none')
├── registered_at (TIMESTAMPTZ, DEFAULT NOW())
├── source (TEXT, DEFAULT 'website')
├── status (TEXT, DEFAULT 'confirmed')
├── created_at (TIMESTAMPTZ, DEFAULT NOW())
└── updated_at (TIMESTAMPTZ, DEFAULT NOW())

Indexes:
- idx_registrations_email (email)
- idx_registrations_registered_at (registered_at DESC)
- idx_registrations_status (status)
```

---

## 🔒 Security (Row Level Security)

### Policies Created:

1. **Public Registration** (anon users):
   - Can INSERT new registrations
   - Form submissions work without authentication

2. **Admin Access** (authenticated users):
   - Can SELECT all registrations
   - View dashboard data

3. **Service Role** (backend):
   - Full access (SELECT, INSERT, UPDATE, DELETE)
   - Used by Edge Functions

---

## 🎯 Benefits of PostgreSQL Table

### Advantages Over KV Store:

✅ **Better Querying**:
```sql
-- Find all registrations from Mumbai
SELECT * FROM registrations WHERE preferred_city = 'mumbai';

-- Count registrations by date
SELECT date_of_visit, COUNT(*) 
FROM registrations 
GROUP BY date_of_visit;

-- Get recent registrations
SELECT * FROM registrations 
ORDER BY registered_at DESC 
LIMIT 10;
```

✅ **Advanced Features**:
- Indexes for faster searches
- Foreign keys for relationships
- Full-text search capability
- Aggregate functions
- Join with other tables

✅ **Better Admin Tools**:
- View/edit data in Supabase dashboard
- Export to CSV directly
- Built-in data validation
- Automatic timestamps

✅ **Scalability**:
- Handles millions of records
- Efficient pagination
- Better performance at scale

---

## 📈 How to Query Data

### In Supabase Dashboard:

1. Go to "Table Editor"
2. Click "registrations"
3. View, filter, sort, and edit data
4. Export to CSV using "Export" button

### Via SQL Editor:

```sql
-- All registrations
SELECT * FROM registrations ORDER BY registered_at DESC;

-- Count by city
SELECT preferred_city, COUNT(*) as count 
FROM registrations 
GROUP BY preferred_city 
ORDER BY count DESC;

-- Today's registrations
SELECT * FROM registrations 
WHERE registered_at::date = CURRENT_DATE;

-- Search by email
SELECT * FROM registrations 
WHERE email ILIKE '%example.com%';

-- Get statistics
SELECT 
  COUNT(*) as total,
  COUNT(DISTINCT email) as unique_emails,
  COUNT(CASE WHEN status = 'confirmed' THEN 1 END) as confirmed
FROM registrations;
```

### Via JavaScript (Frontend):

```javascript
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Get all registrations
const { data, error } = await supabase
  .from('registrations')
  .select('*')
  .order('registered_at', { ascending: false });

// Get by email
const { data, error } = await supabase
  .from('registrations')
  .select('*')
  .eq('email', 'user@example.com')
  .single();

// Count registrations
const { count, error } = await supabase
  .from('registrations')
  .select('*', { count: 'exact', head: true });
```

---

## 🔄 Data Migration (If You Have Existing KV Data)

If you have existing registrations in KV Store, here's how to migrate:

### Option 1: Manual Export (Small Dataset)

1. **Export from KV Store**:
```bash
curl https://cbodmftxkjkutlrqamcn.supabase.co/functions/v1/make-server-232426bc/registrations \
  -H "Authorization: Bearer YOUR_KEY" > old_registrations.json
```

2. **Import to Table**:
   - Open Supabase Dashboard → Table Editor
   - Click "Insert" → "Insert row"
   - Or use SQL bulk insert

### Option 2: Create Migration Script

Create a temporary Edge Function to migrate data:

```typescript
// Temporary migration function
app.post("/make-server-232426bc/migrate-kv-to-table", async (c) => {
  try {
    const kvRegistrations = await kv.getByPrefix("registration:");
    
    for (const reg of kvRegistrations) {
      await supabase.from('registrations').insert({
        id: reg.id,
        full_name: reg.fullName,
        email: reg.email,
        phone: reg.phone,
        country_code: reg.countryCode,
        date_of_visit: reg.dateOfVisit,
        preferred_city: reg.preferredCity,
        educational_session: reg.educationalSession || 'none',
        consultation_service: reg.consultationService || 'none',
        registered_at: reg.registeredAt,
        source: reg.source || 'website',
        status: reg.status || 'confirmed'
      });
    }
    
    return c.json({ success: true, migrated: kvRegistrations.length });
  } catch (error) {
    return c.json({ success: false, error: error.message }, 500);
  }
});
```

---

## 🧪 Testing Checklist

After migration, verify:

- [ ] Table created successfully in Supabase
- [ ] Edge function deployed
- [ ] Health endpoint responds
- [ ] New registration works
- [ ] Admin dashboard shows data
- [ ] Email lookup works
- [ ] Export to CSV works
- [ ] No console errors

---

## 🚨 Rollback Plan (If Needed)

If something goes wrong:

1. **Revert Edge Function**:
   - Restore `supabase/functions/server/index.tsx` from git
   - Redeploy: `npx supabase functions deploy server`

2. **Keep Table** (for future):
   - Don't drop the table
   - Data is safe and can be used later

3. **Restore KV Code**:
```bash
git checkout HEAD~1 supabase/functions/server/index.tsx
npx supabase functions deploy server
```

---

## 📞 Troubleshooting

### Issue: Table creation failed
**Solution**: Check SQL syntax, ensure you have permissions

### Issue: Edge function can't connect to table
**Solution**: Verify `SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY` environment variables are set

### Issue: RLS blocking inserts
**Solution**: Check policies in Supabase Dashboard → Authentication → Policies

### Issue: Old data not visible
**Solution**: Run migration script to import KV data

---

## 🎉 Next Steps

Now that you have a proper database table:

1. **Setup Real-time Updates** (optional):
   ```javascript
   supabase
     .channel('registrations')
     .on('postgres_changes', { 
       event: 'INSERT', 
       schema: 'public', 
       table: 'registrations' 
     }, payload => {
       console.log('New registration:', payload.new);
     })
     .subscribe();
   ```

2. **Add More Features**:
   - Duplicate email detection
   - Email verification
   - Registration status updates
   - Analytics dashboard

3. **Optimize Queries**:
   - Add more indexes if needed
   - Use materialized views for reports
   - Setup scheduled backups

---

## 📚 Resources

- [Supabase Database](https://supabase.com/docs/guides/database)
- [Row Level Security](https://supabase.com/docs/guides/auth/row-level-security)
- [PostgreSQL Indexes](https://www.postgresql.org/docs/current/indexes.html)
- [Supabase Edge Functions](https://supabase.com/docs/guides/functions)

---

**Migration Status**: ✅ Ready to Deploy
**Last Updated**: January 8, 2026
