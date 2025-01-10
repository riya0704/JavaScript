class User{
    constructor(username){
      this.username = username
    }

    logMe(){
        console.log(`Username is ${this.username}`);
        
    }
}


class Teacher extends User{
    constructor(username,password,email){
        super(username)
        this.email = email
        this.password = password
    }
    addCourse(){
        console.log(`New course was added by ${this.username}`);
        
    }
}

const admin = new Teacher('Riya','riya@microsoft.com',543)
admin.addCourse();

const secondAdmin = new User('RiyaVerma')
secondAdmin.logMe();

console.log(admin instanceof Teacher);
console.log(secondAdmin instanceof Teacher);
console.log(secondAdmin instanceof User);
