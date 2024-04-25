const grid = document.getElementById("grid");
let user = [4, 0];
let treasures = [
  [0, 3],
  [0, 7],
  [1, 3],
  [1, 7],
  [1, 8],
];
let traps = [
  [5, 3],
  [5, 7],
  [5, 8],
];

createGrid(user, treasures, traps);
//grid.style.backgroundColor = "black";
//grid.innerHTML

function createGrid(user, treasures, traps) {
  const grid = document.getElementById("grid");
  grid.innerHTML = "";

  // grid.innerHTML = "<div class='cell'></div";
  // grid.innerHTML += "<div class='cell'></div";
  for (i = 0; i < 10; i++) {
    for (i1 = 0; i1 < 10; i1++) {
      if (isPlayer(user, [i, i1])) {
        grid.innerHTML += "<div class='cell player'></div>";
      } else if (isInArray(treasures, [i, i1])) {
        grid.innerHTML += "<div class='cell treasure'></div>";
      } else if (isInArray(traps, [i, i1])) {
        grid.innerHTML += "<div class='cell trap'></div>";
      } else {
        grid.innerHTML += "<div class='cell'></div>";
      }
    }
  }
}

function isInArray(treasure, index) {
  for (i4 = 0; i4 < treasure.length; i4++) {
    if (treasure[i4][0] == index[0] && treasure[i4][1] == index[1]) {
      return true;
    }
  }
  return false;
}

function isPlayer(array, cordinates) {
  if (array[0] === cordinates[0] && array[1] === cordinates[1]) {
    return true;
  } else {
    return false;
  }
}

function movePlayer(direction) {
  if (direction === "up") {
    if (user[0] > 0) {
      user[0] = user[0] - 1;
    }
    decreaseMoves();
    checkIsTrap();
    checkIsTreasure();
    createGrid(user, treasures, traps);
  }
  if (direction === "down") {
    if (user[0] < 9) {
      user[0] = user[0] + 1;
    }
    decreaseMoves();
    checkIsTrap();
    checkIsTreasure();
    createGrid(user, treasures, traps);
  }

  if (direction === "right") {
    if (user[1] < 9) {
      user[1] = user[1] + 1;
    }
    decreaseMoves();
    checkIsTrap();
    checkIsTreasure();

    createGrid(user, treasures, traps);
  }

  if (direction === "left") {
    if (user[1] > 0) {
      user[1] = user[1] - 1;
    }
    decreaseMoves();
    checkIsTrap();
    checkIsTreasure();

    createGrid(user, treasures, traps);
  }
}

function checkIsTreasure() {
  for (let i5 = 0; i5 < treasures.length; i5++) {
    if (treasures[i5][0] == user[0] && treasures[i5][1] == user[1]) {
      treasures[i5] = [];
      increaseScore();
    }
  }
}

function checkIsTrap() {
  for (let i6 = 0; i6 < traps.length; i6++) {
    if (traps[i6][0] == user[0] && traps[i6][1] == user[1]) {
      traps[i6] = [];
      decreaseScore();
    }
  }
}

function increaseScore() {
  const score = document.getElementById("score");
  score.innerHTML = parseInt(score.innerHTML) + 1;
}

function decreaseScore() {
  const score = document.getElementById("score");
  score.innerHTML = parseInt(score.innerHTML) - 1;
}

function decreaseMoves() {
  const score = document.getElementById("moves");
  score.innerHTML = parseInt(score.innerHTML) - 1;
}
