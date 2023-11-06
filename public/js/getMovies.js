// Get movies from API
const getMovies = async () => {
  try {
    const response = await api.get("getallmoviesimage");
    console.log(response);
    return response.data.movies;
  } catch (error) {
    console.log(error);
  }
};

// Display movies
const displayMovies = async () => {
  const movies = await getMovies();

  let cardsHTML = "";

  movies.forEach((movie) => {
    // Getting image for a particular movie
    const { title} = movie;
    // check for the ratings object
    const imdbRating = movie.ratings ? JSON.parse(movie.ratings).imdb : "N/A";

    let imgSrc;

if(movie.imageUrls && movie.imageUrls.length > 0) {
  imgSrc = movie.imageUrls[0]; 
}
    const cardHTML = `
      <div class="card">
        <img id="img" src="${imgSrc}">
        <h3>${title} <i class="fa fa-star">${imdbRating}</i></h3>
        
        <div class="icon-container">
          <i class="fa fa-trash" data-id="${movie.id}"></i>
          <i class="fa fa-pencil" data-id="${movie.id}"></i>
        </div>
      </div>
    `;

    cardsHTML += cardHTML;
  });

  document.querySelector(".cards").innerHTML = cardsHTML;
};

// Event listeners
document.addEventListener("DOMContentLoaded", displayMovies);
