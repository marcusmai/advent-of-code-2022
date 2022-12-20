let fs = require('fs');
let input = fs.readFileSync('./day08/input.txt', 'utf-8').split(/\r?\n/);


function visibleUp(y,x) {
    let visible = true;
    for (let i = y - 1; i >= 0; i--) {
        if (parseInt(input[y][x]) <= parseInt(input[i][x])) {
            visible = false;
        }
    }
    return visible;
}

function visibleDown(y,x) {
    let visible = true;
    for (let i = y + 1; i < input.length; i++) {
        if (parseInt(input[y][x]) <= parseInt(input[i][x])) {
            visible = false;
        }
    }
    return visible;
}

function visibleRight(y,x) {
    let visible = true;
    for (let i = x + 1; i < input.length; i++) {
        if (parseInt(input[y][x]) <= parseInt(input[y][i])) {
            visible = false;
        }
    }
    return visible;
}

function visibleLeft(y,x) {
    let visible = true;
    for (let i = x - 1; i >= 0; i--) {
        if (parseInt(input[y][x]) <= parseInt(input[y][i])) {
            visible = false;
        }
    }
    return visible;
}

let visibleTrees = 0;
visibleTrees = (input[0].length * 2) + ((input.length - 2) * 2);

for (let y = 1; y < input.length-1; y++) {
    for (let x = 1; x < input[y].length-1; x++) {
        if (visibleUp(y,x) || visibleDown(y,x) || visibleRight(y,x) || visibleLeft(y,x)) {
            visibleTrees++;
        }
    }
}

console.log('Visible trees: ' + visibleTrees);