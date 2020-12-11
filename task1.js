    //sort array
    // sort A
        // cal difference between elements
        // if greater than 1 add 1 to prev elem

const greatestSmallest = (A) => {
    //let A = []
    if(A.length == 1) {
        if(A[0]> 1) {
            console.log(1)
            return 1
        }
        else if(A[0] < 1) {
            console.log(1)
            return 1
        }
        else {
            console.log(A[0]+1)
            return A[0]+1
        }
    }
    A.sort((a, b) => {
        if(a < b) return -1
        if(a > b) return 1
        if(a == b) return 0
    });
    console.log(A);
    let notFound = false;
    let i = 0
    let grtSm = 0;
    while( i < A.length) {
        let pre = A[i];
        let nextInd = i +1
        let diff
        if(nextInd == A.length) {
            nextInd = i
        }
        let next = A[nextInd]
        diff = next - pre;
        if(pre < 0 ) {
            if(diff > 2) {
                grtSm = 1
                break;
            }
        } 
        if(diff > 1) {
            grtSm = pre + 1
        }
        if(grtSm > 0) {
            break
        }
        i++
    }

    if(grtSm > 0) {
      console.log(grtSm)
        return grtSm;
    }
    // I assuming the numbers are consecutive, so we pick the next after the 
    else if(A[A.length-1] > 0) {  
        grtSm = A[A.length -1] + 1;
        console.log(grtSm)
        return grtSm;
    }
    else {
        grtSm = 1
        console.log(grtSm)
        return grtSm;
    }

}

const smallestPositive = (A) => {
    if(A.length == 1) {
        if(A[0]> 1) {
            console.log(1)
            return 1
        }
        else if(A[0] < 1) {
            console.log(1)
            return 1
        }
        else {
            console.log(A[0]+1)
            return A[0]+1
        }
    }
    let positiveElem = {};
    let negativeEl = [];
    let smal = 0
    A = A.sort((a, b) => {
        if(a < b) return -1
        if(a > b) return 1
        if(a == b) return 0
    });
    for(let i = 0; i < A.length; i++) {
        let elem = A[i]
        if(elem > 0) {
            positiveElem[elem] = elem + 1;
        }
        else {
            negativeEl.push(elem);
        }
    }
    if(negativeEl.length == A.length) {
        smal = 1
    } 
    let nextVal;
    let i = 0;
    if(smal == 0) {
        for(item in positiveElem) {
            if(positiveElem.hasOwnProperty(item)) {
                let val
                if(i == 0) {
                    val =  positiveElem[item];
                    nextVal = positiveElem[val];
                }
                else {
                    nextVal = positiveElem[nextVal]
                }
                if(!nextVal) {
                    smal = positiveElem[item];
                    break;
                }
                i++
            }
        }
    }
    console.log(smal)
    return smal;
}
let testArray = () => {
    let A = []
    for(let i = 1; i <= 10000; i++) {
        A.push(i)
    }
    //console.log(A);
    return A
}
//greatestSmallest([1, 3, 6, 4, 1, 2])
//greatestSmallest( [1, 2, 3])
//greatestSmallest([-1, -3])
//greatestSmallest(testArray())
const A = testArray()
//console.log(A.sort());
//greatestSmallest([-1,1])
smallestPositive([1, -1])
smallestPositive([1, 2, 3])
smallestPositive([1, 3, 6, 4, 1, 2])
