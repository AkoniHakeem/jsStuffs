const shiftR = (A, K) => {
    const shortCases = [0, A.length];
    if(K == 0 ||K % A.length == 0) 
    {
        console.log(A)
        return A
    }

    // shifting
    let temp
    let i = 0;
    while(i < K) {
        for(let ind = 0; ind < A.length; ind++) {
            let prevIndex = (ind - 1) > -1 ? ind - 1 : A.length - 1
            
            //A[prevIndex] = A[ind];
            
            // if(ind == 0) {
            //     temp = A[ind];
            //     A[ind] = A[prevIndex]
            // }
            // else {
                if(ind == 0)temp = A[prevIndex]
                let currTemp = A[ind]
                A[ind] = temp
                temp = currTemp;
                
            //}
        }
        i++;
    }
    console.log(A);
    return A;
}

shiftR([1,2,3], 12)