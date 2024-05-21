const users = document.getElementById("users");
const errorMessage = document.getElementById("error");

const url = "http://jsonplaceholder.typicode.com/users";

let usersData;

fetch(url)
  .then((response) => {
    try {
      if (response.status === 200) {
        return response.json();
      } else {
        errorMessage.textContent = `Error ${error.message}`;
        throw new Error(`Error ${error.message}`);
      }
    } catch (error) {}
  })
  .then((data) => {
    usersData = data;
  })
  .then(doStupp);

function doStupp() {
  usersData.forEach((user) => {
    let div = document.createElement("div");
    div.innerHTML = `<h2>${user.name}</h2><p><strong>Email:</strong>${user.email}</p>`;
    users.appendChild(div);
  });
}
