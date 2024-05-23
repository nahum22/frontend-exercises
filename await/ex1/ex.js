const triggeredFunction = async () => {
  await setTimeout(() => {
    if (checkBox.checked) {
      console.log("error");
      textHeader.classList.remove("resolved");
      textHeader.classList.add("rejected");
      textHeader.textContent = "rejected";
    } else {
      textHeader.classList.remove("rejected");
      textHeader.classList.add("resolved");
      textHeader.textContent = "resolved";
    }
  }, 1000);
};

const bottom = document.getElementById("triggerPromise");
const checkBox = document.getElementById("triggerRejection");
const textHeader = document.querySelector("h1");
bottom.addEventListener("click", triggeredFunction);
