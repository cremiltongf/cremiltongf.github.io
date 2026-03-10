(function (win, doc) {
 "use strict";

 //  debounce lodash
 const debounce = function (func, wait, immediate) {
  let timeout;
  return function (...args) {
   const context = this;
   const later = function () {
    timeout = null;
    if (!immediate) func.apply(context, args);
   };
   const callNow = immediate && !timeout;
   clearTimeout(timeout);
   timeout = setTimeout(later, wait);
   if (callNow) func.apply(context, args);
  };
 };

 // nav mobile
 let $navMobile = doc.querySelector('[data-js="navmobile"]');
 let $addToggle = doc.querySelectorAll('[data-js="toggle"]');
 let $hiddenScroll = doc.querySelector('[data-js="scroll"]');

 for (let i = 0; i < $addToggle.length; i++) {
  $addToggle[i].addEventListener("click", addToggle, false);
 }

 function addToggle() {
  $navMobile.classList.toggle("nav-open");
  $hiddenScroll.classList.toggle("hidden-scroll");
 }

 // date on footer
 let $setDate = doc.querySelector('[data-js="copy-date"]');
 function getDate() {
  const anoAtual = new Date().getFullYear();
  return ($setDate.innerHTML = "&copy; 2017 - " + anoAtual);
 }
 win.addEventListener("load", getDate, false);

 // dark mode and white mode
 let $html = doc.querySelector("html");
 let $buttonSwitch = doc.querySelector('[data-js="button-switch"]');
 let $getStatusSwitch = localStorage.getItem("statusSwitch");
 if ($getStatusSwitch) $html.classList.add("white-on");

 function switchDarkMode() {
  $html.classList.toggle("white-on");
  if ($html.classList.contains("white-on"))
   localStorage.setItem("statusSwitch", true);
  else localStorage.removeItem("statusSwitch");
 }
 $buttonSwitch.addEventListener("click", switchDarkMode, false);

 // animation
 const target = doc.querySelectorAll("[data-animate]");
 const animationClass = "animation";
 function animationScroll() {
  const windowTop = win.scrollY + win.innerHeight * 0.78;
  target.forEach(function (element) {
   if (windowTop > element.offsetTop) {
    element.classList.add(animationClass);
   } else {
    element.classList.remove(animationClass);
   }
  });
 }
 animationScroll();

 if (target.length) {
  win.addEventListener(
   "scroll",
   debounce(function () {
    animationScroll();
   }, 100),
   false,
  );
 }
})(window, document);
