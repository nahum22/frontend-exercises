//Ex1.1 - Yes or No
//Complete the method that takes a boolean value and return a "Yes" string for true, or a "No"
//string for false.

function transtateBool(bool) {
  if (bool) {
    return "Yes";
  }
  return "No";
}

//Ex2.1 - Sum of lowest numbers
//Create a function that returns the sum of the two lowest positive numbers given an array of
//minimum 4 positive i ntegers. No floats or non-positive integers will be passed.
//For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.
//[10, 343445353, 3453445, 3453545353453] should return 3453455

function sum2Positives(array) {
  const newArray = array
    .filter((item) => item >= 0)
    .sort((a, b) => {
      if (a > b) {
        return 1;
      }
      if (b > a) {
        return -1;
      }
      return 0;
    });

  return newArray[0] + newArray[1];
}

/*
Ex2.2 - One and Zero - Binary  
Given an array of ones and zeroes, convert the equivalent binary value to an integer. 
 
Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1. 
 
Examples: 
 
Testing: [0, 0, 0, 1] ==> 1 
Testing: [0, 0, 1, 0] ==> 2 
Testing: [0, 1, 0, 1] ==> 5 
Testing: [1, 0, 0, 1] ==> 9 
Testing: [0, 0, 1, 0] ==> 2 
Testing: [0, 1, 1, 0] ==> 6 
Testing: [1, 1, 1, 1] ==> 15 
Testing: [1, 0, 1, 1] ==> 11
*/

function convertToBinary(array) {
  let i = 1;
  let result = 0;
  array.reverse().map((item) => {
    console.log("i is " + i);
    console.log(item);
    if (item === 1) {
      result += i;
    } else {
    }
    i = i * 2;
    return item;
  });
  return result;
}

/*
Ex2.3 - Find the Next Perfect Square 
 
You might know some pretty large perfect squares. But what about the NEXT one? 
 
Complete the findNextSquare method that finds the next integral perfect square after the one 
passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is 
also an integer. 
 
If the parameter is itself not a perfect square then -1 should be returned. You may assume the 
parameter is positive. 
 
Examples: 
 
findNextSquare(121) --> returns 144 
findNextSquare(625) --> returns 676 
findNextSquare(114) --> returns -1 since 114 is not a perfect 
*/

function findNextSquare(num) {
  if (Math.sqrt(num) != Math.round(Math.sqrt(num))) {
    console.log("no square root");
    return -1;
  }
  num += 1;

  while (Math.sqrt(num) != Math.round(Math.sqrt(num))) {
    num += 1;
  }
  return num;
}

/*
Ex2.4 - Unique 
 
There is an array with some numbers. All numbers are equal except for one. Try to find it! 
findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2 
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55 
It’s guaranteed that array contains at least 3 numbers.
*/

function findUniq(array) {
  const arraySorted = array.sort((a, b) => {
    if (a > b) {
      return 1;
    }
    if (b > a) {
      return -1;
    }
    return 0;
  });

  const var1 = arraySorted[0];
  const var2 = arraySorted[arraySorted.length - 1];
  const var3 = arraySorted[Math.floor((arraySorted.length - 1) / 2)];

  if (var1 == var2) {
    return var3;
  }
  if (var1 == var3) {
    return var2;
  }
  return var1;
}

/*
Ex2.5 - Summation 
 
Write a program that finds the summation of every number from 1 to num. The number will 
always be a positive integer greater than 0. 
 
For example: 
summation(2) -> 3 
1 + 2 
 
summation(8) -> 36 
1 + 2 + 3 + 4 + 5 + 6 + 7 + 8


*/

function summation(num) {
  let result = 0;
  for (let i = 0; i <= num; i++) {
    result += i;
  }
  return result;
}

/*
Ex2.6 - Years and Centuries 
 
The first century spans from the year 1 up to and including the year 100, The second - from the 
year 101 up to and including the year 200, etc. 
Task : 
Given a year, return the century it is in. 
Input , Output Examples :: 
centuryFromYear(1705)  returns (18) 
centuryFromYear(  1900)  returns (19) 
centuryFromYear(1601)  returns (17) 
centuryFromYear(2000)  returns (20)
*/

function centuryFromYear(year) {
  StringYear = "" + year;

  let century = parseInt(StringYear[0] + StringYear[1]);
  const value = parseInt(StringYear.slice(2, StringYear.length));

  if (value > 0) {
    return (century += 1);
  }
  return century;
}

/*
Ex2.7 - Basic Math 
 
Your task is to create a function that does four basic . 
The function should take three arguments - operation(string/char), value1(number), 
value2(number). 
The function should return result of numbers after applying the chosen operation. 
Examples 
basicOp('+', 4, 7)         // Output: 11 
 
basicOp('-', 15, 18)       // Output: -3 
basicOp('*', 5, 5)         // Output: 25 
basicOp('/', 49, 7)        // Output: 7



*/

function basicOp(operator, num1, num2) {
  switch (operator) {
    case "+":
      return num1 + num2;
      break;
    case "-":
      return num1 - num2;
      break;
    case "*":
      return num1 * num2;
      break;
    case "/":
      return num1 / num2;
      break;
    default:
      return -1;
  }
}

/*
Ex3.1 - Growth Of population  
 
In a small town the population is p0 = 1000 at the beginning of a year. The population regularly 
increases by 2 percent per year and moreover 50 new inhabitants per year come to live in the 
town. How many years does the town need to see its population greater or equal to p = 1200 
inhabitants? 
 
At the end of the first year there will be:  
*/

function nb_year(initalValue, percent, arrivals, destination) {
  let result = 0;
  let sumPopulation = initalValue;

  while (sumPopulation < destination) {
    sumPopulation = sumPopulation * (1 + percent / 100) + arrivals;
    result += 1;
  }
  return result;
}

console.log(nb_year(1500000, 2.5, 10000, 2000000));

/*
Ex3.2 - People on the Bus 
 
Number of people in the bus 
There is a bus moving in the city, and it takes and drop some people in each bus stop. 
You are provided with a list (or array) of integer arrays (or tuples). Each integer array has two 
items which represent number of people get into bus (The first item) and number of people get 
off the bus (The second item) in a bus stop. 
Your task is to return number of people who are still in the bus after the last bus station (after 
the last array). Even though it is the last bus stop, the bus is not empty and some people are still 
in the bus, and they are probably sleeping there :D 
Take a look on the test cases. 
Please keep in mind that the test cases ensure that the number of people in the bus is always 
>= 0. So the return integer can't be negative. 
The second value in the first integer array is 0, since the bus is empty in the first bus stop. 


*/
function busPeople(array) {
  let result = 0;
  console.log(array);
  for (station of array) {
    result = result + station[0];
    result = result - station[1];
  }
  if (result < 0) {
    return -1;
  }

  return result;
}

//ex4.1 fibonacci

function fibonzcci(index) {
  let var1 = 0;
  let var2 = 1;
  let var3 = 1;

  if (index == 1) {
    return var1;
  }
  if (index == 2) {
    return var2;
  }
  if (index == 3) {
    return var3;
  }

  for (i = 0; i < index - 3; i++) {
    var1 = var2;
    var2 = var3;
    var3 = var1 + var2;
  }
  return var3;
}

//ex4.2 tribonacci

function tribonzcci(signature, index) {
  if (signature.length < 4) {
    return -1;
  }

  let var1 = signature[0];
  let var2 = signature[1];
  let var3 = signature[2];
  let var4 = var1 + var2 + var3;
  const result = [];
  result.push(var1);
  result.push(var2);
  result.push(var4);
  result.push(var4);

  if (index <= 0) {
    return [];
  }

  if (index == 1) {
    return [var1];
  }
  if (index == 2) {
    return [var1, var2];
  }
  if (index == 3) {
    return [var1, var2, var3];
  }
  if (index == 4) {
    return result;
  }

  for (i = 0; i < index - 4; i++) {
    var1 = var2;
    var2 = var3;
    var3 = var4;
    var4 = var2 + var3 + var1;
  }
  return result;
}

//ex5.1
function trimmingString(toTrime) {
  return toTrime.substring(1, toTrime.length - 1);
}

/*
Ex5.2 - String Repeat 
Write a function called repeat_str which repeats the given string src exactly count times. 
repeatStr(6, "I") // "IIIIII" 
repeatStr(5, "Hello") // "HelloHelloHelloHelloHello" 
*/

function repeatStr(iterations, word) {
  let result = "";

  for (i = 0; i < iterations; i++) {
    result += word;
  }

  return result;
}

/*
Ex5.3 - To Camel Case 
Complete the method/function so that it converts dash/underscore delimited words into camel 
casing. The first word within the output should be capitalized only if the original word was 
capitalized (known as Upper Camel Case, also often referred to as Pascal case). 
Examples 
toCamelCase("the-stealth-warrior") // returns "theStealthWarrior" 
toCamelCase("The_Stealth_Warrior") // returns "TheStealthWarrior"
*/

function toCamelCase(string) {
  toUppeer = false;
  let result = "";
  for (letter of string) {
    if (toUppeer) {
      result += letter.toUpperCase();
    } else if (letter != "_" && letter != "-") {
      result += letter;
    }

    if (letter === "_" || letter === "-") {
      toUppeer = true;
    } else {
      toUppeer = false;
    }
  }
  return result;
}

/*
Ex5.4 - To Weird Case 
Write a function toWeirdCase (weirdcase in Ruby) that accepts a string, and returns the same 
string with all even indexed characters in each word upper cased, and all odd indexed 
characters in each word lower cased. The indexing just explained is zero based, so the zero-ith 
index is even, therefore that character should be upper cased. 
The passed in string will only consist of alphabetical characters and spaces(' '). Spaces will only 
be present if there are multiple words. Words will be separated by a single space(' '). 
Examples: 
toWeirdCase( "String" );//=> returns "StRiNg" 
 
toWeirdCase( "Weird string case" );//=> returns "WeIrD StRiNg CaSe"
*/

function toWeirdCase(stringo) {
  let result = "";
  let wordIndex = 0;
  for (i = 0; i < stringo.length; i++) {
    if (stringo[i] == " ") {
      wordIndex = 0;
    }

    if (wordIndex % 2 === 0) {
      console.log(wordIndex);
      console.log(stringo[i]);
      result += stringo[i].toUpperCase();
    } else {
      result += stringo[i];
    }

    if (stringo[i] != " ") {
      wordIndex += 1;
    }
  }

  return result;
}

/*

Ex5.5 - Abbreviate two words 
Write a function to convert a name into initials. This kata strictly takes two words with one space 
in between them. 
The output should be two capital letters with a dot separating them. 
It should look like this: 
Sam Harris => S.H
*/

function abbriviate(name) {
  let arrayName = name.split(" ");
  let result = "";
  for (name of arrayName) {
    console.log(arrayName);
    result += name[0];
    result += ".";
  }
  console.log(result);
  result = result.slice(0, result.length - 1);
  return result;
}

/*
Ex5.6 - Mask 
 
Usually when you buy something, you're asked whether your credit card number, phone number 
or answer to your most secret question is still correct. However, since someone could look over 
your shoulder, you don't want that shown on your screen. Instead, we mask it. 
Your task is to write a function maskify, which changes all but the last four characters into '#'. 
Examples 
maskify("4556364607935616") == "############5616" 
maskify(     "64607935616") ==      "#######5616" 
maskify(               "1") ==                "1" 
maskify(                "") ==                 "" 
 
// "What was the name of your first pet?" 
maskify("Skippy")                                   == "##ippy" 
maskify("Nananananananananananananananana Batman!") == 
"####################################man!" 
*/

function mask(value) {
  let temp = "";
  temp = value.substring(value.length - 4, value.length);

  let masker = value.length - temp.length;

  return "#".repeat(masker) + temp;
}

/*
Ex5.7 - shortest words 
Simple, given a string of words, return the ​length​ of the shortest word(s). 
String will never be empty and you do not need to account for different data types.
*/

function shortestWord(words) {
  let wordArray = words.split(" ");

  let arraysorted = wordArray.sort((a, b) => {
    if (a.length > b.length) {
      return 1;
    }

    if (a.length < b.length) {
      return -1;
    }
    return 0;
  });

  return arraysorted[0];
}

/*
Ex5.8 - shortest words version 2 
Given a string of words, return the longest word[s]. 
String will never be empty and you do not need to account for different data types. 


*/

function longesttWord(words) {
  let wordArray = words.split(" ");

  let arraysorted = wordArray.sort((a, b) => {
    if (a.length > b.length) {
      return 1;
    }

    if (a.length < b.length) {
      return -1;
    }
    return 0;
  });

  return arraysorted[arraysorted.length - 1];
}

/*
Ex6.1 - Mumbling
This time no story, no theory. The examples below show you how to write function
accum:
Examples:
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-zzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-VWw-Aaa-Tttt"
The parameter of accum is a string which includes only letters from a..z anda. .z
*/

function accum(text) {
  let i = 0;
  let result = "";
  for (letter of text) {
    result += letter.toUpperCase() + letter.toLocaleLowerCase().repeat(i) + "-";
    i += 1;
  }
  return result.substring(0, result.length - 1);
}

/*
Ex6.2 - Counting Duplicates
Count the number of Duplicates
Write a function that will return the count of distinct case-insensitive alphabetic characters and
numeric digits that occur more than once in the input string. The input string can be assumed to
contain only alphabets (both uppercase and lowercase) and numeric digits.
Example
"abcde" -> 0 #no characters repeats more than once
"aabbcde" -> 2 #'a’ and 'b'
"aabBcde" -> 2 #'a' occurs twice and 'b' twice (b° and “B’)
"indivisibility" -> 1#'i' occurs six times
"Indivisibilities" -> 2#'i' occurs seven times and 's' occurs twice
"aA11" -> 2#'a' and '1'
"ABBA" -> 2#'A' and 'B' each occur twice
*/

function countDuplicates(string) {
  let setLetters = Array.from(new Set(string.toLocaleLowerCase()));

  return string.length - setLetters.length;
}

/*
Ex6.3 - organize strings
Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the
longest possible, containing distinct letters,
each taken only once - coming from s1 or s2.
Examples:
a ="xyaabbbccccdefww"
b ="xxxxyyyyabklmopq"
longest(a, b) -> “abcdefklmopqwxy"



*/

function longest(s1, s2) {
  let organizedArray = [s1, s2].map((item) => {
    return Array.from(new Set(item)).sort().join("");
  });

  let sortedArray = organizedArray.sort((a, b) => {
    if (a.length > b.length) {
      return 1;
    }
    if (b.length > a.length) {
      return -1;
    }
    return 0;
  });

  return sortedArray[sortedArray.length - 1];
}

/*
Ex6.4 - isogram
An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement
a function that determines whether a string that contains only letters is an isogram. Assume the
empty string is an isogram. Ignore letter case.
islsogram("Dermatoglyphics") ==true
islsogram("aba") ==false
islsogram("moOse") ==false // -- ignore letter 
*/
function islsogram(string) {
  stringUniq = Array.from(new Set(string.toLowerCase())).join("");

  if (stringUniq.length == string.length) {
    console.log("true");
    return true;
  }
  return false;
}

/*
Ex7 - Implement The Following JS Methods -
Implement the following methods -
- Filter
- ForEach
- Map
Using only for(), array and objects (without otherjsmethods)


*/

function filter(array, func) {
  const result = [];

  for (let i = 0; i < array.length; i++) {
    if (func(array[i])) {
      result.push(array[i]);
    }
  }

  return result;
}

function map(array, func) {
  const result = [];

  for (let i = 0; i < array.length; i++) {
    result.push(func(array[i]));
  }

  return result;
}

function forEach(array, func) {
  for (let i = 0; i < array.length; i++) {
    func(array[i]);
  }
}

/*
Ex 8 - Find the Perimeter of a Rectangle
Create a function that takes length and width and finds the perimeter of a rectangle.
Examples
f£ 7 26
indPerimeter(6, 7)
findPerimeter(20, 10) —™60
findPerimeter(2, 9) —™22
Notes
e Don't forget to return the result.
e Ifyou're stuck, find help in the Resources tab.
e Ifyou're really stuck, find solutions in the Solutions tab



*/

function findPerimeter(width, hight) {
  let result = 2 * width + 2 * hight;
  return result;
}
