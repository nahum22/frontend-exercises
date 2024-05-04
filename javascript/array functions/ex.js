//ex1
//creating an array copy
input = ["New York", "London", "Paris"];

const newArr = [...input];

//filter flights by destinations

toBeFiltered = [
  { destination: "New York" },
  { destination: "London" },
  {
    destination: "Paris",
  },
];

destination = "London";
const result = toBeFiltered.filter(
  (element) => element.destination === destination
);

//ex3

const flightTime = [
  { duration: "3h 30m" },
  { duration: "2h 45m" },
  { duration: "1h 15m" },
];

function getFlightDurationInSeconds(duration) {
  const string = duration.replace("h", "").replace("m", "");
  const [hours, minutes] = duration.split(" ");

  return parseInt(hours) * 3600 + parseInt(minutes) * 60;
}

const sumWithInitial = flightTime.reduce(
  (accumulator, currentValue) =>
    accumulator + getFlightDurationInSeconds(currentValue.duration),
  0
);

//ex4
//combine flight number with destinaiton

const info = [
  { flightNumber: "FL001", destination: "New York" },
  {
    flightNumber: "FL002",
    destination: "London",
  },
];

const resolt4 = info.map((item) => item.flightNumber + " " + item.destination);

//ex5 update flight duration

const info2 = [
  { flightNumber: "FL001", duration: "3h 30m" },
  { flightNumber: "FL002", duration: "2h 45m" },
];

const newDuration2 = "4h 15m";
const flightNumber_ = "FL001";

function toUpdate(item) {
  if (item.flightNumber == flightNumber_) {
    item.duration = newDuration2;
    return item;
  }
  return item;
}

const result3 = info2.map(toUpdate);

//ex6
//filter by duration

const durations = [
  { duration: "3h 30m" },
  { duration: "2h 45m" },
  { duration: "1h 15m" },
];
const minDuration = 180 * 60;
const result4 = durations.filter(
  (item) => getFlightDurationInSeconds(item.duration) >= minDuration
);

//ex7
//retrive flight numbers

const arr = [
  { flightNumber: "FL001" },
  { flightNumber: "FL002" },
  {
    flightNumber: "FL003",
  },
];

const resulto = arr.map((item) => item.flightNumber);

//ex8

const result6 = durations.sort((a, b) => {
  if (
    getFlightDurationInSeconds(a.duration) <
    getFlightDurationInSeconds(b.duration)
  ) {
    return -1;
  }
  if (
    getFlightDurationInSeconds(a.duration) >
    getFlightDurationInSeconds(b.duration)
  ) {
    return 1;
  }
  return 0;
});

//ex9

//retrive flight destination

const exersize = [
  { destination: "New York" },
  { destination: "London" },
  {
    destination: "Paris",
  },
];

const resolto = exersize.map((item) => item.destination);
console.log(resolto);
