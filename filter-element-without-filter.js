// Given an integer array arr and a filtering function fn, return a filtered array filteredArr.

// The fn function takes one or two arguments:

// arr[i] - number from the arr
// i - index of arr[i]
// filteredArr should only contain the elements from the arr for which the expression fn(arr[i], i) evaluates to a truthy value. A truthy value is a value where Boolean(value) returns true.

// Please solve it without the built-in Array.filter method.
let arr = [0,10,20,30]
let fn = function greaterThan10(n) { return n > 10; }

let arr1 = [1,2,3]
let fn1 = function firstIndex(n, i) { return i === 0; }
let arr2 = [-2,-1,0,1,2] 
let fn2 = function plusOne(n) { return n + 1 }

var filter = function(arr, fn) {
    let newArr = [];
    for(let i=0; i<arr.length; i++){
        if(fn(arr[i],i)){
            newArr.push(arr[i])
        }
    }
    return newArr;
};

console.log(filter(arr,fn)); // [ 20, 30 ]
console.log(filter(arr1,fn1)); // [1]
console.log(filter(arr2,fn2)); // [ -2, 0, 1, 2 ]


