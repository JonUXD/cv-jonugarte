# Jon Ugarte - Personal Portfolio & CV

I did this project to polish my front end development skills and learn about best practices and new challenges. Built with React, TypeScript and Meterial-UI. I used vite to create the backbone of the project. There will be ongoing developments that should match the most updated version of the CV.

I used netlify to deploy to the web and can be accessed with the links below. I registered the domain jonugarte.me on cloudfare to make the domain name more unique.

I tried to use a stracture that made sense in my mind, storing the data in JSONs and separating them by object type. I then structured the page in tabs (or pages) and components (for example skills section). So hopefully navigating through them should not be very complex for the reader.


## 🚀 Live Deployment

- **Primary Domain**: [www.jonugarte.me](https://www.jonugarte.me)
- **Netlify Subdomain**: [https://cv-jonugarte.netlify.app/](https://cv-jonugarte.netlify.app/)
- **Custom Domain**: Registered via Cloudflare (jonugarte.me)


## 🚀 Installation & Development

```bash
# Clone the repository
git clone https://github.com/JohnyUXD/cv-jonugarte.git
cd cv-jonugarte

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Lint code
npm run lint

# Preview production build
npm run preview

## ✨ Features

- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Professional Styling**: Custom Material-UI theme with professional color palette
- **Multi-page Navigation**: CV, Projects, and About Me sections
- **Interactive Components**: Expandable project cards, skill chips, and career timeline
- **TypeScript**: Fully typed for better development experience
- **Performance Optimized**: Built with Vite for fast development and builds

## 🛠 Tech Stack

- **Frontend Framework**: React 19.1.1 with TypeScript
- **UI Library**: Material-UI (MUI) v7.3.5 with custom theme
- **Build Tool**: Vite 7.2.4
- **Routing**: React Router DOM v7.9.6
- **Icons**: Custom SVG icons for companies and project types
- **Styling**: Emotion (CSS-in-JS) with Material-UI theming

## 📋 Pages & Sections

### CV Page
- Professional summary and contact information
- Work experience with detailed role descriptions
- Education history with thesis information
- Skills categorized by technical and professional
- Interactive career timeline

### Projects Page
- Filterable project gallery by type, technology, and company
- Sortable by date (newest/oldest)
- Expandable project cards with highlights and tech stack
- Company project icons and categorization

### About Me Page
- Personal biography and professional journey
- Contact information
- Personal interests with visual icons

## 🎨 Design System

### Color Palette
- **Primary**: `#05DBDB` (Cyan) - Main brand color
- **Secondary**: `#FFCE61` (Yellow) - Highlights and accents
- **Background**: `#F8F9FA` (Light gray)
- **Text**: `#1D1D1B` (Near black)
- **Surface**: `#FFFFFF` (Cards and components)

### Typography
- **Font Family**: Inter, Roboto, system fonts
- **Hierarchy**: Clear heading structure with appropriate weights

## 📊 Data Structure

The application uses JSON files for content management:

- **bio.json**: Personal information, contact details, and summary
- **experience.json**: Work history with roles, responsibilities, and technologies
- **education.json**: Academic background and achievements
- **projects.json**: Portfolio projects with metadata and tech stacks
- **skills.json**: Categorized technical and professional skills
