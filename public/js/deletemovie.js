// Function to delete a movie
function deleteMovie(movieId) {
    // Make an Axios DELETE request to delete the movie with the given ID
    axios
      .delete(`/deletemovie/${movieId}`)
      .then((response) => {
        //  remove the movie 
        console.log('Movie deleted:', response.data);
      })
      .catch((error) => {
        // Handling any errors
        console.error('Error deleting movie:', error);
      });
  }
  