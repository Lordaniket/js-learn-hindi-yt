const score = 400
console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2)); // Numbers after decimal

const otherNumber = 23.8966
console.log(otherNumber.toPrecision(3));

const hundreds = 1000000
console.log(hundreds.toLocaleString()); // Adds commans by default to US standard
console.log(hundreds.toLocaleString('en-IN')); // Uses Indian Standard

// ************* MATHS *****************

console.log("*********************");

console.log(Math); // All the properties and stuff can be seen in browser console

console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.2));
console.log(Math.min(4,2,1,3));
console.log(Math.max(4,3,2,1));
console.log(Math.random()); // Value lies between 0 and 1 by default
console.log((Math.random()*10)+1); // Value between 1 and 9, 1 is added to avoid 0.01 and other values such
console.log(Math.floor(((Math.random()*10)+1))); // To get integer value, one of the ways


const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max-min+1))+min); // Now, the value lies between min and max
