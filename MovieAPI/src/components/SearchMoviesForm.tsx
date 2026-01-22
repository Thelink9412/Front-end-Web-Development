import axios from "axios";
import { useState } from "react";
import { API_URL } from "../lib/consts";
import type { DisplayResultsParams, MovieType } from "../lib/types";

type SearchMoviesFormProps = {
    setResultsList: (results: MovieType[]) => void,
    setDisplayResultsParams: (params: DisplayResultsParams) => void, 
}

export function SearchMoviesForm({ setResultsList, setDisplayResultsParams}: SearchMoviesFormProps) {
  const [movieToSearch, setMovieToSearch] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const fetchMovies = async () => {
      try {
        const results = await axios.get(`${API_URL}&s=${movieToSearch}`);
        console.log(results.data)
        if(results.data.Response)
          setResultsList(results.data.Search)

        setDisplayResultsParams({resultsFound: results.data.Response, firstFetchDone: true})
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
