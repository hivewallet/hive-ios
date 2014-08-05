var async = require('async')

var tasks = {
  serve: require('./serve'),
  images: require('./images'),
  html: require('./html'),
  styles: require('./styles'),
  scripts: require('./scripts'),
  loader: require('./loader'),
  test: require('./test'),
  sketch: require('./sketch'),
  watch: require('./watch'),
  transifexPull: require('./transifex').pull,
  transifexPush: require('./transifex').push
}

tasks.default = function(){
  async.parallel([ tasks.scripts, tasks.loader, tasks.html, tasks.styles, tasks.images ], function(){
    tasks.watch()
    tasks.serve()
    tasks.test()
  })
}

module.exports = tasks

process.on('message', function(task){
  if(typeof task === 'string') task = [task]
  task = task.map(function(t){
    return tasks[t]
  })

  async.parallel(task, function(err){
    process.send('done', err)
  })
})
