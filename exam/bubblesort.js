function bubbleSort(array){
    for(let i=0;i<array.length -1;i++){
        for(let j=0;j<array.length - 1 - i; j++){
            if(array[j] > array[j+1]){
                [array[j], array[j+1]]=[array[j+1],array[j]];
            }
        }
    }
    return array;
};
var array = [1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92];
console.log(bubbleSort(array));