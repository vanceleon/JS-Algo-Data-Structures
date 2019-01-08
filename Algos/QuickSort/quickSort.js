const swap = (array, i, j) => {
  let temp = array[i];
  array[i] = array[j];
  array[j] = temp;
};

const pivot = (arr, start = 0, end = arr.length + 1) => {
  let pivotVar = arr[start];
  let swapIdx = start;

  for (let i = start + 1; i < arr.length; i++) {
    if (pivotVar > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
      console.log(arr);
    }
  }
  swap(arr, start, swapIdx);
  return swapIdx;
};

// pivot([4, 8, 2, 1, 5, 7, 6, 3]);

const quickSort = (arr, left = 0, right = arr.length - 1) => {
  let pivotIndex = pivot(arr, left, right);
  if (left < right) {
    quickSort(arr, left, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
};

quickSort([4, 6, 9, 1, 2, 5]);
