(()=>{"use strict";(()=>{const e=document.getElementById("timer-hours"),t=document.getElementById("timer-minutes"),r=document.getElementById("timer-seconds"),o=document.getElementById("timer-days");let c;const n=()=>{let n=(()=>{let e=(new Date("26 september 2024 12:45:00").getTime()-(new Date).getTime())/1e3;e<0&&(e=0);let t=Math.floor(e/60/60/24),r=Math.floor(e/60/60%24),o=Math.floor(e/60%60),c=Math.floor(e%60);return t=t<10?"0"+t:t,r=r<10?"0"+r:r,o=o<10?"0"+o:o,c=c<10?"0"+c:c,{timeRemaining:e,days:t,hours:r,minutes:o,seconds:c}})();o.textContent=n.days,e.textContent=n.hours,t.textContent=n.minutes,r.textContent=n.seconds,0===n.timeRemaining&&clearInterval(c)};n(),c=setInterval(n,1e3)})(),(()=>{const e=document.querySelector("menu"),t=document.querySelector("body");t.addEventListener("click",(t=>{(t.target.closest(".menu")||t.target.closest(".close-btn")||t.target.closest("ul>li>a")||t.target.closest(".active-menu"))&&e.classList.toggle("active-menu")}))})(),(()=>{const e=document.querySelector(".popup"),t=document.querySelectorAll(".popup-btn"),r=e.querySelector(".popup-content");let o,c=0;const n=()=>{window.innerWidth<768||(c<=1?(o=requestAnimationFrame(n),c+=.05,r.style.opacity=c):(cancelAnimationFrame(o),c=0))};t.forEach((t=>{t.addEventListener("click",(()=>{e.style.display="block",n()}))})),e.addEventListener("click",(t=>{t.target.closest(".popup-content")&&!t.target.classList.contains("popup-close")||(e.style.display="none")}))})(),(()=>{const e=document.querySelector(".calc-item.calc-square"),t=document.querySelector(".calc-item.calc-count"),r=document.querySelector(".calc-item.calc-day"),o=/\D+/;e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(o,"")})),t.addEventListener("input",(e=>{e.target.value=e.target.value.replace(o,"")})),r.addEventListener("input",(e=>{e.target.value=e.target.value.replace(o,"")}))})(),(()=>{const e=/[^а-я -]+/gi,t=/[^a-z@0-9-_.!~*']+/gi,r=/[^0-9()-]/,o=t=>{t.addEventListener("input",(t=>{t.target.value=t.target.value.replace(e,"")}))},c=e=>{e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(t,"")}))},n=e=>{e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(r,"")}))};(()=>{const e=document.querySelector(".form-name"),t=document.querySelector(".form-email"),r=document.querySelector(".form-phone");o(e),c(t),n(r)})(),(()=>{const e=document.querySelector(".top-form"),t=document.querySelector(".top-form.form-email"),r=document.querySelector(".top-form.form-phone"),a=document.querySelector(".mess");o(e),o(a),c(t),n(r)})(),(()=>{const e=document.querySelector(".popup"),t=e.querySelector(".form-name"),r=e.querySelector(".form-phone"),a=e.querySelector(".form-email");o(t),c(a),n(r)})()})(),(()=>{const e=document.querySelectorAll(".service-tab"),t=document.querySelectorAll(".service-header-tab");document.querySelector(".service-header").addEventListener("click",(r=>{if(r.target.closest(".service-header-tab")){const o=r.target.closest(".service-header-tab");t.forEach(((t,r)=>{t===o?(t.classList.add("active"),e[r].classList.remove("d-none")):(t.classList.remove("active"),e[r].classList.add("d-none"))}))}}))})()})();