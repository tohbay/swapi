import express from 'express';
import Characters from '../models/characters';

const router = express.Router();

router.get('/', function(req, res) {
  try {
    Characters.getAll(function(characters, err) {
      if (err) res.status(400).send({ status: 400, message: err });
      return res.status(200).send({ status: 200, data: characters });
    });
  } catch (error) {
    return res.status(500).send({ status: 500, message: error });
  }
});

router.get('/female', function(req, res) {
  try {
    Characters.getAllFemaleCharacters(function(characters, err) {
      if (err) res.status(400).send({ status: 400, message: err });
      return res.status(200).send({ status: 200, data: characters });
    });
  } catch (error) {
    return res.status(500).send({ status: 500, message: error });
  }
});

router.get('/male', function(req, res) {
  try {
    Characters.getAllMaleCharacters(function(characters, err) {
      if (err) res.status(400).send({ status: 400, message: err });
      return res.status(200).send({ status: 200, data: characters });
    });
  } catch (error) {
    return res.status(500).send({ status: 500, message: error });
  }
});

module.exports = router;
