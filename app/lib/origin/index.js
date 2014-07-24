'use strict'

var scheme = process.env.NODE_ENV === 'production' ? 'https://' : 'http://'
module.exports = scheme + process.env.HOST
