# Next.js Maintenance and Figma Implementation Demo

Interactive proposal demo for maintaining an existing React/Next.js website environment, converting approved Figma designs into responsive pages, and shipping clean GitHub pull requests.

## Why this demo exists

This is a focused proof-of-execution for a client with existing websites across multiple brands. It shows how I approach the work before writing production code: map the current codebase, identify reusable page patterns, implement Figma designs carefully, test responsive behavior, and leave reviewable handoff notes.

## What it demonstrates

- Next.js App Router project structure
- Responsive dashboard-style UI with desktop, tablet, and mobile behavior
- Figma-to-production implementation plan
- Reusable page/template thinking for two-brand website environments
- Maintenance workflow for existing codebases, GitHub PRs, QA notes, and rollback points
- Awareness of adjacent stack pieces: Node/Express, Firebase/Firestore, AWS S3, CloudFront, Lambda, API Gateway, and Route53

## Practical delivery approach

- Read the current routes, shared components, API calls, Firebase usage, and deployment flow
- Implement approved Figma pages as reusable responsive sections
- Keep brand-specific styling and content separate from shared page structure
- Ship small pull requests with screenshots and QA notes
- Check performance, SEO metadata, accessibility basics, and cross-browser behavior before handoff

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```
