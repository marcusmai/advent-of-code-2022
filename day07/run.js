let fs = require('fs');
const { get } = require('http');
let input = fs.readFileSync('./day07/input.txt', 'utf-8').split(/\r?\n/);

// ************************************************************************************

function ls(workDir) {
	content = workDir.get('content');

	iLine++;
	while (input[iLine][0] !== '$') {
		// Runs until a new command is found $
		if (input[iLine][0] === 'd') {
			// If the line is to create a new directory
			content.set(
				input[iLine],
				new Map([
					['name', input[iLine]],
					['size', 0],
					['content', new Map()],
				])
			);
		} else {
			// If not then the line is to create a new file
			content.set(
				input[iLine].split(' ')[1],
				new Map([['size', input[iLine].split(' ')[0]]])
			);
			// Add file size to current folder
			workDir.set(
				'size',
				parseInt(workDir.get('size')) + parseInt(input[iLine].split(' ')[0])
			);
			// Update my summary list
			folderSizeTable.set(to_String(path), workDir.get('size'));
		}
		iLine++;
	}
	updateParentSize(workDir);
}

function to_String(path) {
	let result = '';
	for (let index = 0; index < path.length; index++) {
		result += path[index];
	}
	return result;
}

function fetchWD(path) {
	let workDir = fileSystem.get(path[0]);
	for (let index = 1; index < path.length; index++) {
		workDir = workDir.get('content').get(path[index]);
	}
	return workDir;
}

function cd(newDir) {
	path.push('dir ' + newDir.slice(5));
	folderSizeTable.set('dir ' + newDir.slice(5), 0);
	iLine++;
}

function cdBack() {
	if (path.length > 1) {
		path.pop();
		iLine++;
	}
}

function updateParentSize(workDir) {
	let parentPath = path.slice(0);
	parentPath.pop();

	for (let index = parentPath.length; index > 0; index--) {
		let workParent = fetchWD(parentPath);
		workParent.set(
			'size',
			parseInt(workParent.get('size')) + parseInt(workDir.get('size'))
		);
		// Update my summary list
		folderSizeTable.set(to_String(parentPath), workParent.get('size'));
		parentPath.pop();
	}
}

// ************************************************************************************
// Global parameters and setup
// ************************************************************************************
let iLine = 1; //The active command lin in the input file.. starting on 1 due to the first being root
let path = ['root'];

// Create the filesystem object and add root
let fileSystem = new Map();

fileSystem.set(
	'root',
	new Map([
		['name', 'root'],
		['size', 0],
		['content', new Map()],
	])
);

let folderSizeTable = new Map();
folderSizeTable.set('root', 0);

// ************************************************************************************
// Now we run !!!
// ************************************************************************************

while (iLine < input.length) {
	if (input[iLine] === '$ ls') {
		//This will create a working directory object as input to ls-function
		ls(fetchWD(path));
	} else if (input[iLine] === '$ cd ..') {
		cdBack();
	} else {
		// Else will be "$ cd ?"
		cd(input[iLine]);
	}
}

let total = 0;

for (let [key, value] of folderSizeTable) {
	//console.log(key + ' = ' + value);
	if (parseInt(value) <= parseInt(100000)) {
		total += parseInt(value);
	}
}

console.log('Part 1: ' + total);

//
let neededSpace = 30000000 - (70000000 - parseInt(folderSizeTable.get('root')));
let folderSizeToDelete = 30000000;

let allFolderSize = [];
for (let [key, value] of folderSizeTable) {
	allFolderSize.push(value);
}

allFolderSize.sort((a, b) => a - b);

for (let index = 0; index < allFolderSize.length; index++) {
	if (
		allFolderSize[index] > neededSpace &&
		allFolderSize[index] < folderSizeToDelete
	) {
		folderSizeToDelete = allFolderSize[index];
	}
}

console.log('Part 2: ' + folderSizeToDelete);
