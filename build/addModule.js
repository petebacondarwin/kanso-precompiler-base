(function() {
  var modules;

  modules = require("kanso-utils/modules");

  module.exports = {
    before: "properties",
    run: function(root, path, settings, doc, callback) {
      return modules.addFile(path, "precompiler.js", doc, callback);
    }
  };

}).call(this);
