// data types are categorized into primitive and non-primitive by how they are stored and fetched from memory

// primitive datatypes
/* 
7 Categories are there in total in priomitive
7 types: String, Number, Boolean, null (empty value), undefined, Symbol, BigInt (Scientific big values)
*/

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail; // Undefined value

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId); //false

const bigNumber = 3123455213312312312312312312312312312312312333123123551n //bigIint, n at the end represents bigInt


// Reference or Non-primitive datatypes
/*
Arrays, Objects, Functions
*/

const heroes = ["Shaktiman", "Naagraj", "Doga"]
let myObj = {
    name: "Piyush",
    age: 25,

}

const myFunction = function(){
    console.log("Hello World!");
    
}

console.log(typeof bigNumber);
console.log(typeof heroes);
console.log(typeof myObj);
console.log(typeof myFunction);

// In general all primitive datatypes are marked with typeof as 'Objects' except function which is either 'function' or 'object-function'/
