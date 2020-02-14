import express from 'express';
import Movies from '../models/movies';

const router = express.Router();

router.get('/', function(req, res) {
  try {
    Movies.getAll(function(movies, err) {
      if (err) res.status(400).send(err);
      return res.status(200).send(movies);
    });
  } catch (error) {
    return res.status(500).send(error);
  }
});

module.exports = router;
