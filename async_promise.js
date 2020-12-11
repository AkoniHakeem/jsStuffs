const { rejects } = require("assert");
const fs = require("fs");

const files = require("index_js");
const { resolve } = require("path");

const exists = files.fileExistSync("index.txt");
console.log(exists);

// const doSomething = () => {
//     const promise = new Promise((resolve, rejects) => {
//         const readeable = fs.createReadStream("index.txt");

//         readeable.setEncoding("utf-8");
//         let data = "";
    
//         readeable.on("data", (chunck) => {
//             data += chunck;
//         })
    
//         readeable.on("end", () => {
//             resolve(data)
//             //console.log(data);
//         })

//         readeable.on("error", (err) => {
//             rejects(err)
//         })
//     })

//     return promise;

// }

// doSomething().then((data) => {
//     console.log(data);
// }).catch(err => {
//     console.log( "there was an error and here it is", err);
// })

// const getResult = async () => {
//     try {
//         const result = await doSomething();
//         console.log("here is the result: ", result);
//     } catch (error) {
//         console.log("An error occurred", error)
//     }
// }

// getResult();
