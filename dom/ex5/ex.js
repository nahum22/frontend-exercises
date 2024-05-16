let color = document.getElementById("colorPicker");

function highlight(element) {
  const color = document.getElementById("colorPicker").value;

  element.style.backgroundColor = color;
}
