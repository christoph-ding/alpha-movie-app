const middleware = function(app, express) {
  console.log('middleware ... ')

  const router = require('./router.js')(express)

}

module.exports = middleware;
