console.log('--------------------------------');

// TODO: This is how to work with special print out

let num1 = 2;
let num2 = 3;
let result = num1 + num2;

console.log(`The result of ${num1} and ${num2} is ${result}`);

console.log('--------------------------------');

// TODO: This is how to work with datatype array
let myArray = [1, 2, 3];
console.log(myArray);

console.log('--------------------------------');

// TODO: This is how to work with datatype set
const setInput = [45, 44];
let mySet = new Set(setInput);

mySet.add(1);
mySet.add(56);
mySet.add(65);
mySet.add(677);

mySet.delete(65);

console.log(mySet);

console.log('--------------------------------');

// TODO: This is how to work with datatype map

const myMap = new Map();
myMap.set('a', 1);
myMap.set('b', 2);
myMap.set('c', 3);
myMap.set('d', 4);

myMap.delete('b');

console.log(myMap);

console.log('--------------------------------');

// TODO: This is how to use the reduce function

let value = [1, 2, 38, 6, 34];

// With a function outside the reduce
// function sum(acc, val) {
// 	return acc + val;
// }
// let answer = value.reduce(sum, 0);
// console.log(answer);

// The same but using a arrow function
let answer = value.reduce((acc, val) => acc + val, 0);
console.log(answer);

// Try to find the minimum value and the maximum value
// With a function outside the reduce
// function findMax(acc, val) {
// 	if (val > acc) {
// 		acc = val;
// 	}
// 	return acc;
// }
// let biggest = value.reduce(findMax);
// console.log(biggest);
// The same but using a arrow function

let biggest = value.reduce((acc, val) => (val > acc ? val : acc));
console.log(biggest);

let lowest = value.reduce((acc, val) => (val < acc ? val : acc));
console.log(lowest);

// Font to add: 'Fira Code',
// ESLint to may default format editor

if (biggest = 1) {
    let test = 'nisse';
    let kalle = 'kallse';   
}