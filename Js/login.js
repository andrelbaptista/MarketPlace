var email = document.getElementById('email');
var password = document.getElementById('password');

email.addEventListener('focus',  () => {
  email.style.borderColor = "#0000ff";
});

email.addEventListener('blur', () => {
    email.style.borderColor = "#778899";
  });

  password.addEventListener('focus', () => {
    password.style.borderColor = "#0000ff";
  });
  
  password.addEventListener('blur', () => {
      password.style.borderColor = "#778899";
    });