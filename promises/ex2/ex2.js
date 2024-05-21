const url = "http://jsonplaceholder.typicode.com";
const usersDiv = document.getElementById("users");
let usersData;
let posts;
fetch(url + "/users")
  .then((response) => {
    if (response.status === 200) return response.json();
  })
  .then((data) => {
    usersData = data;
  })
  .catch((error) => {
    console.log("Error loading data:", error);
  })
  .then(doStupp);
let i = 0;
function doStupp() {
  usersData.forEach((element) => {
    fetch(url + `/posts?userId=${element.id}`)
      .then((responce) => responce.json())
      .then((result) => {
        let postsUser = result;
        let div = document.createElement("div");
        div.innerHTML = `<h2>${element.name}</h2>   <p><strong>Email:</strong> ${element.email}</p>   <div class='posts'></div>`;
        usersDiv.appendChild(div);
        let divPosts = div.querySelector(".posts");
        postsUser.forEach((post) => {
          let postDiv = document.createElement("div");
          postDiv.innerHTML = `<strong>${post.title}</strong><br>${post.body}`;
          console.log(postDiv);
          divPosts.appendChild(postDiv);
          i++;
        });
      });
  });
}
