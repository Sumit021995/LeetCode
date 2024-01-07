// Write a function argumentsLength that returns the count of arguments passed to it.

var argumentsLength = function(...args) {
    return args.length
};


console.log(argumentsLength({}, null, "3")) // 3
console.log(argumentsLength([{}, null, "3"])) // 1