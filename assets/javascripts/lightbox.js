document.body.onclick = function(e) {

  // noscroll class prevents the page from scrolling when a lightbox is open.

  var target = e.target;

  // Show lightbox
  if(target.classList.contains("lightbox-open")) {
    var $content = document.getElementById(target.getAttribute("content"));
    fadeIn($content, function() {
      document.body.classList.add("noscroll");
      $content.classList.add("show");
    });
  }

  // Show lightbox if click on the close button
  if(target.classList.contains("lightbox-close")) {
    document.body.classList.remove("noscroll");
    target.parentElement.parentElement.classList.remove("show");
  }

  // Show lightbox if click outiside of it
  if(target.classList.contains("lightbox-wrap")) {
    document.body.classList.remove("noscroll");
    target.classList.remove("show");
  }
};
