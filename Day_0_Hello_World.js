//beginning solution
function processData(inputString) { 
  console.log("Hello, World.");
  console.log (inputString);
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