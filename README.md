# Techinifity — IT Consulting Website

A modern, fully responsive IT consulting website built with **Next.js 16**, **TypeScript**, and **Tailwind CSS v4**. Features dark/light mode, MDX-powered blog and case studies, animated UI, and a contact form backed by the Resend email API.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | [Next.js 16](https://nextjs.org) (App Router) |
| Language | TypeScript 5 |
| Styling | Tailwind CSS v4 |
| Animations | Framer Motion |
| Content | MDX via `next-mdx-remote` + `gray-matter` |
| Forms | React Hook Form + Zod |
| Email | [Resend](https://resend.com) |
| Dark Mode | `next-themes` |
| Icons | Lucide React |
| SEO | `next-sitemap` |

---

## Features

- **10 service pages** — Cloud Solutions, Cybersecurity, DevOps & CI/CD, Data & Analytics, AI & ML, Managed IT Support, Mobile Applications, Web Applications, Websites, SharePoint & Power Platform
- **MDX Blog** — markdown posts with frontmatter (author, date, tags, reading time)
- **Case Studies** — client project showcases with industry/category metadata
- **Contact form** — validated with Zod, submitted via `/api/contact` and delivered through Resend
- **Dark / Light mode** — system-preference aware with manual toggle
- **Fully mobile responsive** — hamburger nav, stacked layouts, fluid typography across all breakpoints
- **Auto-generated sitemap** on every build via `next-sitemap`
- **Static generation** — all pages pre-rendered at build time for fast load times

---

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── page.tsx            # Home
│   ├── about/
│   ├── services/[slug]/
│   ├── blog/[slug]/
│   ├── case-studies/[slug]/
│   ├── contact/
│   └── api/contact/        # Contact form API route
├── components/
│   ├── layout/             # Navbar, Footer
│   ├── sections/           # Hero, Services, Stats, Testimonials, CTA
│   ├── theme/              # ThemeToggle
│   └── ui/                 # Button, Card, Badge, SectionHeading
└── lib/
    ├── mdx.ts              # MDX content loader
    └── utils.ts            # Utility helpers

content/
├── blog/                   # MDX blog posts
└── case-studies/           # MDX case study entries
```

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm / yarn / pnpm

### Installation

```bash
git clone https://github.com/PavanKusunuri/techinifinity.git
cd techinifinity
npm install
```

### Environment Variables

Create a `.env.local` file in the project root:

```env
RESEND_API_KEY=your_resend_api_key_here
CONTACT_EMAIL=hello@techinifity.com
```

> Get a free API key at [resend.com](https://resend.com).

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build   # builds + auto-generates sitemap
npm run start
```

### Lint

```bash
npm run lint
```

---

## Adding Content

### Blog Post

Create a new `.mdx` file in `content/blog/`:

```mdx
---
title: "Your Post Title"
date: "2026-03-12"
author: "Author Name"
excerpt: "A short description shown on the blog listing."
tags: ["Cloud", "DevOps"]
readingTime: "5 min read"
---

Your content here...
```

### Case Study

Create a new `.mdx` file in `content/case-studies/`:

```mdx
---
title: "Client Project Title"
date: "2026-03-12"
client: "Client Name"
industry: "Finance"
category: "Cloud Migration"
excerpt: "Brief summary of the engagement."
---

Your content here...
```

---

## Deployment

The easiest way to deploy is [Vercel](https://vercel.com):

1. Push to GitHub
2. Import the repository on [vercel.com/new](https://vercel.com/new)
3. Add the environment variables (`RESEND_API_KEY`, `CONTACT_EMAIL`) in the Vercel dashboard
4. Deploy

The sitemap is generated automatically after every build and written to `public/sitemap.xml`.

---

## License

Private — all rights reserved by Techinifity.
