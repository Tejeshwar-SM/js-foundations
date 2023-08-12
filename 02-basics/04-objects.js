// const newUser = new Object()
const newUser = {}
newUser.id = "123asmdn"
newUser.name = "John"
newUser.isLoggedin = false

// console.log(newUser);

const regularUser ={
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "tejes",
            lastname: "choudhary"
        }
    }
}
// console.log(regularUser.fullname?.userfullname.firstname);

const obj1 = {1:"a", 2:"b"};
const obj2 = {3:"a", 4:"b"};
const obj3 = {5:"a", 6:"b"};

// const obj4 = {obj1, obj2}
// console.log(obj4);

// const obj4 = Object.assign({}, obj1, obj2, obj3);
// console.log(obj4);

const obj4 = {...obj1,...obj2};
// console.log(obj4);

//-> When values come from database -> they come like an array of objects
const users = [
    {
        id: 1,
        email:"abc@gmail.com"
    },
    {
        id: 2,
        email:"def@gmail.com"
    },
    {
        id: 3,
        email:"ghi@gmail.com"
    },
]

// console.log(users[0].email);
// console.log(newUser);

// console.log(Object.keys(newUser));
// console.log(Object.values(newUser));
// console.log(Object.entries(newUser));
// console.log(newUser.hasOwnProperty('isLoggedin'));

//----------------------------------------------------------------------------------------------------------------------------

const course = {
    courseName: "js-speedrun",
    price: "999",
    courseInstructor: "Tejesimas"
}
const {courseInstructor: instructor} = course;
// console.log(instructor);

// const navbar = ({company}) => {

// }
// navbar(company= "tejesh")
//an example of destructuring

//JSON -> This is how api calls come
// {
//     "courseName": "js-speedrun",
//     "price": "999",
//     "courseInstructor": "Tejesimas"
// }
//-> Sometimes in the form of arrays
// [
//     {},
//     {},
//     {}
// ]
