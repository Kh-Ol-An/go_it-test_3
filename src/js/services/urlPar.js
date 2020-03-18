const urlPar = {
  baseUrl: 'https://pixabay.com/api/',
  key: '13247549-a9aeab4c72d6d9175a198a7c3',
  per_page: 20,
};

urlPar.reqPerPage = `&per_page=${urlPar.per_page}`;
urlPar.reqKey = `&key=${urlPar.key}`;

export default urlPar;
