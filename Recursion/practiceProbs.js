//factorial(1) // 1
// factorial(2) // 2
// factorial(4) // 24
// factorial(7) // 5040

function factorial(num){
    if(num <= 0 ) {
        return 1;
    } 
    return num * factorial(num - 1);
  }
  
  factorial(5);


  function power(base, expo){
    if(expo === 0) {
        return 1;
    }
    expo--;
    console.log(base * power(base,expo));
    return base * power(base, expo)

}

power(4,2);

let productOfArray = function(arrProd) {
    //     let num = arr.pop()
        if(arrProd.length === 1) {
            return arrProd[0];
        }else {
            return arrProd.pop() + productOfArray(arrProd);   
        }
    
    }
    
    console.log(productOfArray([[1,2,3,10]]));
    


    function productOfArray(arr) {
        if (arr.length === 1) {
          return arr[0];
        }
        else {
      //     console.log(arr.pop() * array_sum(arr));
          console.log(arr)
          return arr.pop() * productOfArray(arr);
      
        }
      };
      
      console.log(productOfArray([1,2,3,4,5,6]));