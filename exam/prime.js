var arr=[1,9,7,3,19,11,8,17,6,22,31,10];

   function isPrime(num){
       for (var i=2;num>i;i++){
           if(num%i==0){
               return false;
           }
       }
       return num>1;
   };

console.log(arr.filter(isPrime));