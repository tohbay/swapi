import express from 'express';
import Comments from '../models/comments';
import { uuid } from 'uuidv4';

const router = express.Router();

router.get('/', function(req, res) {
  try {
    Comments.getAll(function(comments, err) {
      if (err) return res.status(400).json({ status: 400, message: err });
      console.log(req.connection.remoteAddress);
      return res.status(200).send({
        status: 200,
        data: {
          comments,
          ip_address: req.connection.remoteAddress
        }
      });
    });
  } catch (error) {
    return res.status(500).send({ status: 500, message: error });
  }
});

router.post('/', function(req, res) {
  const comment_id = uuid();
  const comment = req.body.comment;
  const movie_title = req.body.movie_title;
  const ip_address = req.connection.remoteAddress;

  try {
    Comments.create(comment_id, comment, movie_title, function(comment, err) {
      if (err) return res.status(400).send({ status: 400, message: err });
      return res.status(201).send({
        status: 201,
        data: { comment, ip_address }
      });
    });
  } catch (error) {
    return res.status(500).send({ status: 500, message: error });
  }
});

module.exports = router;
