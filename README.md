# Ritesh Yadav Portfolio

Modern responsive portfolio built with React, Tailwind CSS, Framer Motion and Lucide React.

## Run locally

```bash
npm install
npm run dev
```

Then open the local URL shown by Vite.

## Build

```bash
npm run build
npm run preview
```

## Add a new project

Open:

`src/data/projects.js`

Add another object to the `projects` array. The UI, cards and category filters update automatically.

## Replace personal details

Update:
- `src/components/Hero.jsx`
- `src/components/Contact.jsx`
- `src/data/projects.js`

Replace placeholder GitHub, LinkedIn and email links with your real links.

## Images

Profile image:
`public/profile.png`

Project images:
`public/projects/`

If a project image is not available yet, the card automatically falls back to `placeholder.svg`.
