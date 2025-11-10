// src/types.ts
export interface Bio {
  name: string;
  email: string;
  phone?: string;
  location?: string;
  interests?: string[];
  summary?: string;
  photo?: string | null;
}

export interface Project {
  title: string;
  company?: string;
  date?: string;
  description?: string;
  stack?: string[];
  link?: string;
}

export interface Role {
  title: string;
  start_date?: string;
  end_date?: string;
  location?: string;
  description?: string[];
  stack?: string[];
  projects?: Project[];
}

export interface CompanyExperience {
  company: string;
  department?: string;
  location?: string;
  start_date?: string;
  end_date?: string;
  roles: Role[];
}

export interface Education {
  institution: string;
  degree: string;
  location?: string;
  graduation_date?: string;
  thesis?: string;
  grades?: Record<string, string>;
  erasmus?: string;
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface SkillsFile {
  skills: SkillCategory[];
}
