// fibanacci series : fn = fn-1 + fn-2; start with f0 = 0 and f1 = 1
// so we have: 0, 1, 1, 2, 3, 5, 8, 13

const nthFibonnaci = (n) => {
    const sequence = [0, 1]
    const seedNth = [0, 1]
    n = typeof(n) == "number"? n : false;
        if(n > 1) {
            for(let i = 1; i <= n; i++) {
                if(seedNth.indexOf(i) == -1) {
                    sequence.push(sequence[i-1] + sequence[i-2]);
                }
            }
        }
        console.log(sequence[n])
        console.log(sequence)
}
const num = 1041;
nthFibonnaci(2)
console.log(num.toString(2));