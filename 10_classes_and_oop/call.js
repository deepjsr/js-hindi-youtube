// call 
function setUsername(username) {
    this.username=username
    console.log('called');
}

    function createUser(username,email,password) {
        setUsername.call(this.username)
        this.email=email,
        this.password=password
}


console.log(new createUser('hitesh','hitesh@gmail.com',123));