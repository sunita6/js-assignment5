console.log("OOPS concept");
class User {
    constructor(name, age,email) {
      this.name = name;
      this.age = age;
      this.email = email;
      this.luCoins = 0;
      this.courses = [];
    }

    static greet(){
        console.log("Hello");
    }

    login(){
        console.log(`${this.name} has logged in`);
        return this;
    }
    
    logout(){
        console.log(`${this.name} has logged out`);
        return this;
    }
    addCoins(){
        this.Coins++;
        console.log(`${this.name} has ${this.Coins} coins`);
        return this;
    }
    getDetails(){
        console.log(`Name is ${this.name}, email is ${this.email}`);
        return this;
    }

}

class Moderator extends User{
    constructor(name,age,email,role){
        super(name,age,email);
        this.role = role;
    }

    deleteUser(user){
        users = users.filter(u =>{
            return u.email != user.email; 
        })
    }

}

class Admin extends Moderator{
   addCourse(user,course){
       user.courses.push(course);
       console.log(user);
   }
}


let user1 = new User('sunita',26,'sunita@gmail.com')
let user2 = new User('jaykaran',28,'jaikaran@gmail.com')
let mod = new Moderator('priya',22,'priya@gmail.com','Moderator');
let admin = new Admin('meeraj',25,'meeraj@gmail.com');
let users = [user1,user2,mod,admin];

users.forEach(element => {
    console.log(element);
});

User.greet();
admin.addCourse(user1,'Javascript');
admin.addCourse(user1,'Python');



