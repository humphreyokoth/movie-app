document.addEventListener('DOMContentLoaded', () => {

    const form = document.querySelector('form');
  
    form.addEventListener('submit', handleSubmit);
  
    function handleSubmit(e) {
      e.preventDefault();
  
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
  
      registerUser(name, email, password)
        .then(response => {
            console.log(response)
          if (response.data.success) 
            window.location.href = 'index.html';
        })
        .catch(error => {
          console.log('Registration failed:', error);
        });
    }
  
    function registerUser(name, email, password) {
      return new Promise((resolve, reject) => {
        const url = 'register';
  
        api.post(url, {name, email, password})
          .then(response => {
            resolve(response);
          })
          .catch(error => {
            reject(error);
          });
      });
    }
  
  });