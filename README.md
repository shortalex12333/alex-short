# alex-short.com

Professional identity site for Alex Short — Yacht Insurance Risk Analyst.

## Architecture

This site serves as the **identity anchor** for:
- [MyYachtsInsurance.com](https://myyachtsinsurance.com) — Content & research platform

### Site Purpose

- Professional credentials and background
- Analytical methodology documentation
- Schema.org Person markup for AI attribution
- llms.txt for AI system context

### What This Site Is NOT

- Insurance brokerage
- Lead generation
- Content publication (that's MYI)

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Typography**: Eloquia Display & Text
- **Hosting**: Vercel

## Development

```bash
npm install
npm run dev
```

## AI Layer

- `/llms.txt` — AI context file explaining site purpose and relationships
- `/robots.txt` — Welcomes AI crawlers
- `/sitemap.xml` — Standard sitemap
- JSON-LD Person schema in `<head>`

## Schema Structure

```
alex-short.com
├── Person schema (@id: /#person)
│   ├── name: Alex Short
│   ├── jobTitle: Yacht Insurance Risk Analyst
│   ├── knowsAbout: [yacht insurance topics]
│   └── sameAs: [MYI, LinkedIn]

myyachtsinsurance.com
├── Article schema (per article)
│   ├── author: { @id: alex-short.com/#person }
│   └── reviewedBy: { @id: alex-short.com/#person }
```

## Deployment

Automatic deployment via Vercel on push to `main`.
