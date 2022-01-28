// for...in loop

// iterate through an object example1

var students = {
    name : 'vinay',
    id : 'sap234',
    class : 10,
    gender : 'male'
}
   for(let value in students){
       console.log(`${value} : ${students[value]}`);
   }


//    updating values of properties

const salaries = {
    vinay : 10000,
    vishnu :12000,
    teja : 13000
}
for(let i in salaries){
    let salary = "$" + salaries[i];
    console.log(`${i} : ${salary}`);
}

// iterating over a string

var string = 'Rebel Star';
for(let i in string){
    console.log(string[i]);
}


// for loop

var vinay = ['male',24,false,{empolyed : true}]
for(i=0;i < vinay.length;i++){
    console.log(vinay[i]);
}

var i = 0;
for(; i<5; i++){
    document.write(i + "<br>");
}
document.write("<br> END")

var i = 0;
for (; i<5; ){
    i++;
    document.write("<br>" + i)
}

// breaking loop
 var i=0;
 for(; ; i++){
     if(i==5){
         break;
     }
     document.write("<br>" +i)
 }

//  while loop

var counter = 0;
while(counter < 10){
    console.log('number:' + counter);
    counter++;
}

var counter = 0;
while (counter < 10){
    if (counter ==5)
    break;
    console.log('number:' + counter);
    counter++;
}

var res = 0;
while(res < 10){
    res++;
    if (res ==5)
    continue;
    console.log('number:' +res);
}

// do-while

var i = 0;
do{
    console.log(i+ " ");
    i++;
}while(i<5);

var x = 7;
do{
    console.log('Vinay');
}while(x>5)