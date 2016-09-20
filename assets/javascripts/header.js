var headerHeight = document.getElementsByTagName('header')[0].offsetHeight;

var options = {
  speed: 1000,
  offset: headerHeight
};

gumshoe.init();
smoothScroll.init(options);

window.onload = function() {
  if (window.location.hash) {
    var $anchor = document.querySelector(window.location.hash);
    smoothScroll.animateScroll($anchor, null, options);
  }
}
