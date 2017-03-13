import { MovieDetail } from '../movie-search/model/movie';
export function isMovieDetail(movieDetail: any): movieDetail is MovieDetail {
    return movieDetail && 'title' in movieDetail;
};
