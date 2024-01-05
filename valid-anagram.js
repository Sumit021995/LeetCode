let s='Saurav'
let t = 'Sauvar'

let u = "mom"
let v = "som"

let matchLetter = function(a,b){
// conditions
// length // count of letters must be same
 if(a.length == b.length){
    let x = a.split('').sort().join('');
    console.log(x);
    let y = b.split('').sort().join('');
    console.log(y);
    if(x===y){
        return true;
    }else return false;
    
    }else{
        return false;
    }
}



console.log(matchLetter(u,v));
console.log(matchLetter(s,t));