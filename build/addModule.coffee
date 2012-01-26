modules = require("kanso-utils/modules")

module.exports =
  before: "properties"
  run: (root, path, settings, doc, callback) ->
    # Manually add the precompiler library file to the design document so that it can be included by other packages
    modules.addFile(path, "precompiler.js", doc, callback)