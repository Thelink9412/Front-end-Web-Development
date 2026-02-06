# BlogAPI

## Description
BlogAPI is a React-based blogging application that allows users to create, edit, and view blog posts. The project uses a JSON server as a mock backend to handle API requests for managing posts. This project demonstrates the use of React, TypeScript, and modern web development practices.

## Features
- View a list of blog posts.
- Create new blog posts.
- Edit existing blog posts.
- Delete blog posts.
- Navigate between different pages using React Router.

## Technologies Used
- **React**: Frontend library for building user interfaces.
- **Redux**: React library for advanced state management.
- **TypeScript**: Adds static typing to JavaScript.
- **Vite**: Development server and build tool.
- **JSON Server**: Mock backend for handling API requests.
- **Axios**: HTTP client for making API requests.
- **CSS**: Styling for the application.

## Folder Structure
```
BlogAPI/
├── data/                # Contains the mock database (db.json).
├── public/              # Public assets.
├── src/                 # Source code.
│   ├── api/             # API configuration and services.
│   ├── components/      # React components.
│   ├── lib/             # Utility functions and types.
│   ├── slices/          # Slices dor the Redux implementation.
│   ├── styles/          # CSS files for styling.
├── package.json         # Project dependencies and scripts.
├── vite.config.ts       # Vite configuration.
```

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/Thelink9412/Front-end-Web-Development/main/BlogAPI
   ```
2. Navigate to the project directory:
   ```bash
   cd BlogAPI
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

## Usage
1. Start the JSON server:
   ```bash
   npx json-server -p 3500 -w "data/db.json"
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```
3. Open your browser and navigate to:
   ```
   http://localhost:5173
   ```

## API Endpoints
The JSON server provides the following endpoints:
- `GET /posts`: Retrieve all posts.
- `POST /posts`: Create a new post.
- `PUT /posts/:id`: Update an existing post.
- `DELETE /posts/:id`: Delete a post.

## Contributing
Contributions are welcome! If you find any issues or have suggestions for improvements, feel free to open an issue or submit a pull request.

## License
This project is licensed under the MIT License. See the LICENSE file for details.

## Acknowledgments
- [React](https://reactjs.org/)
- [Redux](https://redux.js.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [JSON Server](https://github.com/typicode/json-server)
- [Axios](https://axios-http.com/)
