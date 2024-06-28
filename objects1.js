//It is a common practice to declare objects with the const keyword
/*
There are different ways to create new objects:
Create a single object, using an object literal.
Create a single object, with the keyword new.
Define an object constructor, and then create objects of the constructed type.
Create an object using Object.create().
*/

//using an object literal. Spaces and line breaks are not important. An object definition can span multiple lines
const person = {firstName:"John", lastName:"Doe", age:50,eyeColor:"blue"};
console.log(person.firstName + " is " + person.age + " years old.");
person.nationality = "Bengali"; //adding new properties
delete person.age; //deleting properties
//or you can first create const person{}; then person.firstname= "John"; person.age= 50;   evabe add koro

//Using the JavaScript Keyword new. But there is no need to use new Object() 
const person1 = new Object();
person1.firstName = "John";
person1.lastName = "Doe";
person1.age = 50;
person1.eyeColor = "blue"; 

const x= person; x.age=10; //will change both x.age and person.age
//The object x is not a copy of person. It is person. Both x and person are the same object.



//Accessing JS properties
//person.age or person["age"] or x= "age"; person[x];

//for...in method to access an object'
const person2 = {
    fname:"John2",
    lname:"Doe2",
    age:52,
  }; 
let txt = "";
for(let x in person2){
    txt+= person2[x]+ " ";
} console.log(txt);


//Values in an object can be another object
const myobj = {
    name: "Abid", age: 21, 
    cars:{car1: "Marcedes", car2: "Ferrari", car3: "BMW"}
}
console.log(myobj.cars.car3); 
console.log(myobj["cars"]["car1"]); //another way


//In JavaScript, all attributes can be read, but only the value attribute can be changed (and only if the property is writable).
const manush ={
    fname: "Abid",
    lname: "Aziz", id: 2210019,
    fullname: function(){
        return (this.fname+ " "+this.lname).toUpperCase();
    }
};
console.log(manush.fullname());
//this is not a variable. It is a keyword. You cannot change the value of this.
//If you access it without (), it will return the function definition


