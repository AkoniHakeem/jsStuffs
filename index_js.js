let fs = require("fs");

function fileExistsSync(name) {
  return fs.existsSync(name);
}

fileExistsSync = fileExistsSync;

module.exports.default = fileExistsSync;