function toggleBackgroundColor() {
  let body = document.querySelector("body");
  body.classList.toggle("dark");
}

let button = document.getElementById("toggleButton");

button.addEventListener("click", toggleBackgroundColor);
