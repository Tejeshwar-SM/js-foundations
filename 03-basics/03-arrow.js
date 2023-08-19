// const obj = {
//     username: "tejeshwar",
//     price: "399!",
//     welcomeMessage: function () {
//         console.log(`Hey there ${this.username}!, Welcome to our pod!!`);
//         // console.log(this); --> returns this object
//     }
// }
// obj.welcomeMessage();
// obj.username = "Sic Mundus"
// obj.welcomeMessage();
// console.log(this) -->> Returns an empty object


// function one() {
//     let username = "Raju"
//     console.log(this.username)
// }
// one();
// const one = function () {
//     let username = "Raju"
//     console.log(this.username)
// }
// one();
// const one = () => {
//     let username = "Bheem"
//     console.log(this.username);
// }
// one();

const addTwo = (num1,num2) =>  (num1+num2)
const addTwo2 = (num1,num2) => {return num1+num2;}
const addTwo3 = (num1,num2) =>  ({username: "Tejeshwar"})

//----> to return objects, wrap them in ()

console.log(addTwo(1,2));
console.log(addTwo2(3,4));
console.log(addTwo3(3,4));
