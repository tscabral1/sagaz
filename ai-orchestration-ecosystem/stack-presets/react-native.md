# Stack Preset: React Native

## Best For

Mobile apps that need deeper native control than a fully managed Expo project.

## Default Stack

- React Native
- TypeScript
- React Navigation or Expo Router depending on project structure
- Native build tooling
- Detox or Maestro for mobile end-to-end tests when feasible

## Strengths

- Shared codebase across Android and iOS.
- More native control than managed-only workflows.
- Large ecosystem.

## Tradeoffs

- Native build complexity is higher.
- CI setup is more involved.
- Requires stronger platform-specific verification.

## Use When

- The mobile app needs native modules or platform control beyond managed Expo defaults.
- The team can support native Android and iOS build complexity.
- Store readiness, device testing, and native CI are part of the delivery scope.
