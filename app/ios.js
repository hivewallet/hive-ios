if(window.hasOwnProperty('cordova')) {
  document.addEventListener('deviceready', function() {
    navigator.splashscreen.hide()
    var text = "Hello World!";
    cordova.plugins.clipboard.copy(text);
    cordova.plugins.clipboard.paste(function (text) { alert(text); });
  }, false)
}