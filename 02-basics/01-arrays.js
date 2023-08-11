const myArr = [1,2,3,4,5];
// console.log(myArr[1]);

const myArr2 = new Array(1,2,3,4);
// console.log(myArr2);

// myArr.push(7);
// myArr.push(10)
// myArr.pop()
// myArr.shift();

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(9));

// const newArr = myArr.join();
// console.log(myArr);
// console.log(typeof newArr);

//slice, splice

console.log("A", myArr);
const myNewArr1 = myArr.slice(1,3);
console.log(myNewArr1);
console.log("B",myArr);

const myNewArr2 = myArr.splice(1,3);
console.log("C", myArr);
console.log(myNewArr2);

//slice returns a piece of array but doesn't affect the original array.
//splice changes the original array by removing, replacing, or adding values and returns the affected values.


