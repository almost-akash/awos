## ADR-001 — AWOS Owns All State

Decision:
AWOS will be the single owner of runtime state.

Reason:
Avoid scattered React state and keep the operating system metaphor intact.

Status:
Accepted

# ADR-001 — Runtime Ownership

## Status

Accepted

## Decision

AWOS is the sole owner of runtime state.

React does not mutate runtime state. It subscribes to runtime snapshots exposed by the RuntimeKernel.

## Rationale

This keeps the runtime independent from the UI layer and allows future systems such as ORION, Audio Engine, Diagnostics, Theme Engine, and Module Manager to observe runtime changes without depending on React.

## Consequences

- React becomes an adapter.
- AWOS becomes platform-agnostic.
- Future desktop clients or CLI interfaces can reuse the same runtime.