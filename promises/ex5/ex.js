const loadingIndicaitor = document.querySelector("#loading-indicator");
const url = "https://jsonplaceholder.typicode.com/users";
const usersDiv = document.getElementById("users");

doStuff();
function doStuff() {
  loadingIndicaitor.style.display = "block";
  const promise1 = fetch(url)
    .then((response) => response.json())
    .then((data) => {
      usersData = data;
      loadingIndicaitor.style.display = "none";

      usersData.forEach((element) => {
        let div = document.createElement("div");
        div.innerHTML = `<h2>${element.name}</h2>   <p><strong>Email:</strong> ${element.email}</p>   <div class='posts'></div>`;
        usersDiv.appendChild(div);
      });
    });
}
