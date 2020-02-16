import movies_db from '../database/swapi-data/movies.json';
import comments_db from './comments';

class Movies {
  static getAll(callback) {
    try {
      const movies = movies_db.results.map(res => {
        return {
          title: res.title,
          opening_crawl: res.opening_crawl
        };
      });
      return callback(movies);
    } catch (error) {
      return error;
    }
  }
}

export default Movies;
// import characters_db from '../database/swapi-data/characters';
