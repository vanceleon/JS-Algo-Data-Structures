const sortedArr = [1, 2, 3 ,4 ,5, 6, 9];

function binarySearch(sortedArray, x) {
    let leftPoint = 0;
    let rightPoint = sortedArr.length - 1;
    let middlepoint = Math.ceil((leftPoint + rightPoint) / 2);
    // console.log(middlepoint, leftPoint, rightPoint);
    while (sortedArr[middlepoint] !== x && leftPoint <= rightPoint) {
        // console.log(middlepoint, leftPoint, rightPoint);
        if(sortedArray[middlepoint] === x) return middlepoint;
        if(sortedArray[middlepoint] > x){
            rightPoint = middlepoint - 1;
        }else{
            leftPoint = middlepoint + 1;

        }
        middlepoint = Math.ceil((leftPoint + rightPoint) / 2)
        

    }
    if(sortedArr[middlepoint] === x) {
        return middlepoint;
    }
    return -1;
}
binarySearch(sortedArr,5);

