class Movie {
  constructor(title, releaseDate, picture, rating) {
    this.title = title;
    this.releaseDate = releaseDate;
    this.picture = picture;
    this.rating = rating;
  } // Define getTitle, getReleaseDate, getPicture, getRating methods here...}

  getTitle() {
    return this.title;
  }

  getReleaseDate() {
    const date = new Date(this.releaseDate);
    return date.toLocaleDateString();
  }
  getPicture() {
    return this.picture;
  }

  getRating() {
    return this.rating;
  }
}

const API_BASE_URL = "https://api.themoviedb.org/3/";

const getHttpOptions = () => ({
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MmNmODUzMjdhNzEwN2ViMzhjOGM3ZTEyNmZhYTdiOCIsInN1YiI6IjY2NGM4Nzc5ODA3NmY1MWViODI1OWIwYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.u25LYVk-jmF525Q5e9t47OWZl9cZ47cDeA8KzgRnU9s",
  },
});

fetchMovies();

const getImage = (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`;

function fetchMovies() {
  console.log(API_BASE_URL);

  fetch(`${API_BASE_URL}movie/popular?language=en-US&page=1`, getHttpOptions())
    .then((result) => result.json())
    .then((data) =>
      data.results.forEach((item) => {
        const movie = new Movie(
          item.title,
          item.release_date,
          getImage(item.poster_path || item.backdrop_path),
          item.vote_average
        );
        createMovieCard(movie);
      })
    )
    .then(updateItemCount);
}

function updateItemCount() {
  const count = document.querySelector(".normal-heading-2");
  let allMovies = document.querySelectorAll(".movie");
  count.textContent = allMovies.length;
}

function createMovieCard(movie) {
  let target = document.querySelector(".movies-list");
  target.innerHTML += `
  <div class="movie">
  <img class="vector-img" src="./images/Vector.svg">
  <a href="#">
  <img class="poster-img" src="./images/tabler-icon-plus.svg">
  </a>
  <img class="poster" src=${movie.getPicture()}>
  <div class="flex-container movie-info">
    <a href="#" class="title normal-link">${movie.getTitle()}</a>
    <p class="release-date"><strong>Release Date:</strong> ${movie.getReleaseDate()}</p>
    <div class="flex-container rate-trailer">
      <div class="flex-container trailer">
        <img src="./images/play.svg">
        <a href="#">Trailer</a>
      </div>
      <div class="flex-container rating">
        <img src="./images/star.svg">
        <p>${movie.getRating()}</p>
      </div>
    </div>
  </div>
</div>`;
}
