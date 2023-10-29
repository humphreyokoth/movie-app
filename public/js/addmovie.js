// Get elements 
const addMovieBtn = document.getElementById('add-movie-button'); 
const form = document.getElementById('addMovieForm');
const formContainer = document.getElementById('form-container');

// Show form when add movie button clicked
addMovieBtn.addEventListener('click', () => {
  formContainer.style.display = 'block'; 
});

// Handle form submit
const submitBtn = document.getElementById('add-movie');
submitBtn.addEventListener('click', e => {

  e.preventDefault();
  // Get form values
  const title = form.elements['title'].value;
  const genre = form.elements['genre'].value;
  const plot = form.elements['plot'].value;
  const releaseDate = form.elements['releaseDate'].value;
  const notes = form.elements['notes'].value;
  const rating = form.elements['rating'].value;

  // Create FormData object
  const formData = new FormData();

  formData.append('title', title);
  formData.append('genre', genre);
  formData.append('plot', plot);
  formData.append('releaseDate', releaseDate); 
  formData.append('notes', notes);
  formData.append('rating', rating);

  api.post('addmovie', formData)
    .then(res => {
      if(res.status === 200) {
         // Reset form
         form.reset();

         // Hide form container 
         formContainer.style.display = 'none';
      }
    })
    .catch(err => {
      console.log(err);
    });

});