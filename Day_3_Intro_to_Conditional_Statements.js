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
    const N = parseInt(readLine(), 10);
        (N % 2 !== 0) ? console.log ('Weird'):
        (N >= 2 && N <= 5) ? console.log ('Not Weird'):
        (N >= 6 && N <= 20) ? console.log ('Weird'):
        console.log ('Not Weird');
}
//ending solution
