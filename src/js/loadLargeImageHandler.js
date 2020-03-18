import largeImagePixabay from '../templates/largeImagePixabay.hbs';
import * as basicLightbox from 'basiclightbox';

// ф-я загрузки большого изображения с помощью "basicLightbox"
export default function loadLargeImageHandler(e) {
  window.addEventListener('keydown', keyPressHandler);
  const instance = basicLightbox.create(
    largeImagePixabay(e.target.dataset.source),
  );
  if (e.target.localName === 'img') {
    instance.show();
  }
  function keyPressHandler(e) {
    if (e.code === 'Escape') {
      instance.close();
      window.removeEventListener('keydown', keyPressHandler);
    }
  }
}
