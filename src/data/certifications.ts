import type { Certification } from '../types';

export const certifications: Certification[] = [
  {
    id: 'linux-ultimate',
    title: 'Ultimate Linux: de uso de la terminal a shell scripting',
    institution: 'Udemy',
    date: 'Mayo 2024',
    description:
      'Formación completa en administración de linux utilizando Ubuntu, desde fundamentos del sistema y línea de comandos hasta automatización mediante shell scripting.',
    skills: [
      'Linux (Ubuntu)',
      'Terminal y línea de comandos',
      'Sistema de archivos Linux',
      'Permisos y usuarios',
      'Gestión de procesos',
      'Redes en Linux',
      'Gestión de paquetes (APT)',
      'Redirecciones y pipelines',
      'Expresiones regulares',
      'Shell Scripting',
    ],
    verifiedUrl: '/certificates/certificacion-linux.pdf',
  },
  {
    id: 'modern-ai',
    title: 'Introducción a la IA Moderna',
    institution: 'Cisco Networking Academy',
    date: 'Febrero 2026',
    description:
      'Fundamentos y aplicaciones prácticas de IA moderna, incluyendo modelos de lenguaje (LLMs), prompting y herramientas de IA.',
    skills: [
      'IA y Machine Learning',
      'Modelos de Lenguaje (LLMs)',
      'Ingeniería de Prompts',
      'IA Generativa (resumen y reescritura)',
      'Chatbots (uso práctico)',
      'Visión por Computador (conceptos)',
    ],
    verifiedUrl: 'https://www.credly.com/badges/70bf4106-364a-4300-bd13-e5c18ce99c72/public_url',
  },
  {
    id: 'data-science',
    title: 'Introducción a la Ciencia de Datos',
    institution: 'Cisco Networking Academy',
    date: 'Febrero 2026',
    description:
      'Fundamentos de Ciencia de Datos y analítica, con foco en el rol de los datos en IA/ML y comprensión del campo de Data Analytics.',
    skills: [
      'Fundamentos de Ciencia de Datos',
      'Promesas y desafíos del Data Analytics',
      'Rol de los datos en IA y ML',
      'Carreras en Data Analytics',
      'Conceptos base de Analítica',
    ],
    verifiedUrl: 'https://www.credly.com/badges/41177c6b-eabf-42e4-8b4f-06b24b11ac97/public_url',
  },
];
