const countMostRepeatedChar = (str) => {
    const stringObj = {};

    // initialize most repeated with one of the letters
    let mostRepeated = {
        char: "", count: 0
    }
    mostRepeated.char = str[0];
    mostRepeated.count = 1;
    for(let i = 0; i < str.length; i++) {
        const char = str[i]
        if(stringObj.hasOwnProperty(char)) {
            let currentCount = stringObj[char];
            currentCount++;
            stringObj[char] = currentCount;
            if(currentCount > mostRepeated.count) {
                mostRepeated.char = char;
                mostRepeated.count = currentCount;
            }
        }
        else {
            stringObj[char] = 1
        }
    }
    console.log(stringObj);
    console.log(mostRepeated);
    return mostRepeated.char;
    // other option is to iterate through the objects property
    
}

countMostRepeatedChar("hello world oloolooo"); // ToDo: Identify if any other char(s) has equal highest occurrence(we could do that with a find)