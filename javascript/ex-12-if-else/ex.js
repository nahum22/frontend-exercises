//ex1

const movieRating = null;
if (movieRating > 7) {
  console.log("Highly rated movie");
} else {
  console.log("this movie has room for improvment");
}

//ex2

const movieBudjet = null;
if (movieBudjet >= 1000000 && movieBudjet <= 100000000) {
  console.log("Big budjet movie");
} else {
  console.log("indie movie");
}

//ex3
const movieGenere = "";
const audienceAge = null;

if (movieGenere === "horror" && audienceAge >= 18) {
  console.log("suitable for audience");
} else if (movieGenere === "horror" && audienceAge < 18) {
  console.log("not suitabler for audiance");
} else {
  console.log("suitable for all audences");
}

//ex4

const firstMovieDuration = null;
const secondMovieDuration = null;

if (firstMovieDuration === secondMovieDuration) {
  console.log("movies have the same duration");
} else if (firstMovieDuration > secondMovieDuration) {
  console.log("the first movie is longer");
} else {
  console.log("the second movie is longer");
}

//ex5

const viewerAge = null;

if (viewerAge >= 13 && viewerAge <= 18) {
  console.log("suitable for teens");
} else if (viewerAge > 18) {
  console.log("Suitable for adults");
} else {
  console.log("suitable for teens");
}
//ex6
const popularityScote = null;

popularityScote >= 80
  ? console.log("popular movie")
  : console.log("less known movie");

//ex7

const numOfAwards = null;

numOfAwards % 2 === 0
  ? console.log("even number of awards")
  : console.log("odd number of awards");

//ex8
const actorAge = null;

if (actorAge < 14) {
  console.log("Child Actor");
} else if (14 <= actorAge && actorAge <= 24) {
  console.log("Young Actor");
} else if (actorAge > 24) {
  console.log("Adult Actor");
}
//ex9

const hasInvitation = null;

hasInvitation
  ? console.log("Welcome to the premiere")
  : console.log("Please check your invitation");
//ex10

const screeningDuration = null;

if (screeningDuration < 40) {
  console.log("short film");
} else if (40 <= screeningDuration && screeningDuration <= 120) {
  console.log("Feature film");
} else if (120 < screeningDuration) {
  console.log("Epic length movie");
}
//ex11
const dayOfWeek = null;

if (dayOfWeek === "Saturday" || dayOfWeek === "Sunday") {
  console.log("Special screening event");
} else {
  console.log("Regular movie showtime");
}

//ex12
const releaseYear = null;
if (2001 <= releaseYear < 2100) {
  console.log("21st century movie");
} else {
  console.log("20th century movie");
}

//ex13

//const movieGenere=null;
//const movieRating=null;

if (movieGenere === "action" && 7 <= movieRating) {
  console.log("Must Watch");
} else {
  console.log("check reviews before watching");
}

//ex14
const ticketPrice = null;

if (ticketPrice <= 10) {
  console.log("Discounted ticket");
} else {
  console.log("Regular ticket Price");
}

//ex15

const age = null;
const isAdult = false;

if (age > 18 || !isAdult) {
  console.log("Allowed to watch");
} else {
  console.log("Age-restrected content");
}
//ex16
const movieTitle = "";
if (movieTitle.includes("2")) {
  console.log("this movie is a sequal");
} else {
  console.log("this movie is not a sequal");
}
