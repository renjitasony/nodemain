
var x = function(){
    console.log("hello welcome");
}
x();
// function readfile(){
//     sayhello();
// }
var greet = require("./greetings");
greet.sayhello();
greet.saybye();
var ar = greet.langs;

    for(var i=0;i<ar.length;i++){
        console.log(ar[i]);
    }


