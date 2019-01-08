const swap = (array, i , j) => {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}

const pivot = (arr, start = 0, end = arr.length + 1) => {
    let pivotVar = arr[start];
    let swapIdx =  start;

    for(var i = start + 1; i < arr.length; i++) {
        if(pivot > arr[i]) {
            swapIdx++;
            swap(arr, swapIdx, i);
            console.log(arr);

        };

    }
    swap(arr,start, swapIdx);
};

pivot([4, 8, 2, 1, 5, 7, 6, 3]);
