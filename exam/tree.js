// getting unique values like 1-->2,2-->3

var a = [1,1,2,2,2,3,3,3,3,4,4,5]
var countUnique = a =>{
    var counts = {};
    for(let i = 0; i<a.length;i++){
        // counts[a[i]]=(counts[1+a[i]] ||0 )
        counts[a[i]]=1+(counts[a[i]] || 0)
    }
    return counts;
};
console.log(countUnique(a));