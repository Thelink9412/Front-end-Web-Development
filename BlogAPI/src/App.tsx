import { useEffect, useState } from "react";
import api from "./api/posts";
import { isAxiosError } from "axios";
import type { PostType } from "./lib/types";
import NavBar from "./components/NavBar";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import { PostsContainer } from "./components/PostsContainer";
import { CreatePostSection } from "./components/CreatePostSection";

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
                <PostsContainer posts={posts} searchInput={searchInput} />
              }
            />
            <Route
              path="/newPost"
              element={<CreatePostSection posts={posts} setPosts={setPosts} />}
            ></Route>
            {/* <Route path='/post/:id' element={<Post />}></Route> */}
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
