// ------------------------
// Bio
// ------------------------
export interface Bio {
  name: string;
  email: string;
  phone: string;
  location: string;
  summary?: string;
  interests?: string[];
  photo?: string | null;
}

// ------------------------
// Projects
// ------------------------
export interface Project {
  title: string;
  company: string;
  date: string;
  summary: string;
  description: string;
  highlights?: string[];
  stack?: string[];
  experience_ref?: string;
  link?: string;
}

export type ProjectsData = Project[];

// ------------------------
// Experience
// ------------------------
export interface ExperienceProject {
  title: string;
  description?: string;
}

export interface ExperienceRole {
  title: string;
  start_date: string; 
  end_date: string; 
  description: string[];
  stack?: string[];
  projects?: ExperienceProject[];
  role_id?: string;
}

export interface ExperienceItem {
  company: string;
  department?: string;
  start_date: string;
  end_date: string;
  location: string;
  roles: ExperienceRole[];
}

export type ExperienceData = ExperienceItem[];

// ------------------------
// Education
// ------------------------
export interface Grade {
  subject: string;
  score: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  graduation_date: string;
  thesis?: string;
  erasmus?: string;
  grades?: Grade[];
}

export type EducationData = EducationItem[];

// ------------------------
// Skills
// ------------------------
export interface SkillCategory {
  category: string;
  items: string[];
}

export interface SkillsData {
  skills: SkillCategory[];
}