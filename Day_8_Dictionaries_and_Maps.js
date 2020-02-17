//beginning solution
function processData(input) {
  let arrayOfSeparatedStrings = input.split('\n');
  let n = parseInt(arrayOfSeparatedStrings[0]);
  let numberOfNewName = arrayOfSeparatedStrings.length - n;
  let arrayOfNamePhone = new Array();
  let arrayNewNamesCheck = new Array();
  let phoneBook = {};

  for (let i = 0; i < n; i++) {
    if (arrayOfSeparatedStrings[i+1] !== undefined) 
      arrayOfNamePhone = arrayOfSeparatedStrings[i+1].split(' ');
      phoneBook[arrayOfNamePhone[0]] = arrayOfNamePhone[1];
  }  

  for (let j = 1; j < numberOfNewName; j++) {
    arrayNewNamesCheck = arrayOfSeparatedStrings[j + n];

    if ( phoneBook.hasOwnProperty(arrayNewNamesCheck) ) {
      console.log(arrayNewNamesCheck + '=' + phoneBook[arrayNewNamesCheck]);  
    } else {
      console.log('Not found');
    }
  }
} 
//ending solution

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
