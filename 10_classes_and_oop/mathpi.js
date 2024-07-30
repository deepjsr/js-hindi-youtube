const descriptor=Object.getOwnPropertyDescriptor(Math,'PI');

// console.log(descriptor);


const chai={
    name:"Ginger Tea",
    price:250,
    isAvailabe:true,

    orderChai:function () {
        console.log('Chai nei bani');
    }
}

console.log(Object.getOwnPropertyDescriptor(chai,'name'));

// Object.defineProperty(chai,'price',{
//     writable:false,
//     enumerable:false
// })
console.log(Object.getOwnPropertyDescriptor(chai,'price'));

for (let [key,value] of Object.entries(chai)) {

    if (typeof value !== 'function') {
        console.log(`${key}:${value}`);
        
    }
}