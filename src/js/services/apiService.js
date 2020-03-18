import urlPar from './urlPar.js';

export default {
  page: 1,
  query: '',
  fetchGallegy() {
    const reqPar = `?image_type=photo&orientation=horizontal`;
    const reqQuery = `&q=${this.query}`;
    const reqPage = `&page=${this.page}`;
    const reqAllPar =
      urlPar.baseUrl +
      reqPar +
      reqQuery +
      urlPar.reqPerPage +
      urlPar.reqKey +
      reqPage;
    return fetch(reqAllPar)
      .then(response => response.json())
      .then(parsedResponse => {
        this.increment();
        return parsedResponse.hits;
      })
      .catch(error => console.warn(error));
  },
  get searchQuery() {
    return this.query;
  },
  set searchQuery(str) {
    this.query = str;
  },
  increment() {
    this.page += 1;
  },
  resetPage() {
    this.page = 1;
  },
};
