'use strict';

var _input = '';
var _index = 0;
process.stdin.on('data', (data) => { _input += data; });
process.stdin.on('end', () => {
    _input = _input.split(new RegExp('[ \n]+'));
    main();    
});
function read() { return _input[_index++]; }

/**** Ignore above this line. ****/

class Person {
    constructor(firstName, lastName, identification) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.idNumber = identification;
    }
    
    printPerson() {
        console.log(
            "Name: " + this.lastName + ", " + this.firstName 
            + "\nID: " + this.idNumber
        )
    }
}

//beginning solution
class Student extends Person {
  constructor(firstName, lastName, id, scores) {
    super(firstName, lastName, id);
    this.scores = scores;
  }
 
  calculate() { 
    let sum = 0; 
    let average = 0;
    let grade = '';      
    for (let i = 0, length = this.scores.length; i < length; i++) {
      sum += this.scores[i];
    }   
        average = sum / this.scores.length;
        
        if (90 <= average && average <= 100) {
            grade = 'O';
        } else if (80 <= average && average < 90) {
            grade = 'E';
        } else if (70 <= average && average < 80) {
            grade = 'A';
        } else if (55 <= average && average < 70) {
            grade = 'P';
        } else if (40 <= average && average < 55) {
            grade = 'D';
        } else {
            grade = 'T';
        }
        return grade;
    }   
}
//ending solution

function main() {
    let firstName = read()
    let lastName = read()
    let id = +read()
    let numScores = +read()
    let testScores = new Array(numScores)
    
    for (var i = 0; i < numScores; i++) {
        testScores[i] = +read()  
    }

    let s = new Student(firstName, lastName, id, testScores)
    s.printPerson()
    s.calculate()
    console.log('Grade: ' + s.calculate())
}
