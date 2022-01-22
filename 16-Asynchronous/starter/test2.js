'use strict';

// const promise = new Promise((resolve, reject) => {
//     // after 1 second signal that the job is finished with an error
//     setTimeout(() => reject(new Error('Whoops!')), 1000);
// });

// console.log(promise);

// const prom = new Promise((resolve, reject) => {
//     // the function is executed automatically when the promise is constructed

//     // after 1 second signal that the job is done with the result "done"
//     // setTimeout(() => resolve('done'), 1000);
//     throw new Error('error is good');
// });

// console.log(prom);

async function f() {
    throw new Error('checking');
}

f().catch(x => console.log(x));
