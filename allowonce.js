/*
 Given a function fn, return a new function that is identical to the original function except that it ensures fn is called at most once.

The first time the returned function is called, it should return the same result as fn.
Every subsequent time it is called, it should return undefined.
 
 */

// do while loop syntex
// do {
    
// } while (condition);

var once = function(fn) {
    let calls=false;
    let result 
    return function(...args){
       if (!calls) {
      result = fn.apply(this, args);
      calls = true;
      return result;
    } else {
      return undefined;
    }
    }
};

/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */

var once = function(fn) {
    let called = false;

	return function(...args){
        if(called)
            return undefined;
        
        called = true;
        return fn(...args);
    }
};
 