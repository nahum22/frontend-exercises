const url = "https://jsonplaceholder.typicode.com/users";
let postsUrl = "https://jsonplaceholder.typicode.com/posts";

const usersDiv = document.getElementById("users");
const postssDiv = document.getElementById("posts");
const errorDiv = document.getElementById("error");
let usersData = [];
let postData = [];
const getPromises = async () => {
  try {
    const urldata = await fetch(url);
    usersData = await urldata.json();
    postdata = await fetch(postsUrl);
    postData = await postdata.json();
  } catch (error) {
    errorDiv.textContent = error.message;
  }
  doStupp();
};

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

getPromises();
