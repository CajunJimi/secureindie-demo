# Notely — an intentionally vulnerable demo app

**Do not copy this code.** This app exists so [SecureIndie](https://secureindie.com) can
publish a real, un-edited sample audit report. Every mistake in it is deliberate, and
**all data in it is fake** (invented names, `example.com` emails, made-up IDs).

What's wrong with it, on purpose:

- `supabase/migrations/0001_init.sql` creates a `profiles` table **without row level
  security**, so anyone with the public anon key can read it. (Writes are revoked, so
  nobody can change the demo data.)
- `api/stripe-webhook.js` trusts the request body **without verifying Stripe's
  signature**, so anyone could fake a "payment succeeded" event.
- `package.json` pins an old library with a known vulnerability, and the code uses it.
- The website ships with no security headers.

Live demo: https://demo.secureindie.com · The audit: https://secureindie.com/sample-report
