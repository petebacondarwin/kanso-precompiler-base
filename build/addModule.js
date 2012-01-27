(function() {
  var modules;

  modules = require("kanso-utils/modules");

  module.exports = {
    run: function(root, path, settings, doc, callback) {
      try {
        modules.addFile(path, "precompiler.js", doc, callback);
        return callback(null, doc);
      } catch (error) {
        console.log("Error in precompiler-base: " + error);
        return callback(error, doc);
      }
    }
  };

}).call(this);
