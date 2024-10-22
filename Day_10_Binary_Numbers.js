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
    const binaryNumber = parseInt(readLine()).toString(2);   
    const separatedNumbers = binaryNumber.split('');
    let max = 0;
    let current = 0;

    for (let i = 0; i < separatedNumbers.length; i++) {

      (separatedNumbers[i] == 1) ? current += 1 : current = 0;

      if (current > max) 
      max = current   

    }  
    console.log(max);
}
//ending solution