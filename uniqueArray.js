let a = [1,2,3,4,5,6,7,8,2,6,4,3,2,5,6,6];
let b = [];

for (let i = 0; i < a.length; i++) {
   if(!b.includes(a[i])){
    b.push(a[i])

   }
     
}
console.log(b);
