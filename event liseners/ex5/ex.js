const element = document.querySelector("h1");

document.addEventListener("keypress", showKey);

function showKey(event) {
  let value = event.key;
  element.textContent = value.replace(" ", "space");
}
