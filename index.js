const email = document.getElementById("exampleEmail");
const user = document.getElementById("exampleName");
const text = document.getElementById("exampleText");
const emailError = document.getElementById("emailError");
const userError = document.getElementById("userError");
const textError = document.getElementById("textError");
const form = document.getElementById("contactForm");

form.addEventListener("submit", function (event) {
  let isValid = true;

  if (!email.value || !email.checkValidity()) {
    emailError.style.display = "block"; 
    isValid = false;
  } else {
    emailError.style.display = "none"; 
  }

  if (!user.value.trim()) {
    userError.style.display = "block"; 
    isValid = false;
  } else {
    userError.style.display = "none";
  }

  if (!text.value.trim()) {
    textError.style.display = "block"; 
    isValid = false;
  } else {
    textError.style.display = "none"; 
  }

  if (!isValid) {
    event.preventDefault();
  }
});
