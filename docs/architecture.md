# AWOS Architecture

## High-Level Structure

AWOS is divided into two independent layers.

```
+-----------------------------+
|      Web Client (Next.js)   |
|-----------------------------|
| app/                        |
| ui/                         |
| providers/                  |
| hooks/                      |
+-----------------------------+

              │

              ▼

+-----------------------------+
|      AWOS Platform          |
|-----------------------------|
| core/runtime                |
| core/events                 |
| core/orion                  |
| core/themes                 |
| core/audio                  |
| core/settings               |
+-----------------------------+
```

The platform contains no React or Next.js dependencies.

The web client observes the platform through providers and hooks.

## Design Principle

The platform owns behavior.

The UI owns presentation.