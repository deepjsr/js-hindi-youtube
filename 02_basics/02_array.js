const marvel_hero=['thor','ironman','blackwidow'];
const dc_hero=['superman','flash','batman'];
marvel_hero.push(dc_hero);
// console.log(marvel_hero);
// console.log(marvel_hero[3][1]);
// const allHeros=marvel_hero.concat(dc_hero);

const all_new_heros=[...marvel_hero,...dc_hero];
// console.log(all_new_heros);
const array_n=[89.99,3,44,['k','l','o'],'dd',['str1','str2','OP']];
// console.log(array_n.flat(Infinity));
console.log(Array.isArray('OP in the chat'));
console.log(Array.from('OP in the chat'));
console.log(Array.from({name:"Jagdeesh",class:21}));//imp. returns an empty array

let score=100
let score2=500
let score3=900

console.log(Array.of(score,score2,score3));