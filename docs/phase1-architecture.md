# Nataka Property Group — Phase 1: Architecture & Database Design

## 1. System overview

```
                        ┌─────────────────────────┐
                        │   React + TS + Vite      │
                        │   (Public site + Admin)  │
                        │   Hosted on Vercel        │
                        └────────────┬─────────────┘
                                     │ supabase-js (REST/Realtime)
                                     ▼
                        ┌─────────────────────────┐
                        │        Supabase          │
                        │  - Postgres (RLS)         │
                        │  - Auth                   │
                        │  - Storage (images)       │
                        └─────────────────────────┘
```

Key architectural decisions:

- **No custom backend server.** Supabase acts as the backend: Postgres + PostgREST-style API + Auth + Storage. This keeps the stack simple and fast to ship, while RLS enforces security at the database layer instead of trusting the frontend.
- **Role-based access lives in the database**, not in frontend code. A `role` column on `profiles` (`user` | `admin`) is the single source of truth. Every admin-only table/query is protected by an RLS policy that checks this role via a `SECURITY DEFINER` helper function (built in Phase 16) — never by hiding a button in the UI.
- **Slugs are generated and stored**, not derived at request time, so `/properties/:slug` lookups are a simple indexed query and SEO metadata can be attached per-property.
- **Images live in Supabase Storage**, with only the storage path + public URL stored in Postgres (`property_images`, `property_submission_images`).
- **Public submissions ("Sell Your Property") are stored separately from live listings** (`property_submissions`), so a lead never becomes a public listing until an admin explicitly approves and converts it.

## 2. Database schema (entity summary)

| Table | Purpose |
|---|---|
| `profiles` | 1:1 extension of `auth.users`; stores name, phone, role |
| `agents` | Staff/agents shown on property detail pages |
| `properties` | Core listing table |
| `property_images` | Gallery images per property |
| `property_features` | Amenities/features per property (many rows per property) |
| `favorites` | User ↔ property saves |
| `enquiries` | "Contact about this property" submissions |
| `viewing_requests` | "Request a viewing" submissions |
| `property_submissions` | Public "Sell/List Your Property" leads |
| `property_submission_images` | Photos attached to a submission |
| `testimonials` | Homepage/testimonials content, admin-managed |
| `contact_messages` | General site contact form |

Full column-level definitions are in the migration file `supabase/migrations/0001_initial_schema.sql`.

### Relationships (high level)

- `auth.users (1) → (1) profiles`
- `profiles (1) → (M) properties` (as `created_by`)
- `agents (1) → (M) properties`
- `properties (1) → (M) property_images`
- `properties (1) → (M) property_features`
- `properties (1) → (M) favorites`, `enquiries`, `viewing_requests`
- `profiles (1) → (M) favorites`, `enquiries`, `viewing_requests` (nullable — enquiries/viewings can also come from anonymous visitors who fill in name/email/phone directly)
- `property_submissions (1) → (M) property_submission_images`
- `property_submissions (0..1) → (0..1) properties` via `converted_property_id`, once an admin approves and converts a submission into a live listing

### Enums

Defined as native Postgres `enum` types so the database enforces valid values (in addition to whatever validation the frontend does):

- `user_role`: `user`, `admin`
- `property_purpose`: `for_sale`, `for_rent`, `for_lease`
- `property_type`: `house`, `villa`, `apartment`, `land`, `commercial`, `beachfront`, `investment`, `holiday_home`, `property_management`
- `property_status`: `available`, `under_offer`, `sold`, `rented`, `off_market`
- `enquiry_status`: `new`, `contacted`, `viewing_scheduled`, `negotiating`, `closed`, `cancelled`
- `viewing_status`: `pending`, `approved`, `rescheduled`, `cancelled`, `completed`
- `submission_status`: `pending`, `reviewed`, `approved`, `rejected`, `converted`
- `contact_status`: `new`, `read`, `responded`
- `contact_method`: `email`, `phone`, `whatsapp`

### Indexing strategy

Indexes are added for every field the Phase 6 filter/search system will query on:

- `properties`: `slug` (unique), `purpose`, `property_type`, `status`, `area_name`, `price`, `featured`, `published`, `bedrooms`
- `enquiries`: `property_id`, `status`
- `viewing_requests`: `property_id`, `status`
- `favorites`: unique composite `(user_id, property_id)`
- `property_images`: `property_id`
- `property_submissions`: `status`

### Security note (previewed, built out in Phase 16)

RLS is **enabled on every table** in this migration, but only minimal, safe default policies are included for now (e.g., public read of published properties). The full policy set — "users manage their own favorites/enquiries/viewings", "admins have full access", role-check helper function — is deliberately deferred to **Phase 16: Security/RLS review**, after auth (Phase 4) exists to test against. Leaving RLS *on* with no permissive policies from day one means the tables are safe by default even before Phase 16 is built.

## 3. What was created in this phase

```
docs/
  phase1-architecture.md          ← this file
supabase/
  migrations/
    0001_initial_schema.sql       ← full schema: enums, tables, indexes, RLS enabled
```

## 4. Where these files belong

- `docs/phase1-architecture.md` → project root, `docs/` folder (reference doc, not shipped)
- `supabase/migrations/0001_initial_schema.sql` → project root, `supabase/migrations/` (this is the standard path the Supabase CLI expects)

## 5. Commands to run (once you have a Supabase project)

```bash
# Install the Supabase CLI (if not already installed)
npm install -g supabase

# Link to your Supabase project (from your project root)
supabase login
supabase link --project-ref <your-project-ref>

# Apply this migration to your remote database
supabase db push
```

If you'd rather run it manually: open the Supabase Dashboard → SQL Editor → paste the contents of `0001_initial_schema.sql` → Run.

## 6. What to test after this phase

- In the Supabase Dashboard → Table Editor, confirm all 11 tables exist.
- Confirm all custom enum types appear under Database → Types.
- Confirm RLS is shown as **Enabled** on every table (Database → Tables → each table's shield icon).
- Try a `select * from properties;` as the `anon` role in the SQL editor's "Run as" — it should return zero rows (no permissive policy yet), which is expected and correct at this stage.

## 7. Next: Phase 2

Phase 2 will scaffold the actual React + TypeScript + Vite project (folder structure, Tailwind, React Router, ESLint/TS config, environment variables for Supabase) so Phase 3 can wire up the Supabase client.
