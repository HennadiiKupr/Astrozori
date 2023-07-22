const checkbox = document.getElementById('menu-opener');
const menu = document.getElementById('menu');

window.addEventListener('change', () => {
  if (checkbox.checked) {
    document.body.classList.add('page__body--with-menu');
    window.location.hash = '#menu';
  } else if (window.location.hash === '#menu') {
    console.log(132)
    document.body.classList.remove('page__body--with-menu');
    window.location.hash = ''
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    menu.classList.add('page__menu--opened')
  } else {
    document.body.classList.remove('page__body--with-menu');
    menu.classList.remove('page__menu--opened');
    checkbox.checked = false;
  }
});

window.addEventListener('load', function() {
  if (window.location.hash) {
    window.location.hash = '';
  }
});

function changeTextareaHeight(checkbox) {
  const textarea = checkbox.parentNode.nextElementSibling;
  const firstChild = textarea.firstElementChild;
  if (checkbox.checked) {
    textarea.style.height = '427px';
    firstChild.style.height = '411px';
  } else {
    textarea.style.height = '';
    firstChild.style.height = '';
  }
}

const firstService = document.getElementById('first-service');
firstService.addEventListener('change', function() {
  changeTextareaHeight(this);
});

const secondService = document.getElementById('second-service');
secondService.addEventListener('change', function() {
  changeTextareaHeight(this);
});

const thirdService = document.getElementById('third-service');
thirdService.addEventListener('change', function() {
  changeTextareaHeight(this);
});

const fourthService = document.getElementById('fourth-service');
fourthService.addEventListener('change', function() {
  changeTextareaHeight(this);
});

const fifthService = document.getElementById('fifth-service');
fifthService.addEventListener('change', function() {
  changeTextareaHeight(this);
});

const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const pagination = document.querySelector('.pagination');

const totalSlides = slides.length;
const slidesPerPage = 1;
let currentPage = 2;

function updateVisibleDots() {
  const dots = Array.from(pagination.children);
  dots.forEach((dot, index) => {
    dot.style.display = (Math.abs(currentPage - index) <= 1) ? 'inline-block' : 'none';
  });
}

function updateSlider() {
  const offset = currentPage * slidesPerPage;
  slider.style.transform = `translateX(-${offset * 358}px)`;
}

function updatePagination() {
  const dots = Array.from(pagination.children);
  dots.forEach((dot, index) => {
    dot.classList.toggle('active', index === currentPage);
  });
}

function goToPage(page) {
  currentPage = Math.max(0, Math.min(page, Math.ceil(totalSlides / slidesPerPage) - 1));
  updateSlider();
  updatePagination();
  updateVisibleDots();
}

function setupPagination() {
  const numPages = Math.ceil(totalSlides / slidesPerPage);
  for (let i = 0; i < numPages; i++) {
    const dot = document.createElement('span');
    dot.addEventListener('click', () => goToPage(i));
    pagination.appendChild(dot);
  }
}

setupPagination();
updatePagination();
updateVisibleDots(); 

const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
if (isSafari) {
  slider.addEventListener('touchmove', (e) => {
    e.preventDefault();
  });
}

// Swipe Handling
let touchStartX = 0;
let touchEndX = 0;

slider.addEventListener('touchstart', (e) => {
  touchStartX = e.touches[0].clientX;
});

slider.addEventListener('touchend', (e) => {
  touchEndX = e.changedTouches[0].clientX;
  const touchDiff = touchStartX - touchEndX;

  if (touchDiff > 50) {
    goToPage(currentPage + 1);
  } else if (touchDiff < -50) {
    goToPage(currentPage - 1);
  }
});

const serviceSlider = document.querySelector('.service__slider');
const serviceSlides = document.querySelectorAll('.service__slide');
const servicePagination = document.querySelector('.services__pagination');

const totalServiceSlides = slides.length;
const serviceSlidesPerPage = 3;
let currentSlide = 2;

function updateSlider() {
  const offset = currentPage * slidesPerPage;
  slider.style.transform = `translateX(-${offset * 358}px)`;
}

function updatePagination() {
  const dots = Array.from(pagination.children);
  dots.forEach((dot, index) => {
    dot.classList.toggle('active', index === currentPage);
  });
}

function goToPage(page) {
  currentPage = Math.max(0, Math.min(page, Math.ceil(totalSlides / slidesPerPage) - 1));
  updateSlider();
  updatePagination();
  updateVisibleDots();
}

setupPagination();
updatePagination();
updateVisibleDots(); 

const firstServiceSlide = document.querySelector('.first-slide')
const servicesSlides = document.querySelectorAll('.services__slide');
const sliderHeaders = [];
const sliderTexts = [];
const sliderPrices = [];

servicesSlides.forEach((slide, index) => {
  sliderHeaders.push(slide.querySelector('h2'));
  sliderTexts.push(slide.querySelector('.services__slide-text'));
  sliderPrices.push(slide.querySelector('.services__slide-price'));
  console.log(sliderPrices)

  slide.addEventListener('click', () => {
    for (let i = 0; i < servicesSlides.length; i++) {
      servicesSlides[i].classList.remove(
        'services__slide--is-active', 
        'services__slide--next', 
        'services__slide--prev', 
        'first', 
        'second', 
        'third', 
        'fourth', 
        'fifth'
      );

      sliderHeaders[i].classList.remove(
        'services__slide-header--is-active', 
        'services__slide-header--near', 
      );

      sliderTexts[i].classList.remove(
        'services__slide-text--is-active', 
        'services__slide-text--near', 
      );

      sliderPrices[i].classList.remove(
        'services__slide-price--is-active', 
        'services__slide-price--near', 
      );
    }

    switch(index) {
      case 0:
        for (const slide of servicesSlides) {
          slide.classList.add('first')
        }

        break;

      case 1:
        for (const slide of servicesSlides) {
          slide.classList.add('second')
        }

        break;

      case 2:
        for (const slide of servicesSlides) {
          slide.classList.add('third')
        }

        break;

      case 3:
        for (const slide of servicesSlides) {
          slide.classList.add('fourth')
        }

        break;

      case 4:
        for (const slide of servicesSlides) {
          slide.classList.add('fifth')
        }

        break;

      default:
        break;
    }

    slide.classList.add('services__slide--is-active');
    sliderHeaders[index].classList.add('services__slide-header--is-active');
    sliderTexts[index].classList.add('services__slide-text--is-active');
    sliderPrices[index].classList.add('services__slide-price--is-active');

    if (index > 0) {
      servicesSlides[index - 1].classList.add('services__slide--prev');
      sliderHeaders[index - 1].classList.add('services__slide-header--near');
      sliderTexts[index - 1].classList.add('services__slide-text--near');
      sliderPrices[index - 1].classList.add('services__slide-price--near');
    }

    if (index < servicesSlides.length - 1) {
      servicesSlides[index + 1].classList.add('services__slide--next');
      sliderHeaders[index + 1].classList.add('services__slide-header--near');
      sliderTexts[index + 1].classList.add('services__slide-text--near');
      sliderPrices[index + 1].classList.add('services__slide-price--near');
    }
  });
});