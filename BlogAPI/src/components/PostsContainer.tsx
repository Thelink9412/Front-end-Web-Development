import type { PostsContainerProps } from "../lib/types";
import { Post } from "./Post";
import "../styles/postsContainer.css";
import { useParams } from "react-router-dom";

export function PostsContainer({ posts, setPosts, searchInput }: PostsContainerProps) {
  const postId = useParams().id;
  let postToShow = null;
  if (postId) postToShow = posts.find((post) => post.id == postId);

  return (
    <div className="posts-container">
      {postToShow ? (
        <Post info={postToShow} setPosts={setPosts} areButtonsDisplayed={true} />
      ) : (
        posts
          .filter((post) =>
            post.title.toLowerCase().includes(searchInput.toLowerCase()),
          )
          .sort(
            (a, b) =>
              new Date(b.dateTime).getTime() - new Date(a.dateTime).getTime(),
          )
          .map((post, index) => (
            <Post key={index} info={post} setPosts={setPosts} areButtonsDisplayed={false} />
          ))
      )}
    </div>
  );
}
