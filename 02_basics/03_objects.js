// singleton

// object literals
// Objct.create
let mSymbol=Symbol('mySym1');
const jsUser={
    "full name":"Hitesh Khainad",
    uname:"Hites",
    [mSymbol]:'mySym1',
    age:55,
    location:"Hyderabad",
    isLoggedIn:false
}
// console.log(jsUser.location);
// console.log(jsUser['full name']);
// console.log(jsUser[mSymbol]);
// Object.freeze(jsUser)
jsUser.age=45;
console.log(jsUser);
jsUser.greeting=function() {
    console.log('Hello from function');
}
jsUser.greetingTwo=function() {
    console.log(`Hello ${this["full name"]}, from function`);
}
console.log(jsUser.greeting);
console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());