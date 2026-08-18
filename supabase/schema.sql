-- M Prem Portfolio CMS schema
-- Run this in Supabase SQL Editor (Dashboard → SQL → New query)

create table if not exists site_content (
  id text primary key default 'main',
  data jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);

insert into site_content (id, data)
values ('main', '{}'::jsonb)
on conflict (id) do nothing;

create table if not exists leads (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  phone text,
  company text,
  message text,
  source text default 'contact',
  status text default 'new',
  created_at timestamptz not null default now()
);

alter table site_content enable row level security;
alter table leads enable row level security;

drop policy if exists "Public read site_content" on site_content;
create policy "Public read site_content"
  on site_content for select
  using (true);

drop policy if exists "Public update site_content" on site_content;
create policy "Public update site_content"
  on site_content for update
  using (true)
  with check (true);

drop policy if exists "Public insert site_content" on site_content;
create policy "Public insert site_content"
  on site_content for insert
  with check (true);

drop policy if exists "Public insert leads" on leads;
create policy "Public insert leads"
  on leads for insert
  with check (true);

drop policy if exists "Public read leads" on leads;
create policy "Public read leads"
  on leads for select
  using (true);
