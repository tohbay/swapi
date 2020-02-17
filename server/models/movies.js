import { movies } from '../database/swapi-data/movies.js';

class Movies {
  static getAll(callback) {
    try {
      const allMovies = movies.results.map(res => {
        return {
          title: res.title,
          opening_crawl: res.opening_crawl
        };
      });
      return callback(allMovies);
    } catch (error) {
      return error;
    }
  }
}

export default Movies;
