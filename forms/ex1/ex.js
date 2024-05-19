const form = document.querySelector("form");

const inputs = document.querySelectorAll("input");

function action(e) {
  e.preventDefault();
  let output = "";
  inputs.forEach((input) => (output += input.id + ": " + input.value + "\n "));
  window.alert(output);
}

form.addEventListener("submit", action);
