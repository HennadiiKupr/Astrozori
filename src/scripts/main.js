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