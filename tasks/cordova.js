var copy = require('./util').copy

function cordova(callback) {
  copy('./build/', './cordova/www/', callback)
}

// config task...

// gulp.task('cordova-config', function(){
//   var accessOpen = '<access origin="'
//   var accessClose = '" />'
//   var hostWhiteLists = [
//     accessOpen + process.env.DB_HOST + accessClose,
//     accessOpen + process.env.HOST + accessClose,
//     accessOpen + process.env.PROXY_URL + accessClose,
//     "</widget>"
//   ].join("\n")

//   gulp.src('./cordova/config_template.xml')
//     .pipe(replace('</widget>', hostWhiteLists))
//     .pipe(rename('./config.xml'))
//     .pipe(gulp.dest('./cordova/'));
// })

module.exports = cordova
