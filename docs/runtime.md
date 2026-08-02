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