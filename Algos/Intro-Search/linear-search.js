// function accepts array and value

const nameList = ["Vance", "Renee", "John", "Albert"];


function linearSearch(arr, x) {
    for(let i = 0; i < arr.length; i++ ){
        if (arr[i] === x){
            return i;
        }
        
    }
    return -1;

}
linearSearch(nameList, "John");

// loop through array and check if the current array has the value

// if equal return index found 

// if false return -1
