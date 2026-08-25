# Bhavitha G. — Portfolio

A personal portfolio website for **Bhavitha G**, a 2026 Computer Science and Design Engineering
graduate. Built to showcase full-stack projects, a machine learning final-year project, a
four-month internship, a research publication, and data analytics work — positioned for
entry-level software / full-stack / ML / data roles.

## 1. Project Overview

Single-page portfolio with the following sections: Hero, About, Skills, Experience (Internship),
Projects, Education, Achievement (Publication), and Contact. Navigation is sticky with smooth
scrolling and a mobile hamburger menu.

## 2. Technologies Used

- **React 18** — UI components
- **Vite 5** — build tool / dev server
- **Tailwind CSS 3** — styling
- Plain JavaScript (no backend — this is a static portfolio)

## 3. Project Structure

```
src/
  components/
    Navbar.jsx
    Button.jsx
    ProjectCard.jsx
    SectionTitle.jsx
    Footer.jsx
  sections/
    Hero.jsx
    About.jsx
    Skills.jsx
    Experience.jsx
    Projects.jsx
    Education.jsx
    Achievement.jsx
    Contact.jsx
  data/
    projects.js
    skills.js
    education.js
  App.jsx
  main.jsx
  index.css
public/
  favicon.svg
index.html
tailwind.config.js
postcss.config.js
vite.config.js
package.json
```

## 4. Installation

```bash
npm install
```

## 5. Running Locally

```bash
npm run dev
```

Open the local URL printed in the terminal (usually **http://localhost:5173**) in your browser.

## 6. Building for Production

```bash
npm run build
```

This outputs a production-ready build to the `dist/` folder. You can preview it locally with:

```bash
npm run preview
```

## 7. Where to Update Content Later

- **Project links** — edit `src/data/projects.js`. Fill in the `github` and `demo` fields for
  each project with the real repository/demo URLs. Leave a field as `""` to keep that button
  hidden until the link is ready.
- **Contact information** — edit `src/sections/Contact.jsx` (phone, LinkedIn, GitHub) and
  `src/components/Footer.jsx` (GitHub, LinkedIn).
- **Profile image** — the hero section currently uses text only, no photo. If you'd like to add
  a profile photo, place the image in `src/assets/` and reference it from `src/sections/Hero.jsx`.
- **Skills / Education** — edit `src/data/skills.js` and `src/data/education.js`.
- **Open Graph image** — add an `og-image.png` file to the `public/` folder to replace the
  placeholder reference in `index.html`.

## 8. GitHub Repository

This project is already pushed to GitHub:
**https://github.com/Bhavithagolthila/Portfolio**

To push future changes:

```bash
git add .
git commit -m "your message"
git push
```

## 9. Deploying to Vercel

1. Create a GitHub repository and push this project (see step 8 above).
2. Go to [vercel.com](https://vercel.com) and sign in.
3. Click **Add New → Project**.
4. Import your GitHub repository.
5. Vercel auto-detects the Vite framework preset — leave the default build settings
   (`npm run build`, output directory `dist`).
6. Click **Deploy**.

No environment variables or backend configuration are required.