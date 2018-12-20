const bubbleSort = (arr) => {
    for(let i = 0; i < arr.length; i++){
        for(let j = i - 1; arr.length; j++) {
            if(arr[j] > arr[j + 1]) {
                arr[j] = arr[j + 1];
            }
        }
    }
    return arr;
}
bubbleSort([34,23,13,54,2,6]);