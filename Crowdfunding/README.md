# Crowdfunding — Frontend (Vite + React)

This repository contains a React + Vite frontend for a small crowdfunding UI: project list, pledge modal, progress indicators, and local notifications. It is a frontend demo only (no backend included).

## Features
- Project list with funding goals and current progress
- Pledge modal with multiple pledge options
- Progress bar and counters updated on pledges
- Local notifications/feedback
- Responsive layout and easy extensibility

## Tech stack
- React 19
- Vite
- JavaScript and CSS

## Prerequisites
- Node.js (recommended >= 14)
- npm (or yarn)

## Installation
Open PowerShell in the project folder and install dependencies:

```powershell
cd "c:\Users\Pc\OneDrive\Desktop\JS Projects\React\Front-end_Git\Crowdfunding"
npm install
```

## Development

```powershell
npm run dev
```

Open the URL shown in the terminal (default: http://localhost:5173).

## Production build

```powershell
npm run build
npm run preview
```

## Useful scripts (from `package.json`)
- `dev`: start Vite dev server
- `build`: create production build
- `preview`: preview production build locally
- `lint`: run ESLint

## Project structure (key files)
- `src/App.jsx` — main application component
- `src/Project.jsx` — project card/component
- `src/Notify.jsx` — notification component
- `src/projectsList.js` — example project data
- `src/main.jsx` — app bootstrap
- `src/index.css` — global styles
- `index.html` and `public/` — static assets

## Notes
- This repo provides frontend behavior only. To persist pledges or serve data, add an API/backend and replace local state updates with network requests.
- To modify demo data, edit `src/projectsList.js`.

## Contributing
- Open an issue or submit a pull request for improvements.

## License
- Add a `LICENSE` file or check `package.json` to declare a license.

Enjoy!
