const bubbleSort = (arr) => {
    let noSwaps;
    for(let i = arr.length; i > 0; i--){
        noSwaps = true;
        for(let j = 0; j < i - 1; j++) {
            console.log("arr", arr);
            if(arr[j] > arr[j + 1]) {
                // swap
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                noSwaps = false;
            }
        }
    
    if(noSwaps) break;
    }
    return arr;
}
bubbleSort([34,23,13,54,2,6]);