import axios from "axios";
import { useState } from "react";
import { API_URL } from "../lib/consts";
import type {
  DisplayResultsParams,
  MovieBySearch,
  DetailedMovie,
} from "../lib/types";

type SearchMoviesFormProps = {
  setResultsList: (results: DetailedMovie[]) => void;
  setDisplayResultsParams: (params: DisplayResultsParams) => void;
};

export function SearchMoviesForm({
  setResultsList,
  setDisplayResultsParams,
}: SearchMoviesFormProps) {
  const [movieToSearch, setMovieToSearch] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const fetchMovies = async () => {
      try {
        const results = await axios.get(`${API_URL}&s=${movieToSearch}`);
        console.log(results.data);
        if (results.data.Response) {
          const detailedResults = await detailedFetch(results.data.Search);
          console.log(detailedResults);

          setResultsList(detailedResults);
        }

        setDisplayResultsParams({
          resultsFound: true,
          firstFetchDone: true,
        });
      } catch (err) {
        if (axios.isAxiosError(err)) console.log(err.message);
        else
          setDisplayResultsParams({
            resultsFound: false,
            firstFetchDone: true,
          });
      }
    };

    fetchMovies();
  }

  async function detailedFetch(
    moviesList: MovieBySearch[],
  ): Promise<DetailedMovie[]> {
    const titles: string[] = [];
    const fetchForDetailedMovies = async (movie: MovieBySearch) => {
      try {
        const detailedResult = await axios.get(`${API_URL}&t=${movie.Title}&plot=full`);
        if (!titles.includes(detailedResult.data.Title)) {
          titles.push(detailedResult.data.Title);
          return detailedResult.data;
        }
        return null;
      } catch (err) {
        if (axios.isAxiosError(err)) console.log(err.message);
        else console.log("Not Axios error");
        return null;
      }
    };

    const detailedResults = await Promise.all(
      moviesList.map((movie) => fetchForDetailedMovies(movie)),
    );

    return detailedResults.filter(
      (movie): movie is DetailedMovie => movie !== null,
    );
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
