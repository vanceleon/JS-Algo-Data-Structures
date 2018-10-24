// // console.log("practicing my JS in CS")

// function addUpTo(n) {
//     let total = 0;
//     for(let i = 0; i <= n; i++) {
//         total += i;
//     }
//     return total;
// }
// // console.log(addUpTo(10000))

// // this function is more efficient
// function addUpTo(n) {
//     return n * (n + 1) / 2;
// }



// // let t1 = performance.now();
// // addUpTo(1000000000);
// // let t2 = performance.now();
// // console.log(`Time Elapsed: ${(t2 - t1)/1000} seconds.`)





// // a way to make this faster is by looking up the charcodes for each variable that you are trying to look up and test to see if those return true


// function charCount(str) {
//     // make object to return at end
//     let result = {};
//     // loop over string, for each character..
//     for (let i = 0; i < str.length; i++){
//         let char = str[i].toLowerCase();
//         if (/[a-z0-9]/.test(char)) {
//             if (result[char]> 0){
//         // if the char is a number/letter AND key in object, add one to count
//                 result[char]++;
//             }else{
//                 // if the char is a number/letter AND not in object, add it to object  and set value to 1
//                 result[char] = 1
//             };

//         }
//     }
//     // return object at end
//     return result
//         // if character is something else (space, period, etc.) don't do anything

// } 
// console.log(charCount("Renee and Vance Sitting in a Tree Kissing"))


function same(arr1, arr2){
    if (arr1.length !== arr2.length){
        return false;
    }
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}
    for(let val of arr1){
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    }
    for (let val of arr2) {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
    }
    for (let key in frequencyCounter1){
        if (!(key in frequencyCounter1)) {
            return false
        }
        if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
            return false
        }
    }
    return true
}
console.log(same([1,3,5], [1,25,12]))
