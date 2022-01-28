const arr = [6,6,1,7,7,7,8,8,8,8];
const countUnique=arr=>{
    const counts = {};
    for (var i = 0;i <arr.length;i++){
        counts[arr[i]] = 1 + (counts[arr[i]] || 0);
    };
    return counts;
};
console.log(countUnique(arr));