---
name: prostranstvo-form project context
description: Security audit context for the prostranstvo-form Next.js project — known patterns, stack, and recurring risk areas
type: project
---

Next.js 16.2.2 / React 19 lead-capture form for marketplace consulting service (prostranstvo-form).

Key facts discovered during first audit (2026-04-11):
- API route: app/api/lead/route.ts — sends form data to Telegram bot
- Telegram credentials stored in .env.local (correctly, via process.env)
- .env.local is covered by .gitignore (.env* pattern) — good
- In-memory rate limiter (10 req / 10 min per IP) — resets on restart, no Redis/persistent store
- No security headers configured in next.config.ts (empty config)
- No CSP, no X-Frame-Options, no HSTS
- `order` URL query param on /form/success is rendered directly via React (no dangerouslySetInnerHTML — safe)
- No dangerouslySetInnerHTML found anywhere in codebase
- console.error on Telegram API failure may expose raw Telegram error response in server logs
- CORS not restricted — API endpoint open to cross-origin POST from any domain
- No CSRF protection on POST /api/lead
- Phone field: HTML pattern attr validates client-side, but server only checks length (7–30 chars), no format/digit validation

**Why:** First security audit — baseline established.
**How to apply:** In future reviews, focus on: security headers in next.config.ts, CSRF for the lead endpoint, and any new API routes that might bypass the existing rate limiter.
