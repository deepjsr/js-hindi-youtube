const greatings=" Hello Sharks";

for (const great of greatings) {
    if (great=== ' ') {
        continue
    }
    // console.log(`Each char in greating is :${great}`);
}


// Maps -> holds only unique values as key value paire

const map=new Map();

map.set('In','India')
map.set('US','United States of America')
map.set('Fr','France')
map.set('It','Itali')
console.log(map);

for (const [key,value] of map) {
    console.log(`Short form of ${key} is ${value}.`);
}

// const myObject={
//     'game1':"NFS Rivel",
//     'game2':'COD'
// }
// for (const game of myObject) {
//     console.log(game);
// }


