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

// Complete the solve function below.
function solve(meal_cost, tip_percent, tax_percent) {
  let tip;
  let tax;
  let totalCost;

  tip = meal_cost * tip_percent / 100;

  tax = meal_cost * tax_percent / 100;
  
  totalCost = meal_cost + tip + tax;

  console.log(Math.round (totalCost));
}

function main() {
    const meal_cost = parseFloat(readLine());

    const tip_percent = parseInt(readLine(), 10);

    const tax_percent = parseInt(readLine(), 10);

    solve(meal_cost, tip_percent, tax_percent);
}
