
// Get dialog
const dialog = document.getElementById('editMovieDialog'); 
const form = dialog.querySelector('form');

// Open dialog
document.getElementById('edit-btn').addEventListener('click', () => {
  dialog.showModal();
});

// Get all edit icons
const editIcons = document.querySelectorAll('.edit-icon');

// Add click handler
editIcons.forEach(icon => {
  icon.addEventListener('click', openEditDialog); 
});

// Submit handler
form.addEventListener('submit', editMovie);  

function editMovie(e) {
  e.preventDefault();

  // Get form values
  const movieId = form.elements['id'].value;
  const title = form.elements['title'].value;

  // Make API request
  axios.put(`/movies/${movieId}`, { title })
    .then(res => {
      // Update DOM
      updateMovieInDOM(updatedMovie);
      
      dialog.close();
    })
    .catch(err => console.error(err));
}