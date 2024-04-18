//ex1

const activityDurations = [2, 3, 1];
let sum = 0;
for (i = 0; i < activityDurations.length; i++) {
  sum += activityDurations[i];
}
console.log(sum);

//ex2
let min = activityDurations[0];
for (i = 1; i < activityDurations.length; i++) {
  if (activityDurations[i] < min) {
    min = activityDurations[i];
  }
}
console.log(min);

//ex3

const activityNames = ["Sightseein", "Hiking", "Sightseein"];

let activityName = "";
let frequency = 0;
let activity;
let freqActivity;

for (i1 = 0; i1 < activityNames.length; i1++) {
  activity = activityNames[i1];
  for (i = 0; i < activityNames.length; i++) {
    if (activityNames[i] === activity) {
      freqActivity += 1;
    }
  }
  if (freqActivity > frequency) {
    frequency = freqActivity;
    activityName = activity;
  }
  console.log("note " + freqActivity);
  freqActivity = 0;
}

console.log(activityName);

//ex4

let minValue = activityDurations[0];
for (i = 1; i < activityDurations.length; i++) {
  if (minValue > activityDurations[i]) {
    minValue = activityDurations[i];
  }
}
console.log(minValue);

//ex5
const transportTypes = ["Car", "Train", "Car", "Flight"];

var set = Array.from(new Set(transportTypes));

for (i1 = 0; i1 < set.length; i1++) {
  activity = set[i1];
  for (i = 0; i < transportTypes.length; i++) {
    if (transportTypes[i] === activity) {
      freqActivity += 1;
    }
  }

  console.log(activity + "note " + freqActivity);
  freqActivity = 0;
}

//ex6

const travelExpenses = [50, 100, 75, 125, 200];
let sum_ = 0;

for (i = 0; i < travelExpenses.length; i++) {
  sum_ += travelExpenses[i];
}

console.log(sum_ / travelExpenses.length);

//ex7

let max_value = travelExpenses[0];

for (i = 1; i < travelExpenses.length; i++) {
  if (travelExpenses[i] > max_value) {
    max_value = travelExpenses[i];
  }
}
console.log(max_value);

//ex8

let cont_range = 0;

for (i = 1; i < travelExpenses.length; i++) {
  if (travelExpenses[i] < 150) {
    cont_range++;
  }
}
console.log(cont_range);

//ex9
const categoryExpenses = [
  [100, 200],
  [150, 175],
  [120, 250],
];

let totalSum = 0;

for (i = 0; i < categoryExpenses.length; i++) {
  let category = categoryExpenses[i];
  for (i1 = 0; i1 < category.length; i1++) {
    totalSum += category[i1];
  }
  console.log("the sum of catrgory is " + totalSum);

  totalSum = 0;
}

//ex10
let min_distance = 0;
for (i = 0; i < categoryExpenses[0].length; i++) {
  min_distance += categoryExpenses[0][i];
}

let dis = 0;

for (i = 0; i < categoryExpenses.length; i++) {
  let category = categoryExpenses[i];
  for (i1 = 0; i1 < category.length; i1++) {
    dis += category[i1];
  }
  if (dis < min_distance) {
    min_distance = dis;
  }
  dis = 0;
}

console.log("the min distance is " + min_distance);

//ex11
let sum__ = 0;
activityDurationMatrix = [
  [2, 3],
  [1, 4],
  [3, 2],
];

console.log(activityDurationMatrix);
let activity_ = [];
for (i = 0; i < activityDurationMatrix.length; i++) {
  activity_ = activityDurationMatrix[i];
  for (i1 = 0; i1 < activity_.length; i1++) {
    sum__ += activity_[i1];
  }
  console.log("the average is " + sum__ / activity_.length);

  sum__ = 0;
}

//ex12

let destinationRatingMatrix = [
  [4.5, 4.7],
  [4.8, 4.6],
  [4.9, 5],
];

console.log(destinationRatingMatrix.transpo);
let sumo = 0;

for (i1 = 0; i1 < destinationRatingMatrix[0].length; i1++) {
  for (i = 0; i < destinationRatingMatrix.length; i++) {
    if (sumo < destinationRatingMatrix[i][i1]) {
      sumo = destinationRatingMatrix[i][i1];
    }
  }
  console.log("the highest rating " + sumo);
  sumo = 0;
}

///ex13

let regionRecomendedMatrix = [
  [5, 7],
  [8, 6],
  [9, 7],
];

for (i = 0; i < regionRecomendedMatrix.length; i++) {
  activity_ = regionRecomendedMatrix[i];
  for (i1 = 0; i1 < activity_.length; i1++) {
    if (activity_[i1] >= 7) {
      sum__ += 1;
    }
  }
  console.log("there were " + sum__ + " high recomendations");
  sum__ = 0;
}

//ex14

let mustVisitRatingMatrix = [
  [5, 7],
  [8, 6],
  [9, 7],
];

for (i = 0; i < mustVisitRatingMatrix.length; i++) {
  activity_ = mustVisitRatingMatrix[i];
  for (i1 = 0; i1 < activity_.length; i1++) {
    if (activity_[i1] >= 4.8) {
      sum__ += activity_[i1];
    }
  }
  console.log(
    "the sum of rating greater then 4.8 was " + sum__ + " high recomendations"
  );
  sum__ = 0;
}
