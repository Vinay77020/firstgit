// array and object

const company = {
    name : "google",
    locations : ['singapore','india','germany'],
};
const {
    locations : [, , loc],
} = company;

console.log(loc);