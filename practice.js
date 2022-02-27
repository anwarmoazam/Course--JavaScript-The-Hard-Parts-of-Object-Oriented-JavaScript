console.log("Course--JavaScript The Hard Parts of Object Oriented JavaScript");

// Creating an Object

// creating user1
const user1 = {
    name: "Phil",
    score: 4,
    increament: function(){
        user1.score++;
    }
}

// console.log(user1);

// Creating user2 with dot notation
const user2 = {}; //create an empty object
user2.name = "Julia";
user2.score = 5;
user2.increament = function(){
    user2.score++;
};

// console.log(user2);

// Creating user3 using Object.create
const user3 = Object.create(null);
user3.name = "Eva";
user3.score = 9;
user3.increament = function(){
    user3.score++;
};

// console.log(user3);

// Generate objects using a function
function userCeater(name,score){
    const newUser = {};
    newUser.name = name;
    newUser.score = score;
    newUser.increament = function(){
        newUser.score++;
    }
    return newUser;
}

const user4 = userCeater("Anwar",11);
user4.increament();

// Avoid Duplication with Prototype

// Using the prototype chain
function userCreator(name,score){
    const newUser = Object.create(functionStore);
    newUser.name = name;
    newUser.score = score;
    return newUser;
}


const functionStore = {
    increament: function(){this.score++},
    // login: function(){console.log("You are logged in!!");}
    login: function(){console.log(`${this.name} is logged in!!`);}
};

const user5 = userCreator("Sikandar",5);
const user6 = userCreator("Anwar Moazam",15);

user5.increament();
console.log(user5);
user5.login();
user6.login();

function UserCreator(name,score){
    this.name = name;
    this.score = score;
}

// UserCreator.prototype.increament = function(){
//     this.score++;
// }

// We need to introduce arrow function - which bind this lexically
UserCreator.prototype.increament = function(){
    const add1 = ()=>{this.score++};
    add1();
}

UserCreator.prototype.login = function(){
    console.log(`${this.name} is logged in`);
}

const user7 = new UserCreator("Ankit Mathur", 20);
console.log(user7.score);
user7.increament();
console.log(user7.score);
console.log(user7.login());


// Creating Object with Class
class UserCreatorWithClass{
    constructor(name,score){
        this.name = name;
        this.score = score;
    }
    increament(){
        this.score++;
    }
    login(){
        console.log(`${this.name} is logged in`);
    }
}

const user8 = new UserCreatorWithClass('Nirbhay', 5);
console.log(user8.name);
user8.login();
user8.increament();

console.log(user8.score);
console.log(user8.hasOwnProperty('score'));
console.log(UserCreator.prototype);

// Subclassing in Solution 2

// Creating normal user
function userCreator1(name,score){
    const newUser = Object.create(userFunctions);
    newUser.name = name;
    newUser.score = score;
    return newUser;
}

userFunctions = {
    sayName: function(){
        console.log(`I am ${this.name}`);
    },
    increament: function(){
        this.score++;
    }
}

const user9 = userCreator1('Mohammad Qamil', 9);
console.log(user9);
user9.sayName();


// Creating paid user
function paidUserCreator(paidName, paidScore, accountBalance){
    const newPaidUser = userCreator1(paidName,paidScore);
    Object.setPrototypeOf(newPaidUser,paidUserFuntions);
    newPaidUser.accountBalance = accountBalance;
    return newPaidUser;
}

const paidUserFuntions = {
    increaseBalance: function(){
        this.accountBalance++;
    }
};

Object.setPrototypeOf(paidUserFuntions,userFunctions);

const user10 = userCreator1('Iqra',5);
console.log(user10);
user10.sayName();

const paidUser1 = paidUserCreator('Sana',3, 9);
paidUser1.sayName();
paidUser1.increaseBalance();
console.log(paidUser1.accountBalance);

// Subclassing in Solution 3

const obj = {
    num: 3,
    increament: function(){this.num++;}
};

const otherObj = {
    num: 10
};

obj.increament();
console.log(obj.num);

obj.increament.call(otherObj);

console.log(otherObj.num);

console.log(obj);
console.log(otherObj);

function userCreator2(name,score){
    this.name = name;
    this.score = score;
}

userCreator2.prototype.sayName = function(){
    console.log(`I am ${this.name}`);
}

userCreator2.prototype.increament = function(){
    this.score++;
}

const user11 = new userCreator2('Dinesh', 5);
console.log(user11);
user11.sayName();
user11.increament();
console.log(user11.score);

function paidUserCreator1(paidName,paidScore,accountBalance=0){
    userCreator2.call(this,paidName,paidScore);
    this.accountBalance = accountBalance;
}

paidUserCreator1.prototype = Object.create(userCreator2.prototype);

paidUserCreator1.prototype.increaseBalance = function(){
    this.accountBalance++;
}

const paidUser2 = new paidUserCreator1('Kuldeep Pal',18,99);
console.log(paidUser2);

paidUser2.sayName();
paidUser2.increament();
paidUser2.increaseBalance();


console.log(paidUser2.name);
console.log(paidUser2.score);
console.log(paidUser2.accountBalance);

// Subclassing in Solution 4

class userCreator3{
    constructor(name,score){
        this.name = name;
        this.score = score;
    }
    sayName(){
        console.log(`I am ${this.name}`)
    }
    increament(){
        this.score++
    }
}

const user12 = new userCreator3('Sikandar',12);
console.log(user12);
user12.sayName();

class paidUserCreator3 extends userCreator3 {
    constructor(paidName,paidScore,accountBalance=0){
        super(paidName,paidScore);
        this.accountBalance = accountBalance;
    }
    increaseBalance(){
        this.accountBalance++;
    }
}

const paidUser3 = new paidUserCreator3('Anwar Moazam',15,100);
console.log(paidUser3);
paidUser3.increaseBalance();
console.log(paidUser3);
paidUser3.sayName();