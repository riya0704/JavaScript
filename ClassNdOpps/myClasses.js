//ES6

// class User {
//     constructor(username,email,password){
//         this.username = username;
//         this.email = email;
//         this.password = password;
//     }

//     encryptPassword(){
//         return `${this.password}abc`
//     }
//     UpdatedUserName(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const user1 = new User('Riya','riya@microsoft.com',234)
// console.log(user1.encryptPassword());

// console.log(user1.UpdatedUserName());


//behind the scenes

function userOne(username,email,password){
    this.username = username;
    this.email = email;
    this.password = password;
}

userOne.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
userOne.prototype.UpdatedUserName = function(){
    return `${this.username.toUpperCase()}`
}

const Credentials = new userOne('RiyaVerma','officialriya@microsoft.com',434)
console.log(Credentials.encryptPassword());

console.log(Credentials.UpdatedUserName());