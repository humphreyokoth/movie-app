document.addEventListener("DOMContentLoaded", function () {
  // Select the movie listings container
  const movieList = document.getElementById('movie-listings');

  // Function to get movies and update the movie listings
  function getAllMoviesAndUpdate() {
    // Make an API request to fetch movies from the database
    api.get('/getmovies')
      .then(response => {
        // Access the array of movies using response.data.getMovieList
        const movies = response.data.getMovieList;

        // Clear the current movie listings
        movieList.innerHTML = '';

        // Use a for loop to create movie elements
        for (let i = 0; i < movies.length; i++) {
          const movie = movies[i];
          const movieElement = document.createElement('div');
          movieElement.classList.add('movie');

          // Create and set the content for movie details
          const img = document.createElement('img');
          img.src = movie.posterUrl || '#';
          img.alt = 'Movie poster';

          const title = document.createElement('h2');
          title.textContent = movie.title;

          const editIcon = document.createElement('i');
          editIcon.classList.add('fas', 'fa-edit', 'edit-icon');

          const deleteIcon = document.createElement('i');
          deleteIcon.classList.add('fas', 'fa-trash', 'delete-icon');

          // Delete method of the movie
          deleteIcon.addEventListener('click', () => {
            const movieId = movie.id;
            api.delete(`deletemovie?id=${movieId}`)
              .then(() => {
                // Refresh the movie listings
                getAllMoviesAndUpdate();
              })
              .catch(error => {
                console.error(error);
              });
          });

          const rating = document.createElement('div');
          rating.classList.add('rating');
          for (let j = 0; j < 5; j++) {
            const star = document.createElement('i');
            star.classList.add('fas', 'fa-star');
            if (j >= movie.rating) {
              star.classList.remove('fa-star');
              star.classList.add('far', 'fa-star');
            }
            rating.appendChild(star);
          }

          // Append the elements to the movie element
          movieElement.appendChild(img);
          movieElement.appendChild(title);
          movieElement.appendChild(editIcon);
          movieElement.appendChild(deleteIcon);
          movieElement.appendChild(rating);

          // Append the movie element to the movie listings
          movieList.appendChild(movieElement);
        }
      })
      .catch(error => {
        console.error(error);
        movieList.innerHTML = '<p>Failed to load movies. Try again later.</p>';
      });
  }

  // Call the function on page load to fetch and display movies
  getAllMoviesAndUpdate();
});
