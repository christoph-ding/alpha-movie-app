const listFavoriteMovies = function() {
  console.log('getting all movies ...')
  return new Promise(function(resolve, reject) {
    console.log('inside promise ...')
    resolve()
  })
}

const addFavoriteMovie = function() {
  console.log('saving a movie as favorite ...')
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
