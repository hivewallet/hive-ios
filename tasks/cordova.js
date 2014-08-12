var fs = require('fs')
var copy = require('./util').copy

function cordovaCopy(callback) {
  copy('./build/', './cordova/www/', callback)
}

function cordovaConfig(callback) {
  var filename = './cordova/config_template.xml'
  var newfile = './cordova/config.xml'
  fs.readFile(filename, { encoding: 'utf8' }, function(err, index){
    if(err) return callback(err);

      var accessOpen = '<access origin="'
      var accessClose = '" />'
      var hostWhiteLists = [
        accessOpen + process.env.DB_HOST + accessClose,
        accessOpen + process.env.HOST + accessClose,
        accessOpen + process.env.PROXY_URL + accessClose,
        "</widget>"
      ].join("\n")

    fs.writeFile(newfile, index.replace('</widget>', hostWhiteLists), callback)
  })
}

module.exports = {
  copy: cordovaCopy,
  config: cordovaConfig
}
