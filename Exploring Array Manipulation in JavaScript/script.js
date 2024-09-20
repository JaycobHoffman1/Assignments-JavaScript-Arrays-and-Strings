// Task 1: Adding and Removing Elements
const fruits = ["apple", "banana", "orange"];
console.log("\"fruits\" array:", fruits);
fruits.push("watermelon");
console.log("Using the \"push\" method to add a new element to the end of the array:", fruits);

// Task 2: Sorting Arrays
let numbers = [3, 1, 5, 2, 4];
console.log("\"numbers\" array:", numbers);
numbers.sort((a, b) => a - b);
console.log("Using the \"sort\" method to sort an array of random numbers:", numbers);

// Task 3: Applying Array Methods
numbers = [3, 1, 5, 2, 4];
console.log("\"numbers\" array:", numbers);
const doubledNumbers = numbers.map(number => number * 2);
console.log("Using the \"map\" method to double each number in the array:", doubledNumbers);
const evenNumbers = numbers.filter(number => number % 2 == 0);
console.log("Using the \"filter\" method to extract only even numbers from the array:", evenNumbers);
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log("Using the \"reduce\" method to calculate the sum of all numbers in the array:", sum);