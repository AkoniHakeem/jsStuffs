const repeatString = (str = "abc") => {
    var n = 3;
    console.log(new Array(n + 1).join(str)); // In default case returns "abcabcabc"
}

   // A robust solution is to not detect a string at all, rather only check for what functionality is required
const checkIsString = (str = "abc") => {
    let isString = false
    isString = str.substring ? true : false
    console.log(isString)
}

function reverseString(str) {
    return [...String(str)].reverse().join('');
   }

repeatString();

checkIsString()