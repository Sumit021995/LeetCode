// Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.

// Example 1:

// Input: nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]
// Explanation:
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]
// Example 2:

// Input: nums = [-1,-100,3,99], k = 2
// Output: [3,99,-1,-100]
// Explanation: 
// rotate 1 steps to the right: [99,-1,-100,3]
// rotate 2 steps to the right: [3,99,-1,-100]

let nums = [1,2,3,4,5,6,7] 
let k = 3
let nums1 = [1,2] 
let k1 = 3

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    let n = nums.length;
   if(!nums.length){
    return;
   }
   k=k%nums.length
   console.log(k);
   const r= nums.splice(-k)
   console.log(r);
   nums.unshift(...r)
   console.log(nums); // [1,2,3,4]
   return nums;
    

};

console.log(rotate(nums,k));
console.log(rotate(nums1,k1));
 