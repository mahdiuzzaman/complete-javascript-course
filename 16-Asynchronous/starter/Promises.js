'use strict';

// Consuming Promises
// Chaining Promises
// Handling Rejected Promises
// Throwing Errors Manually
// const btn = document.querySelector('.btn-country');

const countriesContainer = document.querySelector('.countries');

const renderCountry = function (data, className = '') {
    const html = `
  <article class="country ${className}">
    <img class="country__img" src="${data.flags.svg}" />
    <div class="country__data">
      <h3 class="country__name">${data.name.common}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(
            +data.population / 1000000
        ).toFixed(1)} M people</p>
      <p class="country__row"><span>🗣️</span>${Object.entries(data.languages)[0][1]}</p>
      <p class="country__row"><span>💰</span>${Object.entries(data.currencies)[0][0]}</p>
    </div>
  </article>
  `;
    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
};

// then is used assuming promise is fulfilled
// then calls a callback function as soon as
// promise is fulfilled or reuslt is available
// argumets is the fulfilled value rersulted
// by the promise
// this response is a http response
// of type Response

// json function is also
// a async function and
// returns a new Promise
// json() parse the body of Response
// and returns a js object of http response body

const getCountryData = function (country) {
    // fetch function returns promise
    fetch(`https://restcountries.com/v3.1/name/${country}`)
        .then(response => response.json())
        .then(data => renderCountry(data[0]));
};

getCountryData('portugal');

// const getCountryData = function (country) {
//     fetch(`https://restcountries.eu/rest/v2/name/${country}`)
//         .then(function (response) {
//             console.log(response);
//             return response.json();
//         })
//         .then(function (data) {
//             console.log(data);
//             renderCountry(data[0]);
//         });
// };

// const getCountryData = function (country) {
//     // Country 1
//     fetch(`https://restcountries.eu/rest/v2/name/${country}`)
//         .then(response => {
//             console.log(response);

//             if (!response.ok)
//                 throw new Error(`Country not found (${response.status})`);

//             return response.json();
//         })
//         .then(data => {
//             renderCountry(data[0]);
//             // const neighbour = data[0].borders[0];
//             const neighbour = 'dfsdfdef';

//             if (!neighbour) return;

//             // Country 2
//             return fetch(`https://restcountries.eu/rest/v2/alpha/${neighbour}`);
//         })
//         .then(response => {
//             if (!response.ok)
//                 throw new Error(`Country not found (${response.status})`);

//             return response.json();
//         })
//         .then(data => renderCountry(data, 'neighbour'))
//         .catch(err => {
//             console.error(`${err} 💥💥💥`);
//             renderError(`Something went wrong 💥💥 ${err.message}. Try again!`);
//         })
//         .finally(() => {
//             countriesContainer.style.opacity = 1;
//         });
// };

// const getCountryData = function (country) {
//     // Country 1
//     getJSON(
//         `https://restcountries.eu/rest/v2/name/${country}`,
//         'Country not found'
//     )
//         .then(data => {
//             renderCountry(data[0]);
//             const neighbour = data[0].borders[0];

//             if (!neighbour) throw new Error('No neighbour found!');

//             // Country 2
//             return getJSON(
//                 `https://restcountries.eu/rest/v2/alpha/${neighbour}`,
//                 'Country not found'
//             );
//         })

//         .then(data => renderCountry(data, 'neighbour'))
//         .catch(err => {
//             console.error(`${err} 💥💥💥`);
//             renderError(`Something went wrong 💥💥 ${err.message}. Try again!`);
//         })
//         .finally(() => {
//             countriesContainer.style.opacity = 1;
//         });
// };

// btn.addEventListener('click', function () {
//     getCountryData('portugal');
// });
