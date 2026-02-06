import { useState } from "react";
import type { UpdateDBSectionProps, PostType } from "../lib/types";
import { Button } from "./Button";
import { useNavigate, useParams } from "react-router-dom";
import { formatCurrentDate } from "../lib/formatCurrentDate";
import "../styles/createPost.css";
import { useAppDispatch, useAppSelector } from "../lib/hooks";
import { updatePost, addNewPost } from "../slices/postsSlice";

export function UpdateDBSection({
  children,
}: UpdateDBSectionProps) {
  const { items } = useAppSelector((state) => state.posts);
  const existingPostID = useParams().id;
  const postToEdit: PostType | undefined = items.find(
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
    const updatedPost: PostType = {
      id: existingPostID!,
      title: newPostTitle.trim() ? newPostTitle : postToEdit!.title,
      dateTime: formatCurrentDate(),
      body: newPostBody.trim() ? newPostBody : postToEdit!.body,
    };

    dispatch(updatePost(updatedPost));
    navigate("/");
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
