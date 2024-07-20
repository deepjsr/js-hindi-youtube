// array

const myarry=[11,22,3,true];
let newArray=new Array('p',99,'tr',99,84.09,88);
//   console.log(newArray[7]);//undefined
// myarry.unshift(5)//ads values to start of the array
// myarry.shift();
console.log(myarry.includes(8)); //false
console.log(myarry.indexOf(8));//-1
const newArr=myarry.join();
// console.log(newArr);

//slice, splice
const myArr=myarry.slice(1,3);
console.log(myArr);
console.log('A ',myarry);

const myArr1=myarry.splice(1,3)
console.log('B ',myarry);
console.log(myArr1);
