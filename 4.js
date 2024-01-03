var fib = function(n) {
    let f = [0,1];
    for(i=0;i<n-2;i++){
        f.push(f[i]+f[i+1])
    }
    if(n==0){
        return 0;

    }else if (n==1){
        return 1;
    }else{
    return f[n-2]+f[n-1];
    }
};

console.log(fib(10));