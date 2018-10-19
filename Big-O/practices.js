// console.log("practicing my JS in CS")

function addUpTo(n) {
    let total = 0;
    for(let i = 0; i <= n; i++) {
        total += i;
    }
    return total;
}
// console.log(addUpTo(10000))

// this function is more efficient
function addUpTo(n) {
    return n * (n + 1) / 2;
}



let t1 = performance.now();
addUpTo(1000000000);
let t2 = performance.now();
console.log(`Time Elapsed: ${(t2 - t1)/1000} seconds.`)