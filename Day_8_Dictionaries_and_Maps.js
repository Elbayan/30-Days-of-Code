//beginning solution
function processData(input) {
  const separatedStrings = input.split('\n');
  const phonesCount = parseInt(separatedStrings[0]);
  let countOfNewName = separatedStrings.length - phonesCount;
  let arrayOfNamePhone = new Array();
  let arrayNewNamesCheck = new Array();
  let phoneBook = {};

  for (let i = 0; i < phonesCount; i++) {
      
    if (separatedStrings[i+1] !== undefined) 
      arrayOfNamePhone = separatedStrings[i+1].split(' ');

      phoneBook[arrayOfNamePhone[0]] = arrayOfNamePhone[1];
  }  

  for (let j = 1; j < countOfNewName; j++) {
    arrayNewNamesCheck = separatedStrings[j + phonesCount];

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
