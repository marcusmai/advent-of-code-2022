let fs = require('fs');
let input = fs.readFileSync('./day01/input.txt', 'utf-8').split(/\r?\n/);

let elfs = [];
let caloriesCount = 0;

input.forEach((element) => {
	if (element !== '') {
		caloriesCount += parseInt(element);
	} else {
		elfs.push(parseInt(caloriesCount));
		caloriesCount = 0;
	}
});

elfs.sort((a, b) => b - a);

console.log('Part 1: ' + elfs[0]);
console.log('Part 2: ' + (elfs[0] + elfs[1] + elfs[2]));
