// var a = 100;
// if (true) {
//     a = 50 
//     console.log(a);
// }
// console.log(a);

// let a = 10;
// const b = 20;
// if (true) {
//     let a = 12;
//     const b = 25;
//     console.log(`${a} and ${b}`);
// }
// console.log(`${a} and ${b}`);

//-----Function declaration
console.log(addone(2));
function addone(num) {
    return num+1;
}
//--------Function expression
// console.log(addFive(5));
const addFive = function (num) {
    return num+5;
}
