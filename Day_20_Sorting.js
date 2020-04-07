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

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function main() {
    var n = parseInt(readLine());
    a = readLine().split(' ');
    arr = a.map(Number);
    let swaps = 0;    

//beginning solution
    for (let i = 0, endI = arr.length - 1; i < endI; i++) {
      let wasSwap = false;

      for (let j = 0, endJ = endI - i; j < endJ; j++) {
        if (arr[j] > arr[j + 1]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
          wasSwap = true;
          swaps++;
        }
      }      
      if (!wasSwap) break;
    }
    
    console.log(`Array is sorted in ${swaps} swaps. 
First Element: ${arr[0]}
Last Element: ${arr[arr.length - 1]}`);
}
//ending solution