//The prototype property allows you to add new methods to objects constructors
function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
  }
  
  Person.prototype.nationality = "English";
  const myFather = new Person("John", "Doe", 50, "blue");
  
  Person.prototype.name= function()
  {
    return this.firstName+ " "+ this.lastName
  };
console.log("The nationality of my father is " + myFather.nationality );
console.log("My father is"+ myFather.name());

//The JavaScript prototype property also allows you to add new methods to objects constructors.

//iterate over a string
const name1 = "W3Schools";
let text = ""
for (const x of name1) {
  text += x ;
} console.log(text);

//Iterate over an Array
const letters = ["a","b","c"];
let text1 = "";
for (const x of letters) {
  text1 += x;
} console.log(text1);

