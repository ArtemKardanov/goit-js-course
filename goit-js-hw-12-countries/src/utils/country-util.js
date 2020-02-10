const baseUrl = 'https://restcountries.eu/rest/v2/name/';

export default {
  query: '',

  fetchCountries() {
    const nameOfCountry = `${this.query}`;

    return fetch(baseUrl + nameOfCountry).then(response => response.json());
  },

  get searchQuery() {
    return this.query
  },

  set searchQuery(string) {
    this.query = string;
  },
};
