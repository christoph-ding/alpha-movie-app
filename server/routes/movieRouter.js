const fetch = require('node-fetch');

const movieAPIKey = require('../keys.js').movie
const movieAPIUrl = "http://www.omdbapi.com/?t="

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

const movieRouter = function(express) {
  const movieRouter = express.Router();
  movieRouter.get('/:title/', lookupMovie)

  return movieRouter
};

module.exports = movieRouter;
