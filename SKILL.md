# Claude Code Skill: Portfolio Website from Resume

## Trigger

Use this skill when a user wants to generate a personal developer portfolio website from their resume or professional background.

---

## What This Skill Does

Reads a resume (PDF or text) and generates a complete, production-ready portfolio website with:
- A personalized landing/hero section
- Experience & education timeline
- Projects showcase with tech stack tags
- Skills grid
- Contact section

---

## File Structure to Create

```
portfolio/
├── index.html              # Main entry point
├── style.css               # Global styles, CSS variables, typography
├── script.js               # Scroll animations, interactivity
├── assets/
│   └── icons/              # SVG icons for tech stack (optional)
├── sections/
│   ├── hero.html           # Name, tagline, CTA (can be inlined)
│   ├── experience.html     # Timeline of jobs
│   ├── projects.html       # Project cards with tags
│   ├── skills.html         # Skill chips grouped by category
│   └── contact.html        # Contact links
└── README.md               # How to run/deploy
```

> For simpler output: merge all sections into a single `index.html` with `<section id="...">` blocks.

---

## Step-by-Step Instructions

### 1. Parse the Resume

Extract the following from the uploaded resume:
- Full name
- Contact (email, phone, LinkedIn, GitHub)
- Professional experience: company, role, dates, bullet points
- Education: degree, institution, GPA, years
- Projects: title, description bullets, technologies used
- Skills: grouped (e.g., Backend, Frontend, Cloud, DevOps)

### 2. Choose an Aesthetic Direction

Pick a theme that fits the candidate's personality and stack:
- **For cloud/enterprise profiles** (SAP, AWS, Java): clean, minimal, professional — dark navy or off-white
- **For frontend/creative profiles**: bold typography, vibrant accents, motion-heavy
- **For full-stack generalists**: editorial layout, neutral tones, crisp grid

Avoid generic AI-default purple gradients. Use distinctive fonts from Google Fonts (e.g., `Syne`, `Space Mono`, `DM Serif Display`, `Instrument Serif`, `Fraunces`).

### 3. Build index.html

Structure:
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>{Name} — Portfolio</title>
  <link rel="stylesheet" href="style.css" />
  <link href="https://fonts.googleapis.com/css2?family=..." rel="stylesheet" />
</head>
<body>
  <nav>...</nav>
  <section id="hero">...</section>
  <section id="experience">...</section>
  <section id="projects">...</section>
  <section id="skills">...</section>
  <section id="contact">...</section>
  <script src="script.js"></script>
</body>
</html>
```

### 4. Style Rules (style.css)

```css
:root {
  --bg: #0e0e0e;
  --surface: #181818;
  --accent: #c8f04a;       /* pick a bold, on-brand accent */
  --text: #f0f0f0;
  --muted: #888;
  --font-display: 'Syne', sans-serif;
  --font-body: 'DM Sans', sans-serif;
  --radius: 10px;
  --max-width: 1100px;
}
```

Key patterns:
- Use `scroll-behavior: smooth` on `html`
- `.fade-in` class + IntersectionObserver for scroll reveals
- Sticky nav with backdrop blur
- Project cards: hover lift with `transform: translateY(-4px)` + box-shadow transition
- Tech tag chips: `border: 1px solid var(--accent); border-radius: 999px; padding: 4px 12px; font-size: 12px`

### 5. Add Interactivity (script.js)

```js
// Scroll reveal
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add('visible');
  });
}, { threshold: 0.15 });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
```

Also add:
- Active nav link highlighting on scroll
- Mobile hamburger menu toggle if needed

### 6. Sections Guide

#### Hero
- Large name in display font
- Short tagline (1 line, role-based: "Full-stack engineer @ SAP Labs")
- CTA buttons: "View Projects" + "Download Resume"

#### Experience
- Reverse-chronological timeline
- Left border line with dot markers
- Each entry: role, company, dates, 2–3 bullet points max

#### Projects
- 2–3 column card grid
- Each card: title, 1-sentence description, tech stack chips, optional GitHub link
- Highlight the most technically impressive project (featured card, larger)

#### Skills
- Group by category (Backend, Frontend, Cloud, DevOps)
- Render as pill chips, grouped under bold headings
- Optionally color-code by category

#### Contact
- Email, LinkedIn, GitHub — large clickable links
- No contact form needed unless user requests

---

## Deployment Note (add to README.md)

```md
## Run Locally
Open `index.html` in a browser — no build step needed.

## Deploy
- **GitHub Pages**: push to `gh-pages` branch or enable in repo settings
- **Vercel / Netlify**: drag and drop the folder
```

---

## Quality Checklist

- [ ] All resume data accurately reflected
- [ ] No placeholder text ("Lorem ipsum", "Your Name Here")
- [ ] Mobile responsive (use CSS grid/flex, test at 375px)
- [ ] Smooth scroll + fade-in animations working
- [ ] Links open correctly (LinkedIn, GitHub, email mailto)
- [ ] Fonts loaded from Google Fonts CDN
- [ ] Consistent color scheme throughout
- [ ] Accent color used sparingly (headings, tags, CTA — not everywhere)
