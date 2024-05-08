//recursion to calculate sum

function calculateSum(n) {
  if (n <= 0) {
    return 0;
  }
  let sum = calculateSum(n - 1) + n;

  return sum;
}

//ex2 reverse string

function reverseString(string) {
  if (string.length > 0) {
    let result =
      string[string.length - 1] +
      reverseString(string.substring(0, string.length - 1));

    return result;
  }
  return "";
}

//ex3
//count down

function countDown(number) {
  if (number > 0) {
    console.log(number);
    countDown(number - 1);
  }
  return 1;
}
//ex4

function printArray(array) {
  if (array.length > 0) {
    console.log(array[array.length - 1]);
    array.pop();
    printArray(array);
  }
}
