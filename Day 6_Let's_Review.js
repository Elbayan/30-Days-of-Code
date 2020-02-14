//beginning solution
function processData(input) {
  separateStrings = input.split('\n');
  let n = parseInt(separateStrings[0],10);
  let splitStringToArray = new Array();
  let arrEven = '';
  let arrOdd = '';

  for (let i = 0; i < n; i++) {
    splitStringToArray[i] = separateStrings[i+1].split('');
     
    for (let j = 0; j < splitStringToArray[i].length; j++) {
        
      if (j % 2 == 0) {
        arrEven += splitStringToArray[i][j];    
      } else {
        arrOdd += splitStringToArray[i][j];  
      }
    } 
    console.log(arrEven + " " + arrOdd); 

    arrEven = '';
    arrOdd = '';
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
