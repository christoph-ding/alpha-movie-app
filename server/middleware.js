var bodyParser = require('body-parser');

const middleware = function(app, express) {
  console.log('middleware ... ');


  const router = require('./router.js')(express);
  app.use(router, bodyParser.json())

};

module.exports = middleware;
