console.log("Course--JavaScript-The-Hard-Parts-of-Object-Oriented-JavaScript");

console.log("Object Creation");

// Creating object using dot notation

const user2 = {};

user2.name = "Julia";
user2.score = 9;
user2.increment = function(){
    user2.score++;
}

console.log('User 2 : ',user2);
user2.increment();
console.log('User 2 : ',user2);

// Creating object using Object.create

const user3 = Object.create(null);

user3.name = "Eva";
user3.score = 3;
user3.increment = function(){
    user3.score++;
}

console.log('User 3 : ',user3);
user3.increment();
console.log('User 3 : ',user3);

// Solution 1. Generate objects using function

function userCreator(name, score){
    let newUser = {};
    newUser.name = name;
    newUser.score = score;
    newUser.increment = function(){
        newUser.score++;
    }
    return newUser;
}

const user4 = userCreator('Phil',4);
user4.increment();
console.log('User 4 : ',user4);

// Avoid Duplication with Prototype
// Using the prototype chain

const functionStore = {
    increment : function(){this.score++;},
    login : function(){console.log(`Welcome ${this.name}`);}
}

const user5 = {
    name : 'Phil',
    score : 5
}

console.log('User 5 : ',user5);
// user5.increment(); // Error! increment is not!

const user6 = Object.create(functionStore);
console.log('User 6 : ',user6);
user6.name = 'Anwar';
user6.score = 10;
user6.increment();
console.log('User 6 : ',user6);

function newUserCreator(name,score){
    const newUser = Object.create(functionStore);
    newUser.name = name;
    newUser.score = score;
    return newUser;
}

const user7 = newUserCreator('ABC',5);
user7.increment();
console.log('User 7 : ',user7);