import db from '../database';

class Comments {
  static create(comment_id, comment, movie_title, callback) {
    db.query(
      `INSERT INTO comments(comment_id, comment, movie_title) VALUES($1, $2, $3) returning *`,
      [comment_id, comment, movie_title],
      function(err, res) {
        if (err.error) return callback(err);
        callback(res);
      }
    );
  }

  static getAll(callback) {
    db.query(`SELECT * FROM comments`, function(err, res) {
      if (err.error) return callback(err);
      callback(res);
    });
  }
}

export default Comments;
