// Tipo base para información de perfil
export interface Profile {
  name: string;
  title: string;
  currentStudy: string;
  previousDegree: string;
  upcomingDegree: string;
  targetRole: string;
  location: string;
  availability: string;
  about: string;
  strengths: string[];
}

// Categorías de skills
export type SkillCategory = 'Frontend' | 'Backend' | 'Database' | 'Tools';

// Tipo para skill individual
export interface Skill {
  name: string;
  category: SkillCategory;
  level?: 'Básico' | 'Intermedio' | 'Avanzado';
}

// Tipo para proyecto
export type ProjectType = 'Universidad' | 'Personal';

export interface Project {
  id: string;
  title: string;
  description: string;
  stack: string[];
  type: ProjectType;
  year: number;
  demoUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

// Tipo para experiencia/educación
export interface Experience {
  id: string;
  title: string;
  institution: string;
  period: string;
  description: string;
  type: 'education' | 'work';
  status?: 'En curso' | 'Completado' | 'Por completar';
}

// Tipo para datos de contacto
export interface ContactInfo {
  email: string;
  linkedIn: string;
  github: string;
}

// Tipo para el formulario de contacto
export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}
