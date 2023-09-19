//way to define the type of a function, specifying the types
// of its parameters and the type of its return value.
//basic syntax (parameters: types) => returnType
type AddFunction = (a: number, b: number) => number; //function type

const addition: AddFunction = (a, b) => a + b;           //function

const result = addition(3, 5);         // result has type number
console.log(result);

//in function type expression we only give parameters and return type 
//we can not give additional properties for the function 

 type greeting=(a:string,b:string)=>string;

 const message:greeting =(a,b)=>`${a}${b}`;       //concat by templete literals
 const displaymsg=message('umaima','rafi');
 //console.log(displaymsg);

 //lets do a fun example 
 // Define a function type expression
type MathOperation = (a: number, b: number) => number;

// Create functions that match the defined type
const additin: MathOperation = (a, b) => a + b;
const subtract: MathOperation = (a, b) => a - b;
const multiply: MathOperation = (a, b) => a * b;

// Use the functions
//console.log(additin(5, 3));        
//console.log(subtract(8, 3));   
//console.log(multiply(4, 6));   

  