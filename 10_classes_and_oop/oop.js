function User(username,loginCount,isLoggedin){
    this.username=username;
    this.loginCount=loginCount;
    this.isLoggedin=isLoggedin;

   this.greeting= function greatin() {
        console.log(`Welcome to the program ${this.username}`);
    }

    return this
}

const useOne=User('Hitesh',15,false)
const userTwo= new User('Rmola',155,true)//new key wors creates a new instance of a function
console.log(useOne);
console.log(userTwo.constructor);