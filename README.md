# Koretskiy Consulting

Website for Koretskiy Consulting at koretskiy.com.

## Venture Portfolio

Venture content lives in `lib/ventures.ts`. Public pages are generated automatically from that registry:

- `/{lang}/ventures`
- `/{lang}/ventures/[slug]`
- `/ventures` and `/ventures/[slug]` redirect to the English canonical presentation.

### Add a new venture

1. Add one new object to the `ventures` array in `lib/ventures.ts`.
2. Give it a unique `id` (`VENTURE-XXX`) and `slug`.
3. Set `visibility: 'public'` only when it is ready to be shown.
4. Use only factual assets and validation evidence. Do not add planned hackathon participation, pilots, awards, users or customers as validation before they actually exist.
5. Set the current `stage` and `status`. `Private` ventures are filtered from all public pages and the sitemap.
6. Add internal handoff fields as needed (`handoff_readiness`, repository, documentation, dependencies, costs, leads, next action, etc.).

No page component changes are required when a venture is added. The portfolio, detail route, metadata, OpenGraph image and sitemap entry are derived from the registry.
