import type { Certification } from '../types';

export const certifications: Certification[] = [
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
    verifiedUrl: 'https://www.credly.com/badges/70bf4106-364a-4300-bd13-e5c18ce99c72/public_url',
  },
];
