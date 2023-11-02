// Add movie function
function addMovie(movieData) {
  return api.post('addmovie', movieData); 
}
// Button to open form
const addMovieBtn = document.getElementById('add-movie-button');

addMovieBtn.addEventListener('click',()=>{
  formContainer.style.display = 'block';
})
// Submit handler
const form = document.getElementById('addMovieForm');
const formContainer = document.getElementById('form-container');

form.addEventListener('submit', async (e) => {

  e.preventDefault();

 // Get the input values from the form
 const title = document.querySelector('input[name="title"]').value;
 const genre = document.querySelector('input[name="genre"]').value;
 const plot = document.querySelector('input[name="plot"]').value;
 const releaseDate = document.querySelector('input[name="releaseDate"]').value;
 const notes = document.querySelector('input[name="notes"]').value;
 const rating = document.querySelector('input[name="rating"]').value;
  
  const movieData = {
    title,
    genre,
    plot,
    releaseDate,
    notes,
    rating
  };
  
  try {
    await addMovie(movieData);
    displayMovies();
    console.log('Movie added!');
    
  } catch (error) {
    console.error(error);
  }

  // Clear and hide form
  form.reset();
  formContainer.style.display = 'none';

});

// Toggle form visibility 
const addMovieToList = document.getElementById('add-movie');

addMovieToList.addEventListener('click', () => {

  // Toggle form
  if(formContainer.style.display === 'none') {
    formContainer.style.display = 'block';
  } else {
    formContainer.style.display = 'none';
  }

});