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
console.log(numbers);
