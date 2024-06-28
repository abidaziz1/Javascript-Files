console.log(Number("3.14") + "\n" +
Number(Math.PI) + "\n" +
Number("    ") + "\n" +
Number("") + "\n" +
Number("99 88") + "\n" +
Number("John") + "\n" )
//The Number() method converts a variable (or value) into a number

//The String() method can convert a number to a string.
//The toString() method converts a number to a string.


typeof "John"                 // Returns "string"
typeof 3.14                   // Returns "number"
typeof NaN                    // Returns "number"
typeof false                  // Returns "boolean"
typeof [1,2,3,4]              // Returns "object"
typeof {name:'John', age:34}  // Returns "object"
typeof new Date()             // Returns "object"
typeof function () {}         // Returns "function"
typeof myCar                  // Returns "undefined" *
typeof null                   // Returns "object"