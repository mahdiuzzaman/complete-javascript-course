'use strict';

let data1;

fetch('https://restcountries.com/v3.1/name/portugal')
    .then(response => response.json())
    .then(data => {
        data1 = data;
        return undefined;
    })
    .then(() => console.log(data1));
