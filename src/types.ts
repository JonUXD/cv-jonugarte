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
}

// ------------------------
// Projects
// ------------------------
export interface Project {
  title: string;
  company: string;
  date: string;
  description: string;
  stack?: string[];
  link?: string;
}

export type ProjectsData = Project[];

// ------------------------
// Experience
// ------------------------
export interface ExperienceRole {
  title: string;
  start_date?: string;
  end_date?: string;
  description?: string[];
  stack?: string[];
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
  grades?: Grade[]; // now a list, optional
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
