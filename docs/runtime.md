# Runtime

## Runtime Ownership

AWOS owns the RuntimeKernel.

No other system interacts with the kernel directly.

## Lifecycle

AWOS delegates runtime workflows to lifecycle implementations.

Current lifecycle:

- BootSequence

Future:

- ShutdownSequence
- RestartSequence
- RecoverySequence

## Runtime Journal

The Runtime Journal is the canonical history of the current AWOS session.

Every runtime workflow executes through `runtime.step()`.

Each step automatically:

1. Updates the current runtime step.
2. Appends an immutable journal entry.
3. Transitions runtime state (if applicable).
4. Notifies all subscribers.
5. Waits for the configured delay.

The journal is not boot-specific. It represents the lifetime of the current session and will later include module activity, theme changes, terminal commands, diagnostics, and ORION events.