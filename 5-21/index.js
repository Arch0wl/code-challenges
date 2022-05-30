// Given an array an array of N Positive integers
// find the elements whose value is equal 
// to that of its index value
// consider index increment of 1

// example 
// N=5
// arr = [15, 9, 2, 12, 4]

function valueEqualToIndex(arr, n) {
    // new array
    let newoutput = []; // loop through 
    // 
    for(let i = 0; i < n; i++) {
        if(i === arr[i]) {
            newoutput.push(i)
        }
    }
    return newoutput
}

const  n = 5
const arr = [15, 9, 2, 12, 4]

console.log(valueEqualToIndex(arr, n));

// Given an array an array of N distinct elements
// return all of the array but the two greatest ones in sorted order

// sample 
// n=5
// arr = [2,8,7,1,5]
// output = 1,2,5

// n=6
// arr = [7,-2, 3, 4, 9,-1]
// output = -2, -1, 3, 4

    let numbers = [7, -2, 3, 4, 9, -1];

    let sorted = numbers.sort();
    // console.log(numbers)
    let popped1 = numbers.pop();
    // console.log(numbers)
    var popped2 = numbers.pop();
    console.log(numbers)

  
   










