// singleton

// object literals

// Object.create

const mySym = Symbol("Key1")  // Need to declare before use below in object

const JsUser = {           // keys are treated as strings here, i.e. name is equivalent to "name"
    name: "Piyush",
    "full name": "Piyush Singhal",   // can only be accessed via "JsUser["full name"]"
    [mySym]: "myKey1",  // Now it is a symbol, can only be accessed via "JsUser[mySym]" 
    age: 25,   // can be accessed via "JsUser.age" or "JsUser["age"]"
    location: "Gwalior",
    email: "ps@gmail.com",
    isLoggedIn: false,
    LastLoginDays: ["Monday", "Tuesday"]
}


console.log(JsUser.email);  // ps@gmail.com
console.log(JsUser["email"]);  // ps@gmail.com
console.log(JsUser["full name"]);   // Piyush Singhal
console.log(JsUser[mySym]);  // myKey1 which is a symbol
console.log(typeof JsUser[mySym]);  // String since value is a string but in actual printing of full object, it is shown as Symbol


JsUser.email = "Pk@google.com"
console.log(JsUser);
Object.freeze(JsUser);   // Now, objects wont be changed
JsUser.email = "PS@micro.com"   // No error, but no change will be reflected
console.log(JsUser);

const JsUser2 = {           // JsUser2 is declared since JsUser is frozen and hence more changes cant be done to it
    name: "Piyush",
    "full name": "Piyush Singhal",   
    [mySym]: "myKey1",  
    age: 25,   
    location: "Gwalior",
    email: "ps@gmail.com",
    isLoggedIn: false,
    LastLoginDays: ["Monday", "Tuesday"]
}

JsUser2.greeting = function(){
    console.log("Greetings user");
    
}

console.log(JsUser2.greeting); // only reference is shown since () are not used
console.log(JsUser2.greeting()); // actual function is called, also an undefined is shown, idk why, maybe later will know

JsUser2.greetingTwo = function(){
    console.log(`Greetings user ${JsUser2["full name"]}`);
    
}

console.log(JsUser2.greetingTwo()); // same here, undefined is shown, idk why

JsUser2.greetingThree = function(){
    console.log(`Greetings user ${this.email}`);  // also works, the reference is to the current object 0nly
}

console.log(JsUser2.greetingThree());

