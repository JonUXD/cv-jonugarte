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
├── public/
├── research/
│   ├── images/
│   ├── design.md
│   └── technical.md
├── src/
│   ├── assets/
│   │   └── icons/
│   │       ├── companies/
│   │       └── other/
│   ├── components/
│   │   ├── CompanyIcon.tsx
│   │   ├── EducationCard.tsx
│   │   ├── ExperienceCard.tsx
│   │   ├── LoadingSpinner.tsx
│   │   ├── ProjectCard.tsx
│   │   └── SkillChip.tsx
│   ├── data/
│   │   ├── bio.json
│   │   ├── education.json
│   │   ├── experience.json
│   │   ├── projects.json
│   │   └── skills.json
│   ├── pages/
│   │   ├── AboutMePage.tsx
│   │   ├── CVPage.tsx
│   │   └── ProjectsPage.tsx
│   ├── sections/
│   │   ├── Bio.tsx
│   │   ├── Education.tsx
│   │   ├── Experience.tsx
│   │   ├── ProjectsPreview.tsx
│   │   └── Skills.tsx
│   ├── theme/
│   │   └── theme.ts
│   ├── utils/
│   │   └── dateUtils.ts
│   ├── App.css
│   ├── App.tsx
│   ├── index.css
│   ├── main.tsx
│   └── types.ts
├── tools/
│   └── config.json
├── README.md
├── eslint.config.js
├── index.html
├── package.json
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts


## Installation

Download the package
git clone https://github.com/JohnyUXD/cv-jonugarte.git
cd cv-jonugarte

Install Dependencies
npm install
npm run dev
