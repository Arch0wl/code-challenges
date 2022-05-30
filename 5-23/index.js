// H.M.
//const arr = [ 2, 20, 200, 20, 20 ]
// Create a function that removes the duplicates in the array
// After test it with any array of numbers that has duplicates

let table = [5, 10, 200, 200, 10, 10, 5, 200];

let uniqueTable  = [];
table.forEach((element) => {
    if (!uniqueTable .includes(element)) {
        uniqueTable .push(element);
    }
});

console.log(uniqueTable );

// Write a if/ else that checks if you can drink alcohol or not 

const age = 16; // test with any number

if (age >= 21) {
	console.log("You can drink!");
} else {
	console.log("You can not drink!");
}

