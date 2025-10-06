# Astro Starter Kit: Basics

```sh
npm create astro@latest -- --template basics
```

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src
│   ├── assets
│   │   └── astro.svg
│   ├── components
│   │   └── Welcome.astro
│   ├── layouts
│   │   └── Layout.astro
│   └── pages
│       └── index.astro
└── package.json
```

To learn more about the folder structure of an Astro project, refer to [our guide on project structure](https://docs.astro.build/en/basics/project-structure/).

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).

:-----------------------------------------------------------------------------:

# RUNA - Astro + React Islands (SPA)
## Quick start
1. Crear proyecto: `npm init astro@latest` y seleccionar template vacío.
2. Copia los archivos del repositorio (reemplaza los paths y assets como `public/assets/logo.png`).
3. Instala dependencias: `npm install`.
4. Ejecuta en desarrollo: `npm run dev`.

## Notas
- El `index.astro` hidrata `App.jsx` con `client:load`, esto monta toda la app React en el cliente y habilita rutas y estado, consiguiendo una experiencia tipo SPA.
- Reemplaza las imagenes de muestra con tu logo y fotografías de producto en `public/assets/`.
- Ajusta el `tailwind.config.cjs` si deseas más utilidades de diseño.
