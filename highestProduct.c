#include <stdio.h>
#include <stdlib.h>
#include <assert.h>

#define MAX(a, b) (((a) > (b)) ? (a) : (b))
#define MIN(a, b) (((a) < (b)) ? (a) : (b))
#define SIZE(arr) (sizeof(arr) / sizeof(arr[0]))

int highestProductOf3(int arr[], int length)
{
  // instructions
  // find highest multiple/product of three in array 
  // assume any input array at least 3 integers
  // take account of negative numbers - * - = +
  // return the highest multiple
  
  // sliding window approach
  int maxProduct = 0;
  int tempProduct = 0;
  int productLength = 3; //setting the mutiple length requirement to 3
  if (length < productLength){
   return NULL;
  }  
  for (int i = 0; i < productLength; i++){
    maxProduct += arr[i];
  }
  tempProduct = maxProduct;
  for(int i = productLength; i < length;i++){
    tempProduct = tempProduct / arr[i- productLength] * arr[i];
    maxProduct = MAX(maxProduct,tempProduct);
  }
  return maxProduct;
}


int main(int argc, char* argv)
{
  int arr1[] = {-10, -10, 1, 3, 2};
  int arr2[] = {1, 10, -5, 1, -100};
  int arr3[] = {5, -20, 19, 16, 4};
  
  printf("Highest product of arr1 is: %d\n", highestProductOf3(arr1, SIZE(arr1)));
  printf("Highest product of arr2 is: %d\n", highestProductOf3(arr2, SIZE(arr2)));
  printf("Highest product of arr3 is: %d\n", highestProductOf3(arr3, SIZE(arr3)));
  
  return 0;
}