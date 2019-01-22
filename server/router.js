var bodyParser = require('body-parser'); 

const router = function(express) {
  console.log('router ... ');

  const router = express.Router();

  // this is just a stub for the eventual 'root' router
  router.get('/', function(req, res) {
    console.log('ROOT')
    res.sendStatus(200)
  })

  // 'decorate' our router with sub routing
  const movieRouter = require('./routes/movieRouter.js')(express)
  router.use('/movie', bodyParser.json(), movieRouter)

  return router;
}

module.exports = router;
