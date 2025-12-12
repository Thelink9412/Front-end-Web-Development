# SubmissionForm

A small React demo that shows a basic submission form component and how to handle user input without a page reload.

## Overview

This project contains a minimal React application with a `Form` component that collects user input and handles form submission. The submitted data is currently logged to the browser console for demonstration and debugging.

The app is intended as an educational example: easy to read, extend, and integrate into a larger project.

## Features

- Simple controlled inputs
- Submit handler using `event.preventDefault()` to avoid page reload
- Easy to extend (validation, API integration, tests)

## Requirements

- Node.js (recommended >= 14)
- npm or yarn

## Installation

Open a PowerShell terminal and run:

```powershell
cd "c:\Users\Pc\OneDrive\Desktop\JS Projects\React\SubmissionForm"
npm install
```

## Run (development)

```powershell
npm run dev
```

Open `http://localhost:5173` (Vite default) or the URL shown in the terminal.

If the project was scaffolded with Create React App, use:

```powershell
npm start
```

## Build (production)

```powershell
npm run build
```

The optimized output will be in the `dist/` or `build/` folder depending on the setup.

## Project Structure (key files)

- `src/Form.jsx` — the form component and submit logic
- `src/App.jsx` — application root
- `src/main.jsx` — app bootstrap
- `index.html` / `public/` — static assets

## Notes & Tips

- If the form still reloads the page, verify that `handleSubmit` calls `event.preventDefault()`.
- To persist or send submissions to a server, replace the console logging with a `fetch`/`axios` call.
- Add client-side validation and unit tests (Jest + React Testing Library) for production readiness.