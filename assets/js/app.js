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
    $navMobile.classList.toggle("nav-show");
    $hiddenScroll.classList.toggle("hidden-scroll");
  }

  // dark mode and white mode
  let $html = doc.querySelector("html");
  let $buttonDarkMode = doc.querySelector('[data-js="icon-dark"]');
  let $statusDarkMode = localStorage.getItem("statusDark");
  if ($statusDarkMode) $html.classList.add("dark-off");

  function changeDarkMode() {
    $html.classList.toggle("dark-off");
    if ($html.classList.contains("dark-off"))
      localStorage.setItem("statusDark", true);
    else localStorage.removeItem("statusDark");
  }
  $buttonDarkMode.addEventListener("click", changeDarkMode, false);

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
