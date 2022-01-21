/* eslint-disable */

'use strict';

const motorbike = {
    model: 'honda',
};

const test = motorbike;

// right now motorbike.__proto__ === Object.prototype
// thats why it can access 
// Object.prototype.propertyIsEnumerable
// a object  delegates behaviour through __proto__
// if not found in object's own proerty it looks
// in prototype chain starts with motorbike.__proto__
// and ends with Object.prototype

//console.log(motorbike.propertyIsEnumerable('model'));

const apache = {
    year: 1992
};

// a object  delegates behaviour through __proto__
// motorbike.__proto__ = Object.create(apache);

// manually manypulating proto is dicurraged
motorbike.__proto__ = apache;

console.log(motorbike.year);
console.log(motorbike.__proto__.__proto__ === apache);

// console.log(apache);
// console.log(motorbike.__proto__);


// console.log(apache.__proto__.__proto__);

// console.log(motorbike.year);

// console.log(motorbike.toString());
