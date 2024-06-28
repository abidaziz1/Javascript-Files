const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];
let text = "";
for(let i=0; i<cars.length; i++){
    text+= cars[i] + "\n";
}
console.log(text);

let i = 5;
for (let i = 0; i < 10; i++) {
  // some statements
} console.log(i); //i=5 at last
//using let, the variable declared in the loop does not redeclare the variable outside the loop.
//using var, the variable declared in the loop redeclares the variable outside the loop.

const person = {fname:"John", lname:"Doe", age:25}; 
let txt = "";
for(let x in person){
    txt+=person[x]+ " ";
}
console.log(txt);
//The for in statement loops through the properties of an object

const numbers = [45, 4, 9, 16, 25];
let txt1 = "";
for (let x in numbers) {
  txt1 += numbers[x] + "\n"; 
} console.log(txt1);

const numbers1 = [45, 4, 9, 16, 25];
let txt2 = "";
numbers1.forEach(myFunction);
function myFunction(value) {
  txt2 += value+ " "; 
} console.log(txt2);

//The for of statement loops through the values of an iterable object.
let language = "Javascript"; let text2="";
for(let x of language){
    text2 += x +"\n";
} console.log(text2);