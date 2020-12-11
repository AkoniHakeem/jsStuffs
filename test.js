const nodeApp = require('./index');
const assert = require("assert");

const test = () => {
    try {
        assert.doesNotThrow(() => {
            nodeApp.init(() => {
                console.log("app started")
            })
        }, TypeError)
    } catch (error) {
        console.log(error)
    }
}

test();