require('browsernizr/lib/load')
require('browsernizr/test/storage/localstorage')
require('browsernizr/test/storage/websqldatabase')
require('browsernizr/test/indexedDB')
require('browsernizr/test/workers/webworkers')
require('browsernizr/test/blob')
require('browsernizr/test/crypto/getrandomvalues')

var token = require('hive-network')()
var Modernizr = require('browsernizr')

document.getElementsByTagName('html')[0].classList.add(token)

var containerEl = document.getElementById('loader')
var goodToGo;

Modernizr.on('indexeddb', function(hasIndexedDB){
  var supportsPouchDB = hasIndexedDB || Modernizr.websqldatabase

  Modernizr.load({
    test: supportsPouchDB && (Modernizr.localstorage && Modernizr.webworkers && Modernizr.blobconstructor && Modernizr.getrandomvalues),
    yep: 'assets/js/application.js',
    nope: 'assets/js/nope.js',
    callback: function(testResult, key) {
      goodToGo = key
    },
    complete: function() {
      if(goodToGo) {
        window.initHiveApp()
        setTimeout(function() {
            navigator.splashscreen.hide();
        }, 2000);
      }
    }
  })
})


//monkey patch URL for safari 6
window.URL = window.URL || window.webkitURL

