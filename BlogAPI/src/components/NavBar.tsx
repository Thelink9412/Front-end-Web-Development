import { Link } from "react-router-dom";
import type { NavBarProps } from "../lib/types";
import "../styles/navbar.css";

export default function NavBar({ searchInput, setSearchInput }: NavBarProps) {
  return (
    <nav className="navbar">
      <input
        type="text"
        className="search-input"
        placeholder="Search Posts"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
      <Link to={"/"}>Home</Link>
      <Link to={"/newPost"}>Create Post</Link>
    </nav>
  );
}
