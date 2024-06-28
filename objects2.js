//Nested JavaScript Objects and Arrays
let x1 = "";
const myObj = {
  name: "John",
  age: 30,
  cars: [
    {name:"Ford", models:["Fiesta", "Focus", "Mustang"]},
    {name:"BMW", models:["320", "X3", "X5"]},
    {name:"Fiat", models:["500", "Panda"]}
  ]
} 
for(let i in myObj.cars){
    x1+=myObj.cars[i].name; console.log(x1);

for(let j in myObj.cars[i].models){
    x1+=myObj.cars[i].models[j]; console.log(x1);
}}

//Object.values() converts an object to an array.
const person = {
    name: "John",
    age: 30,
    city: "New York", today: new Date(),
    boyos: function() {return 40;}
  };
console.log(Object.values(person));
console.log(JSON.stringify(person));
//JSON.stringify will not stringify functions.

//This can be "fixed" if you convert the functions into strings before stringifying.
person.boyos= person.boyos.toString();
console.log(JSON.stringify(person));

//It is also possible to stringify JavaScript arrays.
const arr = ["John", "Peter", "Sally", "Jane"];
console.log(JSON.stringify(arr));