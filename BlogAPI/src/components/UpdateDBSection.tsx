import { useState } from "react";
import type { UpdateDBSectionProps, PostType } from "../lib/types";
import { Button } from "./Button";
import { useNavigate, useParams } from "react-router-dom";
import { formatCurrentDate } from "../lib/formatCurrentDate";
import api from "../api/posts";
import { isAxiosError } from "axios";
import "../styles/createPost.css";
import { useAppDispatch } from "../lib/hooks";
import { updatePost, addNewPost } from "../slices/postsSlice";

export function UpdateDBSection({
  posts,
  setPosts,
  children,
}: UpdateDBSectionProps) {
  const existingPostID = useParams().id;
  const postToEdit: PostType | undefined = posts.find(
    (post) => post.id == existingPostID,
  );
  const isNewPost = !existingPostID;

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [newPostTitle, setNewPostTitle] = useState("");
  const [newPostBody, setNewPostBody] = useState("");

  function uploadNewPost() {
    if (!newPostTitle.trim() || !newPostBody.trim()) return;
    const newPost: PostType = {
      id: String(Date.now()),
      title: newPostTitle,
      dateTime: formatCurrentDate(),
      body: newPostBody,
    };

    dispatch(addNewPost(newPost));
    setNewPostBody("");
    setNewPostTitle("");
    navigate("/");
  }

  function updateExistingPost() {
    const updatedPost = {
      id: existingPostID,
      title: newPostTitle.trim() ? newPostTitle : postToEdit?.title,
      dateTime: formatCurrentDate(),
      body: newPostBody.trim() ? newPostBody : postToEdit?.body,
    };
    const fetchEditPost = async () => {
      try {
        const result = await api.put(`/posts/${existingPostID}`, updatedPost);
        setPosts(
          posts.map((post) =>
            post.id == existingPostID! ? { ...result.data } : post,
          ),
        );
        navigate("/");
      } catch (err) {
        if (isAxiosError(err)) {
          console.log(err.response?.data);
          console.log(err.response?.status);
          console.log(err.response?.headers);
        }
      }
    };

    fetchEditPost();
  }

  return (
    <div className="create-post-section">
      <h1>{children}</h1>
      <section className="create-post-input-container">
        <input
          type="text"
          className="new-post-title"
          placeholder="Post's title here"
          defaultValue={postToEdit?.title}
          onChange={(e) => setNewPostTitle(e.target.value)}
        />
        <textarea
          className="new-post-body"
          placeholder="Post's content here"
          defaultValue={postToEdit?.body}
          onChange={(e) => setNewPostBody(e.target.value)}
        />
      </section>
      <Button
        className={"upload-new-post-btn"}
        onClick={isNewPost ? uploadNewPost : updateExistingPost}
      >
        {isNewPost ? "Upload new post" : "Edit post"}
      </Button>
    </div>
  );
}
