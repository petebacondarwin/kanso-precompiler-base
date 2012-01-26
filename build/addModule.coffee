modules = require("kanso-utils/modules")

module.exports =
  before: "properties"
  run: (root, path, settings, doc, callback) ->
    modules.addFile(path, "precompiler.js", doc, callback)