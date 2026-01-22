import axios from "axios";
import { useState } from "react";
import { API_URL } from "../lib/consts";
import type { MovieType } from "../lib/types";

type SearchMoviesFormProps = {
    setResultsList: (results: MovieType[]) => void
}

export function SearchMoviesForm({ setResultsList }: SearchMoviesFormProps) {
  const [movieToSearch, setMovieToSearch] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const fetchMovies = async () => {
      try {
        const results = await axios.get(`${API_URL}&s=${movieToSearch}`);
        setResultsList(results.data)
      } catch (err) {
        if (axios.isAxiosError(err)) console.log(err.message);
        else console.log("Not Axios error");
      }
    };

    fetchMovies();
  }

  return (
    <form className="search-movies-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="input-search-movie"
        placeholder="Insert movies to search"
        value={movieToSearch}
        onChange={(e) => setMovieToSearch(e.target.value)}
      />
      <button
        className="submit-search-btn"
        type="submit"
        // onClick={(e) => e.preventDefault()}
      >
        Search
      </button>
    </form>
  );
}
