const url = "https://jsonplaceholder.typicode.com/users";
let postsUrl = "https://jsonplaceholder.typicode.com/posts";
let usersData;
let postData;
const usersDiv = document.getElementById("users");
const postssDiv = document.getElementById("posts");
const errorDiv = document.getElementById("error");

const promise1 = fetch(url)
  .then((response) => response.json())
  .then((data) => {
    usersData = data;
  });

const promise2 = fetch(postsUrl)
  .then((response) => response.json())
  .then((data) => {
    postData = data;
  });

Promise.all([promise1, promise2])
  .then(doStupp)
  .catch((error) => (errorDiv.textContent = error.message));

function doStupp() {
  usersData.forEach((element) => {
    let div = document.createElement("div");
    div.innerHTML = `<h2>${element.name}</h2>   <p><strong>Email:</strong> ${element.email}</p>   <div class='posts'></div>`;
    usersDiv.appendChild(div);
  });

  postData.forEach((post) => {
    let div = document.createElement("div");
    div.innerHTML = `<strong>${post.title}</strong><br>${post.body}`;
    postssDiv.appendChild(div);
  });
}
