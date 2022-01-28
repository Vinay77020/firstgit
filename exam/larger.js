// map method

var a = [10,20,30,40,50,60,70,80];
var c = a.map((value)=>{
    return 'vinay' + value;
});
console.log(c);

// filter method

var a = [12,13,43,12,78,45,90,87]
var b = a.filter((value,index) =>{
    return a.indexOf(value)>3

})
console.log(b);

var a = ['nan',45,'ban',10,'kak',20,'han','jij']
var b = a.filter((index) =>{
    return typeof(index) ==='string'
})
console.log(b);

// foreach method using for iteration of array it will take call back function

var a = ['manish','vinay','teja','rajesh','pooja']
var b = a.forEach(function(value,index){
   document.write(index + ":" + value )
})