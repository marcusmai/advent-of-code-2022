let fs = require('fs');
let input = fs.readFileSync('./day06/input.txt', 'utf-8').split(/\r?\n/);

let buffer = input[0].split('');

let startPos = 0;
for (let index = 3; index < buffer.length; index++) {
	const arry = [
		buffer[index],
		buffer[index - 1],
		buffer[index - 2],
		buffer[index - 3],
	];

	const toFindDuplicates = (arry) =>
		arry.filter((item, index) => arry.indexOf(item) !== index);
	const duplicateElements = toFindDuplicates(arry);

	if (duplicateElements.length === 0) {
		startPos = index + 1;
	}

	if (startPos != 0) {
		index = buffer.length;
	}
}

console.log('Part 1: ' + startPos);
