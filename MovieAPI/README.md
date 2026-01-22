# MovieAPI

## Description
MovieAPI is a React-based web application that allows users to search for movies and view detailed information about them. The app fetches data from an external movie database API and displays it in an organized and user-friendly interface.

## Features
- **Search Movies**: Users can search for movies by title.
- **Detailed Information**: View detailed information about a movie, including:
  - Title
  - Year of release
  - Genres
  - Director
  - Actors
  - Plot
  - Poster
- **Responsive Design**: The app is designed to work seamlessly on various devices.

## Technologies Used
- **React**: For building the user interface.
- **TypeScript**: For type safety and better developer experience.
- **Vite**: For fast development and build tooling.
- **Axios**: For making HTTP requests to the movie database API.

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```bash
   cd MovieAPI
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open your browser and navigate to:
   ```
   http://localhost:5173
   ```

## Project Structure
```
MovieAPI/
├── public/               # Static assets
├── src/                  # Source code
│   ├── components/       # React components
│   ├── lib/              # Utility files (constants, types, etc.)
│   ├── assets/           # Images and other assets
│   ├── index.css         # Global styles
│   ├── main.tsx          # Application entry point
├── package.json          # Project dependencies and scripts
├── vite.config.ts        # Vite configuration
├── tsconfig.json         # TypeScript configuration
└── README.md             # Project documentation
```

## API Integration
This project uses an external movie database API to fetch movie data. Ensure you have the correct API key and set it in the `API_URL` constant located in `src/lib/consts.ts`.

## Contributing
Contributions are welcome! If you'd like to contribute, please follow these steps:
1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Commit your changes and push the branch.
4. Open a pull request.

## License
This project is licensed under the MIT License. See the LICENSE file for details.

## Acknowledgments
- [OMDb API](http://www.omdbapi.com/) for providing movie data.
- The React and TypeScript communities for their amazing tools and libraries.
