const e=document.getElementById("menu-opener"),t=document.getElementById("menu");function n(e){let t=e.parentNode.nextElementSibling,n=t.firstElementChild;e.checked?(t.style.height="427px",n.style.height="411px"):(t.style.height="",n.style.height="")}window.addEventListener("change",()=>{e.checked?(document.body.classList.add("page__body--with-menu"),window.location.hash="#menu"):(document.body.classList.remove("page__body--with-menu"),window.location.hash="")}),window.addEventListener("hashchange",()=>{"#menu"===window.location.hash?t.classList.add("page__menu--opened"):(document.body.classList.remove("page__body--with-menu"),t.classList.remove("page__menu--opened"),e.checked=!1)}),window.addEventListener("load",function(){window.location.hash&&(window.location.hash="")});const c=document.getElementById("first-service");c.addEventListener("change",function(){n(this)});const o=document.getElementById("second-service");o.addEventListener("change",function(){n(this)});const d=document.getElementById("third-service");d.addEventListener("change",function(){n(this)});const i=document.getElementById("fourth-service");i.addEventListener("change",function(){n(this)});const s=document.getElementById("fifth-service");s.addEventListener("change",function(){n(this)});const a=document.querySelector(".slider"),h=document.querySelectorAll(".slide"),l=document.querySelector(".pagination"),r=h.length;let u=0;function m(){let e=Array.from(l.children);e.forEach((e,t)=>{e.classList.toggle("active",t===u)})}function g(e){u=Math.max(0,Math.min(e,Math.ceil(r/1)-1)),function(){let e=1*u;a.style.transform=`translateX(-${358*e}px)`}(),m()}!function(){let e=Math.ceil(r/1);for(let t=0;t<e;t++){let e=document.createElement("span");e.addEventListener("click",()=>g(t)),l.appendChild(e)}}(),m();let y=0,E=0;a.addEventListener("touchstart",e=>{y=e.touches[0].clientX}),a.addEventListener("touchend",e=>{E=e.changedTouches[0].clientX;let t=y-E;t>50?g(u+1):t<-50&&g(u-1)});
//# sourceMappingURL=index.b1a77eba.js.map
