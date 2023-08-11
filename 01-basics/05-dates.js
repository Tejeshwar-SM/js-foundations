let myDate = new Date();
// console.log(myDate.toString());
// console.log((myDate.toDateString()));
// console.log(myDate.toLocaleString());

let myCreatedDate = new Date(2023, 1, 23, 5, 3);

// console.log(myCreatedDate.toLocaleString());

let mySecondDate = new Date("01-14-2023");
// console.log(mySecondDate.toLocaleString());

let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(mySecondDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
// console.log(newDate.getMonth()+1);

// console.log(`${newDate.getDay()} and time is ${newDate.getTime()}`);

newDate.toLocaleString('default', {
    weekday: "long",
})


