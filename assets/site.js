(function () {
  "use strict";
  var BP = "(max-width: 900px)";
  var burger = document.querySelector(".burger");
  var menu = document.getElementById("site-menu");
  function setMenu(open) {
    if (!burger || !menu) { return; }
    menu.classList.toggle("open", open);
    burger.setAttribute("aria-expanded", open ? "true" : "false");
    burger.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  }
  if (burger && menu) {
    burger.addEventListener("click", function () {
      setMenu(burger.getAttribute("aria-expanded") !== "true");
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") { setMenu(false); }
    });
    menu.addEventListener("click", function (e) {
      if (e.target.tagName === "A") { setMenu(false); }
    });
    var mq = window.matchMedia(BP);
    var onChange = function () { if (!mq.matches) { setMenu(false); } };
    if (mq.addEventListener) { mq.addEventListener("change", onChange); } else if (mq.addListener) { mq.addListener(onChange); }
  }
  var qs = document.querySelectorAll(".faq-q");
  Array.prototype.forEach.call(qs, function (btn) {
    btn.addEventListener("click", function () {
      var open = btn.getAttribute("aria-expanded") === "true";
      var panel = document.getElementById(btn.getAttribute("aria-controls"));
      btn.setAttribute("aria-expanded", open ? "false" : "true");
      if (panel) { panel.classList.toggle("open", !open); }
    });
  });
})();
