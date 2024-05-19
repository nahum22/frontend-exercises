let container = document.querySelector(".faq-container");

function showOrHide(e) {
  let element = e.target;
  let answer = element.nextElementSibling;
  let answer2 = element.previousElementSibling;
  if (!answer) {
    answer = answer2;
  }
  console.log(answer);
  if (answer.classList.contains("faq-answer")) {
    answer.classList.remove("faq-answer");
    answer.classList.add("faq-question");
  }

  if (element.classList.contains("faq-question")) {
    element.classList.remove("faq-question");
    element.classList.add("faq-answer");
  }
}

container.addEventListener("click", showOrHide);
