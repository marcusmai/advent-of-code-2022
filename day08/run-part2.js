let fs = require('fs');
let input = fs.readFileSync('./day08/input.txt', 'utf-8').split(/\r?\n/);


function countUp(y,x) {
  let treeCount = 1;
  
  if (y === 0) {
    return treeCount;
  }

  if (parseInt(input[y][x]) === parseInt(input[y-1][x])) {
      return treeCount;
  }

  for (let i = y - 2; i >= 0; i--) {        
      // if (parseInt(input[i][x]) === parseInt(input[i+1][x])) {
      //     break;
      // }

      if (parseInt(input[i][x]) > parseInt(input[i+1][x])) {
          treeCount++;
      }
      else if (parseInt(input[i][x]) === parseInt(input[i+1][x])) {
          treeCount++;
          break;
      }
      else {
          break;
      }
  }
  return treeCount;
}

function countDown(y,x) {
  let treeCount = 1;

  if (y === input.length) {
    return treeCount;
  }

  if (parseInt(input[y][x]) === parseInt(input[y+1][x])) {
      return treeCount;
  }

  for (let i = y + 2; i < input.length; i++) {
      // if (parseInt(input[i][x]) === parseInt(input[i-1][x])) {
      //     break;
      // }

      if (parseInt(input[i][x]) > parseInt(input[i-1][x])) {
          treeCount++;
      }
      else if (parseInt(input[i][x]) === parseInt(input[i-1][x])) {
          treeCount++;
          break;
      }
      else {
          break;
      }
  }
  return treeCount;
}

function countRight(y,x) {
  let treeCount = 1;

  if (x === input[y].length) {
    return treeCount;
  }

  if (parseInt(input[y][x]) === parseInt(input[y][x+1])) {
      return treeCount;
  }

  for (let i = x + 2; i < input[y].length; i++) {
      // if (parseInt(input[y][i]) === parseInt(input[y][i-1])) {
      //     break;
      // }

      if (parseInt(input[y][i]) > parseInt(input[y][i-1])) {
          treeCount++;
      }
      else if (parseInt(input[y][i]) === parseInt(input[y][i-1])) {
          treeCount++;
          break;
      }
      else {
          break;
      }
  }
  return treeCount;
}

function countLeft(y,x) {
  let treeCount = 1;

  if (x === 0) {
    return treeCount;
  }

  if (parseInt(input[y][x]) === parseInt(input[y][x-1])) {
      return treeCount;
  }

  for (let i = x - 2; i >= 0; i--) {      
      // if (parseInt(input[y][i]) === parseInt(input[y][i+1])) {
      //     break;
      // }

      if (parseInt(input[y][i]) > parseInt(input[y][i+1])) {
          treeCount++;
      }
      else if (parseInt(input[y][i]) === parseInt(input[y][i+1])) {
          treeCount++;
          break;
      }
      else {
          break;
      }
  }
  return treeCount;
}

let scenicScore = 0;


let row = 0;
let column = 0;

for (let y = 0; y < input.length-1; y++) {
  for (let x = 0; x < input[y].length-1; x++) {
    let tempScore = 0;

    tempScore = countDown(y,x) * countUp(y,x) * countLeft(y,x) * countRight(y,x);
    
    if (tempScore > scenicScore) {
        scenicScore = tempScore;
    }
    column++;
      
  }
  row++; 
}

// let y = 2;
// let x = 3;

// scenicScore = countDown(y,x) * countUp(y,x) * countLeft(y,x) * countRight(y,x);


console.log('Scenic score: ' + scenicScore);
console.log('Row: ' + row);
console.log('Column: ' + column);





