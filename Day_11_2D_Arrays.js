'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}


//beginning solution
function main() {
    let arr = Array(6);
    let max;
    
    for (let k = 0; k < 6; k++) {
        arr[k] = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));
    }
    
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++ ) {
          
      let sumArr = arr[i][j] + arr[i][j+1] + arr[i][j+2]
              + arr[i+1][j+1] 
              + arr[i+2][j] + arr[i+2][j+1] + arr[i+2][j+2];

        if (max == undefined) {
          max = sumArr;    
        } else if (sumArr > max) {
          max = sumArr;
        }  
      }
    }
    console.log(max); 
}
//ending solution