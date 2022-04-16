// --------ARRAYS--------

// Exercise 1:
// Write a function that takes as a first argument the number of times you want to repeat certain value and
// the value you want to repeat as the second argument. Then it should return a new array with the given values.
// Example:
// fill(3, 'a'); // expected output => ['a', 'a', 'a']
function repeatArray(times, value){
    const array = [];
    for(let i=0; i<times; i++){
     array.push(value)  
    };
    return array
};

console.log(repeatArray(3,"a"))


// Exercise 2:
// Write a function that takes an array as the only argument and reverts it. Avoid using array.prototype.reverse().
// Example:
// reverse([1,2,3]); // expected output => [3,2,1]
function reverseArray(arr){
    const array = [];
    for(let i=arr.length-1; i>=0; i--){
     array.push(arr[i])  
    };
    return array
};
const newArray = [1,2,3];
console.log(reverseArray(newArray))

// Exercise 3:
// Write a function that clears an array from all unnecessary elements (false, undefined, empty strings, 0, null).
// Example:
// compact([0, 1, false, 2, undefined, '', 3, null]); // expected output => [1,2,3]
function clearArray(arr){
    const filteredArray = arr.filter(value=>{
        return value !== false && value !==undefined && value !=='' && value !==null && value !==0
    })
    return filteredArray
};
const newArrayfilter = [0, 1, false, 2, undefined, '', 3, null];
console.log(clearArray(newArrayfilter));

// Exercise 4:
// Write a function that takes as an argument an array of arrays and returns an object composed of key-value pairs.
// Example: 
// formPairs([['a', 1],['b', 2]]); // expected output => { a: 1, b: 2}
function arrayToObject(arr){
    const obj = {};
    
    //if it's more thn 2 paramenters, it will take the first and last one
    for(let i=0; i<arr.length;i++){
        for(let k=1; k<arr[i].length; k++){ 
            obj[arr[i][0]] = arr[i][k]};
        };
    return obj;
}
const arrayToObj = [['a',1],['b',2]];
console.log(arrayToObject(arrayToObj))

// Exercise 5:
// Write a function that takes an array as a first argument and then two values as the second and third argument.
// It should return an array without the two values passed as arguments.
// Example:
// without([1,2,3,1,2], 1, 2); // expected output => [3]
function without (arr, value1, value2){
    const newArray = arr.filter(arrayValue=>{
        return arrayValue !== value1 && arrayValue !== value2
    }
    );
    return newArray
};
const arraywithout = [1,2,3,1,2];
console.log(without(arraywithout, 1, 2))

// Exercise 6:
// Write a function that takes two arrays as arguments and compares if they are identical.
// Example: 
// isEqual([1, 2, 3, 4],[1, 2, 3, 4]) // expected output => true
// isEqual([1, 2, 3, 4],[1, 2, 3, 4, 5]) // expected output => false
function isEqual (arr1, arr2){
    const result=[];
   if (arr1.length === arr2.length && arr1.length !==0){
       for (let i=0; i<arr1.length; i++){
           if(arr1[i] !== arr2[i]){
               result.push(false)
           }
       } 
       if (result.includes(false))
       {return false}
       else {return true}
   } 
   else if (arr1.length === 0)
   {return "arrays are empty"} 
   else return false
};

const array1 = [];
const array2 = []

console.log (isEqual (array1,array2))

// Bonus – Exercise 7: 
// Write a function that takes an array as the first argument and a number as the second argument.
// It should return the array split into parts of the determined size.
// Example:
// chunk([1, 2, 3, 4, 5, 6, 7], 2); // expected output => [[1, 2], [3, 4], [5, 6], [7]]
function split(arr, number){
    if (number === 0){
        return arr
    } else {
    const newArray = [];
        for (let k=0; k<arr.length; k += number){
            newArray.push(arr.slice(k,k+number)); 
    };
    return newArray}
};

console.log(split([1, 2, 3, 4, 5, 6, 7], 1))