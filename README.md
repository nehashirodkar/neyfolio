# Neha's Portfolio

Personal portfolio site targeting AI PM, SDE, and AI Engineer roles.

## Stack

- **Framework:** Next.js (App Router) + TypeScript
- **Styling:** Tailwind CSS
- **Deploy:** Vercel
- **Positioning:** Single site with a PM ↔ Engineering role toggle that reframes the same projects for different audiences.

## Folder structure

```
Portfolio/
├── app/                        # Next.js App Router pages
│   ├── about/                  # /about
│   ├── projects/
│   │   └── [slug]/             # /projects/:slug — project detail pages
│   ├── experience/             # /experience
│   ├── blog/                   # /blog (case studies, useful for PM lens)
│   └── contact/                # /contact
├── components/
│   ├── layout/                 # Navbar, Footer
│   ├── ui/                     # Reusable bits (RoleToggle, ProjectCard, Button, etc.)
│   └── sections/               # Page sections (Hero, About, Skills, ExperienceList)
├── content/                    # Typed data files (single source of truth)
│   # profile.ts, projects.ts, experience.ts, skills.ts
├── lib/                        # Helpers, role-context provider, utils
├── public/
│   ├── resume/                 # neha-pm.pdf, neha-eng.pdf
│   ├── images/projects/        # Project screenshots / thumbnails
│   └── icons/                  # Favicons, logos
└── styles/                     # globals.css
```

## What's pending before we build

1. **PM resume PDF** → drop in `public/resume/`
2. **Engineering resume PDF** → drop in `public/resume/`
3. **LinkedIn URL** → goes into `content/profile.ts`
4. Decisions on:
   - Color/typography direction (clean minimalist vs. expressive)
   - Whether to include a blog/case-studies section at launch
   - Project list — which 3-6 projects to feature

## Next steps

1. Initialize Next.js project (`npx create-next-app@latest .`)
2. Install + configure Tailwind
3. Add `RoleContext` + `RoleToggle` for PM/Engineering switching
4. Build out content files from resumes
5. Implement pages section-by-section
6. Deploy to Vercel
