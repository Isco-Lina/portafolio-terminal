# 💻 Portafolio Terminal - Francisco Javier Antonio Molina Carrillo

Portafolio profesional con diseño inspirado en terminal/CLI, construido con Astro, TypeScript y Bootstrap 5.

## 🚀 Características

- **Astro 5** - Framework moderno con zero JS por defecto
- **TypeScript Estricto** - Tipado completo sin `any`
- **Bootstrap 5** - Sistema de grid y componentes responsive
- **Bootstrap Icons** - Iconografía profesional integrada
- **Tema Terminal/CLI** - Diseño profesional oscuro con acentos cian/verde
- **100% Accesible** - HTML semántico y aria-labels
- **Datos Tipados** - Toda la información viene desde `src/data/` con tipos en `src/types/`
- **SEO Optimizado** - Meta tags y estructura semántica
- **Performance** - Lighthouse score alto
- **Sin JS pesado** - Solo JavaScript mínimo donde es necesario

## 📁 Estructura del Proyecto

```
portafolio-terminal/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── About.astro
│   │   ├── Contact.astro
│   │   ├── Experience.astro
│   │   ├── Footer.astro
│   │   ├── Hero.astro
│   │   ├── Navbar.astro
│   │   ├── Projects.astro
│   │   └── Skills.astro
│   ├── data/
│   │   ├── experience.ts
│   │   ├── profile.ts
│   │   ├── projects.ts
│   │   └── skills.ts
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   └── index.astro
│   ├── styles/
│   │   ├── global.css
│   │   └── terminal.css
│   └── types/
│       └── index.ts
├── .eslintignore
├── .eslintrc.json
├── .gitignore
├── .prettierignore
├── .prettierrc.json
├── astro.config.mjs
├── package.json
├── tsconfig.json
└── README.md
```

## 🛠️ Instalación

### Pasos

1. **Instalar dependencias:**

```bash
npm install
```

2. **Ejecutar en desarrollo:**

```bash
npm run dev
```

El sitio estará disponible en `http://localhost:4321`

3. **Compilar para producción:**

```bash
npm run build
```

4. **Vista previa de producción:**

```bash
npm run preview
```

## 📝 Scripts Disponibles

| Comando           | Descripción                                     |
| ----------------- | ----------------------------------------------- |
| `npm run dev`     | Inicia servidor de desarrollo                   |
| `npm run build`   | Compila para producción (incluye type checking) |
| `npm run preview` | Preview del build de producción                 |
| `npm run lint`    | Ejecuta ESLint                                  |
| `npm run format`  | Formatea código con Prettier                    |

## 🎨 Personalización

### Modificar Datos Personales

Edita los archivos en `src/data/`:

- **profile.ts** - Información personal, about, fortalezas
- **skills.ts** - Habilidades técnicas por categoría
- **projects.ts** - Proyectos con descripción, stack, links
- **experience.ts** - Educación, experiencia laboral, datos de contacto

### Modificar Estilos

Los estilos están en `src/styles/`:

- **global.css** - Variables CSS, estilos base, Bootstrap
- **terminal.css** - Tema terminal específico, animaciones

Variables CSS principales:

```css
--terminal-bg: #0d0d0d;
--terminal-text: #a8e6cf;
--terminal-accent: #00d9ff;
--terminal-prompt: #ffd93d;
```

## 🚀 Deploy

### Netlify

1. Conecta tu repositorio
2. Build command: `npm run build`
3. Publish directory: `dist`

### Vercel

1. Conecta tu repositorio
2. Framework preset: Astro
3. Deploy automático

### GitHub Pages

```bash
npm run build
# Sube la carpeta dist/ a gh-pages branch
```

O configura GitHub Actions:

```yaml
# .github/workflows/deploy.yml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18
      - run: npm ci
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

## 🔧 Tecnologías

- [Astro](https://astro.build) - Framework web moderno
- [TypeScript](https://www.typescriptlang.org/) - Tipado estático
- [Bootstrap 5](https://getbootstrap.com/) - Framework CSS
- [Bootstrap Icons](https://icons.getbootstrap.com/) - Biblioteca de iconos
- [ESLint](https://eslint.org/) - Linter de código
- [Prettier](https://prettier.io/) - Formateador de código

## 📄 Licencia

Este proyecto está bajo licencia MIT. Puedes usarlo libremente para tu propio portafolio.

## 👤 Autor

**Francisco Javier Antonio Molina Carrillo**

- Estudiante de Ingeniería en Informática
- Ingeniero de Ejecución en Administración
- Full Stack Developer en formación
- Región del Maule, Chile

---

**Nota**: Recuerda actualizar los datos en `src/data/` con tu información personal antes de deployar.
