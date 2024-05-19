const overlay = document.querySelector("#overlay");
const showBotton = document.querySelector("#showModalBtn");

const closeBottom = document.querySelector("#closeBtn");
showBotton.addEventListener("click", show);
closeBottom.addEventListener("click", hide);
function show() {
  console.log(33);
  overlay.style.display = "block";
}

function hide() {
  overlay.style.display = "none";
}
