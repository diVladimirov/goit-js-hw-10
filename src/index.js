import './css/styles.css';
import Notiflix from 'notiflix';
import debounce from 'lodash.debounce';
import { fetchCountries } from '../src/js/fetchCountries';
import countryListTemplate from './templates/country-list.hbs';
import countryCardTemplate from './templates/country-info.hbs';

const DEBOUNCE_DELAY = 300;

const refs = {
  inputCountry: document.querySelector('#search-box'),
  countryList: document.querySelector('.country-list'),
  countryInfo: document.querySelector('.country-info'),
};

// refs.inputCountry.addEventListener('submit', debounce(onSubmit, DEBOUNCE_DELAY));
// refs.inputCountry.addEventListener('input', debounce(onInput, DEBOUNCE_DELAY));

// function onSubmit(event) {
//   event.preventDefault();
//   const country =
// }

// function onInput(event) {
//   fetchCountries(refs.inputCountry.value);
// }

// console.log(refs.inputCountry);
// console.log(refs.countryList);
// console.log(refs.countryInfo);

fetch('https://restcountries.com/v3.1/name/peru')
  .then(response => {
    return response.json();
  })
  .then(country => {
    console.log(country);

    const markup = countryCardTemplate(country);
    console.log(markup);
    refs.countryInfo.innerHTML = markup;
  })
  .catch(error => {
    console.log(error);
  });

// fetch('https://restcountries.com/v3.1/name/usa')
//   .then(response => {
//     return response.json();
//   })
//   .then(country => {
//     console.log(country);
//     for (const countr of country) {
//       console.log(countr.capital[0]);
//       console.log(countr.name.official);
//       console.log(countr.population);
//       console.log(countr.flags.svg);
//       console.log(countr.languages.eng);
//       const lang = countr.languages;
//       console.log(lang);
//       for (const la of lang) {
//         console.log(la);
//       }
//     }
//   });
