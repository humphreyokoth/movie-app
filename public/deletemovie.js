
// Get all delete icons 
const deleteIcons = document.querySelectorAll('.delete-icon');

// Add click handler
deleteIcons.forEach(icon => {
  icon.addEventListener('click', deleteMovie);
});

function deleteMovie() {
  // Get movie ID from data attribute
  
  // Make API call to delete
}


function deleteMovie() {
  const movieId = 123;
  
  // Make API request
  axios.delete(`/movies/${movieId}`)
    .then(res => {
      // Remove from DOM
      
    })
    .catch(err => console.error(err));
}