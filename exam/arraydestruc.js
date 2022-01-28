const fruits = ["apple","mango","banana","pineapple"];
 
// const apple = fruits[0];
// const mango = fruits[1];

// destructuring
const[fruit1, ,fruit2, ...rest] = fruits

console.log(fruit1);
console.log(fruit2);
console.log(rest);