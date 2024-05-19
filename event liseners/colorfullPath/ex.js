const canvas = document.querySelector("#drawingArea");
const ctx = canvas.getContext("2d");

let isDrawing = false;
let lastX = 0; // Initialize lastX and lastY
let lastY = 0;

console.log(canvas);

function startDrawing() {
  isDrawing = true;
}

function stopDrawing() {
  isDrawing = false;
}

function trackMousePath(event) {
  const { pageX, pageY } = event.touches ? event.touches[0] : event;
  const x = pageX - canvas.offsetLeft;
  const y = pageY - canvas.offsetTop;

  if (isDrawing) {
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(x, y);
    ctx.strokeStyle = "#" + Math.floor(Math.random() * 16777215).toString(16);

    ctx.stroke();

    lastX = x; // Update lastX with the new x-coordinate
    lastY = y; // Update lastY with the new y-coordinate
  }
}

function drawPath(event) {
  trackMousePath(event);
}

// Event listeners
canvas.addEventListener("mousedown", startDrawing);
canvas.addEventListener("mouseup", stopDrawing);
canvas.addEventListener("mousemove", drawPath);
