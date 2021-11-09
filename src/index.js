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

refs.inputCountry.addEventListener('input', debounce(onInput, DEBOUNCE_DELAY));

function onInput() {
  if (refs.inputCountry.value.trim() === ' ') {
    deleteMarkup();
    return;
  }
  deleteMarkup();

  fetchCountries(refs.inputCountry.value.trim())
    .then(checkInputLength)
    .catch(Notiflix.Notify.failure);

  function checkInputLength(value) {
    if (value.length > 10) {
      Notiflix.Notify.info('Too many matches found. Please enter a more specific name.');
    } else if (value.length >= 2 && value.length <= 10) {
      showCountryList(value);
    } else if (value.length === 1) {
      showCountry(value);
    }
  }
}

function showCountryList(country) {
  const markupList = countryListTemplate({ ...country });
  refs.countryList.innerHTML = markupList;
}

function showCountry(country) {
  const markup = countryCardTemplate(...country);
  refs.countryInfo.innerHTML = markup;
}

function deleteMarkup() {
  refs.countryList.innerHTML = '';
  refs.countryInfo.innerHTML = '';
}
