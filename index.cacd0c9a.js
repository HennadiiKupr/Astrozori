const e=document.getElementById("menu-opener"),t=document.getElementById("menu");function n(e){let t=e.parentNode.nextElementSibling,n=t.firstElementChild;e.checked?(t.style.height="427px",n.style.height="411px"):(t.style.height="",n.style.height="")}window.addEventListener("change",()=>{e.checked?(document.body.classList.add("page__body--with-menu"),window.location.hash="#menu"):(document.body.classList.remove("page__body--with-menu"),window.location.hash="")}),window.addEventListener("hashchange",()=>{"#menu"===window.location.hash?t.classList.add("page__menu--opened"):(document.body.classList.remove("page__body--with-menu"),t.classList.remove("page__menu--opened"),e.checked=!1)}),window.addEventListener("load",function(){window.location.hash&&(window.location.hash="")}),document.addEventListener("DOMContentLoaded",function(){var e=document.querySelector(".selLabel"),t=document.querySelector(".dropdown"),n=document.querySelectorAll(".dropdown-list li"),o=document.querySelector(".selected-item p span");e.addEventListener("click",function(){t.classList.toggle("active")}),n.forEach(function(n){n.addEventListener("click",function(){e.textContent=n.textContent,t.classList.remove("active"),o.textContent=e.textContent})})});const o=document.getElementById("first-service");o.addEventListener("change",function(){n(this)});const d=document.getElementById("second-service");d.addEventListener("change",function(){n(this)}),document.getElementById("third-service"),d.addEventListener("change",function(){n(this)}),document.getElementById("fourth-service"),o.addEventListener("change",function(){n(this)}),document.getElementById("fifth-service"),d.addEventListener("change",function(){n(this)});
//# sourceMappingURL=index.cacd0c9a.js.map
