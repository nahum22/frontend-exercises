const bottom = document.getElementById("triggerPromise");
const checkBox = document.getElementById("triggerRejection");
const textHeader = document.querySelector("h1");
bottom.addEventListener("click", triggeredFunction);

function triggeredFunction() {
  const pro = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!checkBox.checked) {
        resolve("success");
      } else {
        reject(new Error("the promise has been rejected"));
      }
    }, 1000);
  });
  pro.catch((error) => {
    console.log("error");
    textHeader.classList.remove("resolved");
    textHeader.classList.add("rejected");
    textHeader.textContent = "rejected";
  });

  pro.then((message) => {
    textHeader.textContent = message;
    textHeader.classList.add("resolved");
    textHeader.classList.remove("rejected");
  });
}
