//for seed 1 => next = previous * 16807 % 2147483647

function* generateRandomNumber(seed) {
    let prev = seed;
    while(true) {
        prev = yield prev * 16807 % 2147483647
    }
}
 const gen = generateRandomNumber(1)

console.log(gen.next().value);
console.log(gen.next().value);

console.log(gen.next().value);