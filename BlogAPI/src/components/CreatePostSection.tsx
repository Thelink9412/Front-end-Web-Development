import { useState } from "react";
import type { CreatePostSectionProps, PostType } from "../lib/types";
import { Button } from "./Button";
import { useNavigate } from "react-router-dom";
import { formatCurrentDate } from "../lib/formatCurrentDate";
import api from "../api/posts";
import { isAxiosError } from "axios";
import '../styles/createPost.css'

export function CreatePostSection({ posts, setPosts }: CreatePostSectionProps) {
  const navigate = useNavigate();
  const [newPostTitle, setNewPostTitle] = useState("");
  const [newPostBody, setNewPostBody] = useState("");

  function uploadNewPost() {
    if (!newPostTitle.trim() || !newPostBody.trim()) return;

    const fetchNewPost = async () => {
      const newPost: PostType = {
        id: posts.length + 1,
        title: newPostTitle,
        dateTime: formatCurrentDate(),
        body: newPostBody,
      };

      try {
        const result = await api.post("/posts", newPost);
        setPosts([...posts, result.data]);
        setNewPostBody("");
        setNewPostTitle("");
        navigate("/");
      } catch (err) {
        if (isAxiosError(err)) {
          console.log(err.response?.data);
          console.log(err.response?.status);
          console.log(err.response?.headers);
        }
      }
    };

    fetchNewPost();
  }

  return (
    <div className="create-post-section">
      <h1>Create a new post!</h1>
      <section className="create-post-input-container">
        <input
          type="text"
          className="new-post-title"
          placeholder="Post's title here"
          value={newPostTitle}
          onChange={(e) => setNewPostTitle(e.target.value)}
        />
        <textarea
          className="new-post-body"
          placeholder="Post's content here"
          value={newPostBody}
          onChange={(e) => setNewPostBody(e.target.value)}
        />
      </section>
      <Button className={"upload-new-post-btn"} onClick={uploadNewPost}>
        Upload new post
      </Button>
    </div>
  );
}
