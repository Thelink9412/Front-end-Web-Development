import { useState } from "react";
import NavBar from "./components/NavBar";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import { PostsContainer } from "./components/PostsContainer";
import { UpdateDBSection } from "./components/UpdateDBSection";

function App() {
  const [searchInput, setSearchInput] = useState<string>("");

  return (
    <>
      <BrowserRouter>
        <header className="title-header">React Blog</header>
        <NavBar searchInput={searchInput} setSearchInput={setSearchInput} />
        <div className="main-container">
          <Routes>
            <Route
              path="/"
              element={
                <PostsContainer
                  searchInput={searchInput}
                />
              }
            />
            <Route
              path="/newPost"
              element={
                <UpdateDBSection>
                  Create a new post!
                </UpdateDBSection>
              }
            />
            <Route
              path="/:id/info"
              element={
                <PostsContainer
                  searchInput={searchInput}
                />
              }
            />
            <Route
              path="/:id/edit"
              element={
                <UpdateDBSection>
                  Edit post
                </UpdateDBSection>
              }
            />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
