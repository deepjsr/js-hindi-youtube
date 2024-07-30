// let myName='hitesh     '

// console.log(myName.length);

let myHeros=['thor','spiderman']

let heroPower={
    thor:'hammer',
    spiderman:'sling',

    getSpiderPower:function () {
        console.log(`Spidy power is ${this.spiderman}`);
    }

}

Object.prototype.hitesh=function () {
    console.log(`hitesh is omnipotent`);
}

Array.prototype.heyHitesh=function() {
    console.log(`Hitesh says hello`);
}
// heroPower.hitesh()
// myHeros.hitesh()
// myHeros.heyHitesh()

// inheritence

const  User={
    name:'cahi',
    email:'cahi@gmail.com'
}
const Teacher={
    makeVideo:true
}
const TeachingSupport={
    isAvailable:false
}
const TAsupport={
    makeAssignment:'Js assignment',
    fullTime:true,
    __proto__:TeachingSupport

}

Teacher.__proto__=User

// Modern Approch
Object.setPrototypeOf(TeachingSupport,Teacher)


let anotehrUsername='Himesh  '

String.prototype.trueLength=function () {
    console.log(`${this}`);
    console.log(`True Length is ${this.trim().length}`);
}




anotehrUsername.trueLength()
'Coimbatoor COffee'.trueLength()