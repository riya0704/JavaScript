//new keyword creates an empty object known as instance


const user = {
    username: 'Riya',
    loginCount: 8,
    signedIn:true,
    getUserDetails:function(){
       // console.log(this);
        console.log('got user details from db');
        console.log(`username: ${this.username}`);
     }
     
     
}
user.getUserDetails();
console.log(user.getUserDetails);
// console.log(user.username);
// console.log(user.getUserDetails);

// console.log(this);
console.log(user);

// console.log(user.username);


// const UserSecond = [
//     {
//         'username':'riya',
//         'signedIn':true,
//         'loginCount':4,
//         'getUserDetails':function(){
//             console.log('Get user data from db');
//             console.log(`username: ${this.username}`);
//         }
//     }
// ]
// console.log(UserSecond);


function User(username,loginCount,isLoggedIn){
    this.username= username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;
    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }
    return this
}
console.log(User.greeting);
const UserOne = new User('Riya',12,true);
const UserTwo = new User('RV',20,false);

console.log(UserOne.constructor);
console.log(UserTwo);
