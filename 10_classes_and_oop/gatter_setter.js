class User{
    #pass;
    constructor(email,pass){
        this.email=email;
        this.pass=pass
    }


    get email(){
        return this._email.toLowerCase();
    }

    set email(value){
        return this._email=value
    }
    get pass(){
        return this._pass.toUpperCase()
    }
    set pass(value){
        // this.pass=value//Maximum call stack size exceeded
         this._pass=value;
    }
}

const hitesh=new User("h@gmail.com",'123');
console.log(hitesh.pass);