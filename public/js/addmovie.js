// Function to add a new movie to the database
function addMovie(title, genre, plot, releaseDate, notes, rating) {
    // Data to send in the POST request
    const movieData = {
      title,
      genre,
      plot,
      releaseDate,
      notes,
      rating,
    };
  
    api
      .post('/addmovie', movieData)
      .then((response) => {
        if (response.status === 200) {
          // Movie added successfully, now add it to the list
          addMovieToList(title, genre, plot, releaseDate, notes, rating);
        } else {
          console.error('Failed to add the movie to the database');
        }
      })
      .catch((error) => {
        console.error('An error occurred while adding the movie:', error);
      });
  }
  
  // Function to add a movie to the list
  function addMovieToList(title, genre, plot, releaseDate, notes, rating) {
    const movieList = document.querySelector('.movie-listings');
    const movieDiv = document.createElement('div');
    movieDiv.classList.add('movie');
  
    const movieTitle = document.createElement('h2');
    movieTitle.textContent = title;
  
    // Create other elements (image, edit, delete, rating) and add them to 'movieDiv'
  
    movieDiv.appendChild(movieTitle);
    movieList.appendChild(movieDiv);
  }
  
  // Event listener for the "Add Movie" button to toggle form visibility
  const addMovieButton = document.getElementById('add-movie-button');
  const formContainer = document.getElementById('form-container');
  
  addMovieButton.addEventListener('click', function () {
    // Toggle the visibility of the form
    if (formContainer.style.display === 'none' || formContainer.style.display === '') {
      formContainer.style.display = 'block';
    } else {
      formContainer.style.display = 'none';
    }
  });
  
  // Event listener for the movie submission form
  const movieForm = document.getElementById('addMovieForm');
  movieForm.addEventListener('submit', function (e) {
    // Prevent the default form submission
    e.preventDefault();
  
    // Get the input values from the form
    const title = document.querySelector('input[name="title"]').value;
    const genre = document.querySelector('input[name="genre"]').value;
    const plot = document.querySelector('input[name="plot"]').value;
    const releaseDate = document.querySelector('input[name="releaseDate"]').value;
    const notes = document.querySelector('input[name="notes"]').value;
    const rating = document.querySelector('input[name="rating"]').value;
  
    // Make a POST request to add the movie to the database using Axios
    addMovie(title, genre, plot, releaseDate, notes, rating);
  
    // Clear the form inputs
    document.querySelector('input[name="title"]').value = '';
    document.querySelector('input[name="genre"]').value = '';
    document.querySelector('input[name="plot"]').value = '';
    document.querySelector('input[name="releaseDate"]').value = '';
    document.querySelector('input[name="notes"]').value = '';
    document.querySelector('input[name="rating"]').value = '';
  
    // Hide the form
    formContainer.style.display = 'none';
  });
  