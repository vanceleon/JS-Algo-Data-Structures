// function factorial(num) {
//     let total = 1; 
//     for(let i = num; i > 0; i--) {
//         total *= i;
//         // console.log(num);
//     }
//     return total;
// }
// factorial(10);


// Recursively
function factorial(num) {
    if(num === 1) return 1;
    return num * factorial(num - 1)
}
factorial(4)