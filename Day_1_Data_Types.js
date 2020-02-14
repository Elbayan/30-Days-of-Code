process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

// Reads complete line from STDIN
function readLine() {
    return input_stdin_array[input_currentline++];
}

function main() {
  var i = 4;
  var d = 4.0;
  var s = "HackerRank ";
  var l = Number(input_stdin_array[0]); 
  var k = Number(input_stdin_array[1]);
  var m = input_stdin_array[2];
    
  console.log (i + l);
  console.log ( (d + k).toFixed(1) );
  console.log (s + m);
}