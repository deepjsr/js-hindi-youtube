const promiseOne= new Promise(function(resolve,reject){
    setTimeout(() => {
        resolve()
        console.log('Async task is completed');
    }, 1000);
});

promiseOne.then(function () {
    console.log('Promis comsumed');
})

new Promise(function (resolve,reject) {
    setTimeout(() => {
        console.log('Async task 2');
        resolve()
    }, 1000);
}).then(function () {
    console.log('Async 2 resolved');
})

const promisThree=new Promise(function (resolve,reject) {
    setTimeout(() => {
        resolve({username:'chai',email:'cahi@gamil.com'})
    }, 1000);
})

promisThree.then(function (resTxt) {
    console.log(resTxt);
})

const promisFour= new Promise(function(resolve,reject){
    setTimeout(() => {
        let error=false;
        if(!error){
            resolve({username:'hitesh',password:'123'})
        }else{
            reject('ERROR:Server error')
        }
    }, 1000);
})

promisFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((userName) => {
    console.log(userName);
  })
  .catch((error) => {
    console.log(error);
  }).finally(()=>{
    console.log('The promis either be resolved or rejected');
  } )


  const promisFive= new Promise((resolve,reject)=>{
      setTimeout( function () {
          let error=true;
        if(!error){
        resolve({username:'hitesh',password:'123'})
    }else{
        reject('ERROR:Server error')
    }},1000)});


  async function consumePromisFive() {
    try {
        const response=await promisFive;
        console.log(response);
    } catch (error) {
        console.log(error);
    }
  }

  consumePromisFive()

//   async function getAllUser() {
//     const response= await fetch('https://jsonplaceholder.typicode.com/users')
//     const data= await response.json() ;
//     console.log(data);
//   }

//   getAllUser()


fetch('https://jsonplaceholder.typicode.com/users').then((res)=>{
return res.json();
    console.log(res);
}).then((data)=>{
    console.log(data);
})
.catch((e)=>{
    console.log('E:',e);
})