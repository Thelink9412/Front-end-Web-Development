import { useState } from "react";
import { SearchMoviesForm } from "./SearchMoviesForm";
import type { DetailedMovie } from "../lib/types";
import type { DisplayResultsParams } from "../lib/types";
import { Movie } from "./Movie";
function App() {
  const [resultsList, setResultsList] = useState<DetailedMovie[]>([]);
  const [displayResultsParams, setDisplayResultsParams] =
    useState<DisplayResultsParams>({
      resultsFound: false,
      firstFetchDone: false,
    });

  return (
    <>
      <h1 className="title-h1">MOVIE API</h1>
      <main className="main-app-container">
        <SearchMoviesForm
          setResultsList={setResultsList}
          setDisplayResultsParams={setDisplayResultsParams}
        />
        {displayResultsParams.firstFetchDone ? (
          displayResultsParams.resultsFound ? (
            <div className="results-container">
              {resultsList.map((movie) => (
                <Movie key={movie.Title} movie={movie} />
              ))}
            </div>
          ) : (
            <h2 className="error-msg">No movies found!</h2>
          )
        ) : null}
      </main>
    </>
  );
}

export default App;
