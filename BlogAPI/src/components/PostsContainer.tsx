import { Post } from "./Post";
import SkeletonPosts from "./SkeletonPost"
import "../styles/postsContainer.css";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../lib/hooks";
import { fetchPosts } from "../slices/postsSlice";

export function PostsContainer() {
  const dispatch = useAppDispatch();
  const { items, status, error } = useAppSelector((state) => state.posts);
  const { filter } = useAppSelector((state) => state.filter);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchPosts());
    }
  }, [status, dispatch]);

  const { id: postId } = useParams();

  if (status === "loading") {
    return (
      <div className="posts-container loading-state">
        <SkeletonPosts />
      </div>
    );
  }

  if (status === "failed") {
    return <div className="posts-container"><span> Error: {error}</span></div>;
  }

  const postToShow = postId ? items.find((post) => String(post.id) === postId) : null;

  const filteredItems = items
    .filter((post) => post.title.toLowerCase().includes(filter.toLowerCase()))
    .sort((a, b) => new Date(b.dateTime).getTime() - new Date(a.dateTime).getTime());

  return (
    <div className="posts-container">
      {postToShow ? (
        <Post info={postToShow} areButtonsDisplayed={true} />
      ) : (
        filteredItems.map((post) => (
          <Post key={post.id} info={post} areButtonsDisplayed={false} />
        ))
      )}
    </div>
  );
}
