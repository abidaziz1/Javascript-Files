console.log(Math.PI);
/*Math.E: 2.718281828459045
Math.PI: 3.141592653589793
Math.SQRT2: 1.4142135623730951
Math.SQRT1_2: 0.7071067811865476
Math.LN2: 0.6931471805599453
Math.LN10: 2.302585092994046
Math.LOG2E: 1.4426950408889634
Math.Log10E: 0.4342944819032518*/
console.log(Math.round(4.5)); console.log(Math.round(4.6)); console.log(Math.ceil(4.4)); console.log(Math.floor(-4.2));
console.log(Math.sign(0)); console.log(Math.pow(8,2));
//Math.ceil() rounds a number up to its nearest integer
//Math.trunc(x) returns the integer part of x
//Math.sign(x) returns if x is negative, null or positive
console.log(Math.sqrt(64));
console.log(Math.abs(-4.7));
console.log(Math.sin(90 * Math.PI / 180));
//Math.abs(x) returns the absolute (positive) value of x
//Math.sin(x) returns the sin of x (given in radians): Angle in radians = (angle in degrees) * PI / 180. The sine value of 90 degrees is 1.
console.log(Math.min(0, 150, 30, 20, -8, -200));
console.log(Math.max(0, 150, 30, 20, -8, -200));
console.log(Math.random());
console.log( Math.log(10));
console.log(Math.log10(1000));
console.log( Math.log2(8));
console.log(Math.floor(Math.random() * 10)); //Math.floor(Math.random() * 10) returns a random integer between 0 and 9 (both included)
console.log(Math.floor(Math.random() * 10) + 1); // Returns a random integer from 1 to 10
console.log();
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }
//Every time you click the button, getRndInteger(min, max) returns a random number between 1 and 10 (both included)