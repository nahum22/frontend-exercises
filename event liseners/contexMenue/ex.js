const menu = document.querySelector("h1");
const rightClickDialog = document.querySelector(".context-menu");

const viewDetailesBtn = document.querySelector("#viewDetails");
const copyBtnBtn = document.querySelector("#copyText");

window.addEventListener(`contextmenu`, (e) => e.preventDefault());

function showMenu(event) {
  // Check if the clicked button is either the right or middle button
  if (event.button === 2) {
    showRightClickDialog(event);
  }
}

function showRightClickDialog(event) {
  rightClickDialog.style.display = "block";
  rightClickDialog.style.position = "absolute";
  rightClickDialog.style.top = event.pageY + "px";
  rightClickDialog.style.left = event.pageX + "px";
}
function copyText() {
  window.alert("copying text");
}
function viewText() {
  window.alert("view text");
}

function hideMenue() {
  rightClickDialog.style.display = "none";
}

menu.addEventListener("mousedown", showMenu);
copyBtnBtn.addEventListener("click", copyText);
viewDetailesBtn.addEventListener("click", viewText);

rightClickDialog.addEventListener("mouseleave", hideMenue);
