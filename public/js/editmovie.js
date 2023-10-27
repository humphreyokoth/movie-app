// Function to edit a movie
function editMovie(movieId, updatedData) {
    // Make an Axios PUT request to edit the movie with the given ID
    axios
      .put(`/editmovie/${movieId}`, updatedData)
      .then((response) => {
        // Handling the response and update the UI with the edited movie
        console.log('Movie edited:', response.data);
      })
      .catch((error) => {
        // Handling any errors
        console.error('Error editing movie:', error);
      });
  }
  