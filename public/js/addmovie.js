// Execute the script after the DOM has fully loaded
document.addEventListener("DOMContentLoaded", () => {
  // Get references to HTML elements
  const form = document.getElementById("addMovieForm");
  const formContainer = document.getElementById("form-container");
  const addMovieToList = document.getElementById("add-movie");
  const addMovieBtn = document.getElementById("add-movie-button");

  // Event listener to display the form when the "Add Movie" button is clicked
  addMovieBtn.addEventListener("click", () => {
    formContainer.style.display = "block";
  });

  // Function to add a movie using Axios and promises
  function addMovie(movieData) {
    return new Promise((resolve, reject) => {
      // Create FormData object to handle file uploads
      const formData = new FormData();
      formData.append("image", movieData.imageFile);
      formData.append("title", movieData.title);
      formData.append("genre", movieData.genre);
      formData.append("plot", movieData.plot);
      formData.append("releaseDate", movieData.releaseDate);
      formData.append("notes", movieData.notes);
      formData.append("rating", movieData.rating);

      // Use Axios to send a POST request to add a movie
      api.post("addmovie", formData)
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          // Handle errors and reject the promise
          reject(error.response ? error.response.data : error.message || error);
        });
    });
  }

  // Get reference to the image input field
  const imageInput = document.querySelector('input[name="image"]');
  let imageFile;

  // Event listener to update the imageFile variable when a file is selected
  imageInput.addEventListener("change", (e) => {
    if (e.target.files.length > 0) {
      imageFile = e.target.files[0];
    }
  });

  // Event listener to handle form submission
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Get values from form inputs
    const title = document.querySelector('input[name="title"]').value;
    const genre = document.querySelector('input[name="genre"]').value;
    const plot = document.querySelector('textarea[name="plot"]').value;
    const releaseDate = document.querySelector('input[name="releaseDate"]').value;
    const notes = document.querySelector('input[name="notes"]').value;
    const rating = document.querySelector('input[name="rating"]').value;

    // Check if any required field is empty
    if (!imageFile || !title || !genre || !plot || !releaseDate || !rating) {
      alert("Please fill in all required fields.");
      return;
    }

    // Create an object with movie data
    const movieData = {
      imageFile,
      title,
      genre,
      plot,
      releaseDate,
      notes,
      rating,
    };

    // Add the movie using the addMovie function
    addMovie(movieData)
      .then(() => {
        // Movie added successfully, update the display
        displayMovies();
        console.log("Movie added");
      })
      .catch((error) => {
        // Log and handle any errors during movie addition
        console.log("Error adding movie", error);
      })
      .finally(() => {
        // Reset the form and hide it
        form.reset();
        formContainer.style.display = "none";
      });
  });

  // Event listener to toggle form visibility when "Add Movie" is clicked
  addMovieToList.addEventListener("click", () => {
    formContainer.style.display = formContainer.style.display === "none" ? "block" : "none";
  });
});
