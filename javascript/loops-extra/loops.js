// 1. Calculate Total Travel Time
const destinations1 = [
  { name: "Paris", distance: 500, speed: 50 },
  { name: "London", distance: 200, speed: 70 },
  {
    name: "New York",
    distance: 3000,
    speed: 500,
  },
];

let sum = 0;
for (i = 0; i < destinations1.length; i++) {
  sum += destinations1[i]["distance"] / destinations1[i]["speed"];
}

console.log("the totall arrival time is  " + sum);

// 2. Find Longest Travel Route
const destinations2 = [
  {
    name: "Paris",
    routes: [
      { name: "Route 1", distance: 300 },
      { name: "Route 2", distance: 250 },
    ],
  },
  {
    name: "London",
    routes: [
      { name: "Route 1", distance: 200 },
      { name: "Route 2", distance: 280 },
    ],
  },
];

let max = 0;
let dest = [];
for (i = 0; i < destinations2.length; i++) {
  dest = destinations2[i]["routes"];

  for (i1 = 0; i1 < dest.length; i1++) {
    if (dest[i1]["distance"] > max) {
      max = dest[i1]["distance"];
    }
  }

  console.log("the max distance is " + max);
  max = 0;
}

// 3. Sort Destinations by Distance
const destinations3 = [
  {
    name: "Paris",
    routes: [{ distance: 300 }, { distance: 250 }],
  },
  {
    name: "London",
    routes: [{ distance: 200 }, { distance: 280 }],
  },
];

function sumDistances(dest) {
  let sum = 0;
  for (i = 0; i < dest["routes"].length; i++) {
    sum += dest["routes"][i]["distance"];
  }
  return sum;
}
//sumDistances(destinations3[0]);

destinations3.sort(function (a, b) {
  return sumDistances(a) - sumDistances(b);
});
console.log(destinations3);

// 4. Travel Itinerary
const destinations4 = [
  { name: "Paris", connections: ["London"] },
  { name: "London", connections: ["New York"] },
  { name: "New York", connections: [] },
];
const start4 = "Paris";

desinations=[];

for(i=0;i<destinations4;i++){
}





// 5. Least Number of Connections
const destinations5 = [
  {
    name: "Paris",
    connections: ["London", "New York"],
  },
  { name: "London", connections: ["New York"] },
  { name: "New York", connections: [] },
];


let min =destinations5[0]['connections'].length;

for(i=1;i<destinations5.length;i++){

if(min>destinations5[i]['connections'].length){
  min=destinations5[i]['connections'].length;
}

}

console.log('the min number of connections is  '+min);
