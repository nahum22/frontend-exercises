//ex1
const isSunny = true;
const isWeekend = false;
console.log(`today is ${isSunny} sunny and it is ${isWeekend} weekend`);
//ex2
const age = 20;
const license = true;

if (license == true && age > 18) {
  console.log("the person is over 18 and got a license");
}
//ex3
const knowsJavaSceipt = false;
const knowsPython = true;

if (knowsJavaSceipt || knowsPython) {
  console.log("the person knows python or javascriptse");
}

//ex4
const isRaining = true;
console.log(!isRaining);

//ex5
likesMusic = true;
playsGuitar = false;
hasTime = true;

if (likesMusic && (playsGuitar || hasTime)) {
  console.log("condition is met");
} else {
  console.log("condition not met");
}

//ex6

personAge = 25;
console.log(personAge > 18);

//ex7

curentTemparture = 30;
console.log(curentTemparture < 20 || curentTemparture > 30);

//ex8
const firstNumber = 10;
const secondNumber = "10";
console.log(firstNumber == secondNumber);
console.log(firstNumber === secondNumber);

//ex9
const budget = 500;
const expense = 450;
console.log(expense <= budget);
//ex10

person1Height=170;
person2Height=170;
console.log(person1Height>person2Height?'person 1 is higher':person1Height==person2Height?'they are same height':'person 2 is higher')