const loadingIndicaitor = document.querySelector("#loading-indicator");
const url = "https://jsonplaceholder.typicode.com/users";
const usersDiv = document.getElementById("users");

const doStuff = async () => {
  loadingIndicaitor.style.display = "block";
  const promiseUrl = await fetch(url);
  const usersData = await promiseUrl.json();

  loadingIndicaitor.style.display = "none";

  usersData.forEach((element) => {
    let div = document.createElement("div");
    div.innerHTML = `<h2>${element.name}</h2>   <p><strong>Email:</strong> ${element.email}</p>   <div class='posts'></div>`;
    usersDiv.appendChild(div);
  });
};

doStuff();
