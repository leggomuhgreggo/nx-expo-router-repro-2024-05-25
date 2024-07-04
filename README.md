# Nx Expo-Router Repro - Typed Route + Monorepo Issue

## Problem
No intellisense, type issues

## Repro Steps

1. Install dependencies
```
yarn install
```


2. Start the expo app for web (optional)
```
DEBUG=* yarn nx run my-test-app:start --web
```

3. Try to exercise typed routes in `apps/my-test-app/src/app/index.tsx`
