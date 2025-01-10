function SetUsername(username){
    this.username = username;
}

function createUser(username,email,password){
    SetUsername.call(this,username)

    this.email = email;
    this.password = password;
}

const user= new createUser('Riya','Riya@microsoft.com',123)
console.log(user);
