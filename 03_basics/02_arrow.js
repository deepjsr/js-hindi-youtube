const user={
    username:'Hitesh',
    price:9999,
    welcomeMegssage:function(){
        console.log(`${this.username},welcome to website`);
        console.log(this);
    }

}
// user.welcomeMegssage();
// user.username='ram';
// user.welcomeMegssage();
// console.log(this);

// function chai() {
//     let username='hitesh'
//     console.log(this.username);
// }
// chai();

// const chai =()=>{
//     let username='Umesh'
//     console.log(this);
// }

// chai()

const newVar=(uname)=>({username:uname})//returning object 
console.log(newVar('Rahimutdoulla'));