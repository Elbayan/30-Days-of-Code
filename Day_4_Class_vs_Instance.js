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

//beginning solution
function Person(initialAge){
  if (initialAge < 0) {
    console.log('Age is not valid, setting age to 0.'); 
    this.age = 0;
  } else {
    this.age = initialAge;
  } 
    
  this.amIOld = function(){   
    if (this.age < 13) { 
      console.log ('You are young.');
    } else if (this.age => 13 && this.age < 18) {
      console.log ('You are a teenager.');
    } else {  
      console.log ('You are old.');
    } 
  };
   this.yearPasses = function(){
          this.age++
   };
//ending solution

}
function main() {

var T=parseInt(readLine());
for(i=0;i<T;i++){
    var age=parseInt(readLine());
    var p=new Person(age);
    p.amIOld();
    for(j=0;j<3;j++){
        p.yearPasses();
        
    }
    p.amIOld();
    console.log("");   
    }
}
