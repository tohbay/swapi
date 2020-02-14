import movies_db from '../database/swapi-data/movies.json';

class Movies {
  static getAll(callback) {
    const movies = movies_db.results.map(res => {
      return {
        title: res.title,
        opening_crawl: res.opening_crawl
      };
    });
    return callback(movies);
  }
}

export default Movies;
// import characters_db from '../database/swapi-data/characters';
