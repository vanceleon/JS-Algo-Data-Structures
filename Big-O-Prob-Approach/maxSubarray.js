// function maxSubarraySum(arr, num) {
//     if (num > arr.length) {
//         return null;
//     }
//     var max = -Infinity;
//     for (let i = 0; i < arr.length - num + 1; i ++) {
//         temp = 0;
//         for (let j = 0; j < num; j ++) {
//             temp += arr[i + j];

//         }
//         if (temp > max ) {
//             max = temp;

//         }
//     }
//     console.log(max);
//     return max;

// }

// maxSubarraySum([2,6,9,2,1,8,5,6,3],3);


// Sliding window approach
// Sliding window approach could potentially be used for calculating the TTM financial reports, or some statistical approach
function maxSubarraySum(arr, num) {
    let maxSum = 0;
    let tempSum = 0;
    if (arr.length < num ) return null;
    for (let i = 0; i < num; i++) {
        maxSum += arr[i];

    }
    tempSum = maxSum;
    for (let i = num; i < arr.length; i++) {
        tempSum = tempSum - arr[i - num] + arr[i];
        maxSum = Math.max(maxSum, tempSum);
    }
    console.log(maxSum);
    return maxSum;
}
maxSubarraySum([2,6,9,2,1,8,5,6,3],3);