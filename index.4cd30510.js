const e=document.getElementById("menu-opener"),t=document.getElementById("menu");function n(e){let t=e.parentNode.nextElementSibling,n=t.firstElementChild;e.checked?(t.style.height="427px",n.style.height="411px"):(t.style.height="",n.style.height="")}window.addEventListener("change",()=>{e.checked?(document.body.classList.add("page__body--with-menu"),window.location.hash="#menu"):"#menu"===window.location.hash?(console.log(132),document.body.classList.remove("page__body--with-menu"),window.location.hash=""):document.body.classList.remove("page__body--with-menu")}),window.addEventListener("hashchange",()=>{"#menu"===window.location.hash?t.classList.add("page__menu--opened"):(document.body.classList.remove("page__body--with-menu"),t.classList.remove("page__menu--opened"),e.checked=!1)}),window.addEventListener("load",function(){window.location.hash&&(window.location.hash="")});const o=document.getElementById("first-service");o.addEventListener("change",function(){n(this)});const i=document.getElementById("second-service");i.addEventListener("change",function(){n(this)});const s=document.getElementById("third-service");s.addEventListener("change",function(){n(this)});const c=document.getElementById("fourth-service");c.addEventListener("change",function(){n(this)});const d=document.getElementById("fifth-service");d.addEventListener("change",function(){n(this)});const a=document.querySelector(".slider"),l=document.querySelectorAll(".slide"),h=document.querySelector(".pagination"),r=l.length;let m=0;function u(){let e=1*m;a.style.transform=`translateX(-${358*e}px)`}function g(){let e=Array.from(h.children);e.forEach((e,t)=>{e.classList.toggle("active",t===m)})}function y(e){m=Math.max(0,Math.min(e,Math.ceil(r/1)-1)),u(),g()}!function(){let e=Math.ceil(r/1);for(let t=0;t<e;t++){let e=document.createElement("span");e.addEventListener("click",()=>y(t)),h.appendChild(e)}}(),g();let f=0;a.addEventListener("touchstart",e=>{f=e.touches[0].clientX}),a.addEventListener("touchmove",e=>{let t=e.touches[0].clientX,n=f-t;if(Math.abs(n)>100){a.style.transition="transform 0s";let e=1*m;a.style.transform=`translateX(-${358*e-n}px)`}}),a.addEventListener("touchend",e=>{a.style.transition="transform 0.3s ease-in-out";let t=e.changedTouches[0].clientX,n=f-t;Math.abs(n)>100?n>0?y(m+1):y(m-1):u()});
//# sourceMappingURL=index.4cd30510.js.map