let x= myFunction(4,3);
function myFunction(a,b){
    return a*b;
} console.log(x);

//A function can be stored in a variable
const x1= function(a,b) {return a*b}; console.log(x1);
//After a function expression has been stored in a variable, the variable can be used as a function
let z=x1(4,5); console.log(z);

//JavaScript has an built-in function constructor.
const myFunction1 = new Function("a", "b", "return a * b");
console.log(myFunction1(9, 3));

