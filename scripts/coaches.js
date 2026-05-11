const carousel = document.querySelector('.coach-items-container');
const slides = document.querySelectorAll('.coach-items');
const prevArrow = document.querySelector('.coach-carousel-arrow--prev');
const nextArrow = document.querySelector('.coach-carousel-arrow--next');

function handleCarouselMove(positive = true) {
  const slideWidth = slides[0].clientWidth;
  carousel.scrollLeft = positive
    ? carousel.scrollLeft + slideWidth
    : carousel.scrollLeft - slideWidth;
}

prevArrow.addEventListener('click', () => handleCarouselMove(false));
nextArrow.addEventListener('click', () => handleCarouselMove(true));
