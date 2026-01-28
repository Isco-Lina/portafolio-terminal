import type { Experience, ContactInfo } from '../types';

export const experiences: Experience[] = [
  {
    id: 'ing-informatica',
    title: 'Ingeniería en Informática',
    institution: 'Instituto Profesional Iplacex',
    period: '2024 - Presente',
    description:
      'Cursando 3er año. Enfoque en desarrollo de software, bases de datos, estructuras de datos y algoritmos. Participación activa en proyectos académicos de desarrollo web y sistemas.',
    type: 'education',
    status: 'En curso',
  },
  {
    id: 'analista-programador',
    title: 'Analista Programador',
    institution: 'Instituto Profesional Iplacex',
    period: '2024 - 2026',
    description:
      'Carrera técnico-profesional enfocada en análisis, diseño e implementación de sistemas informáticos. Titulación prevista para 2026.',
    type: 'education',
    status: 'Por completar',
  },
  {
    id: 'ing-administracion',
    title: 'Ingeniero de Ejecución en Administración',
    institution: 'Instituto Profesional Santo Tomás, Talca',
    period: '2015 - 2020',
    description:
      'Formación en gestión empresarial, finanzas, planificación estratégica y administración de proyectos. Base sólida para entender requerimientos de negocio en desarrollo de software.',
    type: 'education',
    status: 'Completado',
  },
  {
    id: 'fullstack-formation',
    title: 'Desarrollador Full Stack en Formación',
    institution: 'Proyectos Académicos y Personales',
    period: '2024 - Presente',
    description:
      'Desarrollo continuo de habilidades mediante proyectos prácticos. Experiencia en diseño de interfaces, desarrollo de APIs REST, gestión de bases de datos y despliegue de aplicaciones web.',
    type: 'work',
    status: 'En curso',
  },
];

export const contactInfo: ContactInfo = {
  email: 'molina.carrillo1996@gmail.com',
  linkedIn: 'https://linkedin.com/in/francisco-molina-carrillo',
  github: 'https://github.com/Isco-Lina',
};
