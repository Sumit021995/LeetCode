// Given an integer array nums, a reducer function fn, and an initial value init, return the final result obtained by executing the fn function on each element of the array, sequentially, passing in the return value from the calculation on the preceding element.

// This result is achieved through the following operations: val = fn(init, nums[0]), val = fn(val, nums[1]), val = fn(val, nums[2]), ... until every element in the array has been processed. The ultimate value of val is then returned.

// If the length of the array is 0, the function should return init.

// Please solve it without using the built-in Array.reduce method.

let nums2 = []
let fn2 = function sum(accum, curr) { return 0; }
let init2 = 25

let nums1 = [1,2,3,4]
let fn1 = function sum(accum, curr) { return accum + curr * curr; }
let init1 = 100


let nums = [1,2,3,4]
let fn = function sum(accum, curr) { return accum + curr; }
let init = 0

var reduce = function(nums, fn, init) {
    let a = init;
    if(nums.length === 0){
            return a;
    }else{
        for(let i=0; i<nums.length; i++){
         init = fn(init,nums[i])     
    }
    return init;
    }    
};

console.log(reduce(nums, fn, init)); // 10
console.log(reduce(nums1, fn1, init1));// 130
console.log(reduce(nums2, fn2, init2)); // 25


















// Input: 
// Output: 10
// Explanation:
// initially, the value is init=0.
// (0) + nums[0] = 1
// (1) + nums[1] = 3
// (3) + nums[2] = 6
// (6) + nums[3] = 10
// The final answer is 10.
// Example 2:

// Input: 

// Output: 130
// Explanation:
// initially, the value is init=100.
// (100) + nums[0] * nums[0] = 101
// (101) + nums[1] * nums[1] = 105
// (105) + nums[2] * nums[2] = 114
// (114) + nums[3] * nums[3] = 130
// The final answer is 130.
// Example 3:

// Input: 

// Output: 25
// Explanation: For empty arrays, the answer is always init.

 