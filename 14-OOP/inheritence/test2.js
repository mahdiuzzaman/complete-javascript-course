/* eslint-disable */

'use strict';

const Person = function (firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
    console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
    Person.call(this, firstName, birthYear);
    this.course = course;
};

// Linking prototypes
// create new  object using Object.create
// this new object has property __proto__ , constructor etc 
// set __proto__ === Person.prototype in the new object 
// set __proto__ is done by Object.create

// we could also do Student.prototype.__pro__ = Person.prototype 
// but it is not recommended and very slow for optimization 
// Student.prototype.__proto__ = Person.prototype; (bad)

// replace the object assinged to Student.prototype property
// with newly created object 
Student.prototype = Object.create(Person.prototype);
// now Student.prototype.__proto__ === Person.prototype 

// change constructor property of the newly created object
Student.prototype.constructor = Student;

Student.prototype.introduce = function () {
    console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const mike = new Student('Mike', 2020, 'Computer Science');

// The Prototypal Inheritance chain 
console.log(mike.__proto__ === Student.prototype);

console.log(Student.prototype.__proto__ === Person.prototype);

console.log(Person.prototype.__proto__ === Object.prototype);

console.log(Object.prototype.__proto__ === null);
