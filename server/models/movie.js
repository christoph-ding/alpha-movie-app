const Sequelize = require('sequelize');

module.exports = function(sequelize) {
  const Movie = sequelize.define('Movie', {
    title: {
      type: Sequelize.STRING,
      unique: true
    },
    poster: Sequelize.STRING,
    year: Sequelize.STRING,
    plot: Sequelize.STRING,
    rating: Sequelize.INTEGER,
  })
}
