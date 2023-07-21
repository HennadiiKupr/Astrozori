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
let currentPage = 0;

const SWIPE_THRESHOLD = 100;

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

let touchStartX = 0;

slider.addEventListener('touchstart', (e) => {
  touchStartX = e.touches[currentPage].clientX;
});

slider.addEventListener('touchmove', (e) => {
  const touchMoveX = e.touches[currentPage].clientX;
  const touchDiff = touchStartX - touchMoveX;

  if (Math.abs(touchDiff) > SWIPE_THRESHOLD) {
    slider.style.transition = 'transform 0s'; // Зупиняємо анімацію
    const offset = currentPage * slidesPerPage;
    slider.style.transform = `translateX(-${offset * 358 - touchDiff}px)`; // Зміщуємо слайдер за допомогою touchDiff
  }
});

slider.addEventListener('touchend', (e) => {
  slider.style.transition = 'transform 0.3s ease-in-out'; // Повертаємо анімацію
  const touchEndX = e.changedTouches[0].clientX;
  const touchDiff = touchStartX - touchEndX;

  if (Math.abs(touchDiff) > SWIPE_THRESHOLD) {
    if (touchDiff > 0) {
      goToPage(currentPage + 1);
    } else {
      goToPage(currentPage - 1);
    }
  } else {
    // Якщо руху недостатньо для зміни слайду, то просто оновлюємо сторінку слайдера
    updateSlider();
  }
});
