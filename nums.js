let x = 10; 
let y = 20;
let z = x + y;
let x1 = "10";
let y1 = "20";
let z1 = x1+y1;
console.log(z); console.log(z1);
//JavaScript uses the + operator for both addition and concatenation.
//If you add a numeric string and a number, the result will be a concatenated string:
// "10"+20 = 1020
let x2 = 10;
let y2 = 20;
let z2 = "30";
let result = x2 + y2 + z2; console.log(result);
//JavaScript will try to convert strings to numbers when dividing,multiplying and subtracting but not for addition
//"100"/"10"=10, *, -, not +
let w= 100/"Apple"; console.log(w); //NaN
//NaN + 5 =NaN but NaN+"5"= NaN5
//The typeof NaN is number
//typeof Infinity is a number

// a is a number
let a = 123;

// b is a Number object
let b = new Number(123);

//Numbers and Number objects cannot be safely compared
//When using the === operator, x and y are not equal.
//When using the == operator, x and y are equal.
let x4 = new Number(500);
let y4 = new Number(500);
//here (x == y)  false. JS objects can't be compared
//same for (x===y)

let c = 5n;
let d = Number(c) / 2; console.log(d);
//A BigInt can not have decimals.Cannot mix BigInt and other types, use explicit conversions.

let e = 9007199254740992 === 9007199254740993; console.log(e);
//MAX_SAFE_INTEGER Example 
let  f = Number.MAX_SAFE_INTEGER; console.log(f);
let  g = Number.MIN_SAFE_INTEGER; console.log(g);

//The isInteger() method returns true if the argument is an integer.Otherwise it returns false.
//Number.isInteger(10)->true  Number.isInteger(10.5)->false

//The isSafeInteger() method returns true if the argument is a safe integer.
//Number.isSafeInteger(12345678901234567890)->false

//The toString() method converts a number to a string.
let h = 123; console.log( h.toString());

//The toExponential() method returns a string, with the number rounded and written using exponential notation.
let i = 9.656; console.log(i.toExponential(4));

//The toFixed() method rounds a number to a given number of digits.
let j = 9.656; console.log( j.toFixed(2));

//The toPrecision() method returns a string, with a number written with a specified length
let k = 9.656; console.log(k.toPrecision(2));

//The valueOf() method returns a number as a number
Number(true) //1
Number(false) //0
Number("10") //10
Number("  10") //10
Number("10  ") //10
Number(" 10  ") //10
Number("10.33") //10.33
Number("10,33") //NaN
Number("10 33") //NaN
Number("John") //NaN

//The Number() method can convert a date to a number
let l = new Date("1970-01-02");
console.log(Number(l));

//The global JavaScript function parseInt() converts strings to numbers
parseInt("-10") 
  parseInt("-10.33") 
  parseInt("10") 
  parseInt("10.33") 
  parseInt("10 6")   
  parseInt("10 years")  
  parseInt("years 10")  

//The largest possible number in JavaScript is:1.7976931348623157e+308

//Using a Number property on a variable, or value, will return undefined
//let x=6; x.MAX_VALUE; undefined
let n = Number.MIN_VALUE; console.log(n);
let o = Number.MAX_SAFE_INTEGER; 
let p = Number.MIN_SAFE_INTEGER;
