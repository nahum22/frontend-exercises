let element = document.querySelector(".container");

element.addEventListener("mouseover", highlight);
element.addEventListener("mouseout", unhighlight);

function highlight(event) {
  if (event.target.classList.contains("highlightable")) {
    event.target.classList.add("highlighted");
  }
}

function unhighlight(event) {
  if (event.target.classList.contains("highlightable")) {
    event.target.classList.remove("highlighted");
  }
}
