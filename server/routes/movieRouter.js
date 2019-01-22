const movieAPIKey = require('../keys.js').movie

const lookupMovie = function(req, res) {
  console.log('heeeey this is the test endpoint for movies')
  console.log('params: ', req.params)
  console.log('... calling the api now')
  console.log(movieAPIKey)

  res.sendStatus(200)  
}

const movieRouter = function(express) {
  console.log('movie router ... ')

  const movieRouter = express.Router();
  movieRouter.get('/:title/', lookupMovie)

  return movieRouter
};

module.exports = movieRouter;
