import { Rating } from './rating';

export interface Movie {
  title: string;
  poster?: string;
  type: string;
  year: string;
  imdbID: string;
  imdbLink: string;
}

export interface MovieDetail {
  ratings: Rating[];
  title: string;
  year: string;
  rated: string;
  released: string;
  runtime: string;
  genre: string;
  director: string;
  writer: string;
  actors: string;
  plot: string;
  language: string;
  country: string;
  awards: string;
  poster?: string;
  metascore: string;
  imdbRating: number;
  imdbVotes: string;
  imdbID: string;
  type: string;
}
