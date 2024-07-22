const myObj={
    'js':"Javascript",
    'rb':"Ruby",
    'py':"Python"
}

for (const key in myObj) {
//    console.log(`${key} is for ${myObj[key]}`);
}

// const arr=['py','cpp','c','js'];

// for (const key in arr) {
//     console.log(arr[key]);
// }

// const map= new Map();

// map.set('In','India')
// map.set('US','United States of America')
// map.set('Fr','France')
// map.set('It','Itali')

// for (const key in map) {
//     console.log(key);
// }

// For each loop
const arr=['py','cpp','c','js','COBOL'];

arr.forEach((key,idx,arr)=>{
    // console.log(key,idx,arr);
})

const languageKnown=[
    {
        language:'Python',
        isKnown:false
    },
    {
        language:'Ruby',
        isKnown:true
    },
    {
        language:'Rust',
        isKnown:false
    }
]

languageKnown.forEach(element => {
    console.log(`Candidate knows ${element.language}: ${element.isKnown}`);
});