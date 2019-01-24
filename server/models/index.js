const Sequelize = require('sequelize');
const Movie = require('./movie.js')

const sequelize = new Sequelize(null, null, null, {
  dialect: 'sqlite',
  storage: 'db.sqlite',
  logging: false
});

Movie(sequelize);

const models = sequelize.models;
sequelize.sync();

module.exports = sequelize;
