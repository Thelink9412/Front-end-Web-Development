import type { PostsContainerProps } from "../lib/types";
import { Post } from "./Post";
import '../styles/postsContainer.css'

export function PostsContainer({ posts, searchInput }: PostsContainerProps) {
  return (
    <div className="posts-container">
      {posts
        .filter((post) => post.title.toLowerCase().includes(searchInput.toLowerCase()))
        .sort((a, b) => new Date(b.dateTime).getTime() - new Date(a.dateTime).getTime())
        .map((post, index) => (
          <Post key={index} info={post} />
        ))}
    </div>
  );
}
