# Sachin Resume Portfolio

Node.js + Express portfolio site powered by EJS templates and `data/resume_data.js`.

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Update content

Edit `data/resume_data.js` for profile, projects, experience, skills, and education. Place images under `public/images/`. Optional PDF: set `resume_pdf` and add the file to `public/resume/`.

## Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Run production server |
| `npm run dev` | Run with nodemon (auto-reload) |

## Structure

- `views/partials/` — page sections
- `public/css/` — modular stylesheets
- `public/js/` — animations, navigation, sliders
- `routes/resume_routes.js` — home page + optional resume PDF download
