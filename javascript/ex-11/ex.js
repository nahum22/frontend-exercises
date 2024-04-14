let date = new Date();

console.log(date);

console.log(date.getFullYear());

console.log(date.getMonth());

let day_month = date.getDate();

let day_week = date.getDay();

const hour = date.getHours();
const minutes = date.getMinutes();
const seconds = date.getSeconds();
console.log(`hours ${hour} minutes: ${minutes} seconds ${seconds} `);

//length currect month
const daysInMonth = (year, month) => new Date(year, month, 0).getDate();

console.log(daysInMonth(2024, 1)); // 31
//calculate date next day

let date_2 = new Date();
date_2.setDate(date.getDate() + 1);

console.log(date_2);

//9.

const totalMinutes = 90;

const minutes_left = totalMinutes % 60;
const hours = (90 - minutes_left) / 60;

console.log(
  `${totalMinutes} minutes equl to ${hours} hour(s) and  ${minutes_left} minutes`
);
