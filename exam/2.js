// first largest number
//  var num1 = parseFloat(prompt('enter first number:'));
//  var num2 = parseFloat(prompt('enter second number'));
//  var num3 = parseFloat(prompt('enter third number'));
//  let largest;
//  if(num1 >=num2 && num1>=num3){
//      largest = num1;
//  }else if (num2 >= num1 && num2 >= num3){
//      largest = num2;
//  }
//  else {
//      largest = num3;
//  }
//  console.log(largest);



// second largest number

var arr = [23,24,25];
var newArr = arr.slice(0).sort(function(a,b){return b-a})[1]
 console.log(newArr);

//  seperating even and odd in array

var arr = [2,6,3,7,8,3,5,4,3,6,87,23,67,4];
var isEven = num => num %2 ===0;
var response = (a,b) =>{
    if(isEven(a) && !isEven(b)){
        return -1;
    };
    if(!isEven(a) && isEven(b)){
        return 1;
    };
    return 0;
};
arr.sort(response);
console.log(arr);

// factorial of a number

var number = prompt('please enter a number');
var fact = 1;
if(number == 0){
    console.log(`the factorial of ${number} is 1`);
}else if (number < 0){
    console.log('-ve number not possible');
}else
{
    for(var i= 1; i<=number;i++){
        fact = fact * i;
        
    }
    console.log(fact);

}


