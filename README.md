# cv-jonugarte

Personal portfolio web application built with **React**, **TypeScript**, and **Vite**, showcasing my CV, projects, skills, and work experience.

---

## **Features**

- Single-page React application with **MUI (Material-UI) components**
- Displays:
  - Personal bio and contact information
  - Work experience with roles, responsibilities, and projects
  - Education and thesis information
  - Skills & technical skills
  - Projects overview
- Responsive design with dark/light mode support
- Modular structure with **pages**, **sections**, and **reusable components**
- JSON-based data storage for easy content updates

## **Project Structure**

cv-jonugarte/
├─ src/
│  ├─ components/
│  │  ├─ ExperienceCard.tsx
│  │  ├─ Footer.tsx
│  │  ├─ Header.tsx
│  │  ├─ ProjectCard.tsx
│  │  ├─ SectionTitle.tsx
│  │  └─ SkillChip.tsx
│  ├─ pages/
│  │  ├─ AboutMePage.tsx
│  │  ├─ CVPage.tsx
│  │  └─ ProjectsPage.tsx
│  ├─ sections/
│  │  ├─ Bio.tsx
│  │  ├─ Education.tsx
│  │  ├─ Experience.tsx
│  │  ├─ ProjectsPreview.tsx
│  │  └─ Skills.tsx
│  ├─ data/
│  │  ├─ bio.json
│  │  ├─ education.json
│  │  ├─ experience.json
│  │  ├─ projects.json
│  │  └─ skills.json
│  ├─ App.tsx
│  ├─ main.tsx
│  ├─ App.css
│  └─ index.css
├─ tools/
│  ├─ config.json
│  └─ generate_all_code.py
├─ index.html
├─ package.json
├─ tsconfig.json
├─ tsconfig.app.json
├─ tsconfig.node.json
├─ vite.config.ts
└─ eslint.config.js


## Installation

Download the package
git clone https://github.com/JohnyUXD/cv-jonugarte.git
cd cv-jonugarte

Install Dependencies
npm install
npm run dev
