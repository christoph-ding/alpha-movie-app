const fetch = require('node-fetch');

const movieAPIKey = require('../keys.js').movie
const movieAPIUrl = "http://www.omdbapi.com/?t="

const parseMovieResponse = function(res) {

}

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

const allFavorites = function(req. res) {
  console.log('getting all movies ...')
  // get list of all favorites from database
}

const saveFavorite = function(req, res) {
  console.log('saving a movie as favorite ...')
  // save a movie to the database
}

const updateRating = function(req, res) {
  console.log('update a movie rating ...')
  // update a movie's rating
}

const removeFavorite = function(req, res) {
  console.log('remove a movie from favorite list ...')
  // remove a movie from the list of favorites
}

const movieRouter = function(express) {
  const movieRouter = express.Router();

  movieRouter.get('/', allFavorites)
  movieRouter.post('/', saveFavorite)
  movieRouter.update('/', updateRating)
  movieRouter.delete('/'. removeFavorite)

  movieRouter.get('/fetch/:title/', lookupMovie)

  return movieRouter
};

module.exports = movieRouter;
