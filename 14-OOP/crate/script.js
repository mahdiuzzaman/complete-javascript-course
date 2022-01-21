/* eslint-disable */


'use strict'

const PersonProto = {
    calcAge() {
        console.log(2037 - this.birthYear);
    },

    init(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    },
};

const steven = Object.create(PersonProto);

const StudentProto = Object.create(PersonProto);

const jay = Object.create(StudentProto);

console.log(PersonProto.__proto__ === Object.prototype);
console.log(StudentProto.__proto__ === PersonProto);
console.log(jay.__proto__ === StudentProto);

