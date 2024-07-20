// Date
let myDate = new Date();
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleTimeString());
// console.log(typeof myDate);

// let myCreatedDate=new Date(2022,0,23)
let myCreatedDate = new Date("2022-01-23");
// console.log(myCreatedDate.toLocaleString());
let myTimeStamps = Date.now();
console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));
let newDate = new Date();
console.log(newDate.getMonth() + 1);
console.log(
  newDate.toLocaleString("default", {
    weekday: "long",
    timeZone: "UTC",
    year: "numeric",
    month: "long",
    day: "numeric",
  })
);
