# Connect Supabase (Admin changes live for everyone)

## 1. Create a free Supabase project
1. Go to https://supabase.com → Sign in → **New project**
2. Name: `mprem-portfolio`
3. Set a database password (save it)
4. Region: closest to you (e.g. Mumbai / Singapore)
5. Wait until the project is ready

## 2. Run the SQL schema
1. In Supabase: **SQL Editor** → **New query**
2. Open this file in the repo: `supabase/schema.sql`
3. Copy all SQL → paste in Supabase → click **Run**

## 3. Copy API keys
1. Supabase → **Project Settings** → **API**
2. Copy:
   - **Project URL** → `NEXT_PUBLIC_SUPABASE_URL`
   - **anon public** key → `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - **service_role** key → `SUPABASE_SERVICE_ROLE_KEY` (keep secret)

## 4. Add keys to Vercel
1. Open https://vercel.com → project `mprem-portfolio`
2. **Settings** → **Environment Variables**
3. Add for **Production**:

| Name | Value |
|------|--------|
| `NEXT_PUBLIC_SUPABASE_URL` | `https://xxxx.supabase.co` |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | `eyJ...` |
| `SUPABASE_SERVICE_ROLE_KEY` | `eyJ...` |

4. **Redeploy** (Deployments → Redeploy)

## 5. Test
1. Open `/admin` → edit Profile → **Save**
2. Badge should show **Cloud synced**
3. Open homepage in **Incognito** → changes appear for everyone
