let arr1 = [1,2,3] 

let fn = function(a,b){
    return{
        plusone:(a,b)=>a+1
        ,plusI:(a,b)=>a+b
        ,constant:(a,b)=>42
    }
}


var map = function(arr, fn) {
    let arrNew=[];
    for(let i=0;i<arr.length;i++){
        arrNew.push(fn(arr[i],i))
    }
    return arrNew;
};
    
console.log(map(arr1,function plusone(n) { return n + 1; }));
console.log(map(arr1,function plusI(n,i) { return n + i; }));
console.log(map(arr1,function constant() { return 42; }));
    
// [ 2, 3, 4 ]
// [ 1, 3, 5 ]
// [ 42, 42, 42 ]

// let arr2 = [1,2,3] 
// let fn2 = function plusI(){}
// let arr3 = [10,20,30]
// let fn3 = function constant(){};