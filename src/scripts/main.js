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


document.addEventListener("DOMContentLoaded", function() {
  var selLabel = document.querySelector(".selLabel");
  var dropdown = document.querySelector(".dropdown");
  var dropdownList = document.querySelectorAll(".dropdown-list li");
  var selectedItem = document.querySelector(".selected-item p span");
  
  selLabel.addEventListener("click", function() {
    dropdown.classList.toggle("active");
  });
  
  dropdownList.forEach(function(item) {
    item.addEventListener("click", function() {
      selLabel.textContent = item.textContent;
      dropdown.classList.remove("active");
      selectedItem.textContent = selLabel.textContent;
    });
  });
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
secondService.addEventListener('change', function() {
  changeTextareaHeight(this);
});

const fourthService = document.getElementById('fourth-service');
firstService.addEventListener('change', function() {
  changeTextareaHeight(this);
});

const fifthService = document.getElementById('fifth-service');
secondService.addEventListener('change', function() {
  changeTextareaHeight(this);
});