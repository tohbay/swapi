import express from 'express';
import Comments from '../models/comments';
import { uuid } from 'uuidv4';

const router = express.Router();

router.get('/', function(req, res) {
  Comments.getAll(function(err, comments) {
    if (err) return res.json(err);
    return res.json(comments);
  });
});

router.post('/', function(req, res) {
  const comment_id = uuid();
  const comment = req.body.comment;
  const movie_title = req.body.movie_title;

  Comments.create(comment_id, comment, movie_title, function(err, result) {
    if (err) return res.json(err);
    return res.json(result);
  });
});

module.exports = router;
