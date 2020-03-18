import apiService from './services/apiService.js';
import spinner from './spinner.js';
import insertListItems from './insertListItems.js';
import refs from './refs.js';

// ф-я комплекс загрузки изображений
export default function fetchGallegy() {
  spinner.show();
  apiService
    .fetchGallegy()
    .then(hits => {
      insertListItems(hits);
      spinner.hide();
      window.scrollBy({
        top: window.innerHeight,
        behavior: 'smooth',
      });
      
      function fn(e) {
        if (e[0].isIntersecting) {
          fetchGallegy();
          observer.disconnect();
        }
      }
      const li = refs.galleryList.lastElementChild;
      const obj = {
        threshold: 1,
      };
      const observer = new IntersectionObserver(fn, obj);
      observer.observe(li);
    })
    .catch(error => {
      console.warn(error);
    });
}
