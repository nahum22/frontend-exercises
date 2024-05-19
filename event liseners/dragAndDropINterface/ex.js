function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text/plain", ev.target.id); // Use "text/plain" MIME type
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text/plain"); // Retrieve data using "text/plain"
  ev.target.appendChild(document.getElementById(data));
}

var div1 = document.querySelector("#targetBox"); // Assuming #div1 is the container
div1.addEventListener("dragover", allowDrop);
div1.addEventListener("drop", drop);

div1.addEventListener("dragstart", drag)

let source=document.querySelector('#sourceBox')
source.addEventListener("dragover", allowDrop);
source.addEventListener("drop", drop);

// Select the draggable element
var draggableDiv = document.querySelector(".draggable");
draggableDiv.addEventListener("dragstart", drag);
