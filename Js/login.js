var email = document.getElementById("email");
var password = document.getElementById("password");

email.addEventListener('focus',  () => {
  email.style.bordercolor = "#0000ff";
});

email.addEventListener('blur',  () => {
    email.style.bordercolor = "#f5f5f5";
  });

  password.addEventListener('focus', () => {
    password.style.bordercolor = "#778899";
  });
  
  password.addEventListener('blur', () => {
      password.style.bordercolor = "#f5f5f5";
    });