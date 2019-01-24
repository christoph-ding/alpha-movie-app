const sequelize = require('../models/index.js');
const movie = sequelize.models.Movie

const listFavoriteMovies = function() {
  return new Promise(function(resolve, reject) {
    movie.findAll({})
    .then((data) => {
      // parse the data, for only the relevant movie data
      const relevantData = []
      data.forEach((movie) => {
        relevantData.push(movie.dataValues)
      })
      resolve(relevantData)
    })
    .catch((err) => {
      reject(err)      
    })
  })
}

const addFavoriteMovie = function() {
  console.log('saving a movie as favorite ...')
  return new Promise(function(resolve, reject) {
    const newMovie = {
      title: "test2"
    }

    movie.create(newMovie)
    .then((data) => {
      console.log('done creating')
      resolve(data)
    })
    .catch((err) => {
      reject(err)      
    })
  })
}

const updateRating = function() {
  console.log('update a movie rating ...')
}

const deleteRating = function() {
  console.log('remove a movie from favorite list ...')
}

module.exports = {
  listFavoriteMovies,
  addFavoriteMovie,
  updateRating,
  deleteRating
}
