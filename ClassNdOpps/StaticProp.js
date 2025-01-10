class User{
    constructor(username){
        this.username = username;
    }
    logMe(){
        console.log(`Username: ${this.username}`);
        
    }

    static uniqueId(){
        return `123${this.username}`
    }
}

const admin = new User('Riya')
// console.log(admin.uniqueId());


class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email = email
    }
}

const details = new Teacher('personOne','Person@user.com');
console.log(details.logMe());
console.log(details.uniqueId());
