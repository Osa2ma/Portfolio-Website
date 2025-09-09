# Portfolio Website

Concise, fast-loading personal site showcasing who you are, what you’ve built, and how to reach you.

---

## Snapshot
Sections live now: About · Projects · Education . Experience · Certifications · Interests · Contact  
Tech: HTML5 · CSS (Grid/Flex/Vars) · Vanilla JS · Font Awesome · Google Fonts · Vercel-ready

---

## Layout Map
```
.
├── index.html        # Single-page structure (anchors for all sections)
├── css/              # Styles (base, theme, components)
├── js/               # Behavior (theme toggle, interactions)
├── assets/           # Shared images/icons
├── projects/         # Project showcase media
├── package.json      # (Optional) tooling / metadata
├── vercel.json       # Deployment config
├── .gitignore
└── README.md
```

---

## 🚀 Deploy (Vercel)
Option A (CLI):
```
npm i -g vercel
vercel
```
Option B:
- Connect repo in [Vercel Dashboard](https://vercel.com/)
- Auto build on push to `main`

`vercel.json` can refine headers / clean URLs.

---

## 🛠 Extend (Ideas)
- Real form handling (Formspree / serverless function)
- Analytics (Plausible / Fathom / GA)
- Project data as JSON → rendered dynamically
- Image lazy loading + `loading="lazy"`
- Section intersection observer → highlight nav

---



---
## Add a Real Contact Form (Optional)

This project includes a basic form structure.  
To make it functional, integrate with **EmailJS** (no backend needed).

### Setup with EmailJS
1. Go to [EmailJS](https://www.emailjs.com/) and create an account.
2. Create a new email service + template.
3. Get your **Service ID**, **Template ID**, and **Public Key**.
4. Install EmailJS SDK:
   ```bash
   npm install emailjs-com

---


