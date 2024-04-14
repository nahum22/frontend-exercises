const num1 = 8;
const num2 = 15;
const sum = num1 + num2;
console.log(`the sum is ${sum}`);

//ex2

const a = 30;
const b = 12;
const result = a - b;
console.log(result);

//ex3
const x = 7;
const y = 3;
const mul = x * y;
console.log(mul);
//ex4

const dividend = 20;
const divisor = 4;
console.log(dividend / divisor);
console.log(dividend % divisor);
//ex5

const number1 = 15;
const number2 = 25;
const number3 = 10;

let average = (number1 + number2 + number3) / 3;
console.log(`the average is ${average} `);

//ex6
//modolo is the remainder after devison of the numbers.
//for example the result of 10%4 is 2
console.log(10 % 4);

//ex7

number = 20;

if (number % 2 == 0) {
  console.log("it is even");
} else {
  console.log("not even");
}

//ex8

if (number % 5 == 0 && number % 7 == 0) {
  console.log(" dividable by 5 and 7");
} else {
  console.log("not divisable by 5 and 7");
}

//ex9

for (i = 0; i < 21; i++) {
  if (i % 4 === 0) {
    console.log(i);
  }
}

//ex10

if (number > 10 && number < 20) {
  console.log("it is bigger than 10 smaller than 20");
} else {
  console.log("not even");
}

//ex11

if (number < -5 || number > 10) {
  console.log("condition is met");
} else {
  console.log("condition mot met");
}

//ex12

bolle = true;
console.log(!bolle);

//ex13

if ((number > 5 && number < 10) || (number > 20 && number < 30)) {
  console.log("condition is met");
} else {
  console.log("condition not met");
}
