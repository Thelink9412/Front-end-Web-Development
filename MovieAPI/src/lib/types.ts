export type MovieType = {
  title: string,
  year: number,
  poster: string,
  genre: string[],
  director: string,
  actors: string[],
}

export type DisplayResultsParams = {
    resultsFound: boolean,
    firstFetchDone: boolean,
}