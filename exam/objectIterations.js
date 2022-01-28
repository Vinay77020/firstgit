// for...in loop
// hasOwmProperty = method ensures that the property belongs to to the 
// person Object,not the inherited properties

let persons = {
    firstName:'vinay',
    lastNmae :'kumar',
    age :24,
    location :'hyderabad'
};
for(let key in persons){
    if(persons.hasOwnProperty(key)){
      console.log(`${key} : ${persons[key]}`);  
    }
}

// Object.keys() = takes an object and return keys
// for each used to access all the keys and values


let person = {
    firstName : 'vishnu',
    lastName : 'vardhan',
    age : 19,
    location : 'hyderabad'
};
Object.keys(person).forEach(key =>{
    console.log(`${key} : ${person[key]}`);
});

// Object.values() = takes an object as an argument and returns an arrayof the object value

let employ = {
    firstName : 'mahender',
    lastName : 'karan',
    age : 30,
    location : 'hyderabad'
};
Object.values(employ).forEach(value =>{
    console.log(`${value}`);
});


// Object.getOwnPropertyNames()=
// methos accepts an object as an argument and returns an 
// array of objects keys,including non-enumerable 
// properties except for the ones which use symbol

let workers = {
    fName : 'tarak',
    lName : 'ram',
    age:32,
    location : 'hyderabad'
};
Object.getOwnPropertyNames(workers).forEach(key =>
    console.log(`${key} : ${workers[key]}`));