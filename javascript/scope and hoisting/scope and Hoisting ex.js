//ex1.
//given the code what will be the output?

//console.log(a); // What will be the output?

//undefined

//console.log(b); // What will be the output?
//let b = 5;

//cannot access withour initialization

//console.log(c); // What will be the output?
//const c = 5;

//cannot access withour initialization

//ex2 understanding function hoisting

//console.log(myFuncDecl()); // What will be the output?
//function myFuncDecl() {
//return "Hello from function declaration!";
//}

//the output will be Hello from function declaration!

//console.log(myFuncExpr()); // What will be the output?
//var myFuncExpr = function () {
// return "Hello from function expression!";
//};
//the output will be not a funciton  due to the var declaretion
//preventing the hoisting

//ex3
//nested scoped and hoisting

/*
const x = "global";
function outerFunc() {
  let y = "outer";
  function innerFunc() {
    var z = "inner";
    console.log(x); 
"the output will be global"

    console.log(y);  What will be the output?

    "the output will be outer"
  }
  innerFunc();
  console.log(z);  What will be the output?
  "the output will be undefined"
}
outerFunc();
*/

//ex4

/*
const a = 1;
function b() {
 const a = 10;
 c();
 return;
 function c() {
 console.log(a); // What will be the output? 10
 }
}

b();

console.log(a); // What will be the output of a? 1

foo();
function foo() {
 console.log(x); // What will be the output? no initial value?
 var x = "Hello, world!";
 bar();
 function bar() {
 console.log(x); //output: no initial value?
 let x = "Hello, scope!";
 }
}
*/
