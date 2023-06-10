
class SlideStories {
  constructor(id) {
    this.slide = document.querySelector(`[data-slide="${id}"]`);
    this.active = 0;
    this.init();
  }
  activeSlide(index) {
    this.active = index;
    this.items.forEach(item => item.classList.remove('active-Stories'));
    this.items[index].classList.add('active-Stories');
    this.thumbItems.forEach(item => item.classList.remove('active-slideThumb'));
    this.thumbItems[index].classList.add('active-slideThumb');
  }

  prev() {
    if(this.active > 0) {
      this.activeSlide(this.active - 1);
    } else {
      this.activeSlide(this.items.length - 1);
    }
  }
  next() {
    if(this.active < this.items.length - 1) {
      this.activeSlide(this.active + 1);
    } else {
      this.activeSlide(0);
    }
  }
  addNavigation() {
    const prevBtn = this.slide.querySelector('.btnSlidePrev');
    const nextBtn = this.slide.querySelector('.btnSlideNext');
    prevBtn.addEventListener('click', this.prev);
    nextBtn.addEventListener('click', this.next);
  }

  addThumbItems() {
    this.items.forEach(() => (this.thumb.innerHTML += `<span></span>`));
    this.thumbItems = Array.from(this.thumb.children);
    console.log(this.thumbItems)
  }

  init() {
    this.items = this.slide.querySelectorAll('.slideItems > *');
    this.thumb = this.slide.querySelector('.slideThumb');
    this.prev = this.prev.bind(this);
    this.next = this.next.bind(this);
    this.addThumbItems();
    this.addNavigation();
    this.activeSlide(0);
  }
}

new SlideStories('slide');