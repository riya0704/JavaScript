// type of operator

// data type(primitive data types)
//string "riya"
//number 1,2,3
//booleans
//undefined
//null
//BigInt
//symbol

let age = 24;
let firstname = "riya";
console.log(typeof age);
console.log(typeof 24);
console.log(typeof firstname);
console.log(typeof "riya");

//convert number to string

console.log(typeof (age + ""));

//convert string to number

let myStr = +"20";
console.log(typeof myStr);

let num = 10;
num = String(num);
console.log(typeof num);

//string concatenation
// to add two strings
let string1 = "jaya";
let string2 = "verma";

let fullname = string1 + " " + string2;
console.log(fullname);

//to add two numbers

let num1 = "10";
let num2 = "30";
let newNum = +num1 + +num2;
console.log(newNum);

///let myInfo = "my name is " + string1 + " and my age is " +num1;
let myInfo = `my name is ${string1} and my age is ${num1}`;
console.log(myInfo); 