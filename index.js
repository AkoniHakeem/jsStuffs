const server = require('./server');

const app = {}

app.init = (callback) => {
    server.init("express");

    setTimeout(() => {
        callback(); // callback is for end to end testing
    }, 50);

}

if(require.main === module) {
    app.init(() => {})
}

module.exports = app