const e=document.getElementById("menu-opener"),n=document.getElementById("menu");function t(e){let n=e.parentNode.nextElementSibling,t=n.firstElementChild;e.checked?(n.style.height="427px",t.style.height="411px"):(n.style.height="",t.style.height="")}window.addEventListener("change",()=>{e.checked?(document.body.classList.add("page__body--with-menu"),window.location.hash="#menu"):"#menu"===window.location.hash?(document.body.classList.remove("page__body--with-menu"),window.location.hash=""):document.body.classList.remove("page__body--with-menu")}),window.addEventListener("hashchange",()=>{"#menu"===window.location.hash?n.classList.add("page__menu--opened"):(document.body.classList.remove("page__body--with-menu"),n.classList.remove("page__menu--opened"),e.checked=!1)}),window.addEventListener("load",function(){window.location.hash&&(window.location.hash="")});const d=document.getElementById("first-service");d.addEventListener("change",function(){t(this)});const o=document.getElementById("second-service");o.addEventListener("change",function(){t(this)});const i=document.getElementById("third-service");i.addEventListener("change",function(){t(this)});const s=document.getElementById("fourth-service");s.addEventListener("change",function(){t(this)});const c=document.getElementById("fifth-service");c.addEventListener("change",function(){t(this)});
//# sourceMappingURL=index.05973cf2.js.map
