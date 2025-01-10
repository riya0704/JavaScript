
let myHero = ['shaktiman','thor','spiderman']

let heroPower = {
    thor:'hammer',
    spiderman:'sling',
    shaktiman:'shakti',
    getSpiderPower : function(){
    //  console.log(`Shaktiman power is ${this.shaktiman}`);
    }
}

// heroPower.getSpiderPower();

// console.log(heroPower);
// 
Object.prototype.riya = function(){
    // console.log(`Riya is present in all objects`);
    
}
Array.prototype.HeyRiya= function(){
    // console.log('riya say hey');   
}


// heroPower.riya()

// myHero.riya();
// myHero.HeyRiya();
// heroPower.HeyRiya();


//inheritance

const User = {
    name: 'Riya',
    course:'JS'
}
const teacher = {
    makeVideo: true,
}
const teachingSupport = {
    isAvailable: false,
}
const TASupport = {
    makeAssignment : 'JS assignment',
    fullTime:true
}
teacher.__proto__ = User

//modern syntax

Object.setPrototypeOf(teachingSupport,teacher)

let myName = 'Riya       '
String.prototype.trueLength = function(){
    console.log(`${this}`);
    // console.log(`${this.myName}`);
    console.log(`True length of string is : ${this.trim().length}`);
    
}
myName.trueLength();
'RiyaVerma'.trueLength()
'JAVASCRIPT Course'.trueLength()
