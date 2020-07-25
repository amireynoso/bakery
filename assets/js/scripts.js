(function () {
  var body = document.querySelector("body");
  var randomThemeNumber = Math.ceil(Math.random() * 10);

  body.className = "theme-" + randomThemeNumber;
})();
