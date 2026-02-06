import { useNavigate } from "react-router-dom";
import type { PostProps } from "../lib/types";
import "../styles/post.css";
import { Button } from "./Button";
import { useAppDispatch } from '../lib/hooks';
import { deletePost } from '../slices/postsSlice';

export function Post({ info, areButtonsDisplayed }: PostProps) {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  function handleDelete() {
    dispatch(deletePost(info.id))
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
