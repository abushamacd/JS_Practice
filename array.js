const numbers = [10, 25, 42, 67, 99];

console.log(numbers.length);
console.log(numbers.indexOf(25)); // find the index of an element
console.log(numbers[2]); // get by index number
numbers[2] = 0; // update element by index
numbers.push(111); // add element last
// console.log(numbers);
numbers.pop(); // remove element last
numbers.unshift(111); // add element first
// console.log(numbers);
numbers.shift(); // remove element first
console.log(numbers.includes(10));
console.log(Array.isArray(numbers));
console.log(numbers.join());
console.log(numbers.slice(2, 4));
console.log(numbers.splice(2, 4));

// Task
let fruits = ["mango", "banana", "Apple", "Orange", "Star Fruits"];
console.log(fruits[3]);
fruits[2] = "jambura";
console.log(fruits);

const tourist = ["Cox's Bazar", "Sundarbans", "Saint Martin's Island"];
tourist.push("Zoo");
tourist.unshift("Lebanon", "USA");
tourist.pop();
console.log(tourist);

// 3. Checking Array Membership with ‘includes’

// Use the includes method to check if the array contains a javascript book.

// Print a message to the console indicating whether the element is present in the array or not.

const books = ["JavaScript", "Clean Code", "The Pragmatic Programmer"];

console.log(books.includes("JavaScript"));
console.log(Array.isArray(books));

const num = [1, 3, 5, 2];
console.log("Original:-", numbers, num);
console.log("Combaind:-", numbers.concat(num));
