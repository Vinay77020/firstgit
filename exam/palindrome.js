//  var string = prompt('please enter a string');
//  var len = string.length;
//  var msg = 'it is a palindrome';
//  for(var i = 0; i < len/2 ; i++){
//      if(string[i] != string[len -1 -i]){
//         msg = 'it is not a palindrome';
//      }
//  }
//  console.log(`${string}:${msg}`);



//  palindrome number

var num = prompt('enter the number');
var originalNum = num;
var reverse = 0;
 while(num !=0){
     reverse = (reverse*10)+(num%10);
     num = parseInt(num/10);
 }
 if(originalNum == reverse){
     document.write(reverse+"palindrome Number");
 }else{
     document.write(reverse+"Not a Palindrome Number");
 }
