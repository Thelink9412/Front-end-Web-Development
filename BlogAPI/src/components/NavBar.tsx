import { Link } from "react-router-dom";
import "../styles/navbar.css";
import { useAppDispatch, useAppSelector } from "../lib/hooks";
import { updateFilter } from "../slices/filterSlice";

export default function NavBar() {
  const dispatch = useAppDispatch();
  const { filter } = useAppSelector((state) => state.filter);

  return (
    <nav className="navbar">
      <input
        type="text"
        className="search-input"
        placeholder="Search Posts"
        value={filter}
        onChange={(e) => dispatch(updateFilter(e.target.value))}
      />
      <Link to={"/"}>Home</Link>
      <Link to={"/newPost"}>Create Post</Link>
    </nav>
  );
}
