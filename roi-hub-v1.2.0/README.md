# ROI Hub - Event Ledger System

Lightweight event ledger for ROI Watch and agent-driven optimization.

## Quick Start

```bash
npm install
npm run smoke
```

Expected output:
```
✓ SMOKE PASS - event ingested successfully
  contact_id: ctc_7e5d2c1a-1f3b-4c2d-a9e1-3f7d9b2c4a11
  event_type: consult_booked
  trace_id: 3f9e2b1f-6e4d-4a4b-9c07-9c2f0c7a6caa
```

## Troubleshooting

### Error: ERR_PACKAGE_PATH_NOT_EXPORTED (ts-node)

If you see an error about `ts-node/register/esm` not being exported:

**Cause:** Global ts-node or NODE_OPTIONS interference

**Solutions:**

1. **Clean install (recommended)**
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   npm run smoke
   ```

2. **Check environment variables**
   ```bash
   echo $NODE_OPTIONS
   unset NODE_OPTIONS  # if it's set
   npm run smoke
   ```

3. **Use npx directly**
   ```bash
   npx tsx tests/smoke.ts
   ```

4. **Verify no ts-node**
   ```bash
   npm ls ts-node  # should show: (empty)
   ```

## Project Structure

```
roi-hub/
├── roi-hub/           # Core event ingestion logic
│   ├── ingest.ts      # Main ingestion with invariant checks
│   ├── invariants.ts  # contact_id invariant enforcement
│   ├── types.ts       # TypeScript interfaces
│   └── ...
├── docs/examples/     # Sample events
│   └── event_sample.json
├── tests/
│   └── smoke.ts       # Smoke test
└── package.json
```

## Core Invariant

**Every event MUST have a `contact_id` before ingestion.**

This is enforced by `assertContactId()` in `invariants.ts`.

## What's Working

- ✓ Event ingestion with contact_id validation
- ✓ Sample event processing
- ✓ TypeScript compilation
- ✓ Smoke test passing

## Next Steps

1. Implement event storage (SQLite/SMS-iT)
2. Add GET endpoints for event retrieval
3. Expand test coverage
4. Connect to VFLP/DEA sites
