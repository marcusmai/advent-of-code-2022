let fs = require('fs');
let input = fs.readFileSync('./day05/input.txt', 'utf-8').split(/\r?\n/);

let instructions = input.slice(input.indexOf('') + 1);
let stacksInput = input.slice(0, input.indexOf('')).reverse();
let stacksNr = stacksInput[0].split(/ /).filter((e) => e !== '');

//Create stacks object
let stacks = [];
for (let index = 0; index < stacksNr.length; index++) {
	let colPos = stacksInput[0].indexOf(stacksNr[index]);
	stacks[index] = [];

	for (let g = 0; g < stacksInput.length - 1; g++) {
		if (stacksInput[g + 1][colPos] !== ' ') {
			stacks[index][g] = stacksInput[g + 1][colPos];
		}
	}
}

// Runs the instructions
for (let index = 0; index < instructions.length; index++) {
	let stepInstruction = instructions[index]
		.split(/ /)
		.filter((e) => e !== 'move' && e !== 'from' && e !== 'to');

	for (let move = stepInstruction[0]; move > 0; move--) {
		stacks[stepInstruction[2] - 1].push(
			stacks[stepInstruction[1] - 1][
				stacks[stepInstruction[1] - 1].length - move
			]
		);
		stacks[stepInstruction[1] - 1].splice(
			stacks[stepInstruction[1] - 1].length - move,
			1
		);
	}
}

let result = '';
for (let index = 0; index < stacksNr.length; index++) {
	result += stacks[index][stacks[index].length - 1];
}

console.log('Part 1: ' + result);
