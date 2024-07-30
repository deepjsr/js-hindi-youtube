const User={
    _email:'ramilaThapar@gmail.com',
    _password:'ramilaThapar123@',
    get password(){
        return this._password.toUpperCase()
    },
    set password(val){
        return this._password=val
    }

}

// User.create({
//    _email:'ramilaThapar@gmail.com',
//   _password:'ramilaThapar123@'
// });


const tea =Object.create(User)
console.log(User.email);