(function (win, doc) {
  "use strict";

  // nav
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

  function escapeNav(event) {
    if (event.key === "Escape" && $navMobile.classList.contains("nav-show"))
      addToggle();
  }
  win.addEventListener("keydown", escapeNav, false);

  // dark mode switch
  let $html = doc.querySelector("html");
  let $buttonMode = doc.querySelector('[data-js="icon-mode"]');
  let $getStatusMode = localStorage.getItem("statusMode");
  if ($getStatusMode) $html.classList.add("dark-off");

  function switchMode() {
    $html.classList.toggle("dark-off");
    if ($html.classList.contains("dark-off"))
      localStorage.setItem("statusMode", true);
    else localStorage.removeItem("statusMode");
  }
  $buttonMode.addEventListener("click", switchMode, false);

  // return top && icon scroll
  function scrollEvent() {
    let $bodyHeight = doc.body.scrollTop;
    let $elHeight = doc.documentElement.scrollTop;
    let $iconScroll = doc.querySelector('[data-js="icon-scroll"]');
    let $iconArrow = doc.querySelector('[data-js="arrow"]');

    function hiddenScrollIcon() {
      if ($bodyHeight > 140 || $elHeight > 140)
        $iconScroll.classList.add("scroll-hidden");
      else $iconScroll.classList.remove("scroll-hidden");
    }

    function returnTop() {
      if ($bodyHeight > 720 || $elHeight > 720)
        $iconArrow.classList.add("arrow-top-show");
      else $iconArrow.classList.remove("arrow-top-show");
    }

    returnTop();
    hiddenScrollIcon();
  }

  win.addEventListener("scroll", scrollEvent, false);
})(window, document);
