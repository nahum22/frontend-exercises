const users = document.getElementById("users");
const errorMessage = document.getElementById("error");

const url = "http://jsonplaceholder.typicode.com/users";

let usersData;

const getData = async () => {
  try {
    const urlData = await fetch(url);

    if (urlData.ok) {
      usersData = await urlData.json();
      doStupp();
    }
  } catch (error) {
    errorMessage.textContent = `Error ${error.message}`;
    throw new Error(`Error ${error.message}`);
  }
};
getData();

function doStupp() {
  usersData.forEach((user) => {
    let div = document.createElement("div");
    div.innerHTML = `<h2>${user.name}</h2><p><strong>Email:</strong>${user.email}</p>`;
    users.appendChild(div);
  });
}
