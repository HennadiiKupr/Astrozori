const e=document.getElementById("menu-opener"),n=document.getElementById("menu");window.addEventListener("change",()=>{e.checked?(document.body.classList.add("page__body--with-menu"),window.location.hash="#menu"):(document.body.classList.remove("page__body--with-menu"),window.location.hash="")}),window.addEventListener("hashchange",()=>{"#menu"===window.location.hash?n.classList.add("page__menu--opened"):(document.body.classList.remove("page__body--with-menu"),n.classList.remove("page__menu--opened"),e.checked=!1)}),window.addEventListener("load",function(){window.location.hash&&(window.location.hash="")}),document.addEventListener("DOMContentLoaded",function(){var e=document.querySelector(".selLabel"),n=document.querySelector(".dropdown"),t=document.querySelectorAll(".dropdown-list li"),o=document.querySelector(".selected-item p span");e.addEventListener("click",function(){n.classList.toggle("active")}),t.forEach(function(t){t.addEventListener("click",function(){e.textContent=t.textContent,n.classList.remove("active"),o.textContent=e.textContent})})});
//# sourceMappingURL=index.0c6a5110.js.map