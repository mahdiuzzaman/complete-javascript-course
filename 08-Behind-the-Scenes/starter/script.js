/* eslint-disable prefer-rest-params */
/* eslint-disable object-shorthand */
/* eslint-disable func-names */

'use strict';

function add(a, b) {
    console.log(`Sum of a nd b is = ${a + b}`);
    for (let i = 0; i < arguments.length; i++) {
        console.log(arguments[i]);
    }
}

add(1, 2, 3, 4, 5, 6);
