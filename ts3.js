const getUpaired = (A) => {
    // if(A.lenth % 2 == 0) {
    //     return 
    // }

    let values = {

    }

    let unPaired = {}

    for(let i = 0; i < A.length; i ++) {
        let val = A[i]
        if(values[val]) {
            values[val] += 1;
            delete unPaired[val]

        }
        else {
            values[val] = 1
            unPaired[val] = val;
        }
    }
    let unpairedResult;
    for (val in values) {
            if(values.hasOwnProperty(val)) {
                if(values[val] == 1) {
                    unpairedResult = val
                    unpairedResult = Number(unpairedResult)
                    break;
                }
            }
    }
    return unpairedResult
}

const unpaired = getUpaired([1,2,1,3,3,2,5]);
console.log(unpaired);