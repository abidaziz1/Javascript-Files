let text = "I love cats. Cats are very easy to love. Cats are very popular."
text = text.replaceAll("Cats","Dogs");
text = text.replaceAll("cats","dogs");
console.log(text);

let txt= "a,b,c,d,e,f,h"; const myARR= txt.split(",");
console.log(myARR[0]);

let text1= "Please do locate where 'locate' occurs!";
console.log(text1.indexOf("locate"));
//lastIndexOF,
//The search() method returns the position of the first occurrence of a string in a string.

let text2 = "Please locate where 'locate' occurs!";
let index = text2.search("locate");
console.log(index);

let text3 = "The rain in SPAIN stays mainly in the plain";
const myArr = text3.match("ain"); console.log(myArr);

let text4 = "The rain in SPAIN stays mainly in the plain"; 
const myArr1 = text4.match(/ain/gi); console.log(myArr1);

let text5 = "I love cats. Cats are very easy to love. Cats are very popular."
const iterator = text5.matchAll(/Cats/gi);
console.log(iterator);

//The includes() Method Check if a string includes "world":
let text6 = "Hello world, welcome to the universe.";
console.log(text6.includes("world"));

let text7 = "John Doe";
text7.endsWith("Doe"); //likewise startWith o ache

//With back-ticks, you can use both single and double quotes inside a string
let text8 = `He's often called "Johnny"`;

let firstName = "John";
let lastName = "Doe";

let text9 = `Welcome ${firstName}, ${lastName}!`;
console.log(text9);