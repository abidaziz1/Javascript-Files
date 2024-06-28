let text = "";
let i=0; 
while(i<10){
    text+="\nThe number is "+i;
    i++;
} console.log(text);

do{
    text+="\nThe number is " + i;
    i++;
} while(i<2); console.log(text);

//break and continue statement
let text1 = "";
for (let i = 0; i < 10; i++) {
  if (i === 3) { break; }
  text1 += "The number is " + i + "\n";
} console.log(text1);

let text2 = "";
for (let i = 0; i < 5; i++) {
  if (i === 3) { continue; }
  text2 += "The number is " + i + "\n";
} console.log(text2);

// Create a Map
const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
  ]);
  
  // List all entries
  let text3 = "";
  for (const x of fruits) {
    text3 += x + "\n";
  }
console.log(text3);  

fruits.delete("apples"); console.log(fruits.has("apples"));

// Create a Set
const letters = new Set();

// Create Variables
const a = "a";
const b = "b";
const c = "c";

// Add the Variables to the Set
letters.add(a);
letters.add(b);
letters.add(c); letters.add(c); letters.add(c); letters.add(c);
console.log(letters.size);
//If you add equal elements, only the first will be saved

//forEach() calls a function for each element
const letters1 = new Set(["a","b","c"]);
let text4 = "";
letters1.forEach (function(value) {
  text4 += value + "\n";
}) 
console.log(text4);

