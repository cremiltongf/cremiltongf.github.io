(function (win, doc) {
 "use strict";

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
 let $setDate = doc.querySelector('[data-js="date"]');
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

 // return top and icon scroll
 function eventScroll() {
  let $bodyHeight = doc.documentElement.scrollTop;
  let $iconScroll = doc.querySelector('[data-js="icon-scroll"]');
  let $iconReturnTop = doc.querySelector('[data-js="icon-return-top"]');

  function hiddenIconScroll() {
   if ($bodyHeight > 140) $iconScroll.classList.add("scroll-hidden");
   else $iconScroll.classList.remove("scroll-hidden");
  }

  function returnTop() {
   if ($bodyHeight > 720) $iconReturnTop.classList.add("return-top-visible");
   else $iconReturnTop.classList.remove("return-top-visible");
  }

  hiddenIconScroll();
  returnTop();
 }
 win.addEventListener("scroll", eventScroll, false);
})(window, document);
