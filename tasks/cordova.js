var exec = require('child_process').exec
var fs = require('fs')
var async = require('async')
var done = require('./util').done
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

function run(device) {
  return function(callback) {
    async.parallel([cordovaCopy, cordovaConfig], function(err) {
      if(err) return callback(err);
      var cb = done('running cordova build on', device, callback)
      exec('cd ./cordova; ../node_modules/cordova/bin/cordova run ios --' + device, function(err, stdout, stderr){
        console.log(stdout)
        console.error(stderr)

        cb(err)
      })
    })
  }
}

function build(callback) {
  async.parallel([cordovaCopy, cordovaConfig], function(err) {
    if(err) return callback(err);

    var cb = done('cordova', 'build', callback)
    exec('cd ./cordova; ../node_modules/cordova/bin/cordova build', function(err, stdout, stderr){
      console.log(stdout)
      console.error(stderr)

      cb(err)
    })
  })
}

function runEmulator(callback) {
  run('emulator')(callback)
}

function runDevice(callback) {
  run('device')(callback)
}

module.exports = {
  copy: cordovaCopy,
  config: cordovaConfig,
  runEmulator: runEmulator,
  runDevice: runDevice,
  build: build
}
