const fs = require("fs");
const { builtinModules } = require("module");
const path = require("path")

const lib = {};

lib.dir = path.join(__dirname, "/")

lib.create = (dir, fileName, data, cb) => {
    fs.open(lib.dir + dir + fileName + ".json", "wx", (err, fd) => {
        if(!err && fd) {
            fs.writeFile(fd, data, (err) => {
                if(err) {
                    cb("error writing to file")
                }
                else {
                    fs.close(fd, (err) => {
                        if(err) {
                           cb("error while closing file") 
                        }
                        else{
                            cb(false)
                        }
                    })
                }
            })
        }
        else {
            cb("encountered error while opening file");
        }
    })
}

lib.update = (dir, fileName, data, cb) => {
    fs.open(lib.dir + dir + fileName + ".json", "r+", (err, fd) => {
        if(!err && fd) {
            fs.truncate(fd, (err) => {
                if(err) {
                    cb("error while truncating file")
                }
                else {
                    fs.writeFile(fd, data, (err) => {
                        if(err) {
                            cb("error writing new data to file")
                        }
                        else {
                            fs.close(fd, (err)=> {
                                if(err) {
                                    cb("err closing file")
                                }
                                else {
                                    cb(false)
                                }
                            })
                        }
                    })
                }
            })
        }
        else {
            cb("error while opening file")
        }
    })
}

lib.read = (dir, fileName, cb) => {
    fs.readFile(lib.dir + dir + fileName + ".json", "utf-8", (err, data) => {
        if(!err && data) {
            cb(false, data)
        }
        else {
            cb(err, data)
        }
    })
}

lib.list = (dir, cb) => {
    fs.readdir(lib + dir, (err, files) => {
        if(!err && files.length > 0) {
            cb(false, files)
        }
        else {
            cb(err, files)
        }
    })
}

lib.delete = (dir, fileName, cb) => {
    fs.unlink(lib.dir + dir + fileName + ".json", (err) => {
        if(err) {
            cb(err)
        }
        else {cb(false)}
    })
}

module.exports = lib;