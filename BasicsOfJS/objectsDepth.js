
//object.create
//object literals
const mySym = Symbol('key1')
const JsUser = {
    name : 'Riya',
    "full name": 'Riya Verma',
    [mySym] : 'mykey1',
    age : 21,
    location:'bangalore',
    email:'riya@google.com',
    isLoggedIn:false,
    lastLogin:['Monday','Friday']
}

// console.log(JsUser.email);
// console.log(JsUser['full name']);
// console.log(JsUser[mySym]);


JsUser.email = 'riya@microsoft.com'
//Object.freeze(JsUser);
JsUser.email = 'riya@openai.com'
// console.log(JsUser);


JsUser.greeting = function(){
    // console.log('hey JS user');
    
}
console.log(JsUser.greeting());
JsUser.greetingTwo = function(){
    // console.log(`hey JS user, ${this.name}`);
    
}
// console.log(JsUser.greetingTwo());


//objects signleton

//declaration in 2 types
//1. const tinderUser = new Object()
//2. const tinderUser = {}

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Riya"
tinderUser.isLoggedIn = false
// console.log(tinderUser);

const regularUser = {
    email:'riya@gmail.com',
    fullname:{
        username:{
            firstName:'riya',
            lastname:'verma'
        }
    }
}


// console.log(regularUser.fullname?.username.email);

const obj1 = {
    1:'a',2:'b'
}
const obj2 = {
    3:'c',4:'d'
}
// const obj3 ={ obj1 , obj2}   //1st method

// const obj3 = Object.assign({} , obj1 , obj2)  //2nd method

//3rd method 
const obj3 = {...obj1,...obj2}
console.log(obj3 );

const user = [
    {
        id:1,
        name:'Riya',
        age:21
    },
    {
        id:2,
        name:'RiyaVerma',
        age:20
    }
]
// console.log(user[0]);

// console.log(Object.keys(tinderUser));

// console.log(Object.values(tinderUser));

// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('username'));


const course  = {
    coursename : 'Basics of JS',
    price : 1000,
    author : 'Riya',
} 

const {author : coder} = course 
// console.log(coder);

// const navBar = ({company}) => {

// }
// console.log(navbar(company = 'Riya'));
//prototype of api


// [
//     {},
//     {},
// ]