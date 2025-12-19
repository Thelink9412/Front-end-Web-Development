# Expense Tracker App

Simple personal finance application built with React and Vite.
Tracks a user's balance, total budget, and total expenses in real-time.
Includes validation logic to prevent negative balances and duplicate entries.

**Features** 
- Dynamic balance overview (Balance, Budget, Expense).
- Form to add new transactions with type selection (Budget or Expense).
- Real-time search/filter for the transaction list.
- Ability to remove individual transactions from the history.
- Responsive UI with visual color-coded indicators for transaction types.

## Tech stack
- React 19
- Vite
- JavaScript and CSS

**Prerequisites** 
- Node.js (v16+ recommended)  
- npm

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
- `src/App.jsx` — Top-level component managing global state (balance, expenses, and transaction list).
- `src/AddNewTransactionSection.jsx` — Form component for creating new entries with input validation.
- `src/BudgetDisplay.jsx` — Presentation component for the expense and budget cards.
- `src/Transaction.jsx` — Individual transaction item with a delete handler.
- `src/index.css` — Application styles, layout rules, and color themes.

## How it works (brief) 
1. User enters a transaction name, value, and type (Budget or Expense). 
2. The app validates if the name is unique and if an expense would exceed the current balance. 
3. Upon submission, the transaction is added to the list and the global balance/totals are updated. 
4. Users can use the search bar to filter the visible list based on transaction names. 
5. Removing a transaction triggers a filter function that updates the state and refreshes the UI.

## Development notes / tips 
- Transaction name checking is case-insensitive to avoid duplicates like "Food" and "food".
- The search functionality uses a filter method on the main transaction array before mapping it to components.
- Input values for currency are handled as numbers to ensure correct arithmetic operations during balance updates.

## Contributing
- Open an issue or submit a pull request for improvements.

## License
- Add a `LICENSE` file or check `package.json` to declare a license.

Enjoy!