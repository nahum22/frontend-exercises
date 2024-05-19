const input = document.querySelector("#filterInput");

const list = document.querySelectorAll(".item");

console.log(input);
input.addEventListener("keyup", search);

function search(event) {
  filterList(input.value);
}

function filterList(text) {
  list.forEach((item) => {
    if (item.textContent.toLowerCase().includes(text.toLowerCase())) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}
