import type { Skill } from '../types';

export const skills: Skill[] = [
  // Data & Analysis
  { name: 'Python', category: 'Data', level: 'Intermedio' },
  { name: 'SQL', category: 'Data', level: 'Intermedio' },
  { name: 'Data Analysis', category: 'Data', level: 'Intermedio' },
  { name: 'REST API Data Integration', category: 'Data', level: 'Intermedio' },

  // Frontend
  { name: 'HTML5 / CSS3', category: 'Frontend', level: 'Avanzado' },
  { name: 'JavaScript / TypeScript', category: 'Frontend', level: 'Intermedio' },
  { name: 'React', category: 'Frontend', level: 'Intermedio' },
  { name: 'Bootstrap', category: 'Frontend', level: 'Avanzado' },
  { name: 'Responsive Design', category: 'Frontend', level: 'Avanzado' },

  // Backend
  { name: 'Node.js', category: 'Backend', level: 'Intermedio' },
  { name: 'Express', category: 'Backend', level: 'Intermedio' },
  { name: 'API REST', category: 'Backend', level: 'Intermedio' },

  // Database
  { name: 'PostgreSQL', category: 'Database', level: 'Intermedio' },
  { name: 'MySQL', category: 'Database', level: 'Intermedio' },
  { name: 'MongoDB', category: 'Database', level: 'Básico' },

  // Tools
  { name: 'Git / GitHub', category: 'Tools', level: 'Avanzado' },
  { name: 'VS Code', category: 'Tools', level: 'Avanzado' },
  { name: 'Linux / Bash', category: 'Tools', level: 'Intermedio' },
  { name: 'Postman', category: 'Tools', level: 'Intermedio' },
  { name: 'Docker', category: 'Tools', level: 'Básico' },
];

// Función helper para obtener skills por categoría
export function getSkillsByCategory(category: string): Skill[] {
  return skills.filter((skill) => skill.category === category);
}

// Función helper para obtener todas las categorías únicas
export function getCategories(): string[] {
  return Array.from(new Set(skills.map((skill) => skill.category)));
}
