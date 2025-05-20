// String Interpolation

const name = "Piyush"
const repCount = 50

console.log(name+" "+repCount+" is the actual value of the thing");

console.log(`${name} ${repCount} is the actual value of the thing`); // Back-ticks are used - String interpolation

const gameName = new String('PsGame') // This way when entered in console also shows mutliple methods and more information about string

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());


console.log(gameName.charAt(3));
console.log(gameName.indexOf('G'));

const newString = gameName.substring(1,5);
console.log(newString);

const anotherString1 = gameName.slice(0,4);
console.log(anotherString1);

const anotherString2 = gameName.slice(-8,4);
console.log(anotherString2);

const newStringOne = "   PSwithSpaces   "
console.log(newStringOne);
console.log(newStringOne.trim()); // trim start and trim end also available in documentation

const url = "https://piyush.com/piyush%20singhal" // %20 is replaced by URL encoding
console.log(url.replace('%20','-'))
console.log(url);

console.log(url.includes('singhal'));
console.log(url.includes('pk'));

const gameString = "The quick brown fox jumps under the lazy dog"
const gameStringConverted = gameString.split(' ')
const gameSplit = gameString.split('j')
console.log(gameStringConverted);
console.log(gameSplit);
console.log(typeof gameStringConverted); // object
