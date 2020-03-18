import refs from './refs.js';
import imagesPixabayList from '../templates/imagesPixabayList.hbs';

// ф-я создает список изображений в HTML
export default function insertListItems(item) {
  const markup = imagesPixabayList(item);
  refs.galleryList.insertAdjacentHTML('beforeend', markup);
}
