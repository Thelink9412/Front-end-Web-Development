
# React Quiz App

**Description**  
- Simple quiz application built with React and Vite.  
- Multiple-choice questions loaded from `src/QuestionsDB.js`.  
- Shows immediate correct/wrong feedback via an animated notification and transitions between questions.

**Features**  
- Question/answer UI with a submit button.  
- Animated feedback notification (rendered via a React portal).  
- Coordinated entry/exit animations for questions and the quiz container.  
- Results screen with restart option.

**Prerequisites**  
- Node.js (v16+ recommended)  
- npm

**Install & Run (development)**  
Install dependencies:
```bash
npm install
```
Start dev server:
```bash
npm run dev
```
Open the URL shown by Vite (usually http://localhost:5173)

**Build for production**
```bash
npm run build
```
Serve the `dist` folder with a static server (example):
```bash
npx serve dist
```

**Project structure (key files)**  
- `src/Quiz.jsx` — top-level component that manages current question and animations  
- `src/Question.jsx` — question UI, answer selection and notification trigger  
- `src/Notify.jsx` — notification component (uses portal to render in document body)  
- `src/QuestionsDB.js` — question data (array of question objects)  
- `src/Answer.jsx` — individual answer component  
- `src/Results.jsx` — final results screen  
- `src/index.css` — styles and animation rules  
- `index.html` — Vite entry HTML

**How it works (brief)**  
1. User selects an answer and clicks Submit.  
2. `Question` triggers the notification and reports correctness to the parent (Quiz).  
3. Notification animates in/out; Quiz coordinates timing so the question index advances only after exit animations finish.  
4. When all questions are answered, `Results` is shown and the quiz can be restarted.

**Development notes / tips**  
- Notification is rendered with a React portal so it stays fixed near the bottom of the viewport and isn't affected by the quiz container animations.  
- Animations are coordinated with small timeouts; if you change animation durations in CSS, update the matching timeouts in the components.  
- To debug timing issues, add `console.log` statements in `Question` and `Quiz` lifecycle code to trace when state changes occur.