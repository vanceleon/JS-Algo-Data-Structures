const selectionSort = arr => {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      console.log(i, j);
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    if (i !== min) {
      console.log("Before swap", arr);
      let temp = arr[i];
      arr[i] = arr[min];
      arr[min] = temp;
      console.log("after swap", arr);
    }
  }
  console.log(arr);
  return arr;
};
selectionSort([23, 4, 213, 54, 5]);
