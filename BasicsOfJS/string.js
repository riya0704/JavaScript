// trim() : remove space 
 let firstname = "   Riya    ";
 //console.log(firstname.length);
firstname = firstname.trim()
//console.log(firstname);
 //let newString = firstname.trim()
 //console.log(newString);
 //console.log(newString.length);

 //toUpperCase() -- capitalized all words 
firstname = firstname.toUpperCase();
//console.log(firstname);

// toLowerCase()

firstname = firstname.toLowerCase();
//console.log(firstname);

//slice -- to take particular words from variables

let newString = firstname.slice(0,2);
//console.log(newString);

const score = 10;
const storeValue = 100.2;
const isLoggedIn = false;
const outsideTemp = null;

const Id = Symbol('123');
const anotherId = Symbol('123');
let useEmail;
console.log( Id === anotherId);

const bigNumber = 93702501970321820n;

//Array objects

const heros = ['superman','batman','wonderwoman'];
let myObj = {
    name:'riya',
    age:21,
}
console.log(myObj);

const  myFunction = function(){
    console.log('hey riya');
}

// console.log(typeof outsideTemp);


// Stack , Heap Memory

// Stack (primitive data types) , Heap Memory (reference data types)

let myYoutubename = 'riyavermadotcom';

let anotheName = myYoutubename;
anotheName = 'riya';
// console.log(myYoutubename);
// console.log(anotheName);


let userOne = {
    email:'google@org.com',
    upi:'google@upi'
}

let userTwo = userOne;

userTwo.email = 'riya@google.com';
// console.log(userOne.email); 
// console.log(userTwo.email);


const name = 'riya';
const project = 'javascript';

console.log(`hey my name is ${name} and my project is ${project}`);

const gameName = new  String('riya-verma');
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(5));

// console.log(gameName.indexOf('e'));

// const NewString = gameName.slice(-8,3);  
// console.log(NewString);

// console.log(gameName.substring(0,3));  //-ve value is not allowed


const newStringOne = "   riya   ";
// console.log(newStringOne.trim());
// console.log(newStringOne.trim().length);
// console.log(newStringOne);

// const url = 'https://riya.com/riya%20verma';
// console.log(url.replace('%20','_'));

// console.log(url.includes('xyz'))

//string conversion in array

console.log(gameName.split('-'))