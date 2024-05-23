const url = "http://jsonplaceholder.typicode.com";
const usersDiv = document.getElementById("users");
let usersData;
let posts;

const bringUsers = async () => {
  try {
    const users = await fetch(url + "/users");
    usersData = await users.json();
  } catch (error) {
    console.log("Error loading data:", error);
  }

  doStupp();
};

bringUsers();
async function doStupp() {
  usersData.forEach(async (element) => {
    try {
      const response = await fetch(url + `/posts?userId=${element.id}`);
      const result = await response.json();

      let postsUser = result;
      let div = document.createElement("div");
      div.innerHTML = `<h2>${element.name}</h2>   <p><strong>Email:</strong> ${element.email}</p>   <div class='posts'></div>`;
      usersDiv.appendChild(div);
      let divPosts = div.querySelector(".posts");

      let i = 0;
      postsUser.forEach((post) => {
        let postDiv = document.createElement("div");
        postDiv.innerHTML = `<strong>${post.title}</strong><br>${post.body}`;
        console.log(postDiv);
        divPosts.appendChild(postDiv);
        i++;
      });
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  });
}
