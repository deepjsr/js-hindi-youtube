// const tinderUser= new Object();
const tinderUser={}
tinderUser.id='123uq112';
tinderUser.name='123uq112';
tinderUser.isLoggedIn=false;
// console.log(tinderUser);
const regularUser={
    email:"omprakashmehra@gmail.com",
    fullname:{
        userfullname:{
            firstname:'opm'
        }

    }
}
// console.log(regularUser.fullname?.userfullname.firstname);
const obj1={
    1:'a',
    2:'b'
}

const obj2={
    3:'a',
    4:'b'
}
const obj3={obj1,obj2}
// const obj3=Object.assign({},obj1,obj2);
// const obj3={...obj1,...obj2};

// console.log(obj3);

const users=[
    {
        id:"001",
        name:'Jadhav'
    },
    {
        id:"002",
        name:'Madhav'
    },
    {
        id:"003",
        name:'Farooq'
    },
    {
        id:"004",
        name:'Lalit'
    }
]
// console.log(users[2].name);f

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty('isLoggedIn'));
const course={
    coursename:'Js in Hindi',
    price:1999,
    courseInstructor:'Hitesh'
}

const {courseInstructor:instructor}=course;//destructuring
// console.log(courseInstructor);
console.log(instructor);

