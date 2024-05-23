const GITHUB_API_URL = "https://api.github.com/users/";
const userDetailContainer = document.getElementById("user-details");
const searchButton = document.getElementById("searchButton");
const userName = document.getElementById("searchField");

function displayUser(user) {
  console.log(user);
  let userHTML = `
    <div class="card grid-2">

    <div class="card grid-2">
    <div class="all-center"><img src=${user.avatar_url} class="round-img"
        alt="avatar">
      <h2>${user.name}</h2>
      <p>Location: ${user.location}</p>
    </div>
    <div class="all-center">`;

  if (user.bio) {
    userHTML += `<h3 class="text-center">Bio</h3>
  <p>${user.bio}</p>`;
  }
  userHTML += `

      <ul>
        <li><strong>Username:</strong> ${user.login}</li>
        <li></li>
        <li><strong>Site: </strong><a href=${user.blog}} target="_blank"
            rel="noreferrer">${user.blog}</a></li>
        <li></li>
      </ul><a href=${user.html_url} class="btn btn-success my-1" target="_blank" rel="noreferrer">To
        Github Profile</a>
    </div>
  </div>
  <div class="card text-center">
    <div class="badge badge-dark">Followers: ${user.followers}</div>
    <div class="badge badge-success">Following: ${user.following}</div>
    <div class="badge badge-info">Public Repositories:  ${user.public_repos}</div>
    <div class="badge badge-light">Public Gists: ${user.public_gists}</div>
  </div>













    </div>
    `;
  userDetailContainer.innerHTML = userHTML;
}
const fetchUser = async () => {
  const urlResponce = await fetch(GITHUB_API_URL + userName.value);
  const user = await urlResponce.json();
  displayUser(user);
};

searchButton.addEventListener("click", fetchUser);

userName.addEventListener("keyup", checkKey);

function checkKey(event) {
  if (event.key === "Enter") {
    fetchUser();
  }
}
