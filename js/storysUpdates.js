const sliderCarousel = document.querySelector('#contentStoryUpdates>section'),
firstFigure = sliderCarousel.querySelectorAll('figure')[0];
const arrowButtons = document.querySelectorAll('#buttonStoryUpdates>button');

console.log(arrowButtons)

let isCursorStart = false, prevPageX, prevScrollLeft;
firstFigureWidth = firstFigure.clientWidth + 32;

arrowButtons.forEach(icon => {
  icon.addEventListener('click', () => {
    sliderCarousel.scrollLeft += icon.id == 'left' ? - firstFigureWidth : firstFigureWidth;
  })
})

const cursorStart = (moviment) => {
  sliderCarousel.classList.add('cursorOnn');
  isCursorStart = true;
  prevPageX = moviment.pageX;
  prevScrollLeft = sliderCarousel.scrollLeft;
}

const cursorOnn = (moviment) => {
  if(!isCursorStart) return;
  moviment.preventDefault();
  let position = moviment.pageX - prevPageX;
  sliderCarousel.scrollLeft = prevScrollLeft - position;
}

const cursorEnd = () => {
  sliderCarousel.classList.remove('cursorOnn');
  isCursorStart = false;
}

sliderCarousel.addEventListener('mousedown', cursorStart);
sliderCarousel.addEventListener('mousemove', cursorOnn);
sliderCarousel.addEventListener('mouseup', cursorEnd);