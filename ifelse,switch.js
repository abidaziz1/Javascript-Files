const time = new Date().getHours();
let greeting;
if (time < 10) {
  greeting = "Good morning";
} else if (time < 20) {
  greeting = "Fuck day";
} else {
  greeting = "Good evening";
}
console.log(greeting);


let day;
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case  6:
    day = "Saturday";
}
console.log("Today is: "+day);

let text;
switch (new Date().getDay()) {
  case 6:
    text = "Today is Saturday";
    break;
  case 0:
    text = "Today is Sunday";
    break;
  default:
    text = "Looking forward to the Weekend";
}
console.log(text);

let text1;
switch (new Date().getDay()) {
  case 4:
  case 5:
    text1 = "Soon it is Weekend";
    break;
  case 0:
  case 6:
    text1 = "It is Weekend";
    break;
  default:
    text1 = "Aro ek soptaho pore weekend, So sad! 5 more work days to ";
} 
console.log(text1);