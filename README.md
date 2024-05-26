# Nx Expo-Router Repro 2024.05.25

## Issue

Recent changes to expo router entry point handling have introduced regression for monorepo's that use a shared root-level `package.json` + `node_modules`.

> [!NOTE]
> Previous versions of `expo` / `expo-router` have worked with this configuration; _e.g. Expo SDK 48 + Expo Router v2_

> [!NOTE]
> More about [Single Version Policy](https://nx.dev/concepts/decisions/dependency-management#single-version-policy) / [One Version Rule](https://opensource.google/documentation/reference/thirdparty/oneversion)


## Repro Steps

1. Install dependencies
```
yarn install
```


2. Start the expo app for web
```
DEBUG=* yarn nx run my-test-app:start --web
```

3. Observe error in browser console
