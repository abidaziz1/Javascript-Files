//new Date() without arguments, creates a date object with the current date and time
const d = new Date();
console.log(d);

//creating date objects
const d1 = new Date("October 13, 2014 11:13:00"); console.log(d1);
const d2 = new Date(2018, 11, 24, 10, 33, 30, 0); console.log(d2);
const d3 = new Date(2018, 11, 24, 10); console.log(d3);
const d4 = new Date(2018, 11, 24); console.log(d4);
const d5 = new Date(2018, 11); console.log(d5);
const d6 = new Date(99, 11, 24); console.log(d6);

//new Date(milliseconds) creates a new date object as milliseconds plus zero time
const d7 = new Date(); console.log(d7.toUTCString());
console.log(d7.toISOString());
const d8 = new Date("2015"); console.log(d8);

const d9 = new Date("Mar 25 2015"); console.log(d9);
//Commas are ignored. Names are case insensitive
console.log(d7.getFullYear()); 
const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const d11 = new Date("2021-03-25");
let month = months[d11.getMonth()];
console.log(month);

//evabe get diye jotokichu kora zay ta dekho

let text;
const today = new Date();
const someday = new Date();
someday.setFullYear(2100, 0, 14);

if (someday > today) {
  text = "Today is before January 14, 2100.";
} else {
  text = "Today is after January 14, 2100.";
}
console.log(text);
