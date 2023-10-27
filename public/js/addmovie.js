// Function to add a movie
function addMovie() {
    // Get input values from the form
    const title = document.querySelector('input[name="title"]').value;
    const genre = document.querySelector('input[name="genre"]').value;
    const plot = document.querySelector('input[name="plot"]').value;
    const releaseDate = document.querySelector('input[name="releaseDate"]').value;
    const notes = document.querySelector('input[name="notes"]').value;
    const rating = document.querySelector('input[name="rating"]').value;
  
    // Create a movie object
    const newMovie = {
      title: title,
      genre: genre,
      plot: plot,
      releaseDate: releaseDate,
      notes: notes,
      rating: rating,
    };
  
    // Make an Axios POST request to add the movie to the backend
    axios
      .post('/addmovie', newMovie)
      .then((response) => {
        // Handling the response and update the UI with the added movie
        console.log('Movie added:', response.data);
      })
      .catch((error) => {
       // Handling any errors
        console.error('Error adding movie:', error);
      });
  }
  