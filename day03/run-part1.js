let fs = require('fs');
let input = fs.readFileSync('./day03/input.txt', 'utf-8').split(/\r?\n/);

//Create priority map
let priority = new Map();

for (let index = 0; index < 26; index++) {
	priority.set(String.fromCharCode(index + 65), index + 27);
	priority.set(String.fromCharCode(index + 97), index + 1);
}

//Find & count common items
let prioritySum = 0;

input.forEach((element) => {
	let comp1 = element.slice(0, element.length / 2).split('');
	let comp2 = element.slice(element.length / 2).split('');

	let i = 0;
	do {
		if (comp2.includes(comp1[i])) {
			prioritySum += priority.get(comp1[i]);
		}
		i++;
	} while (!comp2.includes(comp1[i - 1]));
});

console.log('Part 1: ' + prioritySum);
