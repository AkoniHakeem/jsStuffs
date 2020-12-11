const data = require("./data")

data.create('', "data", "{'message': 'this is a dat amessage'}", (err) => {
    if(!err) {
        console.log("file created")
    }
    else {
        console.log(err)
    }
})
