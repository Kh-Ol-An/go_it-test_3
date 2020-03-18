import refs from './refs.js';

import loadLargeImageHandler from './loadLargeImageHandler.js';
import scrollToUpHandler from './scrollToUpHandler.js';
import apiService from './services/apiService.js';
import clearList from './clearList.js';
import fetchGallegy from './fetchGallegy.js';
import PNotify from 'pnotify/dist/es/PNotify';

refs.searchForm.addEventListener('submit', searchFormSubmitHandler);

// ф-я на отправку формы (на кнопку "search")
function searchFormSubmitHandler(e) {
  e.preventDefault();
  
  refs.galleryList.addEventListener('click', loadLargeImageHandler);
  refs.scrollUpBtn.addEventListener('click', scrollToUpHandler);

  const form = e.currentTarget;
  const input = form.elements.query;
  apiService.searchQuery = input.value;

  clearList();
  apiService.resetPage();

  fetchGallegy();
  
  refs.scrollUpBtn.classList.remove('is-hidden');
  if (input.value === '') {
    PNotify.alert(`Вы не ввели запрос, показаны картинки по умолчанию`);
  } else {
    PNotify.alert(`Показаны картинки по запросу ${input.value}`);
  }
}
