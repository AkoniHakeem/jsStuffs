// what is the shortest length of compression that can be obtained from a string S f length N with repeated characters, when K amount of characters are removed.


const compress = (S, K) => {
    // define compressed state map
    // count identical in map
    // circle through compressed state create map

    let compressedMaps = []
    

    

    // splice three times to remove char

    let charLen = S.length;
    let sCompArr = []
    //let splicedArr
    for(let i = 0; i < charLen - K; i++) {
        let charMap = {};
        let splicedS = removeChar(S, i, K);
        let sComp = ''

        for(let i =0; i < splicedS.length; i++) {
            let char = splicedS[i]
            let ind = sComp.length-1
            if(char == sComp[ind]) {
                let charCount = 1;
                if(ind > 0) {
                    charCount = Number(sComp[ind-1]);
                    //charCount = isNaN(charCount)? 1 : charCount;
                    if(isNaN(charCount)) {
                        charCount = 1
                        charCount++
                        let sCompArr = sComp.split('');
                        sCompArr[ind] = charCount;
                        sCompArr[ind + 1] = char;
                        sComp = sCompArr.join('');
                    }
                    else {
                        charCount++
                        let sCompArr = sComp.split('');
                        sCompArr[ind -1]  = charCount;
                        sCompArr[ind] = char;
                        sComp = sCompArr.join('');
                    }
                }
                else {
                    charCount ++;
                    let sCompArr = sComp.split('');
                    sCompArr[ind] = charCount;
                    sCompArr[ind + 1] = char;
                    sComp = sCompArr.join('');
                }
            }
            else {
                sComp += char
            }
            // if(charMap[char] > 0) {
            //     charMap[char] += 1 
            // }
            // else {
            //     charMap[char] = 1
            // }
        }
        sCompArr.push(sComp)
        //compressedMaps.push(charMap);
    }

    //each charMap should give compressed S
    
    // for(cMap of compressedMaps) {
    //     let compS = ''
    //     for(char in cMap) {
    //         if(cMap.hasOwnProperty(char)) {
    //             compS += `${cMap[char]}${char}`
    //             sCompArr.push(compS)
    //         }
    //     }
    // }

    let shortest = S.length
    for(let i = 0; i < sCompArr.length; i++) {
        let lenEle = sCompArr[i];
        if(lenEle.length < shortest) {
            shortest = lenEle.length;
        }  
    }
    return shortest;
}

// const compresser = (S) => {

// }

const removeChar = (S, start, deleteCount) => {
    let charArr = S.split('');
     charArr.splice(start, deleteCount) 
     return charArr.join('');
}

const res = compress("aaaabbcccaaa", 4);

console.log(res)