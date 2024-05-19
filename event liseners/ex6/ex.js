let element = document.querySelector("body");

function checkVisibility() {
  const elements = document.querySelectorAll("h1");
  elements.forEach((element) => {
    const rect = element.getBoundingClientRect();
    if (rect.top <= window.innerHeight && rect.bottom >= 0) {
      activateAnimation(element);
    }
  });
}

function activateAnimation(element) {
  element.classList.add("active");
}

document.addEventListener("scroll", checkVisibility);
