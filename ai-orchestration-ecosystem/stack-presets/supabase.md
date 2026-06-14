# Stack Preset: Supabase

## Best For

Apps needing managed Postgres, authentication, storage, edge functions, and fast backend setup.

## Default Stack

- Supabase Postgres
- Supabase Auth when managed authentication is appropriate
- Supabase Storage when user-uploaded files are needed
- Supabase Edge Functions when lightweight backend functions are needed
- Local Supabase CLI or preview environment strategy for schema and policy testing
- Generated TypeScript types from the Supabase schema when the app uses TypeScript

## Strengths

- Relational data model.
- Managed auth and storage.
- Good developer experience.
- Works well with web and mobile apps.

## Tradeoffs

- Row-level security must be designed and tested carefully.
- Vendor-specific features create some coupling.
- Production backup and migration strategy must be explicit.
- TypeScript projects should use generated Supabase types and strict mode where practical.

## Use When

- The app needs relational data with fast managed setup.
- Authentication, storage, or realtime features are useful.
- The user wants to avoid operating database infrastructure directly.

## Required Sagaz Checks

- data model
- row-level security
- migration plan
- backup and restore plan
- auth flows
- environment variables
- local or preview environment strategy
- generated TypeScript types
- TypeScript strict compatibility
