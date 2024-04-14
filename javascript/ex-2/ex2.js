let num = 10;

let str = "hello";

let bool = true;

console.log(typeof str);
console.log(typeof bool);
console.log(typeof num);

//second exercise

const firstVar = 42;
const secondVar = "42";

if (typeof firstVar === typeof secondVar) {
  console.log("the two vars are of the same type");
} else {
  console.log("the variables are not the same");
}

//third exercise

console.log(
  "the value of num is" + " " + num + " and its type is " + typeof num
);
console.log(
  "the value of num is" + " " + str + " and its type is " + typeof str
);
console.log(
  "the value of num is" + " " + bool + " and its type is " + typeof bool
);
console.log(
  "the value of num is" + " " + firstVar + " and its type is " + typeof firstVar
);
console.log(
  "the value of num is" +
    " " +
    secondVar +
    " and its type is " +
    typeof secondVar
);
