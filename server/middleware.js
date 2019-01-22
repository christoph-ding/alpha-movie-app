const middleware = function(app, express) {
  console.log('middleware ... ');

  const router = require('./router.js')(express);
  app.use(router)

};

module.exports = middleware;
