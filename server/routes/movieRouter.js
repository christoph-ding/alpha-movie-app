const fetch = require('node-fetch');

const movieAPIKey = require('../keys.js').movie
const movieAPIUrl = "http://www.omdbapi.com/?t="

const movieController = require('../controllers/movieController.js')

const parseMovieResponse = function(res) {}

const lookupMovie = function(req, res) {
  console.log('heeeey this is the test endpoint for movies')
  console.log('params: ', req.params)
  const title = req.params.title
  const movieAPIRequestEndpoint = `${movieAPIUrl}${title}&apikey=${movieAPIKey}`

  fetch(movieAPIRequestEndpoint)
  .then((data) => {
    // var buf = Buffer.from(JSON.stringify(data));
    // console.log(data.json())
    // res.status(200).send(data)
    return data.json()
  })
  .then(test => {
    console.log(test)
    res.status(200).send(test)
  })
  .catch((err) => {
    console.log('err: ', err)
  })
}

const allFavorites = function(req, res) {
  movieController.listFavoriteMovies()
  .then((data) => {
    res.status(200).json(data)
  })
  .catch((err) => {
    res.status(400).send(err)
  })
}

const saveFavorite = function(req, res) {
  let newMovieParams = req.body
  movieController.addFavoriteMovie(newMovieParams)
  .then((data) => {
    res.sendStatus(201)
  })
  .catch((err) => {
    res.status(400).send(err)
  })
}

const updateRating = function(req, res) {
  let updateParams = req.body
  movieController.updateRating(updateParams)
  .then(() => {
    res.sendStatus(200)
  })
  .catch((err) => {
    res.status(400).send(err)
  })
}

const removeFavorite = function(req, res) {
  let removeParams = req.body
  movieController.deleteRating(removeParams)
  .then(() => {
    res.sendStatus(200)
  })
  .catch((err) => {
    res.status(400).send(err)
  })
}

const movieRouter = function(express) {
  const movieRouter = express.Router();

  // CRUD for movies
  movieRouter.get('/', allFavorites)
  movieRouter.post('/', saveFavorite)
  movieRouter.put('/', updateRating)
  movieRouter.delete('/', removeFavorite)

  // getting movie info from 3rd party api
  movieRouter.get('/fetch/:title/', lookupMovie)

  return movieRouter
};

module.exports = movieRouter;
