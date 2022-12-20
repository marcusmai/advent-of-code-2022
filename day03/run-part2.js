let fs = require('fs');
let input = fs.readFileSync('./day03/input.txt', 'utf-8').split(/\r?\n/);

//Create priority map
let priority = new Map();

for (let index = 0; index < 26; index++) {
	priority.set(String.fromCharCode(index + 65), index + 27);
	priority.set(String.fromCharCode(index + 97), index + 1);
}

//Split in to groups of 3
let elfGroups = [],
	size = 3;
for (let index = 0; index < input.length; index += size) {
	elfGroups.push(input.slice(index, index + size));
}

//Find & count common items
let prioritySum = 0;

elfGroups.forEach((element) => {
	let i = 0;
	do {
		if (
			element[1].includes(element[0][i]) &&
			element[2].includes(element[0][i])
		) {
			prioritySum += priority.get(element[0][i]);
		}
		i++;
	} while (
		!(
			element[1].includes(element[0][i - 1]) &&
			element[2].includes(element[0][i - 1])
		)
	);
});

console.log('Part 2: ' + prioritySum);
