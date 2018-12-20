const bubbleSort = (arr) => {
    for(let i = arr.length; i > 0; i--){
        for(let j = 0; j < i - 1; j++) {
            console.log("arr", arr);
            if(arr[j] > arr[j + 1]) {
                // swap
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}
bubbleSort([34,23,13,54,2,6]);