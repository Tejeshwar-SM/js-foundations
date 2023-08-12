//singleton 
// Object.create -> constructor mtd

//Object Literals

const mySymbol = Symbol("key1");
const JsUser = {
    name:"Tejeshwar",
    "full name": "Tejeshwar Singh",
    email: "tej@github.com",
    isLoggedIn: false,
    [mySymbol]: "encryptedKey"
}
// console.log(JsUser["full name"]);
// console.log(JsUser.email);
// console.log(JsUser[mySymbol]);
// console.log(typeof JsUser[mySymbol]);

JsUser.email = "tejeshwar@gitlab.com";
// Object.freeze(JsUser);
JsUser.email = "tej@microsoft.com" 
// console.log(JsUser);

JsUser.greetings = function() {
    console.log("Welcome User!");
}
JsUser.greetings2 = function() {
    console.log(`Hello Mr.${this.name}`);
}
console.log(JsUser.greetings());
console.log(JsUser.greetings2());

