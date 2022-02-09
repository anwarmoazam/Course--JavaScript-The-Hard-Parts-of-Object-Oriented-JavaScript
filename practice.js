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