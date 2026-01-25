import { useEffect, useState } from "react";
import api from "./api/posts";
import { isAxiosError } from "axios";
import type { PostType } from "./lib/types";
import NavBar from "./components/NavBar";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import { PostsContainer } from "./components/PostsContainer";
import { UpdateDBSection } from "./components/UpdateDBSection";

function App() {
  const [posts, setPosts] = useState<PostType[]>([]);
  const [searchInput, setSearchInput] = useState<string>("");

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const results = await api.get("/posts");
        setPosts(results.data);
      } catch (err) {
        if (isAxiosError(err)) {
          console.log(err.response?.data);
          console.log(err.response?.status);
          console.log(err.response?.headers);
        }
      }
    };

    fetchPosts();
  }, []);

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
                  posts={posts}
                  setPosts={setPosts}
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
                  posts={posts}
                  setPosts={setPosts}
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
