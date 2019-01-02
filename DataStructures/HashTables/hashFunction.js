// works for strings only 

// this is the hash key function generator
function hash(key, arrayLen) {
    let total = 0;
    for (let char of key ) {
        // map "a" to 1, 'b' to 2
        let value = char.charCodeAt(0) - 96;
        total = (total + value) % arrayLen;

    }
    return total;   
}

// Hash Table Class
class HashTable {
    constructor() {
        this.keyMap = new Array(size);

    }
    _hasy(key){ //hash function for key value
        let total = 0;
        let WEIRD_PRIME = 31;
        for(let i = 0; i < Math.min(key.length, 100); i++){
            let char = key[i];
            let value = char.charCodeAt(0) - 96;
            total = (total * WEIRD_PRIME + value) % this.keyMap.length;
        }
        return total;
    }

    set(key, value) {
        let index = this._hash(key);
        if (!this.keyMap[index]){
            this.keyMap[index] = [];
        }
        this.keyMap[index].push([key,value]);
    }
    get
}