// H.W. code challenge
// given two arrays, one called 'shopping list', another one called 'cart'. 
// create a new version of shoppinglist where the items in the cart have been removed.
// let shoppingList = ['beer', 'wine', 'chips', 'eggs', 'hotdog', 'peanuts', 'cake', 'milk']
// let cart = ['cake', 'bread', 'milk', 'eggs']

const list = ['beer', 'wine', 'chips', 'eggs', 'hotdog', 'peanuts', 'cake', 'milk']
const cart = ['cake', 'bread', 'milk', 'eggs']

function filtershoppinglist(list, cart) {
    let newshoppinglist = [] // loop through my shopping list
    for(let i = 0; i < list.length; i++) // if not to new shopping list 
    for(let j = 0; j < cart.length; j++){
        if(cart[j] === list[i]){
            break;
        }
        
        if(j === cart.length - 1) {
            newshoppinglist.push(list[i])
        }
    }
    return newshoppinglist
}

console.log(filtershoppinglist(list, cart))

// Evens Please: create a function that takes an array of integers returns
//  an array with only the even integers from original arr.

//const array = [1, 4, 6, 9, 2, 20, 13, 17, 12]

var arr1 = [1, 4, 6, 9, 2, 20, 13, 17, 12] 

var evens = arr1.filter(function(x) {
    return x % 2 === 0;
})

console.log(evens);

// const arr = [1,4,6,7]
//const target = 8
//find the two numbers in the arr that add up to the target

let array = [1, 4, 6, 7] 
let target=8

const sumTwo = function(arr, target) { 
    for(let i = 0; i < arr.length; i++){
        for(let j = 1; j < arr.length; j++){
            if(arr[i] + arr[j] == target){
                return [i, j]
            }
        }
    }
};

console.log(sumTwo([1, 4, 6, 7], 8));  

// output [ 0, 3 ]

// Write a program that prints the numbers from 1 to 100. 
// But for multiples of three print “Fizz” instead of the number 
// and for the multiples of five print “Buzz”.
// For numbers which are multiples of both three and five print “FizzBuzz”.

for(let i = 1; i <= 100; i++) { // we have a for loop that iterates over i increments up to 100 
    if(i % 3 === 0 && i % 5 === 0) { // testing i % 3 && i % 5
        console.log('FIZZBUZZ') 
    } else if(i % 3 === 0) { // testing i % 3
        console.log('FIZZ')
    } else if(i % 5 === 0) { // testing i % 5
        console.log('BUZZ')   
    } else console.log(i)
  }

  // MADAMIMADAM 
  // KAYAK 

  // GIVEM AN INPUT. RETURNS WHETHER OR NOT IT IS A PALINDROME
  // TRUE OR FALSE 
  // COMPARE THE START AND END OF THE INPUT 

  // i=0   j=input.lenght -1 -i
  // return false if input[i]! == input[j](inside the loop)
  // return true (outside)  
