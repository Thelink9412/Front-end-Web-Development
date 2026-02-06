import { useState } from "react";
import type { PostType } from "./lib/types";
import NavBar from "./components/NavBar";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import { PostsContainer } from "./components/PostsContainer";
import { UpdateDBSection } from "./components/UpdateDBSection";

function App() {
  const [posts, setPosts] = useState<PostType[]>([]);
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
                <UpdateDBSection posts={posts} setPosts={setPosts}>
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
                <UpdateDBSection posts={posts} setPosts={setPosts}>
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
