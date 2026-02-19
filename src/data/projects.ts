import type { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'portafolio-terminal',
    title: 'Portafolio Terminal',
    description:
      'Portafolio profesional desarrollado con Astro y TypeScript, con interfaz inspirada en una terminal de comandos. El proyecto implementa arquitectura por componentes, generación de contenido estático para alto rendimiento y SEO, diseño responsive con Bootstrap y un sistema visual orientado a una experiencia de usuario moderna e interactiva.',
    stack: ['Astro', 'TypeScript', 'Bootstrap 5', 'CSS3', 'Netlify'],
    type: 'Personal',
    year: 2026,
    demoUrl: 'https://francisco-molina.netlify.app/',
    githubUrl: 'https://github.com/Isco-Lina/portafolio-terminal',
    featured: true,
  },

  {
    id: 'reloj-control',
    title: 'Sistema Reloj Control - Gestión de Asistencia',
    description:
      'Aplicación web tipo PWA para la gestión de asistencia laboral con autenticación de usuarios y control horario individual. Permite registro de entrada y salida, cálculo automático de horas trabajadas con descuento de colación, filtrado por rangos personalizados y generación de reportes en PDF y Excel. Implementa autenticación segura con Firebase, reglas de acceso por usuario y despliegue en entorno cloud.',
    stack: [
      'React',
      'Vite',
      'Bootstrap 5',
      'Firebase (Auth & Firestore)',
      'vite-plugin-pwa',
      'jsPDF',
      'SheetJS',
      'Netlify',
      'Git/GitHub'
    ],
    type: 'Personal',
    year: 2026,
    demoUrl: 'https://clock-control.netlify.app/',
    githubUrl: 'https://github.com/Isco-Lina/ClockControl',
    featured: true,
  },

  {
    id: 'carrito-compras-firebase',
    title: 'Ferreteria El Maestro - Carrito de Compras',
    description:
      'Aplicación web de carrito de compras desarrollada con React y Firebase para la venta de herramientas y materiales de construcción. Incluye catálogo de productos, formulario de contacto, subida de archivosy autenticación de usuarios.',
    stack: ['React', 'Vite', 'Firebase', 'Bootstrap 5', 'Apache Cordova', 'Netlify'],
    type: 'Universidad',
    year: 2025,
    demoUrl: 'https://carrito-compras-firebase.netlify.app/',
    githubUrl: 'https://github.com/Isco-Lina/carrito-compras-firebase',
    featured: false,
  },

  {
    id: 'tienda-online',
    title: 'Maqueta-Outdoor-Web',
    description:
      'Este proyecto es una maqueta funcional de e-commerce para equipamiento y ropa outdoor, desarrollado con React + Vite + Bootstrap 5.Incluye catálogo de productos, carrito persistente en localStorage, filtros por categorías/subcategorías, vista rápida (modal), y formulario de contacto integrado con WhatsApp/Email. ',
    stack: [
      'React',
      'Vite',
      'Bootstrap 5',
      'React Router DOM',
      'CSS personalizados',
      'LocalStorage',
      'Netlify',
    ],
    type: 'Personal',
    year: 2025,
    demoUrl: 'https://maquetaoutdoorreact.netlify.app/',
    githubUrl: 'https://github.com/Isco-Lina/Maqueta-Outdoor-Web',
    featured: false,
  },

  {
    id: 'calculo-calificaciones-formulario-registro',
    title: 'Calculadora de Calificaciones y Formulario de Registro',
    description:
      'Aplicación web desarrollada con Vue.js que permite a los estudiantes calcular su promedio de calificaciones en tiempo real y registrarse mediante un formulario validado. Implementa una arquitectura basada en componentes, manejo de estado reactivo y validación de datos, enfocada en una experiencia de usuario clara e intuitiva.',
    stack: ['Vue.js', 'HTML5', 'CSS', 'JavaScript', 'Netlify'],
    type: 'Universidad',
    year: 2024,
    demoUrl: 'https://calculonotas-formularioregistro.netlify.app/',
    githubUrl: 'https://github.com/Isco-Lina/CalculoCalificaciones-FormularioRegistro.git',
  },
];

// Función helper para filtrar proyectos por tipo
export function getProjectsByType(type: string): Project[] {
  return projects.filter((project) => project.type === type);
}

// Función helper para obtener proyectos destacados
export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.featured === true);
}

// Función helper para obtener proyecto por ID
export function getProjectById(id: string): Project | undefined {
  return projects.find((project) => project.id === id);
}
