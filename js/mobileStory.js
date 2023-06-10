
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
    this.autoSlide();
    this.thumbItems.forEach((item, i) => {
      this.thumbItems[index].classList.remove('active-slideThumb-color')
    });
    if (index < this.items.length) {
      this.thumbItems.forEach((item, i) => {
        if (index > i) {
          item.classList.add('active-slideThumb-color');
        }
      });
    }
  }


  prev() {
    if (this.active > 0) {
      this.activeSlide(this.active - 1);
    } else {
      this.slide.style.display = 'none'
    }
  }
  next() {
    if (this.active < this.items.length - 1) {
      this.activeSlide(this.active + 1);
    } else if(this.active >= this.items.length - 1){
      this.slide.style.display = 'none';
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

  autoSlide() {
    clearTimeout(this.timeout);
    this.timeout = setTimeout(this.next, 5000);
  }

  
  oppenSlide() {
    const bntStories = document.querySelector('#oppenMobileStories')
    bntStories.addEventListener('click', () => {
      this.slide.style.display = 'flex';
      this.autoSlide();
    })
    
  }
  exitSlide() {
    const exitStories = document.querySelector('#exitMobileStories')
    exitStories.addEventListener('click', () => {
    this.slide.style.display = 'none';
    clearTimeout(this.timeout);
    });
  }


  init() {
    this.items = this.slide.querySelectorAll('.slideItems > *');
    this.thumb = this.slide.querySelector('.slideThumb');
    this.prev = this.prev.bind(this);
    this.next = this.next.bind(this);
    this.addThumbItems();
    this.addNavigation();
    this.activeSlide(0);
    this.oppenSlide()
    this.exitSlide()
  }
}

new SlideStories('slide');