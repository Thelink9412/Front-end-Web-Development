import { useNavigate } from "react-router-dom";
import type { PostProps } from "../lib/types";
import "../styles/post.css";
import { Button } from "./Button";
import api from "../api/posts";
import { isAxiosError } from "axios";

export function Post({ info, setPosts, areButtonsDisplayed }: PostProps) {
  const navigate = useNavigate();

  async function handleDelete() {
    try {
      await api.delete(`/posts/${info.id}`);
      setPosts((prev) => prev.filter((post) => post.id !== info.id));
      navigate("/");
    } catch (err) {
      if (isAxiosError(err)) {
        console.log(err.response?.data);
        console.log(err.response?.status);
        console.log(err.response?.headers);
      }
    }
  }

  return (
    <div
      className="post"
      data-id={info.id}
      onClick={() => navigate(`/${info.id}/info`)}
    >
      <h2 className="post-title">{info.title}</h2>
      <span className="post-dateTime">{info.dateTime}</span>
      <p className="post-body">{info.body}</p>
      <br />
      {areButtonsDisplayed ? (
        <div className="info-btns-container">
          <Button className="delete-btn" onClick={handleDelete}>
            Delete
          </Button>
          <Button
            className="edit-btn"
            onClick={(e) => {
              e?.stopPropagation();
              navigate(`/${info.id}/edit`);
            }}
          >
            Edit
          </Button>
        </div>
      ) : null}
    </div>
  );
}
