const stream = require('stream');

let id = 0
function setupStreams(dataInputStream, dataOutputStream, callback) {
  dataInputStream.on("data", (chunck) => {
      let dataChuncks = JSON.parse(chunck);
      dataChuncks.id = id;
      id++;

      dataOutputStream.write(dataChuncks);
      dataOutputStream.on("finish", () => {
          console.log("finish")
      })
      callback();
  })


}

let readable = new stream.Readable();
let writable = new stream.Writable({  objectMode: true, 
                                      write: (chunk, encoding, callback) => {
                                        console.log(chunk);
                                        callback(null, true);
                                      }
});
setupStreams(readable, writable, () => console.log("onEnd"));

readable.push('{ "log": "Request received" }');
readable.push(null);
module.exports.setupStreams = setupStreams;