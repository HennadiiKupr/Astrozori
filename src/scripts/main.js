const checkbox = document.getElementById('menu-opener');
const menu = document.getElementById('menu')

window.addEventListener('change', () => {
  if (checkbox.checked) {
    document.body.classList.add('page__body--with-menu');
    window.location.hash = '#menu';
  } else {
    document.body.classList.remove('page__body--with-menu');
    window.location.hash = '';
  }
});

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    menu.classList.add('page__menu--opened')
  } else {
    document.body.classList.remove('page__body--with-menu');
    menu.classList.remove('page__menu--opened')
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
