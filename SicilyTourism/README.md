# Sicily Tourism — Frontend (Vite + React)

This repository contains a React + Vite frontend for a small tourism site showcasing Sicilian destinations. It includes a home carousel, destinations listing, detail pages, and a contact form. The project is a frontend demo (no backend included).

## Features
- Home page with image carousel and highlights
- Destinations listing with cards and routing to detail pages
- Destination detail view with images and description
- Contact form component for user messages (local handling)
- Responsive layout using Bootstrap / styled-components

## Tech stack
- React 19
- Vite
- React Router
- Bootstrap / React-Bootstrap
- styled-components

## Prerequisites
- Node.js (recommended >= 14)
- npm (or yarn)

## Installation
Open PowerShell in the project folder and install dependencies:

```powershell
cd "c:\Users\Pc\OneDrive\Desktop\JS Projects\React\Front-end_Git\SicilyTourism"
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
- `src/HomePage.jsx` — landing page with carousel
- `src/Destinations.jsx` — destinations list
- `src/DestinationDetail.jsx` — detail view
- `src/Carousel.jsx` — carousel component
- `src/ContactForm.jsx` — contact form component
- `src/destinationsList.js` — example destination data
- `src/main.jsx` — app bootstrap and router
- `src/index.css` — global styles
- `index.html` and `public/` — static assets

## Notes
- This project is frontend-only; to persist messages or dynamic data, add an API/backend and replace local state with network calls.
- Modify demo data in `src/destinationsList.js` to change displayed destinations.

## Contributing
- Open an issue or submit a pull request for improvements.

## License
- Add a `LICENSE` file or check `package.json` to declare a license.

Enjoy exploring Sicily!
