const fetch = require('node-fetch');

const movieAPIKey = require('../keys.js').movie
const movieAPIUrl = "http://www.omdbapi.com/?t="

const movieController = require('../controllers/movieController.js')

const parseMovieResponse = function(res) {}

const lookupMovie = function(req, res) {
  console.log('heeeey this is the test endpoint for movies')
  console.log('params: ', req.params)

  const movieAPIRequestEndpoint = `${movieAPIUrl}the+thing&apikey=${movieAPIKey}`

  console.log(movieAPIRequestEndpoint)

  // fetch(movieAPIRequestEndpoint)
  // .then((res) => {
  //   console.log(res)
  //   res.sendStatus(200)  
  // })
  // .catch((err) => {
  //   console.log('err: ', err)
  // })
}

const allFavorites = function(req, res) {
  // get list of all favorites from database
  movieController.listFavoriteMovies()
  .then(() => {
    console.log('promise done ...')
    res.sendStatus(200)
  })
}

const saveFavorite = function(req, res) {
  // save a movie to the database
  movieController.addFavoriteMovie()
}

const updateRating = function(req, res) {
  // update a movie's rating
  movieController.updateRating()
}

const removeFavorite = function(req, res) {
  // remove a movie from the list of favorites
  movieController.deleteRating()
}

const movieRouter = function(express) {
  const movieRouter = express.Router();

  movieRouter.get('/', allFavorites)
  movieRouter.post('/', saveFavorite)
  movieRouter.put('/', updateRating)
  movieRouter.delete('/', removeFavorite)

  movieRouter.get('/fetch/:title/', lookupMovie)

  return movieRouter
};

module.exports = movieRouter;
