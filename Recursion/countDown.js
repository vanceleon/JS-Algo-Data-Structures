function countDown(num) {
    if(num <= 0) {
        console.log("All done!");
        return;
    }
    console.log(num);
    num--;
    countDown(num);
}

countDown(20);



function recursiveRange(num) {
    if(num <= 0) {
        return 0;
    }
    return num-- + recursiveRange(num);
}

recursiveRange(3);