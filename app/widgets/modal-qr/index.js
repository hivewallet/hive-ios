'use strict';

var Ractive = require('hive-modal')
var emitter = require('hive-emitter')
var qrcode = require('hive-qrcode')
var getNetwork = require('hive-network')

module.exports = function showTooltip(data){

  var ractiveData = data
  ractiveData.clipboard_msg = 'Copy to clipboard'

  var ractive = new Ractive({
    el: document.getElementById('tooltip'),
    partials: {
      content: require('./content.ract').template,
    },
    data: ractiveData
  })

  var canvas = ractive.nodes['qr-canvas']
  var qr = qrcode(getNetwork() + ':' + ractive.get('address'))
  canvas.appendChild(qr)

  ractive.on('close', function(){
    ractive.fire('cancel')
  })

  ractive.on('copy', function(){
    cordova.plugins.clipboard.copy(ractive.get('address'));
    ractive.set('clipboard_msg', 'Address copied!')
    setTimeout(function(){
      ractive.set('clipboard_msg', 'Copy to clipboard')
    }, 1000)
  })

  return ractive
}

