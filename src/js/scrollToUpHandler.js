// ф-я на кнопку "go up"
export default function scrollToUpHandler() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}
