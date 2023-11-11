// Get movies from API
const getMovies = () => {
  return api.get("getmovies")
    .then(response => {
      console.log(response.data.getMovieList);
      return response.data.getMovieList;
    })
    .catch(error => {
      console.log(error);
      throw error;
    });
};

// Function to delete a movie by ID
const deleteMovie = (id) => {
  return api.delete(`deleteMovie?id=${id}`)
    .then(() => {
      console.log(`Movie with ID ${id} deleted successfully`);
    })
    .catch(error => {
      console.log(error);
      throw error;
    });
};

// Display movies
const displayMovies = () => {
  return getMovies()
    .then(getMovieList => {
      let cardsHTML = "";

      getMovieList.forEach((movie) => {
        const {title } = movie;
        // check for the ratings object using a ternary operator
        const imdbRating = movie.ratings ? JSON.parse(movie.ratings).imdb : "N/A";

        let imgSrc;
        // Getting image for a particular movie
        if (movie.imageUrl && movie.imageUrl.length > 0) {
          console.log("Image URL:", imgSrc); 
          imgSrc = `${'http://localhost:5000/api/v1/'}${movie.imageUrl}`;
        }
        console.log("Final Image URL:", imgSrc);
        const cardHTML = `
          <div class="card">
            <img id="img" src="${imgSrc}">
            <h3>${title} <i class="fa fa-star">${imdbRating}</i></h3>
            
            <div class="icon-container">
              <i class="fa fa-trash" data-id="${movie.id}" onclick="deleteMovieHandler(${movie.id})"></i>
              <i class="fa fa-pencil" data-id="${movie.id}"></i>
            </div>
          </div>
        `;

        cardsHTML += cardHTML;
      });

      document.querySelector(".cards").innerHTML = cardsHTML;
    })
    .catch(error => {
      console.log(error);
    });
};

// Event listeners
document.addEventListener("DOMContentLoaded", displayMovies);

// Function to handle delete movie icon click
const deleteMovieHandler = (id) => {
  // After deleting, refresh the displayed movies
  deleteMovie(id)
    .then(() => {
      
      displayMovies();
    })
    .catch(error => {
      console.log(error);
    });
};
