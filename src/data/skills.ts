import type { Skill } from '../types';

export const skills: Skill[] = [
  // Frontend
  { name: 'HTML5 / CSS3', category: 'Frontend', level: 'Avanzado' },
  { name: 'JavaScript / TypeScript', category: 'Frontend', level: 'Intermedio' },
  { name: 'React', category: 'Frontend', level: 'Intermedio' },
  { name: 'Bootstrap 5', category: 'Frontend', level: 'Avanzado' },
  { name: 'Astro', category: 'Frontend', level: 'Intermedio' },
  { name: 'Vite', category: 'Frontend', level: 'Intermedio' },
  { name: 'Responsive Design', category: 'Frontend', level: 'Avanzado' },

  // Backend
  { name: 'Node.js', category: 'Backend', level: 'Intermedio' },
  { name: 'Express', category: 'Backend', level: 'Intermedio' },
  { name: 'Python', category: 'Backend', level: 'Intermedio' },
  { name: 'API REST', category: 'Backend', level: 'Intermedio' },
  { name: 'Java', category: 'Backend', level: 'Básico' },

  // Database
  { name: 'MySQL', category: 'Database', level: 'Intermedio' },
  { name: 'PostgreSQL', category: 'Database', level: 'Intermedio' },
  { name: 'MongoDB', category: 'Database', level: 'Básico' },

  // Tools
  { name: 'Git / GitHub', category: 'Tools', level: 'Avanzado' },
  { name: 'VS Code', category: 'Tools', level: 'Avanzado' },
  { name: 'npm / pnpm', category: 'Tools', level: 'Avanzado' },
  { name: 'Linux / Bash', category: 'Tools', level: 'Intermedio' },
  { name: 'Docker', category: 'Tools', level: 'Básico' },
  { name: 'Postman', category: 'Tools', level: 'Intermedio' },
];

// Función helper para obtener skills por categoría
export function getSkillsByCategory(category: string): Skill[] {
  return skills.filter((skill) => skill.category === category);
}

// Función helper para obtener todas las categorías únicas
export function getCategories(): string[] {
  return Array.from(new Set(skills.map((skill) => skill.category)));
}
