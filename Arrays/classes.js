// Basic Class Example
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

const person1 = new Person('Abid', 20);
person1.greet(); // Output: Hello, my name is Abid and I am 20 years old.


// Class Inheritance Example
class Animal {
    constructor(name) {
        this.name = name;
    }
    
    speak() {
        console.log(`${this.name} makes a noise.`);
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name); // Calls the parent class constructor
        this.breed = breed;
    }
    
    speak() {
        console.log(`${this.name} barks.`);
    }
}

const dog = new Dog('Max', 'Golden Retriever');
dog.speak(); // Output: Max barks.



// Getters and Setters Example
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    
    // Getter for area
    get area() {
        return this.width * this.height;
    }
    
    // Setter for width
    set setWidth(width) {
        this.width = width;
    }
}

const rect = new Rectangle(10, 20);
console.log(rect.area); // Output: 200
rect.setWidth = 15;
console.log(rect.area); // Output: 300



// Static Methods Example
class MathHelper {
    static add(x, y) {
        return x + y;
    }
}

console.log(MathHelper.add(5, 10)); // Output: 15



// Private Fields Example
class BankAccount {
    #balance = 0; // Private field
    
    constructor(owner) {
        this.owner = owner;
    }
    
    deposit(amount) {
        this.#balance += amount;
        console.log(`Deposited $${amount}. New balance: $${this.#balance}`);
    }
    
    getBalance() {
        return this.#balance;
    }
}

const account = new BankAccount('Abid');
account.deposit(100); // Output: Deposited $100. New balance: $100
console.log(account.getBalance()); // Output: 100
