// Subclassing in Solution 2

function userCreator(name,score){
    const newUser = Object.create(userFunctions);
    newUser.name = name;
    newUser.score = score;
    return newUser;
}

const userFunctions = {
    sayHello : function(){
        console.log(`I am ${this.name}`);
    },
    increment : function(){
        this.score++;
    }
}

const user1 = userCreator('Phil',5);
console.log(user1);
user1.sayHello();
user1.increment();
console.log(user1);

function paidUserCreator(paidName,paidScore,accountBalance){
    const newPaidUser = userCreator(paidName,paidScore);
    Object.setPrototypeOf(newPaidUser,paidUserFunctions);
    newPaidUser.accountBalance = accountBalance;
    return newPaidUser;
}

const paidUserFunctions = {
    increaseBalance : function(){
        this.accountBalance++;
    }
}

Object.setPrototypeOf(paidUserFunctions,userFunctions);
const paidUser1 = paidUserCreator('Anwar',0,0);
console.log(paidUser1);
paidUser1.increaseBalance();
console.log(paidUser1);
paidUser1.increment();
console.log(paidUser1.sayHello());

// Create an Object with new

function userCreatorWithNew(name,score){
    this.name = name;
    this.score = score;
}

userCreatorWithNew.prototype.sayName = function(){
    console.log(`I am ${this.name}`);
}

userCreatorWithNew.prototype.increaseScore = function(){
    this.score++;
}

const user2 = new userCreatorWithNew('Will',1);
console.log(user2);
user2.increaseScore();
console.log(user2);

function paidUserCreatorWithCall(paidName,paidScore,accoutBalance){
    userCreatorWithNew.call(this,paidName,paidScore);
    // userCreatorWithNew.apply(this,[paidName,paidScore]);
    this.accountBalance = accoutBalance;
}

paidUserCreatorWithCall.prototype = Object.create(userCreatorWithNew.prototype); 

const paidUser2 = new paidUserCreatorWithCall('Qamil',0,0);
console.log(paidUser2);
paidUser2.sayName();
paidUser2.increaseScore();
console.log(paidUser2);

paidUserCreatorWithCall.prototype.increaseBalance = function(){
    this.accountBalance++;
}
paidUser2.increaseBalance();
console.log(paidUser2);

// Create an Object with a class
// why subclass parameters not change when we inherit with extends
// =======

class UserCreator{
    constructor(name,score){
        this.name = name;
        this.score = score;
    }
    sayName = function(){
        console.log(`I am ${this.name}`);
    }
    increaseScore = function(){
        this.score++;
    }
}

class PaidUserCreator extends UserCreator{
    constructor(paidName,paidScore,accountBalance){
        super(paidName,paidScore);
        this.accountBalance = accountBalance;
    }
    increaseBalance = function(){
        this.accountBalance++;
    }
}

const user3 = new UserCreator('Mohsin',0);
console.log(user3);
user3.sayName();
user3.increaseScore();
console.log(user3);

const paidUser3 = new PaidUserCreator('Sikandar',0,0);
console.log(paidUser3);
paidUser3.increaseBalance();
paidUser3.sayName();
paidUser3.increaseScore();

console.log(paidUser3.accountBalance);

// Ask for call and apply
// paidName and paidScore change to name and score when extends and super use

// 07-10-2022

