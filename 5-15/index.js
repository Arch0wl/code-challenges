// H.W : Find the biggest number in array 
const ages =[37, 48, 30, 22, 17, 25, 19, 24, 21, 20, 27, 32, 33, 45]

import { ChildProcess } from "child_process";


var ages = [37, 48, 30, 22, 17, 25, 19, 24, 21, 20, 27, 32, 33, 45];
var biggest = ages[0];

for (var i = 0; i < ages.length; i++) {
    if (biggest < ages[i] ) {
        biggest = ages[i];
    }
}
console.log(biggest);

let arr = [37, 48, 30, 22, 17, 25, 19, 24, 21, 20, 27, 32, 33, 45];
biggest = 0;

arr.forEach((element) => {
  if (biggest < element) {
    biggest = element;
  }
});

console.log(`The biggest number in the array: ${biggest}`);

// 1. Find in this word  RYNHcDHUTFaJHt the hidden word in lower case

var string = 'RYNHcDHUTFaJHt';
var lowerCaseWord = string.split('').filter(function(word){
    return word === word.toLocaleLowerCase();
});

console.log(lowerCaseWord); 

// methods for strings lowercase

// will return new array ['c', 'a', 't']

// 2. Two sum - you have an  array [2, 3, 4, 3, 6, 7] and target sum of two integers 6.
// Return the two integers in array that add up to the target number

// given array integers and a target of number return the two integers that add up to the target number
// i + j = sum (new array)
// in this case we'll need to find multiple combinations

// let's start with the name for function: 
// new array
// let's use i and j for two integers

const sumOfTwo = (arr, target) => {
    const result = []; 
    for(let i = 0; i < arr.length; i++) {// for the first element
    for(let j = 1; j < arr.length; j<arr.lenght, j++){
    if(arr[i] + arr[j] === target) {
        result.push(i);
        result.push(j);
    }
   }
 }  
    return result;
};

console.log(sumOfTwo([2, 3, 4, 3, 6, 7], 6)); 



var arr1 = [1, 2, 4, 6, 9, 2] 

var evens = arr1.filter(function(x) {
    return x % 2 === 0;
})

console.log(evens);


// Given an array of integers nums and an integer target, 
// return indices of the two numbers such that they add up to target.

let array = [2,5,8,3,7,9,0] let target=15 

const sumTwo = function(arr, target) { 
    for(let i = 0; i < arr.length; i++){
        for(let j = 1; j < arr.length; j++){
            if(arr[i] + arr[j] == target){
                return [i, j]
            }
        }
    }
};

console.log(sumTwo([2,5,8,3,7,9,0], 15));   

// option 2

const sumOfTwo = function(arr, target) {
    for(let i = 0; i < arr.length; i++){
        for(let j = i+1; j < arr.length; j++){
            if(arr[i] + arr[j] == target){
                return [i, j]
            }
        }
    }
};

console.log(sumOfTwo([2,5,8,3,7,9,0], 15)); 

// code challenge
// given an array of items called shopping list ['milk','bread','eggs']
// and an array of items called cart ['beer', 'chips', 'salsa', 'milk'] 
// create a new list of items in shopping list that are not in cart 

const shoppinglist = ['milk', 'bread', 'eggs']
const cart = ['beer', 'chips', 'salsa', 'milk']

const newshoppinglist = shoppinglist.filter(item => !cart.includes(item))
console.log(newshoppinglist)

function filtershoppinglist(list, cart) {
    let newshoppinglist = []
    // loop through my shopping list
    for(let i = 0; i < list.length; i++)
    // if not to new shopping list 
    for(let j = 0; j < cart.length; j++){
        if(cart[j] === list[i]){
            break;
        }
        // if I get to the end of the list and haven't 
        if(j === cart.length - 1) {
            newshoppinglist.push(list[i])
        }
    }
}
return newshoppinglist
}

console.log

