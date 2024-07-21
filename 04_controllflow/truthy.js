const userEmail=['a'];
// if (userEmail) {
//     console.log('got the user');
// }
// else console.log('Please log in....!');

// false values
// false,0,-0,'',BigInt 0n,null,undefined,NaN
// truthy values
// true,'0'," ",[],{},function () {}

// if (Object.keys(userEmail).length===0) {
//     console.log('Object is empty');
// }
// if (userEmail.length===0) {
//     console.log('Array is empty');
// }

// Nullish Coalescing Operator ??: null undefined
let val1;
// val1=5 ?? 10;
// val1=null?? 10;
// val1=undefined?? 10;
val1=undefined?? 10??20;
console.log(val1);
