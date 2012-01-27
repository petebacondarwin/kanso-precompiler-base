modules = require("kanso-utils/modules")

module.exports =
  run: (root, path, settings, doc, callback) ->
    # Manually add the precompiler library file to the design document so that it can be included by other packages
    try
      modules.addFile(path, "precompiler.js", doc, callback)
    catch error
      console.log("Error in precompiler-base: " + error)
      callback(error, doc)