import { useState } from "react";
import { SearchMoviesForm } from "./SearchMoviesForm";
import type { MovieType } from "../lib/types";
import type { DisplayResultsParams } from "../lib/types";
import { Movie } from "./Movie";
function App() {
  const [resultsList, setResultsList] = useState<MovieType[]>([]);
  const [displayResultsParams, setDisplayResultsParams] =
    useState<DisplayResultsParams>({
      resultsFound: false,
      firstFetchDone: false,
    });

  return (
    <>
      <h1 className="title-h1">MOVIE API</h1>
      <main className="main-app-container">
        <SearchMoviesForm setResultsList={setResultsList} />
        {displayResultsParams.firstFetchDone ? (
          displayResultsParams.resultsFound ? (
            <div className="results-container">
              {resultsList.map(movie => (
                <Movie movie={movie} />
              ))}
            </div>
          ) : (
            <h2>No movies found!</h2>
          )
        ) : null}
      </main>
    </>
  );
}

export default App;
