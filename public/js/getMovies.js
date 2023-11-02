// Get movies from API
const getMovies = async () => {
  try {
    const response = await api.get('getmovies');
    return response.data.getMovieList; 
  } catch (error) {
    console.log(error);
  }
}

// Display movies
const displayMovies = async () => {

  const movies = await getMovies();

  let cardsHTML = '';

  movies.forEach(movie => {
    // check for the ratings object
    const imdbRating = movie.ratings ? JSON.parse(movie.ratings).imdb : 'N/A';
    const cardHTML = `
      <div class="card">
        <img src="${movie.poster}">
        <h3>${movie.title} <i class="fa fa-star">${imdbRating}</i></h3>
        
        <div class="icon-container">
          <i class="fa fa-trash" data-id="${movie.id}"></i>
          <i class="fa fa-pencil" data-id="${movie.id}"></i>
        </div>
      </div>
    `;

    cardsHTML += cardHTML;
  });

  document.querySelector('.cards').innerHTML = cardsHTML;

}

