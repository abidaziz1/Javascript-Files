const cars = [
    "Saab","Volvo","BMW"
  ];
console.log(cars);

const cars1 = new Array("Saab", "Volvo", "BMW"); //another way to define
cars[0]="Ferrari"; console.log(cars);

//The toString() method returns an array as a comma separated string
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Lemon"); fruits[7]="Malta";
console.log(fruits);

const person = {firstName:"John", lastName:"Doe", age:46};
console.log(person.lastName);

//Avoid using new Array() to crate a new array. Instead you should use const points= [40,24,44];
const fruits1 = ["Banana", "Orange", "Apple", "Mango"];
console.log(typeof fruits1); console.log(fruits.length); //array length
//The typeof operator, when used on an array, returns object

//array to string
console.log(fruits1.toString());

//array elements access
console.log(fruits1.at(2));

//The join() method joins array elements into a string
console.log(fruits1.join(" * "));

//The pop() method removes the last element from an array
console.log(fruits1.pop());

//The push() method adds a new element to an array (at the end)
fruits1.push("kiwi");

//The shift() method removes the first element of an array (and "shifts" the other elements to the left)
console.log(fruits1.shift());

//The unshift() method adds new elements to the beginning of an array
console.log(fruits1.unshift("Lebu"));

//Deleting elements leaves undefined holes in an array. Use pop() or shift() instead.

//The concat() method merges (concatenates) arrays. Add any number of array arguments
const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];
const myChildren = myGirls.concat(myBoys);
console.log(myChildren);

//copyWithin() copies array elements to another position in an array, overwriting existing values
console.log(fruits1.copyWithin(2,0));
//The copyWithin() method overwrites the existing values.
//The copyWithin() method does not add items to the array.
//The copyWithin() method does not change the length of the array.

const myArr = [[1,2],[3,4],[5,6]];
const newArr = myArr.flat();
console.log(newArr);

//The splice() method adds new elements to an array
fruits1.splice(2, 0, "Dub", "Kola");
console.log(fruits1);

//The splice() methods can be used to remove array elements
fruits1.splice(0, 1);  console.log(fruits1);

//Slice out a part of an array starting from array element 1 ("Orange")
const citrus = fruits.slice(1); console.log(fruits);

