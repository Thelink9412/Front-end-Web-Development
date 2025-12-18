 # FlappyBird

Small Flappy Bird clone built with React and Vite.

**Description**
- Tap/click to make the `bird` jump and avoid the `pipes`.

**Prerequisites**
- Node.js 16+ and `npm`, `pnpm` or `yarn`.

**Install**
```bash
cd Front-end_Git/FlappyBird
npm install
```

**Run (development)**
```bash
npm run dev
```

Open the address shown by Vite (usually `http://localhost:5173`).

**Controls**
- Click / Tap: jump

**Scoring**
- Score increases when the `bird` passes a `pipe`. By default each pipe gives +10 points.

**Assets**
- Images are stored in `src/assets` (e.g. `Bird.gif`, `Pipe.png`) and are imported in components so the bundler resolves them correctly.

**Troubleshooting**
- If images don't load, check the browser Console for 404 errors. With Vite import assets from `./assets/...` in components (e.g. `import img from './assets/Bird.gif'`).
- If score doesn't update as expected, inspect `src/App.jsx` where scoring is handled and check the UI/Console for the `score` value.

**Tips**
- To change points per pipe, edit the scoring logic in `src/App.jsx`.

**License**
- Example project — no specific license.