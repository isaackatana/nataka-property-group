-- ============================================================
-- Nataka Property Group — Phase 1: Initial Schema
-- ============================================================
-- Creates enums, tables, indexes, and enables RLS on every table.
-- Full RLS policies are added in Phase 16, after auth (Phase 4)
-- exists to test against. RLS is enabled now so tables are
-- locked down by default from the very first migration.
-- ============================================================

-- ------------------------------------------------------------
-- Extensions
-- ------------------------------------------------------------
create extension if not exists "pgcrypto"; -- for gen_random_uuid()

-- ------------------------------------------------------------
-- Enums
-- ------------------------------------------------------------
create type user_role as enum ('user', 'admin');

create type property_purpose as enum ('for_sale', 'for_rent', 'for_lease');

create type property_type as enum (
  'house', 'villa', 'apartment', 'land', 'commercial',
  'beachfront', 'investment', 'holiday_home', 'property_management'
);

create type property_status as enum (
  'available', 'under_offer', 'sold', 'rented', 'off_market'
);

create type enquiry_status as enum (
  'new', 'contacted', 'viewing_scheduled', 'negotiating', 'closed', 'cancelled'
);

create type viewing_status as enum (
  'pending', 'approved', 'rescheduled', 'cancelled', 'completed'
);

create type submission_status as enum (
  'pending', 'reviewed', 'approved', 'rejected', 'converted'
);

create type contact_status as enum ('new', 'read', 'responded');

create type contact_method as enum ('email', 'phone', 'whatsapp');

-- ------------------------------------------------------------
-- profiles  (1:1 extension of auth.users)
-- ------------------------------------------------------------
create table profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  full_name text,
  phone text,
  avatar_url text,
  role user_role not null default 'user',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- ------------------------------------------------------------
-- agents
-- ------------------------------------------------------------
create table agents (
  id uuid primary key default gen_random_uuid(),
  profile_id uuid references profiles(id) on delete set null,
  full_name text not null,
  email text,
  phone text,
  whatsapp text,
  photo_url text,
  bio text,
  is_active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- ------------------------------------------------------------
-- properties
-- ------------------------------------------------------------
create table properties (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  title text not null,
  description text,

  purpose property_purpose not null,
  property_type property_type not null,
  status property_status not null default 'available',

  price numeric(14, 2) not null,
  currency text not null default 'KES',

  location text not null,        -- free-text display location, e.g. "Diani Beach Road"
  area_name text not null,       -- normalized area for filtering: Diani, Galu, Tiwi, Ukunda, Msambweni, Mombasa
  address text,
  latitude numeric(9, 6),
  longitude numeric(9, 6),

  bedrooms int,
  bathrooms int,
  area_sqm numeric(10, 2),
  land_size_sqm numeric(12, 2),

  furnished boolean not null default false,
  beachfront boolean not null default false,
  swimming_pool boolean not null default false,
  parking_spaces int default 0,

  featured boolean not null default false,
  published boolean not null default false,

  agent_id uuid references agents(id) on delete set null,
  created_by uuid references profiles(id) on delete set null,
  converted_from_submission_id uuid, -- FK added after property_submissions is created

  -- SEO
  seo_title text,
  meta_description text,
  og_title text,
  og_description text,
  og_image_url text,

  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- ------------------------------------------------------------
-- property_images
-- ------------------------------------------------------------
create table property_images (
  id uuid primary key default gen_random_uuid(),
  property_id uuid not null references properties(id) on delete cascade,
  storage_path text not null,
  url text not null,
  is_primary boolean not null default false,
  sort_order int not null default 0,
  created_at timestamptz not null default now()
);

-- ------------------------------------------------------------
-- property_features  (amenities: "Ocean view", "Gated compound", etc.)
-- ------------------------------------------------------------
create table property_features (
  id uuid primary key default gen_random_uuid(),
  property_id uuid not null references properties(id) on delete cascade,
  feature text not null
);

-- ------------------------------------------------------------
-- favorites
-- ------------------------------------------------------------
create table favorites (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references profiles(id) on delete cascade,
  property_id uuid not null references properties(id) on delete cascade,
  created_at timestamptz not null default now(),
  unique (user_id, property_id)
);

-- ------------------------------------------------------------
-- enquiries
-- ------------------------------------------------------------
create table enquiries (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references profiles(id) on delete set null, -- nullable: anonymous visitors can enquire too
  property_id uuid not null references properties(id) on delete cascade,

  name text not null,
  email text not null,
  phone text,
  message text not null,

  preferred_contact_method contact_method,
  budget numeric(14, 2),
  preferred_viewing_date date,

  status enquiry_status not null default 'new',

  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- ------------------------------------------------------------
-- viewing_requests
-- ------------------------------------------------------------
create table viewing_requests (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references profiles(id) on delete set null,
  property_id uuid not null references properties(id) on delete cascade,

  preferred_date date not null,
  preferred_time time,
  phone text,
  message text,

  status viewing_status not null default 'pending',

  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- ------------------------------------------------------------
-- property_submissions  ("Sell / List Your Property" leads)
-- ------------------------------------------------------------
create table property_submissions (
  id uuid primary key default gen_random_uuid(),

  name text not null,
  phone text not null,
  email text not null,

  property_type property_type not null,
  purpose property_purpose not null,
  location text not null,
  asking_price numeric(14, 2),
  description text,

  status submission_status not null default 'pending',
  converted_property_id uuid references properties(id) on delete set null,

  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- now that property_submissions exists, wire the reverse reference on properties
alter table properties
  add constraint properties_converted_from_submission_fk
  foreign key (converted_from_submission_id) references property_submissions(id) on delete set null;

-- ------------------------------------------------------------
-- property_submission_images
-- ------------------------------------------------------------
create table property_submission_images (
  id uuid primary key default gen_random_uuid(),
  submission_id uuid not null references property_submissions(id) on delete cascade,
  storage_path text not null,
  url text not null,
  sort_order int not null default 0,
  created_at timestamptz not null default now()
);

-- ------------------------------------------------------------
-- testimonials
-- ------------------------------------------------------------
create table testimonials (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  role_title text,          -- e.g. "Property Buyer", "Landlord"
  message text not null,
  rating int check (rating between 1 and 5),
  photo_url text,
  is_published boolean not null default false,
  sort_order int not null default 0,
  created_at timestamptz not null default now()
);

-- ------------------------------------------------------------
-- contact_messages  (general site contact form)
-- ------------------------------------------------------------
create table contact_messages (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  phone text,
  subject text,
  message text not null,
  status contact_status not null default 'new',
  created_at timestamptz not null default now()
);

-- ============================================================
-- Indexes
-- ============================================================
create index idx_properties_purpose on properties(purpose);
create index idx_properties_type on properties(property_type);
create index idx_properties_status on properties(status);
create index idx_properties_area on properties(area_name);
create index idx_properties_price on properties(price);
create index idx_properties_featured on properties(featured);
create index idx_properties_published on properties(published);
create index idx_properties_bedrooms on properties(bedrooms);

create index idx_property_images_property on property_images(property_id);
create index idx_property_features_property on property_features(property_id);

create index idx_favorites_user on favorites(user_id);

create index idx_enquiries_property on enquiries(property_id);
create index idx_enquiries_status on enquiries(status);

create index idx_viewing_requests_property on viewing_requests(property_id);
create index idx_viewing_requests_status on viewing_requests(status);

create index idx_submissions_status on property_submissions(status);

-- ============================================================
-- Enable RLS on every table
-- (Policies are added in Phase 16 — RLS on with no policies
--  means "deny all to anon/authenticated" by default, which
--  is the safe starting state.)
-- ============================================================
alter table profiles enable row level security;
alter table agents enable row level security;
alter table properties enable row level security;
alter table property_images enable row level security;
alter table property_features enable row level security;
alter table favorites enable row level security;
alter table enquiries enable row level security;
alter table viewing_requests enable row level security;
alter table property_submissions enable row level security;
alter table property_submission_images enable row level security;
alter table testimonials enable row level security;
alter table contact_messages enable row level security;

-- ============================================================
-- updated_at auto-touch trigger (reused across tables)
-- ============================================================
create or replace function set_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

create trigger trg_profiles_updated_at before update on profiles
  for each row execute function set_updated_at();
create trigger trg_agents_updated_at before update on agents
  for each row execute function set_updated_at();
create trigger trg_properties_updated_at before update on properties
  for each row execute function set_updated_at();
create trigger trg_enquiries_updated_at before update on enquiries
  for each row execute function set_updated_at();
create trigger trg_viewing_requests_updated_at before update on viewing_requests
  for each row execute function set_updated_at();
create trigger trg_submissions_updated_at before update on property_submissions
  for each row execute function set_updated_at();
