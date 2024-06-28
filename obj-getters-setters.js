//Getters and setters allow you to get and set object properties via methods.

const person = {
    firstName: "John",
    lastName: "Doe",
    language: "en",
    vasa: "NO",
    get lang() {     //get keyword
      return this.language.toUpperCase();
    },

    set lang(value){
        this.language = value;
    }
  };
console.log(person.lang);

//This example uses a lang property to set the value of the language property.
person.language = "bng";
console.log(person.lang);



const person1 = {
    firstName: "John",
    lastName: "Doe",
    get fullName() {
      return this.firstName + " " + this.lastName;
    }
  };

console.log(person1.fullName); //simpler syntax other than function

