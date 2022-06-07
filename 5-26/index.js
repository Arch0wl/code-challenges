// Given an array an array of N distinct elements
// return all of the array but the two greatest ones in sorted order

// sample
// n=5
// arr = [2,8,7,1,5]
// output = 1,2,5

// n=6
// arr = [8,-4, 2, 3, 7,-1]
// output = -8, -4, 2, 3

let numbers = [8, -4, 2, 3, 7, -1];

let sorted = numbers.sort();
// console.log(numbers)
let popped1 = numbers.pop();
// console.log(numbers)
var popped2 = numbers.pop();
console.log(numbers);

// FizzBuzz Task

function fizzBuzz(number) {
  for (var i = 1; i <= number; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log("Value of i is " + i);
    }
  }
}
var test = 50;
var test = 15;
var test = 60;

fizzBuzz(test);
