//parameter r values given to function so that compiler 
//knows the no of variabes to be used and the type of variables also.
//default parameters
//argument provided otherwise its undefined
function greet(name: string ): string {
    return `Hello, ${name}!`;
  }
  
  //const greeting1 = greet(); // Uses the default value, "Guest"
  //const greeting2 = greet("Alice"); // Uses the provided argument, "Alice"
  
  //console.log(greeting1); 
 // console.log(greeting2); 
  
//rest parameters
//allows u to give infinite no of arguments within parameter
function school(name:string,...campuses:string[]){
    console.log(campuses);
    return name + " has "+ campuses.join(",") + 'campuses';
    
}
const info = school('cess','GFc','main','cantt'); //some random names of camps
console.log(info);

//optional parameters
//not required all the time attribute is optional
function students(name:string,age?:number){
    return name + ` is ${age} years old`;
}
const disp=students('biya');
console.log(disp);

//combine example
//emplyees data collection.
function employeeinfo(name:string,contactno?:number,...projects:string[])
{
    return name  + ` has done these projects ` + projects.join(",")+ `    contact for details ${contactno}`;
}
let  displying=employeeinfo('shms',undefined,'calculator','ticktack');
 //console.log(displying);

 function prac(a:number,b?:number){
    if(b!== undefined){
        console.log(b);
    }
    else{
        console.log(a);
    }
 }
  prac(2);