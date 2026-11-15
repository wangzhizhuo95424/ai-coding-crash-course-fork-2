## Agent skills

### Issue tracker

Issues and specs are local markdown files under `.scratch/<feature-slug>/`; do not use GitHub Issues. See `docs/agents/issue-tracker.md`.

### Triage labels

The five default triage roles apply unchanged, recorded as a `Status:` line in each issue file. See `docs/agents/triage-labels.md`.

### Domain docs

Single-context: root `GLOSSARY.md` plus `docs/adr/`. See `docs/agents/domain.md`.

## Migrations

Every schema or migration change also updates the seed script: keep its hardcoded `DROP TABLE` list in sync before it re-applies the Drizzle migrations. See `scripts/seed.ts`.
