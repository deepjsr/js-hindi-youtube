class User{
    constructor(username){
        this.username=username;
    }

    logMe(){
        console.log(`Username is ${this.username}`);
    }
}


class Teacher extends User{
    constructor(username,email,password){
        super(username)
        this.email=email
        this.password=password
    }


    addCource(){
        console.log(`A new cource added by ${this.username }`);
    }
}

const teacherOne=new Teacher('chai','chai@gmail.com','123');
const masalachai=new User('masala cahi');
console.log(teacherOne.addCource());
console.log(masalachai.logMe());

console.log(teacherOne instanceof User);