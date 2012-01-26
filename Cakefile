{exec} = require 'child_process'
task 'build', 'Build project', ->
  exec 'coffee --compile *.coffee build/*.coffee', (err, stdout, stderr) ->
    throw err if err
    console.log stdout + stderr

task 'watch', 'Watch project and build from src/*.coffee to lib/*.js', ->
  exec 'coffee --watch --compile *.coffee build/*.coffee', (err, stdout, stderr) ->
    throw err if err
    console.log stdout + stderr
