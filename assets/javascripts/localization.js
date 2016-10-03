var $localized = $("[data-localize]");

var uri = new URI(window.location.href);
var locale = uri.search(true).locale;

if(locale !== undefined) { $localized.localize("index", { language: locale }); };

document.onclick = function(e) {
  var locale = e.target.dataset.lang;
  // reload the page if the default language is wanted. Remove the locale param.
  if(locale === "de") {
    window.location.href = uri.removeSearch("locale");
  } else if (locale !== undefined) {
    window.location.href = uri.setSearch("locale", locale);
  };
}
