# swapi

Simple JavaScript RESTful API for getting list of movies, characters and comments.

## Technologies

- JavaScript ES6: A scripting programming language for web technologies
- Nodejs: an open source server framework that allows you to run JavaScript on the server.
- Express: open source server-side framework for starting out Javascript server quickly on the fly.
- PostgreSQL: an SQL database used for development
- ElephantSQL: an online SQL database used for production

### Live URL

- https://swapi-tobe.herokuapp.com/

## Instructions to Run on a Local Machine

To clone this repository:

- Ensure you have `Postman`, `git` `npm` and `node.js` installed
- git clone https://github.com/tobechukwuobitube/swapi.git
- Run `npm install`
- Run `npm run dev` to start the server
- Using `Postman` Make the following API request on `localhost:5000` with the required user input where necessary

## API Endpoints Implemented

| HTTP VERB | ENDPOINT              | FUNCTIONALITY               |
| --------- | --------------------- | --------------------------- |
| POST      | api/comments          | Create a comment            |
| GET       | api/comments          | Fetch all comments          |
| GET       | api/movies            | Fetch all movies            |
| GET       | api/characters        | Fetch all characters        |
| GET       | api/characters/female | Fetch all female characters |
| GET       | api/characters/male   | Fetch all male characters   |

#### Sample POST Comment

Local Machine: `POST: https://swapi-tobe.herokuapp.com/api/comments`

- Request:

```json
{
  "comment": "This movie is nice",
  "movie_title": "Captain America"
}
```

- Response

```json
{
  "status": 201,
  "data": {
    "comment": [
      {
        "id": 1,
        "comment_id": "207da0e0-e230-4b48-9e33-148d86370433",
        "comment": "This movie is nice",
        "movie_title": "Captain America",
        "created_at": "2020-02-17T11:22:11.994Z"
      }
    ],
    "ip_address": "::ffff:10.41.207.200"
  }
}
```

#### Sample GET moves, characters, male character, female characters

- These API endpoints do not require a user input and will give a similar response as can be seen below:

for example a `GET https://swapi-tobe.herokuapp.com/api/characters/male`

```json
{
  "status": 200,
  "data": {
    "male_characters": [
      {
        "name": "Luke Skywalker",
        "height": "172",
        "gender": "male"
      },
      {
        "name": "Darth Vader",
        "height": "202",
        "gender": "male"
      },
      {
        "name": "Owen Lars",
        "height": "178",
        "gender": "male"
      },
      {
        "name": "Biggs Darklighter",
        "height": "183",
        "gender": "male"
      },
      {
        "name": "Obi-Wan Kenobi",
        "height": "182",
        "gender": "male"
      }
    ],
    "total_number": 5,
    "total_height": "917cm i.e 30ft 3inches "
  }
}
```

### Author

Tobechukukwu Obitube { Email: tobechukwuobitube@gmail.com }
