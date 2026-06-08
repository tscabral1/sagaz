# Stack Preset: Firebase

## Best For

Realtime apps, mobile-first products, quick authentication, push notifications, and apps that benefit from managed NoSQL infrastructure.

## Default Stack

- Firebase Authentication
- Firestore or Realtime Database based on data access patterns
- Firebase Storage when user-uploaded files are needed
- Firebase Cloud Messaging when push notifications are needed
- Firebase Hosting or app-platform hosting based on the frontend stack
- Firebase Emulator Suite for local validation when feasible

## Strengths

- Strong mobile ecosystem.
- Realtime features.
- Managed auth and hosting.
- Good for rapid iteration.

## Tradeoffs

- NoSQL data modeling requires care.
- Complex querying can become expensive or awkward.
- Security rules must be tested.

## Use When

- Realtime sync, auth, push notifications, or mobile-first delivery matter.
- The app fits a document or event-oriented data model.
- The user values fast managed setup over SQL flexibility.

## Required Sagaz Checks

- security rules
- cost model
- data access patterns
- emulator usage
- backup/export path
- auth and permission flows
