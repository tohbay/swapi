import express from 'express';
import bodyParser from 'body-parser';

import db from './database';
import movies from './database/swapi-data/movies.json';
import characters from './database/swapi-data/characters.json';

const ENV = process.env.NODE_ENV;
const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());

const commentsRoutes = require('./controllers/comments');
const moviesRoutes = require('./controllers/movies');

app.use('/api/comments', commentsRoutes);
app.use('/api/movies', moviesRoutes);

app.get('/', function(req, res) {
  res.send('Hello World!');
});

app.listen(PORT, function() {
  console.log(`App is listening on Port ${PORT}`);
  console.log(movies.count, characters.count);
});

db.query('SELECT Now()', (err, res) => {
  if (err.error) return console.log(err.error);
  console.log(`PostgreSQL connected: ${res[0].now}.`);
});

export default app;
