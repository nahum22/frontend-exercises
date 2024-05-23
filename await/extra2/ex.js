//https://www.omdbapi.com/?t=Terminator&apikey=1bef141a

const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");
const movieContainer = document.getElementById("movieContainer");
const key = "1bef141a";

const title = searchInput.value;
//https://www.omdbapi.com/&apikey=1bef141a?t=Terminator
let urldata = "http://www.omdbapi.com";
const postsdata = `http://img.omdbapi.com/?&apikey=${key}?t=Terminator`;
const postData = searchButton.addEventListener("click", triggerEvent);
//www.omdbapi.com/?t=Terminator&apikey=1bef141ahttps: function triggerEvent() {

function triggerEvent() {
  searchMovie(searchInput.value);
}

async function searchMovie(title) {
  urldata = urldata + `/?t=${title}&apikey=${key}`;
  console.log(urldata);
  const urlResult = await fetch(urldata);
  const result = await urlResult.json();
  console.log(result);
}
