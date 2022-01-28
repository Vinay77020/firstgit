var a = [1,2,3,4,10,6,7,8,9,5];
var b = Math.max(...a);

a.splice(a.indexOf(b),1);
var k=Math.max(...a)
console.log(k);
// console.log(b);