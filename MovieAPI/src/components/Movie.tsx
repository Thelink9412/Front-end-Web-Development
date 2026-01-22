import type { DetailedMovie } from "../lib/types";

type MovieProps = {
  movie: DetailedMovie;
};

export function Movie({ movie }: MovieProps) {
  return (
    <div className="movie" tabIndex={0}>
      <img
        src={movie.Poster}
        alt={`${movie.Title} Poster`}
        className="poster"
      />
      <section className="movie-info">
        <h2 className="movie-title">{movie.Title}</h2>
        <span className="movie-year"><b>Released in:</b> {movie.Year}</span>
        {movie.Genre && (
          <span className="movie-genres">
            <b>Genres:</b>{` ${movie.Genre.split(", ").join(", ")}`}
          </span>
        )}
        <span className="movie-director"><b>Directed by:</b> {movie.Director}</span>
        {movie.Actors && (
          <span className="movie-actors">
            <b>Actors:</b>{` ${movie.Actors.split(", ").join(", ")}`}
          </span>
        )}
        <p className="movie-plot">{movie.Plot}</p>
      </section>
    </div>
  );
}
