# ListenUp Public Contest Demo

This folder contains the complete public judge-demo source for ListenUp's
OpenAI Build Week 2026 entry. It is deliberately smaller than the private
product: the interactive sample is runnable, while authentication, databases,
private transcripts, deployment operations, and production secrets remain out.

## Run Locally

Requirements: Node.js 22.13 or newer and npm.

```bash
npm ci
npm run dev
```

Open http://localhost:3000, select **Run the judge sample**, and then select
**Build Transcript Brief**.

## Verify

```bash
npm run lint
npm run build
```

## GPT-5.6 Reference

`reference/generate-brief.ts` shows the exact structured-output pattern used by
the private product route: the OpenAI Responses API, `gpt-5.6-terra`,
`store: false`, a transcript length cap, and a Zod schema. The public reference
intentionally omits private session and rate-limit modules. Those controls are
described in the root README and judge testing guide.

The public UI does not call this function. Its synthetic result remains
deterministic so anonymous visitors cannot create unmetered model spend and so
the demo remains usable when a model project has no quota.

## Live Evidence

- Interactive showcase:
  https://listenup-buildweek.indigo-iris-5804.chatgpt.site
- Narrated demo:
  https://github.com/thefayth/listenup/releases/tag/build-week-2026-demo

## Ownership

Copyright 2026 Faith Cheltenham. The root evaluation license permits judges and
personal testers to clone and run this public demo. It does not grant
redistribution, training, commercial use, derivative work, or production
deployment rights.
