'use strict';

// returns a promise which eventually resolves
// to Response type object which represents a HTTM response
fetch('https://restcountries.com/v3.1/name/portugal')
    .then(response => response.json())
    // returns a promis which eventually resolves to
    // a JS object persed by json()
    .then(data => console.log(data));
