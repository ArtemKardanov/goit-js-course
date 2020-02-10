import articleCountryTemplate from './templates/article-country-item.hbs';
import countryListTemplate from './templates/country-item-list.hbs'
import countryUtil from './utils/country-util';
import spinner from './spinner'

import PNotify from '../node_modules/pnotify/dist/es/PNotify.js';

const debounce = require('lodash.debounce');

const refs = {
  searchForm: document.querySelector('#search-form'),

  queriedCountry: document.querySelector('#queried-country'),
};

refs.searchForm.addEventListener('input', debounce(searcFormInputHandler, 500));

function searcFormInputHandler(e) {
  e.preventDefault();

  const input = e.target;
  const inputValue = input.value;

  clearListItems();

  countryUtil.searchQuery = inputValue;

  spinner.hide();

  countryUtil.fetchCountries().then(data => {

    if (data.length == 1) {
      const markup = buildCountryArticleMarkup(data[0]);

      insertCountryItem(markup)
    } else if (data.length >= 2 && data.length <= 10) {
      const markupCountryList = buildCountryListMarkup(data);

      insertCountryItem(markupCountryList);
    } else if (data.length > 10) {
      PNotify.alert('Too many matches found. Please enter a more specific query!');
    };

    spinner.show()
  }).catch(error => console.warn(error));

  input.value = '';
};

function insertCountryItem(item) {
  refs.queriedCountry.insertAdjacentHTML('beforeend', item);
};

function buildCountryArticleMarkup(item) {
  return articleCountryTemplate(item);
};

function buildCountryListMarkup(items) {
  return countryListTemplate(items);
};

function clearListItems() {
  refs.queriedCountry.innerHTML = '';
};
