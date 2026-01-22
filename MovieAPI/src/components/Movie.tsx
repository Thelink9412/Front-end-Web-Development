import type { MovieType } from "../lib/types";

type MovieProps = {
  movie: MovieType;
};

export function Movie({ movie }: MovieProps) {
  return (
    <div className="movie">
      <img
        src={movie.poster}
        alt={`${movie.title} Poster`}
        className="poster"
      />
      <section className="movie-info">
        <h2 className="movie-title">{movie.title}</h2>
        <span className="movie-year">Released in: {movie.year}</span>
        {movie.genre && (
          <span className="movie-genres">
            Genres:{" "}
            {movie.genre.map(
              (genre, index) => `${genre}${movie.genre![index] ? ", " : ""} `,
            )}
          </span>
        )}
        <span className="movie-director">Directed by: {movie.director}</span>
        {movie.actors && (
          <span className="movie-actors">
            Actors:{" "}
            {movie.actors.map(
              (actor, index) => `${actor}${movie.actors![index] ? ", " : ""} `,
            )}
          </span>
        )}
        <p className="movie-plot">{movie.plot}</p>
      </section>
    </div>
  );
}
