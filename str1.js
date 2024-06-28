var text = "Hello World";
console.log(text.charAt(0));
console.log(text.charCodeAt(0));
const name= "ABid Aziz";
let letter= name.at(5);
console.log(letter);
//let letter = name[2] diyeo kora zabe
//The at() method is a new addition to JavaScript.
//It allows the use of negative indexes while charAt() do not.
//Now you can use myString.at(-2) instead of charAt(myString.length-2)

let text2 = "HELLO WORLD";

text2[0] = "A";  // Does not work
let text1 = "Apple, Banana, Kiwi";
let part = text1.slice(7,13);
console.log(part);

let str = "Apple, Banana, Kiwi";
console.log(str.substring(7,13));

let str1 = "Apple, Banana, Kiwi";
console.log(str.substr(-4));

let txt= "hello world!";
console.log(txt.toUpperCase());

let txt2= "HELLO WORLD!";
console.log(txt2.toLowerCase());

let text3 = "Hello";
let text4 = "World!";
let text5 = text3.concat(" ",text4);
console.log(text5);

let txt1 = "     Hello World!     ";
let txt3 = txt1.trim(); let txt4= txt1.trimStart(); let txt5= txt1.trimEnd();
console.log(txt1.length); console.log(txt3.length);
console.log(txt4.length); console.log(txt5.length);
//The trim() method removes whitespace from both sides of a string

let tet = "5";
tet = tet.padStart(4,"0"); console.log(tet);
//same for end 

let text9 = "Hello world!";
let result = text9.repeat(2); console.log(result);

let text6= "Please visit facebook and facebook";
text6= text6.replace(/faCebook/i, "youtube");
console.log(text6);
text6= text6.replace(/facebook/g, "Youtube"); console.log(text6);

