import express from 'express';
import bodyParser from 'body-parser';

const ENV = process.env.NODE_ENV;
const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', function(req, res) {
  res.send('Hello World!');
});

app.listen(PORT, function() {
  console.log(`App is listening on Port ${PORT}`);
});

export default app;
