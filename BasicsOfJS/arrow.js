const user = {
    username : 'Riya',
    price : 999,
    welcomeMessage : function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this);
        
    }   
}
// user.welcomeMessage();
// user.username = 'Sam';
// user.welcomeMessage();
// console.log(this);

// function chai(){
//     const username = 'Riya';
//     //console.log(this.username); //undefined
// }
// chai();

// const chai = function(){
//     const username = 'Riya';
//     console.log(this.username); //undefined
// }
// chai();
//arrow function
const chai = () => {
    const username = 'Riya';
    console.log(this.username); //undefined
}
// chai();
//basic arrow function
// const addTwo = (num1, num2) => {
//  return num1+num2;
// }
//implicit return
const addTwo = (num1, num2) => num1+num2;
console.log(addTwo(2,3));   

const user1 = (name) => ({username:'Riya'})

console.log(user1("xyz"));
