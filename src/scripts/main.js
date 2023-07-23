const checkbox = document.getElementById('menu-opener');
const menu = document.getElementById('menu');

window.addEventListener('change', () => {
  if (checkbox.checked) {
    document.body.classList.add('page__body--with-menu');
    window.location.hash = '#menu';
  } else if (window.location.hash === '#menu') {
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

const servicesSlides = document.querySelectorAll('.services__slide');
const sliderHeaders = [];
const sliderTexts = [];
const sliderPrices = [];

servicesSlides.forEach((slide, index) => {
  sliderHeaders.push(slide.querySelector('h2'));
  sliderTexts.push(slide.querySelector('.services__slide-text'));
  sliderPrices.push(slide.querySelector('.services__slide-price'));

  slide.addEventListener('click', () => {
    for (let i = 0; i < servicesSlides.length; i++) {
      servicesSlides[i].classList.remove(
        'first', 
        'second', 
        'third', 
        'fourth', 
        'fifth',
        'thirdRight',
        'firstSlide',
        'secondSlide',
        'thirdSlide',
        'fourthSlide',
        'fifthSlide',
        'firstSlidePrev',
        'secondSlidePrev',
        'thirdSlidePrev',
        'fourthSlidePrev',
        'secondSlideNext',
        'thirdSlideNext',
        'fourthSlideNext',
        'fifthSlideNext'
      );
    }

    switch(index) {
      case 0:
        for (let i = 0; i < servicesSlides.length; i++) {
          if (i === 0) {
            servicesSlides[i].classList.add('firstSlide')
            continue;
          } else if (i === 1) {
            servicesSlides[i].classList.add('secondSlideNext')
            continue;
          } else {
            servicesSlides[i].classList.add('first')
          }   
        }

        break;

      case 1:
        for (let i = 0; i < servicesSlides.length; i++) {
          if (i === 0) {
            servicesSlides[i].classList.add('firstSlidePrev');
            continue;
          } else if (i === 1) {
            servicesSlides[i].classList.add('secondSlide');
            continue;
          } else if (i === 2) {
            servicesSlides[i].classList.add('thirdSlideNext');
            continue;
          } else {
            servicesSlides[i].classList.add('second')
          }   
        }

        break;

      case 2:
        for (let i = 0; i < servicesSlides.length; i++) {
          if (i === 2) {
            slide.classList.add('thirdSlide')
          } else {
            slide.classList.add('third')
          }   
        }

        break;

      case 3:
        for (let i = 0; i < servicesSlides.length; i++) {
          if (i === 3) {
            slide.classList.add('fourthSlide')
          } else {
            slide.classList.add('fourth')
          }   
        }
        break;

      case 4:
        for (let i = 0; i < servicesSlides.length; i++) {
          if (i === 4) {
            slide.classList.add('fifthSlide')
          } else {
            slide.classList.add('fifth')
          }   
        }
        break;

        break;

      default:
        break;
    }
  });
});

const paginator = document.querySelectorAll('.services__pagination-item');
let currentIndex = 0;
const paginationArray = Array.from(paginator);
paginationArray.shift();
paginationArray.pop();

paginationArray.forEach((item, index) => {
  item.addEventListener('click', () => {
    currentIndex = index; 

    paginator.forEach((item) => {
      item.classList.remove(
        'firstPaginator',
        'secondPaginator',
        'thirdPaginator',
        'fourthPaginator',
        'fifthPaginator'
      )
    })

    switch(currentIndex) {
      case 0:
        for (const p of paginator) {
          p.classList.add('firstPaginator')
        }

        break;

      case 1:
        for (const p of paginator) {
          p.classList.add('secondPaginator')
        }

        break;

      case 2:
        for (const p of paginator) {
          p.classList.add('thirdPaginator')
        }

        break;

      case 3:
        for (const p of paginator) {
          p.classList.add('fourthPaginator')
        }

        break;

      case 4:
        for (const p of paginator) {
          p.classList.add('fifthPaginator')
        }

        break;

      default:
        break;
    }

    updateServiceSlider();
  });
});

function updateServiceSlider() {
  servicesSlides.forEach((slide, index) => {
    slide.classList.remove(
      'first', 
      'second', 
      'third', 
      'fourth', 
      'fifth',
      'thirdRight',
      'firstSlide',
      'secondSlide',
      'thirdSlide',
      'fourthSlide',
      'fifthSlide',
      'firstSlidePrev',
      'secondSlidePrev',
      'thirdSlidePrev',
      'fourthSlidePrev',
      'secondSlideNext',
      'thirdSlideNext',
      'fourthSlideNext',
      'fifthSlideNext'
    );

  });

  switch(currentIndex) {
    case 0:
      for (let i = 0; i < servicesSlides.length; i++) {
        if (i === 0) {
          servicesSlides[i].classList.add('firstSlide')
          continue;
        } else if (i === 1) {
          servicesSlides[i].classList.add('secondSlideNext')
          continue;
        } else {
          servicesSlides[i].classList.add('first')
        }   
      }

      break;

    case 1:
      for (let i = 0; i < servicesSlides.length; i++) {
        if (i === 0) {
          servicesSlides[i].classList.add('firstSlidePrev');
          continue;
        } else if (i === 1) {
          servicesSlides[i].classList.add('secondSlide');
          continue;
        } else if (i === 2) {
          servicesSlides[i].classList.add('thirdSlideNext');
          continue;
        } else {
          servicesSlides[i].classList.add('second')
        }   
      }

      break;

    case 2:
      for (let i = 0; i < servicesSlides.length; i++) {
        if (i === 0) {
          servicesSlides[i].classList.add('third');
        } else if (i === 1) {
          servicesSlides[i].classList.add('secondSlidePrev');
          continue;
        } else if (i === 2) {
          servicesSlides[i].classList.add('thirdSlide');
          continue;
        } else if (i === 3) {
          servicesSlides[i].classList.add('fourthSlideNext');
          continue;
        } else {
          servicesSlides[i].classList.add('thirdRight')
        }   
      }

      break;

    case 3:
      for (let i = 0; i < servicesSlides.length; i++) {
        if (i === 2) {
          servicesSlides[i].classList.add('thirdSlidePrev');
          continue;
        } else if (i === 3) {
          servicesSlides[i].classList.add('fourthSlide');
          continue;
        } else if (i === 4) {
          servicesSlides[i].classList.add('fifthSlideNext');
          continue;
        } else {
          servicesSlides[i].classList.add('fourth');
        }   
      }
      break;

    case 4:
      for (let i = 0; i < servicesSlides.length; i++) {
        if (i === 3) {
          servicesSlides[i].classList.add('fourthSlidePrev');
          continue;
        } else if (i === 4) {
          servicesSlides[i].classList.add('fifthSlide');
          continue;
        } else {
          servicesSlides[i].classList.add('fifth');
        }   
      }
      break;

    default:
      break;
  }

  paginationArray.forEach((item, index) => {
    if (index === currentIndex) {
      item.classList.add('services__pagination-item--is-active');
    } else {
      item.classList.remove('services__pagination-item--is-active');
    }
  });
}

// Add click event for each slide
servicesSlides.forEach((slide, index) => {
  slide.addEventListener('click', () => {
    currentIndex = index;
    if (currentIndex >= servicesSlides.length) {
      currentIndex = 0;
    }

    paginator.forEach((item) => {
      item.classList.remove(
        'firstPaginator',
        'secondPaginator',
        'thirdPaginator',
        'fourthPaginator',
        'fifthPaginator'
      )
    })

    switch(currentIndex) {
      case 0:
        for (const p of paginator) {
          p.classList.add('firstPaginator')
        }

        break;

      case 1:
        for (const p of paginator) {
          p.classList.add('secondPaginator')
        }

        break;

      case 2:
        for (const p of paginator) {
          p.classList.add('thirdPaginator')
        }

        break;

      case 3:
        for (const p of paginator) {
          p.classList.add('fourthPaginator')
        }

        break;

      case 4:
        for (const p of paginator) {
          p.classList.add('fifthPaginator')
        }

        break;

      default:
        break;
    }
    updateServiceSlider();
  });
});


const feedbacksSlides = document.querySelectorAll('.feedbacks__slide');

feedbacksSlides.forEach((slide, index) => {
  slide.addEventListener('click', () => {
    for (let i = 0; i < feedbacksSlides.length; i++) {
      feedbacksSlides[i].classList.remove(
        'firstFeedback', 
        'secondFeedback', 
        'thirdFeedback', 
        'fourthFeedback', 
        'fifthFeedback'
      );
    }

    switch(index) {
      case 0:
        for (const slide of feedbacksSlides) {
          slide.classList.add('firstFeedback')
        }

        break;

      case 1:
        for (const slide of feedbacksSlides) {
          slide.classList.add('secondFeedback')
        }

        break;

      case 2:
        for (const slide of feedbacksSlides) {
          slide.classList.add('thirdFeedback')
        }

        break;

      case 3:
        for (const slide of feedbacksSlides) {
          slide.classList.add('fourthFeedback')
        }

        break;

      case 4:
        for (const slide of feedbacksSlides) {
          slide.classList.add('fifthFeedback')
        }

        break;

      default:
        break;
    }
  });
});

const feedbackPaginator = document.querySelectorAll('.feedbacks__pagination-item');
let currentFeedbackIndex = 0;
const feedbackPaginatorArray = Array.from(feedbackPaginator);
feedbackPaginatorArray.shift();
feedbackPaginatorArray.pop();

feedbackPaginatorArray.forEach((item, index) => {
  item.addEventListener('click', () => {
    currentFeedbackIndex = index; 

    feedbackPaginator.forEach((item) => {
      item.classList.remove(
        'firstPaginator',
        'secondPaginator',
        'thirdPaginator',
        'fourthPaginator',
        'fifthPaginator'
      )
    })

    switch(currentFeedbackIndex) {
      case 0:
        for (const p of feedbackPaginator) {
          p.classList.add('firstPaginator')
        }

        break;

      case 1:
        for (const p of feedbackPaginator) {
          p.classList.add('secondPaginator')
        }

        break;

      case 2:
        for (const p of feedbackPaginator) {
          p.classList.add('thirdPaginator')
        }

        break;

      case 3:
        for (const p of feedbackPaginator) {
          p.classList.add('fourthPaginator')
        }

        break;

      case 4:
        for (const p of feedbackPaginator) {
          p.classList.add('fifthPaginator')
        }

        break;

      default:
        break;
    }

    updateFeedbackSlider();
  });
});

function updateFeedbackSlider() {
  feedbacksSlides.forEach((slide, index) => {
    slide.classList.remove(
      'firstFeedback',
      'secondFeedback',
      'thirdFeedback',
      'fourthFeedback',
      'fifthFeedback'
    );
  });

  switch(currentFeedbackIndex) {
    case 0:
      for (const slide of feedbacksSlides) {
        slide.classList.add('firstFeedback')
      }

      break;

    case 1:
      for (const slide of feedbacksSlides) {
        slide.classList.add('secondFeedback')
      }

      break;

    case 2:
      for (const slide of feedbacksSlides) {
        slide.classList.add('thirdFeedback')
      }

      break;

    case 3:
      for (const slide of feedbacksSlides) {
        slide.classList.add('fourthFeedback')
      }

      break;

    case 4:
      for (const slide of feedbacksSlides) {
        slide.classList.add('fifthFeedback')
      }

      break;

    default:
      break;
  }

  feedbackPaginatorArray.forEach((item, index) => {
    if (index === currentFeedbackIndex) {
      item.classList.add('feedbacks__pagination-item--is-active');
    } else {
      item.classList.remove('feedbacks__pagination-item--is-active');
    }
  });
}

feedbacksSlides.forEach((slide, index) => {
  slide.addEventListener('click', () => {
    currentFeedbackIndex = index;
    if (currentFeedbackIndex >= feedbacksSlides.length) {
      currentFeedbackIndex = 0;
    }

    feedbackPaginator.forEach((item) => {
      item.classList.remove(
        'firstPaginator',
        'secondPaginator',
        'thirdPaginator',
        'fourthPaginator',
        'fifthPaginator'
      )
    })

    switch(currentFeedbackIndex) {
      case 0:
        for (const p of feedbackPaginator) {
          p.classList.add('firstPaginator')
        }

        break;

      case 1:
        for (const p of feedbackPaginator) {
          p.classList.add('secondPaginator')
        }

        break;

      case 2:
        for (const p of feedbackPaginator) {
          p.classList.add('thirdPaginator')
        }

        break;

      case 3:
        for (const p of feedbackPaginator) {
          p.classList.add('fourthPaginator')
        }

        break;

      case 4:
        for (const p of feedbackPaginator) {
          p.classList.add('fifthPaginator')
        }

        break;

      default:
        break;
    }
    updateFeedbackSlider();
  })
});