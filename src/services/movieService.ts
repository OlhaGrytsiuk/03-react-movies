import axios from 'axios';
import type { AxiosResponse } from 'axios';
import type { Movie } from '../types/movie';

const API_URL = 'https://api.themoviedb.org/3/search/movie';

interface FetchMoviesParams {
  query: string;
}

interface FetchMoviesResponse {
  results: Movie[];
}

export async function fetchMovies({ query }: FetchMoviesParams): Promise<Movie[]> {
  const config = {
    params: { query },
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
    },
  };

  const response: AxiosResponse<FetchMoviesResponse> = await axios.get(API_URL, config);
  return response.data.results;
}
