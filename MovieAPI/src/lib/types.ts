export type MovieBySearch = {
  Title: string,
  Poster: string,
  Type: string,
  Year: string,
}

export type DetailedMovie = MovieBySearch & {
  Genre?: string,
  Director: string,
  Actors?: string,
  Plot: string,
}

export type DisplayResultsParams = {
    resultsFound: boolean,
    firstFetchDone: boolean,
}