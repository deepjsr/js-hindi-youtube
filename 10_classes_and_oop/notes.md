# javascript and classes

## OOP its aprogramming paradiagm 

## Object
-collectin of properties and methods
- toLowerCase

## parts of OOP
object leteral
-constructor function
-prorotypes
- Classes
-Instances(new ,this)

## 4 pilers
Abstraction
Encapsulation
Inheritence
Polymorphism



# Object-Oriented Programming Concepts in JavaScript

## Abstraction
Abstraction is the concept of hiding the complex implementation details and showing only the necessary features of an object. It helps in reducing programming complexity and effort.

```javascript
class Car {
    constructor(model, year) {
        this.model = model;
        this.year = year;
    }

    displayDetails() {
        console.log(`Model: ${this.model}, Year: ${this.year}`);
    }
}

const myCar = new Car('Toyota', 2022);
myCar.displayDetails();
// Output: Model: Toyota, Year: 2022
```

## Bhind the scene of  new keyword
/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.
