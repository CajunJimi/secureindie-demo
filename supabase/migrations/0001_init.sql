-- Notely schema. Intentionally vulnerable demo: profiles has NO row level security.
create table public.profiles (
  id uuid primary key default gen_random_uuid(),
  email text not null,
  full_name text,
  plan text default 'free',
  stripe_customer_id text,
  created_at timestamptz default now()
);
-- (missing on purpose)  alter table public.profiles enable row level security;
revoke insert, update, delete, truncate on public.profiles from anon, authenticated;

create table public.notes (
  id uuid primary key default gen_random_uuid(),
  owner_id uuid not null,
  body text not null,
  created_at timestamptz default now()
);
alter table public.notes enable row level security;
create policy "owners read their notes" on public.notes
  for select using (auth.uid() = owner_id);
