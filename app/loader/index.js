

var token = require('hive-network')()
document.getElementsByTagName('html')[0].classList.add(token)
window.initHiveApp()

//monkey patch URL for safari 6
window.URL = window.URL || window.webkitURL

