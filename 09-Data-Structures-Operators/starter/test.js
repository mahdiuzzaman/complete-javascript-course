// const rest = new Map();

// rest.set('name', 'Classico Italiano');
// rest.set(1, 'Firenze, Italy');
// // sets key value pair and returns
// // the object reference of th Map
// console.log(rest.set(2, 'Lisbon, Portugal'));

// // chaining because set returns the object reference of the Map
// rest
//     .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
//     .set('open', 11)
//     .set('close', 23)
//     .set(true, 'We are open :D')
//     .set(false, 'We are closed :(');

// console.log(rest.get('name'));
// console.log(rest.get(true));
// console.log(rest.get(1));

// const time = 8;
// console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

// console.log(rest.has('categories'));
// rest.delete(2);
// // rest.clear();

// const arr = [1, 2];
// rest.set(arr, 'Test');
// rest.set(document.querySelector('h1'), 'Heading');
// console.log(rest);
// console.log(rest.size);

// console.log(rest.get(arr));

// // first position is key
// // second position is value
const question = new Map([
    ['question', 'What is the best programming language in the world?'],
    [1, 'C'],
    [2, 'Java'],
    [3, 'JavaScript'],
    ['correct', 3],
    [true, 'Correct 🎉'],
    [false, 'Try again!'],
    [1, 'D'],
]);

console.log(question.get(1));

// console.log(question);

// const openingHours = [];

// // Convert object to map
// console.log(Object.entries(openingHours));
// const hoursMap = new Map(Object.entries(openingHours));
// console.log(hoursMap);

const a = [1, 2, 3];

// a.forEach((v, i, abc) => {
//     console.log(`value is ${v} index is ${i} array is ${abc} this is ${this}`);
// });

const func = function (v, i, abc) {
    console.log(`value is ${v} index is ${i} array is ${abc} this is ${this}`);
};

// a.forEach(func);
