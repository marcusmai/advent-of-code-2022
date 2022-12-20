let fs = require('fs');
let input = fs.readFileSync('./day04/input.txt', 'utf-8').split(/\r?\n/);

let pairs = 0;

input.forEach((element) => {
	let assig = element.split(/,|-/);

	if (
		(parseInt(assig[0]) >= parseInt(assig[2]) &&
			parseInt(assig[1]) <= parseInt(assig[3])) ||
		(parseInt(assig[2]) >= parseInt(assig[0]) &&
			parseInt(assig[3]) <= parseInt(assig[1]))
	) {
		pairs++;
	}
});

console.log('Part 1: ' + pairs);
