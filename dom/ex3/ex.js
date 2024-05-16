let images = document.querySelectorAll("div>#slider>img");

let currentIndex = 0;

function moveSlide(direction) {
  images[currentIndex].classList.remove("active");

  currentIndex += direction;
  if (currentIndex < 0) {
    currentIndex = 0;
  }
  if (currentIndex >= images.length) {
    currentIndex = images.length - 1;
  }

  images[currentIndex].classList.add("active");
}
