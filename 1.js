let expect = function(val) {
    return {
        toBe:(val1)=>{
            if(val1 === val){
                return true
            }else {
                return new Error('Not Equal')
            }
        } ,
        
        notToBe:(val1)=>{
            
            if(val1 !== val){
                return true
            }else {
                return new Error('Equal')
            }
            
        }
        }
    
};


console.log(expect(5).toBe(5)); // true
console.log(expect(5).notToBe(5)); // throws "Equal"
    

