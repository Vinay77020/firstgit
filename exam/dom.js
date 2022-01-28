var a = document.getElementById('krack')

a.innerText = "vinay"
a.style.color ='red'
// a.innerHTML = 'kumar'
console.log(a);

var a =Array.from( document.getElementsByClassName("kick"))
a.forEach((ele)=>{
    ele.style.color="green"
})
console.log(a);


var a = Array.from(document.getElementsByTagName("div"))
 a.forEach((ele) =>{
    ele.style.color = "blue"
})

var a = Array.from(document.querySelectorAll('h2'))
a.forEach((ele) =>{
    ele.style.color = "hotpink"
})
console.log(a);

var a = document.querySelector('h1')
a.style.color = 'yellow'
console.log(a);
 


