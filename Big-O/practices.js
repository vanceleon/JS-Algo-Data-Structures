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



// let t1 = performance.now();
// addUpTo(1000000000);
// let t2 = performance.now();
// console.log(`Time Elapsed: ${(t2 - t1)/1000} seconds.`)






function charCount(str) {
    // make object to return at end
    let result = {};
    // loop over string, for each character..
    for (let i = 0; i < str.length; i++){
        let char = str[i].toLowerCase()
        if (result[char]> 0){
    // if the char is a number/letter AND key in object, add one to count
            result[char]++;
        }else{
            // if the char is a number/letter AND not in object, add it to object  and set value to 1
            result[char] = 1
        };
    }
    // return object at end
    return result
        // if character is something else (space, period, etc.) don't do anything

} 
console.log(charCount("Renee"))