
// Get dialog 
const dialog = document.getElementById('addMovieDialog');
const form = dialog.querySelector('form');

// Open dialog
document.getElementById('add-btn').addEventListener('click', () => {
  dialog.showModal();
}); 

// Submit handler  
form.addEventListener('submit', addMovie);

function addMovie(e) {
  e.preventDefault();
  
  // Get all form values
  const title = form.elements['title'].value;
  const genre = form.elements['genre'].value;
  const plot = form.elements['plot'].value;
  const releaseDate = form.elements['releaseDate'].value;
  const notes = form.elements['notes'].value;
  const rating = form.elements['rating'].value;

  axios.post('/addmovie', { title, rating })
  .then(res => {
    const movie = res.data;

    // Get external rating 
    getExternalRating(movie.title)
      .then(externalRating => {
        // Compare ratings
        const ratingInfo = compareRatings(movie, externalRating);
        
        // Display rating comparison
      });

    dialog.close();
  })
  .catch(err => console.error(err));  
// Get external rating from OMDb
function getExternalRating(title) {
    return axios.get(`http://www.omdbapi.com/?t=${title}&apikey=12345`)
      .then(res => res.data.imdbRating); 
  }
  
  // Compare ratings
  function compareRatings(movie, externalRating) {
    return `Our rating: ${movie.rating} vs OMDb rating: ${externalRating}`;
  }
}