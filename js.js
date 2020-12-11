const fs = require('fs')

// let range =  {
//     from: 1,
//     to: 5,

//     [Symbol.iterator]() {
//         return {
//             current: this.from,
//             last: this.to,

//             next() { 
//                 if(this.current <= this.last){
//                     return {done: false,  value:this.current}
//                 }
//                 else {
//                      return{ done: true, value: this.last}
//                 }
//             }
//         }
//     }
// }

let range =  {
    from: 1,
    to: 5,

    *[Symbol.iterator]() {
        {
            for(let value = this.from; value <= this.to; value++) {
                yield value;
            }
        }
    }
}

fs.write(1, [...range], ()=> {})

function* generateSequence(start, end) {
    for(let i = start; i <= end; i++) {
        yield i;
    }
}

function* generateCharCode() {
    yield* generateSequence(48, 57);
    yield* generateSequence(65, 90);
    yield* generateSequence(97, 122);
}

let str ="";
for(let code of generateCharCode()) {
    str += String.fromCharCode(code);
}

console.log(str);