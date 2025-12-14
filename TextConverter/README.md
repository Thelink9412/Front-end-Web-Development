# Text Converter App

Description
- Small React app that provides text transformation utilities (upper/lower case, remove extra spaces, copy to clipboard) and a simple info panel.

Features
- Text input area with controls to transform text (uppercase, lowercase, trim, remove extra spaces).  
- Live character/word counts and preview.  
- Copy to clipboard button.  
- Simple, responsive UI with a navigation bar and info box.

Prerequisites
- Node.js (v16+ recommended)  
- npm

Install & Run (development)
```bash
npm install
npm run dev
```
Open the URL shown by Vite (usually http://localhost:5173)

Build for production
```bash
npm run build
```

Project structure (key files)
- `src/App.jsx` — main application wrapper
- `src/Converter.jsx` — text conversion UI and logic
- `src/InfoBox.jsx` — informational panel component
- `src/NavBar.jsx` — top navigation
- `src/index.css` — styles
- `index.html` — Vite entry

How it works (brief)
1. Enter or paste text into the converter textarea.  
2. Use the controls to transform the text (uppercase, lowercase, trim).  
3. View live counts and preview.  
4. Copy the result to clipboard or clear the field.

Contributing
- Feel free to open PRs with improvements, additional transforms, or accessibility fixes.

License
- MIT