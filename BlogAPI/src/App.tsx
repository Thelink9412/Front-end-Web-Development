import NavBar from "./components/NavBar";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import { PostsContainer } from "./components/PostsContainer";
import { UpdateDBSection } from "./components/UpdateDBSection";

function App() {
  return (
    <>
      <BrowserRouter>
        <header className="title-header">React Blog</header>
        <NavBar />
        <div className="main-container">
          <Routes>
            <Route path="/" element={<PostsContainer />} />
            <Route
              path="/newPost"
              element={<UpdateDBSection>Create a new post!</UpdateDBSection>}
            />
            <Route path="/:id/info" element={<PostsContainer />} />
            <Route
              path="/:id/edit"
              element={<UpdateDBSection>Edit post</UpdateDBSection>}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
