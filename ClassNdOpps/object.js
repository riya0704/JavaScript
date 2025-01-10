function multiplyBy5(num){
    return num*5;
}

multiplyBy5.power =3

console.log(multiplyBy5(5));
console.log(multiplyBy5.power);
console.log(multiplyBy5.prototype);



function createUser(username,score){
    this.username = username
    this.score = score
}


createUser.prototype.increment = function(){
    console.log(`increment is : ${this.score++}`);
}
createUser.prototype.printMe = function(){
   console.log(`Score of User ${this.score}`);
   
}

const user1 =new  createUser('First User',25)
const user2= new createUser('second User',255)

user1.printMe()
user1.increment()

/*
Here's what happens behind the scenes when the new keyword is used: 
A new object is created: The new keyword initiates the creation of new JavaScript Object.

A prototype is Linked: The newly created object gets linked to the prototype property of constructor function. This means that is has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguements and this is bound to the newly created object. Of no explicit return value is specified from the constructor.
JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doeesn't return
a non-primitve value (object,array,function , etc.), the newly created object is returned.
*/