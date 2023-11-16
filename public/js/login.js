document.addEventListener('DOMContentLoaded', () => {

    const form = document.querySelector('form');
  
    form.addEventListener('submit', handleSubmit);
  
    function handleSubmit(e) {
      e.preventDefault();
  
   
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
  
      loginUser( email, password)
        .then(response => {
            console.log(response)
          if (response.data.success) 
            window.location.href = 'dashboard.html';
        })
        .catch(error => {
          console.log('login failed:', error);
        });
    }
  
    function loginUser(email, password) {
      return new Promise((resolve, reject) => {
        const url = 'login';
  
        api.post(url, {email, password})
          .then(response => {
            resolve(response);
          })
          .catch(error => {
            reject(error);
          });
      });
    }
  
  });