(function() {
  var modules;

  modules = require("kanso-utils/modules");

  module.exports = {
    run: function(root, path, settings, doc, callback) {
      try {
        return modules.addFile(path, "precompiler.js", doc, callback);
      } catch (error) {
        console.log("Error in precompiler-base: " + error);
        return callback(error, doc);
      }
    }
  };

}).call(this);
