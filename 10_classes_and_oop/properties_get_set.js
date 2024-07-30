function User(email,password){
    this._email=email;
    this._password=password

    Object.defineProperty(this,'password',{
        get:function () {
          return  this._password.toUpperCase()            
        },
        set:function (val) {
            this.password= val            
        }
    })

    Object.defineProperty(this,'email',{
        get:function () {
          return  this._email.toUpperCase()            
        },
        set:function (val) {
            this._email= val            
        }
    })
}


const chai=new User('chai@gmail.com','abc123');
console.log(chai);