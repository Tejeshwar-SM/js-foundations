"use strict"; /*treat all js as newer version*/
let named = "33abc";
let stringNum = Number(named);
// console.log(typeof named);
// console.log(typeof stringNum);
// console.log(stringNum);
//-------------------------------------------------//
let str1 = "Hello";
let str2 = " World";
let str3 = str1+str2;
// console.log(str3);
// console.log(1+2+"2");
// console.log("1"+2+2);

//comparison <,> and == work differently -> <,> convert null to number so null>=0 is true
//while == doesn't convert null to 0 thus null==0 is false.
// "2"==2 gives true, "2"===2 gives false

//---------------------------------------------------------------------//

/*JavaScript is a dynamically typed language. This means that variable types are determined at runtime, and you do not need to explicitly declare the type of a variable before using it. You can assign different types of values to a variable during its lifetime.*/

//Datatypes Summary
//Primitives : Are called by value : 
//7 types : String, Boolean, Number, null, undefined, Symbol, BigInt

const id = Symbol("123");
const anotherId = Symbol("123")
console.log(id===anotherId);
const bigInteger = 13131241932172387193n 
//-> n after the end of a big number converts it into BigInt datatype

//Non-Primitive : Are called by reference:
// Arrays, Objects, Functions
let arr = ["dogs", "cats", "parrots"];
const myObj = {
    naam : "Gandhi",
    age : 122
}
const myFunc = function() {
    console.log("Hello World");
}


