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

const validMovie = function(movieParams) {
  // movies must have titles
  // we can add more rules here!
  return ('title' in movieParams && 
          movieParams.title.length > 0)
}

const addFavoriteMovie = function(newMovieParams) {
  return new Promise(function(resolve, reject) {
    if (!(validMovie(newMovieParams))) {
      const errorMsg = "Movies must have a title"
      reject(errorMsg)
    }

    const movieTemplate = {
      title: null,
      poster: null,
      year: null,
      plot: null,
      rating: null  
    }

    const newMovie = Object.assign(movieTemplate, newMovieParams)

    movie.create(newMovie)
    .then((data) => {
      resolve(data)
    })
    .catch((err) => {
      reject(err)      
    })
  })
}

const updateRating = function(updateParams) {
  return new Promise(function(resolve, reject) {
    if (!(validMovie(updateParams))) {
      const errorMsg = "Movies must have a title"
      reject(errorMsg)
    }

    movie.update(
      {rating: updateParams.rating},
      {where: {title: updateParams.title}}
    )
    .then(() => {
      resolve()
    })
    .catch((err) => {
      reject(err)
    })
  })
}

const deleteRating = function(removeParams) {
  return new Promise(function(resolve, reject) {
    if (!(validMovie(removeParams))) {
      const errorMsg = "Movies must have a title"
      reject(errorMsg)
    }

    movie.destroy({
      where: {title: removeParams.title}
    })
    .then(() => {
      resolve()
    })
    .catch((err) => {
      reject(err)
    })
  })
}

module.exports = {
  listFavoriteMovies,
  addFavoriteMovie,
  updateRating,
  deleteRating
}
