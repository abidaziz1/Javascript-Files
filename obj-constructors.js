// Constructor function for Person objects
function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
    this.changeName = function(name){
        this.lastName = name;
    }
  }
  
  // Create two Person objects
  const myFather = new Person("John", "Doe", 50, "blue");
  const myMother = new Person("Sally", "Rally", 48, "green");

  console.log("My father is " + myFather.age + ". My mother is " + myMother.age + ".");

// Add nationality to first object. Adding a (property)
myFather.nationality = "English";
console.log("My father is " + myFather.nationality);

//Adding a new method to an existing object is easy
myFather.name = function() {
    return this.firstName + " " + this.lastName;
  };
console.log("My father is " + myFather.name());


//Adding a Property to a Constructor
Person.nationality= "English";  //won't work
//You cannot add a new property to an object constructor the same way you add a new property to an existing object.
//To add a new property to a constructor, you must add it to the constructor function. 
// this.nationality = "English"; diye likhbe

//similar way te method define korte paro constructor er vitore

//name method create kore ekhon name change korbo
myMother.changeName("Shirin");
console.log("My mother's last name is " + myMother.lastName);




//There is no need to use new String(), new Number(), new Boolean(), new Array(), and new RegExp()
/*
JavaScript has object versions of the primitive data types String, Number, and Boolean. But there is no reason to create complex objects. Primitive values are much faster:

Use string literals "" instead of new String().

Use number literals 50 instead of new Number().

Use boolean literals true / false instead of new Boolean().

Use object literals {} instead of new Object().

Use array literals [] instead of new Array().

Use pattern literals /()/ instead of new RegExp().

Use function expressions () {} instead of new Function().
*/