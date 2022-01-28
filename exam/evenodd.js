var a = [23,43,57,42,46,54,77,89,46,24]
var even = [];
var odd = [];
var i;
for(i=0;i<a.length;i++){
    if (a[i]%2 ==0){
        even.push(a[i]);
    }else{odd.push(a[i]);
    }
}
console.log(even);
console.log(odd);