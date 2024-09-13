document.getElementById('passwordForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const passwordInput = document.getElementById('passwordInput').value;
    const errorElement = document.getElementById('error');
    const successElement = document.getElementById('success');
  
    // Password validation regex:
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
  
    if (passwordRegex.test(passwordInput)) {
      errorElement.style.display = 'none';
      successElement.style.display = 'block';
      successElement.textContent = 'Password is valid!';
      
    } else {
      successElement.style.display = 'none';
      errorElement.style.display = 'block';
      errorElement.textContent = 'Invalid password. Must be at least 8 characters long, contain an uppercase letter, a lowercase letter, a number, and a special character.';
    }
  });
  

