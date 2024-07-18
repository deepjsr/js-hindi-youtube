const   name='Deep'
const   repoCount=50;
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);
const gameName=new String('hiteshhcl');
const mullaName=new String('AL-Ul-kayuum-khan');
// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('e'));

const newString=gameName.substring(0,4);//including start index and excluding last index ,we cannot pass -ve value
console.log(newString);
const anotherString=gameName.slice(-8,4)
console.log(anotherString);
const newString1="    deep";
console.log(newString1);
console.log(newString1.trim());
const url='https://assamupsc%20bagicha';
console.log(url.replace('%20','-'));
console.log(mullaName.split('-'));
