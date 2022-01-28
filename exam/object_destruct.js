const employee = {
    id : 23,
    name : 'vinaykumar',
    age : 24,
    address :{
        city : "Hyderabad",
        country : "india",
    },
};

// const name = employee.name;
// const age = employee.age;

// console.log(name);
// console.log(age);

//  const{name, age} = employee
//  console.log(name);
//  console.log(age);

// const {name:fullName,age} = employee
// console.log(fullName);
// console.log(age);


// const {name : fullName = "veeramalla vinay kumar", age} = employee
// console.log(fullName);
// console.log(age);

// const{name :fullName,address : {city}, age} = employee;
// console.log(city);
// console.log(fullName);
// console.log(age);

function displayEmployee(employee){
    console.log(`the employee name is ${employee.name} and age is ${employee.age}`);
}
displayEmployee(employee);