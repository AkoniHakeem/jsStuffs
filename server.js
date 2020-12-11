const fs = require('fs');
const http = require('http');
const https = require('https');
const url = require("url");
// const path = require("path")

const stringDecoder = require("string_decoder").StringDecoder

const server = {};

server.apps = { }

server.apps.express = require("./app")

server.apps.nodeApp = (req, res) => {
    const decoder = new stringDecoder("utf-8")
    let dataBuffer = ""
    let parsedUrl = url.parse(req.url, true);
    let path = parsedUrl.pathname;
    let trimmedpath = path.replace(/^\/+|\/+$/g, '');
    let method = req.method;
    let header = req.headers
    let queryStringObject = parsedUrl.query

    req.on('data', (dataChunck) => {
        dataBuffer += decoder.write(dataChunck);
    })

    req.on("end", () => {
        dataBuffer += decoder.end();

        let data = {
            method : method,
            path: trimmedpath,
            query: queryStringObject,
            body: parseJson(dataBuffer),
            header: header
        }

        // write handler
        server.choosehandler(data, (payload, contentType) => {
            res.setHeader('Content-Type', contentType)
            res.writeHead(200);
            res.end(payload) 
        })
    })
}

const parseJson = (str) => {
    str = typeof(str) == "string" && str.length > 0 ? str : "{}"
    return JSON.parse(str)
}

server.choosehandler = (data, cb) => {
    let payload = {};
    let chosenHandler = server.routes[trimmedpath]? server.trimmedpath :  trimmedpath["notFound"];
    chosenHandler(data, (payloadString, contentType) => {
        payload = payloadString;
    })
    cb(payload, contentType);
}

server.routes = {
    "ping": (data, cb)=> {
        cb({message: "pong"}, "application/json")
    },
    "notFound": (cb)=> {cb({message: "not found"}, "application/json")}
}

// server.httpsServer = https.createServer(server.httpsServerOptions, app)



// server.httpsServerOptions = {
//     'cert': fs.readFileSync(path.join(__dirname, './cert.pem')),
//     'key': fs.readFileSync(path.join(__dirname, './key.pem'))
// }

server.init = (name = "express") => {
    name = name == "express" ? name : "nodeApp"
    server.httpServer = http.createServer(server.apps[name]);
    server.httpServer.listen('3000', () => {
        console.log("server is listening on port 3000")
    })
}

module.exports = server;