let buttom = document.querySelector("#clickButton");

buttom.addEventListener("click", increase);

function increase() {
  const element = document.querySelector("#counter");
  console.log((element.textContent = parseInt(element.textContent) + 1));
}
