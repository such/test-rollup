Demonstrates a bug with Rollup.js when outputing multiple bundles

## Setup

```
cd a
npm install
npm link
npm run build

cd ../b
npm install
npm link a
npm run build
```

## Expected

`b/lib/index.mjs` and `b/lib/index.bug.mjs` should be identical as the only difference between `rollup.config.js` and `rollup.bug.config.js` is that the latter outputs multiple bundles.

## Actual

`b/lib/index.bug.mjs` references a global external `a` even though it is imported.

## Note

Apparently this occurs only when using `class`.

## Versions

`rollup 0.34.10`

`node v6.2.1`

`npm 3.9.3`
 
 
