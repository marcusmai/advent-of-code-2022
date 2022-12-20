let fs = require('fs');
let input = fs.readFileSync('./day02/input.txt', 'utf-8').split(/\r?\n/);

let myScore = 0;

input.forEach((element) => {
	let myChoice = '';

	switch (element[2]) {
		case 'X': // I need to lose
			if (element[0] === 'A') {
				myChoice = 'C';
			}
			if (element[0] === 'B') {
				myChoice = 'A';
			}
			if (element[0] === 'C') {
				myChoice = 'B';
			}
			break;
		case 'Y': // I need to end it in a draw
			if (element[0] === 'A') {
				myChoice = 'A';
			}
			if (element[0] === 'B') {
				myChoice = 'B';
			}
			if (element[0] === 'C') {
				myChoice = 'C';
			}
			myScore += 3;
			break;
		case 'Z': // I need to win
			if (element[0] === 'C') {
				myChoice = 'A';
			}
			if (element[0] === 'A') {
				myChoice = 'B';
			}
			if (element[0] === 'B') {
				myChoice = 'C';
			}
			myScore += 6;
			break;
		default:
			break;
	}

	//Calculate the score for figure choice
	switch (myChoice) {
		case 'A':
			myScore += 1;
			break;
		case 'B':
			myScore += 2;
			break;
		case 'C':
			myScore += 3;
			break;
		default:
			break;
	}
});

console.log('Part 2: ' + myScore);
