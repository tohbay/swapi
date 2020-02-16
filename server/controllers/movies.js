import express from 'express';
import Movies from '../models/movies';

const router = express.Router();

router.get('/', function(req, res) {
  try {
    Movies.getAll(function(movies, err) {
      if (err) res.status(400).send({ status: 400, message: err });
      return res.status(200).send({ status: 200, data: movies });
    });
  } catch (error) {
    return res.status(500).send({ status: 500, message: error });
  }
});

module.exports = router;
