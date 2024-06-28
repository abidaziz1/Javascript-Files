//arithmatic operators: ** exponentiation others same
let a=3;
let x= (100+50)*a;
console.log(x);

let text1= "20"; let text2= "5";
let result= text1<text2; console.log(result);
text1+= " is a big number compared to 5."; console.log(text1);
let x1=5; let z=x1**2; console.log(z);

let q= -20; q<<=7; console.log(q);
let q1= -100; q1<<=7; console.log(q1);
let k1; k1 ??=5; console.log(k1);
let k=10; k||=5; console.log(k); //if undefined or false, then second value will be true
let l=110; l&&=7; console.log(l); //ulta niyom


let k2 = 16 + 4 + "Volvo"; console.log(k2);
let o= 'Volvo'+16+4; console.log(o);
//you can use both single or double quotes

let y = 123e5; console.log(y);
let  y1= 123e-5; console.log(y1);
let y2 = BigInt("123456789012345678901234567890");
console.log(y2);

const cars = ["Saab","Volvo","BMW"];
console.log(cars[0]);

const person = {
    firstName : "John",
    lastName  : "Doe",
    age     : 50,
    eyeColor  : "blue"
  };
console.log(person.firstName + " is " + person.age + " years old.");

console.log(typeof "" +
typeof "John" + 
typeof "John Doe"+ typeof y2);

x = new String();        // Declares x as a String object
y = new Number();        // Declares y as a Number object
z = new Boolean();       // Declares z as a Boolean object

//You can use quotes inside a string, as long as they don't match the quotes surrounding the string.

let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let length = text.length; console.log(length);


//JavaScript objects cannot be compared.
let c = new String("John");  // c is an object
let d = new String("John");  // d is an object
console.log((c==d));    //false ashbe always




