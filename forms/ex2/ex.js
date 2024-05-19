//.error-message

const form = document.querySelector("form");
const inputs = document.querySelectorAll("input");

let isValid = true;
//.error-message
function validateForm(e) {
  e.preventDefault();
  inputs.forEach((input) => input.classList.remove("error"));

  inputs.forEach((input) => validate(input));
}

function validate(input) {
  switch (input.name) {
    case "username":
      validateName(input);
      break;
    case "email":
      validateEmail(input);
      break;
    case "password":
      validatePassword(input);

      break;
  }
}

function validateName(input) {
  if (input.value.length < 3) {
    input.classList.add("error");
    isValid = false;
  }
}

function validateEmail(input) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(input.value)) {
    input.classList.add("error");
    isValid = false;
  }
}

function validatePassword(input) {
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$%*?&])[A-Za-z\d@$%*?&]{8,}$/;

  if (!passwordRegex.test(input.value)) {
    input.classList.add("error");
    isValid = false;
  }
}

form.addEventListener("submit", validateForm);
