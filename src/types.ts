// ------------------------
// Bio
// ------------------------
export interface Bio {
  name: string;
  email: string;
  phone?: string;
  github?: string;
  linkedin?: string;
  location: GeographicLocation;
  summary?: string;
  summary_long?: string;
  interests?: string[];
  photo?: string | null;
}

// ------------------------
// Projects
// ------------------------
export interface Project {
  title: string;
  projectType: "company" | "personal" | "academic";
  company?: string;
  date: string;
  summary: string;
  description: string;
  highlights?: string[];
  stack?: string[];
  screenshot?: string;
  experience_ref?: string;
  link?: string;
  icon?: string;
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
  department?: string;
  start_date: string; //ISO 8601 date format: YYYY-MM-DD
  end_date: string | null; //ISO 8601 date format: YYYY-MM-DD
  location: GeographicLocation;
  description: string[];
  stack?: string[];
  projects?: ExperienceProject[];
  role_id?: string;
}

export interface ExperienceItem {
  company: string;
  start_date: string; //ISO 8601 date format: YYYY-MM-DD
  end_date: string | null; //ISO 8601 date format: YYYY-MM-DD
  location?: GeographicLocation;
  roles: ExperienceRole[];
}

export type ExperienceData = ExperienceItem[];

// ------------------------
// Education
// ------------------------

export interface EducationItem {
  degree: string;
  institution: string;
  location: GeographicLocation;
  graduation_date: string;
  thesis?: string;
  erasmus?: string;
  description?: string[];
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

export interface GeographicLocation {
  display: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  osm_id?: string;
}