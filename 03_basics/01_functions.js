function calulatePrice(val1,val2,...num1){//'...' spread operator
    return num1;
}
console.log(calulatePrice(55,96,200,299,99));
function returnSecondValue(arrval) {
    return arrval[2];
}
console.log(returnSecondValue([34,88,'Kl raghul',809]));


/********************Important*******************/
const {PI,pow,floor}=Math;
console.log(findRadius(5.35));
function findRadius(_radius){
    return floor(PI*pow(_radius,2));
}
// const radius=5.2;
// const area=findRadius(radius)
// console.log(`The radius of the circle with the radius ${radius} is : ${area.toFixed(1)}`);


console.log(add(98));
const add=function addOne(num1) {
    return num1+1
}