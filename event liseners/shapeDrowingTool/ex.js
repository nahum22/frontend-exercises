const myCanvas = document.getElementById("drawingArea");
const ctx = myCanvas.getContext("2d");

const tools = document.querySelectorAll(".tool");

tools.forEach((item) => item.addEventListener("click", doPainting));

ctx.strokeStyle = "black"; // Set the stroke color
ctx.lineWidth = 5; // Set the stroke width

let action = "";
function drawRectangle(x, y) {
  ctx.strokeRect(x - 300, y - 100, 100, 100);
}

function doPainting(event) {
  action = event.target.getAttribute("data-tool");
}

function drawOnSpot(event) {
  let x = event.clientX;
  let y = event.clientY;
  if (action == "rectangle") {
    drawRectangle(x, y);
  }
  if (action == "circle") {
    addCircle(x, y);
  }
}

// Draw an empty circle
function addCircle(x, y) {
  ctx.beginPath();
  ctx.arc(x - 300, y - 100, 40, 0, Math.PI * 2, false); // x, y, radius, start angle, end angle, anticlockwise
  ctx.stroke();
}

myCanvas.addEventListener("click", drawOnSpot);
