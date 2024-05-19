const images = document.querySelectorAll(".character");
let positions = [0, 1, 2];
let i = 0;
function rotateArray(arr) {
  let result = [];
  result[0] = arr[arr.length - 1];
  for (let i1 = 0; i1 < arr.length - 1; i1++) {
    result[i1 + 1] = arr[i1];
  }
  return result;
}

addEventListeners();
function addEventListeners() {
  images.forEach((charecter) =>
    charecter.addEventListener("click", updateCarousle1)
  );
}

function updateCarousle1() {
  positions = rotateArray(positions);
  images.forEach((charecter) => {
    charecter.style.transform =
      "translateX(" + (positions[i] - 1) * 180 + "px)";
    if (positions[i] === 1) {
      charecter.style.scale = "1.2";
      charecter.style.zIndex = "2";
      charecter.classList.add("character-center");
    } else {
      charecter.style.scale = "1";
      charecter.style.zIndex = "1";
      charecter.classList.remove("character-center");
    }

    i = i + 1;
  });
  i = 0;
}
