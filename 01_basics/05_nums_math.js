let score=400;

const balance=new Number(500);
const newNumber=new Number(500.55697);
console.log(balance);
console.log(balance.toString().length);
console.log(balance.toFixed(2));//2 igits after decimal
console.log(balance.toPrecision(2));//Returns a  string containing a number represented either exponential or fixed point notation with a specified no of digits

const  hunderes=2000000;
console.log(hunderes.toLocaleString('en-IN'));
// Number.MAX_SAFE_INTEGER=9007199254740991

//*************Maths********************* */
const val=-4;
// console.log(Math);
// console.log(Math.abs(val));//returns negetive to posotove number
// console.log(Math.round(5.66));
// console.log(Math.ceil(5.66));
// console.log(Math.floor(5.66));

console.log((Math.random()*10)+1);

const max=10
const min=55;
console.log(Math.floor(Math.random*(max-min)+1)+min);
