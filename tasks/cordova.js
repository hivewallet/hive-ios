var copy = require('./util').copy

function cordova(callback) {
  copy('./build/', './cordova/www/', callback)
}

module.exports = cordova
