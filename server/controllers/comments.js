import express from 'express';
import Comments from '../models/comments';
import { uuid } from 'uuidv4';

const router = express.Router();

router.get('/', function(req, res) {
  try {
    Comments.getAll(function(comments, err) {
      if (err) return res.status(400).json(err);
      return res.status(200).send(comments);
    });
  } catch (error) {
    return res.status(500).send(error);
  }
});

router.post('/', function(req, res) {
  const comment_id = uuid();
  const comment = req.body.comment;
  const movie_title = req.body.movie_title;

  try {
    Comments.create(comment_id, comment, movie_title, function(result, err) {
      if (err) return res.status(400).json(err);
      return res.status(201).json(result);
    });
  } catch (error) {
    return res.status(500).send(error);
  }
});

module.exports = router;
