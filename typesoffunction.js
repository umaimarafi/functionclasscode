"use strict";
//FUNCTION TYPES:
/*FUNCTION IS A PIECE OF CODE THAT CAN HELP IN REUSING CODE

TYPESCRIPT MAINLY HAS 2 TYPES OF FUNCTIONS
 1. NAMED FUNCTION 2.ANANYMOUS FUNCTION*/
//NAMED FUNCTION   A named function is one where you declare
// and call a function by its given name.
//A SIMPLE NAMED FUNCTION CAN BE LIKE:           function function name(para){}
function display() {
    console.log("Hello TypeScript!"); //function body
}
display();                                                 //function call  
//named function with parameters and return type:
function Sum(x, y) {
    return x + y;
}
let d = Sum(2, 3); //passing values in function call
console.log(d);
//Anonymous function.
// a function declared as an expression.
// steps=>  declare a variable ->then inside it declare your function without name 
//to call it simply call the variable you have declared
//a simple function:
let greeting = function () {
    console.log("Hello TypeScript!");
};
greeting();  //here calling it via variable name
//anonymous function with parameter and return type:
let add = function (x, y) {
    return x + y;
};
let a = add(2, 3); //call via variable name
console.log(a);
