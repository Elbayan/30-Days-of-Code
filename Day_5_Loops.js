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
    const n = parseInt(readLine(), 10);
    let result;
    for (let i = 1; i <= 10; i++) {
      result = i * n;
      console.log (`${n} x ${i} = `+ result);
    }
}
//ending solution