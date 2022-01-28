var a = confirm('your good')
var b = newPromise((resolve,reject) =>{
    if(a=true){
        resolve('hai')
    }else{
        reject('hello')
    }
    a.then((res) =>{
        res("hai")
    })
    .catch((error) =>{
        res(error)
    })
})