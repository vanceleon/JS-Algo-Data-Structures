// works for strings only 


function hash(key, arrayLen) {
    let total = 0;
    for (let char of key ) {
        // map "a" to 1, 'b' to 2
        let value = char.charCodeAt(0) - 96;
        total = (total + value) % arrayLen;

    }
    return total;   
}