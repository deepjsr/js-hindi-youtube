//  Unlike map(), forEach() always returns undefined and is not chainable.
const arr=['py','JSON','JS','Java']
// const arrVal=arr.forEach(element => {
//     console.log(element);
// });

const myNums=[1,2,3,4,5,6,7,8,9,10]

// const newNum=myNums.filter((item)=>{ return item<4});
// console.log(newNum);

const nums=[];

myNums.forEach((num)=>{
    if(num>4){
        nums.push(num);  
    }
})
// console.log(nums);

// Map
// const mnums=myNums.map((value)=> value/10);
// chainig of array functions
const nms=myNums
      .map((num) => num * 8)
      .map((nums) => nums / 8);

// console.log(nms);

// reduce in array

const mynewNums=[1,2,3,4,5,6,7,8,9,10];

// const myTotal= mynewNums.reduce((accumulator,currval1)=>{
//     console.log(`accumulator:${accumulator} and current value:${currval1}`);
//     return accumulator+currval1;
// },0)
// console.log(myTotal);



const shopCources = [
  {
    itemName: "Python",
    price: 1999,
  },
  {
    itemName: "Data Science",
    price: 2999,
  },
  {
    itemName: "Ruby on rails",
    price: 5699,
  },
  {
    itemName: "Swift",
    price: 15899,
  },
];

const courceTotal=shopCources.reduce((total,curTotal)=>{
    return total+curTotal.price;
},0)

console.log(`Total cost of the cource: ${(courceTotal.toFixed(2))}`);